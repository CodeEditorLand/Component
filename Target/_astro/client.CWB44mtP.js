import{$ as w,a as K,b as q,g as I,d as J,h as V,r as X,c as C,S as Y}from"./web.DNswYvNQ.js";const L=Symbol("store-raw"),P=Symbol("store-node"),O=Symbol("store-has"),M=Symbol("store-self");function W(e){let t=e[w];if(!t&&(Object.defineProperty(e,w,{value:t=new Proxy(e,Q)}),!Array.isArray(e))){const r=Object.keys(e),n=Object.getOwnPropertyDescriptors(e);for(let o=0,l=r.length;o<l;o++){const l=r[o];n[l].get&&Object.defineProperty(e,l,{enumerable:n[l].enumerable,get:n[l].get.bind(t)})}}return t}function y(e){let t;return null!=e&&"object"==typeof e&&(e[w]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function $(e,t=new Set){let r,n,o,l;if(r=null!=e&&e[L])return r;if(!y(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let r=0,l=e.length;r<l;r++)o=e[r],(n=$(o,t))!==o&&(e[r]=n)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const r=Object.keys(e),i=Object.getOwnPropertyDescriptors(e);for(let s=0,c=r.length;s<c;s++)l=r[s],!i[l].get&&(o=e[l],(n=$(o,t))!==o&&(e[l]=n))}return e}function R(e,t){let r=e[t];return r||Object.defineProperty(e,t,{value:r=Object.create(null)}),r}function N(e,t,r){if(e[t])return e[t];const[n,o]=J(r,{equals:!1,internal:!0});return n.$=o,e[t]=n}function B(e,t){const r=Reflect.getOwnPropertyDescriptor(e,t);return!r||r.get||!r.configurable||t===w||t===P||(delete r.value,delete r.writable,r.get=()=>e[w][t]),r}function H(e){I()&&N(R(e,P),M)()}function G(e){return H(e),Reflect.ownKeys(e)}const Q={get(e,t,r){if(t===L)return e;if(t===w)return r;if(t===K)return H(e),r;const n=R(e,P),o=n[t];let l=o?o():e[t];if(t===P||t===O||"__proto__"===t)return l;if(!o){const r=Object.getOwnPropertyDescriptor(e,t);I()&&("function"!=typeof l||e.hasOwnProperty(t))&&(!r||!r.get)&&(l=N(n,t,l)())}return y(l)?W(l):l},has:(e,t)=>t===L||t===w||t===K||t===P||t===O||"__proto__"===t||(I()&&N(R(e,O),t)(),t in e),set:()=>!0,deleteProperty:()=>!0,ownKeys:G,getOwnPropertyDescriptor:B};function A(e,t,r,n=!1){if(!n&&e[t]===r)return;const o=e[t],l=e.length;void 0===r?(delete e[t],e[O]&&e[O][t]&&void 0!==o&&e[O][t].$()):(e[t]=r,e[O]&&e[O][t]&&void 0===o&&e[O][t].$());let i,s=R(e,P);if((i=N(s,t,o))&&i.$((()=>r)),Array.isArray(e)&&e.length!==l){for(let t=e.length;t<l;t++)(i=s[t])&&i.$();(i=N(s,"length",l))&&i.$(e.length)}(i=s[M])&&i.$()}function z(e,t){const r=Object.keys(t);for(let n=0;n<r.length;n+=1){const o=r[n];A(e,o,t[o])}}function U(e,t){if("function"==typeof t&&(t=t(e)),t=$(t),Array.isArray(t)){if(e===t)return;let r=0,n=t.length;for(;r<n;r++){const n=t[r];e[r]!==n&&A(e,r,n)}A(e,"length",n)}else z(e,t)}function T(e,t,r=[]){let n,o=e;if(t.length>1){n=t.shift();const l=typeof n,i=Array.isArray(e);if(Array.isArray(n)){for(let o=0;o<n.length;o++)T(e,[n[o]].concat(t),r);return}if(i&&"function"===l){for(let o=0;o<e.length;o++)n(e[o],o)&&T(e,[o].concat(t),r);return}if(i&&"object"===l){const{from:o=0,to:l=e.length-1,by:i=1}=n;for(let n=o;n<=l;n+=i)T(e,[n].concat(t),r);return}if(t.length>1)return void T(e[n],t,[n].concat(r));o=e[n],r=[n].concat(r)}let l=t[0];"function"==typeof l&&(l=l(o,r),l===o)||void 0===n&&null==l||(l=$(l),void 0===n||y(o)&&y(l)&&!Array.isArray(l)?z(o,l):A(e,n,l))}function Z(...[e,t]){const r=$(e||{}),n=Array.isArray(r);return[W(r),function(...e){q((()=>{n&&1===e.length?U(r,e[0]):T(r,e)}))}]}const D=Symbol("store-root");function j(e,t,r,n,o){const l=t[r];if(e===l)return;const i=Array.isArray(e);if(r!==D&&(!y(e)||!y(l)||i!==Array.isArray(l)||o&&e[o]!==l[o]))return void A(t,r,e);if(i){if(e.length&&l.length&&(!n||o&&e[0]&&null!=e[0][o])){let t,r,i,s,c,f,a,u;for(i=0,s=Math.min(l.length,e.length);i<s&&(l[i]===e[i]||o&&l[i]&&e[i]&&l[i][o]===e[i][o]);i++)j(e[i],l,i,n,o);const y=new Array(e.length),g=new Map;for(s=l.length-1,c=e.length-1;s>=i&&c>=i&&(l[s]===e[c]||o&&l[i]&&e[i]&&l[s][o]===e[c][o]);s--,c--)y[c]=l[s];if(i>c||i>s){for(r=i;r<=c;r++)A(l,r,e[r]);for(;r<e.length;r++)A(l,r,y[r]),j(e[r],l,r,n,o);return void(l.length>e.length&&A(l,"length",e.length))}for(a=new Array(c+1),r=c;r>=i;r--)f=e[r],u=o&&f?f[o]:f,t=g.get(u),a[r]=void 0===t?-1:t,g.set(u,r);for(t=i;t<=s;t++)f=l[t],u=o&&f?f[o]:f,r=g.get(u),void 0!==r&&-1!==r&&(y[r]=l[t],r=a[r],g.set(u,r));for(r=i;r<e.length;r++)r in y?(A(l,r,y[r]),j(e[r],l,r,n,o)):A(l,r,e[r])}else for(let t=0,r=e.length;t<r;t++)j(e[t],l,t,n,o);return void(l.length>e.length&&A(l,"length",e.length))}const s=Object.keys(e);for(let t=0,r=s.length;t<r;t++)j(e[s[t]],l,s[t],n,o);const c=Object.keys(l);for(let t=0,r=c.length;t<r;t++)void 0===e[c[t]]&&A(l,c[t],void 0)}function k(e,t={}){const{merge:r,key:n="id"}=t,o=$(e);return e=>{if(!y(e)||!y(o))return o;const t=j(o,{[D]:e},D,r,n);return void 0===t?e:t}}const F=new WeakMap;var x=e=>(t,r,n,{client:o})=>{if(!e.hasAttribute("ssr"))return;const l="only"!==o,i=l?V:X;let s,c={};if(Object.keys(n).length>0){if("only"!==o){const t=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,(t=>t===e?NodeFilter.FILTER_SKIP:"ASTRO-SLOT"===t.nodeName?NodeFilter.FILTER_ACCEPT:"ASTRO-ISLAND"===t.nodeName?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_SKIP));for(;s=t.nextNode();)c[s.getAttribute("name")||"default"]=s}for(const[e,t]of Object.entries(n))c[e]||(c[e]=document.createElement("astro-slot"),"default"!==e&&c[e].setAttribute("name",e),c[e].innerHTML=t)}const{default:f,...a}=c,u=e.dataset.solidRenderId;if(F.has(e))F.get(e)(k({...r,...a,children:f}));else{const[n,o]=Z({...r,...a,children:f});F.set(e,o);const s=i((()=>{const e=()=>C(t,n);return l?C(Y,{get children(){return e()}}):e()}),e,{renderId:u});e.addEventListener("astro:unmount",(()=>s()),{once:!0})}};export{x as default};