const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/editor.main.634sToj0.js","_astro/Editor.BRg77Bhf.js","_astro/web.DQiSwLIO.js","_astro/editor.CZRMF7bY.css","_astro/Context.C9JqIeRh.js"])))=>i.map(i=>d[i]);
import{_ as a,__tla as __tla_0}from"./Editor.BRg77Bhf.js";import{t as n,c as o}from"./web.DQiSwLIO.js";let _,i,c,d;let __tla=Promise.all([(()=>{try{return __tla_0}catch{}})()]).then(async()=>{var u=n('<link rel=stylesheet media=print href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400&amp;display=swap">');self.MonacoEnvironment={createTrustedTypesPolicy:()=>{},getWorker:async(t,r)=>{switch(r){case"css":return new(await a(async()=>{const{default:e}=await import("./css.worker.DWNSap3W.js");return{default:e}},[])).default;case"html":return new(await a(async()=>{const{default:e}=await import("./html.worker.cBys97lV.js");return{default:e}},[])).default;case"typescript":return new(await a(async()=>{const{default:e}=await import("./ts.worker.Bj7dio1S.js");return{default:e}},[])).default;default:return new(await a(async()=>{const{default:e}=await import("./editor.worker.DLmMuguf.js");return{default:e}},[])).default}}};c=({children:t})=>o(i.Provider,{get value(){return i.defaultValue},get children(){return[(()=>{var r=u();return r.addEventListener("load",e=>{e.target.removeAttribute("onload"),e.target.removeAttribute("media")}),r})(),t]}});({editor:_,languages:d}=await a(()=>import("./editor.main.634sToj0.js").then(async m=>{await m.__tla;return m}).then(t=>t.a),__vite__mapDeps([0,1,2,3])));d.typescript.typescriptDefaults.setEagerModelSync(!0),_.defineTheme("Light",(await a(async()=>{const{default:t}=await import("./Active4D.DCMaBw04.js");return{default:t}},[])).default),_.defineTheme("Dark",(await a(async()=>{const{default:t}=await import("./Amoled.Ci6ZcdC2.js");return{default:t}},[])).default),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:t})=>_.setTheme(t?"Dark":"Light"));({_Function:i}=await a(()=>import("./Context.C9JqIeRh.js").then(async m=>{await m.__tla;return m}),__vite__mapDeps([4,1,2])))});export{_ as Monaco,i as _Function,c as default,d as languages,__tla};