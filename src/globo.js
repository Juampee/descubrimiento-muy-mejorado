/**
 * Globo en directo (canvas 2D, proyección ortográfica). Inspirado en el mapa/globo en vivo
 * que Shopify publica cada Black Friday: arcos de luz desde la tienda hasta cada compra.
 * Sin dependencias: solo una nube de puntos de tierra generada en build (src/tierra.js).
 */
import { TIERRA } from './tierra.js';

const RAD = Math.PI / 180;
export const MADRID = [40.43, -3.98]; // Campus de Villafranca del Castillo (aprox.)

export const CIUDADES = [
  ['Madrid', 40.42, -3.7], ['Barcelona', 41.39, 2.17], ['Sevilla', 37.39, -5.98], ['Valencia', 39.47, -0.38],
  ['Bilbao', 43.26, -2.93], ['Lisboa', 38.72, -9.14], ['París', 48.86, 2.35], ['Londres', 51.5, -0.12],
  ['Berlín', 52.52, 13.4], ['Roma', 41.9, 12.5], ['Ámsterdam', 52.37, 4.9], ['Dublín', 53.35, -6.26],
  ['Nueva York', 40.71, -74], ['Miami', 25.76, -80.19], ['Los Ángeles', 34.05, -118.24], ['Toronto', 43.65, -79.38],
  ['Ciudad de México', 19.43, -99.13], ['Bogotá', 4.71, -74.07], ['Lima', -12.05, -77.04], ['Santiago', -33.45, -70.67],
  ['Buenos Aires', -34.6, -58.38], ['São Paulo', -23.55, -46.63], ['Quito', -0.18, -78.47], ['Caracas', 10.48, -66.9],
  ['Marrakech', 31.63, -7.98], ['Lagos', 6.52, 3.38], ['Nairobi', -1.29, 36.82], ['Ciudad del Cabo', -33.92, 18.42],
  ['Dubái', 25.2, 55.27], ['Bombay', 19.08, 72.88], ['Singapur', 1.35, 103.82], ['Shanghái', 31.23, 121.47],
  ['Seúl', 37.57, 126.98], ['Tokio', 35.68, 139.69], ['Sídney', -33.87, 151.21], ['Auckland', -36.85, 174.76],
];

function aVector(lat, lon) {
  const p = lat * RAD; const l = lon * RAD;
  return [Math.cos(p) * Math.cos(l), Math.cos(p) * Math.sin(l), Math.sin(p)];
}
function aLatLon([x, y, z]) {
  return [Math.asin(Math.max(-1, Math.min(1, z))) / RAD, Math.atan2(y, x) / RAD];
}
function slerp(a, b, t) {
  const d = Math.max(-1, Math.min(1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2]));
  const w = Math.acos(d);
  if (w < 1e-6) return a;
  const s = Math.sin(w);
  const k1 = Math.sin((1 - t) * w) / s; const k2 = Math.sin(t * w) / s;
  return [a[0] * k1 + b[0] * k2, a[1] * k1 + b[1] * k2, a[2] * k1 + b[2] * k2];
}

export class Globo {
  constructor(canvas, { reducido = false } = {}) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.reducido = reducido;
    this.lon = 10; this.lat = 22; // centro actual
    this.objLon = null; this.objLat = 22; this.zoom = 1; this.objZoom = 1;
    this.giro = reducido ? 0 : 0.035;
    this.arcos = [];
    this.etiquetas = false;
    this.pings = [];
    this.arrastrando = null;
    this.vivo = true;
    this._t0 = performance.now();
    this._medir();
    this._ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(() => this._medir()) : null;
    this._ro?.observe(canvas);
    this._enlazarPuntero();
    this._cuadro = this._cuadro.bind(this);
    this._raf = requestAnimationFrame(this._cuadro);
  }

  destruir() {
    this.vivo = false;
    cancelAnimationFrame(this._raf);
    this._ro?.disconnect();
  }

  /** Lleva la cámara a un punto (lat, lon) con un zoom dado. */
  enfocar(lat, lon, zoom = 1) {
    this.objLat = lat; this.objLon = lon; this.objZoom = zoom;
  }

  liberar(zoom = 1) {
    this.objLon = null; this.objLat = 18; this.objZoom = zoom;
  }

  disparar(destino, nombre = '', origen = MADRID) {
    if (this.arcos.length > 40) this.arcos.shift();
    this.arcos.push({ a: aVector(...origen), b: aVector(...destino), t: 0, dest: destino, nombre });
  }

  _medir() {
    const r = this.canvas.getBoundingClientRect();
    const dpr = Math.min(2, globalThis.devicePixelRatio || 1);
    this.w = Math.max(1, r.width); this.h = Math.max(1, r.height);
    this.canvas.width = Math.round(this.w * dpr); this.canvas.height = Math.round(this.h * dpr);
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  _enlazarPuntero() {
    const c = this.canvas;
    c.addEventListener('pointerdown', (e) => {
      this.arrastrando = { x: e.clientX, y: e.clientY, lon: this.lon, lat: this.lat };
      this.objLon = null;
      c.setPointerCapture?.(e.pointerId);
    });
    c.addEventListener('pointermove', (e) => {
      if (!this.arrastrando) return;
      const k = 120 / (this.R || 200);
      this.lon = this.arrastrando.lon - (e.clientX - this.arrastrando.x) * k;
      this.lat = Math.max(-60, Math.min(70, this.arrastrando.lat + (e.clientY - this.arrastrando.y) * k));
      this.objLat = this.lat;
    });
    const fin = () => { this.arrastrando = null; };
    c.addEventListener('pointerup', fin);
    c.addEventListener('pointercancel', fin);
  }

  _proy(lat, lon, alt = 1) {
    const p = lat * RAD; const dl = (lon - this.lon) * RAD; const p0 = this.lat * RAD;
    const cosc = Math.sin(p0) * Math.sin(p) + Math.cos(p0) * Math.cos(p) * Math.cos(dl);
    const R = this.R * alt;
    const x = this.cx + R * Math.cos(p) * Math.sin(dl);
    const y = this.cy - R * (Math.cos(p0) * Math.sin(p) - Math.sin(p0) * Math.cos(p) * Math.cos(dl));
    const delante = cosc > 0 || Math.hypot(x - this.cx, y - this.cy) > this.R;
    return { x, y, cosc, delante };
  }

  _cuadro(ahora) {
    if (!this.vivo) return;
    const dt = Math.min(64, ahora - (this._ult || ahora)); this._ult = ahora;
    // Cámara
    if (this.objLon != null) {
      let d = ((this.objLon - this.lon + 540) % 360) - 180;
      this.lon += d * 0.05;
    } else if (!this.arrastrando) {
      this.lon += this.giro * dt * 0.1;
    }
    if (!this.arrastrando) this.lat += (this.objLat - this.lat) * 0.05;
    this.zoom += (this.objZoom - this.zoom) * 0.06;
    this._pintar(ahora, dt);
    this._raf = requestAnimationFrame(this._cuadro);
  }

  _pintar(ahora, dt) {
    const { ctx, w, h } = this;
    this.cx = w / 2; this.cy = h / 2;
    this.R = Math.min(w, h) * 0.42 * this.zoom;
    const { cx, cy, R } = this;
    const CREMA = '239,232,221';
    ctx.clearRect(0, 0, w, h);

    // Esfera: tinta lisa con un filete crema, como una lámina de atlas.
    ctx.fillStyle = '#14110f';
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = `rgba(${CREMA},.35)`; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.stroke();
    ctx.strokeStyle = `rgba(${CREMA},.12)`;
    ctx.beginPath(); ctx.arc(cx, cy, R + 7, 0, Math.PI * 2); ctx.stroke();

    // Retícula fina
    ctx.strokeStyle = `rgba(${CREMA},.07)`; ctx.lineWidth = 0.75;
    for (let lon = -180; lon < 180; lon += 20) this._linea(Array.from({ length: 37 }, (_, i) => [-90 + i * 5, lon]));
    for (let lat = -60; lat <= 60; lat += 20) this._linea(Array.from({ length: 73 }, (_, i) => [lat, -180 + i * 5]));

    // Tierra en punteado
    const r = Math.max(0.7, R / 300);
    ctx.fillStyle = `rgb(${CREMA})`;
    for (let i = 0; i < TIERRA.length; i++) {
      const [la, lo] = TIERRA[i];
      const p = this._proy(la, lo);
      if (p.cosc <= 0.02) continue;
      ctx.globalAlpha = 0.12 + p.cosc * 0.55;
      ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2); ctx.fill();
    }
    ctx.globalAlpha = 1;

    const etiqueta = (txt, x, y, alfa) => {
      if (!this.etiquetas) return;
      ctx.font = `italic ${Math.round(Math.max(11, R / 26))}px "Playfair Display", Georgia, serif`;
      ctx.fillStyle = `rgba(${CREMA},${alfa})`;
      ctx.fillText(txt, x + 8, y - 6);
    };

    // Arcos: trazo fino granate → crema
    const vel = this.reducido ? 1 : dt / 2200;
    this.arcos = this.arcos.filter((a) => a.t < 1.8);
    for (const a of this.arcos) {
      a.t += vel;
      const cabeza = Math.min(1, a.t); const cola = Math.max(0, a.t - 0.8);
      const dist = Math.acos(Math.max(-1, Math.min(1, a.a[0] * a.b[0] + a.a[1] * a.b[1] + a.a[2] * a.b[2])));
      const altura = 0.05 + dist * 0.1;
      const N = 40; let prev = null;
      for (let i = 0; i <= N; i++) {
        const t = cola + (cabeza - cola) * (i / N);
        const [la, lo] = aLatLon(slerp(a.a, a.b, t));
        const p = this._proy(la, lo, 1 + Math.sin(Math.PI * t) * altura);
        if (prev && p.delante && prev.delante) {
          const f = i / N;
          ctx.strokeStyle = f > 0.85 ? `rgba(${CREMA},${0.9 * f})` : `rgba(192,123,146,${0.15 + f * 0.6})`;
          ctx.lineWidth = 0.6 + f * 0.8;
          ctx.beginPath(); ctx.moveTo(prev.x, prev.y); ctx.lineTo(p.x, p.y); ctx.stroke();
        }
        prev = p;
      }
      if (a.t >= 1 && !a.llegado) { a.llegado = true; this.pings.push({ dest: a.dest, nombre: a.nombre, t: 0 }); }
    }

    // Llegadas: punto y nombre de la ciudad en cursiva
    this.pings = this.pings.filter((p) => p.t < 1);
    for (const g of this.pings) {
      g.t += this.reducido ? 1 : dt / 2600;
      const p = this._proy(...g.dest);
      if (p.cosc <= 0.05) continue;
      const alfa = g.t < 0.15 ? g.t / 0.15 : 1 - (g.t - 0.15) / 0.85;
      ctx.strokeStyle = `rgba(${CREMA},${alfa * 0.6})`; ctx.lineWidth = 0.75;
      ctx.beginPath(); ctx.arc(p.x, p.y, 3 + g.t * 6, 0, Math.PI * 2); ctx.stroke();
      ctx.fillStyle = `rgba(${CREMA},${alfa})`; ctx.beginPath(); ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2); ctx.fill();
      if (g.nombre) etiqueta(g.nombre, p.x, p.y, alfa * 0.9);
    }

    // Campus
    const m = this._proy(...MADRID);
    if (m.cosc > 0) {
      ctx.fillStyle = '#96234a'; ctx.beginPath(); ctx.arc(m.x, m.y, 3.5, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = `rgba(${CREMA},.8)`; ctx.lineWidth = 0.75; ctx.beginPath(); ctx.arc(m.x, m.y, 7, 0, Math.PI * 2); ctx.stroke();
      etiqueta('Villafranca', m.x + 4, m.y, 0.9);
    }
  }

  _linea(puntos) {
    const { ctx } = this; let abierto = false;
    ctx.beginPath();
    for (const [la, lo] of puntos) {
      const p = this._proy(la, lo);
      if (p.cosc > 0) { if (abierto) ctx.lineTo(p.x, p.y); else ctx.moveTo(p.x, p.y); abierto = true; } else abierto = false;
    }
    ctx.stroke();
  }
}
