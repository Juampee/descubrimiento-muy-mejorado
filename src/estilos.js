/**
 * Estilos encapsulados en el Shadow DOM. Paleta y tipografías tomadas de ucjc.edu:
 * granate --color-brand-500 #96234a (escala 50–700), amarillo --color-secondary-500 #ffe768,
 * neutros #1d1f21…#f5f5f5, Encode Sans Semi Expanded (texto) y Playfair Display (titulares).
 * Si la página anfitriona no carga esas fuentes, se usan equivalentes del sistema.
 */
export const CSS = `
:host{display:block;
  --g50:#f5e9ed;--g150:#e0bdc9;--g300:#c07b92;--g500:#96234a;--g600:#781c3b;--g700:#5a152c;
  --am:#ffe768;--n900:#1d1f21;--n800:#3f4042;--n700:#606263;--n400:#a4a5a6;--n200:#d2d2d3;--n100:#e8e9e9;--n50:#f5f5f5;
  --papel:#faf7f3;
  --sans:"Encode Sans Semi Expanded","Encode Sans",ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
  --serif:"Playfair Display","Playfair",Georgia,"Times New Roman",serif;
  --ease:cubic-bezier(.2,.8,.2,1);--rebote:cubic-bezier(.2,1.4,.4,1);
  color:var(--n900);font-family:var(--sans)}
*{box-sizing:border-box}
button{font:inherit;color:inherit;cursor:pointer}
:focus-visible{outline:3px solid var(--am);outline-offset:2px;border-radius:6px}
[hidden]{display:none!important}
.d{position:relative;background:var(--papel);border-radius:28px;overflow:clip;isolation:isolate;transition:background .6s var(--ease)}
.d[data-modo="bf"]{background:#07040a;color:#fff}

/* ---------------------------------------------------------------- barra superior */
.top{position:sticky;top:0;z-index:20;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:12px;padding:14px clamp(14px,3vw,32px);
  background:color-mix(in srgb,var(--papel) 82%,transparent);backdrop-filter:blur(14px) saturate(1.4);border-bottom:1px solid rgba(29,31,33,.07);transition:background .6s,border-color .6s}
.d[data-modo="bf"] .top{background:rgba(7,4,10,.72);border-color:rgba(255,231,104,.15)}
.marca{display:flex;align-items:center;gap:10px;font-size:13px;letter-spacing:.02em;min-width:0}
.sello{display:grid;place-items:center;height:30px;padding:0 9px;border-radius:8px;background:var(--g500);color:#fff;font-weight:800;letter-spacing:.12em;font-size:12px}
.d[data-modo="bf"] .sello{background:var(--am);color:#000}
.marca-txt{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--n700)}.d[data-modo="bf"] .marca-txt{color:#bbb}
.marca-txt b{color:inherit;font-weight:700}
.modos{position:relative;display:flex;padding:4px;border-radius:999px;background:var(--n100);gap:2px}
.d[data-modo="bf"] .modos{background:#1a1420}
.modos button{position:relative;z-index:1;border:0;background:none;padding:8px 16px;border-radius:999px;font-size:13px;font-weight:600;display:flex;align-items:center;gap:7px;transition:color .35s;white-space:nowrap}
.modos button[aria-selected="true"]{color:#fff}
.d[data-modo="bf"] .modos button[aria-selected="true"]{color:#000}
.pildora{position:absolute;left:0;top:4px;bottom:4px;border-radius:999px;background:var(--n900);transition:transform .55s var(--rebote),width .55s var(--rebote),background .5s}
.d[data-modo="bf"] .pildora{background:var(--am);box-shadow:0 0 24px rgba(255,231,104,.55)}
.led{width:8px;height:8px;border-radius:50%;background:#ff3358;box-shadow:0 0 0 0 rgba(255,51,88,.7);animation:led 1.6s infinite}
@keyframes led{70%{box-shadow:0 0 0 8px rgba(255,51,88,0)}100%{box-shadow:0 0 0 0 rgba(255,51,88,0)}}
.bolsa{justify-self:end;position:relative;display:grid;place-items:center;width:42px;height:42px;border-radius:50%;background:#fff;border:1px solid var(--n100)}
.d[data-modo="bf"] .bolsa{background:#1a1420;border-color:#2c2232;color:#fff}
.bolsa span{position:absolute;top:-4px;right:-4px;min-width:20px;height:20px;padding:0 5px;border-radius:10px;background:var(--g500);color:#fff;font-size:11px;font-weight:700;display:grid;place-items:center}
.d[data-modo="bf"] .bolsa span{background:var(--am);color:#000}

/* ---------------------------------------------------------------- botones */
.btn{border:0;border-radius:999px;padding:14px 22px;font-weight:700;font-size:14px;display:inline-flex;align-items:center;justify-content:center;gap:8px;transition:transform .25s var(--rebote),background .25s,box-shadow .25s}
.btn:active{transform:scale(.96)}
.primario{background:var(--g500);color:#fff;box-shadow:0 10px 24px -10px rgba(150,35,74,.7)}
.primario:hover{background:var(--g600);transform:translateY(-2px)}
.fantasma{background:transparent;border:1.5px solid var(--n900)}
.fantasma:hover{background:var(--n900);color:#fff}
.fantasma.claro{border-color:#fff;color:#fff}.fantasma.claro:hover{background:#fff;color:#000}
.grande{padding:17px 26px;font-size:15px;flex:1}
.hecho{background:#1f8a4c!important}

/* ---------------------------------------------------------------- hero */
.hero{display:grid;grid-template-columns:1.1fr .9fr;gap:clamp(16px,4vw,56px);align-items:center;padding:clamp(28px,6vw,72px) clamp(18px,4vw,48px) clamp(24px,4vw,48px)}
.eyebrow{display:flex;align-items:center;gap:10px;margin:0 0 18px;text-transform:uppercase;letter-spacing:.18em;font-size:11px;font-weight:700;color:var(--g500)}
.eyebrow span{width:28px;height:2px;background:currentColor}
.hero h1{font-family:var(--serif);font-weight:700;font-size:clamp(40px,6.4vw,84px);line-height:.98;letter-spacing:-.025em;margin:0 0 20px}
.hero h1 em{font-style:italic;color:var(--g500);position:relative;white-space:nowrap}
.hero h1 em::after{content:"";position:absolute;left:-2%;right:-2%;bottom:.06em;height:.22em;background:var(--am);z-index:-1;transform-origin:left;animation:subraya 1.1s .4s var(--ease) both}
@keyframes subraya{from{transform:scaleX(0)}}
.lead{font-size:clamp(15px,1.4vw,17px);line-height:1.6;color:var(--n700);max-width:46ch;margin:0 0 26px}
.hero-cta{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:30px}
.cifras{display:flex;gap:clamp(14px,3vw,34px);margin:0;flex-wrap:wrap}
.cifras dt{font-family:var(--serif);font-size:26px;font-weight:700}
.cifras dd{margin:2px 0 0;font-size:12px;color:var(--n700);display:flex;gap:6px;align-items:center}
.hero-arte{position:relative;aspect-ratio:1;max-width:520px;width:100%;justify-self:center}
.mancha{position:absolute;inset:4% 12% 0;border-radius:999px 999px 0 0;background:var(--g500)}
.mancha::after{content:"";position:absolute;inset:14px 14px 0;border:1px solid rgba(255,255,255,.28);border-bottom:0;border-radius:999px 999px 0 0}
@keyframes mancha{50%{border-radius:58% 42% 40% 60%/42% 60% 40% 58%;transform:rotate(8deg) scale(1.03)}}
.hero-prod{position:absolute;inset:16% 16% 8%;filter:drop-shadow(0 18px 18px rgba(0,0,0,.22));animation:flota 7s ease-in-out infinite}
.hero-prod svg{width:100%;height:100%}
@keyframes flota{50%{transform:translateY(-8px)}}
.flota{position:absolute;background:var(--papel);border:1px solid var(--n200);border-radius:2px;padding:12px 16px;box-shadow:none;display:flex;flex-direction:column;gap:3px;font-size:13px;animation:flota 7s ease-in-out infinite}
.flota small{color:var(--n700)}.flota b{font-family:var(--serif);font-weight:700;font-size:15px}
.f1{left:-4%;bottom:14%;animation-delay:-2s}.f2{right:-2%;top:10%;animation-delay:-4s}
.estrellas{position:relative;display:inline-block;color:var(--n200);letter-spacing:1px;font-size:.92em;line-height:1}
.estrellas::before{content:"★★★★★";position:absolute;inset:0;width:var(--v);overflow:hidden;color:#e0a100;white-space:nowrap}

/* ---------------------------------------------------------------- cinta */
.cinta{background:var(--n900);color:var(--am);overflow:hidden;padding:13px 0;transform:rotate(-1.2deg) scale(1.03);margin:8px 0 20px}
.cinta-pista{display:flex;gap:28px;width:max-content;animation:cinta 32s linear infinite;font-weight:700;text-transform:uppercase;letter-spacing:.12em;font-size:12px;align-items:center}
.cinta i{font-style:normal;color:var(--g150)}
@keyframes cinta{to{transform:translateX(-50%)}}

/* ---------------------------------------------------------------- catálogo */
.catalogo{padding:clamp(14px,3vw,32px) clamp(14px,3vw,40px) clamp(30px,5vw,56px);scroll-margin-top:80px}
.barra{display:flex;flex-wrap:wrap;gap:12px;align-items:center;margin-bottom:14px}
.buscador{flex:1 1 260px;display:flex;align-items:center;gap:10px;background:#fff;border:1.5px solid var(--n100);border-radius:999px;padding:0 8px 0 16px;transition:border-color .25s,box-shadow .25s;color:var(--n700)}
.buscador:focus-within{border-color:var(--g500);box-shadow:0 0 0 5px rgba(150,35,74,.1)}
.buscador input{flex:1;border:0;outline:0;background:none;font:inherit;font-size:14px;padding:13px 0;color:var(--n900);min-width:0}
kbd{font:600 11px var(--sans);border:1px solid var(--n200);border-radius:6px;padding:3px 7px;color:var(--n700)}
.cats{position:relative;display:flex;gap:2px;padding:4px;border-radius:999px;background:#fff;border:1.5px solid var(--n100);overflow-x:auto;scrollbar-width:none;max-width:100%}
.cats button{position:relative;z-index:1;border:0;background:none;padding:9px 15px;border-radius:999px;font-size:13px;font-weight:600;color:var(--n700);white-space:nowrap;transition:color .3s}
.cats sup{font-size:9px;margin-left:3px;opacity:.6}
.cats button[aria-selected="true"]{color:#fff}
.cats-ind{position:absolute;left:0;top:4px;bottom:4px;border-radius:999px;background:var(--g500);transition:transform .5s var(--rebote),width .5s var(--rebote)}
.orden{display:flex;align-items:center;gap:8px;font-size:12px;color:var(--n700)}
.orden select{font:inherit;font-size:13px;font-weight:600;color:var(--n900);border:1.5px solid var(--n100);background:#fff;border-radius:999px;padding:10px 14px}
.resultado{font-size:12px;color:var(--n700);margin:0 0 18px;letter-spacing:.02em}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,230px),1fr));gap:clamp(12px,2vw,24px)}
.card{position:relative;display:flex;flex-direction:column;gap:10px}
.card-visual{position:relative}
.card-media{position:relative;display:block;width:100%;border:0;padding:0;aspect-ratio:4/5;border-radius:22px;overflow:hidden;background:color-mix(in srgb,var(--tinte) 13%,#f4efe9);transition:background .5s var(--ease),border-radius .4s}
.card-media::after{content:"";position:absolute;inset:auto -20% -40% -20%;height:70%;background:radial-gradient(closest-side,color-mix(in srgb,var(--tinte) 28%,transparent),transparent);transition:transform .6s var(--ease)}
.card-media .arte{position:absolute;inset:10% 8% 14%;display:block;z-index:1;transition:transform .6s var(--rebote);filter:drop-shadow(0 16px 18px rgba(0,0,0,.16))}
.card-media svg{width:100%;height:100%}
.card:hover .card-media .arte{transform:translateY(-6px) scale(1.06) rotate(-2deg)}
.card:hover .card-media::after{transform:translateY(-12%)}
.tag{position:absolute;top:12px;left:12px;z-index:2;background:#fff;border-radius:999px;padding:5px 10px;font-size:10px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
.ver{position:absolute;top:12px;right:12px;z-index:2;font-size:11px;font-weight:700;background:var(--n900);color:#fff;border-radius:999px;padding:6px 11px;opacity:0;transform:translateY(-6px);transition:.35s var(--ease)}
.card:hover .ver,.card-media:focus-visible .ver{opacity:1;transform:none}
.quick{position:absolute;left:10px;right:10px;bottom:10px;z-index:3;display:flex;flex-direction:column;gap:6px;opacity:0;transform:translateY(10px);transition:.35s var(--ease);pointer-events:none}
.card:hover .quick,.card:focus-within .quick,.card.elige-talla .quick{opacity:1;transform:none;pointer-events:auto}
.quick-btn{border:0;border-radius:14px;padding:12px;background:rgba(255,255,255,.92);backdrop-filter:blur(8px);font-weight:700;font-size:13px;display:flex;align-items:center;justify-content:center;gap:6px;box-shadow:0 8px 20px -10px rgba(0,0,0,.4);transition:background .2s}
.quick-btn:hover{background:var(--n900);color:#fff}
.quick-tallas{display:none;gap:6px;justify-content:center;background:rgba(255,255,255,.95);border-radius:14px;padding:8px;box-shadow:0 8px 20px -10px rgba(0,0,0,.4)}
.card.elige-talla .quick-tallas{display:flex;animation:entra .3s var(--ease)}
.card.elige-talla .quick-btn{display:none}
.quick-tallas button{border:1.5px solid var(--n200);background:#fff;border-radius:10px;min-width:38px;padding:8px 6px;font-size:12px;font-weight:700;transition:.2s}
.quick-tallas button:hover{background:var(--g500);border-color:var(--g500);color:#fff;transform:translateY(-2px)}
@keyframes entra{from{opacity:0;transform:translateY(6px)}}
.card-info{display:flex;justify-content:space-between;gap:10px;align-items:flex-start;padding:0 4px}
.card-info h3{margin:0 0 4px;font-size:15px;font-weight:700;letter-spacing:-.005em}
.card-info p{margin:0;font-size:12px;color:var(--n700);display:flex;gap:5px;align-items:center;flex-wrap:wrap}
.card-info .n{color:var(--n400)}
.precio{font-family:var(--serif);font-size:18px;white-space:nowrap}
.swatches{display:flex;align-items:center;gap:7px;padding:0 4px}
.swatches button{width:18px;height:18px;border-radius:50%;border:2px solid #fff;background:var(--c);box-shadow:0 0 0 1px var(--n200);padding:0;transition:transform .25s var(--rebote),box-shadow .25s}
.swatches button[aria-checked="true"]{box-shadow:0 0 0 2px var(--n900);transform:scale(1.12)}
.swatches.grandes button{width:32px;height:32px;border-width:3px}
.color-nombre{font-size:11px;color:var(--n700);margin-left:4px}
.vacio{display:flex;flex-direction:column;gap:6px;align-items:center;text-align:center;padding:60px 20px;color:var(--n700)}
.vacio b{font-family:var(--serif);font-size:28px;color:var(--n900)}
.vacio .btn{margin-top:12px}

/* ---------------------------------------------------------------- detalle */
.detalle{position:fixed;inset:0;z-index:50;display:grid;place-items:center;padding:clamp(0px,3vw,32px)}
.det-fondo{position:absolute;inset:0;background:rgba(20,8,13,.55);backdrop-filter:blur(10px)}
.det-panel{position:relative;width:min(1080px,100%);height:min(92vh,860px);overflow:auto;overscroll-behavior:contain;background:var(--papel);border-radius:28px;display:grid;grid-template-columns:1fr 1fr;box-shadow:0 40px 120px -30px rgba(0,0,0,.6);color:var(--n900)}
.det-cerrar{position:absolute;top:14px;right:14px;z-index:3;width:44px;height:44px;border-radius:50%;border:0;background:#fff;display:grid;place-items:center;box-shadow:0 6px 20px -8px rgba(0,0,0,.3);transition:transform .3s var(--rebote)}
.det-cerrar:hover{transform:rotate(90deg)}
.det-media{position:sticky;top:0;align-self:start;height:min(92vh,860px);background:color-mix(in srgb,var(--tinte) 16%,#f1ebe4);transition:background .5s;display:grid;place-items:center;overflow:hidden}
.det-media::before{content:"";position:absolute;width:80%;aspect-ratio:1;border-radius:50%;background:radial-gradient(closest-side,color-mix(in srgb,var(--tinte) 35%,transparent),transparent)}
.det-arte{position:relative;width:78%;aspect-ratio:1;filter:drop-shadow(0 30px 34px rgba(0,0,0,.22))}
.det-arte svg{width:100%;height:100%}
.det-info{padding:clamp(22px,4vw,48px);display:flex;flex-direction:column;gap:14px}
.det-cat{margin:0;text-transform:uppercase;letter-spacing:.16em;font-size:11px;font-weight:700;color:var(--g500)}
.det-info h2{margin:0;font-family:var(--serif);font-size:clamp(30px,3.6vw,46px);line-height:1.02;letter-spacing:-.02em}
.det-val{margin:0;display:flex;gap:6px;align-items:center;font-size:13px;color:var(--n700)}
.det-val b{color:var(--n900)}
.det-precio{margin:0;font-family:var(--serif);font-size:30px;display:flex;flex-direction:column}
.det-precio small{font-family:var(--sans);font-size:12px;color:var(--n700)}
.det-desc{margin:0;line-height:1.65;color:var(--n800)}
.det-et{display:block;font-size:12px;font-weight:600;color:var(--n700);margin-bottom:9px}
.det-et b{color:var(--n900)}
.tallas{display:flex;flex-wrap:wrap;gap:8px}
.tallas button{min-width:52px;padding:12px 10px;border-radius:12px;border:1.5px solid var(--n200);background:#fff;font-weight:700;transition:.2s}
.tallas button:hover{border-color:var(--n900)}
.tallas button[aria-pressed="true"]{background:var(--n900);border-color:var(--n900);color:#fff;transform:translateY(-2px)}
.det-aviso{margin:6px 0 0;font-size:12px;color:#c0002a;min-height:1em}
.det-compra{display:flex;gap:10px;align-items:stretch;position:sticky;bottom:0;padding:12px 0;background:linear-gradient(transparent,var(--papel) 30%)}
.cantidad{display:flex;align-items:center;border:1.5px solid var(--n200);border-radius:999px;background:#fff}
.cantidad button{border:0;background:none;width:42px;height:100%;font-size:18px}
.cantidad span{min-width:22px;text-align:center;font-weight:700}
.det-acc{border-top:1px solid var(--n100);padding-top:12px}
.det-acc summary{cursor:pointer;font-weight:700;font-size:14px;list-style:none;display:flex;justify-content:space-between}
.det-acc summary::after{content:"+";font-size:18px;transition:transform .3s}.det-acc[open] summary::after{transform:rotate(45deg)}
.det-acc ul,.det-acc p{margin:10px 0 0;color:var(--n700);font-size:13px;line-height:1.6;padding-left:18px}.det-acc p{padding:0}
.rel-fila{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
.rel-item{border:0;background:color-mix(in srgb,var(--tinte) 12%,#f1ebe4);border-radius:14px;padding:8px;display:flex;flex-direction:column;gap:3px;text-align:left;transition:transform .3s var(--rebote)}
.rel-item:hover{transform:translateY(-4px)}
.rel-item .arte{aspect-ratio:1}.rel-item svg{width:100%;height:100%}
.rel-item small{font-size:11px;line-height:1.2;color:var(--n700)}.rel-item b{font-size:12px}

/* ---------------------------------------------------------------- vuelo, toast, cortina */
.vuelo{position:fixed;z-index:80;pointer-events:none}
.vuelo svg{width:100%;height:100%}
.toast{position:fixed;left:50%;bottom:24px;z-index:90;transform:translate(-50%,calc(100% + 60px));visibility:hidden;display:flex;gap:10px;align-items:center;max-width:min(92vw,460px);background:var(--n900);color:#fff;border-radius:16px;padding:12px 18px 12px 12px;font-size:13px;box-shadow:0 20px 50px -12px rgba(0,0,0,.5);transition:transform .5s var(--rebote);pointer-events:none}
.toast.visible{transform:translate(-50%,0);visibility:visible}
.toast-ok{display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--am);color:#000;flex:none}
.d[data-modo="bf"] .toast{background:var(--am);color:#000}.d[data-modo="bf"] .toast-ok{background:#000;color:var(--am)}
.cortina{position:absolute;inset:0;z-index:70;display:none;place-items:center;clip-path:inset(0 100% 0 0);
  background:#0f0d0c}
.cortina[data-hacia="normal"]{background:var(--papel)}
.cortina.activa{display:grid}
.cortina span{font-family:var(--serif);font-weight:400;font-style:italic;color:#efe8dd;font-size:clamp(34px,6vw,72px);letter-spacing:-.02em}
.cortina[data-hacia="normal"] span{color:var(--g500);font-size:0}
.cortina[data-hacia="normal"] span::after{content:"Tienda UCJC";font-size:clamp(34px,6vw,72px)}

/* ================================================================ BLACK FRIDAY
   Registro editorial: tinta cálida, papel crema y granate. Sin brillos, sin cristal, sin neón. */
.d[data-modo="bf"]{--tinta:#0f0d0c;--tinta2:#171412;--crema:#efe8dd;--crema2:#b9b0a3;--linea:rgba(239,232,221,.16);background:var(--tinta);color:var(--crema)}
.d[data-modo="bf"] .top{background:var(--tinta);border-color:var(--linea);backdrop-filter:none}
.d[data-modo="bf"] .sello{background:var(--crema);color:var(--tinta)}
.d[data-modo="bf"] .marca-txt{color:var(--crema2)}
.d[data-modo="bf"] .modos{background:transparent;border:1px solid var(--linea)}
.d[data-modo="bf"] .pildora{background:var(--crema);box-shadow:none}
.d[data-modo="bf"] .modos button[aria-selected="true"]{color:var(--tinta)}
.d[data-modo="bf"] .led{animation:none;box-shadow:none;background:var(--g500)}
.d[data-modo="bf"] .bolsa{background:transparent;border-color:var(--linea);color:var(--crema)}
.d[data-modo="bf"] .bolsa span{background:var(--g500);color:#fff}
.d[data-modo="bf"] .toast{background:var(--crema);color:var(--tinta);border-radius:2px}
.d[data-modo="bf"] .toast-ok{background:var(--g500);color:#fff}
.bf{position:relative;--h:min(88vh,920px);font-family:var(--sans)}
.bf-scroll{height:var(--h);min-height:560px;overflow-y:auto;overscroll-behavior:contain;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:#4a423c var(--tinta)}
.bf-escena{position:sticky;top:0;height:var(--h);min-height:560px;overflow:hidden;background:var(--tinta)}
.globo{position:absolute;inset:0;width:100%;height:100%;cursor:grab;touch-action:pan-y;transition:opacity .9s var(--ease),transform 1.4s var(--ease)}
.globo:active{cursor:grabbing}
.bf-escena[data-cap="todo"] .globo{opacity:.12}
.bf-escena[data-cap="intro"] .globo,.bf-escena:not([data-cap]) .globo{transform:translateY(46%) scale(1.2);opacity:.4}
.bf-escena[data-cap="madrid"] .globo,.bf-escena[data-cap="europa"] .globo,.bf-escena[data-cap="america"] .globo{transform:translateX(-20%)}
.hud{position:absolute;z-index:2;color:var(--crema2)}
.libro{left:28px;top:28px;margin:0;width:190px}
.libro div{display:flex;justify-content:space-between;align-items:baseline;gap:10px;padding:9px 0;border-bottom:1px solid var(--linea)}
.libro div:first-child{border-top:1px solid var(--linea)}
.libro dt{font-size:10px;letter-spacing:.14em;text-transform:uppercase}
.libro dd{margin:0;font-family:var(--serif);font-size:18px;color:var(--crema);font-variant-numeric:tabular-nums lining-nums}
.feed{right:28px;top:28px;width:min(240px,34%);margin:0;padding:0;list-style:none}
.feed-et{position:absolute;right:28px;top:10px;margin:0;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--crema2)}
.feed li{padding:8px 0;border-bottom:1px solid var(--linea);font-family:var(--serif);font-size:14px;line-height:1.3;animation:feed .7s var(--ease)}
.feed li:nth-child(n+4){opacity:.5}.feed li:nth-child(5){opacity:.22}
.feed b{font-weight:700;color:var(--crema)}.feed span{display:block;font-style:italic;color:var(--crema2);font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
@keyframes feed{from{opacity:0;transform:translateY(-8px)}}
.capitulos{right:22px;bottom:28px;display:flex;flex-direction:column;gap:2px}
.capitulos button{border:0;background:none;padding:3px 6px;font-family:var(--serif);font-size:13px;color:var(--crema2);opacity:.5;text-align:right;transition:opacity .3s}
.capitulos button:hover{opacity:.85}
.capitulos .activo{opacity:1;color:var(--crema);text-decoration:underline;text-underline-offset:4px;text-decoration-thickness:1px}
.aviso-sim{left:28px;bottom:24px;margin:0;font-family:var(--serif);font-style:italic;font-size:12px;opacity:.6}
.bf-caps{position:relative;z-index:2;margin-top:calc(-1 * max(var(--h),560px));pointer-events:none}
.cap{min-height:max(var(--h),560px);display:flex;align-items:center;padding:clamp(70px,10vh,120px) clamp(18px,5vw,72px)}
.cap>*{pointer-events:auto}
.cap-intro{flex-direction:column;justify-content:center;text-align:center;gap:0}
.cap-intro>*{pointer-events:none}
.bf-sello{margin:0 0 26px;font-size:11px;letter-spacing:.32em;text-transform:uppercase;color:var(--crema2)}
.bf-titulo{margin:0;font-family:var(--serif);font-weight:700;font-size:clamp(64px,12.5vw,176px);line-height:.86;letter-spacing:-.035em;color:var(--crema)}
.bf-titulo em{display:block;font-style:italic;font-weight:400;color:var(--crema);padding-left:.6em}
.bf-titulo span,.bf-titulo em{opacity:0;transform:translateY(22px);animation:aparece 1.4s var(--ease) forwards}
.bf-titulo em{animation-delay:.18s}
@keyframes aparece{to{opacity:1;transform:none}}
.bf-regla{width:64px;height:1px;background:var(--g300);margin:30px auto 22px;opacity:0;animation:aparece 1s .5s var(--ease) forwards}
.bf-sub{margin:0 0 30px;font-family:var(--serif);font-style:italic;font-size:clamp(17px,2vw,22px);line-height:1.45;color:var(--crema2);max-width:34ch;opacity:0;animation:aparece 1s .6s var(--ease) forwards}
.reloj{display:flex;flex-direction:column;align-items:center;gap:10px;opacity:0;animation:aparece 1s .75s var(--ease) forwards}
.reloj p{margin:0;font-size:10px;letter-spacing:.3em;text-transform:uppercase;color:var(--crema2)}
.reloj div{display:flex;align-items:baseline;border-top:1px solid var(--linea);border-bottom:1px solid var(--linea)}
.reloj span{display:flex;align-items:baseline;gap:6px;padding:12px 18px;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--crema2)}
.reloj span+span{border-left:1px solid var(--linea)}
.reloj b{font-family:var(--serif);font-weight:400;font-size:clamp(26px,3.4vw,38px);color:var(--crema);font-variant-numeric:tabular-nums lining-nums;letter-spacing:0}
.desliza{margin:34px 0 0;font-size:10px;letter-spacing:.3em;text-transform:uppercase;color:var(--crema2);display:flex;flex-direction:column;align-items:center;gap:10px}
.desliza span{width:1px;height:42px;background:linear-gradient(var(--crema2),transparent);animation:baja 2.4s var(--ease) infinite;transform-origin:top}
@keyframes baja{0%{transform:scaleY(0)}50%{transform:scaleY(1)}100%{transform:scaleY(1);opacity:0}}
.cap-caja{width:min(430px,100%);margin-left:auto;background:var(--tinta2);border:1px solid var(--linea);padding:clamp(22px,3vw,34px);opacity:0;transform:translateY(40px);transition:opacity 1s var(--ease),transform 1s var(--ease)}
.cap.visto .cap-caja{opacity:1;transform:none}
.cap-caja.ancha{width:min(1040px,100%);margin:0 auto}
.cap-caja.centro{margin:0 auto;text-align:center;display:flex;flex-direction:column;align-items:center;width:min(460px,100%)}
.cap-num{margin:0 0 14px;font-size:10px;letter-spacing:.3em;text-transform:uppercase;color:var(--g300)}
.cap-caja h3{margin:0 0 12px;font-family:var(--serif);font-weight:400;font-size:clamp(30px,3.6vw,46px);line-height:1.02;letter-spacing:-.02em;color:var(--crema)}
.cap-caja h3 em{font-style:italic}
.cap-txt{margin:0 0 24px;color:var(--crema2);line-height:1.6;font-size:14px}
.oferta{display:flex;flex-direction:column;gap:14px;color:var(--crema)}
.oferta-arte{position:relative;background:var(--crema);aspect-ratio:5/4;display:grid;place-items:center;overflow:hidden}
.oferta-arte .arte{width:58%;aspect-ratio:1;display:block;transition:transform 1s var(--ease)}
.oferta:hover .oferta-arte .arte{transform:scale(1.04)}
.oferta-arte svg{width:100%;height:100%}
.desc{position:absolute;top:12px;left:14px;font-family:var(--serif);font-style:italic;font-size:20px;color:var(--g500)}
.oferta h4{margin:0;font-family:var(--serif);font-weight:400;font-size:19px}
.precios{margin:0;display:flex;gap:12px;align-items:baseline;font-variant-numeric:lining-nums}
.precios b{font-family:var(--serif);font-weight:400;font-size:24px;color:var(--crema)}
.precios s{color:var(--crema2);font-size:13px;opacity:.75}
.bf-btn{width:100%;border-radius:0;background:var(--crema);color:var(--tinta);font-size:11px;letter-spacing:.2em;text-transform:uppercase;padding:15px 18px;box-shadow:none}
.bf-btn svg{display:none}
.bf-btn:hover{background:#fff;transform:none}
.bf-tallas{display:flex;flex-wrap:wrap;gap:6px;align-items:center}
.bf-tallas span{width:100%;margin-bottom:2px;font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:var(--crema2)}
.bf-tallas button{border:1px solid var(--linea);background:transparent;color:var(--crema);border-radius:0;min-width:46px;padding:11px 8px;font-size:12px;letter-spacing:.06em;transition:background .25s,color .25s,border-color .25s}
.bf-tallas button:hover{background:var(--crema);color:var(--tinta);border-color:var(--crema)}
.relampagos{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr));border-top:1px solid var(--linea)}
.relampago{padding:22px 22px 6px;display:flex;flex-direction:column;gap:14px}
.relampago+.relampago{border-left:1px solid var(--linea)}
.relampago .stock{margin-top:auto}
.stock{display:flex;justify-content:space-between;align-items:center;gap:10px;font-size:11px;letter-spacing:.08em;color:var(--crema2)}
.stock b{color:var(--crema);font-weight:600}
.stock i{flex:1;height:1px;background:var(--linea)}
.stock em{display:block;height:1px;background:var(--crema);transition:width .8s var(--ease)}
.relampago.casi .stock b{color:var(--g300)}
.cuenta{margin:0;font-family:var(--serif);font-size:26px;color:var(--crema);font-variant-numeric:tabular-nums lining-nums}
.cuenta::before{content:"Termina en ";font-family:var(--sans);font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:var(--crema2);margin-right:6px;vertical-align:middle}
.sobre{position:relative;width:240px;height:158px;margin:18px 0 26px;border:0;padding:0;background:var(--crema);perspective:800px;transition:transform .5s var(--ease)}
.sobre:hover{transform:translateY(-3px)}
.sobre .solapa{position:absolute;left:0;right:0;top:0;height:92px;background:#e3dacb;clip-path:polygon(0 0,100% 0,50% 100%);transform-origin:top;transition:transform 1s var(--ease);z-index:2}
.sobre::after{content:"";position:absolute;inset:0;background:linear-gradient(to top right,transparent 49.6%,rgba(0,0,0,.08) 50%,transparent 50.4%),linear-gradient(to top left,transparent 49.6%,rgba(0,0,0,.08) 50%,transparent 50.4%)}
.lacre{position:absolute;left:50%;top:70px;z-index:3;width:46px;height:46px;margin-left:-23px;border-radius:50%;background:radial-gradient(circle at 35% 30%,var(--g300),var(--g500) 55%,var(--g700));display:grid;place-items:center;font-family:var(--serif);font-style:italic;font-size:22px;color:var(--g50);transition:transform .8s var(--ease),opacity .8s}
.sobre.abierta .lacre{transform:scale(.6) rotate(-30deg);opacity:0}
.sobre.abierta .solapa{transform:rotateX(180deg);opacity:0;transition:transform .8s var(--ease),opacity .5s .3s}
.sobre.guardada{height:0;margin:0;opacity:0;transition:height .5s var(--ease),margin .5s var(--ease),opacity .4s}
.sobre.abierta{cursor:default}
.premio{width:min(380px,100%);text-align:left}
.premio-et{margin:0 0 14px;text-align:center;font-family:var(--serif);font-style:italic;font-size:20px;color:var(--crema)}
.bf-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,210px),1fr));gap:34px 22px;margin:8px 0 34px}
.bf-grid .oferta-arte{aspect-ratio:1}
.bf-grid .precios b{font-size:20px}
.bf-grid .oferta h4{font-size:17px}
.volver{margin:0 auto;display:flex;border-radius:0;font-size:11px;letter-spacing:.2em;text-transform:uppercase}

/* ---------------------------------------------------------------- responsive */
@media (max-width:860px){
  .hero{grid-template-columns:1fr}.hero-arte{max-width:360px;order:-1}
  .det-panel{grid-template-columns:1fr;border-radius:24px 24px 0 0;align-self:end;height:auto;max-height:94vh}
  .det-media{position:relative;height:auto;aspect-ratio:1.2}
  .detalle{padding:0;place-items:end center}
  .rel-fila{grid-template-columns:repeat(2,1fr)}
  .bf-escena[data-cap]:not([data-cap="intro"]) .globo{transform:translateY(-18%)}
  .cap-caja{margin:auto 0 0;width:100%}
  .feed,.feed-et{display:none}
  .relampago+.relampago{border-left:0;border-top:1px solid var(--linea)}
}
@media (max-width:560px){
  .top{grid-template-columns:auto 1fr auto}.marca-txt{display:none}.modos{justify-self:center}
  .modos button{padding:8px 11px;font-size:12px}
  .libro{left:16px;right:16px;top:16px;width:auto;display:flex;gap:14px}.libro div{flex:1;flex-direction:column;gap:2px;border-top:1px solid var(--linea)}.libro dt{font-size:8.5px}.libro dd{font-size:15px}
  .aviso-sim{display:none}.capitulos{right:12px;bottom:14px}
  .reloj span{padding:10px 9px;flex-direction:column;gap:0}
  .quick{opacity:1;transform:none;pointer-events:auto}.quick-btn span{display:none}.quick{left:auto;width:auto}
  .flota{display:none}
}
.d[data-reducido="true"] *,.d[data-reducido="true"] *::before,.d[data-reducido="true"] *::after{animation:none!important;transition:none!important}
@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition-duration:0s!important;scroll-behavior:auto!important}}
`;
