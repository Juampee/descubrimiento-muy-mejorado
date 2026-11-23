/**
 * Catálogo de Descubrimiento. Los ocho primeros conservan id y precio del catálogo anterior
 * (prod-101 … prod-108) para que Compra no note el cambio.
 */

export const CATEGORIAS = [
  { id: 'todo', nombre: 'Todo' },
  { id: 'ropa', nombre: 'Ropa' },
  { id: 'deporte', nombre: 'Deporte' },
  { id: 'material', nombre: 'Material' },
  { id: 'regalos', nombre: 'Regalos' },
];

/** Colores de variante: nombre visible + relleno + acento de la ilustración. */
export const COLORES = {
  granate: { nombre: 'Granate', fondo: '#96234a', acento: '#ffe768' },
  vino: { nombre: 'Vino', fondo: '#5a152c', acento: '#f5e9ed' },
  negro: { nombre: 'Negro', fondo: '#1d1f21', acento: '#ffe768' },
  hueso: { nombre: 'Hueso', fondo: '#f1ece4', acento: '#96234a' },
  gris: { nombre: 'Gris jaspe', fondo: '#a4a5a6', acento: '#1d1f21' },
  amarillo: { nombre: 'Amarillo', fondo: '#ffe768', acento: '#5a152c' },
  rosa: { nombre: 'Rosa campus', fondo: '#e0bdc9', acento: '#5a152c' },
};

export const PRODUCTOS = [
  { id: 'prod-101', nombre: 'Camiseta Técnica UCJC', categoria: 'deporte', precio: 19.99, tallas: ['S', 'M', 'L', 'XL'], tipo: 'camiseta', colores: ['granate', 'negro', 'hueso'], etiqueta: 'Más vendido', valoracion: 4.8, resenas: 214, descripcion: 'Tejido transpirable de secado rápido con el wordmark UCJC en el pecho. Pensada para el polideportivo de Villafranca y para el día a día.', detalles: ['Poliéster reciclado 100 %', 'Corte regular', 'Lavar a 30 °C'] },
  { id: 'prod-102', nombre: 'Sudadera con capucha', categoria: 'ropa', precio: 39.95, tallas: ['XS', 'S', 'M', 'L', 'XL'], tipo: 'sudadera', colores: ['granate', 'gris', 'negro'], etiqueta: 'Icono', valoracion: 4.9, resenas: 388, descripcion: 'La sudadera de siempre: felpa perchada por dentro, capucha forrada y bolsillo canguro. El uniforme no oficial de la biblioteca.', detalles: ['Algodón orgánico 80 % · poliéster 20 %', '350 g/m²', 'Oversize suave'] },
  { id: 'prod-103', nombre: 'Chaqueta cortavientos', categoria: 'ropa', precio: 45, tallas: ['M', 'L', 'XL'], tipo: 'chaqueta', colores: ['negro', 'vino'], valoracion: 4.6, resenas: 96, descripcion: 'Ligera, repelente al agua y plegable en su propio bolsillo. Para los paseos entre facultades cuando cambia el tiempo.', detalles: ['Nylon ripstop', 'Capucha ajustable', 'Se pliega en el bolsillo'] },
  { id: 'prod-104', nombre: 'Equipación oficial fútbol', categoria: 'deporte', precio: 55, tallas: ['S', 'M', 'L'], tipo: 'equipacion', colores: ['granate', 'hueso'], etiqueta: 'Oficial', valoracion: 4.7, resenas: 142, descripcion: 'La equipación de los equipos de la universidad. Camiseta con cuello polo y número trasero opcional en tienda.', detalles: ['Tejido técnico con malla lateral', 'Escudo bordado', 'Corte atlético'] },
  { id: 'prod-105', nombre: 'Mochila UCJC', categoria: 'material', precio: 29.9, tallas: [], tipo: 'mochila', colores: ['negro', 'granate'], valoracion: 4.7, resenas: 173, descripcion: 'Compartimento acolchado para portátil de 15", bolsillo frontal y tejido resistente al agua.', detalles: ['22 litros', 'Funda portátil 15"', 'Espalda acolchada'] },
  { id: 'prod-106', nombre: 'Cuaderno A4', categoria: 'material', precio: 4.5, tallas: [], tipo: 'cuaderno', colores: ['granate', 'amarillo', 'negro'], valoracion: 4.5, resenas: 61, descripcion: 'Tapa dura, 120 hojas de cuadrícula de 5 mm y goma de cierre. Apuntes con estilo.', detalles: ['120 hojas · 90 g', 'Cuadrícula 5 mm', 'Papel FSC'] },
  { id: 'prod-107', nombre: 'Taza de graduación', categoria: 'regalos', precio: 9.95, tallas: [], tipo: 'taza', colores: ['hueso', 'negro'], etiqueta: 'Regalo', valoracion: 4.8, resenas: 120, descripcion: 'Cerámica de 350 ml con «Promoción 2027» en oro. Apta para lavavajillas y para el café de antes del examen.', detalles: ['Cerámica 350 ml', 'Apta lavavajillas', 'Impresión en oro'] },
  { id: 'prod-108', nombre: 'Llavero metálico', categoria: 'regalos', precio: 5, tallas: [], tipo: 'llavero', colores: ['granate', 'negro'], valoracion: 4.4, resenas: 58, descripcion: 'Zamak esmaltado con el wordmark UCJC. Pequeño, pesado y sin fecha de caducidad.', detalles: ['Zamak esmaltado', '45 mm', 'Anilla de acero'] },
  { id: 'prod-109', nombre: 'Gorra bordada', categoria: 'ropa', precio: 18, tallas: [], tipo: 'gorra', colores: ['vino', 'hueso', 'negro'], etiqueta: 'Nuevo', valoracion: 4.6, resenas: 37, descripcion: 'Seis paneles de algodón lavado, visera curva y bordado frontal en hilo amarillo.', detalles: ['Algodón lavado', 'Cierre metálico', 'Talla única'] },
  { id: 'prod-110', nombre: 'Botella térmica', categoria: 'deporte', precio: 22, tallas: [], tipo: 'botella', colores: ['granate', 'negro', 'rosa'], etiqueta: 'Nuevo', valoracion: 4.9, resenas: 81, descripcion: 'Acero inoxidable de doble pared: 24 h frío, 12 h caliente. Cabe en el portabotellas de la mochila.', detalles: ['750 ml', 'Sin BPA', 'Doble pared al vacío'] },
  { id: 'prod-111', nombre: 'Tote bag Campus', categoria: 'regalos', precio: 12, tallas: [], tipo: 'tote', colores: ['hueso', 'negro', 'amarillo'], valoracion: 4.5, resenas: 66, descripcion: 'Lona gruesa con asas largas. Para portátil, apuntes y la compra de vuelta a la residencia.', detalles: ['Lona 340 g/m²', 'Bolsillo interior', '38 × 42 cm'] },
  { id: 'prod-112', nombre: 'Jogger Villafranca', categoria: 'ropa', precio: 34, tallas: ['XS', 'S', 'M', 'L', 'XL'], tipo: 'jogger', colores: ['gris', 'negro', 'vino'], valoracion: 4.6, resenas: 90, descripcion: 'Felpa suave, cintura elástica con cordón y puño en el tobillo. Conjunto perfecto con la sudadera.', detalles: ['Algodón 80 %', 'Bolsillos laterales', 'Corte cónico'] },
  { id: 'prod-113', nombre: 'Bufanda de punto', categoria: 'regalos', precio: 16, tallas: [], tipo: 'bufanda', colores: ['granate', 'vino'], etiqueta: 'Invierno', valoracion: 4.7, resenas: 44, descripcion: 'Punto doble a rayas con los colores de la universidad y flecos en los extremos.', detalles: ['Acrílico suave', '160 × 22 cm', 'Rayas jacquard'] },
  { id: 'prod-114', nombre: 'Set de pins', categoria: 'regalos', precio: 7.5, tallas: [], tipo: 'pins', colores: ['amarillo', 'granate'], valoracion: 4.8, resenas: 52, descripcion: 'Cuatro pins esmaltados para personalizar la mochila o la chaqueta.', detalles: ['4 pins', 'Esmalte duro', 'Cierre de mariposa'] },
];

export const PRODUCTOS_POR_ID = Object.fromEntries(PRODUCTOS.map((p) => [p.id, p]));

/** Ofertas de Black Friday: solo se aplican dentro del modo Black Friday. */
export const BLACK_FRIDAY = {
  codigo: 'black-friday-2026',
  etiqueta: 'Black Friday UCJC',
  inicio: '2026-11-27T00:00:00+01:00',
  fin: '2026-11-30T23:59:59+01:00',
  descuentos: {
    'prod-102': 50, 'prod-101': 40, 'prod-103': 45, 'prod-105': 35, 'prod-110': 40,
    'prod-112': 30, 'prod-109': 30, 'prod-104': 25, 'prod-106': 20, 'prod-107': 30,
    'prod-108': 20, 'prod-111': 35, 'prod-113': 40, 'prod-114': 25,
  },
  relampago: ['prod-102', 'prod-110', 'prod-103'],
  misterio: { id: 'prod-112', descuento: 70 },
};

export const redondear = (n) => Math.round(n * 100) / 100;

export function precioBF(producto, extra = null) {
  const d = extra ?? BLACK_FRIDAY.descuentos[producto.id] ?? 0;
  return redondear(producto.precio * (1 - d / 100));
}

export const euros = (n) =>
  Number(n).toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });

/** Normaliza texto para búsqueda: minúsculas y sin tildes. */
export const normal = (t) =>
  String(t || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

export function filtrar(productos, { categoria = 'todo', texto = '', orden = 'destacados' } = {}) {
  const q = normal(texto).trim();
  let r = productos.filter((p) => (categoria === 'todo' || p.categoria === categoria)
    && (!q || normal(`${p.nombre} ${p.categoria} ${p.descripcion}`).includes(q)));
  if (orden === 'precio-asc') r = [...r].sort((a, b) => a.precio - b.precio);
  else if (orden === 'precio-desc') r = [...r].sort((a, b) => b.precio - a.precio);
  else if (orden === 'valoracion') r = [...r].sort((a, b) => b.valoracion - a.valoracion);
  return r;
}
