const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/Action.gLNyLBEw.js","_astro/web.DQiSwLIO.js","_astro/Editor.B-ZWwLcH.js","_astro/editor.main.634sToj0.js","_astro/editor.CZRMF7bY.css","_astro/Editor.CqhmHK5S.css"])))=>i.map(i=>d[i]);
import{t as v,c as t,i as u,S as l,l as w}from"./web.DQiSwLIO.js";let y,x;let __tla=(async()=>{let S,P,h;S="modulepreload";P=function(i){return"/"+i};h={};y=function(f,o,p){let c=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),e=r?.nonce||r?.getAttribute("nonce");c=Promise.allSettled(o.map(n=>{if(n=P(n),n in h)return;h[n]=!0;const d=n.endsWith(".css"),_=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${_}`))return;const s=document.createElement("link");if(s.rel=d?"stylesheet":S,d||(s.as="script"),s.crossOrigin="",s.href=n,e&&s.setAttribute("nonce",e),document.head.appendChild(s),d)return new Promise((E,C)=>{s.addEventListener("load",E),s.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${n}`)))})}))}function a(r){const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=r,window.dispatchEvent(e),!e.defaultPrevented)throw r}return c.then(r=>{for(const e of r||[])e.status==="rejected"&&a(e.reason);return f().catch(a)})};var g=v("<div class=p-5>"),T=v('<div class="flex flex-col"><main class="flex grow justify-center"><div class="flex grow self-center"><div class=container><div class="grid min-h-screen content-start gap-7 py-9"><div class="mb-28 grid w-full grow grid-flow-row gap-12 lg:grid-flow-col lg:grid-cols-2 lg:gap-10"><div class="order-last lg:order-first">');const L=w(()=>y(()=>import("./Action.gLNyLBEw.js").then(async m=>{await m.__tla;return m}),__vite__mapDeps([0,1]))),m=w(()=>y(()=>import("./Editor.B-ZWwLcH.js"),__vite__mapDeps([2,1,3,4,5])));x=()=>t(l,{get children(){var i=T(),f=i.firstChild,o=f.firstChild,p=o.firstChild,c=p.firstChild,a=c.firstChild,r=a.firstChild;return u(r,t(l,{get children(){return t(L,{get children(){return[t(l,{get children(){var e=g();return u(e,t(m,{Type:"HTML"})),e}}),t(l,{get children(){var e=g();return u(e,t(m,{Type:"CSS"})),e}}),t(l,{get children(){var e=g();return u(e,t(m,{Type:"TypeScript"})),e}})]}})}})),i}})})();export{y as _,x as w,__tla};