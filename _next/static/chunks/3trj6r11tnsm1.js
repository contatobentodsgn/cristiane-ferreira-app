(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,82435,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return o}});let o=e=>{}},78538,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={DecodeError:function(){return x},MiddlewareNotFoundError:function(){return j},MissingStaticPage:function(){return y},NormalizeError:function(){return b},PageNotFoundError:function(){return v},SP:function(){return m},ST:function(){return h},WEB_VITALS:function(){return n},execOnce:function(){return i},getDisplayName:function(){return d},getLocationOrigin:function(){return l},getURL:function(){return u},isAbsoluteUrl:function(){return c},isResSent:function(){return g},loadGetInitialProps:function(){return p},normalizeRepeatedSlashes:function(){return f},stringifyError:function(){return N}};for(var a in o)Object.defineProperty(t,a,{enumerable:!0,get:o[a]});let n=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let r,t=!1;return(...o)=>(t||(t=!0,r=e(...o)),r)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,c=e=>s.test(e);function l(){let{protocol:e,hostname:r,port:t}=window.location;return`${e}//${r}${t?":"+t:""}`}function u(){let{href:e}=window.location,r=l();return e.substring(r.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function g(e){return e.finished||e.headersSent}function f(e){let r=e.split("?");return r[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(r[1]?`?${r.slice(1).join("?")}`:"")}async function p(e,r){let t=r.res||r.ctx&&r.ctx.res;if(!e.getInitialProps)return r.ctx&&r.Component?{pageProps:await p(r.Component,r.ctx)}:{};let o=await e.getInitialProps(r);if(t&&g(t))return o;if(!o)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${o}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return o}let m="u">typeof performance,h=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class x extends Error{}class b extends Error{}class v extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class y extends Error{constructor(e,r){super(),this.message=`Failed to load static file for page: ${e} ${r}`}}class j extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function N(e){return JSON.stringify({message:e.message,stack:e.stack})}},10346,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={assign:function(){return c},searchParamsToUrlQuery:function(){return n},urlQueryToSearchParams:function(){return s}};for(var a in o)Object.defineProperty(t,a,{enumerable:!0,get:o[a]});function n(e){let r={};for(let[t,o]of e.entries()){let e=r[t];void 0===e?r[t]=o:Array.isArray(e)?e.push(o):r[t]=[e,o]}return r}function i(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let r=new URLSearchParams;for(let[t,o]of Object.entries(e))if(Array.isArray(o))for(let e of o)r.append(t,i(e));else r.set(t,i(o));return r}function c(e,...r){for(let t of r){for(let r of t.keys())e.delete(r);for(let[r,o]of t.entries())e.append(r,o)}return e}},38693,e=>{"use strict";var r=e.i(55967);let t=(...e)=>e.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim(),o=e=>{let r=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,t)=>t?t.toUpperCase():r.toLowerCase());return r.charAt(0).toUpperCase()+r.slice(1)};var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let n=(0,r.createContext)({}),i=(0,r.forwardRef)(({color:e,size:o,strokeWidth:i,absoluteStrokeWidth:s,className:c="",children:l,iconNode:u,...d},g)=>{let{size:f=24,strokeWidth:p=2,absoluteStrokeWidth:m=!1,color:h="currentColor",className:x=""}=(0,r.useContext)(n)??{},b=s??m?24*Number(i??p)/Number(o??f):i??p;return(0,r.createElement)("svg",{ref:g,...a,width:o??f??a.width,height:o??f??a.height,stroke:e??h,strokeWidth:b,className:t("lucide",x,c),...!l&&!(e=>{for(let r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0;return!1})(d)&&{"aria-hidden":"true"},...d},[...u.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(l)?l:[l]])});e.s(["default",0,(e,a)=>{let n=(0,r.forwardRef)(({className:n,...s},c)=>(0,r.createElement)(i,{ref:c,iconNode:a,className:t(`lucide-${o(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,n),...s}));return n.displayName=o(e),n}],38693)},99102,e=>{"use strict";let r=(0,e.i(38693).default)("phone",[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]);e.s(["Phone",0,r],99102)},54769,e=>{"use strict";let r=(0,e.i(38693).default)("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);e.s(["default",0,r])},36861,e=>{"use strict";var r=e.i(54769);e.s(["AlertTriangle",()=>r.default])},63491,e=>{"use strict";var r=e.i(46400),t=e.i(55967),o=e.i(36861),a=e.i(99102);let n=`
html.ge {
  color-scheme: light;
  --ge-page: #fff8f4;        /* --surface-page */
  --ge-forte: #222222;       /* --text-strong  */
  --ge-corpo: #4a4a4a;       /* --text-body    */
  --ge-fraco: #696564;       /* --text-muted   */
  --ge-recuo: #f4e7de;       /* --surface-inset */
  --ge-perigo-fundo: #fde3e8;  /* --danger-surface */
  --ge-perigo-tinta: #a80f2c;  /* --danger-ink, 6,26:1 sobre o fundo acima */
  --ge-perigo-cheio: #c9163a;  /* --danger-fill, 5,6:1 com texto branco */
  --ge-foco: #6a52f2;          /* --focus-ring (majorelle) */
}
@media (prefers-color-scheme: dark) {
  html.ge {
    color-scheme: dark;
    --ge-page: #170d12;
    --ge-forte: #fff8f4;
    --ge-corpo: #e8d9e2;
    --ge-fraco: #b6a4af;
    --ge-recuo: #1c1218;
    --ge-perigo-fundo: #3a1018;
    --ge-perigo-tinta: #ff8fa3;
    --ge-perigo-cheio: #b01230;
    /* Majorelle reprova 1.4.11 nas superf\xedcies escuras — mesma
       luminosidade corrigida que o tokens.css usa no tema escuro. */
    --ge-foco: #9b8bf6;
  }
}
/* \`color-scheme\` acima n\xe3o \xe9 decora\xe7\xe3o: \xe9 o que impede o Chrome do
   Android de aplicar escurecimento autom\xe1tico por cima destas cores. */
html.ge, html.ge body {
  margin: 0;
  padding: 0;
  background: var(--ge-page);
  color: var(--ge-corpo);
}
html.ge * { box-sizing: border-box; }
html.ge body {
  /* Inter Tight vem do next/font pelo layout raiz, que n\xe3o existe
     aqui. Pilha do sistema: s\xf3bria, e j\xe1 est\xe1 no aparelho. */
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
}
.ge-folha {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  width: 100%;
  max-width: 34rem;
  min-height: 100dvh;
  margin: 0 auto;
  padding: 48px 20px max(env(safe-area-inset-bottom), 48px);
}
.ge-titulo {
  margin: 0;
  font-size: 26px;
  font-weight: 600;
  line-height: 1.2;
  color: var(--ge-forte);
}
.ge-texto { margin: 12px 0 0; font-size: 17px; }
.ge-acoes { display: grid; gap: 10px; }
.ge-botao {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  min-height: 44px;   /* --control-h-md: alvo de toque */
  padding: 0 24px;
  border: 0;
  border-radius: 999px;
  font: inherit;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}
/* O anel: dois degraus, o primeiro na cor da p\xe1gina, como o
   --ring-focus do produto. Sem isto a tela n\xe3o tem foco vis\xedvel. */
.ge-botao:focus-visible,
.ge-fone:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--ge-page), 0 0 0 4px var(--ge-foco);
}
/* Chiclete com r\xf3tulo carbono, nunca branco: branco d\xe1 2,83:1 e
   reprova AA; carbono d\xe1 5,62:1. Chiclete n\xe3o vira por tema. */
.ge-primario { background: #ff59be; color: #222222; }
.ge-quieto { background: var(--ge-recuo); color: var(--ge-forte); }
.ge-alerta {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 16px;
  border-radius: 16px;   /* --radius-md */
  background: var(--ge-perigo-fundo);
}
/* O \xedcone do lucide desenha com \`stroke="currentColor"\`, ent\xe3o a cor
   vem por CSS. Passar \`color={"var(--ge-perigo-tinta)"}\` N\xc3O serve:
   a prop vira atributo do <svg>, e atributo n\xe3o resolve var(). */
.ge-alerta-icone { flex-shrink: 0; margin-top: 2px; color: var(--ge-perigo-tinta); }
.ge-alerta-corpo { min-width: 0; }
.ge-alerta-titulo {
  margin: 0;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.35;
  color: var(--ge-perigo-tinta);
}
.ge-alerta-texto { margin: 4px 0 0; font-size: 16px; }
.ge-fone {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 44px;
  margin-top: 12px;
  padding: 0 24px;
  border-radius: 999px;
  background: var(--ge-perigo-cheio);
  color: #ffffff;
  font-weight: 500;
  text-decoration: none;
}
.ge-nota { margin: 12px 0 0; font-size: 14px; color: var(--ge-fraco); }
`;e.s(["default",0,function({error:e,unstable_retry:i}){return(0,t.useEffect)(()=>{console.error("Falha ao montar o aplicativo:",e)},[e]),(0,r.jsx)("html",{lang:"pt-BR",className:"ge",children:(0,r.jsxs)("body",{children:[(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:n}}),(0,r.jsx)("title",{children:"Não foi possível abrir — Dra. Cristiane Ferreira"}),(0,r.jsxs)("main",{className:"ge-folha",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"ge-titulo",children:"O aplicativo não conseguiu abrir"}),(0,r.jsx)("p",{className:"ge-texto",children:"Alguma coisa falhou antes mesmo desta tela montar. Não foi nada que você fez. Seus exames, consultas e documentos continuam guardados neste aparelho — nada foi apagado."})]}),(0,r.jsxs)("div",{className:"ge-acoes",children:[(0,r.jsx)("button",{type:"button",className:"ge-botao ge-primario",onClick:()=>window.location.reload(),children:"Recarregar o aplicativo"}),(0,r.jsx)("button",{type:"button",className:"ge-botao ge-quieto",onClick:()=>i(),children:"Tentar de novo"})]}),(0,r.jsxs)("div",{className:"ge-alerta",children:[(0,r.jsx)(o.AlertTriangle,{size:18,strokeWidth:2.25,className:"ge-alerta-icone","aria-hidden":!0}),(0,r.jsxs)("div",{className:"ge-alerta-corpo",children:[(0,r.jsx)("p",{className:"ge-alerta-titulo",children:"Se você está com um sintoma agora"}),(0,r.jsx)("p",{className:"ge-alerta-texto",children:"Não espere esta tela voltar. O 192 é gratuito, atende 24 horas, e uma ligação não depende da internet."}),(0,r.jsxs)("a",{className:"ge-fone",href:"tel:192",children:[(0,r.jsx)(a.Phone,{size:18,strokeWidth:1.75,"aria-hidden":!0}),"Ligar 192 — SAMU"]}),(0,r.jsx)("p",{className:"ge-nota",children:"A lista completa de sinais de alerta fica no botão vermelho, em qualquer tela do aplicativo."})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("a",{className:"ge-botao ge-quieto",href:"/cristiane-ferreira-app/",children:"Ir para o início"}),(0,r.jsxs)("p",{className:"ge-nota",children:["Se continuar acontecendo, avise a equipe da Dra. Cristiane e diga o que você estava fazendo.",e.digest?` Refer\xeancia t\xe9cnica: ${e.digest}.`:""]})]})]})]})})}])}]);