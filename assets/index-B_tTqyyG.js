(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();const K=`
:host{display:block;width:100%;max-width:100%;min-width:0;contain:inline-size;
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
.d{container-type:inline-size;container-name:pieza;position:relative;background:var(--papel);border-radius:28px;overflow:clip;isolation:isolate;transition:background .6s var(--ease)}
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
.bolsa{justify-self:end;position:relative;display:grid;place-items:center;width:42px;height:42px;border-radius:50%;background:#fff;border:1px solid var(--n100);padding:0;transition:border-color .2s,transform .2s}
.bolsa:hover,.bolsa[aria-expanded="true"]{border-color:var(--n900)}
.mini{position:absolute;right:clamp(14px,3vw,32px);top:calc(100% + 8px);z-index:30;width:min(360px,calc(100% - 28px));background:var(--papel);color:var(--n900);border:1px solid var(--n200);border-radius:16px;padding:16px;box-shadow:0 24px 60px -20px rgba(0,0,0,.35);text-align:left}
.mini-cab{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}
.mini-cab b{font-family:var(--serif);font-size:20px}
.mini-x{border:0;background:none;padding:4px;display:grid;place-items:center}
.mini-lista{list-style:none;margin:0;padding:0;max-height:280px;overflow:auto}
.mini-lista li{display:grid;grid-template-columns:44px 1fr auto;gap:10px;align-items:center;padding:8px 0;border-bottom:1px solid var(--n100);font-size:13px}
.mini-arte{width:44px;height:44px;border-radius:10px;background:#efe8dd;display:grid;place-items:center}
.mini-arte svg{width:36px;height:36px}
.mini-txt{display:flex;flex-direction:column;min-width:0}
.mini-txt b{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mini-txt small{color:var(--n700)}
.mini-total{display:flex;justify-content:space-between;margin:12px 0;font-size:14px}
.mini-total b{font-family:var(--serif);font-size:18px}
.mini-vacio{margin:8px 0 14px;color:var(--n700);font-size:14px}
.mini-ir{width:100%}
.mini-nota{margin:10px 0 0;font-size:11px;color:var(--n700);text-align:center}
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
.cinta{contain:inline-size;background:var(--n900);color:var(--am);overflow:hidden;padding:13px 0;transform:rotate(-1.2deg) scale(1.03);margin:8px 0 20px}
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
.cats{contain:inline-size;min-width:0;flex:1 1 400px;position:relative;display:flex;gap:2px;padding:4px;border-radius:999px;background:#fff;border:1.5px solid var(--n100);overflow-x:auto;scrollbar-width:none;max-width:100%}
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
@container pieza (max-width:860px){
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
@container pieza (max-width:560px){
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
`,G=[{id:"todo",nombre:"Todo"},{id:"ropa",nombre:"Ropa"},{id:"deporte",nombre:"Deporte"},{id:"material",nombre:"Material"},{id:"regalos",nombre:"Regalos"}],m={granate:{nombre:"Granate",fondo:"#96234a",acento:"#ffe768"},vino:{nombre:"Vino",fondo:"#5a152c",acento:"#f5e9ed"},negro:{nombre:"Negro",fondo:"#1d1f21",acento:"#ffe768"},hueso:{nombre:"Hueso",fondo:"#f1ece4",acento:"#96234a"},gris:{nombre:"Gris jaspe",fondo:"#a4a5a6",acento:"#1d1f21"},amarillo:{nombre:"Amarillo",fondo:"#ffe768",acento:"#5a152c"},rosa:{nombre:"Rosa campus",fondo:"#e0bdc9",acento:"#5a152c"}},$=[{id:"prod-101",nombre:"Camiseta Técnica UCJC",categoria:"deporte",precio:19.99,tallas:["S","M","L","XL"],tipo:"camiseta",colores:["granate","negro","hueso"],etiqueta:"Más vendido",valoracion:4.8,resenas:214,descripcion:"Tejido transpirable de secado rápido con el wordmark UCJC en el pecho. Pensada para el polideportivo de Villafranca y para el día a día.",detalles:["Poliéster reciclado 100 %","Corte regular","Lavar a 30 °C"]},{id:"prod-102",nombre:"Sudadera con capucha",categoria:"ropa",precio:39.95,tallas:["XS","S","M","L","XL"],tipo:"sudadera",colores:["granate","gris","negro"],etiqueta:"Icono",valoracion:4.9,resenas:388,descripcion:"La sudadera de siempre: felpa perchada por dentro, capucha forrada y bolsillo canguro. El uniforme no oficial de la biblioteca.",detalles:["Algodón orgánico 80 % · poliéster 20 %","350 g/m²","Oversize suave"]},{id:"prod-103",nombre:"Chaqueta cortavientos",categoria:"ropa",precio:45,tallas:["M","L","XL"],tipo:"chaqueta",colores:["negro","vino"],valoracion:4.6,resenas:96,descripcion:"Ligera, repelente al agua y plegable en su propio bolsillo. Para los paseos entre facultades cuando cambia el tiempo.",detalles:["Nylon ripstop","Capucha ajustable","Se pliega en el bolsillo"]},{id:"prod-104",nombre:"Equipación oficial fútbol",categoria:"deporte",precio:55,tallas:["S","M","L"],tipo:"equipacion",colores:["granate","hueso"],etiqueta:"Oficial",valoracion:4.7,resenas:142,descripcion:"La equipación de los equipos de la universidad. Camiseta con cuello polo y número trasero opcional en tienda.",detalles:["Tejido técnico con malla lateral","Escudo bordado","Corte atlético"]},{id:"prod-105",nombre:"Mochila UCJC",categoria:"material",precio:29.9,tallas:[],tipo:"mochila",colores:["negro","granate"],valoracion:4.7,resenas:173,descripcion:'Compartimento acolchado para portátil de 15", bolsillo frontal y tejido resistente al agua.',detalles:["22 litros",'Funda portátil 15"',"Espalda acolchada"]},{id:"prod-106",nombre:"Cuaderno A4",categoria:"material",precio:4.5,tallas:[],tipo:"cuaderno",colores:["granate","amarillo","negro"],valoracion:4.5,resenas:61,descripcion:"Tapa dura, 120 hojas de cuadrícula de 5 mm y goma de cierre. Apuntes con estilo.",detalles:["120 hojas · 90 g","Cuadrícula 5 mm","Papel FSC"]},{id:"prod-107",nombre:"Taza de graduación",categoria:"regalos",precio:9.95,tallas:[],tipo:"taza",colores:["hueso","negro"],etiqueta:"Regalo",valoracion:4.8,resenas:120,descripcion:"Cerámica de 350 ml con «Promoción 2027» en oro. Apta para lavavajillas y para el café de antes del examen.",detalles:["Cerámica 350 ml","Apta lavavajillas","Impresión en oro"]},{id:"prod-108",nombre:"Llavero metálico",categoria:"regalos",precio:5,tallas:[],tipo:"llavero",colores:["granate","negro"],valoracion:4.4,resenas:58,descripcion:"Zamak esmaltado con el wordmark UCJC. Pequeño, pesado y sin fecha de caducidad.",detalles:["Zamak esmaltado","45 mm","Anilla de acero"]},{id:"prod-109",nombre:"Gorra bordada",categoria:"ropa",precio:18,tallas:[],tipo:"gorra",colores:["vino","hueso","negro"],etiqueta:"Nuevo",valoracion:4.6,resenas:37,descripcion:"Seis paneles de algodón lavado, visera curva y bordado frontal en hilo amarillo.",detalles:["Algodón lavado","Cierre metálico","Talla única"]},{id:"prod-110",nombre:"Botella térmica",categoria:"deporte",precio:22,tallas:[],tipo:"botella",colores:["granate","negro","rosa"],etiqueta:"Nuevo",valoracion:4.9,resenas:81,descripcion:"Acero inoxidable de doble pared: 24 h frío, 12 h caliente. Cabe en el portabotellas de la mochila.",detalles:["750 ml","Sin BPA","Doble pared al vacío"]},{id:"prod-111",nombre:"Tote bag Campus",categoria:"regalos",precio:12,tallas:[],tipo:"tote",colores:["hueso","negro","amarillo"],valoracion:4.5,resenas:66,descripcion:"Lona gruesa con asas largas. Para portátil, apuntes y la compra de vuelta a la residencia.",detalles:["Lona 340 g/m²","Bolsillo interior","38 × 42 cm"]},{id:"prod-112",nombre:"Jogger Villafranca",categoria:"ropa",precio:34,tallas:["XS","S","M","L","XL"],tipo:"jogger",colores:["gris","negro","vino"],valoracion:4.6,resenas:90,descripcion:"Felpa suave, cintura elástica con cordón y puño en el tobillo. Conjunto perfecto con la sudadera.",detalles:["Algodón 80 %","Bolsillos laterales","Corte cónico"]},{id:"prod-113",nombre:"Bufanda de punto",categoria:"regalos",precio:16,tallas:[],tipo:"bufanda",colores:["granate","vino"],etiqueta:"Invierno",valoracion:4.7,resenas:44,descripcion:"Punto doble a rayas con los colores de la universidad y flecos en los extremos.",detalles:["Acrílico suave","160 × 22 cm","Rayas jacquard"]},{id:"prod-114",nombre:"Set de pins",categoria:"regalos",precio:7.5,tallas:[],tipo:"pins",colores:["amarillo","granate"],valoracion:4.8,resenas:52,descripcion:"Cuatro pins esmaltados para personalizar la mochila o la chaqueta.",detalles:["4 pins","Esmalte duro","Cierre de mariposa"]}],v=Object.fromEntries($.map(s=>[s.id,s])),w={codigo:"black-friday-2026",etiqueta:"Black Friday UCJC",inicio:"2026-11-27T00:00:00+01:00",fin:"2026-11-30T23:59:59+01:00",descuentos:{"prod-102":50,"prod-101":40,"prod-103":45,"prod-105":35,"prod-110":40,"prod-112":30,"prod-109":30,"prod-104":25,"prod-106":20,"prod-107":30,"prod-108":20,"prod-111":35,"prod-113":40,"prod-114":25},relampago:["prod-102","prod-110","prod-103"],misterio:{id:"prod-112",descuento:70}},U=s=>Math.round(s*100)/100;function P(s,a=null){const e=a??w.descuentos[s.id]??0;return U(s.precio*(1-e/100))}const y=s=>Number(s).toLocaleString("es-ES",{style:"currency",currency:"EUR"}),Z=s=>String(s||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function Q(s,{categoria:a="todo",texto:e="",orden:t="destacados"}={}){const i=Z(e).trim();let o=s.filter(r=>(a==="todo"||r.categoria===a)&&(!i||Z(`${r.nombre} ${r.categoria} ${r.descripcion}`).includes(i)));return t==="precio-asc"?o=[...o].sort((r,d)=>r.precio-d.precio):t==="precio-desc"?o=[...o].sort((r,d)=>d.precio-r.precio):t==="valoracion"&&(o=[...o].sort((r,d)=>d.valoracion-r.valoracion)),o}const x='<ellipse cx="100" cy="186" rx="58" ry="6" fill="#000" opacity=".12"/>',q=(s,a,e,t=14)=>`<text x="${s}" y="${a}" text-anchor="middle" font-family="'Encode Sans Semi Expanded',system-ui,sans-serif" font-weight="800" font-size="${t}" letter-spacing="1.5" fill="${e}">UCJC</text>`,aa=(s,a=.18)=>{const e=parseInt(s.slice(1),16);return`#${[e>>16&255,e>>8&255,e&255].map(i=>Math.round(i*(1-a))).map(i=>i.toString(16).padStart(2,"0")).join("")}`},Y={camiseta:(s,a,e)=>`${x}
    <path d="M62 34 L38 46 L20 78 L42 90 L52 74 L52 172 L148 172 L148 74 L158 90 L180 78 L162 46 L138 34 C130 46 118 52 100 52 C82 52 70 46 62 34Z" fill="${s}"/>
    <path d="M62 34 C70 46 82 52 100 52 C118 52 130 46 138 34 L130 32 C124 40 114 44 100 44 C86 44 76 40 70 32Z" fill="${e}"/>
    <path d="M52 74 L52 172 L58 172 L58 80Z" fill="${e}" opacity=".35"/>
    ${q(100,100,a,18)}<rect x="74" y="106" width="52" height="3" rx="1.5" fill="${a}" opacity=".8"/>`,sudadera:(s,a,e)=>`${x}
    <path d="M64 40 C56 42 44 48 36 58 L18 120 L40 128 L52 92 L50 172 L150 172 L148 92 L160 128 L182 120 L164 58 C156 48 144 42 136 40Z" fill="${s}"/>
    <path d="M70 40 C70 20 84 12 100 12 C116 12 130 20 130 40 C122 52 112 56 100 56 C88 56 78 52 70 40Z" fill="${e}"/>
    <path d="M80 38 C82 26 90 22 100 22 C110 22 118 26 120 38 C114 44 108 46 100 46 C92 46 86 44 80 38Z" fill="#000" opacity=".25"/>
    <line x1="93" y1="50" x2="91" y2="74" stroke="${a}" stroke-width="2.5" stroke-linecap="round"/><line x1="107" y1="50" x2="109" y2="74" stroke="${a}" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M70 128 L130 128 L138 154 L62 154Z" fill="${e}" opacity=".55"/>
    ${q(100,108,a,17)}<rect x="50" y="164" width="100" height="8" fill="${e}"/>`,chaqueta:(s,a,e)=>`${x}
    <path d="M66 34 C54 38 42 46 36 58 L20 124 L40 130 L52 96 L50 172 L150 172 L148 96 L160 130 L180 124 L164 58 C158 46 146 38 134 34 L100 46Z" fill="${s}"/>
    <path d="M70 32 L100 46 L130 32 L124 22 L100 30 L76 22Z" fill="${e}"/>
    <line x1="100" y1="46" x2="100" y2="172" stroke="${a}" stroke-width="3"/>
    <rect x="62" y="112" width="26" height="4" rx="2" fill="${e}"/><rect x="112" y="112" width="26" height="4" rx="2" fill="${e}"/>
    <path d="M20 124 L40 130 L38 138 L18 132Z" fill="${a}"/><path d="M180 124 L160 130 L162 138 L182 132Z" fill="${a}"/>
    ${q(126,72,a,10)}`,equipacion:(s,a,e)=>`${x}
    <path d="M62 34 L36 44 L18 82 L42 94 L52 76 L52 172 L148 172 L148 76 L158 94 L182 82 L164 44 L138 34 L118 40 L100 58 L82 40Z" fill="${s}"/>
    <path d="M82 40 L100 58 L118 40 L112 34 L100 46 L88 34Z" fill="${a}"/>
    <path d="M66 40 L76 172 L88 172 L80 38Z" fill="${a}" opacity=".9"/><path d="M134 40 L124 172 L112 172 L120 38Z" fill="${a}" opacity=".9"/>
    <circle cx="124" cy="78" r="9" fill="${e}" stroke="${a}" stroke-width="2"/>
    <text x="100" y="140" text-anchor="middle" font-family="'Playfair Display',Georgia,serif" font-weight="900" font-size="38" fill="${a}">10</text>`,mochila:(s,a,e)=>`${x}
    <path d="M70 34 C70 18 82 12 100 12 C118 12 130 18 130 34" fill="none" stroke="${e}" stroke-width="8" stroke-linecap="round"/>
    <rect x="44" y="32" width="112" height="146" rx="34" fill="${s}"/>
    <rect x="60" y="104" width="80" height="58" rx="18" fill="${e}"/>
    <path d="M60 120 L140 120" stroke="${a}" stroke-width="3"/>
    <circle cx="132" cy="120" r="5" fill="${a}"/>
    ${q(100,78,a,16)}<rect x="44" y="52" width="112" height="4" fill="${e}" opacity=".6"/>`,cuaderno:(s,a,e)=>`${x}
    <rect x="48" y="20" width="108" height="160" rx="8" fill="${e}"/><rect x="44" y="16" width="108" height="160" rx="8" fill="${s}"/>
    <rect x="44" y="16" width="16" height="160" rx="6" fill="${e}"/>
    <rect x="136" y="16" width="7" height="160" fill="${a}" opacity=".85"/>
    <rect x="72" y="56" width="58" height="34" rx="4" fill="#fff" opacity=".9"/>
    ${q(101,79,"#1d1f21",14)}<rect x="72" y="140" width="58" height="3" rx="1.5" fill="${a}"/>`,taza:(s,a,e)=>`${x}
    <path d="M140 74 C172 74 172 132 136 132" fill="none" stroke="${e}" stroke-width="13"/>
    <path d="M44 50 L156 50 L148 166 C147 174 140 180 132 180 L68 180 C60 180 53 174 52 166Z" fill="${s}"/>
    <ellipse cx="100" cy="50" rx="56" ry="10" fill="${e}"/><ellipse cx="100" cy="50" rx="48" ry="6" fill="#3a1d10"/>
    <text x="100" y="108" text-anchor="middle" font-family="'Playfair Display',Georgia,serif" font-style="italic" font-weight="700" font-size="17" fill="${a}">Promoción</text>
    <text x="100" y="138" text-anchor="middle" font-family="'Playfair Display',Georgia,serif" font-weight="900" font-size="30" fill="${a}">2027</text>`,llavero:(s,a,e)=>`${x}
    <circle cx="100" cy="40" r="20" fill="none" stroke="#bbbcbc" stroke-width="6"/>
    <rect x="94" y="56" width="12" height="18" rx="3" fill="#a4a5a6"/>
    <rect x="46" y="72" width="108" height="92" rx="26" fill="${e}"/><rect x="50" y="70" width="100" height="88" rx="24" fill="${s}"/>
    ${q(100,124,a,24)}`,gorra:(s,a,e)=>`${x}
    <path d="M36 128 C36 70 64 42 102 42 C140 42 164 70 164 128Z" fill="${s}"/>
    <path d="M102 42 L102 128" stroke="${e}" stroke-width="2"/><path d="M70 52 C60 80 58 104 60 128" stroke="${e}" stroke-width="2" fill="none"/><path d="M134 52 C144 80 146 104 144 128" stroke="${e}" stroke-width="2" fill="none"/>
    <circle cx="102" cy="44" r="6" fill="${e}"/>
    <path d="M30 128 L170 128 C176 128 180 134 176 140 C150 156 60 160 24 146 C18 142 22 128 30 128Z" fill="${e}"/>
    ${q(102,100,a,18)}`,botella:(s,a,e)=>`${x}
    <rect x="80" y="10" width="40" height="26" rx="8" fill="${e}"/><rect x="84" y="34" width="32" height="10" fill="#bbbcbc"/>
    <path d="M70 58 C70 46 80 42 100 42 C120 42 130 46 130 58 L130 168 C130 176 124 182 116 182 L84 182 C76 182 70 176 70 168Z" fill="${s}"/>
    <rect x="70" y="70" width="10" height="100" fill="#fff" opacity=".18"/>
    <g transform="rotate(-90 100 118)">${q(100,124,a,20)}</g>`,tote:(s,a,e)=>`${x}
    <path d="M70 70 C70 20 130 20 130 70" fill="none" stroke="${e}" stroke-width="9"/>
    <path d="M40 64 L160 64 L166 180 L34 180Z" fill="${s}"/>
    <text x="100" y="112" text-anchor="middle" font-family="'Playfair Display',Georgia,serif" font-style="italic" font-weight="700" font-size="22" fill="${a}">Campus</text>
    ${q(100,140,a,16)}<path d="M60 152 L140 152" stroke="${a}" stroke-width="2" stroke-dasharray="4 5"/>`,jogger:(s,a,e)=>`${x}
    <path d="M58 18 L142 18 L150 172 L112 172 L102 66 L98 66 L88 172 L50 172Z" fill="${s}"/>
    <rect x="58" y="18" width="84" height="16" fill="${e}"/>
    <path d="M94 34 L92 52 M106 34 L108 52" stroke="${a}" stroke-width="2.5" stroke-linecap="round"/>
    <rect x="50" y="160" width="38" height="12" fill="${e}"/><rect x="112" y="160" width="38" height="12" fill="${e}"/>
    <rect x="140" y="40" width="4" height="114" fill="${a}" opacity=".9"/><rect x="56" y="40" width="4" height="114" fill="${a}" opacity=".9"/>`,bufanda:(s,a,e)=>`${x}
    <path d="M52 26 C80 52 120 52 148 26 L156 40 C124 72 76 72 44 40Z" fill="${s}"/>
    <path d="M60 52 L92 56 L84 168 L52 164Z" fill="${s}"/>
    ${[70,94,118,142].map(t=>`<path d="M${58-(t-52)*.06} ${t} L${90-(t-52)*.06} ${t+3} L${89-(t-52)*.06} ${t+12} L${57-(t-52)*.06} ${t+9}Z" fill="${a}"/>`).join("")}
    ${[54,60,66,72,78].map(t=>`<line x1="${t}" y1="165" x2="${t-1}" y2="180" stroke="${e}" stroke-width="3" stroke-linecap="round"/>`).join("")}
    <path d="M44 40 C76 72 124 72 156 40" fill="none" stroke="${e}" stroke-width="3"/>`,pins:(s,a,e)=>`${x}
    <circle cx="70" cy="70" r="34" fill="${s}" stroke="${e}" stroke-width="5"/>${q(70,76,a,15)}
    <path d="M132 36 L160 92 L104 92Z" fill="${a}" stroke="${e}" stroke-width="5" stroke-linejoin="round"/>
    <rect x="44" y="114" width="56" height="56" rx="14" fill="#1d1f21" stroke="${e}" stroke-width="5"/><text x="72" y="152" text-anchor="middle" font-family="'Playfair Display',Georgia,serif" font-weight="900" font-size="28" fill="${s}">27</text>
    <path d="M140 112 l9 19 21 3 -15 14 4 21 -19 -10 -19 10 4 -21 -15 -14 21 -3Z" fill="${s}" stroke="${e}" stroke-width="5" stroke-linejoin="round"/>`};function z(s,a=s.colores[0]){const e=m[a]||m.granate,t=Y[s.tipo]||Y.camiseta;return`<svg viewBox="0 0 200 200" role="img" aria-label="${s.nombre} · ${e.nombre}" xmlns="http://www.w3.org/2000/svg">${t(e.fondo,e.acento,aa(e.fondo))}</svg>`}const I="0a40uw0aq0te0aq0ud0aq0xb0bc0tx0bc0uv0bc1x80by0tl0by0uh0by0vd0ck0u50ck0v00ck2pc0d60tw0d60uq0d60vk0d62ii0d62pz0ds0tp0ds0ui0ds0vb0ds0w40ds2qp0ee0uc0ee0v40ee0vw0ee0wo0ee0xg0ee2hf0ee2qr0ee2rj0f00u80f00uz0f00vq0f00wh0f00x90f00y00f02h50f02hw0f02in0f02je0fm0u50fm0uw0fm0vm0fm0wd0fm0x30fm0xu0fm0yk0fm1j60fm1jw0fm1kn0fm2ad0fm2b40fm2bu0fm2gz0fm2hq0fm2ig0fm2j70fm2jx0g80u50g80uv0g80vl0g80wa0g80x00g80xq0g80yg0g80z60g81j90g81jz0g81kp0g81le0g81m40g82ai0g82b80g82by0g82co0g82de0g82et0g82fj0g82g90g82gz0g82hp0g82if0g82j40g82ju0gu0u60gu0uv0gu0vk0gu0wa0gu0wz0gu0xo0gu0yd0gu0z30gu0zs0gu1iq0gu1jf0gu1k40gu1kt0gu1lj0gu1m80gu2a20gu2as0gu2bh0gu2c60gu2cw0gu2dl0gu2ea0gu2ez0gu2fp0gu2ge0gu2h30gu2hs0gu2ii0gu2j70gu2jw0gu2kl0hg0ux0hg0vm0hg0wb0hg0wz0hg0xo0hg0yd0hg0z20hg0zq0hg10f0hg1ia0hg1iz0hg1jo0hg1kc0hg1l10hg1lq0hg1mf0hg29s0hg2ag0hg2b50hg2bu0hg2ci0hg2d70hg2dw0hg2el0hg2f90hg2fy0hg2gn0hg2hc0hg2i00hg2ip0hg2je0hg2k30i20v10i20vp0i20wd0i20x10i20xq0i20ye0i20z20i20zr0i210f0i21im0i21ja0i21jz0i21kn0i21lb0i21m00i21mo0i21nc0i21qq0i22a90i22ay0i22bm0i22ca0i22cz0i22dn0i22eb0i22ez0i22fo0i22gc0i22h00i22ho0i22id0i22j10i22jp0i22ke0io0ui0io0v60io0vu0io0wh0io0x50io0xt0io0yh0io0z50io0zt0io10h0io1140io11s0io1id0io1j10io1jp0io1kd0io1l00io1lo0io1mc0io1n00io1no0io1qb0io1qz0io2a70io2av0io2bj0io2c70io2cv0io2dj0io2e60io2eu0io2fi0io2g60io2gu0io2hi0io2i60io2it0io2jh0ja0up0ja0vc0ja0w00ja0wn0ja0xb0ja0xy0ja0ym0ja0z90ja0zx0ja10k0ja1180ja11v0ja12j0ja1i70ja1iu0ja1ji0ja1k50ja1kt0ja1lg0ja1m40ja1mr0ja1nf0ja1qo0ja1rc0ja2ax0ja2bk0ja2c80ja2cv0ja2dj0ja2e60ja2eu0ja2fh0ja2g50ja2gs0ja2hg0ja2i30ja2ir0jw0ux0jw0vk0jw0w70jw0wu0jw0xi0jw0y50jw0ys0jw0zf0jw1020jw10q0jw11d0jw1200jw12n0jw1hg0jw1i40jw1ir0jw1je0jw1k10jw1ko0jw1lb0jw1lz0jw1mm0jw1n90jw1nw0jw1qh0jw1r40jw2cd0jw2d00jw2do0jw2eb0jw2ey0jw2fl0jw2g80jw2gw0jw2hj0jw2i60ki0000ki0tx0ki0uk0ki0v70ki0vt0ki0wg0ki0x30ki0xq0ki0yd0ki0z00ki0zn0ki10a0ki10x0ki11k0ki1270ki12t0ki1hg0ki1i30ki1iq0ki1jd0ki1k00ki1kn0ki1la0ki1lx0ki1mk0ki1n70ki1nu0ki1og0ki1p30ki1r00ki1rn0ki2cn0ki2da0ki2dx0ki2ek0ki2f70ki2fu0ki2hq0ki2id0l40sz0l40tm0l40u80l40uv0l40vi0l40w40l40wr0l40xe0l40y00l40yn0l40za0l40zw0l410j0l41160l411s0l412f0l41320l41hj0l41i60l41it0l41jf0l41k20l41kp0l41lb0l41ly0l41ml0l41n70l41nu0l41oh0l41p30l41rm0l42ea0l42ex0l42fk0l42hg0lq0sq0lq0tc0lq0tz0lq0ul0lq0v80lq0vu0lq0wh0lq0x30lq0xq0lq0yc0lq0yz0lq0zl0lq1080lq10u0lq11g0lq1230lq12p0lq13c0lq1ib0lq1iy0lq1jk0lq1k70lq1kt0lq1lg0lq1m20lq1mp0lq1nb0lq1ny0lq1ok0lq1p70mc0si0mc0t50mc0tr0mc0ud0mc0v00mc0vm0mc0w80mc0wv0mc0xh0mc0y30mc0yp0mc0zc0mc0zy0mc10k0mc1170mc11t0mc12f0mc1320mc13o0mc1hx0mc1ij0mc1j60mc1js0mc1ke0mc1l10mc1ln0mc1m90mc1mw0mc1ni0mc1o40mc1or0mc2j40mc2mu0my0sc0my0sz0my0tl0my0u70my0ut0my0vf0my0w20my0wo0my0xa0my0xw0my0yi0my0z50my0zr0my10d0my10z0my11l0my1270my12u0my13g0my1420my1hm0my1i80my1iu0my1jh0my1k30my1kp0my1lb0my1lx0my1mk0my1n60my1ns0my1oe0my2840my28q0my29c0my2gr0my2hd0my2hz0my2il0nk0rm0nk0s80nk0su0nk0tg0nk0u20nk0up0nk0vb0nk0vx0nk0wj0nk0x50nk0xr0nk0yd0nk0yz0nk0zl0nk1070nk10t0nk11g0nk1220nk12o0nk13a0nk13w0nk1he0nk1i00nk1im0nk1j80nk1ju0nk1kg0nk1l20nk1lp0nk1mb0nk1mx0nk1nj0nk1o50nk1or0nk2760nk2c20nk2gd0nk2gz0nk2hl0nk2i70nk2k20o60s50o60sr0o60td0o60tz0o60um0o60v80o60vu0o60wg0o60x20o60xo0o60ya0o60yw0o60zi0o61040o610q0o611c0o611y0o612k0o61h90o61hv0o61ih0o61j30o61jp0o61kb0o61kx0o61lj0o61m50o61mr0o61nd0o61nz0o61ol0o626c0o626y0o628s0o629e0o62a00o62b80o62bu0o62do0o62ew0o62g40o62gq0o62hc0os0s40os0sq0os0tc0os0ty0os0uk0os0v60os0vs0os0we0os0x00os0xm0os0y80os0yu0os0zg0os1020os10o0os1gk0os1h60os1hs0os1ie0os1j00os1jm0os1k80os1ku0os1lg0os1m20os1mo0os1na0os1nw0os1oi0os1p40os2680os28o0os29a0os29w0os2ai0os2es0pe0s40pe0sq0pe0tc0pe0ty0pe0uk0pe0v60pe0vs0pe0we0pe0x00pe0xm0pe0y80pe0yu0pe0zg0pe1020pe1h70pe1ht0pe1if0pe1j10pe1jn0pe1k90pe1kv0pe1lh0pe1m30pe1mp0pe1nb0pe1nx0pe1oj0pe1p50pe1pr0pe1qd0pe25n0pe2690pe26v0pe28p0pe29b0pe29x0pe2aj0pe2dl0q00ss0q00te0q00u00q00um0q00v80q00vu0q00wg0q00x20q00xo0q00ya0q00yw0q00zj0q01go0q01ha0q01hw0q01ii0q01j40q01jq0q01kc0q01ky0q01lk0q01m60q01ms0q01ne0q01o00q01om0q01p80q01pu0q01qg0q01r20q02550q026e0q02a20qm0sv0qm0th0qm0u40qm0uq0qm0vc0qm0vy0qm0wk0qm0x60qm0xs0qm0ye0qm1bb0qm1bx0qm1cj0qm1d50qm1dr0qm1fm0qm1g80qm1gu0qm1hg0qm1i20qm1io0qm1ja0qm1jw0qm1ki0qm1l50qm1lr0qm1md0qm1mz0qm1nl0qm1o70qm1ot0qm1pf0qm1q10qm1qo0qm1ra0qm2600qm2ab0qm2cs0r80se0r80t00r80tm0r80u90r80uv0r80vh0r80w30r80wp0r80xc0r81aw0r81bj0r81c50r81cr0r81dd0r81e00r81em0r81f80r81fu0r81gg0r81h30r81hp0r81ib0r81ix0r81jj0r81k60r81ks0r81le0r81m00r81mn0r81n90r81nv0r81oh0r81p30r81pq0r81qc0r81qy0r81rk0r82070r825r0r82ck0ru0qp0ru0t70ru0tt0ru0uf0ru0v20ru0vo0ru0wa0ru0wx0ru1ak0ru1b70ru1bt0ru1cg0ru1d20ru1do0ru1eb0ru1ex0ru1fj0ru1g60ru1gs0ru1he0ru1i10ru1in0ru1j90ru1jw0ru1ki0ru1l50ru1lr0ru1md0ru1n00ru1nm0ru1o80ru1ov0ru1ph0ru1q30ru1qq0ru1rc0ru1ry0ru1zf0ru27h0sg0qa0sg19o0sg1ab0sg1ax0sg1bk0sg1c60sg1ct0sg1dg0sg1e20sg1ep0sg1fb0sg1fy0sg1gk0sg1h70sg1ht0sg1ig0sg1j20sg1jp0sg1kb0sg1ky0sg1lk0sg1m70sg1mt0sg1ng0sg1o20sg1op0sg1pb0sg1py0sg1zc0sg1zy0sg25l0sg26u0sg27h0sg2830t20on0t20p90t20pw0t20qj0t219h0t21a40t21aq0t21bd0t21c00t21cn0t21d90t21dw0t21ej0t21f50t21fs0t21gf0t21h20t21ho0t21ib0t21iy0t21jl0t21k70t21ku0t21lh0t21m40t21mq0t21nd0t21o00t21om0t21p90t21qj0t21r50t21yq0t21zd0t22000t225o0t226b0t226y0t227k0t22870to0mc0to0mz0to0nm0to0o90to0ow0to19z0to1am0to1b90to1bw0to1cj0to1d60to1dt0to1ef0to1f20to1fp0to1gc0to1gz0to1hm0to1i90to1iw0to1jj0to1k60to1kt0to1lg0to1m30to1mq0to1nd0to1o00to1on0to1px0to1qk0to1r70to1ru0to1sh0to1yv0to1zi0to2050to20s0to24m0to2590to25w0to26j0to2760to27t0to2bm0ua0lc0ua0lz0ua0mm0ua0na0ua0p70ua0ue0ua19w0ua1aj0ua1b70ua1bu0ua1ch0ua1d40ua1ds0ua1ef0ua1f20ua1fp0ua1gd0ua1h00ua1hn0ua1ia0ua1iy0ua1jl0ua1k80ua1kw0ua1lj0ua1m60ua1mt0ua1nh0ua1o40ua1q20ua1qp0ua1rc0ua1rz0ua1sn0ua1ta0ua1tx0ua1yg0ua1z30ua1zr0ua20e0ua2110ua24a0ua24x0ua25k0ua2670ua26v0uw0kz0uw0ln0uw0ma0uw0my0uw0pk0uw0s70uw0su0uw19w0uw1aj0uw1b70uw1bv0uw1ci0uw1d60uw1dt0uw1eh0uw1f50uw1fs0uw1gg0uw1h30uw1hr0uw1if0uw1j20uw1jq0uw1kd0uw1l10uw1lp0uw1mc0uw1n00uw1nn0uw1ob0uw1oz0uw1pm0uw1qa0uw1qx0uw1rl0uw1s90uw1sw0uw1tk0uw1u70uw1xh0uw1ys0uw1zg0uw2040uw20r0uw21f0uw2220uw2410uw24p0uw25c0uw2600uw26o0uw27b0uw28m0vi0kn0vi0lb0vi0lz0vi0mn0vi19y0vi1am0vi1ba0vi1by0vi1cm0vi1da0vi1dy0vi1em0vi1fa0vi1fy0vi1gm0vi1ha0vi1hy0vi1im0vi1ja0vi1jy0vi1km0vi1la0vi1ly0vi1ml0vi1n90vi1p90vi1px0vi1ql0vi1r90vi1rx0vi1sl0vi1t90vi1tx0vi1x90vi1xx0vi1yl0vi1z90vi1zx0vi20l0vi2190vi21x0vi22l0vi2390vi23x0vi24l0vi2590vi25x0vi26l0vi2790vi27x0vi28l0vi2990vi29x0w40iz0w40jn0w40kc0w40l00w40lp0w40md0w41a30w41ar0w41bg0w41c40w41cs0w41dh0w41e50w41eu0w41fi0w41g60w41gv0w41hj0w41i80w41iw0w41jk0w41k90w41kx0w41lm0w41ma0w41my0w41ob0w41p00w41po0w41qc0w41r10w41rp0w41uf0w41v30w41vr0w41wg0w41x40w41xt0w41yh0w41z50w41zu0w420i0w42170w421v0w422j0w42380w423w0w424l0w42590w425x0w426m0w427a0w427z0w428n0w429b0w42a00w42ao0wq0io0wq0jc0wq0k10wq0kq0wq0lf0wq0m40wq0mt0wq0rn0wq1az0wq1bo0wq1cd0wq1d20wq1dr0wq1eg0wq1f40wq1ft0wq1gi0wq1h70wq1hw0wq1il0wq1ja0wq1jz0wq1kn0wq1lc0wq1m10wq1mq0wq1nf0wq1o40wq1ot0wq1ph0wq1q60wq1qv0wq1sy0wq1tn0wq1uc0wq1v00wq1vp0wq1we0wq1x30wq1xs0wq1yh0wq1z60wq1zv0wq20j0wq2180wq21x0wq22m0wq23b0wq2400wq24p0wq25d0wq2620wq26r0wq27g0wq2850wq28u0wq29j0wq2a80wq2aw0xc0j20xc0jr0xc0kh0xc0l60xc0lw0xc0ml0xc0na0xc0o00xc0op0xc0qt0xc1bz0xc1cp0xc1de0xc1e40xc1et0xc1fi0xc1g80xc1gx0xc1hn0xc1ic0xc1j10xc1jr0xc1kg0xc1l60xc1lv0xc1mk0xc1na0xc1nz0xc1op0xc1pe0xc1q40xc1qt0xc1ri0xc1s80xc1sx0xc1tn0xc1uc0xc1v10xc1vr0xc1wg0xc1x60xc1xv0xc1yk0xc1za0xc1zz0xc20p0xc21e0xc2230xc22t0xc23i0xc2480xc24x0xc25m0xc26c0xc2710xc27r0xc28g0xc2950xc29v0xc2ak0xc2ba0xy0i20xy0is0xy0ji0xy0k80xy0ky0xy0lo0xy0me0xy0n40xy0nu0xy0ok0xy0pa0xy0q00xy0qq0xy0rg0xy1bo0xy1ce0xy1d40xy1du0xy1ek0xy1fa0xy1g00xy1gq0xy1hg0xy1i60xy1jm0xy1kc0xy1ny0xy1oo0xy1pe0xy1q40xy1qu0xy1rk0xy1sa0xy1t00xy1tq0xy1ug0xy1v60xy1vw0xy1wm0xy1xc0xy1y20xy1ys0xy1zi0xy2080xy20y0xy21o0xy22e0xy2340xy23u0xy24k0xy25a0xy2600xy26q0xy27g0xy2860xy28w0xy29m0xy2ac0xy2b20yk0h10yk0hs0yk0ij0yk0j90yk0k00yk0kr0yk0lh0yk0m80yk0mz0yk0np0yk0og0yk0p70yk0px0yk0qo0yk0rf0yk0s50yk1c50yk1cw0yk1dm0yk1ed0yk1f40yk1fu0yk1gl0yk1o00yk1oq0yk1ph0yk1q80yk1qy0yk1rp0yk1sg0yk1t60yk1tx0yk1uo0yk1ve0yk1w50yk1ww0yk1xm0yk1yd0yk1z40yk1zu0yk20l0yk21c0yk2220yk22t0yk23k0yk24a0yk2510yk25s0yk26i0yk2790yk2800yk28q0yk29h0yk2a80yk2ay0yk2eo0z60gr0z60hi0z60ia0z60j10z60js0z60kk0z60lb0z60m30z60mu0z60nm0z60od0z60p40z60pw0z60qn0z60rf0z60s60z61cq0z61f00z61fr0z61gj0z61kc0z61nd0z61o50z61ow0z61po0z61qf0z61r60z61ry0z61sp0z61th0z61u80z61v00z61vr0z61wi0z61xa0z61y10z61yt0z61zk0z620b0z62130z621u0z622m0z623d0z62440z624w0z625n0z626f0z62760z627x0z628p0z629g0z62a80z62az0z62d90z62gb0z62h20zs0fp0zs0gh0zs0h90zs0i10zs0it0zs0jm0zs0ke0zs0l60zs0ly0zs0mr0zs0nj0zs0ob0zs0p30zs0pw0zs0qo0zs0rg0zs0s80zs0t00zs1bu0zs1cm0zs1de0zs1m10zs1mt0zs1nl0zs1oe0zs1p60zs1py0zs1qq0zs1rj0zs1t30zs1tv0zs1un0zs1vg0zs1w80zs1x00zs1xs0zs1yl0zs1zd0zs2050zs20x0zs21q0zs22i0zs23a0zs2420zs24u0zs25n0zs26f0zs2770zs27z0zs28s0zs29k0zs2ac0zs2dh10e0g710e0h010e0ht10e0im10e0jg10e0k910e0l210e0lv10e0mo10e0nh10e0ob10e0p410e0px10e0qq10e0rj10e0sc10e0t510e0tz10e1bs10e1cl10e1de10e1e710e1i910e1jv10e1kp10e1li10e1mb10e1n410e1nx10e1pj10e1qd10e1r610e1tl10e1ue10e1v710e1w110e1wu10e1xn10e1yg10e1z910e20210e20w10e21p10e22i10e23b10e24410e24x10e25q10e26k10e27d10e28610e28z10e29s10e2al10e2be10e2c810e2d110e2du10e2h31100fx1100gs1100hm1100ig1100ja1100k41100ky1100lt1100mn1100nh1100ob1100p51100q01100qu1100ro1100si1100tc1100u61101bs1101cm1101dh1101eb1101hn1101jc1101k61101l01101p71101q11101qv1101sk1101te1101u81101v21101vx1101wr1101xl1101yf1101z911020311020y11021s11022m11023g11024a11025511025z11026t11027n11028h11029b1102a61102b01102bu1102co1102di1102ed1102f71102hp11m0fo11m0gj11m0hf11m0ia11m0j511m0k111m0kw11m0lr11m0mn11m0ni11m0od11m0p911m0q411m0qz11m0rv11m0sq11m0tl11m0uh11m0vc11m0w711m0x311m1eh11m1fd11m1g811m1h311m1hz11m1iu11m1jp11m1kl11m1lg11m1n711m1o211m1ox11m1pt11m1qo11m1ta11m1u511m1v111m1vw11m1wr11m1xn11m1yi11m1zd11m20911m21411m21z11m22v11m23q11m24l11m25h11m26c11m27711m28311m28y11m29t11m2ap11m2bk11m2cf11m2db11m2e611m2f111m2fx1280gb1280h81280i51280j11280jy1280ku1280lr1280mo1280nk1280oh1280pe1280qa1280r71280s31280t01280tx1280ut1280vq1280yg1280zc1281du1281er1281fo1281gk1281hh1281ie1281ja1281k71281l31281m01281mx1281nt1281oq1281pn1281qj1281rg1281sc1281t91281u61281v21281vz1281ww1281xs1281yp1281zl12820i12821f12822b12823812824512825112825y12826u12827r12828o12829k1282ah1282be1282ca1282d71282e31282f01282fx12u0f512u0g312u0h212u0i012u0iy12u0jw12u0ku12u0ls12u0mq12u0no12u0om12u0pk12u0qi12u0rg12u0sf12u0td12u0ub12u0v912u0w712u0y312u1e612u1f512u1g312u1h112u1hz12u1ix12u1jv12u1kt12u1lr12u1mp12u1nn12u1ol12u1pj12u1qi12u1rg12u1se12u1tc12u1ua12u1v812u1w612u1x412u1y212u1z012u1zy12u20w12u21v12u22t12u23r12u24p12u25n12u26l12u27j12u28h12u29f12u2ad12u2bb12u2ca12u2d812u2e612u2f412u2g212u2h012u2hy13g0ew13g0fw13g0gv13g0hv13g0iv13g0jv13g0ku13g0lu13g0mu13g0nu13g0ot13g0pt13g0qt13g0ss13g0ts13g0us13g0vr13g0wr13g0xr13g1bn13g1cn13g1dn13g1fm13g1gm13g1hm13g1il13g1jl13g1kl13g1ll13g1mk13g1nk13g1ok13g1pk13g1qj13g1rj13g1sj13g1ti13g1ui13g1vi13g1wi13g1xh13g1yh13g1zh13g20h13g21g13g22g13g23g13g24g13g25f13g26f13g27f13g28e13g29e13g2ae13g2be13g2cd13g2dd13g2ed13g2fd13g2gc13g2hc1420en1420fo1420gq1420hr1420it1420jv1420kw1420ly1420mz1420o11420p31420q41420s71420t91420ub1420vc1420we1420xg1421c21421ic1421jd1421kf1421lh1421mi1421nk1421ol1421pn1421qp1421rq1421ss1421tt1421uv1421vx1421wy1421y01421z114220314221514222614223814224914225b14226d14227e14228g14229i1422aj1422bl1422cm1422do1422eq1422fr1422gt1422m114o0d914o0ed14o0fh14o0gk14o0ho14o0is14o0jw14o0kz14o0m314o0n714o0ob14o0pe14o0sq14o0tt14o0ux14o0w114o1cl14o1h014o1i414o1kb14o1lf14o1mj14o1nn14o1or14o1pu14o1qy14o1s214o1t614o1u914o1vd14o1wh14o1xl14o1yo14o1zs14o20w14o22014o23314o24714o25b14o26f14o27i14o28m14o29q14o2au14o2bx14o2d114o2e514o2f914o2lv14o2mz15a05v15a07115a0bq15a0cw15a0e315a0f915a0gf15a0hl15a0is15a0jy15a0l415a0ma15a0nh15a0tc15a0ui15a0vo15a1fm15a1hy15a1lh15a1mn15a1nu15a1p015a1q615a1rc15a1si15a1tp15a1uv15a1w115a1x715a1ye15a1zk15a20q15a21w15a23215a24915a25f15a26l15a27r15a28y15a2a415a2ba15a2cg15a2dm15a2et15a2fz15a2h515a2n015w05015w06915w07j15w08s15w0a115w0ba15w0cj15w0ds15w0f115w0ga15w0hj15w0is15w0k215w0lb15w0mk15w0nt15w0st15w0u215w11l15w1gm15w1hv15w1kd15w1lm15w1mv15w1o515w1pe15w1qn15w1rw15w1t515w1ue15w1vn15w1ww15w1y515w1ze15w20o15w21x15w23615w24f15w25o15w26x15w28615w29f15w2ao15w2bx15w2d615w2eg15w2fp15w2gy15w2i715w2jg15w2kp15w2og15w2pp16i05e16i06q16i08316i09f16i0as16i0c416i0dh16i0et16i0g616i0hi16i0iu16i0k716i0lj16i0mw16i0o816i0uz16i10c16i11p16i1gi16i1hu16i1kj16i1lw16i1n816i1ol16i1px16i1ra16i1sm16i1ty16i1vb16i1wn16i1y016i1zc16i20p16i22116i23e16i24q16i26316i27f16i28s16i2a416i2bg16i2ct16i2e516i2fi16i2gu16i2i716i2jj16i2kw16i2m816i2nl16i2ox16i2qa16i2rm17400017401g17404d17405u17407a17408r1740a71740bo1740d41740ek1740g11740hh1740iy1740ke1740lv1740nb1740os1740q81740t51740ul17410f17411w1741961741hx1741jd1741ma1741p71741qn1741s41741tk1741v11741wh1741xy1741ze17420u17422b17423r17425817426o17428517429l1742b21742ci1742dz1742ff1742gv1742ic1742js1742l91742mp1742o61742pm1742r317q00017q04s17q06d17q07y17q09j17q0b517q0cq17q0eb17q0fw17q0hi17q0j317q0ko17q0m917q0nv17q0pg17q0r117q0sm17q0u817q0vt17q10l17q12617q13r17q1i217q1jo17q1l917q1mu17q1of17q1rm17q1t717q1us17q1we17q1xz17q1zk17q21517q22r17q24c17q25x17q27i17q29417q2ap17q2ca17q2dv17q2fh17q2h217q2in17q2k817q2lu17q2nf17q2p017q2ql18c05918c07018c08s18c0aj18c0e118c0ja18c0l118c0ms18c0ok18c0qb18c0tt18c0z218c10t18c12l18c14c18c16318c1k418c1lv18c1y518c1zw18c21n18c23e18c25518c26w18c28n18c2ae18c2c618c2dx18c2fo18c2hf18c2j618c2kx18c2q618y0fn18y0hm18y0jk18y0pg18y0re18y0td18y0z818y11618y13518y15318y17218y1sk18y20e18y22d18y24b18y26918y28818y2a618y2c518y2i019k0fj19k0oe19k0zh19k11p19k13x19k16419k23e19k25m19k27t1a60jk1a60m01a60og1a60vs1a60y81a610o1a61341a615k1a61801a61wg1a62681a628o1as0m01as0og1as0qw1as0vs1as0y81as10o1as1341as15k1as1801as1hs1as1k81as268",D=[];for(let s=0;s<I.length;s+=6)D.push([parseInt(I.slice(s,s+3),36)/10-90,parseInt(I.slice(s+3,s+6),36)/10-180]);const M=Math.PI/180,O=[40.43,-3.98],V=[["Madrid",40.42,-3.7],["Barcelona",41.39,2.17],["Sevilla",37.39,-5.98],["Valencia",39.47,-.38],["Bilbao",43.26,-2.93],["Lisboa",38.72,-9.14],["París",48.86,2.35],["Londres",51.5,-.12],["Berlín",52.52,13.4],["Roma",41.9,12.5],["Ámsterdam",52.37,4.9],["Dublín",53.35,-6.26],["Nueva York",40.71,-74],["Miami",25.76,-80.19],["Los Ángeles",34.05,-118.24],["Toronto",43.65,-79.38],["Ciudad de México",19.43,-99.13],["Bogotá",4.71,-74.07],["Lima",-12.05,-77.04],["Santiago",-33.45,-70.67],["Buenos Aires",-34.6,-58.38],["São Paulo",-23.55,-46.63],["Quito",-.18,-78.47],["Caracas",10.48,-66.9],["Marrakech",31.63,-7.98],["Lagos",6.52,3.38],["Nairobi",-1.29,36.82],["Ciudad del Cabo",-33.92,18.42],["Dubái",25.2,55.27],["Bombay",19.08,72.88],["Singapur",1.35,103.82],["Shanghái",31.23,121.47],["Seúl",37.57,126.98],["Tokio",35.68,139.69],["Sídney",-33.87,151.21],["Auckland",-36.85,174.76]];function H(s,a){const e=s*M,t=a*M;return[Math.cos(e)*Math.cos(t),Math.cos(e)*Math.sin(t),Math.sin(e)]}function ta([s,a,e]){return[Math.asin(Math.max(-1,Math.min(1,e)))/M,Math.atan2(a,s)/M]}function ea(s,a,e){const t=Math.max(-1,Math.min(1,s[0]*a[0]+s[1]*a[1]+s[2]*a[2])),i=Math.acos(t);if(i<1e-6)return s;const o=Math.sin(i),r=Math.sin((1-e)*i)/o,d=Math.sin(e*i)/o;return[s[0]*r+a[0]*d,s[1]*r+a[1]*d,s[2]*r+a[2]*d]}class ia{constructor(a,{reducido:e=!1}={}){var t;this.canvas=a,this.ctx=a.getContext("2d"),this.reducido=e,this.lon=10,this.lat=22,this.objLon=null,this.objLat=22,this.zoom=1,this.objZoom=1,this.giro=e?0:.035,this.arcos=[],this.etiquetas=!1,this.pings=[],this.arrastrando=null,this.vivo=!0,this._t0=performance.now(),this._medir(),this._ro=typeof ResizeObserver<"u"?new ResizeObserver(()=>this._medir()):null,(t=this._ro)==null||t.observe(a),this._enlazarPuntero(),this._cuadro=this._cuadro.bind(this),this._raf=requestAnimationFrame(this._cuadro)}destruir(){var a;this.vivo=!1,cancelAnimationFrame(this._raf),(a=this._ro)==null||a.disconnect()}enfocar(a,e,t=1){this.objLat=a,this.objLon=e,this.objZoom=t}liberar(a=1){this.objLon=null,this.objLat=18,this.objZoom=a}disparar(a,e="",t=O){this.arcos.length>40&&this.arcos.shift(),this.arcos.push({a:H(...t),b:H(...a),t:0,dest:a,nombre:e})}_medir(){const a=this.canvas.getBoundingClientRect(),e=Math.min(2,globalThis.devicePixelRatio||1);this.w=Math.max(1,a.width),this.h=Math.max(1,a.height),this.canvas.width=Math.round(this.w*e),this.canvas.height=Math.round(this.h*e),this.ctx.setTransform(e,0,0,e,0,0)}_enlazarPuntero(){const a=this.canvas;a.addEventListener("pointerdown",t=>{var i;this.arrastrando={x:t.clientX,y:t.clientY,lon:this.lon,lat:this.lat},this.objLon=null,(i=a.setPointerCapture)==null||i.call(a,t.pointerId)}),a.addEventListener("pointermove",t=>{if(!this.arrastrando)return;const i=120/(this.R||200);this.lon=this.arrastrando.lon-(t.clientX-this.arrastrando.x)*i,this.lat=Math.max(-60,Math.min(70,this.arrastrando.lat+(t.clientY-this.arrastrando.y)*i)),this.objLat=this.lat});const e=()=>{this.arrastrando=null};a.addEventListener("pointerup",e),a.addEventListener("pointercancel",e)}_proy(a,e,t=1){const i=a*M,o=(e-this.lon)*M,r=this.lat*M,d=Math.sin(r)*Math.sin(i)+Math.cos(r)*Math.cos(i)*Math.cos(o),n=this.R*t,c=this.cx+n*Math.cos(i)*Math.sin(o),p=this.cy-n*(Math.cos(r)*Math.sin(i)-Math.sin(r)*Math.cos(i)*Math.cos(o)),b=d>0||Math.hypot(c-this.cx,p-this.cy)>this.R;return{x:c,y:p,cosc:d,delante:b}}_cuadro(a){if(!this.vivo)return;const e=Math.min(64,a-(this._ult||a));if(this._ult=a,this.objLon!=null){let t=(this.objLon-this.lon+540)%360-180;this.lon+=t*.05}else this.arrastrando||(this.lon+=this.giro*e*.1);this.arrastrando||(this.lat+=(this.objLat-this.lat)*.05),this.zoom+=(this.objZoom-this.zoom)*.06,this._pintar(a,e),this._raf=requestAnimationFrame(this._cuadro)}_pintar(a,e){const{ctx:t,w:i,h:o}=this;this.cx=i/2,this.cy=o/2,this.R=Math.min(i,o)*.42*this.zoom;const{cx:r,cy:d,R:n}=this,c="239,232,221";t.clearRect(0,0,i,o),t.fillStyle="#14110f",t.beginPath(),t.arc(r,d,n,0,Math.PI*2),t.fill(),t.strokeStyle=`rgba(${c},.35)`,t.lineWidth=1,t.beginPath(),t.arc(r,d,n,0,Math.PI*2),t.stroke(),t.strokeStyle=`rgba(${c},.12)`,t.beginPath(),t.arc(r,d,n+7,0,Math.PI*2),t.stroke(),t.strokeStyle=`rgba(${c},.07)`,t.lineWidth=.75;for(let l=-180;l<180;l+=20)this._linea(Array.from({length:37},(u,g)=>[-90+g*5,l]));for(let l=-60;l<=60;l+=20)this._linea(Array.from({length:73},(u,g)=>[l,-180+g*5]));const p=Math.max(.7,n/300);t.fillStyle=`rgb(${c})`;for(let l=0;l<D.length;l++){const[u,g]=D[l],j=this._proy(u,g);j.cosc<=.02||(t.globalAlpha=.12+j.cosc*.55,t.beginPath(),t.arc(j.x,j.y,p,0,Math.PI*2),t.fill())}t.globalAlpha=1;const b=(l,u,g,j)=>{this.etiquetas&&(t.font=`italic ${Math.round(Math.max(11,n/26))}px "Playfair Display", Georgia, serif`,t.fillStyle=`rgba(${c},${j})`,t.fillText(l,u+8,g-6))},k=this.reducido?1:e/2200;this.arcos=this.arcos.filter(l=>l.t<1.8);for(const l of this.arcos){l.t+=k;const u=Math.min(1,l.t),g=Math.max(0,l.t-.8),X=.05+Math.acos(Math.max(-1,Math.min(1,l.a[0]*l.b[0]+l.a[1]*l.b[1]+l.a[2]*l.b[2])))*.1,A=40;let C=null;for(let _=0;_<=A;_++){const F=g+(u-g)*(_/A),[J,W]=ta(ea(l.a,l.b,F)),S=this._proy(J,W,1+Math.sin(Math.PI*F)*X);if(C&&S.delante&&C.delante){const E=_/A;t.strokeStyle=E>.85?`rgba(${c},${.9*E})`:`rgba(192,123,146,${.15+E*.6})`,t.lineWidth=.6+E*.8,t.beginPath(),t.moveTo(C.x,C.y),t.lineTo(S.x,S.y),t.stroke()}C=S}l.t>=1&&!l.llegado&&(l.llegado=!0,this.pings.push({dest:l.dest,nombre:l.nombre,t:0}))}this.pings=this.pings.filter(l=>l.t<1);for(const l of this.pings){l.t+=this.reducido?1:e/2600;const u=this._proy(...l.dest);if(u.cosc<=.05)continue;const g=l.t<.15?l.t/.15:1-(l.t-.15)/.85;t.strokeStyle=`rgba(${c},${g*.6})`,t.lineWidth=.75,t.beginPath(),t.arc(u.x,u.y,3+l.t*6,0,Math.PI*2),t.stroke(),t.fillStyle=`rgba(${c},${g})`,t.beginPath(),t.arc(u.x,u.y,1.6,0,Math.PI*2),t.fill(),l.nombre&&b(l.nombre,u.x,u.y,g*.9)}const h=this._proy(...O);h.cosc>0&&(t.fillStyle="#96234a",t.beginPath(),t.arc(h.x,h.y,3.5,0,Math.PI*2),t.fill(),t.strokeStyle=`rgba(${c},.8)`,t.lineWidth=.75,t.beginPath(),t.arc(h.x,h.y,7,0,Math.PI*2),t.stroke(),b("Villafranca",h.x+4,h.y,.9))}_linea(a){const{ctx:e}=this;let t=!1;e.beginPath();for(const[i,o]of a){const r=this._proy(i,o);r.cosc>0?(t?e.lineTo(r.x,r.y):e.moveTo(r.x,r.y),t=!0):t=!1}e.stroke()}}const oa="ucjc:descubrimiento:anadir-al-carrito@1",ra="ucjc:descubrimiento:campana-cambiada@1",f=s=>String(s??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),B=s=>(G.find(a=>a.id===s)||{}).nombre||s,T=s=>`<span class="estrellas" style="--v:${s/5*100}%" aria-label="${String(s).replace(".",",")} de 5">★★★★★</span>`,N=s=>s[Math.floor(Math.random()*s.length)];function sa(s,{precio:a=s.precio,cantidad:e=1}={}){return{productoId:s.id,nombre:s.nombre,precio:U(a),cantidad:Math.max(1,Math.floor(Number(e)||1))}}const L={bolsa:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 8h14l-1.2 11.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',lupa:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',cerrar:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',mas:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',ok:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg>'},R=[{id:"intro",foco:null,zoom:.95},{id:"madrid",foco:O,zoom:1.8,producto:"prod-102",lugar:"Villafranca del Castillo",titulo:"Todo empieza <em>en el campus</em>.",texto:"La sudadera de siempre, la que se ve en cada pasillo, a mitad de precio solo estos cuatro días."},{id:"europa",foco:[47,6],zoom:1.55,producto:"prod-101",lugar:"Europa",titulo:"Hasta donde <em>te lleve el Erasmus</em>.",texto:"Lisboa, París, Berlín: la camiseta técnica llega en 48 horas."},{id:"america",foco:[8,-72],zoom:1.35,producto:"prod-110",lugar:"Latinoamérica",titulo:"Al otro lado <em>del Atlántico</em>.",texto:"De Bogotá a Buenos Aires, antiguos alumnos que siguen llevando el campus consigo."},{id:"mundo",foco:null,zoom:1,titulo:"Ofertas relámpago"},{id:"misterio",foco:[20,120],zoom:1.1,titulo:"La caja misteriosa"},{id:"todo",foco:null,zoom:.8,titulo:"Todo el catálogo, rebajado"}];class na extends HTMLElement{static get observedAttributes(){return["modo"]}constructor(){var a;super(),this.estado={categoria:"todo",texto:"",orden:"destacados"},this.colores={},this.enBolsa=0,this.modo="normal",this.tarjetas=new Map,this.detalle=null,this.lineas=new Map,this.reducido=!!((a=globalThis.matchMedia)!=null&&a.call(globalThis,"(prefers-reduced-motion: reduce)").matches),this._timers=[]}connectedCallback(){this.shadowRoot||(this.attachShadow({mode:"open"}),this._montar()),this.getAttribute("modo")==="black-friday"&&this.cambiarModo("bf",{sinCortina:!0}),this.hasAttribute("emitir-campana")&&this._emitirCampana(),this._heroGiro=setInterval(()=>this._rotarHero(),3800)}disconnectedCallback(){clearInterval(this._heroGiro),this._pararBF()}attributeChangedCallback(a,e,t){!this.shadowRoot||e===t||this.cambiarModo(t==="black-friday"?"bf":"normal")}$(a){return this.shadowRoot.querySelector(a)}$$(a){return[...this.shadowRoot.querySelectorAll(a)]}_emitirCarrito(a){window.dispatchEvent(new CustomEvent(oa,{detail:a}))}_emitirCampana(){this.hasAttribute("emitir-campana")&&window.dispatchEvent(new CustomEvent(ra,{detail:{activa:this.modo==="bf",codigo:w.codigo,etiqueta:w.etiqueta,momento:new Date().toISOString()}}))}_montar(){const a=v["prod-102"];this.shadowRoot.innerHTML=`<style>${K}</style>
    <div class="d" data-modo="normal" data-reducido="${this.reducido}">
      <header class="top">
        <div class="marca"><span class="sello">UCJC</span><span class="marca-txt">Tienda <b>Descubrimiento</b></span></div>
        <div class="modos" role="tablist" aria-label="Modo de la tienda">
          <span class="pildora" aria-hidden="true"></span>
          <button type="button" role="tab" data-modo="normal" aria-selected="true">Tienda</button>
          <button type="button" role="tab" data-modo="bf" aria-selected="false"><i class="led"></i>Black Friday</button>
        </div>
        <button type="button" class="bolsa" data-bolsa-ico data-mini aria-expanded="false" aria-controls="mini" aria-label="Ver lo añadido a la cesta">${L.bolsa}<span data-bolsa>0</span></button>
        <div class="mini" id="mini" data-mini-panel hidden></div>
      </header>

      <div class="vista vista-normal">
        <section class="hero">
          <div class="hero-txt">
            <p class="eyebrow"><span></span>Colección Campus · 26/27</p>
            <h1>Lo que se lleva<br>en el <em>campus</em>.</h1>
            <p class="lead">Ropa, material y regalos oficiales de la UCJC. Diseñados para el día a día en Villafranca, Almagro y Castellana.</p>
            <div class="hero-cta">
              <button type="button" class="btn primario" data-ir-catalogo>Ver colección</button>
              <button type="button" class="btn fantasma" data-modo="bf"><i class="led"></i>Black Friday · 27 nov</button>
            </div>
            <dl class="cifras"><div><dt>4,8</dt><dd>${T(4.8)} 1.600 reseñas</dd></div><div><dt>24 h</dt><dd>Recogida en campus</dd></div><div><dt>30 días</dt><dd>Devolución gratis</dd></div></dl>
          </div>
          <div class="hero-arte" data-hero>
            <div class="mancha"></div>
            <div class="hero-prod" data-hero-prod data-id="${a.id}">${z(a,"granate")}</div>
            <div class="flota f1"><b data-hero-nombre>${f(a.nombre)}</b><small data-hero-precio>${y(a.precio)}</small></div>
            <div class="flota f2">${T(4.9)}<small>«La llevo a todas partes»</small></div>
          </div>
        </section>

        <div class="cinta" aria-hidden="true"><div class="cinta-pista">${Array(2).fill(["Envío gratis al campus","Recogida en 24 h","Devoluciones en 30 días","Producto oficial UCJC","Algodón orgánico","Ediciones limitadas"].map(e=>`<span>${e}</span><i>✦</i>`).join("")).join("")}</div></div>

        <section class="catalogo" data-catalogo>
          <div class="barra">
            <label class="buscador">${L.lupa}<input type="search" placeholder="Busca sudaderas, tazas, mochilas…" aria-label="Buscar productos" data-buscar><kbd>/</kbd></label>
            <div class="cats" role="tablist" aria-label="Categorías">
              <span class="cats-ind" aria-hidden="true"></span>
              ${G.map(e=>`<button type="button" role="tab" data-cat="${e.id}" aria-selected="${e.id==="todo"}">${e.nombre}<sup>${e.id==="todo"?$.length:$.filter(t=>t.categoria===e.id).length}</sup></button>`).join("")}
            </div>
            <label class="orden"><span>Ordenar</span><select data-orden aria-label="Ordenar productos">
              <option value="destacados">Destacados</option><option value="precio-asc">Precio: menor a mayor</option>
              <option value="precio-desc">Precio: mayor a menor</option><option value="valoracion">Mejor valorados</option></select></label>
          </div>
          <p class="resultado" data-resultado aria-live="polite"></p>
          <div class="grid" data-grid></div>
          <div class="vacio" data-vacio hidden><b>Nada por aquí.</b><span>Prueba con otra palabra o mira toda la colección.</span><button type="button" class="btn fantasma" data-reset>Ver todo</button></div>
        </section>
      </div>

      <div class="vista vista-bf" data-vista-bf hidden></div>
      <div class="cortina" aria-hidden="true"><span>Black Friday</span></div>
      <div class="detalle" data-detalle hidden></div>
      <div class="toast" role="status" data-toast></div>
    </div>`,this.shadowRoot.addEventListener("click",e=>this._clic(e)),this.shadowRoot.addEventListener("pointerdown",e=>{!this.$("[data-mini-panel]").hidden&&!e.target.closest("[data-mini-panel], [data-mini]")&&this._alternarMini(!1)}),this.$("[data-buscar]").addEventListener("input",e=>{this.estado.texto=e.target.value,this._pintarGrid()}),this.$("[data-orden]").addEventListener("change",e=>{this.estado.orden=e.target.value,this._pintarGrid()}),this.$("[data-buscar]").addEventListener("keydown",e=>{e.key==="Escape"&&(e.target.value="",this.estado.texto="",this._pintarGrid())}),this.shadowRoot.addEventListener("keydown",e=>{var t,i;e.key==="/"&&!((i=(t=e.target).closest)!=null&&i.call(t,"input,select,textarea"))&&(e.preventDefault(),this.$("[data-buscar]").focus()),e.key==="Escape"&&this.detalle&&this.cerrarDetalle(),e.key==="Escape"&&!this.$("[data-mini-panel]").hidden&&this._alternarMini(!1)}),this.$(".d").addEventListener("pointermove",e=>{if(this.modo!=="bf")return;const t=this.$(".d").getBoundingClientRect();this.$(".d").style.setProperty("--mx",`${e.clientX-t.left}px`),this.$(".d").style.setProperty("--my",`${e.clientY-t.top}px`)}),$.forEach(e=>this.tarjetas.set(e.id,this._crearTarjeta(e))),this._pintarGrid(!0),requestAnimationFrame(()=>this._moverIndicadores())}_clic(a){var i,o;const e=a.target.closest("button, [data-abrir]");if(!e)return;const t=e.dataset;if("mini"in t)return this._alternarMini();if("miniCerrar"in t)return this._alternarMini(!1);if("irCompra"in t)return this._alternarMini(!1),(i=document.querySelector("ucjc-compra"))==null?void 0:i.scrollIntoView({behavior:this.reducido?"auto":"smooth",block:"start"});if(t.modo)return this.cambiarModo(t.modo);if(t.cat)return this.estado.categoria=t.cat,this.$$("[data-cat]").forEach(r=>r.setAttribute("aria-selected",String(r===e))),this._moverIndicadores(),this._pintarGrid();if("reset"in t)return this.estado={categoria:"todo",texto:"",orden:"destacados"},this.$("[data-buscar]").value="",this.$("[data-orden]").value="destacados",this.$$("[data-cat]").forEach(r=>r.setAttribute("aria-selected",String(r.dataset.cat==="todo"))),this._moverIndicadores(),this._pintarGrid();if("irCatalogo"in t)return this.$("[data-catalogo]").scrollIntoView({behavior:this.reducido?"auto":"smooth",block:"start"});if(t.color)return this._cambiarColor(t.id,t.color);if(t.abrir)return this.abrirDetalle(t.abrir,e.querySelector(".arte"));if(t.quick){const r=v[t.quick];return r.tallas.length&&!t.talla?e.closest(".card").classList.toggle("elige-talla"):((o=e.closest(".card"))==null||o.classList.remove("elige-talla"),this.anadir(r,{},e.closest(".card").querySelector(".arte")))}if("cerrar"in t)return this.cerrarDetalle();if(t.detColor)return this._detalleColor(t.detColor);if(t.detTalla){this.detalle.talla=t.detTalla,this.$$("[data-det-talla]").forEach(r=>r.setAttribute("aria-pressed",String(r===e))),this.$("[data-det-aviso]").textContent="";return}if(t.detCant){this.detalle.cantidad=Math.max(1,Math.min(9,this.detalle.cantidad+Number(t.detCant))),this.$("[data-det-num]").textContent=this.detalle.cantidad;return}if("detAnadir"in t)return this._anadirDesdeDetalle(e);if(t.rel)return this.cerrarDetalle(!0),setTimeout(()=>{var r;return this.abrirDetalle(t.rel,(r=this.tarjetas.get(t.rel))==null?void 0:r.querySelector(".arte"))},this.reducido?0:260);if(t.bfAnadir)return this._anadirBF(e);if(t.ir!=null)return this._irCapitulo(Number(t.ir));if("misterio"in t)return this._abrirMisterio(e)}_crearTarjeta(a){const e=this.colores[a.id]||a.colores[0];this.colores[a.id]=e;const t=document.createElement("article");return t.className="card",t.dataset.id=a.id,t.style.setProperty("--tinte",m[e].fondo),t.innerHTML=`
      <div class="card-visual"><button type="button" class="card-media" data-abrir="${a.id}" aria-label="Ver ${f(a.nombre)}">
        ${a.etiqueta?`<span class="tag">${f(a.etiqueta)}</span>`:""}
        <span class="arte">${z(a,e)}</span>
        <span class="ver">Ver producto →</span>
      </button>
      <div class="quick">
        <button type="button" class="quick-btn" data-quick="${a.id}">${L.mas}<span>${a.tallas.length?"Añadir rápido":"Añadir"}</span></button>
        ${a.tallas.length?`<div class="quick-tallas" role="group" aria-label="Elige talla">${a.tallas.map(i=>`<button type="button" data-quick="${a.id}" data-talla="${i}">${i}</button>`).join("")}</div>`:""}
      </div></div>
      <div class="card-info">
        <div><h3>${f(a.nombre)}</h3><p>${B(a.categoria)} · ${T(a.valoracion)} <span class="n">(${a.resenas})</span></p></div>
        <b class="precio">${y(a.precio)}</b>
      </div>
      <div class="swatches" role="radiogroup" aria-label="Color">${a.colores.map(i=>`<button type="button" role="radio" data-id="${a.id}" data-color="${i}" aria-checked="${i===e}" aria-label="${m[i].nombre}" title="${m[i].nombre}" style="--c:${m[i].fondo}"></button>`).join("")}<span class="color-nombre">${m[e].nombre}</span></div>`,t}_cambiarColor(a,e){this.colores[a]=e;const t=this.tarjetas.get(a),i=v[a];t.style.setProperty("--tinte",m[e].fondo),t.querySelectorAll("[data-color]").forEach(r=>r.setAttribute("aria-checked",String(r.dataset.color===e))),t.querySelector(".color-nombre").textContent=m[e].nombre;const o=t.querySelector(".arte");if(this.reducido||!o.animate){o.innerHTML=z(i,e);return}o.animate([{opacity:1,transform:"scale(1) rotate(0)"},{opacity:0,transform:"scale(.86) rotate(-6deg)"}],{duration:160,easing:"ease-in"}).onfinish=()=>{o.innerHTML=z(i,e),o.animate([{opacity:0,transform:"scale(.86) rotate(6deg)"},{opacity:1,transform:"scale(1) rotate(0)"}],{duration:320,easing:"cubic-bezier(.2,1.4,.4,1)"})}}_pintarGrid(a=!1){const e=this.$("[data-grid]"),t=Q($,this.estado),i=new Map;a||[...e.children].forEach(r=>i.set(r.dataset.id,r.getBoundingClientRect())),e.replaceChildren(...t.map(r=>this.tarjetas.get(r.id))),this.$("[data-vacio]").hidden=t.length>0;const o=this.estado.texto.trim();this.$("[data-resultado]").textContent=`${t.length} ${t.length===1?"producto":"productos"}${o?` para «${o}»`:""}${this.estado.categoria!=="todo"?` en ${B(this.estado.categoria)}`:""}`,!(this.reducido||!e.animate)&&t.forEach((r,d)=>{const n=this.tarjetas.get(r.id),c=i.get(r.id);if(c){const p=n.getBoundingClientRect(),b=c.left-p.left,k=c.top-p.top;(b||k)&&n.animate([{transform:`translate(${b}px,${k}px)`},{transform:"none"}],{duration:520,easing:"cubic-bezier(.2,.8,.2,1)"})}else n.animate([{opacity:0,transform:"translateY(28px) scale(.96)"},{opacity:1,transform:"none"}],{duration:560,delay:Math.min(d,10)*45,easing:"cubic-bezier(.2,.8,.2,1)",fill:"backwards"})})}_moverIndicadores(){const a=(e,t,i)=>{if(!e||!t||!i)return;const o=e.getBoundingClientRect(),r=t.getBoundingClientRect();i.style.width=`${r.width}px`,i.style.transform=`translateX(${r.left-o.left+e.scrollLeft}px)`};a(this.$(".cats"),this.$('[data-cat][aria-selected="true"]'),this.$(".cats-ind")),a(this.$(".modos"),this.$('.modos [aria-selected="true"]'),this.$(".pildora"))}_rotarHero(){if(this.modo!=="normal"||document.hidden)return;const a=["prod-102","prod-101","prod-110","prod-109","prod-105","prod-113"],e=this.$("[data-hero-prod]");if(!e)return;const t=a[(a.indexOf(e.dataset.id)+1)%a.length],i=v[t],o=()=>{e.dataset.id=t,e.innerHTML=z(i,i.colores[0]),this.$("[data-hero-nombre]").textContent=i.nombre,this.$("[data-hero-precio]").textContent=y(i.precio)};if(this.reducido||!e.animate)return o();e.animate([{opacity:1,transform:"none"},{opacity:0,transform:"translateX(-40px) rotate(-8deg) scale(.9)"}],{duration:380,easing:"ease-in"}).onfinish=()=>{o(),e.animate([{opacity:0,transform:"translateX(50px) rotate(10deg) scale(.9)"},{opacity:1,transform:"none"}],{duration:700,easing:"cubic-bezier(.2,1.3,.3,1)"})}}anadir(a,{precio:e=a.precio,cantidad:t=1}={},i=null){const o=sa(a,{precio:e,cantidad:t});this._emitirCarrito(o),this.enBolsa+=o.cantidad;const r=this.lineas.get(o.productoId);r?r.cantidad+=o.cantidad:this.lineas.set(o.productoId,{nombre:o.nombre,precio:o.precio,cantidad:o.cantidad});const d=this.$("[data-bolsa]");return d.textContent=this.enBolsa,this.$("[data-mini-panel]").hidden||this._pintarMini(),this._volar(i),this._toast(`<b>Añadido</b> ${f(o.nombre)}${o.cantidad>1?` × ${o.cantidad}`:""} · ${y(o.precio)}`),o}_alternarMini(a){var o;const e=this.$("[data-mini-panel]"),t=this.$("[data-mini]"),i=a??e.hidden;i&&this._pintarMini(),e.hidden=!i,t.setAttribute("aria-expanded",String(i)),i&&!this.reducido&&((o=e.animate)==null||o.call(e,[{opacity:0,transform:"translateY(-8px)"},{opacity:1,transform:"none"}],{duration:260,easing:"cubic-bezier(.2,.8,.2,1)"}))}_pintarMini(){const a=[...this.lineas.entries()],e=a.reduce((i,[,o])=>i+o.precio*o.cantidad,0),t=!!document.querySelector("ucjc-compra");this.$("[data-mini-panel]").innerHTML=`
      <div class="mini-cab"><b>Tu cesta</b><button type="button" class="mini-x" data-mini-cerrar aria-label="Cerrar">${L.cerrar}</button></div>
      ${a.length?`<ul class="mini-lista">${a.map(([i,o])=>{const r=v[i];return`<li><span class="mini-arte">${r?z(r):""}</span><span class="mini-txt"><b>${f(o.nombre)}</b><small>${o.cantidad} × ${y(o.precio)}</small></span><b>${y(o.precio*o.cantidad)}</b></li>`}).join("")}</ul>
      <p class="mini-total"><span>Total añadido</span><b>${y(e)}</b></p>`:'<p class="mini-vacio">Aún no has añadido nada.</p>'}
      ${t?'<button type="button" class="btn primario mini-ir" data-ir-compra>Ir al carrito y pagar</button>':""}
      <p class="mini-nota">El carrito, los cambios de cantidad y el pago están en Compra.</p>`}_volar(a){const e=this.$("[data-bolsa-ico]"),t=()=>{var c;return(c=e.animate)==null?void 0:c.call(e,[{transform:"scale(1)"},{transform:"scale(1.35)"},{transform:"scale(1)"}],{duration:420,easing:"cubic-bezier(.3,1.6,.5,1)"})};if(this.reducido||!a||!a.animate)return t();const i=a.getBoundingClientRect(),o=e.getBoundingClientRect();if(!i.width)return t();const r=document.createElement("div");r.className="vuelo",r.innerHTML=a.innerHTML,Object.assign(r.style,{left:`${i.left}px`,top:`${i.top}px`,width:`${i.width}px`,height:`${i.height}px`}),this.$(".d").appendChild(r);const d=o.left+o.width/2-(i.left+i.width/2),n=o.top+o.height/2-(i.top+i.height/2);r.animate([{transform:"translate(0,0) scale(1) rotate(0)",opacity:1},{transform:`translate(${d*.45}px,${n*.45-120}px) scale(.55) rotate(-14deg)`,opacity:1,offset:.5},{transform:`translate(${d}px,${n}px) scale(.08) rotate(10deg)`,opacity:.4}],{duration:820,easing:"cubic-bezier(.5,0,.3,1)"}).onfinish=()=>{r.remove(),t()}}_toast(a){const e=this.$("[data-toast]");e.innerHTML=`<span class="toast-ok">${L.ok}</span><span>${a}</span>`,e.classList.add("visible"),clearTimeout(this._toastT),this._toastT=setTimeout(()=>e.classList.remove("visible"),2600)}abrirDetalle(a,e=null){const t=v[a];if(!t)return;this.detalle={id:a,color:this.colores[a]||t.colores[0],talla:null,cantidad:1};const i=this.$("[data-detalle]"),o=$.filter(n=>n.id!==a&&n.categoria===t.categoria).concat($.filter(n=>n.id!==a&&n.categoria!==t.categoria)).slice(0,4);i.innerHTML=`
      <div class="det-fondo" data-cerrar></div>
      <div class="det-panel" role="dialog" aria-modal="true" aria-label="${f(t.nombre)}">
        <button type="button" class="det-cerrar" data-cerrar aria-label="Cerrar">${L.cerrar}</button>
        <div class="det-media" style="--tinte:${m[this.detalle.color].fondo}">
          ${t.etiqueta?`<span class="tag">${f(t.etiqueta)}</span>`:""}
          <div class="det-arte" data-det-arte>${z(t,this.detalle.color)}</div>
        </div>
        <div class="det-info">
          <p class="det-cat">${B(t.categoria)} · Producto oficial</p>
          <h2>${f(t.nombre)}</h2>
          <p class="det-val">${T(t.valoracion)} <b>${String(t.valoracion).replace(".",",")}</b> <span>(${t.resenas} reseñas)</span></p>
          <p class="det-precio">${y(t.precio)}<small>IVA incluido · recogida gratis en campus</small></p>
          <p class="det-desc">${f(t.descripcion)}</p>
          <div class="det-bloque"><span class="det-et">Color · <b data-det-color-nombre>${m[this.detalle.color].nombre}</b></span>
            <div class="swatches grandes">${t.colores.map(n=>`<button type="button" role="radio" data-det-color="${n}" aria-checked="${n===this.detalle.color}" aria-label="${m[n].nombre}" style="--c:${m[n].fondo}"></button>`).join("")}</div></div>
          ${t.tallas.length?`<div class="det-bloque"><span class="det-et">Talla</span><div class="tallas">${t.tallas.map(n=>`<button type="button" data-det-talla="${n}" aria-pressed="false">${n}</button>`).join("")}</div><p class="det-aviso" data-det-aviso></p></div>`:""}
          <div class="det-compra">
            <div class="cantidad"><button type="button" data-det-cant="-1" aria-label="Menos">−</button><span data-det-num>1</span><button type="button" data-det-cant="1" aria-label="Más">+</button></div>
            <button type="button" class="btn primario grande" data-det-anadir><span>Añadir a la cesta</span></button>
          </div>
          <details class="det-acc" open><summary>Detalles</summary><ul>${t.detalles.map(n=>`<li>${f(n)}</li>`).join("")}</ul></details>
          <details class="det-acc"><summary>Envío y devoluciones</summary><p>Recogida gratis en cualquier campus en 24 h. Envío a domicilio en 48–72 h. Tienes 30 días para devolverlo.</p></details>
          <div class="rel"><p class="det-et">Combina con</p><div class="rel-fila">${o.map(n=>`<button type="button" class="rel-item" data-rel="${n.id}" style="--tinte:${m[n.colores[0]].fondo}"><span class="arte">${z(n)}</span><small>${f(n.nombre)}</small><b>${y(n.precio)}</b></button>`).join("")}</div></div>
        </div>
      </div>`,i.hidden=!1;const r=i.querySelector(".det-panel"),d=i.querySelector(".det-arte");if(r.querySelector("[data-cerrar]").focus({preventScroll:!0}),!(this.reducido||!r.animate)){if(i.querySelector(".det-fondo").animate([{opacity:0},{opacity:1}],{duration:380,easing:"ease-out"}),r.animate([{opacity:0,transform:"translateY(40px) scale(.98)"},{opacity:1,transform:"none"}],{duration:520,easing:"cubic-bezier(.2,.9,.2,1)"}),e){const n=e.getBoundingClientRect(),c=d.getBoundingClientRect();if(n.width&&c.width){const p=n.width/c.width;d.animate([{transform:`translate(${n.left-c.left}px,${n.top-c.top}px) scale(${p})`,transformOrigin:"top left"},{transform:"none",transformOrigin:"top left"}],{duration:640,easing:"cubic-bezier(.2,.9,.1,1)"})}}r.querySelectorAll(".det-info > *").forEach((n,c)=>n.animate([{opacity:0,transform:"translateY(16px)"},{opacity:1,transform:"none"}],{duration:480,delay:120+c*40,easing:"cubic-bezier(.2,.8,.2,1)",fill:"backwards"}))}}cerrarDetalle(a=!1){var o,r;const e=this.$("[data-detalle]");if(!this.detalle)return;const t=this.detalle.id;this.detalle=null;const i=()=>{e.hidden=!0,e.innerHTML=""};if(this.reducido||a||!e.animate)return i();e.querySelector(".det-fondo").animate([{opacity:1},{opacity:0}],{duration:260,fill:"forwards"}),e.querySelector(".det-panel").animate([{opacity:1,transform:"none"},{opacity:0,transform:"translateY(30px) scale(.98)"}],{duration:260,easing:"ease-in",fill:"forwards"}).onfinish=i,(r=(o=this.tarjetas.get(t))==null?void 0:o.querySelector(".card-media"))==null||r.focus({preventScroll:!0})}_detalleColor(a){var i;const e=v[this.detalle.id];this.detalle.color=a,this.$$("[data-det-color]").forEach(o=>o.setAttribute("aria-checked",String(o.dataset.detColor===a))),this.$("[data-det-color-nombre]").textContent=m[a].nombre,this.$(".det-media").style.setProperty("--tinte",m[a].fondo);const t=this.$("[data-det-arte]");t.innerHTML=z(e,a),(i=t.animate)==null||i.call(t,[{opacity:0,transform:"rotate(-5deg) scale(.92)"},{opacity:1,transform:"none"}],{duration:this.reducido?0:420,easing:"cubic-bezier(.2,1.3,.4,1)"}),this._cambiarColor(e.id,a)}_anadirDesdeDetalle(a){var t,i;const e=v[this.detalle.id];if(e.tallas.length&&!this.detalle.talla){this.$("[data-det-aviso]").textContent="Elige una talla para continuar.",(i=(t=this.$(".tallas")).animate)==null||i.call(t,[{transform:"translateX(0)"},{transform:"translateX(-8px)"},{transform:"translateX(8px)"},{transform:"translateX(0)"}],{duration:300});return}this.anadir(e,{cantidad:this.detalle.cantidad},this.$("[data-det-arte]")),a.classList.add("hecho"),a.innerHTML=`${L.ok}<span>Añadido</span>`,setTimeout(()=>{a.isConnected&&(a.classList.remove("hecho"),a.innerHTML="<span>Añadir otra vez</span>")},1600)}cambiarModo(a,{sinCortina:e=!1}={}){if(a===this.modo)return;this.modo=a,this.$$(".modos [data-modo]").forEach(o=>o.setAttribute("aria-selected",String(o.dataset.modo===a))),this._moverIndicadores(),this.detalle&&this.cerrarDetalle(!0);const t=()=>{this.$(".d").dataset.modo=a,this.$(".vista-normal").hidden=a!=="normal",this.$("[data-vista-bf]").hidden=a!=="bf",a==="bf"?this._iniciarBF():this._pararBF(),this._moverIndicadores()};this._emitirCampana();const i=this.$(".cortina");if(e||this.reducido||!i.animate)return t();this.getBoundingClientRect().top<0&&this.scrollIntoView({behavior:"smooth",block:"start"}),i.classList.add("activa"),i.dataset.hacia=a,i.animate([{clipPath:"inset(0 100% 0 0)"},{clipPath:"inset(0 0 0 0)"}],{duration:420,easing:"cubic-bezier(.7,0,.3,1)",fill:"forwards"}).onfinish=()=>{t(),i.animate([{clipPath:"inset(0 0 0 0)"},{clipPath:"inset(0 0 0 100%)"}],{duration:520,delay:160,easing:"cubic-bezier(.7,0,.3,1)",fill:"forwards"}).onfinish=()=>i.classList.remove("activa")}}_iniciarBF(){const a=this.$("[data-vista-bf]");a.firstElementChild||(a.innerHTML=this._tplBF());const e=a.querySelector("canvas");!this.globo&&e.getContext&&e.getContext("2d")&&(this.globo=new ia(e,{reducido:this.reducido})),this._stats=this._stats||{pedidos:1284,ventas:23517.4,paises:19,porMin:42},this._timers.push(setInterval(()=>this._latido(),this.reducido?2600:1400)),this._timers.push(setInterval(()=>this._reloj(),1e3)),this._reloj(),this._observarCapitulos()}_pararBF(){var e,t;this._timers.forEach(clearInterval),this._timers=[],(e=this._io)==null||e.disconnect(),this._io=null,(t=this.globo)==null||t.destruir(),this.globo=null;const a=this.$("[data-vista-bf]");a&&(a.innerHTML="")}_tplBF(){const a=["I","II","III","IV","V","VI","VII"],e=(t,i)=>{const o=v[t.producto];return`<section class="cap cap-oferta" data-cap="${i}">
        <div class="cap-caja">
          <p class="cap-num">${a[i]} — ${t.lugar}</p>
          <h3>${t.titulo}</h3><p class="cap-txt">${t.texto}</p>
          ${this._tplOfertaBF(o,w.descuentos[o.id],"grande")}
        </div></section>`};return`
    <div class="bf" data-bf>
      <div class="bf-scroll" data-bf-scroll tabindex="0" aria-label="Black Friday: desliza para recorrer el mapa">
        <div class="bf-escena" data-escena>
          <canvas class="globo" aria-label="Mapa con pedidos simulados"></canvas>
          <dl class="hud libro">
            <div><dt>Pedidos / min</dt><dd data-s-min>42</dd></div>
            <div><dt>Vendido</dt><dd data-s-ventas>23.517 €</dd></div>
            <div><dt>Ciudades</dt><dd data-s-paises>19</dd></div>
          </dl>
          <p class="hud feed-et">Últimos pedidos</p>
          <ol class="hud feed" data-feed aria-live="off"></ol>
          <nav class="hud capitulos" aria-label="Capítulos">${R.map((t,i)=>`<button type="button" data-ir="${i}" aria-label="Ir a ${t.titulo?t.titulo.replace(/<[^>]+>/g,""):"inicio"}">${a[i]}</button>`).join("")}</nav>
          <p class="hud aviso-sim">Pedidos simulados para la demostración. El mapa se puede arrastrar.</p>
        </div>
        <div class="bf-caps">
          <section class="cap cap-intro" data-cap="0">
            <p class="bf-sello">Tienda UCJC · Edición limitada</p>
            <h2 class="bf-titulo"><span>Black</span><em>Friday</em></h2>
            <div class="bf-regla"></div>
            <p class="bf-sub">Del 27 al 30 de noviembre, hasta la mitad de precio en toda la colección.</p>
            <div class="reloj" data-reloj><p data-reloj-et>Empieza en</p><div><span><b data-r="d">00</b>días</span><span><b data-r="h">00</b>h</span><span><b data-r="m">00</b>min</span><span><b data-r="s">00</b>s</span></div></div>
            <p class="desliza">Desliza<span></span></p>
          </section>
          ${R.slice(1,4).map((t,i)=>e(t,i+1)).join("")}
          <section class="cap cap-relampago" data-cap="4">
            <div class="cap-caja ancha">
              <p class="cap-num">V — Por tiempo limitado</p>
              <h3>Tres piezas, <em>unas horas</em>.</h3>
              <p class="cap-txt">Precio especial mientras dure el contador o queden unidades.</p>
              <div class="relampagos">${w.relampago.map((t,i)=>{const o=v[t];return`<div class="relampago" data-relampago="${i}">${this._tplOfertaBF(o,w.descuentos[t]+10,"mini")}<div class="stock"><span>Quedan <b data-stock>${24-i*7}</b></span><i><em data-stock-barra style="width:${100-i*25}%"></em></i></div><p class="cuenta" data-cuenta>14:59</p></div>`}).join("")}</div>
            </div>
          </section>
          <section class="cap cap-misterio" data-cap="5">
            <div class="cap-caja centro">
              <p class="cap-num">VI — Para quien llegue hasta aquí</p>
              <h3>El sobre <em>lacrado</em></h3>
              <p class="cap-txt">Uno por persona. Dentro, una pieza de la colección a&nbsp;−${w.misterio.descuento}&nbsp;%.</p>
              <button type="button" class="sobre" data-misterio aria-label="Abrir el sobre"><span class="solapa"></span><span class="lacre">U</span></button>
              <div class="premio" data-premio hidden></div>
            </div>
          </section>
          <section class="cap cap-todo" data-cap="6">
            <div class="cap-caja ancha">
              <p class="cap-num">VII — La colección</p>
              <h3>Todo, <em>rebajado</em>.</h3>
              <div class="bf-grid">${$.map(t=>this._tplOfertaBF(t,w.descuentos[t.id],"grid")).join("")}</div>
              <button type="button" class="btn fantasma claro volver" data-modo="normal">Volver a la tienda</button>
            </div>
          </section>
        </div>
      </div>
    </div>`}_tplOfertaBF(a,e,t){const i=P(a,e),o=a.colores[0],r=a.tallas.length?`<div class="bf-tallas"><span>Elige talla para añadir</span>${a.tallas.map(d=>`<button type="button" data-bf-anadir="${a.id}" data-talla="${d}" data-desc="${e}">${d}</button>`).join("")}</div>`:`<button type="button" class="btn bf-btn" data-bf-anadir="${a.id}" data-desc="${e}">Añadir a la cesta</button>`;return`<article class="oferta oferta-${t}">
      <div class="oferta-arte"><span class="desc">−${e} %</span><span class="arte">${z(a,o)}</span></div>
      <div class="oferta-info"><h4>${f(a.nombre)}</h4><p class="precios"><b>${y(i)}</b><s>${y(a.precio)}</s></p></div>
      ${r}
    </article>`}_anadirBF(a){var o;const e=v[a.dataset.bfAnadir],t=Number(a.dataset.desc),i=(o=a.closest(".oferta, .premio"))==null?void 0:o.querySelector(".arte");this.anadir(e,{precio:P(e,t)},i)}_latido(){var c;const a=this._stats,[e,t,i]=N(V),o=N($),r=1+Math.floor(Math.random()*3);a.pedidos+=r,a.ventas+=P(o)*r,a.porMin=Math.max(18,Math.min(140,a.porMin+Math.round((Math.random()-.45)*8))),Math.random()<.08&&a.paises<V.length&&a.paises++,(c=this.globo)==null||c.disparar([t,i],e);const d=(p,b)=>{const k=this.$(p);k&&(k.textContent=b)};d("[data-s-min]",a.porMin),d("[data-s-ventas]",`${Math.round(a.ventas).toLocaleString("es-ES")} €`),d("[data-s-paises]",a.paises);const n=this.$("[data-feed]");if(n){const p=document.createElement("li");for(p.innerHTML=`<b>${f(e)}</b><span>${f(o.nombre)}</span>`,n.prepend(p);n.children.length>5;)n.lastElementChild.remove()}}_reloj(){const a=Date.now(),e=Date.parse(w.inicio),t=Date.parse(w.fin),i=a<e?e:t,o=this.$("[data-reloj-et]");o&&(o.textContent=a<e?"Empieza en":a<t?"Termina en":"Ha terminado (pero las ofertas siguen en la demo)");let r=Math.max(0,i-a)/1e3;const d={d:Math.floor(r/86400),h:Math.floor(r%86400/3600),m:Math.floor(r%3600/60),s:Math.floor(r%60)};Object.entries(d).forEach(([n,c])=>{const p=this.$(`[data-r="${n}"]`);p&&(p.textContent=String(c).padStart(2,"0"))}),this.$$("[data-relampago]").forEach((n,c)=>{const b=900-Math.floor(a/1e3+c*293)%900;n.querySelector("[data-cuenta]").textContent=`${String(Math.floor(b/60)).padStart(2,"0")}:${String(b%60).padStart(2,"0")}`;const k=n.querySelector("[data-stock]");let h=Number(k.textContent);Math.random()<.18&&(h=h<=1?30-c*6:h-1),k.textContent=h,n.querySelector("[data-stock-barra]").style.width=`${Math.min(100,h/30*100)}%`,n.classList.toggle("casi",h<=5)})}_observarCapitulos(){const a=this.$("[data-bf-scroll]");!a||typeof IntersectionObserver>"u"||(this._io=new IntersectionObserver(e=>{e.forEach(t=>{if(!t.isIntersecting)return;const i=Number(t.target.dataset.cap),o=R[i];t.target.classList.add("visto"),this.$$(".capitulos [data-ir]").forEach((r,d)=>r.classList.toggle("activo",d===i)),this.$("[data-escena]").dataset.cap=o.id,this.globo&&(this.globo.etiquetas=!["intro","todo"].includes(o.id),o.foco?this.globo.enfocar(o.foco[0],o.foco[1],o.zoom):this.globo.liberar(o.zoom))})},{root:a,rootMargin:"-45% 0px -45% 0px",threshold:0}),this.$$("[data-cap]").forEach(e=>this._io.observe(e)))}_irCapitulo(a){const e=this.$("[data-bf-scroll]"),t=this.$(`[data-cap="${a}"]`);!e||!t||e.scrollTo({top:e.scrollTop+t.getBoundingClientRect().top-e.getBoundingClientRect().top,behavior:this.reducido?"auto":"smooth"})}_abrirMisterio(a){a.classList.contains("abierta")||(a.classList.add("abierta"),setTimeout(()=>a.classList.add("guardada"),this.reducido?0:650),setTimeout(()=>{var o;const{id:e,descuento:t}=w.misterio,i=this.$("[data-premio]");i.innerHTML=`<p class="premio-et">Dentro había…</p>${this._tplOfertaBF(v[e],t,"grande")}`,i.hidden=!1,(o=i.animate)==null||o.call(i,[{opacity:0,transform:"translateY(24px)"},{opacity:1,transform:"none"}],{duration:900,easing:"cubic-bezier(.2,.8,.2,1)"})},this.reducido?0:1100))}}customElements.get("ucjc-descubrimiento")||customElements.define("ucjc-descubrimiento",na);const la=document.getElementById("log");window.addEventListener("ucjc:descubrimiento:anadir-al-carrito@1",s=>{la.textContent=`ucjc:descubrimiento:anadir-al-carrito@1
`+JSON.stringify(s.detail,null,2)});
