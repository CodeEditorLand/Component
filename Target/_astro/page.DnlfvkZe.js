import{i as A}from"./index.B1fp56SV.js";function g(e){e=e||1;var t=[],n=0;function r(){n<e&&t.length>0&&(t.shift()(),n++)}return[function(e){t.push(e)>1||r()},function(){n--,r()}]}function y(e,t){const n=t?.timeout??50,r=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,n-(Date.now()-r))}})}),1)}const b=window.requestIdleCallback||y;var E=b;const l=["mouseenter","touchstart","focus"],v=new Set,d=new Set;function m({href:e}){try{const t=new URL(e);return window.location.origin===t.origin&&window.location.pathname!==t.pathname&&!v.has(e)}catch{}return!1}let p,c;function L(e){v.add(e.href),c.observe(e),l.map((t=>e.addEventListener(t,h,{passive:!0,once:!0})))}function k(e){c.unobserve(e),l.map((t=>e.removeEventListener(t,h)))}function h({target:e}){e instanceof HTMLAnchorElement&&w(e)}async function w(e){k(e);const{href:t}=e;try{const e=await fetch(t).then((e=>e.text()));p||=new DOMParser;const n=p.parseFromString(e,"text/html"),r=Array.from(n.querySelectorAll('link[rel="stylesheet"]'));await Promise.all(r.filter((e=>!d.has(e.href))).map((e=>(d.add(e.href),fetch(e.href)))))}catch{}}function q({selector:e='a[href][rel~="prefetch"]',throttle:t=1,intentSelector:n='a[href][rel~="prefetch-intent"]'}){if(!navigator.onLine)return Promise.reject(new Error("Cannot prefetch, no network connection"));if("connection"in navigator){const e=navigator.connection;if(e.saveData)return Promise.reject(new Error("Cannot prefetch, Save-Data is enabled"));if(/(2|3)g/.test(e.effectiveType))return Promise.reject(new Error("Cannot prefetch, network conditions are poor"))}const[r,o]=g(t);c=c||new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting&&e.target instanceof HTMLAnchorElement){const t=e.target.getAttribute("rel")||"";let i=!1;i=Array.isArray(n)?n.some((e=>t.includes(e))):t.includes(n),i||r((()=>w(e.target).finally(o)))}}))})),E((()=>{[...document.querySelectorAll(e)].filter(m).forEach(L);const t=Array.isArray(n)?n.join(","):n;[...document.querySelectorAll(t)].filter(m).forEach((e=>{l.map((t=>e.addEventListener(t,h,{passive:!0,once:!0})))}))}))}q({}),A();