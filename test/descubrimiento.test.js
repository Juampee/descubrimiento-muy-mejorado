import { describe, it, expect, beforeEach } from 'vitest';
import meta from '../src/main.js';
import { detalleCarrito, detalleCampana, EVT_CARRITO, EVT_CAMPANA } from '../src/element.js';
import { CSS } from '../src/estilos.js';
import { readFileSync } from 'node:fs';
import { PRODUCTOS, PRODUCTOS_POR_ID, precioBF, filtrar, BLACK_FRIDAY } from '../src/catalogo.js';
import { TIPOS } from '../src/arte.js';
import { TIERRA } from '../src/tierra.js';

const montar = (attrs = {}) => {
  const el = document.createElement('ucjc-descubrimiento');
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  document.body.appendChild(el);
  return el;
};
const escuchar = (evt) => { const l = []; window.addEventListener(evt, (e) => l.push(e.detail)); return l; };

describe('contrato de carga', () => {
  beforeEach(() => { document.body.innerHTML = ''; });
  it('registra ucjc-descubrimiento y exporta { nombre, version }', () => {
    expect(customElements.get('ucjc-descubrimiento')).toBeTruthy();
    expect(meta).toEqual({ nombre: 'descubrimiento', version: '0.2.0' });
  });
  it('no toca nada fuera de su elemento', () => {
    const antes = document.head.innerHTML;
    montar();
    expect(document.head.innerHTML).toBe(antes);
    expect(document.body.children.length).toBe(1);
  });
});

describe('catálogo', () => {
  it('conserva ids y precios del catálogo anterior', () => {
    expect(PRODUCTOS_POR_ID['prod-101'].precio).toBe(19.99);
    expect(PRODUCTOS_POR_ID['prod-102'].precio).toBe(39.95);
    expect(PRODUCTOS_POR_ID['prod-108'].precio).toBe(5);
  });
  it('cada producto tiene ilustración y descuento BF', () => {
    PRODUCTOS.forEach((p) => {
      expect(TIPOS).toContain(p.tipo);
      expect(BLACK_FRIDAY.descuentos[p.id]).toBeGreaterThan(0);
    });
  });
  it('busca sin tildes y ordena', () => {
    expect(filtrar(PRODUCTOS, { texto: 'equipacion' }).map((p) => p.id)).toEqual(['prod-104']);
    const asc = filtrar(PRODUCTOS, { orden: 'precio-asc' });
    expect(asc[0].precio).toBeLessThanOrEqual(asc[asc.length - 1].precio);
    expect(filtrar(PRODUCTOS, { categoria: 'material' }).every((p) => p.categoria === 'material')).toBe(true);
  });
  it('precio BF redondeado a céntimos', () => {
    expect(precioBF(PRODUCTOS_POR_ID['prod-102'])).toBe(19.98);
  });
  it('hay puntos de tierra para el globo', () => {
    expect(TIERRA.length).toBeGreaterThan(1000);
  });
});

describe('anadir-al-carrito@1', () => {
  beforeEach(() => { document.body.innerHTML = ''; });
  it('el detail lleva SOLO los cuatro campos del contrato', () => {
    const d = detalleCarrito(PRODUCTOS_POR_ID['prod-102'], { cantidad: 2 });
    expect(Object.keys(d).sort()).toEqual(['cantidad', 'nombre', 'precio', 'productoId']);
    expect(d).toEqual({ productoId: 'prod-102', nombre: 'Sudadera con capucha', precio: 39.95, cantidad: 2 });
  });
  it('añadir rápido sin tallas emite el evento con el precio normal', () => {
    const ev = escuchar(EVT_CARRITO);
    const el = montar();
    el.shadowRoot.querySelector('[data-quick="prod-105"]').click();
    expect(ev.at(-1)).toEqual({ productoId: 'prod-105', nombre: 'Mochila UCJC', precio: 29.9, cantidad: 1 });
    expect(el.shadowRoot.querySelector('[data-bolsa]').textContent).toBe('1');
  });
  it('el mismo producto viaja siempre con el mismo id y nombre, y el mini carrito lo agrupa', () => {
    const ev = escuchar(EVT_CARRITO);
    const el = montar();
    const sr = el.shadowRoot;
    sr.querySelector('.quick-btn[data-quick="prod-101"]').click();
    sr.querySelector('[data-quick="prod-101"][data-talla="S"]').click();
    sr.querySelector('[data-color="tinta"][data-id="prod-101"]').click();
    sr.querySelector('.quick-btn[data-quick="prod-101"]').click();
    sr.querySelector('[data-quick="prod-101"][data-talla="XL"]').click();
    const dos = ev.slice(-2);
    expect(dos[0]).toEqual(dos[1]);
    expect(dos[0]).toEqual({ productoId: 'prod-101', nombre: 'Camiseta Técnica UCJC', precio: 19.99, cantidad: 1 });
    sr.querySelector('[data-mini]').click();
    const filas = sr.querySelectorAll('.mini-lista li');
    expect(filas.length).toBe(1);
    expect(filas[0].textContent).toContain('2 × 19,99');
  });
  it('con tallas pide la talla antes de emitir', () => {
    const ev = escuchar(EVT_CARRITO);
    const n = ev.length;
    const el = montar();
    el.shadowRoot.querySelector('.quick-btn[data-quick="prod-101"]').click();
    expect(ev.length).toBe(n);
    el.shadowRoot.querySelector('[data-quick="prod-101"][data-talla="L"]').click();
    expect(ev.at(-1).nombre).toBe('Camiseta Técnica UCJC');
  });
  it('la ficha exige talla y respeta la cantidad', () => {
    const ev = escuchar(EVT_CARRITO);
    const el = montar();
    el.abrirDetalle('prod-112');
    const sr = el.shadowRoot;
    const n = ev.length;
    sr.querySelector('[data-det-anadir]').click();
    expect(ev.length).toBe(n);
    sr.querySelector('[data-det-talla="S"]').click();
    sr.querySelector('[data-det-cant="1"]').click();
    sr.querySelector('[data-det-anadir]').click();
    expect(ev.at(-1)).toEqual({ productoId: 'prod-112', nombre: 'Jogger Villafranca', precio: 34, cantidad: 2 });
  });
});

describe('Black Friday', () => {
  beforeEach(() => { document.body.innerHTML = ''; });
  it('el modo BF no altera el catálogo normal y aplica su precio solo dentro', () => {
    const ev = escuchar(EVT_CARRITO);
    const el = montar({ modo: 'black-friday' });
    const sr = el.shadowRoot;
    expect(sr.querySelector('.d').dataset.modo).toBe('bf');
    sr.querySelector('.bf-grid [data-bf-anadir="prod-105"]').click();
    expect(ev.at(-1).precio).toBe(precioBF(PRODUCTOS_POR_ID['prod-105']));
    el.cambiarModo('normal', { sinCortina: true });
    expect(sr.querySelector('[data-vista-bf]').innerHTML).toBe('');
    sr.querySelector('[data-quick="prod-105"]').click();
    expect(ev.at(-1).precio).toBe(29.9);
  });
  it('campana-cambiada@1 se emite al cargar, al encender y al apagar, con su detail exacto', () => {
    const ev = escuchar(EVT_CAMPANA);
    const n = ev.length;
    const el = montar();
    expect(ev.length).toBe(n + 1);
    expect(ev.at(-1).activa).toBe(false);
    el.cambiarModo('bf', { sinCortina: true });
    expect(ev.at(-1).activa).toBe(true);
    el.cambiarModo('normal', { sinCortina: true });
    expect(ev.at(-1).activa).toBe(false);
    expect(ev.length).toBe(n + 3);
    const d = ev.at(-1);
    expect(Object.keys(d).sort()).toEqual(['activa', 'codigo', 'etiqueta', 'momento']);
    expect(d.codigo).toBe('black-friday-2026');
    expect(d.etiqueta).toBe('Black Friday UCJC');
    expect(Number.isNaN(Date.parse(d.momento))).toBe(false);
    expect(detalleCampana(true).activa).toBe(true);
  });
});

describe('presentacion-campus@1', () => {
  const fuentes = ['src/estilos.js', 'src/arte.js', 'src/catalogo.js', 'src/globo.js', 'src/element.js']
    .map((f) => [f, readFileSync(f, 'utf8')]);
  it('ningún !important', () => {
    fuentes.forEach(([, txt]) => expect(txt.includes('!' + 'important')).toBe(false));
    expect(CSS.includes('!' + 'important')).toBe(false);
  });
  it('cada color escrito a mano es solo un valor de reserva de un token --ucjc-*', () => {
    const hex = /#[0-9a-fA-F]{3,8}\b/g;
    fuentes.forEach(([f, txt]) => {
      txt.split('\n').forEach((linea) => {
        (linea.match(hex) || []).forEach(() => expect(`${f}: ${linea.trim()}`).toMatch(/--ucjc-[a-z-]+['"]?,\s*['"]?#/));
      });
      expect(txt).not.toMatch(/rgba?\(/);
    });
  });
  it('sin tipografía propia: solo los tokens de fuente', () => {
    expect(CSS).not.toMatch(/@font-face/);
    (CSS.match(/font-family:[^;}]+/g) || []).forEach((d) => expect(d).toMatch(/var\(--ucjc-font-(sans|display)/));
  });
});

describe('ocultos sin forzar', () => {
  it('[hidden] gana a las reglas de display de la pieza', () => {
    expect(CSS).toMatch(/\.d \[hidden\],\.d\[hidden\]\{display:none\}/);
  });
});
