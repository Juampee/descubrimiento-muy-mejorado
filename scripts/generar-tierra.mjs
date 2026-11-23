// Genera src/tierra.js: puntos (lat, lon) sobre tierra firme para dibujar el globo.
// Fuente: world-atlas (Natural Earth 110m, dominio público).
import { readFileSync, writeFileSync } from 'node:fs';
import { feature } from 'topojson-client';
import { geoContains } from 'd3-geo';

const topo = JSON.parse(readFileSync(new URL('../node_modules/world-atlas/land-110m.json', import.meta.url)));
const tierra = feature(topo, topo.objects.land);
const PASO = 2.2;
const pts = [];
for (let lat = -58; lat <= 80; lat += PASO) {
  const paso = PASO / Math.max(0.25, Math.cos((lat * Math.PI) / 180));
  for (let lon = -180; lon < 180; lon += paso) {
    if (geoContains(tierra, [lon, lat])) pts.push(Math.round((lat + 90) * 10), Math.round((lon + 180) * 10));
  }
}
// Codificado como pares de enteros de 0..3600 en base36 de 3 caracteres.
const txt = pts.map((n) => n.toString(36).padStart(3, '0')).join('');
writeFileSync(new URL('../src/tierra.js', import.meta.url),
  `// Generado por scripts/generar-tierra.mjs (Natural Earth 110m, dominio público). No editar a mano.\nconst D = '${txt}';\nexport const TIERRA = [];\nfor (let i = 0; i < D.length; i += 6) TIERRA.push([parseInt(D.slice(i, i + 3), 36) / 10 - 90, parseInt(D.slice(i + 3, i + 6), 36) / 10 - 180]);\n`);
console.log('puntos', pts.length / 2, 'bytes', txt.length);
