import { CSS } from './estilos.js';
import {
  CATEGORIAS, COLORES, PRODUCTOS, PRODUCTOS_POR_ID, BLACK_FRIDAY,
  precioBF, euros, filtrar, redondear,
} from './catalogo.js';
import { ilustracion } from './arte.js';
import { Globo, CIUDADES, MADRID } from './globo.js';

export const EVT_CARRITO = 'ucjc:descubrimiento:anadir-al-carrito@1';
export const EVT_CAMPANA = 'ucjc:descubrimiento:campana-cambiada@1';

const esc = (t) => String(t ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const nombreCat = (id) => (CATEGORIAS.find((c) => c.id === id) || {}).nombre || id;
const estrellas = (v) => `<span class="estrellas" style="--v:${(v / 5) * 100}%" aria-label="${String(v).replace('.', ',')} de 5">★★★★★</span>`;
const azar = (a) => a[Math.floor(Math.random() * a.length)];

/** Construye el detail EXACTO del contrato @1: productoId, nombre, precio, cantidad. Nada más. */
export function detalleCarrito(producto, { precio = producto.precio, cantidad = 1, talla = null, color = null } = {}) {
  const extra = [];
  if (talla) extra.push(`Talla ${talla}`);
  if (color && producto.colores.length > 1 && COLORES[color]) extra.push(COLORES[color].nombre);
  return {
    productoId: producto.id,
    nombre: extra.length ? `${producto.nombre} · ${extra.join(' · ')}` : producto.nombre,
    precio: redondear(precio),
    cantidad: Math.max(1, Math.floor(Number(cantidad) || 1)),
  };
}

const ICONO = {
  bolsa: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 8h14l-1.2 11.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
  lupa: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  cerrar: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  mas: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
  ok: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg>',
  rayo: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',
};

const CAPITULOS = [
  { id: 'intro', foco: null, zoom: 0.95 },
  { id: 'madrid', foco: MADRID, zoom: 1.8, producto: 'prod-102', lugar: 'Villafranca del Castillo', titulo: 'Todo empieza <em>en el campus</em>.', texto: 'La sudadera de siempre, la que se ve en cada pasillo, a mitad de precio solo estos cuatro días.' },
  { id: 'europa', foco: [47, 6], zoom: 1.55, producto: 'prod-101', lugar: 'Europa', titulo: 'Hasta donde <em>te lleve el Erasmus</em>.', texto: 'Lisboa, París, Berlín: la camiseta técnica llega en 48 horas.' },
  { id: 'america', foco: [8, -72], zoom: 1.35, producto: 'prod-110', lugar: 'Latinoamérica', titulo: 'Al otro lado <em>del Atlántico</em>.', texto: 'De Bogotá a Buenos Aires, antiguos alumnos que siguen llevando el campus consigo.' },
  { id: 'mundo', foco: null, zoom: 1, titulo: 'Ofertas relámpago' },
  { id: 'misterio', foco: [20, 120], zoom: 1.1, titulo: 'La caja misteriosa' },
  { id: 'todo', foco: null, zoom: 0.8, titulo: 'Todo el catálogo, rebajado' },
];

export class UcjcDescubrimiento extends HTMLElement {
  static get observedAttributes() { return ['modo']; }

  constructor() {
    super();
    this.estado = { categoria: 'todo', texto: '', orden: 'destacados' };
    this.colores = {};
    this.enBolsa = 0;
    this.modo = 'normal';
    this.tarjetas = new Map();
    this.detalle = null;
    this.reducido = !!globalThis.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    this._timers = [];
  }

  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this._montar();
    }
    if (this.getAttribute('modo') === 'black-friday') this.cambiarModo('bf', { sinCortina: true });
    if (this.hasAttribute('emitir-campana')) this._emitirCampana();
    this._heroGiro = setInterval(() => this._rotarHero(), 3800);
  }

  disconnectedCallback() {
    clearInterval(this._heroGiro);
    this._pararBF();
  }

  attributeChangedCallback(nombre, antes, ahora) {
    if (!this.shadowRoot || antes === ahora) return;
    this.cambiarModo(ahora === 'black-friday' ? 'bf' : 'normal');
  }

  $(s) { return this.shadowRoot.querySelector(s); }
  $$(s) { return [...this.shadowRoot.querySelectorAll(s)]; }

  /* ------------------------------------------------------------------ eventos */

  _emitirCarrito(detail) {
    window.dispatchEvent(new CustomEvent(EVT_CARRITO, { detail }));
  }

  /** Solo con el atributo `emitir-campana` (el contrato campana-cambiada@1 aún está «propuesto»). */
  _emitirCampana() {
    if (!this.hasAttribute('emitir-campana')) return;
    window.dispatchEvent(new CustomEvent(EVT_CAMPANA, {
      detail: { activa: this.modo === 'bf', codigo: BLACK_FRIDAY.codigo, etiqueta: BLACK_FRIDAY.etiqueta, momento: new Date().toISOString() },
    }));
  }

  /* ------------------------------------------------------------------ montaje */

  _montar() {
    const destacado = PRODUCTOS_POR_ID['prod-102'];
    this.shadowRoot.innerHTML = `<style>${CSS}</style>
    <div class="d" data-modo="normal" data-reducido="${this.reducido}">
      <header class="top">
        <div class="marca"><span class="sello">UCJC</span><span class="marca-txt">Tienda <b>Descubrimiento</b></span></div>
        <div class="modos" role="tablist" aria-label="Modo de la tienda">
          <span class="pildora" aria-hidden="true"></span>
          <button type="button" role="tab" data-modo="normal" aria-selected="true">Tienda</button>
          <button type="button" role="tab" data-modo="bf" aria-selected="false"><i class="led"></i>Black Friday</button>
        </div>
        <div class="bolsa" data-bolsa-ico title="Añadidos desde Descubrimiento">${ICONO.bolsa}<span data-bolsa>0</span></div>
      </header>

      <div class="vista vista-normal">
        <section class="hero">
          <div class="hero-txt">
            <p class="eyebrow"><span></span>Colección Campus · 26/27</p>
            <h1>Lo que se lleva<br>en el <em>campus</em>.</h1>
            <p class="lead">Ropa, material y regalos oficiales de la UCJC. Diseñados para el día a día en Villafranca, Almagro y Castellana.</p>
            <div class="hero-cta">
              <button type="button" class="btn primario" data-ir-catalogo>Ver colección</button>
              <button type="button" class="btn fantasma" data-modo="bf"><i class="led"></i>Black Friday · 27 nov</button>
            </div>
            <dl class="cifras"><div><dt>4,8</dt><dd>${estrellas(4.8)} 1.600 reseñas</dd></div><div><dt>24 h</dt><dd>Recogida en campus</dd></div><div><dt>30 días</dt><dd>Devolución gratis</dd></div></dl>
          </div>
          <div class="hero-arte" data-hero>
            <div class="mancha"></div>
            <div class="hero-prod" data-hero-prod data-id="${destacado.id}">${ilustracion(destacado, 'granate')}</div>
            <div class="flota f1"><b data-hero-nombre>${esc(destacado.nombre)}</b><small data-hero-precio>${euros(destacado.precio)}</small></div>
            <div class="flota f2">${estrellas(4.9)}<small>«La llevo a todas partes»</small></div>
          </div>
        </section>

        <div class="cinta" aria-hidden="true"><div class="cinta-pista">${Array(2).fill(['Envío gratis al campus', 'Recogida en 24 h', 'Devoluciones en 30 días', 'Producto oficial UCJC', 'Algodón orgánico', 'Ediciones limitadas']
          .map((t) => `<span>${t}</span><i>✦</i>`).join('')).join('')}</div></div>

        <section class="catalogo" data-catalogo>
          <div class="barra">
            <label class="buscador">${ICONO.lupa}<input type="search" placeholder="Busca sudaderas, tazas, mochilas…" aria-label="Buscar productos" data-buscar><kbd>/</kbd></label>
            <div class="cats" role="tablist" aria-label="Categorías">
              <span class="cats-ind" aria-hidden="true"></span>
              ${CATEGORIAS.map((c) => `<button type="button" role="tab" data-cat="${c.id}" aria-selected="${c.id === 'todo'}">${c.nombre}<sup>${c.id === 'todo' ? PRODUCTOS.length : PRODUCTOS.filter((p) => p.categoria === c.id).length}</sup></button>`).join('')}
            </div>
            <label class="orden"><span>Ordenar</span><select data-orden aria-label="Ordenar productos">
              <option value="destacados">Destacados</option><option value="precio-asc">Precio: menor a mayor</option>
              <option value="precio-desc">Precio: mayor a menor</option><option value="valoracion">Mejor valorados</option></select></label>
          </div>
          <p class="resultado" data-resultado aria-live="polite"></p>
          <div class="grid" data-grid></div>
          <div class="vacio" data-vacio hidden><b>Nada por aquí.</b><span>Prueba con otra palabra o mira toda la colección.</span><button type="button" class="btn fantasma" data-reset>Ver todo</button></div>
        </section>
      </div>

      <div class="vista vista-bf" data-vista-bf hidden></div>
      <div class="cortina" aria-hidden="true"><span>Black Friday</span></div>
      <div class="detalle" data-detalle hidden></div>
      <div class="toast" role="status" data-toast></div>
    </div>`;

    this.shadowRoot.addEventListener('click', (e) => this._clic(e));
    this.$('[data-buscar]').addEventListener('input', (e) => { this.estado.texto = e.target.value; this._pintarGrid(); });
    this.$('[data-orden]').addEventListener('change', (e) => { this.estado.orden = e.target.value; this._pintarGrid(); });
    this.$('[data-buscar]').addEventListener('keydown', (e) => { if (e.key === 'Escape') { e.target.value = ''; this.estado.texto = ''; this._pintarGrid(); } });
    this.shadowRoot.addEventListener('keydown', (e) => {
      if (e.key === '/' && !e.target.closest?.('input,select,textarea')) { e.preventDefault(); this.$('[data-buscar]').focus(); }
      if (e.key === 'Escape' && this.detalle) this.cerrarDetalle();
    });
    this.$('.d').addEventListener('pointermove', (e) => {
      if (this.modo !== 'bf') return;
      const r = this.$('.d').getBoundingClientRect();
      this.$('.d').style.setProperty('--mx', `${e.clientX - r.left}px`);
      this.$('.d').style.setProperty('--my', `${e.clientY - r.top}px`);
    });
    PRODUCTOS.forEach((p) => this.tarjetas.set(p.id, this._crearTarjeta(p)));
    this._pintarGrid(true);
    requestAnimationFrame(() => this._moverIndicadores());
  }

  /* -------------------------------------------------------------------- clics */

  _clic(e) {
    const t = e.target.closest('button, [data-abrir]');
    if (!t) return;
    const d = t.dataset;
    if (d.modo) return this.cambiarModo(d.modo);
    if (d.cat) { this.estado.categoria = d.cat; this.$$('[data-cat]').forEach((b) => b.setAttribute('aria-selected', String(b === t))); this._moverIndicadores(); return this._pintarGrid(); }
    if ('reset' in d) { this.estado = { categoria: 'todo', texto: '', orden: 'destacados' }; this.$('[data-buscar]').value = ''; this.$('[data-orden]').value = 'destacados'; this.$$('[data-cat]').forEach((b) => b.setAttribute('aria-selected', String(b.dataset.cat === 'todo'))); this._moverIndicadores(); return this._pintarGrid(); }
    if ('irCatalogo' in d) return this.$('[data-catalogo]').scrollIntoView({ behavior: this.reducido ? 'auto' : 'smooth', block: 'start' });
    if (d.color) return this._cambiarColor(d.id, d.color);
    if (d.abrir) return this.abrirDetalle(d.abrir, t.querySelector('.arte'));
    if (d.quick) {
      const p = PRODUCTOS_POR_ID[d.quick];
      if (p.tallas.length && !d.talla) return t.closest('.card').classList.toggle('elige-talla');
      t.closest('.card')?.classList.remove('elige-talla');
      return this.anadir(p, { talla: d.talla || null, color: this.colores[p.id] }, t.closest('.card').querySelector('.arte'));
    }
    if ('cerrar' in d) return this.cerrarDetalle();
    if (d.detColor) return this._detalleColor(d.detColor);
    if (d.detTalla) { this.detalle.talla = d.detTalla; this.$$('[data-det-talla]').forEach((b) => b.setAttribute('aria-pressed', String(b === t))); this.$('[data-det-aviso]').textContent = ''; return; }
    if (d.detCant) { this.detalle.cantidad = Math.max(1, Math.min(9, this.detalle.cantidad + Number(d.detCant))); this.$('[data-det-num]').textContent = this.detalle.cantidad; return; }
    if ('detAnadir' in d) return this._anadirDesdeDetalle(t);
    if (d.rel) { this.cerrarDetalle(true); return setTimeout(() => this.abrirDetalle(d.rel, this.tarjetas.get(d.rel)?.querySelector('.arte')), this.reducido ? 0 : 260); }
    if (d.bfAnadir) return this._anadirBF(t);
    if (d.ir != null) return this._irCapitulo(Number(d.ir));
    if ('misterio' in d) return this._abrirMisterio(t);
  }

  /* ---------------------------------------------------------------- catálogo */

  _crearTarjeta(p) {
    const color = this.colores[p.id] || p.colores[0];
    this.colores[p.id] = color;
    const a = document.createElement('article');
    a.className = 'card';
    a.dataset.id = p.id;
    a.style.setProperty('--tinte', COLORES[color].fondo);
    a.innerHTML = `
      <div class="card-visual"><button type="button" class="card-media" data-abrir="${p.id}" aria-label="Ver ${esc(p.nombre)}">
        ${p.etiqueta ? `<span class="tag">${esc(p.etiqueta)}</span>` : ''}
        <span class="arte">${ilustracion(p, color)}</span>
        <span class="ver">Ver producto →</span>
      </button>
      <div class="quick">
        <button type="button" class="quick-btn" data-quick="${p.id}">${ICONO.mas}<span>${p.tallas.length ? 'Añadir rápido' : 'Añadir'}</span></button>
        ${p.tallas.length ? `<div class="quick-tallas" role="group" aria-label="Elige talla">${p.tallas.map((t) => `<button type="button" data-quick="${p.id}" data-talla="${t}">${t}</button>`).join('')}</div>` : ''}
      </div></div>
      <div class="card-info">
        <div><h3>${esc(p.nombre)}</h3><p>${nombreCat(p.categoria)} · ${estrellas(p.valoracion)} <span class="n">(${p.resenas})</span></p></div>
        <b class="precio">${euros(p.precio)}</b>
      </div>
      <div class="swatches" role="radiogroup" aria-label="Color">${p.colores.map((c) => `<button type="button" role="radio" data-id="${p.id}" data-color="${c}" aria-checked="${c === color}" aria-label="${COLORES[c].nombre}" title="${COLORES[c].nombre}" style="--c:${COLORES[c].fondo}"></button>`).join('')}<span class="color-nombre">${COLORES[color].nombre}</span></div>`;
    return a;
  }

  _cambiarColor(id, color) {
    this.colores[id] = color;
    const card = this.tarjetas.get(id);
    const p = PRODUCTOS_POR_ID[id];
    card.style.setProperty('--tinte', COLORES[color].fondo);
    card.querySelectorAll('[data-color]').forEach((b) => b.setAttribute('aria-checked', String(b.dataset.color === color)));
    card.querySelector('.color-nombre').textContent = COLORES[color].nombre;
    const arte = card.querySelector('.arte');
    if (this.reducido || !arte.animate) { arte.innerHTML = ilustracion(p, color); return; }
    arte.animate([{ opacity: 1, transform: 'scale(1) rotate(0)' }, { opacity: 0, transform: 'scale(.86) rotate(-6deg)' }], { duration: 160, easing: 'ease-in' }).onfinish = () => {
      arte.innerHTML = ilustracion(p, color);
      arte.animate([{ opacity: 0, transform: 'scale(.86) rotate(6deg)' }, { opacity: 1, transform: 'scale(1) rotate(0)' }], { duration: 320, easing: 'cubic-bezier(.2,1.4,.4,1)' });
    };
  }

  _pintarGrid(inicial = false) {
    const grid = this.$('[data-grid]');
    const lista = filtrar(PRODUCTOS, this.estado);
    const antes = new Map();
    if (!inicial) [...grid.children].forEach((c) => antes.set(c.dataset.id, c.getBoundingClientRect()));
    grid.replaceChildren(...lista.map((p) => this.tarjetas.get(p.id)));
    this.$('[data-vacio]').hidden = lista.length > 0;
    const q = this.estado.texto.trim();
    this.$('[data-resultado]').textContent = `${lista.length} ${lista.length === 1 ? 'producto' : 'productos'}${q ? ` para «${q}»` : ''}${this.estado.categoria !== 'todo' ? ` en ${nombreCat(this.estado.categoria)}` : ''}`;
    if (this.reducido || !grid.animate) return;
    lista.forEach((p, i) => {
      const el = this.tarjetas.get(p.id);
      const r0 = antes.get(p.id);
      if (r0) {
        const r1 = el.getBoundingClientRect();
        const dx = r0.left - r1.left; const dy = r0.top - r1.top;
        if (dx || dy) el.animate([{ transform: `translate(${dx}px,${dy}px)` }, { transform: 'none' }], { duration: 520, easing: 'cubic-bezier(.2,.8,.2,1)' });
      } else {
        el.animate([{ opacity: 0, transform: 'translateY(28px) scale(.96)' }, { opacity: 1, transform: 'none' }], { duration: 560, delay: Math.min(i, 10) * 45, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'backwards' });
      }
    });
  }

  _moverIndicadores() {
    const mover = (contenedor, activo, ind) => {
      if (!contenedor || !activo || !ind) return;
      const c = contenedor.getBoundingClientRect(); const a = activo.getBoundingClientRect();
      ind.style.width = `${a.width}px`;
      ind.style.transform = `translateX(${a.left - c.left + contenedor.scrollLeft}px)`;
    };
    mover(this.$('.cats'), this.$('[data-cat][aria-selected="true"]'), this.$('.cats-ind'));
    mover(this.$('.modos'), this.$('.modos [aria-selected="true"]'), this.$('.pildora'));
  }

  _rotarHero() {
    if (this.modo !== 'normal' || document.hidden) return;
    const orden = ['prod-102', 'prod-101', 'prod-110', 'prod-109', 'prod-105', 'prod-113'];
    const caja = this.$('[data-hero-prod]');
    if (!caja) return;
    const sig = orden[(orden.indexOf(caja.dataset.id) + 1) % orden.length];
    const p = PRODUCTOS_POR_ID[sig];
    const poner = () => {
      caja.dataset.id = sig;
      caja.innerHTML = ilustracion(p, p.colores[0]);
      this.$('[data-hero-nombre]').textContent = p.nombre;
      this.$('[data-hero-precio]').textContent = euros(p.precio);
    };
    if (this.reducido || !caja.animate) return poner();
    caja.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateX(-40px) rotate(-8deg) scale(.9)' }], { duration: 380, easing: 'ease-in' }).onfinish = () => {
      poner();
      caja.animate([{ opacity: 0, transform: 'translateX(50px) rotate(10deg) scale(.9)' }, { opacity: 1, transform: 'none' }], { duration: 700, easing: 'cubic-bezier(.2,1.3,.3,1)' });
    };
  }

  /* -------------------------------------------------------------- añadir */

  anadir(producto, { precio = producto.precio, cantidad = 1, talla = null, color = null } = {}, origen = null) {
    const detail = detalleCarrito(producto, { precio, cantidad, talla, color });
    this._emitirCarrito(detail);
    this.enBolsa += detail.cantidad;
    const n = this.$('[data-bolsa]');
    n.textContent = this.enBolsa;
    this._volar(origen);
    this._toast(`<b>Añadido</b> ${esc(detail.nombre)}${detail.cantidad > 1 ? ` × ${detail.cantidad}` : ''} · ${euros(detail.precio)}`);
    return detail;
  }

  _volar(origen) {
    const bolsa = this.$('[data-bolsa-ico]');
    const bump = () => bolsa.animate?.([{ transform: 'scale(1)' }, { transform: 'scale(1.35)' }, { transform: 'scale(1)' }], { duration: 420, easing: 'cubic-bezier(.3,1.6,.5,1)' });
    if (this.reducido || !origen || !origen.animate) return bump();
    const a = origen.getBoundingClientRect(); const b = bolsa.getBoundingClientRect();
    if (!a.width) return bump();
    const fantasma = document.createElement('div');
    fantasma.className = 'vuelo';
    fantasma.innerHTML = origen.innerHTML;
    Object.assign(fantasma.style, { left: `${a.left}px`, top: `${a.top}px`, width: `${a.width}px`, height: `${a.height}px` });
    this.$('.d').appendChild(fantasma);
    const dx = b.left + b.width / 2 - (a.left + a.width / 2); const dy = b.top + b.height / 2 - (a.top + a.height / 2);
    fantasma.animate([
      { transform: 'translate(0,0) scale(1) rotate(0)', opacity: 1 },
      { transform: `translate(${dx * 0.45}px,${dy * 0.45 - 120}px) scale(.55) rotate(-14deg)`, opacity: 1, offset: 0.5 },
      { transform: `translate(${dx}px,${dy}px) scale(.08) rotate(10deg)`, opacity: 0.4 },
    ], { duration: 820, easing: 'cubic-bezier(.5,0,.3,1)' }).onfinish = () => { fantasma.remove(); bump(); };
  }

  _toast(html) {
    const t = this.$('[data-toast]');
    t.innerHTML = `<span class="toast-ok">${ICONO.ok}</span><span>${html}</span>`;
    t.classList.add('visible');
    clearTimeout(this._toastT);
    this._toastT = setTimeout(() => t.classList.remove('visible'), 2600);
  }

  /* -------------------------------------------------------------- detalle */

  abrirDetalle(id, origen = null) {
    const p = PRODUCTOS_POR_ID[id];
    if (!p) return;
    this.detalle = { id, color: this.colores[id] || p.colores[0], talla: null, cantidad: 1 };
    const caja = this.$('[data-detalle]');
    const rel = PRODUCTOS.filter((x) => x.id !== id && x.categoria === p.categoria).concat(PRODUCTOS.filter((x) => x.id !== id && x.categoria !== p.categoria)).slice(0, 4);
    caja.innerHTML = `
      <div class="det-fondo" data-cerrar></div>
      <div class="det-panel" role="dialog" aria-modal="true" aria-label="${esc(p.nombre)}">
        <button type="button" class="det-cerrar" data-cerrar aria-label="Cerrar">${ICONO.cerrar}</button>
        <div class="det-media" style="--tinte:${COLORES[this.detalle.color].fondo}">
          ${p.etiqueta ? `<span class="tag">${esc(p.etiqueta)}</span>` : ''}
          <div class="det-arte" data-det-arte>${ilustracion(p, this.detalle.color)}</div>
        </div>
        <div class="det-info">
          <p class="det-cat">${nombreCat(p.categoria)} · Producto oficial</p>
          <h2>${esc(p.nombre)}</h2>
          <p class="det-val">${estrellas(p.valoracion)} <b>${String(p.valoracion).replace('.', ',')}</b> <span>(${p.resenas} reseñas)</span></p>
          <p class="det-precio">${euros(p.precio)}<small>IVA incluido · recogida gratis en campus</small></p>
          <p class="det-desc">${esc(p.descripcion)}</p>
          <div class="det-bloque"><span class="det-et">Color · <b data-det-color-nombre>${COLORES[this.detalle.color].nombre}</b></span>
            <div class="swatches grandes">${p.colores.map((c) => `<button type="button" role="radio" data-det-color="${c}" aria-checked="${c === this.detalle.color}" aria-label="${COLORES[c].nombre}" style="--c:${COLORES[c].fondo}"></button>`).join('')}</div></div>
          ${p.tallas.length ? `<div class="det-bloque"><span class="det-et">Talla</span><div class="tallas">${p.tallas.map((t) => `<button type="button" data-det-talla="${t}" aria-pressed="false">${t}</button>`).join('')}</div><p class="det-aviso" data-det-aviso></p></div>` : ''}
          <div class="det-compra">
            <div class="cantidad"><button type="button" data-det-cant="-1" aria-label="Menos">−</button><span data-det-num>1</span><button type="button" data-det-cant="1" aria-label="Más">+</button></div>
            <button type="button" class="btn primario grande" data-det-anadir><span>Añadir a la cesta</span></button>
          </div>
          <details class="det-acc" open><summary>Detalles</summary><ul>${p.detalles.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></details>
          <details class="det-acc"><summary>Envío y devoluciones</summary><p>Recogida gratis en cualquier campus en 24 h. Envío a domicilio en 48–72 h. Tienes 30 días para devolverlo.</p></details>
          <div class="rel"><p class="det-et">Combina con</p><div class="rel-fila">${rel.map((r) => `<button type="button" class="rel-item" data-rel="${r.id}" style="--tinte:${COLORES[r.colores[0]].fondo}"><span class="arte">${ilustracion(r)}</span><small>${esc(r.nombre)}</small><b>${euros(r.precio)}</b></button>`).join('')}</div></div>
        </div>
      </div>`;
    caja.hidden = false;
    const panel = caja.querySelector('.det-panel');
    const destino = caja.querySelector('.det-arte');
    panel.querySelector('[data-cerrar]').focus({ preventScroll: true });
    if (this.reducido || !panel.animate) return;
    caja.querySelector('.det-fondo').animate([{ opacity: 0 }, { opacity: 1 }], { duration: 380, easing: 'ease-out' });
    panel.animate([{ opacity: 0, transform: 'translateY(40px) scale(.98)' }, { opacity: 1, transform: 'none' }], { duration: 520, easing: 'cubic-bezier(.2,.9,.2,1)' });
    // Morph de la ilustración desde la tarjeta hasta el panel (FLIP).
    if (origen) {
      const a = origen.getBoundingClientRect(); const b = destino.getBoundingClientRect();
      if (a.width && b.width) {
        const s = a.width / b.width;
        destino.animate([
          { transform: `translate(${a.left - b.left}px,${a.top - b.top}px) scale(${s})`, transformOrigin: 'top left' },
          { transform: 'none', transformOrigin: 'top left' },
        ], { duration: 640, easing: 'cubic-bezier(.2,.9,.1,1)' });
      }
    }
    panel.querySelectorAll('.det-info > *').forEach((el, i) => el.animate([{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'none' }], { duration: 480, delay: 120 + i * 40, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'backwards' }));
  }

  cerrarDetalle(rapido = false) {
    const caja = this.$('[data-detalle]');
    if (!this.detalle) return;
    const id = this.detalle.id;
    this.detalle = null;
    const fin = () => { caja.hidden = true; caja.innerHTML = ''; };
    if (this.reducido || rapido || !caja.animate) return fin();
    caja.querySelector('.det-fondo').animate([{ opacity: 1 }, { opacity: 0 }], { duration: 260, fill: 'forwards' });
    caja.querySelector('.det-panel').animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateY(30px) scale(.98)' }], { duration: 260, easing: 'ease-in', fill: 'forwards' }).onfinish = fin;
    this.tarjetas.get(id)?.querySelector('.card-media')?.focus({ preventScroll: true });
  }

  _detalleColor(color) {
    const p = PRODUCTOS_POR_ID[this.detalle.id];
    this.detalle.color = color;
    this.$$('[data-det-color]').forEach((b) => b.setAttribute('aria-checked', String(b.dataset.detColor === color)));
    this.$('[data-det-color-nombre]').textContent = COLORES[color].nombre;
    this.$('.det-media').style.setProperty('--tinte', COLORES[color].fondo);
    const arte = this.$('[data-det-arte]');
    arte.innerHTML = ilustracion(p, color);
    arte.animate?.([{ opacity: 0, transform: 'rotate(-5deg) scale(.92)' }, { opacity: 1, transform: 'none' }], { duration: this.reducido ? 0 : 420, easing: 'cubic-bezier(.2,1.3,.4,1)' });
    this._cambiarColor(p.id, color);
  }

  _anadirDesdeDetalle(boton) {
    const p = PRODUCTOS_POR_ID[this.detalle.id];
    if (p.tallas.length && !this.detalle.talla) {
      this.$('[data-det-aviso]').textContent = 'Elige una talla para continuar.';
      this.$('.tallas').animate?.([{ transform: 'translateX(0)' }, { transform: 'translateX(-8px)' }, { transform: 'translateX(8px)' }, { transform: 'translateX(0)' }], { duration: 300 });
      return;
    }
    this.anadir(p, { cantidad: this.detalle.cantidad, talla: this.detalle.talla, color: this.detalle.color }, this.$('[data-det-arte]'));
    boton.classList.add('hecho');
    boton.innerHTML = `${ICONO.ok}<span>Añadido</span>`;
    setTimeout(() => { if (boton.isConnected) { boton.classList.remove('hecho'); boton.innerHTML = '<span>Añadir otra vez</span>'; } }, 1600);
  }

  /* ------------------------------------------------------------ modo */

  cambiarModo(modo, { sinCortina = false } = {}) {
    if (modo === this.modo) return;
    this.modo = modo;
    this.$$('.modos [data-modo]').forEach((b) => b.setAttribute('aria-selected', String(b.dataset.modo === modo)));
    this._moverIndicadores();
    if (this.detalle) this.cerrarDetalle(true);
    const aplicar = () => {
      this.$('.d').dataset.modo = modo;
      this.$('.vista-normal').hidden = modo !== 'normal';
      this.$('[data-vista-bf]').hidden = modo !== 'bf';
      if (modo === 'bf') this._iniciarBF(); else this._pararBF();
      this._moverIndicadores();
    };
    this._emitirCampana();
    const cortina = this.$('.cortina');
    if (sinCortina || this.reducido || !cortina.animate) return aplicar();
    if (this.getBoundingClientRect().top < 0) this.scrollIntoView({ behavior: 'smooth', block: 'start' });
    cortina.classList.add('activa');
    cortina.dataset.hacia = modo;
    cortina.animate([{ clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0 0 0)' }], { duration: 420, easing: 'cubic-bezier(.7,0,.3,1)', fill: 'forwards' }).onfinish = () => {
      aplicar();
      cortina.animate([{ clipPath: 'inset(0 0 0 0)' }, { clipPath: 'inset(0 0 0 100%)' }], { duration: 520, delay: 160, easing: 'cubic-bezier(.7,0,.3,1)', fill: 'forwards' }).onfinish = () => cortina.classList.remove('activa');
    };
  }

  /* ------------------------------------------------------- Black Friday */

  _iniciarBF() {
    const vista = this.$('[data-vista-bf]');
    if (!vista.firstElementChild) vista.innerHTML = this._tplBF();
    const canvas = vista.querySelector('canvas');
    if (!this.globo && canvas.getContext && canvas.getContext('2d')) this.globo = new Globo(canvas, { reducido: this.reducido });
    this._stats = this._stats || { pedidos: 1284, ventas: 23517.4, paises: 19, porMin: 42 };
    this._timers.push(setInterval(() => this._latido(), this.reducido ? 2600 : 1400));
    this._timers.push(setInterval(() => this._reloj(), 1000));
    this._reloj();
    this._observarCapitulos();
  }

  _pararBF() {
    this._timers.forEach(clearInterval);
    this._timers = [];
    this._io?.disconnect();
    this._io = null;
    this.globo?.destruir();
    this.globo = null;
    const vista = this.$('[data-vista-bf]');
    if (vista) vista.innerHTML = '';
  }

  _tplBF() {
    const romanos = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];
    const tarjetaCap = (c, i) => {
      const p = PRODUCTOS_POR_ID[c.producto];
      return `<section class="cap cap-oferta" data-cap="${i}">
        <div class="cap-caja">
          <p class="cap-num">${romanos[i]} — ${c.lugar}</p>
          <h3>${c.titulo}</h3><p class="cap-txt">${c.texto}</p>
          ${this._tplOfertaBF(p, BLACK_FRIDAY.descuentos[p.id], 'grande')}
        </div></section>`;
    };
    return `
    <div class="bf" data-bf>
      <div class="bf-scroll" data-bf-scroll tabindex="0" aria-label="Black Friday: desliza para recorrer el mapa">
        <div class="bf-escena" data-escena>
          <canvas class="globo" aria-label="Mapa con pedidos simulados"></canvas>
          <dl class="hud libro">
            <div><dt>Pedidos / min</dt><dd data-s-min>42</dd></div>
            <div><dt>Vendido</dt><dd data-s-ventas>23.517 €</dd></div>
            <div><dt>Ciudades</dt><dd data-s-paises>19</dd></div>
          </dl>
          <p class="hud feed-et">Últimos pedidos</p>
          <ol class="hud feed" data-feed aria-live="off"></ol>
          <nav class="hud capitulos" aria-label="Capítulos">${CAPITULOS.map((c, i) => `<button type="button" data-ir="${i}" aria-label="Ir a ${c.titulo ? c.titulo.replace(/<[^>]+>/g, '') : 'inicio'}">${romanos[i]}</button>`).join('')}</nav>
          <p class="hud aviso-sim">Pedidos simulados para la demostración. El mapa se puede arrastrar.</p>
        </div>
        <div class="bf-caps">
          <section class="cap cap-intro" data-cap="0">
            <p class="bf-sello">Tienda UCJC · Edición limitada</p>
            <h2 class="bf-titulo"><span>Black</span><em>Friday</em></h2>
            <div class="bf-regla"></div>
            <p class="bf-sub">Del 27 al 30 de noviembre, hasta la mitad de precio en toda la colección.</p>
            <div class="reloj" data-reloj><p data-reloj-et>Empieza en</p><div><span><b data-r="d">00</b>días</span><span><b data-r="h">00</b>h</span><span><b data-r="m">00</b>min</span><span><b data-r="s">00</b>s</span></div></div>
            <p class="desliza">Desliza<span></span></p>
          </section>
          ${CAPITULOS.slice(1, 4).map((c, i) => tarjetaCap(c, i + 1)).join('')}
          <section class="cap cap-relampago" data-cap="4">
            <div class="cap-caja ancha">
              <p class="cap-num">V — Por tiempo limitado</p>
              <h3>Tres piezas, <em>unas horas</em>.</h3>
              <p class="cap-txt">Precio especial mientras dure el contador o queden unidades.</p>
              <div class="relampagos">${BLACK_FRIDAY.relampago.map((id, i) => { const p = PRODUCTOS_POR_ID[id]; return `<div class="relampago" data-relampago="${i}">${this._tplOfertaBF(p, BLACK_FRIDAY.descuentos[id] + 10, 'mini')}<div class="stock"><span>Quedan <b data-stock>${24 - i * 7}</b></span><i><em data-stock-barra style="width:${100 - i * 25}%"></em></i></div><p class="cuenta" data-cuenta>14:59</p></div>`; }).join('')}</div>
            </div>
          </section>
          <section class="cap cap-misterio" data-cap="5">
            <div class="cap-caja centro">
              <p class="cap-num">VI — Para quien llegue hasta aquí</p>
              <h3>El sobre <em>lacrado</em></h3>
              <p class="cap-txt">Uno por persona. Dentro, una pieza de la colección a&nbsp;−${BLACK_FRIDAY.misterio.descuento}&nbsp;%.</p>
              <button type="button" class="sobre" data-misterio aria-label="Abrir el sobre"><span class="solapa"></span><span class="lacre">U</span></button>
              <div class="premio" data-premio hidden></div>
            </div>
          </section>
          <section class="cap cap-todo" data-cap="6">
            <div class="cap-caja ancha">
              <p class="cap-num">VII — La colección</p>
              <h3>Todo, <em>rebajado</em>.</h3>
              <div class="bf-grid">${PRODUCTOS.map((p) => this._tplOfertaBF(p, BLACK_FRIDAY.descuentos[p.id], 'grid')).join('')}</div>
              <button type="button" class="btn fantasma claro volver" data-modo="normal">Volver a la tienda</button>
            </div>
          </section>
        </div>
      </div>
    </div>`;
  }

  _tplOfertaBF(p, desc, tam) {
    const final = precioBF(p, desc);
    const color = p.colores[0];
    const tallas = p.tallas.length
      ? `<div class="bf-tallas"><span>Elige talla para añadir</span>${p.tallas.map((t) => `<button type="button" data-bf-anadir="${p.id}" data-talla="${t}" data-desc="${desc}">${t}</button>`).join('')}</div>`
      : `<button type="button" class="btn bf-btn" data-bf-anadir="${p.id}" data-desc="${desc}">Añadir a la cesta</button>`;
    return `<article class="oferta oferta-${tam}">
      <div class="oferta-arte"><span class="desc">−${desc} %</span><span class="arte">${ilustracion(p, color)}</span></div>
      <div class="oferta-info"><h4>${esc(p.nombre)}</h4><p class="precios"><b>${euros(final)}</b><s>${euros(p.precio)}</s></p></div>
      ${tallas}
    </article>`;
  }

  _anadirBF(boton) {
    const p = PRODUCTOS_POR_ID[boton.dataset.bfAnadir];
    const desc = Number(boton.dataset.desc);
    const origen = boton.closest('.oferta, .premio')?.querySelector('.arte');
    this.anadir(p, { precio: precioBF(p, desc), talla: boton.dataset.talla || null, color: p.colores[0] }, origen);
  }

  _latido() {
    const s = this._stats;
    const [ciudad, la, lo] = azar(CIUDADES);
    const p = azar(PRODUCTOS);
    const n = 1 + Math.floor(Math.random() * 3);
    s.pedidos += n;
    s.ventas += precioBF(p) * n;
    s.porMin = Math.max(18, Math.min(140, s.porMin + Math.round((Math.random() - 0.45) * 8)));
    if (Math.random() < 0.08 && s.paises < CIUDADES.length) s.paises++;
    this.globo?.disparar([la, lo], ciudad);
    const set = (sel, v) => { const el = this.$(sel); if (el) el.textContent = v; };
    set('[data-s-min]', s.porMin);
    set('[data-s-ventas]', `${Math.round(s.ventas).toLocaleString('es-ES')} €`);
    set('[data-s-paises]', s.paises);
    const feed = this.$('[data-feed]');
    if (feed) {
      const li = document.createElement('li');
      li.innerHTML = `<b>${esc(ciudad)}</b><span>${esc(p.nombre)}</span>`;
      feed.prepend(li);
      while (feed.children.length > 5) feed.lastElementChild.remove();
    }
  }

  _reloj() {
    const ahora = Date.now();
    const ini = Date.parse(BLACK_FRIDAY.inicio); const fin = Date.parse(BLACK_FRIDAY.fin);
    const objetivo = ahora < ini ? ini : fin;
    const et = this.$('[data-reloj-et]');
    if (et) et.textContent = ahora < ini ? 'Empieza en' : ahora < fin ? 'Termina en' : 'Ha terminado (pero las ofertas siguen en la demo)';
    let r = Math.max(0, objetivo - ahora) / 1000;
    const v = { d: Math.floor(r / 86400), h: Math.floor((r % 86400) / 3600), m: Math.floor((r % 3600) / 60), s: Math.floor(r % 60) };
    Object.entries(v).forEach(([k, n]) => { const el = this.$(`[data-r="${k}"]`); if (el) el.textContent = String(n).padStart(2, '0'); });
    // Relámpagos: ventanas de 15 min y stock que baja.
    this.$$('[data-relampago]').forEach((el, i) => {
      const ventana = 15 * 60;
      const resto = ventana - (Math.floor(ahora / 1000 + i * 293) % ventana);
      el.querySelector('[data-cuenta]').textContent = `${String(Math.floor(resto / 60)).padStart(2, '0')}:${String(resto % 60).padStart(2, '0')}`;
      const st = el.querySelector('[data-stock]');
      let n = Number(st.textContent);
      if (Math.random() < 0.18) n = n <= 1 ? 30 - i * 6 : n - 1;
      st.textContent = n;
      el.querySelector('[data-stock-barra]').style.width = `${Math.min(100, (n / 30) * 100)}%`;
      el.classList.toggle('casi', n <= 5);
    });
  }

  _observarCapitulos() {
    const raiz = this.$('[data-bf-scroll]');
    if (!raiz || typeof IntersectionObserver === 'undefined') return;
    this._io = new IntersectionObserver((entradas) => {
      entradas.forEach((e) => {
        if (!e.isIntersecting) return;
        const i = Number(e.target.dataset.cap);
        const c = CAPITULOS[i];
        e.target.classList.add('visto');
        this.$$('.capitulos [data-ir]').forEach((b, j) => b.classList.toggle('activo', j === i));
        this.$('[data-escena]').dataset.cap = c.id;
        if (!this.globo) return;
        this.globo.etiquetas = !['intro', 'todo'].includes(c.id);
        if (c.foco) this.globo.enfocar(c.foco[0], c.foco[1], c.zoom); else this.globo.liberar(c.zoom);
      });
    }, { root: raiz, rootMargin: '-45% 0px -45% 0px', threshold: 0 });
    this.$$('[data-cap]').forEach((s) => this._io.observe(s));
  }

  _irCapitulo(i) {
    const sc = this.$('[data-bf-scroll]'); const sec = this.$(`[data-cap="${i}"]`);
    if (!sc || !sec) return;
    sc.scrollTo({ top: sc.scrollTop + sec.getBoundingClientRect().top - sc.getBoundingClientRect().top, behavior: this.reducido ? 'auto' : 'smooth' });
  }

  _abrirMisterio(boton) {
    if (boton.classList.contains('abierta')) return;
    boton.classList.add('abierta');
    setTimeout(() => boton.classList.add('guardada'), this.reducido ? 0 : 650);
    setTimeout(() => {
      const { id, descuento } = BLACK_FRIDAY.misterio;
      const premio = this.$('[data-premio]');
      premio.innerHTML = `<p class="premio-et">Dentro había…</p>${this._tplOfertaBF(PRODUCTOS_POR_ID[id], descuento, 'grande')}`;
      premio.hidden = false;
      premio.animate?.([{ opacity: 0, transform: 'translateY(24px)' }, { opacity: 1, transform: 'none' }], { duration: 900, easing: 'cubic-bezier(.2,.8,.2,1)' });
    }, this.reducido ? 0 : 1100);
  }
}
