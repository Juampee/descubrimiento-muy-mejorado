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
- Mini cesta (icono arriba a la derecha): lo añadido en esta visita agrupado por producto, total y botón «Ir al carrito y pagar» que lleva a la pieza Compra.
- Se adapta al ancho del hueco que le dé la tienda (container queries), no al de la ventana.

**Black Friday** (botón «Black Friday» arriba), en registro editorial: tinta, papel crema y granate, sin brillos ni neón.
- Portada tipográfica en Playfair, cuenta atrás al 27/11 entre filetes finos.
- Mapa-globo como una lámina de atlas: punteado crema, trazos finos desde el campus de Villafranca y el nombre de cada ciudad en cursiva. Se puede arrastrar.
- Capítulos al hacer scroll (I–VII): el mapa viaja a Villafranca, Europa y Latinoamérica, cada parada con su oferta.
- Piezas por tiempo limitado con stock y temporizador, un sobre lacrado que se abre y la colección entera rebajada.
- Los pedidos del mapa son **simulados** (se indica en pantalla).

El modo Black Friday **no toca la tienda normal**: precios, filtros y estado van por separado, y al salir se desmonta.

## Identidad visual: contrato `presentacion-campus@1` (desde v0.2.0)

La pieza usa **solo** los tokens comunes del shell (`comun/campus.css`), así la tienda entera comparte color, letra y radios:

- **Color:** `--ucjc-ink`, `--ucjc-muted`, `--ucjc-fog`, `--ucjc-mist`, `--ucjc-panel`, `--ucjc-edge`, `--ucjc-brand`, `--ucjc-brand-bright`, `--ucjc-leaf`, `--ucjc-warn`. Los tonos intermedios se mezclan desde esos tokens con `color-mix()`.
- **Tipografía:** `--ucjc-font-sans` (Figtree) y `--ucjc-font-display` (Fraunces). Ninguna fuente propia.
- **Radios y espacios:** `--ucjc-radius`, `--ucjc-space`, `--ucjc-space-lg` (y múltiplos con `calc()`); animaciones con `--ucjc-ease`.
- Cada `var()` lleva **valor de reserva** (el mismo del shell): fuera de la tienda la pieza se ve igual.
- **Cero** declaraciones forzadas; los colores de las prendas y del globo también salen de los tokens.
- Un test (`presentacion-campus@1`) falla si aparece un color escrito a mano fuera de un valor de reserva, una fuente propia o una declaración forzada.

Antes (v0.1.0): 101 colores a mano, 7 declaraciones forzadas y tipografía propia. Ahora: 0, 0 y 0.

## Contrato

| | |
| --- | --- |
| Custom element | `ucjc-descubrimiento` |
| Export por defecto | `{ nombre: 'descubrimiento', version: '0.2.0' }` |
| Emite | `ucjc:descubrimiento:anadir-al-carrito@1` con **solo** `productoId`, `nombre`, `precio`, `cantidad` |
| Emite | `ucjc:descubrimiento:campana-cambiada@1` con **solo** `activa`, `codigo`, `etiqueta`, `momento` |

- Ids y precios `prod-101`…`prod-108` se mantienen; se añaden `prod-109`…`prod-114`.
- El mismo producto viaja **siempre** con el mismo `productoId` y el mismo `nombre` de catálogo, para que Compra A y B lo traten igual (Compra B lo agrupa en una línea). Talla y color se eligen en la ficha pero no viajan: no están en el contrato.
- En Black Friday, `precio` es el precio rebajado.
- Emite `ucjc:descubrimiento:campana-cambiada@1` (**firmado**) con `activa`, `codigo`, `etiqueta`, `momento`: al cargar la pieza, al encender y al apagar el Black Friday.
- Emite con `ucjcCampus.emitir` si el shell lo ofrece (comprueba `ucjcCampus.version === '1'`); si no, con `window.dispatchEvent`. No pone listeners en `window`.

## Uso

```html
<ucjc-descubrimiento></ucjc-descubrimiento>
<!-- abrir directamente en Black Friday -->
<ucjc-descubrimiento modo="black-friday"></ucjc-descubrimiento>
<script type="module" src="https://<usuario>.github.io/descubrimiento-muy-mejorado/v0.2.0/remote.js"></script>
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
