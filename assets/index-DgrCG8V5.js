(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}})();const a={ink:"var(--ucjc-ink, #1a242c)",muted:"var(--ucjc-muted, #5a6a76)",fog:"var(--ucjc-fog, #f3f6f4)",mist:"var(--ucjc-mist, #e6ece8)",panel:"var(--ucjc-panel, #fbfcfb)",brand:"var(--ucjc-brand, #0b3d4a)",bright:"var(--ucjc-brand-bright, #146b7a)",leaf:"var(--ucjc-leaf, #2f6f4e)",warn:"var(--ucjc-warn, #8a3a3a)",sans:'var(--ucjc-font-sans, "Segoe UI", sans-serif)',display:"var(--ucjc-font-display, Georgia, serif)",radius:"var(--ucjc-radius, 6px)",space:"var(--ucjc-space, 0.75rem)",spaceLg:"var(--ucjc-space-lg, 1.25rem)",ease:"var(--ucjc-ease, cubic-bezier(.2, .8, .2, 1))"};a.edge=`var(--ucjc-edge, color-mix(in srgb, ${a.brand} 14%, transparent))`;const u=(n,t)=>`color-mix(in srgb, ${n} ${t}%, transparent)`,z=(n,t,e)=>`color-mix(in srgb, ${n} ${t}%, ${e})`,r=n=>`calc(${a.space} * ${n})`,A=n=>`calc(${a.radius} * ${n})`,_=A(100),P=(n,t,e)=>`0 ${n}px ${t}px -${Math.round(t/2)}px ${u(a.ink,e)}`,la=`
:host{display:block;width:100%;max-width:100%;min-width:0;contain:inline-size;
  color:${a.ink};font-family:${a.sans};
  --rebote:cubic-bezier(.2,1.4,.4,1)}
*{box-sizing:border-box}
button{font:inherit;color:inherit;cursor:pointer}
:focus-visible{outline:2px solid ${a.bright};outline-offset:2px;border-radius:${a.radius}}
.d [hidden],.d[hidden]{display:none}
.d{container-type:inline-size;container-name:pieza;position:relative;background:${a.panel};border:1px solid ${a.edge};border-radius:${A(2)};overflow:clip;isolation:isolate;transition:background .6s ${a.ease},color .6s ${a.ease}}
.d[data-modo="bf"]{background:${a.ink};color:${a.panel};border-color:${u(a.panel,12)}}

/* ---------------------------------------------------------------- barra superior */
.top{position:sticky;top:0;z-index:20;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:${a.space};padding:${a.space} ${a.spaceLg};
  background:${u(a.panel,88)};backdrop-filter:blur(12px);border-bottom:1px solid ${a.edge};transition:background .6s,border-color .6s}
.d[data-modo="bf"] .top{background:${u(a.ink,92)};border-color:${u(a.panel,12)}}
.marca{display:flex;align-items:center;gap:${r(.7)};font-size:.82rem;min-width:0}
.sello{display:grid;place-items:center;height:30px;padding:0 ${r(.7)};border-radius:${a.radius};background:${a.brand};color:${a.panel};font-family:${a.display};font-weight:800;letter-spacing:.06em;font-size:.8rem}
.d[data-modo="bf"] .sello{background:${a.panel};color:${a.ink}}
.marca-txt{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:${a.muted}}
.d[data-modo="bf"] .marca-txt{color:${u(a.panel,70)}}
.marca-txt b{color:${a.ink};font-weight:700}
.d[data-modo="bf"] .marca-txt b{color:${a.panel}}
.modos{position:relative;display:flex;padding:3px;border-radius:${_};background:${a.mist};gap:2px}
.d[data-modo="bf"] .modos{background:${u(a.panel,10)}}
.modos button{position:relative;z-index:1;border:0;background:none;padding:${r(.55)} ${r(1.2)};border-radius:${_};font-size:.84rem;font-weight:600;display:flex;align-items:center;gap:${r(.5)};transition:color .35s;white-space:nowrap;color:${a.muted}}
.modos button[aria-selected="true"]{color:${a.panel}}
.d[data-modo="bf"] .modos button{color:${u(a.panel,70)}}
.d[data-modo="bf"] .modos button[aria-selected="true"]{color:${a.ink}}
.pildora{position:absolute;left:0;top:3px;bottom:3px;border-radius:${_};background:${a.brand};transition:transform .55s var(--rebote),width .55s var(--rebote),background .5s}
.d[data-modo="bf"] .pildora{background:${a.panel}}
.led{width:7px;height:7px;border-radius:50%;background:${a.warn};box-shadow:0 0 0 0 ${u(a.warn,60)};animation:led 1.8s infinite}
@keyframes led{70%{box-shadow:0 0 0 7px ${u(a.warn,0)}}100%{box-shadow:0 0 0 0 ${u(a.warn,0)}}}
.bolsa{justify-self:end;position:relative;display:grid;place-items:center;width:42px;height:42px;border-radius:50%;background:${a.panel};border:1px solid ${a.edge};padding:0;color:${a.brand};transition:border-color .2s}
.bolsa:hover,.bolsa[aria-expanded="true"]{border-color:${a.bright}}
.d[data-modo="bf"] .bolsa{background:transparent;border-color:${u(a.panel,25)};color:${a.panel}}
.bolsa span{position:absolute;top:-4px;right:-4px;min-width:20px;height:20px;padding:0 5px;border-radius:${_};background:${a.bright};color:${a.panel};font-size:.7rem;font-weight:700;display:grid;place-items:center}
.mini{position:absolute;right:${a.spaceLg};top:calc(100% + ${r(.6)});z-index:30;width:min(360px,calc(100% - ${r(2)}));background:${a.panel};color:${a.ink};border:1px solid ${a.edge};border-radius:${A(2)};padding:${a.spaceLg};box-shadow:${P(24,60,25)};text-align:left}
.mini-cab{display:flex;justify-content:space-between;align-items:center;margin-bottom:${r(.7)}}
.mini-cab b{font-family:${a.display};font-size:1.25rem;color:${a.brand}}
.mini-x{border:0;background:none;padding:4px;display:grid;place-items:center;color:${a.muted}}
.mini-lista{list-style:none;margin:0;padding:0;max-height:280px;overflow:auto}
.mini-lista li{display:grid;grid-template-columns:44px 1fr auto;gap:${r(.7)};align-items:center;padding:${r(.6)} 0;border-bottom:1px solid ${a.mist};font-size:.82rem}
.mini-arte{width:44px;height:44px;border-radius:${a.radius};background:${a.fog};display:grid;place-items:center}
.mini-arte svg{width:36px;height:36px}
.mini-txt{display:flex;flex-direction:column;min-width:0}
.mini-txt b{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mini-txt small{color:${a.muted}}
.mini-total{display:flex;justify-content:space-between;margin:${a.space} 0;font-size:.9rem}
.mini-total b{font-family:${a.display};font-size:1.15rem;color:${a.brand}}
.mini-vacio{margin:${r(.6)} 0 ${a.space};color:${a.muted};font-size:.9rem}
.mini-ir{width:100%}
.mini-nota{margin:${r(.7)} 0 0;font-size:.72rem;color:${a.muted};text-align:center}

/* ---------------------------------------------------------------- botones */
.btn{border:1px solid transparent;border-radius:${a.radius};padding:${r(1.05)} ${r(1.6)};font-weight:600;font-size:.92rem;display:inline-flex;align-items:center;justify-content:center;gap:${r(.6)};transition:transform .25s var(--rebote),background .25s,border-color .25s,color .25s,box-shadow .25s}
.btn:active{transform:scale(.97)}
.primario{background:${a.brand};border-color:${a.brand};color:${a.panel};box-shadow:${P(10,24,35)}}
.primario:hover{background:${a.bright};border-color:${a.bright};transform:translateY(-1px)}
.fantasma{background:transparent;border-color:${a.edge};color:${a.brand}}
.fantasma:hover{border-color:${a.bright};background:${a.fog}}
.fantasma.claro{border-color:${u(a.panel,40)};color:${a.panel}}
.fantasma.claro:hover{background:${a.panel};color:${a.ink}}
.grande{padding:${r(1.3)} ${r(2)};font-size:.98rem;flex:1}
.hecho{background:${a.leaf};border-color:${a.leaf}}

/* ---------------------------------------------------------------- hero */
.hero{display:grid;grid-template-columns:1.1fr .9fr;gap:${r(3.5)};align-items:center;padding:${r(4.5)} ${r(3.5)} ${r(3)};
  background:radial-gradient(ellipse at 85% 10%,${u(a.bright,10)},transparent 55%),${a.panel}}
.eyebrow{display:flex;align-items:center;gap:${r(.8)};margin:0 0 ${a.spaceLg};text-transform:uppercase;letter-spacing:.16em;font-size:.72rem;font-weight:700;color:${a.bright}}
.eyebrow span{width:28px;height:2px;background:currentColor}
.hero h1{font-family:${a.display};font-weight:800;font-size:clamp(2.4rem,6vw,5rem);line-height:.98;letter-spacing:-.03em;margin:0 0 ${a.spaceLg};color:${a.brand}}
.hero h1 em{font-style:italic;font-weight:500;color:${a.bright};position:relative;white-space:nowrap}
.hero h1 em::after{content:"";position:absolute;left:-2%;right:-2%;bottom:.08em;height:.16em;background:${u(a.leaf,30)};z-index:-1;transform-origin:left;animation:subraya 1.1s .4s ${a.ease} both}
@keyframes subraya{from{transform:scaleX(0)}}
.lead{font-size:clamp(.95rem,1.4vw,1.06rem);line-height:1.65;color:${a.muted};max-width:46ch;margin:0 0 ${r(2)}}
.hero-cta{display:flex;flex-wrap:wrap;gap:${r(.7)};margin-bottom:${r(2.4)}}
.cifras{display:flex;gap:${r(2.4)};margin:0;flex-wrap:wrap;padding-top:${a.spaceLg};border-top:1px solid ${a.edge}}
.cifras dt{font-family:${a.display};font-size:1.6rem;font-weight:700;color:${a.brand}}
.cifras dd{margin:2px 0 0;font-size:.76rem;color:${a.muted};display:flex;gap:${r(.4)};align-items:center}
.hero-arte{position:relative;aspect-ratio:1;max-width:500px;width:100%;justify-self:center}
.mancha{position:absolute;inset:4% 12% 0;border-radius:${_} ${_} ${a.radius} ${a.radius};background:linear-gradient(170deg,${z(a.bright,18,a.fog)},${z(a.bright,38,a.mist)})}
.mancha::after{content:"";position:absolute;inset:${a.space} ${a.space} 0;border:1px solid ${u(a.brand,22)};border-bottom:0;border-radius:${_} ${_} 0 0}
.hero-prod{position:absolute;inset:16% 16% 8%;filter:drop-shadow(0 18px 18px ${u(a.ink,28)});animation:flota 7s ease-in-out infinite}
.hero-prod svg{width:100%;height:100%}
@keyframes flota{50%{transform:translateY(-8px)}}
.flota{position:absolute;background:${a.panel};border:1px solid ${a.edge};border-radius:${a.radius};padding:${r(.8)} ${r(1.1)};box-shadow:${P(14,30,18)};display:flex;flex-direction:column;gap:3px;font-size:.8rem;animation:flota 7s ease-in-out infinite}
.flota small{color:${a.muted}}
.flota b{font-family:${a.display};font-weight:700;font-size:.95rem;color:${a.brand}}
.f1{left:-4%;bottom:14%;animation-delay:-2s}.f2{right:-2%;top:10%;animation-delay:-4s}
.estrellas{position:relative;display:inline-block;color:${a.mist};letter-spacing:1px;font-size:.92em;line-height:1}
.estrellas::before{content:"★★★★★";position:absolute;inset:0;width:var(--v);overflow:hidden;color:${a.bright};white-space:nowrap}

/* ---------------------------------------------------------------- cinta */
.cinta{contain:inline-size;background:${a.brand};color:${a.panel};overflow:hidden;padding:${r(.85)} 0;margin:0 0 ${r(1.4)}}
.cinta-pista{display:flex;gap:${r(2)};width:max-content;animation:cinta 36s linear infinite;font-weight:600;text-transform:uppercase;letter-spacing:.14em;font-size:.74rem;align-items:center}
.cinta i{font-style:normal;color:${u(a.panel,55)}}
@keyframes cinta{to{transform:translateX(-50%)}}

/* ---------------------------------------------------------------- catálogo */
.catalogo{padding:${r(1.5)} ${r(2.5)} ${r(3.5)};scroll-margin-top:80px;background:${a.fog}}
.barra{display:flex;flex-wrap:wrap;gap:${a.space};align-items:center;margin-bottom:${a.space}}
.buscador{flex:1 1 260px;display:flex;align-items:center;gap:${r(.7)};background:${a.panel};border:1px solid ${a.edge};border-radius:${a.radius};padding:0 ${r(.6)} 0 ${a.space};transition:border-color .25s,box-shadow .25s;color:${a.muted}}
.buscador:focus-within{border-color:${a.bright};box-shadow:0 0 0 4px ${u(a.bright,14)}}
.buscador input{flex:1;border:0;outline:0;background:none;font:inherit;font-size:.9rem;padding:${r(.95)} 0;color:${a.ink};min-width:0}
kbd{font:600 .7rem ${a.sans};border:1px solid ${a.edge};border-radius:${a.radius};padding:2px 7px;color:${a.muted}}
.cats{contain:inline-size;min-width:0;flex:1 1 400px;position:relative;display:flex;gap:2px;padding:3px;border-radius:${a.radius};background:${a.panel};border:1px solid ${a.edge};overflow-x:auto;scrollbar-width:none;max-width:100%}
.cats button{position:relative;z-index:1;border:0;background:none;padding:${r(.6)} ${r(1.1)};border-radius:${a.radius};font-size:.84rem;font-weight:600;color:${a.muted};white-space:nowrap;transition:color .3s}
.cats sup{font-size:.6rem;margin-left:3px;opacity:.65}
.cats button[aria-selected="true"]{color:${a.panel}}
.cats-ind{position:absolute;left:0;top:3px;bottom:3px;border-radius:${a.radius};background:${a.brand};transition:transform .5s var(--rebote),width .5s var(--rebote)}
.orden{display:flex;align-items:center;gap:${r(.6)};font-size:.76rem;color:${a.muted}}
.orden select{font:inherit;font-size:.84rem;font-weight:600;color:${a.ink};border:1px solid ${a.edge};background:${a.panel};border-radius:${a.radius};padding:${r(.7)} ${a.space}}
.resultado{font-size:.76rem;color:${a.muted};margin:0 0 ${a.spaceLg};letter-spacing:.02em}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,230px),1fr));gap:${a.spaceLg}}
.card{position:relative;display:flex;flex-direction:column;gap:${r(.7)};background:${a.panel};border:1px solid ${a.edge};border-radius:${A(1.5)};padding:${r(.6)} ${r(.6)} ${a.space};transition:border-color .3s,box-shadow .3s,transform .3s ${a.ease}}
.card:hover{border-color:${u(a.bright,45)};box-shadow:${P(16,36,14)};transform:translateY(-2px)}
.card-visual{position:relative}
.card-media{position:relative;display:block;width:100%;border:0;padding:0;aspect-ratio:4/5;border-radius:${a.radius};overflow:hidden;background:${z("var(--tinte)",12,a.fog)};transition:background .5s ${a.ease}}
.card-media::after{content:"";position:absolute;inset:auto -20% -40% -20%;height:70%;background:radial-gradient(closest-side,${u("var(--tinte)",22)},transparent);transition:transform .6s ${a.ease}}
.card-media .arte{position:absolute;inset:10% 8% 14%;display:block;z-index:1;transition:transform .6s var(--rebote);filter:drop-shadow(0 14px 16px ${u(a.ink,18)})}
.card-media svg{width:100%;height:100%}
.card:hover .card-media .arte{transform:translateY(-6px) scale(1.05) rotate(-2deg)}
.card:hover .card-media::after{transform:translateY(-12%)}
.tag{position:absolute;top:${r(.7)};left:${r(.7)};z-index:2;background:${a.panel};color:${a.brand};border:1px solid ${a.edge};border-radius:${a.radius};padding:3px ${r(.6)};font-size:.64rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase}
.ver{position:absolute;top:${r(.7)};right:${r(.7)};z-index:2;font-size:.7rem;font-weight:700;background:${a.brand};color:${a.panel};border-radius:${a.radius};padding:4px ${r(.7)};opacity:0;transform:translateY(-6px);transition:.35s ${a.ease}}
.card:hover .ver,.card-media:focus-visible .ver{opacity:1;transform:none}
.quick{position:absolute;left:${r(.6)};right:${r(.6)};bottom:${r(.6)};z-index:3;display:flex;flex-direction:column;gap:${r(.4)};opacity:0;transform:translateY(10px);transition:.35s ${a.ease};pointer-events:none}
.card:hover .quick,.card:focus-within .quick,.card.elige-talla .quick{opacity:1;transform:none;pointer-events:auto}
.quick-btn{border:1px solid ${a.edge};border-radius:${a.radius};padding:${r(.8)};background:${u(a.panel,94)};backdrop-filter:blur(8px);font-weight:600;font-size:.84rem;color:${a.brand};display:flex;align-items:center;justify-content:center;gap:${r(.4)};transition:background .2s,color .2s}
.quick-btn:hover{background:${a.brand};color:${a.panel}}
.quick-tallas{display:none;gap:${r(.4)};justify-content:center;background:${u(a.panel,96)};border:1px solid ${a.edge};border-radius:${a.radius};padding:${r(.5)}}
.card.elige-talla .quick-tallas{display:flex;animation:entra .3s ${a.ease}}
.card.elige-talla .quick-btn{display:none}
.quick-tallas button{border:1px solid ${a.edge};background:${a.panel};color:${a.ink};border-radius:${a.radius};min-width:38px;padding:${r(.5)} ${r(.4)};font-size:.76rem;font-weight:700;transition:.2s}
.quick-tallas button:hover{background:${a.bright};border-color:${a.bright};color:${a.panel};transform:translateY(-2px)}
@keyframes entra{from{opacity:0;transform:translateY(6px)}}
.card-info{display:flex;justify-content:space-between;gap:${r(.7)};align-items:flex-start;padding:0 ${r(.3)}}
.card-info h3{margin:0 0 4px;font-size:.95rem;font-weight:700;color:${a.ink}}
.card-info p{margin:0;font-size:.76rem;color:${a.muted};display:flex;gap:${r(.35)};align-items:center;flex-wrap:wrap}
.card-info .n{opacity:.75}
.precio{font-family:${a.display};font-size:1.1rem;white-space:nowrap;color:${a.brand}}
.swatches{display:flex;align-items:center;gap:${r(.5)};padding:0 ${r(.3)}}
.swatches button{width:18px;height:18px;border-radius:50%;border:2px solid ${a.panel};background:var(--c);box-shadow:0 0 0 1px ${a.edge};padding:0;transition:transform .25s var(--rebote),box-shadow .25s}
.swatches button[aria-checked="true"]{box-shadow:0 0 0 2px ${a.bright};transform:scale(1.12)}
.swatches.grandes button{width:32px;height:32px;border-width:3px}
.color-nombre{font-size:.7rem;color:${a.muted};margin-left:4px}
.vacio{display:flex;flex-direction:column;gap:${r(.4)};align-items:center;text-align:center;padding:${r(5)} ${a.spaceLg};color:${a.muted}}
.vacio b{font-family:${a.display};font-size:1.8rem;color:${a.brand}}
.vacio .btn{margin-top:${a.space}}

/* ---------------------------------------------------------------- detalle */
.detalle{position:fixed;inset:0;z-index:50;display:grid;place-items:center;padding:${r(2)}}
.det-fondo{position:absolute;inset:0;background:${u(a.ink,55)};backdrop-filter:blur(8px)}
.det-panel{position:relative;width:min(1080px,100%);height:min(92vh,860px);overflow:auto;overscroll-behavior:contain;background:${a.panel};border:1px solid ${a.edge};border-radius:${A(2)};display:grid;grid-template-columns:1fr 1fr;box-shadow:${P(40,120,45)};color:${a.ink}}
.det-cerrar{position:absolute;top:${a.space};right:${a.space};z-index:3;width:44px;height:44px;border-radius:50%;border:1px solid ${a.edge};background:${a.panel};color:${a.brand};display:grid;place-items:center;transition:transform .3s var(--rebote)}
.det-cerrar:hover{transform:rotate(90deg)}
.det-media{position:sticky;top:0;align-self:start;height:min(92vh,860px);background:${z("var(--tinte)",14,a.fog)};transition:background .5s;display:grid;place-items:center;overflow:hidden}
.det-media::before{content:"";position:absolute;width:80%;aspect-ratio:1;border-radius:50%;background:radial-gradient(closest-side,${u("var(--tinte)",30)},transparent)}
.det-arte{position:relative;width:78%;aspect-ratio:1;filter:drop-shadow(0 30px 34px ${u(a.ink,22)})}
.det-arte svg{width:100%;height:100%}
.det-info{padding:${r(3)};display:flex;flex-direction:column;gap:${a.space}}
.det-cat{margin:0;text-transform:uppercase;letter-spacing:.14em;font-size:.7rem;font-weight:700;color:${a.bright}}
.det-info h2{margin:0;font-family:${a.display};font-weight:800;font-size:clamp(1.9rem,3.4vw,2.8rem);line-height:1.02;letter-spacing:-.02em;color:${a.brand}}
.det-val{margin:0;display:flex;gap:${r(.4)};align-items:center;font-size:.82rem;color:${a.muted}}
.det-val b{color:${a.ink}}
.det-precio{margin:0;font-family:${a.display};font-size:1.9rem;display:flex;flex-direction:column;color:${a.brand}}
.det-precio small{font-family:${a.sans};font-size:.76rem;color:${a.muted}}
.det-desc{margin:0;line-height:1.65;color:${a.ink}}
.det-et{display:block;font-size:.76rem;font-weight:600;color:${a.muted};margin-bottom:${r(.6)}}
.det-et b{color:${a.ink}}
.tallas{display:flex;flex-wrap:wrap;gap:${r(.6)}}
.tallas button{min-width:52px;padding:${r(.8)} ${r(.7)};border-radius:${a.radius};border:1px solid ${a.edge};background:${a.panel};font-weight:700;transition:.2s}
.tallas button:hover{border-color:${a.bright}}
.tallas button[aria-pressed="true"]{background:${a.brand};border-color:${a.brand};color:${a.panel};transform:translateY(-2px)}
.det-aviso{margin:${r(.4)} 0 0;font-size:.76rem;color:${a.warn};min-height:1em}
.det-compra{display:flex;gap:${r(.7)};align-items:stretch;position:sticky;bottom:0;padding:${a.space} 0;background:linear-gradient(transparent,${a.panel} 30%)}
.cantidad{display:flex;align-items:center;border:1px solid ${a.edge};border-radius:${a.radius};background:${a.panel}}
.cantidad button{border:0;background:none;width:42px;height:100%;font-size:1.1rem;color:${a.brand}}
.cantidad span{min-width:22px;text-align:center;font-weight:700}
.det-acc{border-top:1px solid ${a.mist};padding-top:${a.space}}
.det-acc summary{cursor:pointer;font-weight:700;font-size:.9rem;list-style:none;display:flex;justify-content:space-between;color:${a.brand}}
.det-acc summary::after{content:"+";font-size:1.1rem;transition:transform .3s}.det-acc[open] summary::after{transform:rotate(45deg)}
.det-acc ul,.det-acc p{margin:${r(.7)} 0 0;color:${a.muted};font-size:.84rem;line-height:1.6;padding-left:${a.spaceLg}}.det-acc p{padding:0}
.rel-fila{display:grid;grid-template-columns:repeat(4,1fr);gap:${r(.6)}}
.rel-item{border:1px solid ${a.edge};background:${z("var(--tinte)",10,a.fog)};border-radius:${a.radius};padding:${r(.6)};display:flex;flex-direction:column;gap:3px;text-align:left;transition:transform .3s var(--rebote),border-color .3s}
.rel-item:hover{transform:translateY(-4px);border-color:${a.bright}}
.rel-item .arte{aspect-ratio:1}.rel-item svg{width:100%;height:100%}
.rel-item small{font-size:.7rem;line-height:1.2;color:${a.muted}}.rel-item b{font-size:.76rem;color:${a.brand}}

/* ---------------------------------------------------------------- vuelo, toast, cortina */
.vuelo{position:fixed;z-index:80;pointer-events:none}
.vuelo svg{width:100%;height:100%}
.toast{position:fixed;left:50%;bottom:${r(2)};z-index:90;transform:translate(-50%,calc(100% + 60px));visibility:hidden;display:flex;gap:${r(.7)};align-items:center;max-width:min(92vw,460px);background:${a.brand};color:${a.panel};border-radius:${a.radius};padding:${r(.8)} ${r(1.4)} ${r(.8)} ${r(.8)};font-size:.84rem;box-shadow:${P(20,50,40)};transition:transform .5s var(--rebote);pointer-events:none}
.toast.visible{transform:translate(-50%,0);visibility:visible}
.toast-ok{display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:${a.leaf};color:${a.panel};flex:none}
.d[data-modo="bf"] .toast{background:${a.panel};color:${a.ink}}
.cortina{position:absolute;inset:0;z-index:70;display:none;place-items:center;clip-path:inset(0 100% 0 0);background:${a.ink}}
.cortina[data-hacia="normal"]{background:${a.panel}}
.cortina.activa{display:grid}
.cortina span{font-family:${a.display};font-weight:500;font-style:italic;color:${a.panel};font-size:clamp(2.2rem,6vw,4.5rem);letter-spacing:-.02em}
.cortina[data-hacia="normal"] span{color:${a.brand};font-size:0}
.cortina[data-hacia="normal"] span::after{content:"Tienda UCJC";font-size:clamp(2.2rem,6vw,4.5rem)}

/* ================================================================ BLACK FRIDAY
   Registro editorial sobre los mismos tokens: tinta de fondo, panel como «papel» y marca clara. */
.bf{position:relative;--h:min(88vh,920px);font-family:${a.sans};--linea:${u(a.panel,16)};--suave:${u(a.panel,68)}}
.bf-scroll{height:var(--h);min-height:560px;overflow-y:auto;overscroll-behavior:contain;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:${u(a.panel,30)} ${a.ink}}
.bf-escena{position:sticky;top:0;height:var(--h);min-height:560px;overflow:hidden;background:radial-gradient(ellipse at 50% 115%,${u(a.bright,28)},transparent 60%),${a.ink}}
.globo{position:absolute;inset:0;width:100%;height:100%;cursor:grab;touch-action:pan-y;transition:opacity .9s ${a.ease},transform 1.4s ${a.ease}}
.globo:active{cursor:grabbing}
.bf-escena[data-cap="todo"] .globo{opacity:.12}
.bf-escena[data-cap="intro"] .globo,.bf-escena:not([data-cap]) .globo{transform:translateY(46%) scale(1.2);opacity:.45}
.bf-escena[data-cap="madrid"] .globo,.bf-escena[data-cap="europa"] .globo,.bf-escena[data-cap="america"] .globo{transform:translateX(-20%)}
.hud{position:absolute;z-index:2;color:var(--suave)}
.libro{left:${r(2.2)};top:${r(2.2)};margin:0;width:190px}
.libro div{display:flex;justify-content:space-between;align-items:baseline;gap:${r(.7)};padding:${r(.7)} 0;border-bottom:1px solid var(--linea)}
.libro div:first-child{border-top:1px solid var(--linea)}
.libro dt{font-size:.64rem;letter-spacing:.14em;text-transform:uppercase}
.libro dd{margin:0;font-family:${a.display};font-size:1.15rem;color:${a.panel};font-variant-numeric:tabular-nums lining-nums}
.feed{right:${r(2.2)};top:${r(2.2)};width:min(240px,34%);margin:0;padding:0;list-style:none}
.feed-et{position:absolute;right:${r(2.2)};top:${r(.8)};margin:0;font-size:.64rem;letter-spacing:.14em;text-transform:uppercase;color:var(--suave)}
.feed li{padding:${r(.6)} 0;border-bottom:1px solid var(--linea);font-family:${a.display};font-size:.9rem;line-height:1.3;animation:feed .7s ${a.ease}}
.feed li:nth-child(n+4){opacity:.5}.feed li:nth-child(5){opacity:.22}
.feed b{font-weight:700;color:${a.panel}}.feed span{display:block;font-style:italic;color:var(--suave);font-size:.82rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
@keyframes feed{from{opacity:0;transform:translateY(-8px)}}
.capitulos{right:${r(1.8)};bottom:${r(2.2)};display:flex;flex-direction:column;gap:2px}
.capitulos button{border:0;background:none;padding:3px ${r(.5)};font-family:${a.display};font-size:.82rem;color:var(--suave);opacity:.55;text-align:right;transition:opacity .3s}
.capitulos button:hover{opacity:.9}
.capitulos .activo{opacity:1;color:${a.panel};text-decoration:underline;text-underline-offset:4px;text-decoration-thickness:1px}
.aviso-sim{left:${r(2.2)};bottom:${r(2)};margin:0;font-family:${a.display};font-style:italic;font-size:.76rem;opacity:.65}
.bf-caps{position:relative;z-index:2;margin-top:calc(-1 * max(var(--h),560px));pointer-events:none}
.cap{min-height:max(var(--h),560px);display:flex;align-items:center;padding:${r(8)} ${r(4.5)}}
.cap>*{pointer-events:auto}
.cap-intro{flex-direction:column;justify-content:center;text-align:center;gap:0}
.cap-intro>*{pointer-events:none}
.bf-sello{margin:0 0 ${r(2.2)};font-size:.7rem;letter-spacing:.32em;text-transform:uppercase;color:var(--suave)}
.bf-titulo{margin:0;font-family:${a.display};font-weight:800;font-size:clamp(4rem,12.5vw,11rem);line-height:.86;letter-spacing:-.04em;color:${a.panel}}
.bf-titulo em{display:block;font-style:italic;font-weight:500;color:${z(a.bright,55,a.panel)};padding-left:.6em}
.bf-titulo span,.bf-titulo em{opacity:0;transform:translateY(22px);animation:aparece 1.4s ${a.ease} forwards}
.bf-titulo em{animation-delay:.18s}
@keyframes aparece{to{opacity:1;transform:none}}
.bf-regla{width:64px;height:1px;background:${z(a.bright,60,a.panel)};margin:${r(2.4)} auto ${r(1.8)};opacity:0;animation:aparece 1s .5s ${a.ease} forwards}
.bf-sub{margin:0 0 ${r(2.4)};font-family:${a.display};font-style:italic;font-size:clamp(1.05rem,2vw,1.4rem);line-height:1.45;color:var(--suave);max-width:34ch;opacity:0;animation:aparece 1s .6s ${a.ease} forwards}
.reloj{display:flex;flex-direction:column;align-items:center;gap:${r(.7)};opacity:0;animation:aparece 1s .75s ${a.ease} forwards}
.reloj p{margin:0;font-size:.64rem;letter-spacing:.3em;text-transform:uppercase;color:var(--suave)}
.reloj div{display:flex;align-items:baseline;border-top:1px solid var(--linea);border-bottom:1px solid var(--linea)}
.reloj span{display:flex;align-items:baseline;gap:${r(.4)};padding:${a.space} ${a.spaceLg};font-size:.64rem;letter-spacing:.14em;text-transform:uppercase;color:var(--suave)}
.reloj span+span{border-left:1px solid var(--linea)}
.reloj b{font-family:${a.display};font-weight:500;font-size:clamp(1.6rem,3.4vw,2.4rem);color:${a.panel};font-variant-numeric:tabular-nums lining-nums;letter-spacing:0}
.desliza{margin:${r(2.8)} 0 0;font-size:.64rem;letter-spacing:.3em;text-transform:uppercase;color:var(--suave);display:flex;flex-direction:column;align-items:center;gap:${r(.7)}}
.desliza span{width:1px;height:42px;background:linear-gradient(var(--suave),transparent);animation:baja 2.4s ${a.ease} infinite;transform-origin:top}
@keyframes baja{0%{transform:scaleY(0)}50%{transform:scaleY(1)}100%{transform:scaleY(1);opacity:0}}
.cap-caja{width:min(430px,100%);margin-left:auto;background:${z(a.ink,88,a.panel)};border:1px solid var(--linea);border-radius:${a.radius};padding:${r(2.4)};opacity:0;transform:translateY(40px);transition:opacity 1s ${a.ease},transform 1s ${a.ease}}
.cap.visto .cap-caja{opacity:1;transform:none}
.cap-caja.ancha{width:min(1040px,100%);margin:0 auto}
.cap-caja.centro{margin:0 auto;text-align:center;display:flex;flex-direction:column;align-items:center;width:min(460px,100%)}
.cap-num{margin:0 0 ${a.space};font-size:.64rem;letter-spacing:.3em;text-transform:uppercase;color:${z(a.bright,60,a.panel)}}
.cap-caja h3{margin:0 0 ${a.space};font-family:${a.display};font-weight:500;font-size:clamp(1.9rem,3.6vw,2.9rem);line-height:1.02;letter-spacing:-.02em;color:${a.panel}}
.cap-caja h3 em{font-style:italic}
.cap-txt{margin:0 0 ${r(2)};color:var(--suave);line-height:1.6;font-size:.88rem}
.oferta{display:flex;flex-direction:column;gap:${a.space};color:${a.panel}}
.oferta-arte{position:relative;background:${a.fog};border-radius:${a.radius};aspect-ratio:5/4;display:grid;place-items:center;overflow:hidden}
.oferta-arte .arte{width:58%;aspect-ratio:1;display:block;transition:transform 1s ${a.ease}}
.oferta:hover .oferta-arte .arte{transform:scale(1.04)}
.oferta-arte svg{width:100%;height:100%}
.desc{position:absolute;top:${r(.8)};left:${r(.9)};font-family:${a.display};font-style:italic;font-size:1.25rem;color:${a.bright}}
.oferta h4{margin:0;font-family:${a.display};font-weight:500;font-size:1.18rem}
.precios{margin:0;display:flex;gap:${a.space};align-items:baseline;font-variant-numeric:lining-nums}
.precios b{font-family:${a.display};font-weight:500;font-size:1.5rem;color:${a.panel}}
.precios s{color:var(--suave);font-size:.82rem}
.bf-btn{width:100%;background:${a.panel};border-color:${a.panel};color:${a.ink};font-size:.7rem;letter-spacing:.2em;text-transform:uppercase;padding:${r(1.2)} ${r(1.4)}}
.bf-btn svg{display:none}
.bf-btn:hover{background:${a.mist};border-color:${a.mist}}
.bf-tallas{display:flex;flex-wrap:wrap;gap:${r(.4)};align-items:center}
.bf-tallas span{width:100%;margin-bottom:2px;font-size:.64rem;letter-spacing:.2em;text-transform:uppercase;color:var(--suave)}
.bf-tallas button{border:1px solid var(--linea);background:transparent;color:${a.panel};border-radius:${a.radius};min-width:46px;padding:${r(.9)} ${r(.6)};font-size:.76rem;letter-spacing:.06em;transition:background .25s,color .25s,border-color .25s}
.bf-tallas button:hover{background:${a.panel};color:${a.ink};border-color:${a.panel}}
.relampagos{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr));border-top:1px solid var(--linea)}
.relampago{padding:${r(1.8)} ${r(1.8)} ${r(.5)};display:flex;flex-direction:column;gap:${a.space}}
.relampago+.relampago{border-left:1px solid var(--linea)}
.relampago .stock{margin-top:auto}
.stock{display:flex;justify-content:space-between;align-items:center;gap:${r(.7)};font-size:.7rem;letter-spacing:.08em;color:var(--suave)}
.stock b{color:${a.panel};font-weight:600}
.stock i{flex:1;height:1px;background:var(--linea)}
.stock em{display:block;height:1px;background:${a.panel};transition:width .8s ${a.ease}}
.relampago.casi .stock b{color:${z(a.warn,60,a.panel)}}
.cuenta{margin:0;font-family:${a.display};font-size:1.6rem;color:${a.panel};font-variant-numeric:tabular-nums lining-nums}
.cuenta::before{content:"Termina en ";font-family:${a.sans};font-size:.64rem;letter-spacing:.2em;text-transform:uppercase;color:var(--suave);margin-right:6px;vertical-align:middle}
.sobre{position:relative;width:240px;height:158px;margin:${a.spaceLg} 0 ${r(2.2)};border:0;padding:0;background:${a.fog};border-radius:${a.radius};perspective:800px;transition:transform .5s ${a.ease}}
.sobre:hover{transform:translateY(-3px)}
.sobre .solapa{position:absolute;left:0;right:0;top:0;height:92px;background:${a.mist};clip-path:polygon(0 0,100% 0,50% 100%);transform-origin:top;transition:transform 1s ${a.ease};z-index:2}
.sobre::after{content:"";position:absolute;inset:0;background:linear-gradient(to top right,transparent 49.6%,${u(a.ink,10)} 50%,transparent 50.4%),linear-gradient(to top left,transparent 49.6%,${u(a.ink,10)} 50%,transparent 50.4%)}
.lacre{position:absolute;left:50%;top:70px;z-index:3;width:46px;height:46px;margin-left:-23px;border-radius:50%;background:radial-gradient(circle at 35% 30%,${a.bright},${a.brand} 70%);display:grid;place-items:center;font-family:${a.display};font-style:italic;font-size:1.35rem;color:${a.panel};transition:transform .8s ${a.ease},opacity .8s}
.sobre.abierta .lacre{transform:scale(.6) rotate(-30deg);opacity:0}
.sobre.abierta .solapa{transform:rotateX(180deg);opacity:0;transition:transform .8s ${a.ease},opacity .5s .3s}
.sobre.guardada{height:0;margin:0;opacity:0;transition:height .5s ${a.ease},margin .5s ${a.ease},opacity .4s}
.sobre.abierta{cursor:default}
.premio{width:min(380px,100%);text-align:left}
.premio-et{margin:0 0 ${a.space};text-align:center;font-family:${a.display};font-style:italic;font-size:1.25rem;color:${a.panel}}
.bf-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,210px),1fr));gap:${r(2.6)} ${r(1.8)};margin:${r(.6)} 0 ${r(2.6)}}
.bf-grid .oferta-arte{aspect-ratio:1}
.bf-grid .precios b{font-size:1.25rem}
.bf-grid .oferta h4{font-size:1.05rem}
.volver{margin:0 auto;display:flex;font-size:.7rem;letter-spacing:.2em;text-transform:uppercase}

/* ---------------------------------------------------------------- adaptable al hueco (no a la ventana) */
@container pieza (max-width:860px){
  .hero{grid-template-columns:1fr;padding:${r(2.5)} ${r(1.6)}}.hero-arte{max-width:360px;order:-1}
  .catalogo{padding:${a.space} ${r(1.2)} ${r(2.4)}}
  .det-panel{grid-template-columns:1fr;border-radius:${A(2)} ${A(2)} 0 0;align-self:end;height:auto;max-height:94vh}
  .det-media{position:relative;height:auto;aspect-ratio:1.2}
  .detalle{padding:0;place-items:end center}
  .rel-fila{grid-template-columns:repeat(2,1fr)}
  .bf-escena[data-cap]:not([data-cap="intro"]) .globo{transform:translateY(-18%)}
  .cap{padding:${r(6)} ${r(1.4)}}
  .cap-caja{margin:auto 0 0;width:100%}
  .feed,.feed-et{display:none}
  .relampago+.relampago{border-left:0;border-top:1px solid var(--linea)}
}
@container pieza (max-width:560px){
  .top{grid-template-columns:auto 1fr auto}.marca-txt{display:none}.modos{justify-self:center}
  .modos button{padding:${r(.55)} ${r(.8)};font-size:.76rem}
  .libro{left:${a.space};right:${a.space};top:${a.space};width:auto;display:flex;gap:${a.space}}.libro div{flex:1;flex-direction:column;gap:2px;border-top:1px solid var(--linea)}.libro dt{font-size:.55rem}.libro dd{font-size:.95rem}
  .aviso-sim{display:none}.capitulos{right:${a.space};bottom:${a.space}}
  .reloj span{padding:${r(.7)} ${r(.6)};flex-direction:column;gap:0}
  .quick{opacity:1;transform:none;pointer-events:auto;left:auto}.quick-btn span{display:none}
  .flota{display:none}
}

/* Movimiento reducido: sin animaciones ni transiciones (sin forzar: selector más específico y al final). */
.d[data-reducido="true"] *,.d[data-reducido="true"] *::before,.d[data-reducido="true"] *::after{animation:none;transition:none;scroll-behavior:auto}
.d[data-reducido="true"] .bf-titulo span,.d[data-reducido="true"] .bf-titulo em,.d[data-reducido="true"] .bf-regla,.d[data-reducido="true"] .bf-sub,.d[data-reducido="true"] .reloj{opacity:1;transform:none}
`,ia=[{id:"todo",nombre:"Todo"},{id:"ropa",nombre:"Ropa"},{id:"deporte",nombre:"Deporte"},{id:"material",nombre:"Material"},{id:"regalos",nombre:"Regalos"}],g={petroleo:{nombre:"Petróleo",fondo:a.brand,acento:a.panel},turquesa:{nombre:"Turquesa",fondo:a.bright,acento:a.panel},tinta:{nombre:"Tinta",fondo:a.ink,acento:a.mist},blanco:{nombre:"Blanco",fondo:a.panel,acento:a.brand},niebla:{nombre:"Niebla",fondo:a.mist,acento:a.brand},hoja:{nombre:"Verde hoja",fondo:a.leaf,acento:a.panel},teja:{nombre:"Teja",fondo:a.warn,acento:a.panel}},C=[{id:"prod-101",nombre:"Camiseta Técnica UCJC",categoria:"deporte",precio:19.99,tallas:["S","M","L","XL"],tipo:"camiseta",colores:["petroleo","tinta","blanco"],etiqueta:"Más vendido",valoracion:4.8,resenas:214,descripcion:"Tejido transpirable de secado rápido con el wordmark UCJC en el pecho. Pensada para el polideportivo de Villafranca y para el día a día.",detalles:["Poliéster reciclado 100 %","Corte regular","Lavar a 30 °C"]},{id:"prod-102",nombre:"Sudadera con capucha",categoria:"ropa",precio:39.95,tallas:["XS","S","M","L","XL"],tipo:"sudadera",colores:["petroleo","niebla","tinta"],etiqueta:"Icono",valoracion:4.9,resenas:388,descripcion:"La sudadera de siempre: felpa perchada por dentro, capucha forrada y bolsillo canguro. El uniforme no oficial de la biblioteca.",detalles:["Algodón orgánico 80 % · poliéster 20 %","350 g/m²","Oversize suave"]},{id:"prod-103",nombre:"Chaqueta cortavientos",categoria:"ropa",precio:45,tallas:["M","L","XL"],tipo:"chaqueta",colores:["tinta","teja"],valoracion:4.6,resenas:96,descripcion:"Ligera, repelente al agua y plegable en su propio bolsillo. Para los paseos entre facultades cuando cambia el tiempo.",detalles:["Nylon ripstop","Capucha ajustable","Se pliega en el bolsillo"]},{id:"prod-104",nombre:"Equipación oficial fútbol",categoria:"deporte",precio:55,tallas:["S","M","L"],tipo:"equipacion",colores:["petroleo","blanco"],etiqueta:"Oficial",valoracion:4.7,resenas:142,descripcion:"La equipación de los equipos de la universidad. Camiseta con cuello polo y número trasero opcional en tienda.",detalles:["Tejido técnico con malla lateral","Escudo bordado","Corte atlético"]},{id:"prod-105",nombre:"Mochila UCJC",categoria:"material",precio:29.9,tallas:[],tipo:"mochila",colores:["tinta","petroleo"],valoracion:4.7,resenas:173,descripcion:'Compartimento acolchado para portátil de 15", bolsillo frontal y tejido resistente al agua.',detalles:["22 litros",'Funda portátil 15"',"Espalda acolchada"]},{id:"prod-106",nombre:"Cuaderno A4",categoria:"material",precio:4.5,tallas:[],tipo:"cuaderno",colores:["petroleo","turquesa","tinta"],valoracion:4.5,resenas:61,descripcion:"Tapa dura, 120 hojas de cuadrícula de 5 mm y goma de cierre. Apuntes con estilo.",detalles:["120 hojas · 90 g","Cuadrícula 5 mm","Papel FSC"]},{id:"prod-107",nombre:"Taza de graduación",categoria:"regalos",precio:9.95,tallas:[],tipo:"taza",colores:["blanco","tinta"],etiqueta:"Regalo",valoracion:4.8,resenas:120,descripcion:"Cerámica de 350 ml con «Promoción 2027» en oro. Apta para lavavajillas y para el café de antes del examen.",detalles:["Cerámica 350 ml","Apta lavavajillas","Impresión en oro"]},{id:"prod-108",nombre:"Llavero metálico",categoria:"regalos",precio:5,tallas:[],tipo:"llavero",colores:["petroleo","tinta"],valoracion:4.4,resenas:58,descripcion:"Zamak esmaltado con el wordmark UCJC. Pequeño, pesado y sin fecha de caducidad.",detalles:["Zamak esmaltado","45 mm","Anilla de acero"]},{id:"prod-109",nombre:"Gorra bordada",categoria:"ropa",precio:18,tallas:[],tipo:"gorra",colores:["teja","blanco","tinta"],etiqueta:"Nuevo",valoracion:4.6,resenas:37,descripcion:"Seis paneles de algodón lavado, visera curva y bordado frontal en hilo amarillo.",detalles:["Algodón lavado","Cierre metálico","Talla única"]},{id:"prod-110",nombre:"Botella térmica",categoria:"deporte",precio:22,tallas:[],tipo:"botella",colores:["petroleo","tinta","hoja"],etiqueta:"Nuevo",valoracion:4.9,resenas:81,descripcion:"Acero inoxidable de doble pared: 24 h frío, 12 h caliente. Cabe en el portabotellas de la mochila.",detalles:["750 ml","Sin BPA","Doble pared al vacío"]},{id:"prod-111",nombre:"Tote bag Campus",categoria:"regalos",precio:12,tallas:[],tipo:"tote",colores:["blanco","tinta","turquesa"],valoracion:4.5,resenas:66,descripcion:"Lona gruesa con asas largas. Para portátil, apuntes y la compra de vuelta a la residencia.",detalles:["Lona 340 g/m²","Bolsillo interior","38 × 42 cm"]},{id:"prod-112",nombre:"Jogger Villafranca",categoria:"ropa",precio:34,tallas:["XS","S","M","L","XL"],tipo:"jogger",colores:["niebla","tinta","teja"],valoracion:4.6,resenas:90,descripcion:"Felpa suave, cintura elástica con cordón y puño en el tobillo. Conjunto perfecto con la sudadera.",detalles:["Algodón 80 %","Bolsillos laterales","Corte cónico"]},{id:"prod-113",nombre:"Bufanda de punto",categoria:"regalos",precio:16,tallas:[],tipo:"bufanda",colores:["petroleo","teja"],etiqueta:"Invierno",valoracion:4.7,resenas:44,descripcion:"Punto doble a rayas con los colores de la universidad y flecos en los extremos.",detalles:["Acrílico suave","160 × 22 cm","Rayas jacquard"]},{id:"prod-114",nombre:"Set de pins",categoria:"regalos",precio:7.5,tallas:[],tipo:"pins",colores:["turquesa","petroleo"],valoracion:4.8,resenas:52,descripcion:"Cuatro pins esmaltados para personalizar la mochila o la chaqueta.",detalles:["4 pins","Esmalte duro","Cierre de mariposa"]}],x=Object.fromEntries(C.map(n=>[n.id,n])),q={codigo:"black-friday-2026",etiqueta:"Black Friday UCJC",inicio:"2026-11-27T00:00:00+01:00",fin:"2026-11-30T23:59:59+01:00",descuentos:{"prod-102":50,"prod-101":40,"prod-103":45,"prod-105":35,"prod-110":40,"prod-112":30,"prod-109":30,"prod-104":25,"prod-106":20,"prod-107":30,"prod-108":20,"prod-111":35,"prod-113":40,"prod-114":25},relampago:["prod-102","prod-110","prod-103"],misterio:{id:"prod-112",descuento:70}},oa=n=>Math.round(n*100)/100;function V(n,t=null){const e=t??q.descuentos[n.id]??0;return oa(n.precio*(1-e/100))}const k=n=>Number(n).toLocaleString("es-ES",{style:"currency",currency:"EUR"}),W=n=>String(n||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function da(n,{categoria:t="todo",texto:e="",orden:i="destacados"}={}){const o=W(e).trim();let s=n.filter(l=>(t==="todo"||l.categoria===t)&&(!o||W(`${l.nombre} ${l.categoria} ${l.descripcion}`).includes(o)));return i==="precio-asc"?s=[...s].sort((l,p)=>l.precio-p.precio):i==="precio-desc"?s=[...s].sort((l,p)=>p.precio-l.precio):i==="valoracion"&&(s=[...s].sort((l,p)=>p.valoracion-l.valoracion)),s}const ca=a.sans.replace(/"/g,"'"),D=a.display.replace(/"/g,"'"),y=`<ellipse cx="100" cy="186" rx="58" ry="6" fill="${a.ink}" opacity=".12"/>`,j=(n,t,e,i=14)=>`<text x="${n}" y="${t}" text-anchor="middle" font-weight="800" font-size="${i}" letter-spacing="1.5" fill="${e}" style="font-family:${ca}">UCJC</text>`,pa=n=>`color-mix(in srgb, ${n} 78%, ${a.ink})`,K={camiseta:(n,t,e)=>`${y}
    <path d="M62 34 L38 46 L20 78 L42 90 L52 74 L52 172 L148 172 L148 74 L158 90 L180 78 L162 46 L138 34 C130 46 118 52 100 52 C82 52 70 46 62 34Z" fill="${n}"/>
    <path d="M62 34 C70 46 82 52 100 52 C118 52 130 46 138 34 L130 32 C124 40 114 44 100 44 C86 44 76 40 70 32Z" fill="${e}"/>
    <path d="M52 74 L52 172 L58 172 L58 80Z" fill="${e}" opacity=".35"/>
    ${j(100,100,t,18)}<rect x="74" y="106" width="52" height="3" rx="1.5" fill="${t}" opacity=".8"/>`,sudadera:(n,t,e)=>`${y}
    <path d="M64 40 C56 42 44 48 36 58 L18 120 L40 128 L52 92 L50 172 L150 172 L148 92 L160 128 L182 120 L164 58 C156 48 144 42 136 40Z" fill="${n}"/>
    <path d="M70 40 C70 20 84 12 100 12 C116 12 130 20 130 40 C122 52 112 56 100 56 C88 56 78 52 70 40Z" fill="${e}"/>
    <path d="M80 38 C82 26 90 22 100 22 C110 22 118 26 120 38 C114 44 108 46 100 46 C92 46 86 44 80 38Z" fill="${a.ink}" opacity=".25"/>
    <line x1="93" y1="50" x2="91" y2="74" stroke="${t}" stroke-width="2.5" stroke-linecap="round"/><line x1="107" y1="50" x2="109" y2="74" stroke="${t}" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M70 128 L130 128 L138 154 L62 154Z" fill="${e}" opacity=".55"/>
    ${j(100,108,t,17)}<rect x="50" y="164" width="100" height="8" fill="${e}"/>`,chaqueta:(n,t,e)=>`${y}
    <path d="M66 34 C54 38 42 46 36 58 L20 124 L40 130 L52 96 L50 172 L150 172 L148 96 L160 130 L180 124 L164 58 C158 46 146 38 134 34 L100 46Z" fill="${n}"/>
    <path d="M70 32 L100 46 L130 32 L124 22 L100 30 L76 22Z" fill="${e}"/>
    <line x1="100" y1="46" x2="100" y2="172" stroke="${t}" stroke-width="3"/>
    <rect x="62" y="112" width="26" height="4" rx="2" fill="${e}"/><rect x="112" y="112" width="26" height="4" rx="2" fill="${e}"/>
    <path d="M20 124 L40 130 L38 138 L18 132Z" fill="${t}"/><path d="M180 124 L160 130 L162 138 L182 132Z" fill="${t}"/>
    ${j(126,72,t,10)}`,equipacion:(n,t,e)=>`${y}
    <path d="M62 34 L36 44 L18 82 L42 94 L52 76 L52 172 L148 172 L148 76 L158 94 L182 82 L164 44 L138 34 L118 40 L100 58 L82 40Z" fill="${n}"/>
    <path d="M82 40 L100 58 L118 40 L112 34 L100 46 L88 34Z" fill="${t}"/>
    <path d="M66 40 L76 172 L88 172 L80 38Z" fill="${t}" opacity=".9"/><path d="M134 40 L124 172 L112 172 L120 38Z" fill="${t}" opacity=".9"/>
    <circle cx="124" cy="78" r="9" fill="${e}" stroke="${t}" stroke-width="2"/>
    <text x="100" y="140" text-anchor="middle" style="font-family:${D}" font-weight="900" font-size="38" fill="${t}">10</text>`,mochila:(n,t,e)=>`${y}
    <path d="M70 34 C70 18 82 12 100 12 C118 12 130 18 130 34" fill="none" stroke="${e}" stroke-width="8" stroke-linecap="round"/>
    <rect x="44" y="32" width="112" height="146" rx="34" fill="${n}"/>
    <rect x="60" y="104" width="80" height="58" rx="18" fill="${e}"/>
    <path d="M60 120 L140 120" stroke="${t}" stroke-width="3"/>
    <circle cx="132" cy="120" r="5" fill="${t}"/>
    ${j(100,78,t,16)}<rect x="44" y="52" width="112" height="4" fill="${e}" opacity=".6"/>`,cuaderno:(n,t,e)=>`${y}
    <rect x="48" y="20" width="108" height="160" rx="8" fill="${e}"/><rect x="44" y="16" width="108" height="160" rx="8" fill="${n}"/>
    <rect x="44" y="16" width="16" height="160" rx="6" fill="${e}"/>
    <rect x="136" y="16" width="7" height="160" fill="${t}" opacity=".85"/>
    <rect x="72" y="56" width="58" height="34" rx="4" fill="${a.panel}" opacity=".9"/>
    ${j(101,79,a.ink,14)}<rect x="72" y="140" width="58" height="3" rx="1.5" fill="${t}"/>`,taza:(n,t,e)=>`${y}
    <path d="M140 74 C172 74 172 132 136 132" fill="none" stroke="${e}" stroke-width="13"/>
    <path d="M44 50 L156 50 L148 166 C147 174 140 180 132 180 L68 180 C60 180 53 174 52 166Z" fill="${n}"/>
    <ellipse cx="100" cy="50" rx="56" ry="10" fill="${e}"/><ellipse cx="100" cy="50" rx="48" ry="6" fill="${a.ink}"/>
    <text x="100" y="108" text-anchor="middle" style="font-family:${D}" font-style="italic" font-weight="700" font-size="17" fill="${t}">Promoción</text>
    <text x="100" y="138" text-anchor="middle" style="font-family:${D}" font-weight="900" font-size="30" fill="${t}">2027</text>`,llavero:(n,t,e)=>`${y}
    <circle cx="100" cy="40" r="20" fill="none" stroke="${a.mist}" stroke-width="6"/>
    <rect x="94" y="56" width="12" height="18" rx="3" fill="${a.muted}"/>
    <rect x="46" y="72" width="108" height="92" rx="26" fill="${e}"/><rect x="50" y="70" width="100" height="88" rx="24" fill="${n}"/>
    ${j(100,124,t,24)}`,gorra:(n,t,e)=>`${y}
    <path d="M36 128 C36 70 64 42 102 42 C140 42 164 70 164 128Z" fill="${n}"/>
    <path d="M102 42 L102 128" stroke="${e}" stroke-width="2"/><path d="M70 52 C60 80 58 104 60 128" stroke="${e}" stroke-width="2" fill="none"/><path d="M134 52 C144 80 146 104 144 128" stroke="${e}" stroke-width="2" fill="none"/>
    <circle cx="102" cy="44" r="6" fill="${e}"/>
    <path d="M30 128 L170 128 C176 128 180 134 176 140 C150 156 60 160 24 146 C18 142 22 128 30 128Z" fill="${e}"/>
    ${j(102,100,t,18)}`,botella:(n,t,e)=>`${y}
    <rect x="80" y="10" width="40" height="26" rx="8" fill="${e}"/><rect x="84" y="34" width="32" height="10" fill="${a.mist}"/>
    <path d="M70 58 C70 46 80 42 100 42 C120 42 130 46 130 58 L130 168 C130 176 124 182 116 182 L84 182 C76 182 70 176 70 168Z" fill="${n}"/>
    <rect x="70" y="70" width="10" height="100" fill="${a.panel}" opacity=".18"/>
    <g transform="rotate(-90 100 118)">${j(100,124,t,20)}</g>`,tote:(n,t,e)=>`${y}
    <path d="M70 70 C70 20 130 20 130 70" fill="none" stroke="${e}" stroke-width="9"/>
    <path d="M40 64 L160 64 L166 180 L34 180Z" fill="${n}"/>
    <text x="100" y="112" text-anchor="middle" style="font-family:${D}" font-style="italic" font-weight="700" font-size="22" fill="${t}">Campus</text>
    ${j(100,140,t,16)}<path d="M60 152 L140 152" stroke="${t}" stroke-width="2" stroke-dasharray="4 5"/>`,jogger:(n,t,e)=>`${y}
    <path d="M58 18 L142 18 L150 172 L112 172 L102 66 L98 66 L88 172 L50 172Z" fill="${n}"/>
    <rect x="58" y="18" width="84" height="16" fill="${e}"/>
    <path d="M94 34 L92 52 M106 34 L108 52" stroke="${t}" stroke-width="2.5" stroke-linecap="round"/>
    <rect x="50" y="160" width="38" height="12" fill="${e}"/><rect x="112" y="160" width="38" height="12" fill="${e}"/>
    <rect x="140" y="40" width="4" height="114" fill="${t}" opacity=".9"/><rect x="56" y="40" width="4" height="114" fill="${t}" opacity=".9"/>`,bufanda:(n,t,e)=>`${y}
    <path d="M52 26 C80 52 120 52 148 26 L156 40 C124 72 76 72 44 40Z" fill="${n}"/>
    <path d="M60 52 L92 56 L84 168 L52 164Z" fill="${n}"/>
    ${[70,94,118,142].map(i=>`<path d="M${58-(i-52)*.06} ${i} L${90-(i-52)*.06} ${i+3} L${89-(i-52)*.06} ${i+12} L${57-(i-52)*.06} ${i+9}Z" fill="${t}"/>`).join("")}
    ${[54,60,66,72,78].map(i=>`<line x1="${i}" y1="165" x2="${i-1}" y2="180" stroke="${e}" stroke-width="3" stroke-linecap="round"/>`).join("")}
    <path d="M44 40 C76 72 124 72 156 40" fill="none" stroke="${e}" stroke-width="3"/>`,pins:(n,t,e)=>`${y}
    <circle cx="70" cy="70" r="34" fill="${n}" stroke="${e}" stroke-width="5"/>${j(70,76,t,15)}
    <path d="M132 36 L160 92 L104 92Z" fill="${t}" stroke="${e}" stroke-width="5" stroke-linejoin="round"/>
    <rect x="44" y="114" width="56" height="56" rx="14" fill="${a.ink}" stroke="${e}" stroke-width="5"/><text x="72" y="152" text-anchor="middle" style="font-family:${D}" font-weight="900" font-size="28" fill="${n}">27</text>
    <path d="M140 112 l9 19 21 3 -15 14 4 21 -19 -10 -19 10 4 -21 -15 -14 21 -3Z" fill="${n}" stroke="${e}" stroke-width="5" stroke-linejoin="round"/>`};function ma(n){return n.replace(/<(\w+)([^>]*?)(\/?)>/g,(t,e,i,o)=>{const s=[],l=i.replace(/\s(fill|stroke)="([^"]*(?:var\(|color-mix)[^"]*)"/g,(d,m,h)=>(s.push(`${m}:${h}`),""));if(!s.length)return t;const p=/\sstyle="/.test(l)?l.replace(/\sstyle="([^"]*)"/,(d,m)=>` style="${m};${s.join(";")}"`):`${l} style="${s.join(";")}"`;return`<${e}${p}${o}>`})}function L(n,t=n.colores[0]){const e=g[t]||g[n.colores[0]]||g.petroleo,i=K[n.tipo]||K.camiseta;return`<svg viewBox="0 0 200 200" role="img" aria-label="${n.nombre} · ${e.nombre}" xmlns="http://www.w3.org/2000/svg">${ma(i(e.fondo,e.acento,pa(e.fondo)))}</svg>`}const N="0a40uw0aq0te0aq0ud0aq0xb0bc0tx0bc0uv0bc1x80by0tl0by0uh0by0vd0ck0u50ck0v00ck2pc0d60tw0d60uq0d60vk0d62ii0d62pz0ds0tp0ds0ui0ds0vb0ds0w40ds2qp0ee0uc0ee0v40ee0vw0ee0wo0ee0xg0ee2hf0ee2qr0ee2rj0f00u80f00uz0f00vq0f00wh0f00x90f00y00f02h50f02hw0f02in0f02je0fm0u50fm0uw0fm0vm0fm0wd0fm0x30fm0xu0fm0yk0fm1j60fm1jw0fm1kn0fm2ad0fm2b40fm2bu0fm2gz0fm2hq0fm2ig0fm2j70fm2jx0g80u50g80uv0g80vl0g80wa0g80x00g80xq0g80yg0g80z60g81j90g81jz0g81kp0g81le0g81m40g82ai0g82b80g82by0g82co0g82de0g82et0g82fj0g82g90g82gz0g82hp0g82if0g82j40g82ju0gu0u60gu0uv0gu0vk0gu0wa0gu0wz0gu0xo0gu0yd0gu0z30gu0zs0gu1iq0gu1jf0gu1k40gu1kt0gu1lj0gu1m80gu2a20gu2as0gu2bh0gu2c60gu2cw0gu2dl0gu2ea0gu2ez0gu2fp0gu2ge0gu2h30gu2hs0gu2ii0gu2j70gu2jw0gu2kl0hg0ux0hg0vm0hg0wb0hg0wz0hg0xo0hg0yd0hg0z20hg0zq0hg10f0hg1ia0hg1iz0hg1jo0hg1kc0hg1l10hg1lq0hg1mf0hg29s0hg2ag0hg2b50hg2bu0hg2ci0hg2d70hg2dw0hg2el0hg2f90hg2fy0hg2gn0hg2hc0hg2i00hg2ip0hg2je0hg2k30i20v10i20vp0i20wd0i20x10i20xq0i20ye0i20z20i20zr0i210f0i21im0i21ja0i21jz0i21kn0i21lb0i21m00i21mo0i21nc0i21qq0i22a90i22ay0i22bm0i22ca0i22cz0i22dn0i22eb0i22ez0i22fo0i22gc0i22h00i22ho0i22id0i22j10i22jp0i22ke0io0ui0io0v60io0vu0io0wh0io0x50io0xt0io0yh0io0z50io0zt0io10h0io1140io11s0io1id0io1j10io1jp0io1kd0io1l00io1lo0io1mc0io1n00io1no0io1qb0io1qz0io2a70io2av0io2bj0io2c70io2cv0io2dj0io2e60io2eu0io2fi0io2g60io2gu0io2hi0io2i60io2it0io2jh0ja0up0ja0vc0ja0w00ja0wn0ja0xb0ja0xy0ja0ym0ja0z90ja0zx0ja10k0ja1180ja11v0ja12j0ja1i70ja1iu0ja1ji0ja1k50ja1kt0ja1lg0ja1m40ja1mr0ja1nf0ja1qo0ja1rc0ja2ax0ja2bk0ja2c80ja2cv0ja2dj0ja2e60ja2eu0ja2fh0ja2g50ja2gs0ja2hg0ja2i30ja2ir0jw0ux0jw0vk0jw0w70jw0wu0jw0xi0jw0y50jw0ys0jw0zf0jw1020jw10q0jw11d0jw1200jw12n0jw1hg0jw1i40jw1ir0jw1je0jw1k10jw1ko0jw1lb0jw1lz0jw1mm0jw1n90jw1nw0jw1qh0jw1r40jw2cd0jw2d00jw2do0jw2eb0jw2ey0jw2fl0jw2g80jw2gw0jw2hj0jw2i60ki0000ki0tx0ki0uk0ki0v70ki0vt0ki0wg0ki0x30ki0xq0ki0yd0ki0z00ki0zn0ki10a0ki10x0ki11k0ki1270ki12t0ki1hg0ki1i30ki1iq0ki1jd0ki1k00ki1kn0ki1la0ki1lx0ki1mk0ki1n70ki1nu0ki1og0ki1p30ki1r00ki1rn0ki2cn0ki2da0ki2dx0ki2ek0ki2f70ki2fu0ki2hq0ki2id0l40sz0l40tm0l40u80l40uv0l40vi0l40w40l40wr0l40xe0l40y00l40yn0l40za0l40zw0l410j0l41160l411s0l412f0l41320l41hj0l41i60l41it0l41jf0l41k20l41kp0l41lb0l41ly0l41ml0l41n70l41nu0l41oh0l41p30l41rm0l42ea0l42ex0l42fk0l42hg0lq0sq0lq0tc0lq0tz0lq0ul0lq0v80lq0vu0lq0wh0lq0x30lq0xq0lq0yc0lq0yz0lq0zl0lq1080lq10u0lq11g0lq1230lq12p0lq13c0lq1ib0lq1iy0lq1jk0lq1k70lq1kt0lq1lg0lq1m20lq1mp0lq1nb0lq1ny0lq1ok0lq1p70mc0si0mc0t50mc0tr0mc0ud0mc0v00mc0vm0mc0w80mc0wv0mc0xh0mc0y30mc0yp0mc0zc0mc0zy0mc10k0mc1170mc11t0mc12f0mc1320mc13o0mc1hx0mc1ij0mc1j60mc1js0mc1ke0mc1l10mc1ln0mc1m90mc1mw0mc1ni0mc1o40mc1or0mc2j40mc2mu0my0sc0my0sz0my0tl0my0u70my0ut0my0vf0my0w20my0wo0my0xa0my0xw0my0yi0my0z50my0zr0my10d0my10z0my11l0my1270my12u0my13g0my1420my1hm0my1i80my1iu0my1jh0my1k30my1kp0my1lb0my1lx0my1mk0my1n60my1ns0my1oe0my2840my28q0my29c0my2gr0my2hd0my2hz0my2il0nk0rm0nk0s80nk0su0nk0tg0nk0u20nk0up0nk0vb0nk0vx0nk0wj0nk0x50nk0xr0nk0yd0nk0yz0nk0zl0nk1070nk10t0nk11g0nk1220nk12o0nk13a0nk13w0nk1he0nk1i00nk1im0nk1j80nk1ju0nk1kg0nk1l20nk1lp0nk1mb0nk1mx0nk1nj0nk1o50nk1or0nk2760nk2c20nk2gd0nk2gz0nk2hl0nk2i70nk2k20o60s50o60sr0o60td0o60tz0o60um0o60v80o60vu0o60wg0o60x20o60xo0o60ya0o60yw0o60zi0o61040o610q0o611c0o611y0o612k0o61h90o61hv0o61ih0o61j30o61jp0o61kb0o61kx0o61lj0o61m50o61mr0o61nd0o61nz0o61ol0o626c0o626y0o628s0o629e0o62a00o62b80o62bu0o62do0o62ew0o62g40o62gq0o62hc0os0s40os0sq0os0tc0os0ty0os0uk0os0v60os0vs0os0we0os0x00os0xm0os0y80os0yu0os0zg0os1020os10o0os1gk0os1h60os1hs0os1ie0os1j00os1jm0os1k80os1ku0os1lg0os1m20os1mo0os1na0os1nw0os1oi0os1p40os2680os28o0os29a0os29w0os2ai0os2es0pe0s40pe0sq0pe0tc0pe0ty0pe0uk0pe0v60pe0vs0pe0we0pe0x00pe0xm0pe0y80pe0yu0pe0zg0pe1020pe1h70pe1ht0pe1if0pe1j10pe1jn0pe1k90pe1kv0pe1lh0pe1m30pe1mp0pe1nb0pe1nx0pe1oj0pe1p50pe1pr0pe1qd0pe25n0pe2690pe26v0pe28p0pe29b0pe29x0pe2aj0pe2dl0q00ss0q00te0q00u00q00um0q00v80q00vu0q00wg0q00x20q00xo0q00ya0q00yw0q00zj0q01go0q01ha0q01hw0q01ii0q01j40q01jq0q01kc0q01ky0q01lk0q01m60q01ms0q01ne0q01o00q01om0q01p80q01pu0q01qg0q01r20q02550q026e0q02a20qm0sv0qm0th0qm0u40qm0uq0qm0vc0qm0vy0qm0wk0qm0x60qm0xs0qm0ye0qm1bb0qm1bx0qm1cj0qm1d50qm1dr0qm1fm0qm1g80qm1gu0qm1hg0qm1i20qm1io0qm1ja0qm1jw0qm1ki0qm1l50qm1lr0qm1md0qm1mz0qm1nl0qm1o70qm1ot0qm1pf0qm1q10qm1qo0qm1ra0qm2600qm2ab0qm2cs0r80se0r80t00r80tm0r80u90r80uv0r80vh0r80w30r80wp0r80xc0r81aw0r81bj0r81c50r81cr0r81dd0r81e00r81em0r81f80r81fu0r81gg0r81h30r81hp0r81ib0r81ix0r81jj0r81k60r81ks0r81le0r81m00r81mn0r81n90r81nv0r81oh0r81p30r81pq0r81qc0r81qy0r81rk0r82070r825r0r82ck0ru0qp0ru0t70ru0tt0ru0uf0ru0v20ru0vo0ru0wa0ru0wx0ru1ak0ru1b70ru1bt0ru1cg0ru1d20ru1do0ru1eb0ru1ex0ru1fj0ru1g60ru1gs0ru1he0ru1i10ru1in0ru1j90ru1jw0ru1ki0ru1l50ru1lr0ru1md0ru1n00ru1nm0ru1o80ru1ov0ru1ph0ru1q30ru1qq0ru1rc0ru1ry0ru1zf0ru27h0sg0qa0sg19o0sg1ab0sg1ax0sg1bk0sg1c60sg1ct0sg1dg0sg1e20sg1ep0sg1fb0sg1fy0sg1gk0sg1h70sg1ht0sg1ig0sg1j20sg1jp0sg1kb0sg1ky0sg1lk0sg1m70sg1mt0sg1ng0sg1o20sg1op0sg1pb0sg1py0sg1zc0sg1zy0sg25l0sg26u0sg27h0sg2830t20on0t20p90t20pw0t20qj0t219h0t21a40t21aq0t21bd0t21c00t21cn0t21d90t21dw0t21ej0t21f50t21fs0t21gf0t21h20t21ho0t21ib0t21iy0t21jl0t21k70t21ku0t21lh0t21m40t21mq0t21nd0t21o00t21om0t21p90t21qj0t21r50t21yq0t21zd0t22000t225o0t226b0t226y0t227k0t22870to0mc0to0mz0to0nm0to0o90to0ow0to19z0to1am0to1b90to1bw0to1cj0to1d60to1dt0to1ef0to1f20to1fp0to1gc0to1gz0to1hm0to1i90to1iw0to1jj0to1k60to1kt0to1lg0to1m30to1mq0to1nd0to1o00to1on0to1px0to1qk0to1r70to1ru0to1sh0to1yv0to1zi0to2050to20s0to24m0to2590to25w0to26j0to2760to27t0to2bm0ua0lc0ua0lz0ua0mm0ua0na0ua0p70ua0ue0ua19w0ua1aj0ua1b70ua1bu0ua1ch0ua1d40ua1ds0ua1ef0ua1f20ua1fp0ua1gd0ua1h00ua1hn0ua1ia0ua1iy0ua1jl0ua1k80ua1kw0ua1lj0ua1m60ua1mt0ua1nh0ua1o40ua1q20ua1qp0ua1rc0ua1rz0ua1sn0ua1ta0ua1tx0ua1yg0ua1z30ua1zr0ua20e0ua2110ua24a0ua24x0ua25k0ua2670ua26v0uw0kz0uw0ln0uw0ma0uw0my0uw0pk0uw0s70uw0su0uw19w0uw1aj0uw1b70uw1bv0uw1ci0uw1d60uw1dt0uw1eh0uw1f50uw1fs0uw1gg0uw1h30uw1hr0uw1if0uw1j20uw1jq0uw1kd0uw1l10uw1lp0uw1mc0uw1n00uw1nn0uw1ob0uw1oz0uw1pm0uw1qa0uw1qx0uw1rl0uw1s90uw1sw0uw1tk0uw1u70uw1xh0uw1ys0uw1zg0uw2040uw20r0uw21f0uw2220uw2410uw24p0uw25c0uw2600uw26o0uw27b0uw28m0vi0kn0vi0lb0vi0lz0vi0mn0vi19y0vi1am0vi1ba0vi1by0vi1cm0vi1da0vi1dy0vi1em0vi1fa0vi1fy0vi1gm0vi1ha0vi1hy0vi1im0vi1ja0vi1jy0vi1km0vi1la0vi1ly0vi1ml0vi1n90vi1p90vi1px0vi1ql0vi1r90vi1rx0vi1sl0vi1t90vi1tx0vi1x90vi1xx0vi1yl0vi1z90vi1zx0vi20l0vi2190vi21x0vi22l0vi2390vi23x0vi24l0vi2590vi25x0vi26l0vi2790vi27x0vi28l0vi2990vi29x0w40iz0w40jn0w40kc0w40l00w40lp0w40md0w41a30w41ar0w41bg0w41c40w41cs0w41dh0w41e50w41eu0w41fi0w41g60w41gv0w41hj0w41i80w41iw0w41jk0w41k90w41kx0w41lm0w41ma0w41my0w41ob0w41p00w41po0w41qc0w41r10w41rp0w41uf0w41v30w41vr0w41wg0w41x40w41xt0w41yh0w41z50w41zu0w420i0w42170w421v0w422j0w42380w423w0w424l0w42590w425x0w426m0w427a0w427z0w428n0w429b0w42a00w42ao0wq0io0wq0jc0wq0k10wq0kq0wq0lf0wq0m40wq0mt0wq0rn0wq1az0wq1bo0wq1cd0wq1d20wq1dr0wq1eg0wq1f40wq1ft0wq1gi0wq1h70wq1hw0wq1il0wq1ja0wq1jz0wq1kn0wq1lc0wq1m10wq1mq0wq1nf0wq1o40wq1ot0wq1ph0wq1q60wq1qv0wq1sy0wq1tn0wq1uc0wq1v00wq1vp0wq1we0wq1x30wq1xs0wq1yh0wq1z60wq1zv0wq20j0wq2180wq21x0wq22m0wq23b0wq2400wq24p0wq25d0wq2620wq26r0wq27g0wq2850wq28u0wq29j0wq2a80wq2aw0xc0j20xc0jr0xc0kh0xc0l60xc0lw0xc0ml0xc0na0xc0o00xc0op0xc0qt0xc1bz0xc1cp0xc1de0xc1e40xc1et0xc1fi0xc1g80xc1gx0xc1hn0xc1ic0xc1j10xc1jr0xc1kg0xc1l60xc1lv0xc1mk0xc1na0xc1nz0xc1op0xc1pe0xc1q40xc1qt0xc1ri0xc1s80xc1sx0xc1tn0xc1uc0xc1v10xc1vr0xc1wg0xc1x60xc1xv0xc1yk0xc1za0xc1zz0xc20p0xc21e0xc2230xc22t0xc23i0xc2480xc24x0xc25m0xc26c0xc2710xc27r0xc28g0xc2950xc29v0xc2ak0xc2ba0xy0i20xy0is0xy0ji0xy0k80xy0ky0xy0lo0xy0me0xy0n40xy0nu0xy0ok0xy0pa0xy0q00xy0qq0xy0rg0xy1bo0xy1ce0xy1d40xy1du0xy1ek0xy1fa0xy1g00xy1gq0xy1hg0xy1i60xy1jm0xy1kc0xy1ny0xy1oo0xy1pe0xy1q40xy1qu0xy1rk0xy1sa0xy1t00xy1tq0xy1ug0xy1v60xy1vw0xy1wm0xy1xc0xy1y20xy1ys0xy1zi0xy2080xy20y0xy21o0xy22e0xy2340xy23u0xy24k0xy25a0xy2600xy26q0xy27g0xy2860xy28w0xy29m0xy2ac0xy2b20yk0h10yk0hs0yk0ij0yk0j90yk0k00yk0kr0yk0lh0yk0m80yk0mz0yk0np0yk0og0yk0p70yk0px0yk0qo0yk0rf0yk0s50yk1c50yk1cw0yk1dm0yk1ed0yk1f40yk1fu0yk1gl0yk1o00yk1oq0yk1ph0yk1q80yk1qy0yk1rp0yk1sg0yk1t60yk1tx0yk1uo0yk1ve0yk1w50yk1ww0yk1xm0yk1yd0yk1z40yk1zu0yk20l0yk21c0yk2220yk22t0yk23k0yk24a0yk2510yk25s0yk26i0yk2790yk2800yk28q0yk29h0yk2a80yk2ay0yk2eo0z60gr0z60hi0z60ia0z60j10z60js0z60kk0z60lb0z60m30z60mu0z60nm0z60od0z60p40z60pw0z60qn0z60rf0z60s60z61cq0z61f00z61fr0z61gj0z61kc0z61nd0z61o50z61ow0z61po0z61qf0z61r60z61ry0z61sp0z61th0z61u80z61v00z61vr0z61wi0z61xa0z61y10z61yt0z61zk0z620b0z62130z621u0z622m0z623d0z62440z624w0z625n0z626f0z62760z627x0z628p0z629g0z62a80z62az0z62d90z62gb0z62h20zs0fp0zs0gh0zs0h90zs0i10zs0it0zs0jm0zs0ke0zs0l60zs0ly0zs0mr0zs0nj0zs0ob0zs0p30zs0pw0zs0qo0zs0rg0zs0s80zs0t00zs1bu0zs1cm0zs1de0zs1m10zs1mt0zs1nl0zs1oe0zs1p60zs1py0zs1qq0zs1rj0zs1t30zs1tv0zs1un0zs1vg0zs1w80zs1x00zs1xs0zs1yl0zs1zd0zs2050zs20x0zs21q0zs22i0zs23a0zs2420zs24u0zs25n0zs26f0zs2770zs27z0zs28s0zs29k0zs2ac0zs2dh10e0g710e0h010e0ht10e0im10e0jg10e0k910e0l210e0lv10e0mo10e0nh10e0ob10e0p410e0px10e0qq10e0rj10e0sc10e0t510e0tz10e1bs10e1cl10e1de10e1e710e1i910e1jv10e1kp10e1li10e1mb10e1n410e1nx10e1pj10e1qd10e1r610e1tl10e1ue10e1v710e1w110e1wu10e1xn10e1yg10e1z910e20210e20w10e21p10e22i10e23b10e24410e24x10e25q10e26k10e27d10e28610e28z10e29s10e2al10e2be10e2c810e2d110e2du10e2h31100fx1100gs1100hm1100ig1100ja1100k41100ky1100lt1100mn1100nh1100ob1100p51100q01100qu1100ro1100si1100tc1100u61101bs1101cm1101dh1101eb1101hn1101jc1101k61101l01101p71101q11101qv1101sk1101te1101u81101v21101vx1101wr1101xl1101yf1101z911020311020y11021s11022m11023g11024a11025511025z11026t11027n11028h11029b1102a61102b01102bu1102co1102di1102ed1102f71102hp11m0fo11m0gj11m0hf11m0ia11m0j511m0k111m0kw11m0lr11m0mn11m0ni11m0od11m0p911m0q411m0qz11m0rv11m0sq11m0tl11m0uh11m0vc11m0w711m0x311m1eh11m1fd11m1g811m1h311m1hz11m1iu11m1jp11m1kl11m1lg11m1n711m1o211m1ox11m1pt11m1qo11m1ta11m1u511m1v111m1vw11m1wr11m1xn11m1yi11m1zd11m20911m21411m21z11m22v11m23q11m24l11m25h11m26c11m27711m28311m28y11m29t11m2ap11m2bk11m2cf11m2db11m2e611m2f111m2fx1280gb1280h81280i51280j11280jy1280ku1280lr1280mo1280nk1280oh1280pe1280qa1280r71280s31280t01280tx1280ut1280vq1280yg1280zc1281du1281er1281fo1281gk1281hh1281ie1281ja1281k71281l31281m01281mx1281nt1281oq1281pn1281qj1281rg1281sc1281t91281u61281v21281vz1281ww1281xs1281yp1281zl12820i12821f12822b12823812824512825112825y12826u12827r12828o12829k1282ah1282be1282ca1282d71282e31282f01282fx12u0f512u0g312u0h212u0i012u0iy12u0jw12u0ku12u0ls12u0mq12u0no12u0om12u0pk12u0qi12u0rg12u0sf12u0td12u0ub12u0v912u0w712u0y312u1e612u1f512u1g312u1h112u1hz12u1ix12u1jv12u1kt12u1lr12u1mp12u1nn12u1ol12u1pj12u1qi12u1rg12u1se12u1tc12u1ua12u1v812u1w612u1x412u1y212u1z012u1zy12u20w12u21v12u22t12u23r12u24p12u25n12u26l12u27j12u28h12u29f12u2ad12u2bb12u2ca12u2d812u2e612u2f412u2g212u2h012u2hy13g0ew13g0fw13g0gv13g0hv13g0iv13g0jv13g0ku13g0lu13g0mu13g0nu13g0ot13g0pt13g0qt13g0ss13g0ts13g0us13g0vr13g0wr13g0xr13g1bn13g1cn13g1dn13g1fm13g1gm13g1hm13g1il13g1jl13g1kl13g1ll13g1mk13g1nk13g1ok13g1pk13g1qj13g1rj13g1sj13g1ti13g1ui13g1vi13g1wi13g1xh13g1yh13g1zh13g20h13g21g13g22g13g23g13g24g13g25f13g26f13g27f13g28e13g29e13g2ae13g2be13g2cd13g2dd13g2ed13g2fd13g2gc13g2hc1420en1420fo1420gq1420hr1420it1420jv1420kw1420ly1420mz1420o11420p31420q41420s71420t91420ub1420vc1420we1420xg1421c21421ic1421jd1421kf1421lh1421mi1421nk1421ol1421pn1421qp1421rq1421ss1421tt1421uv1421vx1421wy1421y01421z114220314221514222614223814224914225b14226d14227e14228g14229i1422aj1422bl1422cm1422do1422eq1422fr1422gt1422m114o0d914o0ed14o0fh14o0gk14o0ho14o0is14o0jw14o0kz14o0m314o0n714o0ob14o0pe14o0sq14o0tt14o0ux14o0w114o1cl14o1h014o1i414o1kb14o1lf14o1mj14o1nn14o1or14o1pu14o1qy14o1s214o1t614o1u914o1vd14o1wh14o1xl14o1yo14o1zs14o20w14o22014o23314o24714o25b14o26f14o27i14o28m14o29q14o2au14o2bx14o2d114o2e514o2f914o2lv14o2mz15a05v15a07115a0bq15a0cw15a0e315a0f915a0gf15a0hl15a0is15a0jy15a0l415a0ma15a0nh15a0tc15a0ui15a0vo15a1fm15a1hy15a1lh15a1mn15a1nu15a1p015a1q615a1rc15a1si15a1tp15a1uv15a1w115a1x715a1ye15a1zk15a20q15a21w15a23215a24915a25f15a26l15a27r15a28y15a2a415a2ba15a2cg15a2dm15a2et15a2fz15a2h515a2n015w05015w06915w07j15w08s15w0a115w0ba15w0cj15w0ds15w0f115w0ga15w0hj15w0is15w0k215w0lb15w0mk15w0nt15w0st15w0u215w11l15w1gm15w1hv15w1kd15w1lm15w1mv15w1o515w1pe15w1qn15w1rw15w1t515w1ue15w1vn15w1ww15w1y515w1ze15w20o15w21x15w23615w24f15w25o15w26x15w28615w29f15w2ao15w2bx15w2d615w2eg15w2fp15w2gy15w2i715w2jg15w2kp15w2og15w2pp16i05e16i06q16i08316i09f16i0as16i0c416i0dh16i0et16i0g616i0hi16i0iu16i0k716i0lj16i0mw16i0o816i0uz16i10c16i11p16i1gi16i1hu16i1kj16i1lw16i1n816i1ol16i1px16i1ra16i1sm16i1ty16i1vb16i1wn16i1y016i1zc16i20p16i22116i23e16i24q16i26316i27f16i28s16i2a416i2bg16i2ct16i2e516i2fi16i2gu16i2i716i2jj16i2kw16i2m816i2nl16i2ox16i2qa16i2rm17400017401g17404d17405u17407a17408r1740a71740bo1740d41740ek1740g11740hh1740iy1740ke1740lv1740nb1740os1740q81740t51740ul17410f17411w1741961741hx1741jd1741ma1741p71741qn1741s41741tk1741v11741wh1741xy1741ze17420u17422b17423r17425817426o17428517429l1742b21742ci1742dz1742ff1742gv1742ic1742js1742l91742mp1742o61742pm1742r317q00017q04s17q06d17q07y17q09j17q0b517q0cq17q0eb17q0fw17q0hi17q0j317q0ko17q0m917q0nv17q0pg17q0r117q0sm17q0u817q0vt17q10l17q12617q13r17q1i217q1jo17q1l917q1mu17q1of17q1rm17q1t717q1us17q1we17q1xz17q1zk17q21517q22r17q24c17q25x17q27i17q29417q2ap17q2ca17q2dv17q2fh17q2h217q2in17q2k817q2lu17q2nf17q2p017q2ql18c05918c07018c08s18c0aj18c0e118c0ja18c0l118c0ms18c0ok18c0qb18c0tt18c0z218c10t18c12l18c14c18c16318c1k418c1lv18c1y518c1zw18c21n18c23e18c25518c26w18c28n18c2ae18c2c618c2dx18c2fo18c2hf18c2j618c2kx18c2q618y0fn18y0hm18y0jk18y0pg18y0re18y0td18y0z818y11618y13518y15318y17218y1sk18y20e18y22d18y24b18y26918y28818y2a618y2c518y2i019k0fj19k0oe19k0zh19k11p19k13x19k16419k23e19k25m19k27t1a60jk1a60m01a60og1a60vs1a60y81a610o1a61341a615k1a61801a61wg1a62681a628o1as0m01as0og1as0qw1as0vs1as0y81as10o1as1341as15k1as1801as1hs1as1k81as268",X=[];for(let n=0;n<N.length;n+=6)X.push([parseInt(N.slice(n,n+3),36)/10-90,parseInt(N.slice(n+3,n+6),36)/10-180]);const I=Math.PI/180,G=[40.43,-3.98],Q=[["Madrid",40.42,-3.7],["Barcelona",41.39,2.17],["Sevilla",37.39,-5.98],["Valencia",39.47,-.38],["Bilbao",43.26,-2.93],["Lisboa",38.72,-9.14],["París",48.86,2.35],["Londres",51.5,-.12],["Berlín",52.52,13.4],["Roma",41.9,12.5],["Ámsterdam",52.37,4.9],["Dublín",53.35,-6.26],["Nueva York",40.71,-74],["Miami",25.76,-80.19],["Los Ángeles",34.05,-118.24],["Toronto",43.65,-79.38],["Ciudad de México",19.43,-99.13],["Bogotá",4.71,-74.07],["Lima",-12.05,-77.04],["Santiago",-33.45,-70.67],["Buenos Aires",-34.6,-58.38],["São Paulo",-23.55,-46.63],["Quito",-.18,-78.47],["Caracas",10.48,-66.9],["Marrakech",31.63,-7.98],["Lagos",6.52,3.38],["Nairobi",-1.29,36.82],["Ciudad del Cabo",-33.92,18.42],["Dubái",25.2,55.27],["Bombay",19.08,72.88],["Singapur",1.35,103.82],["Shanghái",31.23,121.47],["Seúl",37.57,126.98],["Tokio",35.68,139.69],["Sídney",-33.87,151.21],["Auckland",-36.85,174.76]];function aa(n,t){const e=n*I,i=t*I;return[Math.cos(e)*Math.cos(i),Math.cos(e)*Math.sin(i),Math.sin(e)]}function ua([n,t,e]){return[Math.asin(Math.max(-1,Math.min(1,e)))/I,Math.atan2(t,n)/I]}function ha(n,t,e){const i=Math.max(-1,Math.min(1,n[0]*t[0]+n[1]*t[1]+n[2]*t[2])),o=Math.acos(i);if(o<1e-6)return n;const s=Math.sin(o),l=Math.sin((1-e)*o)/s,p=Math.sin(e*o)/s;return[n[0]*l+t[0]*p,n[1]*l+t[1]*p,n[2]*l+t[2]*p]}class ga{constructor(t,{reducido:e=!1}={}){var i;this.canvas=t,this.ctx=t.getContext("2d"),this.reducido=e,this.lon=10,this.lat=22,this.objLon=null,this.objLat=22,this.zoom=1,this.objZoom=1,this.giro=e?0:.035,this.arcos=[],this.etiquetas=!1,this.pings=[],this.arrastrando=null,this.vivo=!0,this._t0=performance.now(),this._medir(),this._ro=typeof ResizeObserver<"u"?new ResizeObserver(()=>this._medir()):null,(i=this._ro)==null||i.observe(t),this._enlazarPuntero(),this._cuadro=this._cuadro.bind(this),this._raf=requestAnimationFrame(this._cuadro)}destruir(){var t;this.vivo=!1,cancelAnimationFrame(this._raf),(t=this._ro)==null||t.disconnect()}enfocar(t,e,i=1){this.objLat=t,this.objLon=e,this.objZoom=i}liberar(t=1){this.objLon=null,this.objLat=18,this.objZoom=t}disparar(t,e="",i=G){this.arcos.length>40&&this.arcos.shift(),this.arcos.push({a:aa(...i),b:aa(...t),t:0,dest:t,nombre:e})}_leerTokens(){const t=getComputedStyle(this.canvas),e=(i,o)=>t.getPropertyValue(i).trim()||o;this.col={tinta:e("--ucjc-ink","#1a242c"),panel:e("--ucjc-panel","#fbfcfb"),marca:e("--ucjc-brand","#0b3d4a"),clara:e("--ucjc-brand-bright","#146b7a"),fuente:e("--ucjc-font-display","Georgia, serif")}}_medir(){this._leerTokens();const t=this.canvas.getBoundingClientRect(),e=Math.min(2,globalThis.devicePixelRatio||1);this.w=Math.max(1,t.width),this.h=Math.max(1,t.height),this.canvas.width=Math.round(this.w*e),this.canvas.height=Math.round(this.h*e),this.ctx.setTransform(e,0,0,e,0,0)}_enlazarPuntero(){const t=this.canvas;t.addEventListener("pointerdown",i=>{var o;this.arrastrando={x:i.clientX,y:i.clientY,lon:this.lon,lat:this.lat},this.objLon=null,(o=t.setPointerCapture)==null||o.call(t,i.pointerId)}),t.addEventListener("pointermove",i=>{if(!this.arrastrando)return;const o=120/(this.R||200);this.lon=this.arrastrando.lon-(i.clientX-this.arrastrando.x)*o,this.lat=Math.max(-60,Math.min(70,this.arrastrando.lat+(i.clientY-this.arrastrando.y)*o)),this.objLat=this.lat});const e=()=>{this.arrastrando=null};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e)}_proy(t,e,i=1){const o=t*I,s=(e-this.lon)*I,l=this.lat*I,p=Math.sin(l)*Math.sin(o)+Math.cos(l)*Math.cos(o)*Math.cos(s),d=this.R*i,m=this.cx+d*Math.cos(o)*Math.sin(s),h=this.cy-d*(Math.cos(l)*Math.sin(o)-Math.sin(l)*Math.cos(o)*Math.cos(s)),v=p>0||Math.hypot(m-this.cx,h-this.cy)>this.R;return{x:m,y:h,cosc:p,delante:v}}_cuadro(t){if(!this.vivo)return;const e=Math.min(64,t-(this._ult||t));if(this._ult=t,this.objLon!=null){let i=(this.objLon-this.lon+540)%360-180;this.lon+=i*.05}else this.arrastrando||(this.lon+=this.giro*e*.1);this.arrastrando||(this.lat+=(this.objLat-this.lat)*.05),this.zoom+=(this.objZoom-this.zoom)*.06,this._pintar(t,e),this._raf=requestAnimationFrame(this._cuadro)}_pintar(t,e){const{ctx:i,w:o,h:s}=this,l=this.col;this.cx=o/2,this.cy=s/2,this.R=Math.min(o,s)*.42*this.zoom;const{cx:p,cy:d,R:m}=this,h=c=>{i.globalAlpha=Math.max(0,Math.min(1,c))};i.clearRect(0,0,o,s),h(1),i.fillStyle=l.tinta,i.beginPath(),i.arc(p,d,m,0,Math.PI*2),i.fill(),i.strokeStyle=l.panel,i.lineWidth=1,h(.35),i.beginPath(),i.arc(p,d,m,0,Math.PI*2),i.stroke(),h(.12),i.beginPath(),i.arc(p,d,m+7,0,Math.PI*2),i.stroke(),h(.07),i.lineWidth=.75;for(let c=-180;c<180;c+=20)this._linea(Array.from({length:37},(f,$)=>[-90+$*5,c]));for(let c=-60;c<=60;c+=20)this._linea(Array.from({length:73},(f,$)=>[c,-180+$*5]));const v=Math.max(.7,m/300);i.fillStyle=l.panel;for(let c=0;c<X.length;c++){const[f,$]=X[c],T=this._proy(f,$);T.cosc<=.02||(h(.12+T.cosc*.55),i.beginPath(),i.arc(T.x,T.y,v,0,Math.PI*2),i.fill())}const w=(c,f,$,T)=>{this.etiquetas&&(i.font=`italic ${Math.round(Math.max(11,m/26))}px ${l.fuente}`,i.fillStyle=l.panel,h(T),i.fillText(c,f+8,$-6))},M=this.reducido?1:e/2200;this.arcos=this.arcos.filter(c=>c.t<1.8);for(const c of this.arcos){c.t+=M;const f=Math.min(1,c.t),$=Math.max(0,c.t-.8),ra=.05+Math.acos(Math.max(-1,Math.min(1,c.a[0]*c.b[0]+c.a[1]*c.b[1]+c.a[2]*c.b[2])))*.1,Y=40;let B=null;for(let O=0;O<=Y;O++){const J=$+(f-$)*(O/Y),[sa,na]=ua(ha(c.a,c.b,J)),F=this._proy(sa,na,1+Math.sin(Math.PI*J)*ra);if(B&&F.delante&&B.delante){const R=O/Y;i.strokeStyle=R>.85?l.panel:l.clara,h(R>.85?.9*R:.25+R*.6),i.lineWidth=.6+R*.9,i.beginPath(),i.moveTo(B.x,B.y),i.lineTo(F.x,F.y),i.stroke()}B=F}c.t>=1&&!c.llegado&&(c.llegado=!0,this.pings.push({dest:c.dest,nombre:c.nombre,t:0}))}this.pings=this.pings.filter(c=>c.t<1);for(const c of this.pings){c.t+=this.reducido?1:e/2600;const f=this._proy(...c.dest);if(f.cosc<=.05)continue;const $=c.t<.15?c.t/.15:1-(c.t-.15)/.85;i.strokeStyle=l.panel,i.lineWidth=.75,h($*.6),i.beginPath(),i.arc(f.x,f.y,3+c.t*6,0,Math.PI*2),i.stroke(),i.fillStyle=l.panel,h($),i.beginPath(),i.arc(f.x,f.y,1.6,0,Math.PI*2),i.fill(),c.nombre&&w(c.nombre,f.x,f.y,$*.9)}const S=this._proy(...G);S.cosc>0&&(h(1),i.fillStyle=l.clara,i.beginPath(),i.arc(S.x,S.y,3.5,0,Math.PI*2),i.fill(),i.strokeStyle=l.panel,i.lineWidth=.75,h(.8),i.beginPath(),i.arc(S.x,S.y,7,0,Math.PI*2),i.stroke(),w("Villafranca",S.x+4,S.y,.9)),h(1)}_linea(t){const{ctx:e}=this;let i=!1;e.beginPath();for(const[o,s]of t){const l=this._proy(o,s);l.cosc>0?(i?e.lineTo(l.x,l.y):e.moveTo(l.x,l.y),i=!0):i=!1}e.stroke()}}const fa="ucjc:descubrimiento:anadir-al-carrito@1",ba="ucjc:descubrimiento:campana-cambiada@1";function ta(n,t){var e;return((e=window.ucjcCampus)==null?void 0:e.version)==="1"?window.ucjcCampus.emitir(n,t):(window.dispatchEvent(new CustomEvent(n,{detail:t})),null)}function $a(n){return{activa:!!n,codigo:q.codigo,etiqueta:q.etiqueta,momento:new Date().toISOString()}}const b=n=>String(n??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),H=n=>(ia.find(t=>t.id===n)||{}).nombre||n,Z=n=>`<span class="estrellas" style="--v:${n/5*100}%" aria-label="${String(n).replace(".",",")} de 5">★★★★★</span>`,ea=n=>n[Math.floor(Math.random()*n.length)];function ya(n,{precio:t=n.precio,cantidad:e=1}={}){return{productoId:n.id,nombre:n.nombre,precio:oa(t),cantidad:Math.max(1,Math.floor(Number(e)||1))}}const E={bolsa:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 8h14l-1.2 11.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',lupa:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',cerrar:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',mas:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',ok:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg>'},U=[{id:"intro",foco:null,zoom:.95},{id:"madrid",foco:G,zoom:1.8,producto:"prod-102",lugar:"Villafranca del Castillo",titulo:"Todo empieza <em>en el campus</em>.",texto:"La sudadera de siempre, la que se ve en cada pasillo, a mitad de precio solo estos cuatro días."},{id:"europa",foco:[47,6],zoom:1.55,producto:"prod-101",lugar:"Europa",titulo:"Hasta donde <em>te lleve el Erasmus</em>.",texto:"Lisboa, París, Berlín: la camiseta técnica llega en 48 horas."},{id:"america",foco:[8,-72],zoom:1.35,producto:"prod-110",lugar:"Latinoamérica",titulo:"Al otro lado <em>del Atlántico</em>.",texto:"De Bogotá a Buenos Aires, antiguos alumnos que siguen llevando el campus consigo."},{id:"mundo",foco:null,zoom:1,titulo:"Ofertas relámpago"},{id:"misterio",foco:[20,120],zoom:1.1,titulo:"La caja misteriosa"},{id:"todo",foco:null,zoom:.8,titulo:"Todo el catálogo, rebajado"}];class xa extends HTMLElement{static get observedAttributes(){return["modo"]}constructor(){var t;super(),this.estado={categoria:"todo",texto:"",orden:"destacados"},this.colores={},this.enBolsa=0,this.modo="normal",this.tarjetas=new Map,this.detalle=null,this.lineas=new Map,this.reducido=!!((t=globalThis.matchMedia)!=null&&t.call(globalThis,"(prefers-reduced-motion: reduce)").matches),this._timers=[]}connectedCallback(){var t;((t=window.ucjcCampus)==null?void 0:t.version)!=="1"&&console.warn("[descubrimiento] sin campus: se usan los valores de reserva"),this.shadowRoot||(this.attachShadow({mode:"open"}),this._montar()),this.getAttribute("modo")==="black-friday"?this.cambiarModo("bf",{sinCortina:!0}):this._emitirCampana(),this._heroGiro=setInterval(()=>this._rotarHero(),3800)}disconnectedCallback(){clearInterval(this._heroGiro),this._pararBF()}attributeChangedCallback(t,e,i){!this.shadowRoot||e===i||this.cambiarModo(i==="black-friday"?"bf":"normal")}$(t){return this.shadowRoot.querySelector(t)}$$(t){return[...this.shadowRoot.querySelectorAll(t)]}_emitirCarrito(t){ta(fa,t)}_emitirCampana(){ta(ba,$a(this.modo==="bf"))}_montar(){const t=x["prod-102"];this.shadowRoot.innerHTML=`<style>${la}</style>
    <div class="d" data-modo="normal" data-reducido="${this.reducido}">
      <header class="top">
        <div class="marca"><span class="sello">UCJC</span><span class="marca-txt">Tienda <b>Descubrimiento</b></span></div>
        <div class="modos" role="tablist" aria-label="Modo de la tienda">
          <span class="pildora" aria-hidden="true"></span>
          <button type="button" role="tab" data-modo="normal" aria-selected="true">Tienda</button>
          <button type="button" role="tab" data-modo="bf" aria-selected="false"><i class="led"></i>Black Friday</button>
        </div>
        <button type="button" class="bolsa" data-bolsa-ico data-mini aria-expanded="false" aria-controls="mini" aria-label="Ver lo añadido a la cesta">${E.bolsa}<span data-bolsa>0</span></button>
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
            <dl class="cifras"><div><dt>4,8</dt><dd>${Z(4.8)} 1.600 reseñas</dd></div><div><dt>24 h</dt><dd>Recogida en campus</dd></div><div><dt>30 días</dt><dd>Devolución gratis</dd></div></dl>
          </div>
          <div class="hero-arte" data-hero>
            <div class="mancha"></div>
            <div class="hero-prod" data-hero-prod data-id="${t.id}">${L(t,"granate")}</div>
            <div class="flota f1"><b data-hero-nombre>${b(t.nombre)}</b><small data-hero-precio>${k(t.precio)}</small></div>
            <div class="flota f2">${Z(4.9)}<small>«La llevo a todas partes»</small></div>
          </div>
        </section>

        <div class="cinta" aria-hidden="true"><div class="cinta-pista">${Array(2).fill(["Envío gratis al campus","Recogida en 24 h","Devoluciones en 30 días","Producto oficial UCJC","Algodón orgánico","Ediciones limitadas"].map(e=>`<span>${e}</span><i>✦</i>`).join("")).join("")}</div></div>

        <section class="catalogo" data-catalogo>
          <div class="barra">
            <label class="buscador">${E.lupa}<input type="search" placeholder="Busca sudaderas, tazas, mochilas…" aria-label="Buscar productos" data-buscar><kbd>/</kbd></label>
            <div class="cats" role="tablist" aria-label="Categorías">
              <span class="cats-ind" aria-hidden="true"></span>
              ${ia.map(e=>`<button type="button" role="tab" data-cat="${e.id}" aria-selected="${e.id==="todo"}">${e.nombre}<sup>${e.id==="todo"?C.length:C.filter(i=>i.categoria===e.id).length}</sup></button>`).join("")}
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
    </div>`,this.shadowRoot.addEventListener("click",e=>this._clic(e)),this.shadowRoot.addEventListener("pointerdown",e=>{!this.$("[data-mini-panel]").hidden&&!e.target.closest("[data-mini-panel], [data-mini]")&&this._alternarMini(!1)}),this.$("[data-buscar]").addEventListener("input",e=>{this.estado.texto=e.target.value,this._pintarGrid()}),this.$("[data-orden]").addEventListener("change",e=>{this.estado.orden=e.target.value,this._pintarGrid()}),this.$("[data-buscar]").addEventListener("keydown",e=>{e.key==="Escape"&&(e.target.value="",this.estado.texto="",this._pintarGrid())}),this.shadowRoot.addEventListener("keydown",e=>{var i,o;e.key==="/"&&!((o=(i=e.target).closest)!=null&&o.call(i,"input,select,textarea"))&&(e.preventDefault(),this.$("[data-buscar]").focus()),e.key==="Escape"&&this.detalle&&this.cerrarDetalle(),e.key==="Escape"&&!this.$("[data-mini-panel]").hidden&&this._alternarMini(!1)}),this.$(".d").addEventListener("pointermove",e=>{if(this.modo!=="bf")return;const i=this.$(".d").getBoundingClientRect();this.$(".d").style.setProperty("--mx",`${e.clientX-i.left}px`),this.$(".d").style.setProperty("--my",`${e.clientY-i.top}px`)}),C.forEach(e=>this.tarjetas.set(e.id,this._crearTarjeta(e))),this._pintarGrid(!0),requestAnimationFrame(()=>this._moverIndicadores())}_clic(t){var o,s;const e=t.target.closest("button, [data-abrir]");if(!e)return;const i=e.dataset;if("mini"in i)return this._alternarMini();if("miniCerrar"in i)return this._alternarMini(!1);if("irCompra"in i)return this._alternarMini(!1),(o=document.querySelector("ucjc-compra"))==null?void 0:o.scrollIntoView({behavior:this.reducido?"auto":"smooth",block:"start"});if(i.modo)return this.cambiarModo(i.modo);if(i.cat)return this.estado.categoria=i.cat,this.$$("[data-cat]").forEach(l=>l.setAttribute("aria-selected",String(l===e))),this._moverIndicadores(),this._pintarGrid();if("reset"in i)return this.estado={categoria:"todo",texto:"",orden:"destacados"},this.$("[data-buscar]").value="",this.$("[data-orden]").value="destacados",this.$$("[data-cat]").forEach(l=>l.setAttribute("aria-selected",String(l.dataset.cat==="todo"))),this._moverIndicadores(),this._pintarGrid();if("irCatalogo"in i)return this.$("[data-catalogo]").scrollIntoView({behavior:this.reducido?"auto":"smooth",block:"start"});if(i.color)return this._cambiarColor(i.id,i.color);if(i.abrir)return this.abrirDetalle(i.abrir,e.querySelector(".arte"));if(i.quick){const l=x[i.quick];return l.tallas.length&&!i.talla?e.closest(".card").classList.toggle("elige-talla"):((s=e.closest(".card"))==null||s.classList.remove("elige-talla"),this.anadir(l,{},e.closest(".card").querySelector(".arte")))}if("cerrar"in i)return this.cerrarDetalle();if(i.detColor)return this._detalleColor(i.detColor);if(i.detTalla){this.detalle.talla=i.detTalla,this.$$("[data-det-talla]").forEach(l=>l.setAttribute("aria-pressed",String(l===e))),this.$("[data-det-aviso]").textContent="";return}if(i.detCant){this.detalle.cantidad=Math.max(1,Math.min(9,this.detalle.cantidad+Number(i.detCant))),this.$("[data-det-num]").textContent=this.detalle.cantidad;return}if("detAnadir"in i)return this._anadirDesdeDetalle(e);if(i.rel)return this.cerrarDetalle(!0),setTimeout(()=>{var l;return this.abrirDetalle(i.rel,(l=this.tarjetas.get(i.rel))==null?void 0:l.querySelector(".arte"))},this.reducido?0:260);if(i.bfAnadir)return this._anadirBF(e);if(i.ir!=null)return this._irCapitulo(Number(i.ir));if("misterio"in i)return this._abrirMisterio(e)}_crearTarjeta(t){const e=this.colores[t.id]||t.colores[0];this.colores[t.id]=e;const i=document.createElement("article");return i.className="card",i.dataset.id=t.id,i.style.setProperty("--tinte",g[e].fondo),i.innerHTML=`
      <div class="card-visual"><button type="button" class="card-media" data-abrir="${t.id}" aria-label="Ver ${b(t.nombre)}">
        ${t.etiqueta?`<span class="tag">${b(t.etiqueta)}</span>`:""}
        <span class="arte">${L(t,e)}</span>
        <span class="ver">Ver producto →</span>
      </button>
      <div class="quick">
        <button type="button" class="quick-btn" data-quick="${t.id}">${E.mas}<span>${t.tallas.length?"Añadir rápido":"Añadir"}</span></button>
        ${t.tallas.length?`<div class="quick-tallas" role="group" aria-label="Elige talla">${t.tallas.map(o=>`<button type="button" data-quick="${t.id}" data-talla="${o}">${o}</button>`).join("")}</div>`:""}
      </div></div>
      <div class="card-info">
        <div><h3>${b(t.nombre)}</h3><p>${H(t.categoria)} · ${Z(t.valoracion)} <span class="n">(${t.resenas})</span></p></div>
        <b class="precio">${k(t.precio)}</b>
      </div>
      <div class="swatches" role="radiogroup" aria-label="Color">${t.colores.map(o=>`<button type="button" role="radio" data-id="${t.id}" data-color="${o}" aria-checked="${o===e}" aria-label="${g[o].nombre}" title="${g[o].nombre}" style="--c:${g[o].fondo}"></button>`).join("")}<span class="color-nombre">${g[e].nombre}</span></div>`,i}_cambiarColor(t,e){this.colores[t]=e;const i=this.tarjetas.get(t),o=x[t];i.style.setProperty("--tinte",g[e].fondo),i.querySelectorAll("[data-color]").forEach(l=>l.setAttribute("aria-checked",String(l.dataset.color===e))),i.querySelector(".color-nombre").textContent=g[e].nombre;const s=i.querySelector(".arte");if(this.reducido||!s.animate){s.innerHTML=L(o,e);return}s.animate([{opacity:1,transform:"scale(1) rotate(0)"},{opacity:0,transform:"scale(.86) rotate(-6deg)"}],{duration:160,easing:"ease-in"}).onfinish=()=>{s.innerHTML=L(o,e),s.animate([{opacity:0,transform:"scale(.86) rotate(6deg)"},{opacity:1,transform:"scale(1) rotate(0)"}],{duration:320,easing:"cubic-bezier(.2,1.4,.4,1)"})}}_pintarGrid(t=!1){const e=this.$("[data-grid]"),i=da(C,this.estado),o=new Map;t||[...e.children].forEach(l=>o.set(l.dataset.id,l.getBoundingClientRect())),e.replaceChildren(...i.map(l=>this.tarjetas.get(l.id))),this.$("[data-vacio]").hidden=i.length>0;const s=this.estado.texto.trim();this.$("[data-resultado]").textContent=`${i.length} ${i.length===1?"producto":"productos"}${s?` para «${s}»`:""}${this.estado.categoria!=="todo"?` en ${H(this.estado.categoria)}`:""}`,!(this.reducido||!e.animate)&&i.forEach((l,p)=>{const d=this.tarjetas.get(l.id),m=o.get(l.id);if(m){const h=d.getBoundingClientRect(),v=m.left-h.left,w=m.top-h.top;(v||w)&&d.animate([{transform:`translate(${v}px,${w}px)`},{transform:"none"}],{duration:520,easing:"cubic-bezier(.2,.8,.2,1)"})}else d.animate([{opacity:0,transform:"translateY(28px) scale(.96)"},{opacity:1,transform:"none"}],{duration:560,delay:Math.min(p,10)*45,easing:"cubic-bezier(.2,.8,.2,1)",fill:"backwards"})})}_moverIndicadores(){const t=(e,i,o)=>{if(!e||!i||!o)return;const s=e.getBoundingClientRect(),l=i.getBoundingClientRect();o.style.width=`${l.width}px`,o.style.transform=`translateX(${l.left-s.left+e.scrollLeft}px)`};t(this.$(".cats"),this.$('[data-cat][aria-selected="true"]'),this.$(".cats-ind")),t(this.$(".modos"),this.$('.modos [aria-selected="true"]'),this.$(".pildora"))}_rotarHero(){if(this.modo!=="normal"||document.hidden)return;const t=["prod-102","prod-101","prod-110","prod-109","prod-105","prod-113"],e=this.$("[data-hero-prod]");if(!e)return;const i=t[(t.indexOf(e.dataset.id)+1)%t.length],o=x[i],s=()=>{e.dataset.id=i,e.innerHTML=L(o,o.colores[0]),this.$("[data-hero-nombre]").textContent=o.nombre,this.$("[data-hero-precio]").textContent=k(o.precio)};if(this.reducido||!e.animate)return s();e.animate([{opacity:1,transform:"none"},{opacity:0,transform:"translateX(-40px) rotate(-8deg) scale(.9)"}],{duration:380,easing:"ease-in"}).onfinish=()=>{s(),e.animate([{opacity:0,transform:"translateX(50px) rotate(10deg) scale(.9)"},{opacity:1,transform:"none"}],{duration:700,easing:"cubic-bezier(.2,1.3,.3,1)"})}}anadir(t,{precio:e=t.precio,cantidad:i=1}={},o=null){const s=ya(t,{precio:e,cantidad:i});this._emitirCarrito(s),this.enBolsa+=s.cantidad;const l=this.lineas.get(s.productoId);l?l.cantidad+=s.cantidad:this.lineas.set(s.productoId,{nombre:s.nombre,precio:s.precio,cantidad:s.cantidad});const p=this.$("[data-bolsa]");return p.textContent=this.enBolsa,this.$("[data-mini-panel]").hidden||this._pintarMini(),this._volar(o),this._toast(`<b>Añadido</b> ${b(s.nombre)}${s.cantidad>1?` × ${s.cantidad}`:""} · ${k(s.precio)}`),s}_alternarMini(t){var s;const e=this.$("[data-mini-panel]"),i=this.$("[data-mini]"),o=t??e.hidden;o&&this._pintarMini(),e.hidden=!o,i.setAttribute("aria-expanded",String(o)),o&&!this.reducido&&((s=e.animate)==null||s.call(e,[{opacity:0,transform:"translateY(-8px)"},{opacity:1,transform:"none"}],{duration:260,easing:"cubic-bezier(.2,.8,.2,1)"}))}_pintarMini(){const t=[...this.lineas.entries()],e=t.reduce((o,[,s])=>o+s.precio*s.cantidad,0),i=!!document.querySelector("ucjc-compra");this.$("[data-mini-panel]").innerHTML=`
      <div class="mini-cab"><b>Tu cesta</b><button type="button" class="mini-x" data-mini-cerrar aria-label="Cerrar">${E.cerrar}</button></div>
      ${t.length?`<ul class="mini-lista">${t.map(([o,s])=>{const l=x[o];return`<li><span class="mini-arte">${l?L(l):""}</span><span class="mini-txt"><b>${b(s.nombre)}</b><small>${s.cantidad} × ${k(s.precio)}</small></span><b>${k(s.precio*s.cantidad)}</b></li>`}).join("")}</ul>
      <p class="mini-total"><span>Total añadido</span><b>${k(e)}</b></p>`:'<p class="mini-vacio">Aún no has añadido nada.</p>'}
      ${i?'<button type="button" class="btn primario mini-ir" data-ir-compra>Ir al carrito y pagar</button>':""}
      <p class="mini-nota">El carrito, los cambios de cantidad y el pago están en Compra.</p>`}_volar(t){const e=this.$("[data-bolsa-ico]"),i=()=>{var m;return(m=e.animate)==null?void 0:m.call(e,[{transform:"scale(1)"},{transform:"scale(1.35)"},{transform:"scale(1)"}],{duration:420,easing:"cubic-bezier(.3,1.6,.5,1)"})};if(this.reducido||!t||!t.animate)return i();const o=t.getBoundingClientRect(),s=e.getBoundingClientRect();if(!o.width)return i();const l=document.createElement("div");l.className="vuelo",l.innerHTML=t.innerHTML,Object.assign(l.style,{left:`${o.left}px`,top:`${o.top}px`,width:`${o.width}px`,height:`${o.height}px`}),this.$(".d").appendChild(l);const p=s.left+s.width/2-(o.left+o.width/2),d=s.top+s.height/2-(o.top+o.height/2);l.animate([{transform:"translate(0,0) scale(1) rotate(0)",opacity:1},{transform:`translate(${p*.45}px,${d*.45-120}px) scale(.55) rotate(-14deg)`,opacity:1,offset:.5},{transform:`translate(${p}px,${d}px) scale(.08) rotate(10deg)`,opacity:.4}],{duration:820,easing:"cubic-bezier(.5,0,.3,1)"}).onfinish=()=>{l.remove(),i()}}_toast(t){const e=this.$("[data-toast]");e.innerHTML=`<span class="toast-ok">${E.ok}</span><span>${t}</span>`,e.classList.add("visible"),clearTimeout(this._toastT),this._toastT=setTimeout(()=>e.classList.remove("visible"),2600)}abrirDetalle(t,e=null){const i=x[t];if(!i)return;this.detalle={id:t,color:this.colores[t]||i.colores[0],talla:null,cantidad:1};const o=this.$("[data-detalle]"),s=C.filter(d=>d.id!==t&&d.categoria===i.categoria).concat(C.filter(d=>d.id!==t&&d.categoria!==i.categoria)).slice(0,4);o.innerHTML=`
      <div class="det-fondo" data-cerrar></div>
      <div class="det-panel" role="dialog" aria-modal="true" aria-label="${b(i.nombre)}">
        <button type="button" class="det-cerrar" data-cerrar aria-label="Cerrar">${E.cerrar}</button>
        <div class="det-media" style="--tinte:${g[this.detalle.color].fondo}">
          ${i.etiqueta?`<span class="tag">${b(i.etiqueta)}</span>`:""}
          <div class="det-arte" data-det-arte>${L(i,this.detalle.color)}</div>
        </div>
        <div class="det-info">
          <p class="det-cat">${H(i.categoria)} · Producto oficial</p>
          <h2>${b(i.nombre)}</h2>
          <p class="det-val">${Z(i.valoracion)} <b>${String(i.valoracion).replace(".",",")}</b> <span>(${i.resenas} reseñas)</span></p>
          <p class="det-precio">${k(i.precio)}<small>IVA incluido · recogida gratis en campus</small></p>
          <p class="det-desc">${b(i.descripcion)}</p>
          <div class="det-bloque"><span class="det-et">Color · <b data-det-color-nombre>${g[this.detalle.color].nombre}</b></span>
            <div class="swatches grandes">${i.colores.map(d=>`<button type="button" role="radio" data-det-color="${d}" aria-checked="${d===this.detalle.color}" aria-label="${g[d].nombre}" style="--c:${g[d].fondo}"></button>`).join("")}</div></div>
          ${i.tallas.length?`<div class="det-bloque"><span class="det-et">Talla</span><div class="tallas">${i.tallas.map(d=>`<button type="button" data-det-talla="${d}" aria-pressed="false">${d}</button>`).join("")}</div><p class="det-aviso" data-det-aviso></p></div>`:""}
          <div class="det-compra">
            <div class="cantidad"><button type="button" data-det-cant="-1" aria-label="Menos">−</button><span data-det-num>1</span><button type="button" data-det-cant="1" aria-label="Más">+</button></div>
            <button type="button" class="btn primario grande" data-det-anadir><span>Añadir a la cesta</span></button>
          </div>
          <details class="det-acc" open><summary>Detalles</summary><ul>${i.detalles.map(d=>`<li>${b(d)}</li>`).join("")}</ul></details>
          <details class="det-acc"><summary>Envío y devoluciones</summary><p>Recogida gratis en cualquier campus en 24 h. Envío a domicilio en 48–72 h. Tienes 30 días para devolverlo.</p></details>
          <div class="rel"><p class="det-et">Combina con</p><div class="rel-fila">${s.map(d=>`<button type="button" class="rel-item" data-rel="${d.id}" style="--tinte:${g[d.colores[0]].fondo}"><span class="arte">${L(d)}</span><small>${b(d.nombre)}</small><b>${k(d.precio)}</b></button>`).join("")}</div></div>
        </div>
      </div>`,o.hidden=!1;const l=o.querySelector(".det-panel"),p=o.querySelector(".det-arte");if(l.querySelector("[data-cerrar]").focus({preventScroll:!0}),!(this.reducido||!l.animate)){if(o.querySelector(".det-fondo").animate([{opacity:0},{opacity:1}],{duration:380,easing:"ease-out"}),l.animate([{opacity:0,transform:"translateY(40px) scale(.98)"},{opacity:1,transform:"none"}],{duration:520,easing:"cubic-bezier(.2,.9,.2,1)"}),e){const d=e.getBoundingClientRect(),m=p.getBoundingClientRect();if(d.width&&m.width){const h=d.width/m.width;p.animate([{transform:`translate(${d.left-m.left}px,${d.top-m.top}px) scale(${h})`,transformOrigin:"top left"},{transform:"none",transformOrigin:"top left"}],{duration:640,easing:"cubic-bezier(.2,.9,.1,1)"})}}l.querySelectorAll(".det-info > *").forEach((d,m)=>d.animate([{opacity:0,transform:"translateY(16px)"},{opacity:1,transform:"none"}],{duration:480,delay:120+m*40,easing:"cubic-bezier(.2,.8,.2,1)",fill:"backwards"}))}}cerrarDetalle(t=!1){var s,l;const e=this.$("[data-detalle]");if(!this.detalle)return;const i=this.detalle.id;this.detalle=null;const o=()=>{e.hidden=!0,e.innerHTML=""};if(this.reducido||t||!e.animate)return o();e.querySelector(".det-fondo").animate([{opacity:1},{opacity:0}],{duration:260,fill:"forwards"}),e.querySelector(".det-panel").animate([{opacity:1,transform:"none"},{opacity:0,transform:"translateY(30px) scale(.98)"}],{duration:260,easing:"ease-in",fill:"forwards"}).onfinish=o,(l=(s=this.tarjetas.get(i))==null?void 0:s.querySelector(".card-media"))==null||l.focus({preventScroll:!0})}_detalleColor(t){var o;const e=x[this.detalle.id];this.detalle.color=t,this.$$("[data-det-color]").forEach(s=>s.setAttribute("aria-checked",String(s.dataset.detColor===t))),this.$("[data-det-color-nombre]").textContent=g[t].nombre,this.$(".det-media").style.setProperty("--tinte",g[t].fondo);const i=this.$("[data-det-arte]");i.innerHTML=L(e,t),(o=i.animate)==null||o.call(i,[{opacity:0,transform:"rotate(-5deg) scale(.92)"},{opacity:1,transform:"none"}],{duration:this.reducido?0:420,easing:"cubic-bezier(.2,1.3,.4,1)"}),this._cambiarColor(e.id,t)}_anadirDesdeDetalle(t){var i,o;const e=x[this.detalle.id];if(e.tallas.length&&!this.detalle.talla){this.$("[data-det-aviso]").textContent="Elige una talla para continuar.",(o=(i=this.$(".tallas")).animate)==null||o.call(i,[{transform:"translateX(0)"},{transform:"translateX(-8px)"},{transform:"translateX(8px)"},{transform:"translateX(0)"}],{duration:300});return}this.anadir(e,{cantidad:this.detalle.cantidad},this.$("[data-det-arte]")),t.classList.add("hecho"),t.innerHTML=`${E.ok}<span>Añadido</span>`,setTimeout(()=>{t.isConnected&&(t.classList.remove("hecho"),t.innerHTML="<span>Añadir otra vez</span>")},1600)}cambiarModo(t,{sinCortina:e=!1}={}){if(t===this.modo||(this.modo=t,!this.shadowRoot))return;this.$$(".modos [data-modo]").forEach(s=>s.setAttribute("aria-selected",String(s.dataset.modo===t))),this._moverIndicadores(),this.detalle&&this.cerrarDetalle(!0);const i=()=>{this.$(".d").dataset.modo=t,this.$(".vista-normal").hidden=t!=="normal",this.$("[data-vista-bf]").hidden=t!=="bf",t==="bf"?this._iniciarBF():this._pararBF(),this._moverIndicadores()};this._emitirCampana();const o=this.$(".cortina");if(e||this.reducido||!o.animate)return i();this.getBoundingClientRect().top<0&&this.scrollIntoView({behavior:"smooth",block:"start"}),o.classList.add("activa"),o.dataset.hacia=t,o.animate([{clipPath:"inset(0 100% 0 0)"},{clipPath:"inset(0 0 0 0)"}],{duration:420,easing:"cubic-bezier(.7,0,.3,1)",fill:"forwards"}).onfinish=()=>{i(),o.animate([{clipPath:"inset(0 0 0 0)"},{clipPath:"inset(0 0 0 100%)"}],{duration:520,delay:160,easing:"cubic-bezier(.7,0,.3,1)",fill:"forwards"}).onfinish=()=>o.classList.remove("activa")}}_iniciarBF(){const t=this.$("[data-vista-bf]");t.firstElementChild||(t.innerHTML=this._tplBF());const e=t.querySelector("canvas");!this.globo&&e.getContext&&e.getContext("2d")&&(this.globo=new ga(e,{reducido:this.reducido})),this._stats=this._stats||{pedidos:1284,ventas:23517.4,paises:19,porMin:42},this._timers.push(setInterval(()=>this._latido(),this.reducido?2600:1400)),this._timers.push(setInterval(()=>this._reloj(),1e3)),this._reloj(),this._observarCapitulos()}_pararBF(){var e,i;this._timers.forEach(clearInterval),this._timers=[],(e=this._io)==null||e.disconnect(),this._io=null,(i=this.globo)==null||i.destruir(),this.globo=null;const t=this.$("[data-vista-bf]");t&&(t.innerHTML="")}_tplBF(){const t=["I","II","III","IV","V","VI","VII"],e=(i,o)=>{const s=x[i.producto];return`<section class="cap cap-oferta" data-cap="${o}">
        <div class="cap-caja">
          <p class="cap-num">${t[o]} — ${i.lugar}</p>
          <h3>${i.titulo}</h3><p class="cap-txt">${i.texto}</p>
          ${this._tplOfertaBF(s,q.descuentos[s.id],"grande")}
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
          <nav class="hud capitulos" aria-label="Capítulos">${U.map((i,o)=>`<button type="button" data-ir="${o}" aria-label="Ir a ${i.titulo?i.titulo.replace(/<[^>]+>/g,""):"inicio"}">${t[o]}</button>`).join("")}</nav>
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
          ${U.slice(1,4).map((i,o)=>e(i,o+1)).join("")}
          <section class="cap cap-relampago" data-cap="4">
            <div class="cap-caja ancha">
              <p class="cap-num">V — Por tiempo limitado</p>
              <h3>Tres piezas, <em>unas horas</em>.</h3>
              <p class="cap-txt">Precio especial mientras dure el contador o queden unidades.</p>
              <div class="relampagos">${q.relampago.map((i,o)=>{const s=x[i];return`<div class="relampago" data-relampago="${o}">${this._tplOfertaBF(s,q.descuentos[i]+10,"mini")}<div class="stock"><span>Quedan <b data-stock>${24-o*7}</b></span><i><em data-stock-barra style="width:${100-o*25}%"></em></i></div><p class="cuenta" data-cuenta>14:59</p></div>`}).join("")}</div>
            </div>
          </section>
          <section class="cap cap-misterio" data-cap="5">
            <div class="cap-caja centro">
              <p class="cap-num">VI — Para quien llegue hasta aquí</p>
              <h3>El sobre <em>lacrado</em></h3>
              <p class="cap-txt">Uno por persona. Dentro, una pieza de la colección a&nbsp;−${q.misterio.descuento}&nbsp;%.</p>
              <button type="button" class="sobre" data-misterio aria-label="Abrir el sobre"><span class="solapa"></span><span class="lacre">U</span></button>
              <div class="premio" data-premio hidden></div>
            </div>
          </section>
          <section class="cap cap-todo" data-cap="6">
            <div class="cap-caja ancha">
              <p class="cap-num">VII — La colección</p>
              <h3>Todo, <em>rebajado</em>.</h3>
              <div class="bf-grid">${C.map(i=>this._tplOfertaBF(i,q.descuentos[i.id],"grid")).join("")}</div>
              <button type="button" class="btn fantasma claro volver" data-modo="normal">Volver a la tienda</button>
            </div>
          </section>
        </div>
      </div>
    </div>`}_tplOfertaBF(t,e,i){const o=V(t,e),s=t.colores[0],l=t.tallas.length?`<div class="bf-tallas"><span>Elige talla para añadir</span>${t.tallas.map(p=>`<button type="button" data-bf-anadir="${t.id}" data-talla="${p}" data-desc="${e}">${p}</button>`).join("")}</div>`:`<button type="button" class="btn bf-btn" data-bf-anadir="${t.id}" data-desc="${e}">Añadir a la cesta</button>`;return`<article class="oferta oferta-${i}">
      <div class="oferta-arte"><span class="desc">−${e} %</span><span class="arte">${L(t,s)}</span></div>
      <div class="oferta-info"><h4>${b(t.nombre)}</h4><p class="precios"><b>${k(o)}</b><s>${k(t.precio)}</s></p></div>
      ${l}
    </article>`}_anadirBF(t){var s;const e=x[t.dataset.bfAnadir],i=Number(t.dataset.desc),o=(s=t.closest(".oferta, .premio"))==null?void 0:s.querySelector(".arte");this.anadir(e,{precio:V(e,i)},o)}_latido(){var m;const t=this._stats,[e,i,o]=ea(Q),s=ea(C),l=1+Math.floor(Math.random()*3);t.pedidos+=l,t.ventas+=V(s)*l,t.porMin=Math.max(18,Math.min(140,t.porMin+Math.round((Math.random()-.45)*8))),Math.random()<.08&&t.paises<Q.length&&t.paises++,(m=this.globo)==null||m.disparar([i,o],e);const p=(h,v)=>{const w=this.$(h);w&&(w.textContent=v)};p("[data-s-min]",t.porMin),p("[data-s-ventas]",`${Math.round(t.ventas).toLocaleString("es-ES")} €`),p("[data-s-paises]",t.paises);const d=this.$("[data-feed]");if(d){const h=document.createElement("li");for(h.innerHTML=`<b>${b(e)}</b><span>${b(s.nombre)}</span>`,d.prepend(h);d.children.length>5;)d.lastElementChild.remove()}}_reloj(){const t=Date.now(),e=Date.parse(q.inicio),i=Date.parse(q.fin),o=t<e?e:i,s=this.$("[data-reloj-et]");s&&(s.textContent=t<e?"Empieza en":t<i?"Termina en":"Ha terminado (pero las ofertas siguen en la demo)");let l=Math.max(0,o-t)/1e3;const p={d:Math.floor(l/86400),h:Math.floor(l%86400/3600),m:Math.floor(l%3600/60),s:Math.floor(l%60)};Object.entries(p).forEach(([d,m])=>{const h=this.$(`[data-r="${d}"]`);h&&(h.textContent=String(m).padStart(2,"0"))}),this.$$("[data-relampago]").forEach((d,m)=>{const v=900-Math.floor(t/1e3+m*293)%900;d.querySelector("[data-cuenta]").textContent=`${String(Math.floor(v/60)).padStart(2,"0")}:${String(v%60).padStart(2,"0")}`;const w=d.querySelector("[data-stock]");let M=Number(w.textContent);Math.random()<.18&&(M=M<=1?30-m*6:M-1),w.textContent=M,d.querySelector("[data-stock-barra]").style.width=`${Math.min(100,M/30*100)}%`,d.classList.toggle("casi",M<=5)})}_observarCapitulos(){const t=this.$("[data-bf-scroll]");!t||typeof IntersectionObserver>"u"||(this._io=new IntersectionObserver(e=>{e.forEach(i=>{if(!i.isIntersecting)return;const o=Number(i.target.dataset.cap),s=U[o];i.target.classList.add("visto"),this.$$(".capitulos [data-ir]").forEach((l,p)=>l.classList.toggle("activo",p===o)),this.$("[data-escena]").dataset.cap=s.id,this.globo&&(this.globo.etiquetas=!["intro","todo"].includes(s.id),s.foco?this.globo.enfocar(s.foco[0],s.foco[1],s.zoom):this.globo.liberar(s.zoom))})},{root:t,rootMargin:"-45% 0px -45% 0px",threshold:0}),this.$$("[data-cap]").forEach(e=>this._io.observe(e)))}_irCapitulo(t){const e=this.$("[data-bf-scroll]"),i=this.$(`[data-cap="${t}"]`);!e||!i||e.scrollTo({top:e.scrollTop+i.getBoundingClientRect().top-e.getBoundingClientRect().top,behavior:this.reducido?"auto":"smooth"})}_abrirMisterio(t){t.classList.contains("abierta")||(t.classList.add("abierta"),setTimeout(()=>t.classList.add("guardada"),this.reducido?0:650),setTimeout(()=>{var s;const{id:e,descuento:i}=q.misterio,o=this.$("[data-premio]");o.innerHTML=`<p class="premio-et">Dentro había…</p>${this._tplOfertaBF(x[e],i,"grande")}`,o.hidden=!1,(s=o.animate)==null||s.call(o,[{opacity:0,transform:"translateY(24px)"},{opacity:1,transform:"none"}],{duration:900,easing:"cubic-bezier(.2,.8,.2,1)"})},this.reducido?0:1100))}}customElements.get("ucjc-descubrimiento")||customElements.define("ucjc-descubrimiento",xa);const va=document.getElementById("log");["ucjc:descubrimiento:anadir-al-carrito@1","ucjc:descubrimiento:campana-cambiada@1"].forEach(n=>window.addEventListener(n,t=>{va.textContent=n+`
`+JSON.stringify(t.detail,null,2)}));
