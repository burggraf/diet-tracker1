import{K as b,L as u,M as h,N as x}from"./index.fb11c5a4.js";const g=(e,r)=>{const n=[e,...e.ancestors],s=[r,...r.ancestors];return n.find(t=>s.includes(t))},v=(e,r)=>{const n=[e,...e.ancestors],s=[r,...r.ancestors],t=g(e,r),o=n.indexOf(t),c=o?"../".repeat(o):"",i=s.indexOf(t),l=s.slice(0,i).reverse().map(a=>a.name).join("/");return c+l},w={subscribe:(e,r)=>{const{router:n}=u;return b(U,s=>(t,o,c)=>{const i=s(t,o);n.url.push(i)}).subscribe(e,r)}},U={subscribe:(e,r)=>{const{router:n}=u,s=u.fragment.node;return b(n.activeRoute,t=>{const o=n.rootNode.traverse(s.path);return(c,i={})=>{const l=c.startsWith("/")?n.rootNode.path:"",a=o.traverse(l+c);if(!a){console.error("could not find destination node",c);return}const p=g(a,n.rootNode),d="/"+v(p,a),f={...k(a,t),...i},m=h(d,f,t);return n.getExternalUrl(m)}}).subscribe(e,r)}},k=(e,r)=>{const s=[e,...e.ancestors].reverse().map(t=>{var o;return(o=r.allFragments.find(c=>c.node===t||c.node.path===t.path))==null?void 0:o.params});return Object.assign({},...s)},O={subscribe:(e,r)=>b(u.router.params,n=>n).subscribe(e,r)},R={subscribe:(e,r)=>b(u.router.activeRoute,N).subscribe(e,r)},N=e=>A(e.url,e.params),A=(e,r={})=>{const n=s=>s.replace(/(\/index)?\/*$/,"");return e=e.replace(/[?#].+/,""),e=n(e),(s,t={},o={})=>{const{recursive:c}={recursive:!0,...o};for(const a of Object.keys(t))if(r[a]!==t[a])return!1;s=x(s,{...r,...t},a=>"",!0),s=n(s);const i=c?"(/|$)":"/?$";return new RegExp(`^${s}${i}`).test(e)}},$={subscribe:e=>{const r=[];return e(s=>{const t=u.router.beforeUrlChange(s);return r.push(t),t}),()=>r.map(s=>s())}};export{$ as b,w as g,R as i,O as p};