/**
 * Ilustraciones vectoriales de producto (originales, hechas a mano en SVG).
 * Así la pieza no depende de imágenes externas y cada variante de color se pinta al momento.
 */
import { COLORES } from './catalogo.js';

const sombra = '<ellipse cx="100" cy="186" rx="58" ry="6" fill="#000" opacity=".12"/>';
const marca = (x, y, color, t = 14) =>
  `<text x="${x}" y="${y}" text-anchor="middle" font-family="'Encode Sans Semi Expanded',system-ui,sans-serif" font-weight="800" font-size="${t}" letter-spacing="1.5" fill="${color}">UCJC</text>`;

const oscurecer = (hex, f = 0.18) => {
  const n = parseInt(hex.slice(1), 16);
  const c = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => Math.round(v * (1 - f)));
  return `#${c.map((v) => v.toString(16).padStart(2, '0')).join('')}`;
};

const FORMAS = {
  camiseta: (f, a, o) => `${sombra}
    <path d="M62 34 L38 46 L20 78 L42 90 L52 74 L52 172 L148 172 L148 74 L158 90 L180 78 L162 46 L138 34 C130 46 118 52 100 52 C82 52 70 46 62 34Z" fill="${f}"/>
    <path d="M62 34 C70 46 82 52 100 52 C118 52 130 46 138 34 L130 32 C124 40 114 44 100 44 C86 44 76 40 70 32Z" fill="${o}"/>
    <path d="M52 74 L52 172 L58 172 L58 80Z" fill="${o}" opacity=".35"/>
    ${marca(100, 100, a, 18)}<rect x="74" y="106" width="52" height="3" rx="1.5" fill="${a}" opacity=".8"/>`,
  sudadera: (f, a, o) => `${sombra}
    <path d="M64 40 C56 42 44 48 36 58 L18 120 L40 128 L52 92 L50 172 L150 172 L148 92 L160 128 L182 120 L164 58 C156 48 144 42 136 40Z" fill="${f}"/>
    <path d="M70 40 C70 20 84 12 100 12 C116 12 130 20 130 40 C122 52 112 56 100 56 C88 56 78 52 70 40Z" fill="${o}"/>
    <path d="M80 38 C82 26 90 22 100 22 C110 22 118 26 120 38 C114 44 108 46 100 46 C92 46 86 44 80 38Z" fill="#000" opacity=".25"/>
    <line x1="93" y1="50" x2="91" y2="74" stroke="${a}" stroke-width="2.5" stroke-linecap="round"/><line x1="107" y1="50" x2="109" y2="74" stroke="${a}" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M70 128 L130 128 L138 154 L62 154Z" fill="${o}" opacity=".55"/>
    ${marca(100, 108, a, 17)}<rect x="50" y="164" width="100" height="8" fill="${o}"/>`,
  chaqueta: (f, a, o) => `${sombra}
    <path d="M66 34 C54 38 42 46 36 58 L20 124 L40 130 L52 96 L50 172 L150 172 L148 96 L160 130 L180 124 L164 58 C158 46 146 38 134 34 L100 46Z" fill="${f}"/>
    <path d="M70 32 L100 46 L130 32 L124 22 L100 30 L76 22Z" fill="${o}"/>
    <line x1="100" y1="46" x2="100" y2="172" stroke="${a}" stroke-width="3"/>
    <rect x="62" y="112" width="26" height="4" rx="2" fill="${o}"/><rect x="112" y="112" width="26" height="4" rx="2" fill="${o}"/>
    <path d="M20 124 L40 130 L38 138 L18 132Z" fill="${a}"/><path d="M180 124 L160 130 L162 138 L182 132Z" fill="${a}"/>
    ${marca(126, 72, a, 10)}`,
  equipacion: (f, a, o) => `${sombra}
    <path d="M62 34 L36 44 L18 82 L42 94 L52 76 L52 172 L148 172 L148 76 L158 94 L182 82 L164 44 L138 34 L118 40 L100 58 L82 40Z" fill="${f}"/>
    <path d="M82 40 L100 58 L118 40 L112 34 L100 46 L88 34Z" fill="${a}"/>
    <path d="M66 40 L76 172 L88 172 L80 38Z" fill="${a}" opacity=".9"/><path d="M134 40 L124 172 L112 172 L120 38Z" fill="${a}" opacity=".9"/>
    <circle cx="124" cy="78" r="9" fill="${o}" stroke="${a}" stroke-width="2"/>
    <text x="100" y="140" text-anchor="middle" font-family="'Playfair Display',Georgia,serif" font-weight="900" font-size="38" fill="${a}">10</text>`,
  mochila: (f, a, o) => `${sombra}
    <path d="M70 34 C70 18 82 12 100 12 C118 12 130 18 130 34" fill="none" stroke="${o}" stroke-width="8" stroke-linecap="round"/>
    <rect x="44" y="32" width="112" height="146" rx="34" fill="${f}"/>
    <rect x="60" y="104" width="80" height="58" rx="18" fill="${o}"/>
    <path d="M60 120 L140 120" stroke="${a}" stroke-width="3"/>
    <circle cx="132" cy="120" r="5" fill="${a}"/>
    ${marca(100, 78, a, 16)}<rect x="44" y="52" width="112" height="4" fill="${o}" opacity=".6"/>`,
  cuaderno: (f, a, o) => `${sombra}
    <rect x="48" y="20" width="108" height="160" rx="8" fill="${o}"/><rect x="44" y="16" width="108" height="160" rx="8" fill="${f}"/>
    <rect x="44" y="16" width="16" height="160" rx="6" fill="${o}"/>
    <rect x="136" y="16" width="7" height="160" fill="${a}" opacity=".85"/>
    <rect x="72" y="56" width="58" height="34" rx="4" fill="#fff" opacity=".9"/>
    ${marca(101, 79, '#1d1f21', 14)}<rect x="72" y="140" width="58" height="3" rx="1.5" fill="${a}"/>`,
  taza: (f, a, o) => `${sombra}
    <path d="M140 74 C172 74 172 132 136 132" fill="none" stroke="${o}" stroke-width="13"/>
    <path d="M44 50 L156 50 L148 166 C147 174 140 180 132 180 L68 180 C60 180 53 174 52 166Z" fill="${f}"/>
    <ellipse cx="100" cy="50" rx="56" ry="10" fill="${o}"/><ellipse cx="100" cy="50" rx="48" ry="6" fill="#3a1d10"/>
    <text x="100" y="108" text-anchor="middle" font-family="'Playfair Display',Georgia,serif" font-style="italic" font-weight="700" font-size="17" fill="${a}">Promoción</text>
    <text x="100" y="138" text-anchor="middle" font-family="'Playfair Display',Georgia,serif" font-weight="900" font-size="30" fill="${a}">2027</text>`,
  llavero: (f, a, o) => `${sombra}
    <circle cx="100" cy="40" r="20" fill="none" stroke="#bbbcbc" stroke-width="6"/>
    <rect x="94" y="56" width="12" height="18" rx="3" fill="#a4a5a6"/>
    <rect x="46" y="72" width="108" height="92" rx="26" fill="${o}"/><rect x="50" y="70" width="100" height="88" rx="24" fill="${f}"/>
    ${marca(100, 124, a, 24)}`,
  gorra: (f, a, o) => `${sombra}
    <path d="M36 128 C36 70 64 42 102 42 C140 42 164 70 164 128Z" fill="${f}"/>
    <path d="M102 42 L102 128" stroke="${o}" stroke-width="2"/><path d="M70 52 C60 80 58 104 60 128" stroke="${o}" stroke-width="2" fill="none"/><path d="M134 52 C144 80 146 104 144 128" stroke="${o}" stroke-width="2" fill="none"/>
    <circle cx="102" cy="44" r="6" fill="${o}"/>
    <path d="M30 128 L170 128 C176 128 180 134 176 140 C150 156 60 160 24 146 C18 142 22 128 30 128Z" fill="${o}"/>
    ${marca(102, 100, a, 18)}`,
  botella: (f, a, o) => `${sombra}
    <rect x="80" y="10" width="40" height="26" rx="8" fill="${o}"/><rect x="84" y="34" width="32" height="10" fill="#bbbcbc"/>
    <path d="M70 58 C70 46 80 42 100 42 C120 42 130 46 130 58 L130 168 C130 176 124 182 116 182 L84 182 C76 182 70 176 70 168Z" fill="${f}"/>
    <rect x="70" y="70" width="10" height="100" fill="#fff" opacity=".18"/>
    <g transform="rotate(-90 100 118)">${marca(100, 124, a, 20)}</g>`,
  tote: (f, a, o) => `${sombra}
    <path d="M70 70 C70 20 130 20 130 70" fill="none" stroke="${o}" stroke-width="9"/>
    <path d="M40 64 L160 64 L166 180 L34 180Z" fill="${f}"/>
    <text x="100" y="112" text-anchor="middle" font-family="'Playfair Display',Georgia,serif" font-style="italic" font-weight="700" font-size="22" fill="${a}">Campus</text>
    ${marca(100, 140, a, 16)}<path d="M60 152 L140 152" stroke="${a}" stroke-width="2" stroke-dasharray="4 5"/>`,
  jogger: (f, a, o) => `${sombra}
    <path d="M58 18 L142 18 L150 172 L112 172 L102 66 L98 66 L88 172 L50 172Z" fill="${f}"/>
    <rect x="58" y="18" width="84" height="16" fill="${o}"/>
    <path d="M94 34 L92 52 M106 34 L108 52" stroke="${a}" stroke-width="2.5" stroke-linecap="round"/>
    <rect x="50" y="160" width="38" height="12" fill="${o}"/><rect x="112" y="160" width="38" height="12" fill="${o}"/>
    <rect x="140" y="40" width="4" height="114" fill="${a}" opacity=".9"/><rect x="56" y="40" width="4" height="114" fill="${a}" opacity=".9"/>`,
  bufanda: (f, a, o) => `${sombra}
    <path d="M52 26 C80 52 120 52 148 26 L156 40 C124 72 76 72 44 40Z" fill="${f}"/>
    <path d="M60 52 L92 56 L84 168 L52 164Z" fill="${f}"/>
    ${[70, 94, 118, 142].map((y) => `<path d="M${58 - (y - 52) * 0.06} ${y} L${90 - (y - 52) * 0.06} ${y + 3} L${89 - (y - 52) * 0.06} ${y + 12} L${57 - (y - 52) * 0.06} ${y + 9}Z" fill="${a}"/>`).join('')}
    ${[54, 60, 66, 72, 78].map((x) => `<line x1="${x}" y1="165" x2="${x - 1}" y2="180" stroke="${o}" stroke-width="3" stroke-linecap="round"/>`).join('')}
    <path d="M44 40 C76 72 124 72 156 40" fill="none" stroke="${o}" stroke-width="3"/>`,
  pins: (f, a, o) => `${sombra}
    <circle cx="70" cy="70" r="34" fill="${f}" stroke="${o}" stroke-width="5"/>${marca(70, 76, a, 15)}
    <path d="M132 36 L160 92 L104 92Z" fill="${a}" stroke="${o}" stroke-width="5" stroke-linejoin="round"/>
    <rect x="44" y="114" width="56" height="56" rx="14" fill="#1d1f21" stroke="${o}" stroke-width="5"/><text x="72" y="152" text-anchor="middle" font-family="'Playfair Display',Georgia,serif" font-weight="900" font-size="28" fill="${f}">27</text>
    <path d="M140 112 l9 19 21 3 -15 14 4 21 -19 -10 -19 10 4 -21 -15 -14 21 -3Z" fill="${f}" stroke="${o}" stroke-width="5" stroke-linejoin="round"/>`,
};

export function ilustracion(producto, colorId = producto.colores[0]) {
  const c = COLORES[colorId] || COLORES.granate;
  const forma = FORMAS[producto.tipo] || FORMAS.camiseta;
  return `<svg viewBox="0 0 200 200" role="img" aria-label="${producto.nombre} · ${c.nombre}" xmlns="http://www.w3.org/2000/svg">${forma(c.fondo, c.acento, oscurecer(c.fondo))}</svg>`;
}

export const TIPOS = Object.keys(FORMAS);
