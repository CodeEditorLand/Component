import{createComponent as d,Suspense as F}from"./solid.-melTDdq.js";import{h as I,r as L}from"./web.BLs1Cz6t.js";var S=e=>(t,r,n,{client:o})=>{if(!e.hasAttribute("ssr"))return;const s="only"!==o,a=s?I:L;let l,i={};if(Object.keys(n).length>0){if("only"!==o){const t=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,(t=>t===e?NodeFilter.FILTER_SKIP:"ASTRO-SLOT"===t.nodeName?NodeFilter.FILTER_ACCEPT:"ASTRO-ISLAND"===t.nodeName?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_SKIP));for(;l=t.nextNode();)i[l.getAttribute("name")||"default"]=l}for(const[e,t]of Object.entries(n))i[e]||(i[e]=document.createElement("astro-slot"),"default"!==e&&i[e].setAttribute("name",e),i[e].innerHTML=t)}const{default:c,...u}=i,m=e.dataset.solidRenderId,T=a((()=>{const e=()=>d(t,{...r,...u,children:c});return s?d(F,{get children(){return e()}}):e()}),e,{renderId:m});e.addEventListener("astro:unmount",(()=>T()),{once:!0})};export{S as default};