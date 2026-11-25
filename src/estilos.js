/**
 * Estilos de la pieza (contrato presentacion-campus@1).
 *
 * - Todo color, tipografía, radio y espaciado sale de las variables --ucjc-* que el shell
 *   define en comun/campus.css. Cada var() lleva su valor de reserva (el mismo que el shell),
 *   así la pieza sigue viéndose bien fuera de la tienda (demo del repo).
 * - Los tonos intermedios (fondos suaves, sombras) se mezclan a partir de esos tokens con
 *   color-mix(): no hay ningún color escrito a mano fuera de un valor de reserva.
 * - Ninguna declaración forzada con «important». Ninguna fuente propia: solo los tokens de fuente.
 */

// Tokens del campus, siempre con valor de reserva.
export const T = {
  ink: 'var(--ucjc-ink, #1a242c)',
  muted: 'var(--ucjc-muted, #5a6a76)',
  fog: 'var(--ucjc-fog, #f3f6f4)',
  mist: 'var(--ucjc-mist, #e6ece8)',
  panel: 'var(--ucjc-panel, #fbfcfb)',
  brand: 'var(--ucjc-brand, #0b3d4a)',
  bright: 'var(--ucjc-brand-bright, #146b7a)',
  leaf: 'var(--ucjc-leaf, #2f6f4e)',
  warn: 'var(--ucjc-warn, #8a3a3a)',
  sans: 'var(--ucjc-font-sans, "Segoe UI", sans-serif)',
  display: 'var(--ucjc-font-display, Georgia, serif)',
  radius: 'var(--ucjc-radius, 6px)',
  space: 'var(--ucjc-space, 0.75rem)',
  spaceLg: 'var(--ucjc-space-lg, 1.25rem)',
  ease: 'var(--ucjc-ease, cubic-bezier(.2, .8, .2, 1))',
};
// El borde del contrato se calcula desde la marca, como en campus.css.
T.edge = `var(--ucjc-edge, color-mix(in srgb, ${T.brand} 14%, transparent))`;

/** Mezcla un token con transparente (alfa) o con otro token. */
const a = (token, pct) => `color-mix(in srgb, ${token} ${pct}%, transparent)`;
const mix = (t1, pct, t2) => `color-mix(in srgb, ${t1} ${pct}%, ${t2})`;
/** Múltiplos de los tokens de espacio y radio. */
const s = (k) => `calc(${T.space} * ${k})`;
const r = (k) => `calc(${T.radius} * ${k})`;
const PILL = r(100);
const SOMBRA = (y, b, pct) => `0 ${y}px ${b}px -${Math.round(b / 2)}px ${a(T.ink, pct)}`;

export const CSS = `
:host{display:block;width:100%;max-width:100%;min-width:0;contain:inline-size;
  color:${T.ink};font-family:${T.sans};
  --rebote:cubic-bezier(.2,1.4,.4,1)}
*{box-sizing:border-box}
button{font:inherit;color:inherit;cursor:pointer}
:focus-visible{outline:2px solid ${T.bright};outline-offset:2px;border-radius:${T.radius}}
.d [hidden],.d[hidden]{display:none}
.d{container-type:inline-size;container-name:pieza;position:relative;background:${T.panel};border:1px solid ${T.edge};border-radius:${r(2)};overflow:clip;isolation:isolate;transition:background .6s ${T.ease},color .6s ${T.ease}}
.d[data-modo="bf"]{background:${T.ink};color:${T.panel};border-color:${a(T.panel, 12)}}

/* ---------------------------------------------------------------- barra superior */
.top{position:sticky;top:0;z-index:20;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:${T.space};padding:${T.space} ${T.spaceLg};
  background:${a(T.panel, 88)};backdrop-filter:blur(12px);border-bottom:1px solid ${T.edge};transition:background .6s,border-color .6s}
.d[data-modo="bf"] .top{background:${a(T.ink, 92)};border-color:${a(T.panel, 12)}}
.marca{display:flex;align-items:center;gap:${s(.7)};font-size:.82rem;min-width:0}
.sello{display:grid;place-items:center;height:30px;padding:0 ${s(.7)};border-radius:${T.radius};background:${T.brand};color:${T.panel};font-family:${T.display};font-weight:800;letter-spacing:.06em;font-size:.8rem}
.d[data-modo="bf"] .sello{background:${T.panel};color:${T.ink}}
.marca-txt{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:${T.muted}}
.d[data-modo="bf"] .marca-txt{color:${a(T.panel, 70)}}
.marca-txt b{color:${T.ink};font-weight:700}
.d[data-modo="bf"] .marca-txt b{color:${T.panel}}
.modos{position:relative;display:flex;padding:3px;border-radius:${PILL};background:${T.mist};gap:2px}
.d[data-modo="bf"] .modos{background:${a(T.panel, 10)}}
.modos button{position:relative;z-index:1;border:0;background:none;padding:${s(.55)} ${s(1.2)};border-radius:${PILL};font-size:.84rem;font-weight:600;display:flex;align-items:center;gap:${s(.5)};transition:color .35s;white-space:nowrap;color:${T.muted}}
.modos button[aria-selected="true"]{color:${T.panel}}
.d[data-modo="bf"] .modos button{color:${a(T.panel, 70)}}
.d[data-modo="bf"] .modos button[aria-selected="true"]{color:${T.ink}}
.pildora{position:absolute;left:0;top:3px;bottom:3px;border-radius:${PILL};background:${T.brand};transition:transform .55s var(--rebote),width .55s var(--rebote),background .5s}
.d[data-modo="bf"] .pildora{background:${T.panel}}
.led{width:7px;height:7px;border-radius:50%;background:${T.warn};box-shadow:0 0 0 0 ${a(T.warn, 60)};animation:led 1.8s infinite}
@keyframes led{70%{box-shadow:0 0 0 7px ${a(T.warn, 0)}}100%{box-shadow:0 0 0 0 ${a(T.warn, 0)}}}
.bolsa{justify-self:end;position:relative;display:grid;place-items:center;width:42px;height:42px;border-radius:50%;background:${T.panel};border:1px solid ${T.edge};padding:0;color:${T.brand};transition:border-color .2s}
.bolsa:hover,.bolsa[aria-expanded="true"]{border-color:${T.bright}}
.d[data-modo="bf"] .bolsa{background:transparent;border-color:${a(T.panel, 25)};color:${T.panel}}
.bolsa span{position:absolute;top:-4px;right:-4px;min-width:20px;height:20px;padding:0 5px;border-radius:${PILL};background:${T.bright};color:${T.panel};font-size:.7rem;font-weight:700;display:grid;place-items:center}
.mini{position:absolute;right:${T.spaceLg};top:calc(100% + ${s(.6)});z-index:30;width:min(360px,calc(100% - ${s(2)}));background:${T.panel};color:${T.ink};border:1px solid ${T.edge};border-radius:${r(2)};padding:${T.spaceLg};box-shadow:${SOMBRA(24, 60, 25)};text-align:left}
.mini-cab{display:flex;justify-content:space-between;align-items:center;margin-bottom:${s(.7)}}
.mini-cab b{font-family:${T.display};font-size:1.25rem;color:${T.brand}}
.mini-x{border:0;background:none;padding:4px;display:grid;place-items:center;color:${T.muted}}
.mini-lista{list-style:none;margin:0;padding:0;max-height:280px;overflow:auto}
.mini-lista li{display:grid;grid-template-columns:44px 1fr auto;gap:${s(.7)};align-items:center;padding:${s(.6)} 0;border-bottom:1px solid ${T.mist};font-size:.82rem}
.mini-arte{width:44px;height:44px;border-radius:${T.radius};background:${T.fog};display:grid;place-items:center}
.mini-arte svg{width:36px;height:36px}
.mini-txt{display:flex;flex-direction:column;min-width:0}
.mini-txt b{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mini-txt small{color:${T.muted}}
.mini-total{display:flex;justify-content:space-between;margin:${T.space} 0;font-size:.9rem}
.mini-total b{font-family:${T.display};font-size:1.15rem;color:${T.brand}}
.mini-vacio{margin:${s(.6)} 0 ${T.space};color:${T.muted};font-size:.9rem}
.mini-ir{width:100%}
.mini-nota{margin:${s(.7)} 0 0;font-size:.72rem;color:${T.muted};text-align:center}

/* ---------------------------------------------------------------- botones */
.btn{border:1px solid transparent;border-radius:${T.radius};padding:${s(1.05)} ${s(1.6)};font-weight:600;font-size:.92rem;display:inline-flex;align-items:center;justify-content:center;gap:${s(.6)};transition:transform .25s var(--rebote),background .25s,border-color .25s,color .25s,box-shadow .25s}
.btn:active{transform:scale(.97)}
.primario{background:${T.brand};border-color:${T.brand};color:${T.panel};box-shadow:${SOMBRA(10, 24, 35)}}
.primario:hover{background:${T.bright};border-color:${T.bright};transform:translateY(-1px)}
.fantasma{background:transparent;border-color:${T.edge};color:${T.brand}}
.fantasma:hover{border-color:${T.bright};background:${T.fog}}
.fantasma.claro{border-color:${a(T.panel, 40)};color:${T.panel}}
.fantasma.claro:hover{background:${T.panel};color:${T.ink}}
.grande{padding:${s(1.3)} ${s(2)};font-size:.98rem;flex:1}
.hecho{background:${T.leaf};border-color:${T.leaf}}

/* ---------------------------------------------------------------- hero */
.hero{display:grid;grid-template-columns:1.1fr .9fr;gap:${s(3.5)};align-items:center;padding:${s(4.5)} ${s(3.5)} ${s(3)};
  background:radial-gradient(ellipse at 85% 10%,${a(T.bright, 10)},transparent 55%),${T.panel}}
.eyebrow{display:flex;align-items:center;gap:${s(.8)};margin:0 0 ${T.spaceLg};text-transform:uppercase;letter-spacing:.16em;font-size:.72rem;font-weight:700;color:${T.bright}}
.eyebrow span{width:28px;height:2px;background:currentColor}
.hero h1{font-family:${T.display};font-weight:800;font-size:clamp(2.4rem,6vw,5rem);line-height:.98;letter-spacing:-.03em;margin:0 0 ${T.spaceLg};color:${T.brand}}
.hero h1 em{font-style:italic;font-weight:500;color:${T.bright};position:relative;white-space:nowrap}
.hero h1 em::after{content:"";position:absolute;left:-2%;right:-2%;bottom:.08em;height:.16em;background:${a(T.leaf, 30)};z-index:-1;transform-origin:left;animation:subraya 1.1s .4s ${T.ease} both}
@keyframes subraya{from{transform:scaleX(0)}}
.lead{font-size:clamp(.95rem,1.4vw,1.06rem);line-height:1.65;color:${T.muted};max-width:46ch;margin:0 0 ${s(2)}}
.hero-cta{display:flex;flex-wrap:wrap;gap:${s(.7)};margin-bottom:${s(2.4)}}
.cifras{display:flex;gap:${s(2.4)};margin:0;flex-wrap:wrap;padding-top:${T.spaceLg};border-top:1px solid ${T.edge}}
.cifras dt{font-family:${T.display};font-size:1.6rem;font-weight:700;color:${T.brand}}
.cifras dd{margin:2px 0 0;font-size:.76rem;color:${T.muted};display:flex;gap:${s(.4)};align-items:center}
.hero-arte{position:relative;aspect-ratio:1;max-width:500px;width:100%;justify-self:center}
.mancha{position:absolute;inset:4% 12% 0;border-radius:${PILL} ${PILL} ${T.radius} ${T.radius};background:linear-gradient(170deg,${mix(T.bright, 18, T.fog)},${mix(T.bright, 38, T.mist)})}
.mancha::after{content:"";position:absolute;inset:${T.space} ${T.space} 0;border:1px solid ${a(T.brand, 22)};border-bottom:0;border-radius:${PILL} ${PILL} 0 0}
.hero-prod{position:absolute;inset:16% 16% 8%;filter:drop-shadow(0 18px 18px ${a(T.ink, 28)});animation:flota 7s ease-in-out infinite}
.hero-prod svg{width:100%;height:100%}
@keyframes flota{50%{transform:translateY(-8px)}}
.flota{position:absolute;background:${T.panel};border:1px solid ${T.edge};border-radius:${T.radius};padding:${s(.8)} ${s(1.1)};box-shadow:${SOMBRA(14, 30, 18)};display:flex;flex-direction:column;gap:3px;font-size:.8rem;animation:flota 7s ease-in-out infinite}
.flota small{color:${T.muted}}
.flota b{font-family:${T.display};font-weight:700;font-size:.95rem;color:${T.brand}}
.f1{left:-4%;bottom:14%;animation-delay:-2s}.f2{right:-2%;top:10%;animation-delay:-4s}
.estrellas{position:relative;display:inline-block;color:${T.mist};letter-spacing:1px;font-size:.92em;line-height:1}
.estrellas::before{content:"★★★★★";position:absolute;inset:0;width:var(--v);overflow:hidden;color:${T.bright};white-space:nowrap}

/* ---------------------------------------------------------------- cinta */
.cinta{contain:inline-size;background:${T.brand};color:${T.panel};overflow:hidden;padding:${s(.85)} 0;margin:0 0 ${s(1.4)}}
.cinta-pista{display:flex;gap:${s(2)};width:max-content;animation:cinta 36s linear infinite;font-weight:600;text-transform:uppercase;letter-spacing:.14em;font-size:.74rem;align-items:center}
.cinta i{font-style:normal;color:${a(T.panel, 55)}}
@keyframes cinta{to{transform:translateX(-50%)}}

/* ---------------------------------------------------------------- catálogo */
.catalogo{padding:${s(1.5)} ${s(2.5)} ${s(3.5)};scroll-margin-top:80px;background:${T.fog}}
.barra{display:flex;flex-wrap:wrap;gap:${T.space};align-items:center;margin-bottom:${T.space}}
.buscador{flex:1 1 260px;display:flex;align-items:center;gap:${s(.7)};background:${T.panel};border:1px solid ${T.edge};border-radius:${T.radius};padding:0 ${s(.6)} 0 ${T.space};transition:border-color .25s,box-shadow .25s;color:${T.muted}}
.buscador:focus-within{border-color:${T.bright};box-shadow:0 0 0 4px ${a(T.bright, 14)}}
.buscador input{flex:1;border:0;outline:0;background:none;font:inherit;font-size:.9rem;padding:${s(.95)} 0;color:${T.ink};min-width:0}
kbd{font:600 .7rem ${T.sans};border:1px solid ${T.edge};border-radius:${T.radius};padding:2px 7px;color:${T.muted}}
.cats{contain:inline-size;min-width:0;flex:1 1 400px;position:relative;display:flex;gap:2px;padding:3px;border-radius:${T.radius};background:${T.panel};border:1px solid ${T.edge};overflow-x:auto;scrollbar-width:none;max-width:100%}
.cats button{position:relative;z-index:1;border:0;background:none;padding:${s(.6)} ${s(1.1)};border-radius:${T.radius};font-size:.84rem;font-weight:600;color:${T.muted};white-space:nowrap;transition:color .3s}
.cats sup{font-size:.6rem;margin-left:3px;opacity:.65}
.cats button[aria-selected="true"]{color:${T.panel}}
.cats-ind{position:absolute;left:0;top:3px;bottom:3px;border-radius:${T.radius};background:${T.brand};transition:transform .5s var(--rebote),width .5s var(--rebote)}
.orden{display:flex;align-items:center;gap:${s(.6)};font-size:.76rem;color:${T.muted}}
.orden select{font:inherit;font-size:.84rem;font-weight:600;color:${T.ink};border:1px solid ${T.edge};background:${T.panel};border-radius:${T.radius};padding:${s(.7)} ${T.space}}
.resultado{font-size:.76rem;color:${T.muted};margin:0 0 ${T.spaceLg};letter-spacing:.02em}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,230px),1fr));gap:${T.spaceLg}}
.card{position:relative;display:flex;flex-direction:column;gap:${s(.7)};background:${T.panel};border:1px solid ${T.edge};border-radius:${r(1.5)};padding:${s(.6)} ${s(.6)} ${T.space};transition:border-color .3s,box-shadow .3s,transform .3s ${T.ease}}
.card:hover{border-color:${a(T.bright, 45)};box-shadow:${SOMBRA(16, 36, 14)};transform:translateY(-2px)}
.card-visual{position:relative}
.card-media{position:relative;display:block;width:100%;border:0;padding:0;aspect-ratio:4/5;border-radius:${T.radius};overflow:hidden;background:${mix('var(--tinte)', 12, T.fog)};transition:background .5s ${T.ease}}
.card-media::after{content:"";position:absolute;inset:auto -20% -40% -20%;height:70%;background:radial-gradient(closest-side,${a('var(--tinte)', 22)},transparent);transition:transform .6s ${T.ease}}
.card-media .arte{position:absolute;inset:10% 8% 14%;display:block;z-index:1;transition:transform .6s var(--rebote);filter:drop-shadow(0 14px 16px ${a(T.ink, 18)})}
.card-media svg{width:100%;height:100%}
.card:hover .card-media .arte{transform:translateY(-6px) scale(1.05) rotate(-2deg)}
.card:hover .card-media::after{transform:translateY(-12%)}
.tag{position:absolute;top:${s(.7)};left:${s(.7)};z-index:2;background:${T.panel};color:${T.brand};border:1px solid ${T.edge};border-radius:${T.radius};padding:3px ${s(.6)};font-size:.64rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase}
.ver{position:absolute;top:${s(.7)};right:${s(.7)};z-index:2;font-size:.7rem;font-weight:700;background:${T.brand};color:${T.panel};border-radius:${T.radius};padding:4px ${s(.7)};opacity:0;transform:translateY(-6px);transition:.35s ${T.ease}}
.card:hover .ver,.card-media:focus-visible .ver{opacity:1;transform:none}
.quick{position:absolute;left:${s(.6)};right:${s(.6)};bottom:${s(.6)};z-index:3;display:flex;flex-direction:column;gap:${s(.4)};opacity:0;transform:translateY(10px);transition:.35s ${T.ease};pointer-events:none}
.card:hover .quick,.card:focus-within .quick,.card.elige-talla .quick{opacity:1;transform:none;pointer-events:auto}
.quick-btn{border:1px solid ${T.edge};border-radius:${T.radius};padding:${s(.8)};background:${a(T.panel, 94)};backdrop-filter:blur(8px);font-weight:600;font-size:.84rem;color:${T.brand};display:flex;align-items:center;justify-content:center;gap:${s(.4)};transition:background .2s,color .2s}
.quick-btn:hover{background:${T.brand};color:${T.panel}}
.quick-tallas{display:none;gap:${s(.4)};justify-content:center;background:${a(T.panel, 96)};border:1px solid ${T.edge};border-radius:${T.radius};padding:${s(.5)}}
.card.elige-talla .quick-tallas{display:flex;animation:entra .3s ${T.ease}}
.card.elige-talla .quick-btn{display:none}
.quick-tallas button{border:1px solid ${T.edge};background:${T.panel};color:${T.ink};border-radius:${T.radius};min-width:38px;padding:${s(.5)} ${s(.4)};font-size:.76rem;font-weight:700;transition:.2s}
.quick-tallas button:hover{background:${T.bright};border-color:${T.bright};color:${T.panel};transform:translateY(-2px)}
@keyframes entra{from{opacity:0;transform:translateY(6px)}}
.card-info{display:flex;justify-content:space-between;gap:${s(.7)};align-items:flex-start;padding:0 ${s(.3)}}
.card-info h3{margin:0 0 4px;font-size:.95rem;font-weight:700;color:${T.ink}}
.card-info p{margin:0;font-size:.76rem;color:${T.muted};display:flex;gap:${s(.35)};align-items:center;flex-wrap:wrap}
.card-info .n{opacity:.75}
.precio{font-family:${T.display};font-size:1.1rem;white-space:nowrap;color:${T.brand}}
.swatches{display:flex;align-items:center;gap:${s(.5)};padding:0 ${s(.3)}}
.swatches button{width:18px;height:18px;border-radius:50%;border:2px solid ${T.panel};background:var(--c);box-shadow:0 0 0 1px ${T.edge};padding:0;transition:transform .25s var(--rebote),box-shadow .25s}
.swatches button[aria-checked="true"]{box-shadow:0 0 0 2px ${T.bright};transform:scale(1.12)}
.swatches.grandes button{width:32px;height:32px;border-width:3px}
.color-nombre{font-size:.7rem;color:${T.muted};margin-left:4px}
.vacio{display:flex;flex-direction:column;gap:${s(.4)};align-items:center;text-align:center;padding:${s(5)} ${T.spaceLg};color:${T.muted}}
.vacio b{font-family:${T.display};font-size:1.8rem;color:${T.brand}}
.vacio .btn{margin-top:${T.space}}

/* ---------------------------------------------------------------- detalle */
.detalle{position:fixed;inset:0;z-index:50;display:grid;place-items:center;padding:${s(2)}}
.det-fondo{position:absolute;inset:0;background:${a(T.ink, 55)};backdrop-filter:blur(8px)}
.det-panel{position:relative;width:min(1080px,100%);height:min(92vh,860px);overflow:auto;overscroll-behavior:contain;background:${T.panel};border:1px solid ${T.edge};border-radius:${r(2)};display:grid;grid-template-columns:1fr 1fr;box-shadow:${SOMBRA(40, 120, 45)};color:${T.ink}}
.det-cerrar{position:absolute;top:${T.space};right:${T.space};z-index:3;width:44px;height:44px;border-radius:50%;border:1px solid ${T.edge};background:${T.panel};color:${T.brand};display:grid;place-items:center;transition:transform .3s var(--rebote)}
.det-cerrar:hover{transform:rotate(90deg)}
.det-media{position:sticky;top:0;align-self:start;height:min(92vh,860px);background:${mix('var(--tinte)', 14, T.fog)};transition:background .5s;display:grid;place-items:center;overflow:hidden}
.det-media::before{content:"";position:absolute;width:80%;aspect-ratio:1;border-radius:50%;background:radial-gradient(closest-side,${a('var(--tinte)', 30)},transparent)}
.det-arte{position:relative;width:78%;aspect-ratio:1;filter:drop-shadow(0 30px 34px ${a(T.ink, 22)})}
.det-arte svg{width:100%;height:100%}
.det-info{padding:${s(3)};display:flex;flex-direction:column;gap:${T.space}}
.det-cat{margin:0;text-transform:uppercase;letter-spacing:.14em;font-size:.7rem;font-weight:700;color:${T.bright}}
.det-info h2{margin:0;font-family:${T.display};font-weight:800;font-size:clamp(1.9rem,3.4vw,2.8rem);line-height:1.02;letter-spacing:-.02em;color:${T.brand}}
.det-val{margin:0;display:flex;gap:${s(.4)};align-items:center;font-size:.82rem;color:${T.muted}}
.det-val b{color:${T.ink}}
.det-precio{margin:0;font-family:${T.display};font-size:1.9rem;display:flex;flex-direction:column;color:${T.brand}}
.det-precio small{font-family:${T.sans};font-size:.76rem;color:${T.muted}}
.det-desc{margin:0;line-height:1.65;color:${T.ink}}
.det-et{display:block;font-size:.76rem;font-weight:600;color:${T.muted};margin-bottom:${s(.6)}}
.det-et b{color:${T.ink}}
.tallas{display:flex;flex-wrap:wrap;gap:${s(.6)}}
.tallas button{min-width:52px;padding:${s(.8)} ${s(.7)};border-radius:${T.radius};border:1px solid ${T.edge};background:${T.panel};font-weight:700;transition:.2s}
.tallas button:hover{border-color:${T.bright}}
.tallas button[aria-pressed="true"]{background:${T.brand};border-color:${T.brand};color:${T.panel};transform:translateY(-2px)}
.det-aviso{margin:${s(.4)} 0 0;font-size:.76rem;color:${T.warn};min-height:1em}
.det-compra{display:flex;gap:${s(.7)};align-items:stretch;position:sticky;bottom:0;padding:${T.space} 0;background:linear-gradient(transparent,${T.panel} 30%)}
.cantidad{display:flex;align-items:center;border:1px solid ${T.edge};border-radius:${T.radius};background:${T.panel}}
.cantidad button{border:0;background:none;width:42px;height:100%;font-size:1.1rem;color:${T.brand}}
.cantidad span{min-width:22px;text-align:center;font-weight:700}
.det-acc{border-top:1px solid ${T.mist};padding-top:${T.space}}
.det-acc summary{cursor:pointer;font-weight:700;font-size:.9rem;list-style:none;display:flex;justify-content:space-between;color:${T.brand}}
.det-acc summary::after{content:"+";font-size:1.1rem;transition:transform .3s}.det-acc[open] summary::after{transform:rotate(45deg)}
.det-acc ul,.det-acc p{margin:${s(.7)} 0 0;color:${T.muted};font-size:.84rem;line-height:1.6;padding-left:${T.spaceLg}}.det-acc p{padding:0}
.rel-fila{display:grid;grid-template-columns:repeat(4,1fr);gap:${s(.6)}}
.rel-item{border:1px solid ${T.edge};background:${mix('var(--tinte)', 10, T.fog)};border-radius:${T.radius};padding:${s(.6)};display:flex;flex-direction:column;gap:3px;text-align:left;transition:transform .3s var(--rebote),border-color .3s}
.rel-item:hover{transform:translateY(-4px);border-color:${T.bright}}
.rel-item .arte{aspect-ratio:1}.rel-item svg{width:100%;height:100%}
.rel-item small{font-size:.7rem;line-height:1.2;color:${T.muted}}.rel-item b{font-size:.76rem;color:${T.brand}}

/* ---------------------------------------------------------------- vuelo, toast, cortina */
.vuelo{position:fixed;z-index:80;pointer-events:none}
.vuelo svg{width:100%;height:100%}
.toast{position:fixed;left:50%;bottom:${s(2)};z-index:90;transform:translate(-50%,calc(100% + 60px));visibility:hidden;display:flex;gap:${s(.7)};align-items:center;max-width:min(92vw,460px);background:${T.brand};color:${T.panel};border-radius:${T.radius};padding:${s(.8)} ${s(1.4)} ${s(.8)} ${s(.8)};font-size:.84rem;box-shadow:${SOMBRA(20, 50, 40)};transition:transform .5s var(--rebote);pointer-events:none}
.toast.visible{transform:translate(-50%,0);visibility:visible}
.toast-ok{display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:${T.leaf};color:${T.panel};flex:none}
.d[data-modo="bf"] .toast{background:${T.panel};color:${T.ink}}
.cortina{position:absolute;inset:0;z-index:70;display:none;place-items:center;clip-path:inset(0 100% 0 0);background:${T.ink}}
.cortina[data-hacia="normal"]{background:${T.panel}}
.cortina.activa{display:grid}
.cortina span{font-family:${T.display};font-weight:500;font-style:italic;color:${T.panel};font-size:clamp(2.2rem,6vw,4.5rem);letter-spacing:-.02em}
.cortina[data-hacia="normal"] span{color:${T.brand};font-size:0}
.cortina[data-hacia="normal"] span::after{content:"Tienda UCJC";font-size:clamp(2.2rem,6vw,4.5rem)}

/* ================================================================ BLACK FRIDAY
   Registro editorial sobre los mismos tokens: tinta de fondo, panel como «papel» y marca clara. */
.bf{position:relative;--h:min(88vh,920px);font-family:${T.sans};--linea:${a(T.panel, 16)};--suave:${a(T.panel, 68)}}
.bf-scroll{height:var(--h);min-height:560px;overflow-y:auto;overscroll-behavior:contain;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:${a(T.panel, 30)} ${T.ink}}
.bf-escena{position:sticky;top:0;height:var(--h);min-height:560px;overflow:hidden;background:radial-gradient(ellipse at 50% 115%,${a(T.bright, 28)},transparent 60%),${T.ink}}
.globo{position:absolute;inset:0;width:100%;height:100%;cursor:grab;touch-action:pan-y;transition:opacity .9s ${T.ease},transform 1.4s ${T.ease}}
.globo:active{cursor:grabbing}
.bf-escena[data-cap="todo"] .globo{opacity:.12}
.bf-escena[data-cap="intro"] .globo,.bf-escena:not([data-cap]) .globo{transform:translateY(46%) scale(1.2);opacity:.45}
.bf-escena[data-cap="madrid"] .globo,.bf-escena[data-cap="europa"] .globo,.bf-escena[data-cap="america"] .globo{transform:translateX(-20%)}
.hud{position:absolute;z-index:2;color:var(--suave)}
.libro{left:${s(2.2)};top:${s(2.2)};margin:0;width:190px}
.libro div{display:flex;justify-content:space-between;align-items:baseline;gap:${s(.7)};padding:${s(.7)} 0;border-bottom:1px solid var(--linea)}
.libro div:first-child{border-top:1px solid var(--linea)}
.libro dt{font-size:.64rem;letter-spacing:.14em;text-transform:uppercase}
.libro dd{margin:0;font-family:${T.display};font-size:1.15rem;color:${T.panel};font-variant-numeric:tabular-nums lining-nums}
.feed{right:${s(2.2)};top:${s(2.2)};width:min(240px,34%);margin:0;padding:0;list-style:none}
.feed-et{position:absolute;right:${s(2.2)};top:${s(.8)};margin:0;font-size:.64rem;letter-spacing:.14em;text-transform:uppercase;color:var(--suave)}
.feed li{padding:${s(.6)} 0;border-bottom:1px solid var(--linea);font-family:${T.display};font-size:.9rem;line-height:1.3;animation:feed .7s ${T.ease}}
.feed li:nth-child(n+4){opacity:.5}.feed li:nth-child(5){opacity:.22}
.feed b{font-weight:700;color:${T.panel}}.feed span{display:block;font-style:italic;color:var(--suave);font-size:.82rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
@keyframes feed{from{opacity:0;transform:translateY(-8px)}}
.capitulos{right:${s(1.8)};bottom:${s(2.2)};display:flex;flex-direction:column;gap:2px}
.capitulos button{border:0;background:none;padding:3px ${s(.5)};font-family:${T.display};font-size:.82rem;color:var(--suave);opacity:.55;text-align:right;transition:opacity .3s}
.capitulos button:hover{opacity:.9}
.capitulos .activo{opacity:1;color:${T.panel};text-decoration:underline;text-underline-offset:4px;text-decoration-thickness:1px}
.aviso-sim{left:${s(2.2)};bottom:${s(2)};margin:0;font-family:${T.display};font-style:italic;font-size:.76rem;opacity:.65}
.bf-caps{position:relative;z-index:2;margin-top:calc(-1 * max(var(--h),560px));pointer-events:none}
.cap{min-height:max(var(--h),560px);display:flex;align-items:center;padding:${s(8)} ${s(4.5)}}
.cap>*{pointer-events:auto}
.cap-intro{flex-direction:column;justify-content:center;text-align:center;gap:0}
.cap-intro>*{pointer-events:none}
.bf-sello{margin:0 0 ${s(2.2)};font-size:.7rem;letter-spacing:.32em;text-transform:uppercase;color:var(--suave)}
.bf-titulo{margin:0;font-family:${T.display};font-weight:800;font-size:clamp(4rem,12.5vw,11rem);line-height:.86;letter-spacing:-.04em;color:${T.panel}}
.bf-titulo em{display:block;font-style:italic;font-weight:500;color:${mix(T.bright, 55, T.panel)};padding-left:.6em}
.bf-titulo span,.bf-titulo em{opacity:0;transform:translateY(22px);animation:aparece 1.4s ${T.ease} forwards}
.bf-titulo em{animation-delay:.18s}
@keyframes aparece{to{opacity:1;transform:none}}
.bf-regla{width:64px;height:1px;background:${mix(T.bright, 60, T.panel)};margin:${s(2.4)} auto ${s(1.8)};opacity:0;animation:aparece 1s .5s ${T.ease} forwards}
.bf-sub{margin:0 0 ${s(2.4)};font-family:${T.display};font-style:italic;font-size:clamp(1.05rem,2vw,1.4rem);line-height:1.45;color:var(--suave);max-width:34ch;opacity:0;animation:aparece 1s .6s ${T.ease} forwards}
.reloj{display:flex;flex-direction:column;align-items:center;gap:${s(.7)};opacity:0;animation:aparece 1s .75s ${T.ease} forwards}
.reloj p{margin:0;font-size:.64rem;letter-spacing:.3em;text-transform:uppercase;color:var(--suave)}
.reloj div{display:flex;align-items:baseline;border-top:1px solid var(--linea);border-bottom:1px solid var(--linea)}
.reloj span{display:flex;align-items:baseline;gap:${s(.4)};padding:${T.space} ${T.spaceLg};font-size:.64rem;letter-spacing:.14em;text-transform:uppercase;color:var(--suave)}
.reloj span+span{border-left:1px solid var(--linea)}
.reloj b{font-family:${T.display};font-weight:500;font-size:clamp(1.6rem,3.4vw,2.4rem);color:${T.panel};font-variant-numeric:tabular-nums lining-nums;letter-spacing:0}
.desliza{margin:${s(2.8)} 0 0;font-size:.64rem;letter-spacing:.3em;text-transform:uppercase;color:var(--suave);display:flex;flex-direction:column;align-items:center;gap:${s(.7)}}
.desliza span{width:1px;height:42px;background:linear-gradient(var(--suave),transparent);animation:baja 2.4s ${T.ease} infinite;transform-origin:top}
@keyframes baja{0%{transform:scaleY(0)}50%{transform:scaleY(1)}100%{transform:scaleY(1);opacity:0}}
.cap-caja{width:min(430px,100%);margin-left:auto;background:${mix(T.ink, 88, T.panel)};border:1px solid var(--linea);border-radius:${T.radius};padding:${s(2.4)};opacity:0;transform:translateY(40px);transition:opacity 1s ${T.ease},transform 1s ${T.ease}}
.cap.visto .cap-caja{opacity:1;transform:none}
.cap-caja.ancha{width:min(1040px,100%);margin:0 auto}
.cap-caja.centro{margin:0 auto;text-align:center;display:flex;flex-direction:column;align-items:center;width:min(460px,100%)}
.cap-num{margin:0 0 ${T.space};font-size:.64rem;letter-spacing:.3em;text-transform:uppercase;color:${mix(T.bright, 60, T.panel)}}
.cap-caja h3{margin:0 0 ${T.space};font-family:${T.display};font-weight:500;font-size:clamp(1.9rem,3.6vw,2.9rem);line-height:1.02;letter-spacing:-.02em;color:${T.panel}}
.cap-caja h3 em{font-style:italic}
.cap-txt{margin:0 0 ${s(2)};color:var(--suave);line-height:1.6;font-size:.88rem}
.oferta{display:flex;flex-direction:column;gap:${T.space};color:${T.panel}}
.oferta-arte{position:relative;background:${T.fog};border-radius:${T.radius};aspect-ratio:5/4;display:grid;place-items:center;overflow:hidden}
.oferta-arte .arte{width:58%;aspect-ratio:1;display:block;transition:transform 1s ${T.ease}}
.oferta:hover .oferta-arte .arte{transform:scale(1.04)}
.oferta-arte svg{width:100%;height:100%}
.desc{position:absolute;top:${s(.8)};left:${s(.9)};font-family:${T.display};font-style:italic;font-size:1.25rem;color:${T.bright}}
.oferta h4{margin:0;font-family:${T.display};font-weight:500;font-size:1.18rem}
.precios{margin:0;display:flex;gap:${T.space};align-items:baseline;font-variant-numeric:lining-nums}
.precios b{font-family:${T.display};font-weight:500;font-size:1.5rem;color:${T.panel}}
.precios s{color:var(--suave);font-size:.82rem}
.bf-btn{width:100%;background:${T.panel};border-color:${T.panel};color:${T.ink};font-size:.7rem;letter-spacing:.2em;text-transform:uppercase;padding:${s(1.2)} ${s(1.4)}}
.bf-btn svg{display:none}
.bf-btn:hover{background:${T.mist};border-color:${T.mist}}
.bf-tallas{display:flex;flex-wrap:wrap;gap:${s(.4)};align-items:center}
.bf-tallas span{width:100%;margin-bottom:2px;font-size:.64rem;letter-spacing:.2em;text-transform:uppercase;color:var(--suave)}
.bf-tallas button{border:1px solid var(--linea);background:transparent;color:${T.panel};border-radius:${T.radius};min-width:46px;padding:${s(.9)} ${s(.6)};font-size:.76rem;letter-spacing:.06em;transition:background .25s,color .25s,border-color .25s}
.bf-tallas button:hover{background:${T.panel};color:${T.ink};border-color:${T.panel}}
.relampagos{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr));border-top:1px solid var(--linea)}
.relampago{padding:${s(1.8)} ${s(1.8)} ${s(.5)};display:flex;flex-direction:column;gap:${T.space}}
.relampago+.relampago{border-left:1px solid var(--linea)}
.relampago .stock{margin-top:auto}
.stock{display:flex;justify-content:space-between;align-items:center;gap:${s(.7)};font-size:.7rem;letter-spacing:.08em;color:var(--suave)}
.stock b{color:${T.panel};font-weight:600}
.stock i{flex:1;height:1px;background:var(--linea)}
.stock em{display:block;height:1px;background:${T.panel};transition:width .8s ${T.ease}}
.relampago.casi .stock b{color:${mix(T.warn, 60, T.panel)}}
.cuenta{margin:0;font-family:${T.display};font-size:1.6rem;color:${T.panel};font-variant-numeric:tabular-nums lining-nums}
.cuenta::before{content:"Termina en ";font-family:${T.sans};font-size:.64rem;letter-spacing:.2em;text-transform:uppercase;color:var(--suave);margin-right:6px;vertical-align:middle}
.sobre{position:relative;width:240px;height:158px;margin:${T.spaceLg} 0 ${s(2.2)};border:0;padding:0;background:${T.fog};border-radius:${T.radius};perspective:800px;transition:transform .5s ${T.ease}}
.sobre:hover{transform:translateY(-3px)}
.sobre .solapa{position:absolute;left:0;right:0;top:0;height:92px;background:${T.mist};clip-path:polygon(0 0,100% 0,50% 100%);transform-origin:top;transition:transform 1s ${T.ease};z-index:2}
.sobre::after{content:"";position:absolute;inset:0;background:linear-gradient(to top right,transparent 49.6%,${a(T.ink, 10)} 50%,transparent 50.4%),linear-gradient(to top left,transparent 49.6%,${a(T.ink, 10)} 50%,transparent 50.4%)}
.lacre{position:absolute;left:50%;top:70px;z-index:3;width:46px;height:46px;margin-left:-23px;border-radius:50%;background:radial-gradient(circle at 35% 30%,${T.bright},${T.brand} 70%);display:grid;place-items:center;font-family:${T.display};font-style:italic;font-size:1.35rem;color:${T.panel};transition:transform .8s ${T.ease},opacity .8s}
.sobre.abierta .lacre{transform:scale(.6) rotate(-30deg);opacity:0}
.sobre.abierta .solapa{transform:rotateX(180deg);opacity:0;transition:transform .8s ${T.ease},opacity .5s .3s}
.sobre.guardada{height:0;margin:0;opacity:0;transition:height .5s ${T.ease},margin .5s ${T.ease},opacity .4s}
.sobre.abierta{cursor:default}
.premio{width:min(380px,100%);text-align:left}
.premio-et{margin:0 0 ${T.space};text-align:center;font-family:${T.display};font-style:italic;font-size:1.25rem;color:${T.panel}}
.bf-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,210px),1fr));gap:${s(2.6)} ${s(1.8)};margin:${s(.6)} 0 ${s(2.6)}}
.bf-grid .oferta-arte{aspect-ratio:1}
.bf-grid .precios b{font-size:1.25rem}
.bf-grid .oferta h4{font-size:1.05rem}
.volver{margin:0 auto;display:flex;font-size:.7rem;letter-spacing:.2em;text-transform:uppercase}

/* ---------------------------------------------------------------- adaptable al hueco (no a la ventana) */
@container pieza (max-width:860px){
  .hero{grid-template-columns:1fr;padding:${s(2.5)} ${s(1.6)}}.hero-arte{max-width:360px;order:-1}
  .catalogo{padding:${T.space} ${s(1.2)} ${s(2.4)}}
  .det-panel{grid-template-columns:1fr;border-radius:${r(2)} ${r(2)} 0 0;align-self:end;height:auto;max-height:94vh}
  .det-media{position:relative;height:auto;aspect-ratio:1.2}
  .detalle{padding:0;place-items:end center}
  .rel-fila{grid-template-columns:repeat(2,1fr)}
  .bf-escena[data-cap]:not([data-cap="intro"]) .globo{transform:translateY(-18%)}
  .cap{padding:${s(6)} ${s(1.4)}}
  .cap-caja{margin:auto 0 0;width:100%}
  .feed,.feed-et{display:none}
  .relampago+.relampago{border-left:0;border-top:1px solid var(--linea)}
}
@container pieza (max-width:560px){
  .top{grid-template-columns:auto 1fr auto}.marca-txt{display:none}.modos{justify-self:center}
  .modos button{padding:${s(.55)} ${s(.8)};font-size:.76rem}
  .libro{left:${T.space};right:${T.space};top:${T.space};width:auto;display:flex;gap:${T.space}}.libro div{flex:1;flex-direction:column;gap:2px;border-top:1px solid var(--linea)}.libro dt{font-size:.55rem}.libro dd{font-size:.95rem}
  .aviso-sim{display:none}.capitulos{right:${T.space};bottom:${T.space}}
  .reloj span{padding:${s(.7)} ${s(.6)};flex-direction:column;gap:0}
  .quick{opacity:1;transform:none;pointer-events:auto;left:auto}.quick-btn span{display:none}
  .flota{display:none}
}

/* Movimiento reducido: sin animaciones ni transiciones (sin forzar: selector más específico y al final). */
.d[data-reducido="true"] *,.d[data-reducido="true"] *::before,.d[data-reducido="true"] *::after{animation:none;transition:none;scroll-behavior:auto}
.d[data-reducido="true"] .bf-titulo span,.d[data-reducido="true"] .bf-titulo em,.d[data-reducido="true"] .bf-regla,.d[data-reducido="true"] .bf-sub,.d[data-reducido="true"] .reloj{opacity:1;transform:none}
`;
