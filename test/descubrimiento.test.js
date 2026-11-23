import { describe, it, expect, beforeEach } from 'vitest';
import meta from '../src/main.js';
import { detalleCarrito, EVT_CARRITO, EVT_CAMPANA } from '../src/element.js';
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
    expect(meta).toEqual({ nombre: 'descubrimiento', version: '0.1.0' });
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
    const d = detalleCarrito(PRODUCTOS_POR_ID['prod-102'], { talla: 'M', color: 'gris', cantidad: 2 });
    expect(Object.keys(d).sort()).toEqual(['cantidad', 'nombre', 'precio', 'productoId']);
    expect(d).toEqual({ productoId: 'prod-102', nombre: 'Sudadera con capucha · Talla M · Gris jaspe', precio: 39.95, cantidad: 2 });
  });
  it('añadir rápido sin tallas emite el evento con el precio normal', () => {
    const ev = escuchar(EVT_CARRITO);
    const el = montar();
    el.shadowRoot.querySelector('[data-quick="prod-105"]').click();
    expect(ev.at(-1)).toEqual({ productoId: 'prod-105', nombre: 'Mochila UCJC · Negro', precio: 29.9, cantidad: 1 });
    expect(el.shadowRoot.querySelector('[data-bolsa]').textContent).toBe('1');
  });
  it('con tallas pide la talla antes de emitir', () => {
    const ev = escuchar(EVT_CARRITO);
    const n = ev.length;
    const el = montar();
    el.shadowRoot.querySelector('.quick-btn[data-quick="prod-101"]').click();
    expect(ev.length).toBe(n);
    el.shadowRoot.querySelector('[data-quick="prod-101"][data-talla="L"]').click();
    expect(ev.at(-1).nombre).toBe('Camiseta Técnica UCJC · Talla L · Granate');
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
    expect(ev.at(-1)).toEqual({ productoId: 'prod-112', nombre: 'Jogger Villafranca · Talla S · Gris jaspe', precio: 34, cantidad: 2 });
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
  it('campana-cambiada@1 solo se emite con el atributo emitir-campana', () => {
    const ev = escuchar(EVT_CAMPANA);
    const el = montar();
    el.cambiarModo('bf', { sinCortina: true });
    expect(ev.length).toBe(0);
    const el2 = montar({ 'emitir-campana': '' });
    el2.cambiarModo('bf', { sinCortina: true });
    expect(Object.keys(ev.at(-1)).sort()).toEqual(['activa', 'codigo', 'etiqueta', 'momento']);
    expect(ev.at(-1).activa).toBe(true);
  });
});
