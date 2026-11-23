# Descubrimiento muy mejorado · Tienda UCJC (DFE 76042)

Pieza **Descubrimiento** alternativa para la [Tienda UCJC](https://cesar-andress.github.io/tienda-ucjc-shell/):
catálogo editorial con la identidad de la UCJC, transiciones en todo, y un **modo Black Friday** aparte
con un globo en directo que se recorre haciendo scroll (inspirado en el *Live Globe* de Shopify).

## Qué incluye

**Tienda normal**
- Hero editorial con producto rotando, cinta de ventajas y cifras.
- Buscador instantáneo (sin tildes, tecla `/`), categorías con indicador animado y orden por precio o valoración.
- Rejilla con reordenación animada (FLIP), cambio de color por variante, añadir rápido con talla.
- Ficha de producto con *morph* desde la tarjeta, color, talla, cantidad y «Combina con».
- Animación del producto volando a la bolsa y aviso de confirmación.

**Black Friday** (botón «Black Friday» arriba), en registro editorial: tinta, papel crema y granate, sin brillos ni neón.
- Portada tipográfica en Playfair, cuenta atrás al 27/11 entre filetes finos.
- Mapa-globo como una lámina de atlas: punteado crema, trazos finos desde el campus de Villafranca y el nombre de cada ciudad en cursiva. Se puede arrastrar.
- Capítulos al hacer scroll (I–VII): el mapa viaja a Villafranca, Europa y Latinoamérica, cada parada con su oferta.
- Piezas por tiempo limitado con stock y temporizador, un sobre lacrado que se abre y la colección entera rebajada.
- Los pedidos del mapa son **simulados** (se indica en pantalla).

El modo Black Friday **no toca la tienda normal**: precios, filtros y estado van por separado, y al salir se desmonta.

## Identidad visual

Tomada de ucjc.edu: granate `#96234a` (escala `#f5e9ed` → `#5a152c`), amarillo `#ffe768`, neutros `#1d1f21`…`#f5f5f5`,
**Encode Sans Semi Expanded** para texto y **Playfair Display** para titulares. La pieza no carga fuentes
(no toca `<head>`); si la página anfitriona las carga se usan, si no, equivalentes del sistema.
Las ilustraciones de producto son SVG originales generados en código.

## Contrato

| | |
| --- | --- |
| Custom element | `ucjc-descubrimiento` |
| Export por defecto | `{ nombre: 'descubrimiento', version: '0.1.0' }` |
| Emite | `ucjc:descubrimiento:anadir-al-carrito@1` con **solo** `productoId`, `nombre`, `precio`, `cantidad` |

- Ids y precios `prod-101`…`prod-108` se mantienen; se añaden `prod-109`…`prod-114`.
- Talla y color van dentro de `nombre` («Sudadera con capucha · Talla M · Gris jaspe»), no como campos nuevos.
- En Black Friday, `precio` es el precio rebajado.
- `ucjc:descubrimiento:campana-cambiada@1` está **propuesto**, así que solo se emite con el atributo `emitir-campana`.

## Uso

```html
<ucjc-descubrimiento></ucjc-descubrimiento>
<!-- abrir directamente en Black Friday -->
<ucjc-descubrimiento modo="black-friday"></ucjc-descubrimiento>
<script type="module" src="https://<usuario>.github.io/descubrimiento-muy-mejorado/v0.1.0/remote.js"></script>
```

## Desarrollo

```bash
npm install
npm run dev        # demo con registro de eventos
npm test           # vitest + jsdom
npm run build      # dist/remote.js
npm run tierra     # regenera src/tierra.js (puntos del globo, Natural Earth 110m)
```

Publicación: el workflow `publicar.yml` sube la demo a la raíz de `gh-pages` en cada push a `main`
y `remote.js` a `gh-pages/vX.Y.Z/` en cada tag. En *Settings → Pages* elegid **Deploy from a branch → `gh-pages` / root**.

## Accesibilidad

Respeta `prefers-reduced-motion` (sin animaciones ni giro del globo), foco visible, `Escape` cierra la ficha,
roles de pestañas, radios y diálogo.
