import{S as z,i as A,s as B,e as u,a as T,b as m,d as D,f as _,l as q,n as C,h as w,B as G,D as H,t as I,A as O,z as F,x as M,w as $}from"./index.c4928765.js";import{G as j}from"./index.27d24d2b.js";import{S as E}from"./supabase.data.service.17629f50.js";import{g as J}from"./index.c62049ee.js";import"./BehaviorSubject.0a9b7b09.js";import"./network.service.24d01c3c.js";function L(i,t,n){const e=i.slice();return e[7]=t[n],e}function K(i){let t;return{c(){t=u("ion-item"),t.textContent="No days found"},m(n,e){D(n,t,e)},p:C,d(n){n&&w(t)}}}function P(i){let t,n=i[0],e=[];for(let l=0;l<n.length;l+=1)e[l]=N(L(i,n,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=M()},m(l,s){for(let o=0;o<e.length;o+=1)e[o].m(l,s);D(l,t,s)},p(l,s){if(s&3){n=l[0];let o;for(o=0;o<n.length;o+=1){const a=L(l,n,o);e[o]?e[o].p(a,s):(e[o]=N(a),e[o].c(),e[o].m(t.parentNode,t))}for(;o<e.length;o+=1)e[o].d(1);e.length=n.length}},d(l){$(e,l),l&&w(t)}}}function N(i){var v;let t,n=i[7].date+"",e,l,s,o=(((v=i[7])==null?void 0:v.food_total)||0).toFixed(2)+"",a,p,d,c,b;function k(){return i[3](i[7])}return{c(){t=u("ion-item"),e=I(n),l=T(),s=u("ion-note"),a=I(o),p=T(),m(s,"slot","end"),m(t,"class",d=O(new Date().toISOString().substring(0,10)===i[7].date?"today":"notToday")+" svelte-107flm")},m(h,y){D(h,t,y),_(t,e),_(t,l),_(t,s),_(s,a),_(t,p),c||(b=q(t,"click",k),c=!0)},p(h,y){var g;i=h,y&1&&n!==(n=i[7].date+"")&&F(e,n),y&1&&o!==(o=(((g=i[7])==null?void 0:g.food_total)||0).toFixed(2)+"")&&F(a,o),y&1&&d!==(d=O(new Date().toISOString().substring(0,10)===i[7].date?"today":"notToday")+" svelte-107flm")&&m(t,"class",d)},d(h){h&&w(t),c=!1,b()}}}function Q(i){let t,n,e,l,s,o,a,p,d,c,b,k,v,h;function y(r,S){return r[0]&&r[0].length?P:K}let g=y(i),f=g(i);return{c(){t=u("ion-header"),n=u("ion-toolbar"),e=u("ion-buttons"),e.innerHTML="<ion-menu-button></ion-menu-button>",l=T(),s=u("ion-title"),s.textContent="days List",o=T(),a=u("ion-buttons"),p=u("ion-button"),d=u("ion-icon"),c=T(),b=u("ion-content"),k=u("ion-list"),f.c(),m(e,"slot","start"),m(d,"slot","icon-only"),m(d,"icon",j),m(a,"slot","end"),m(t,"translucent","true"),m(b,"class","ion-padding")},m(r,S){D(r,t,S),_(t,n),_(n,e),_(n,l),_(n,s),_(n,o),_(n,a),_(a,p),_(p,d),D(r,c,S),D(r,b,S),_(b,k),f.m(k,null),v||(h=q(p,"click",i[2]),v=!0)},p(r,[S]){g===(g=y(r))&&f?f.p(r,S):(f.d(1),f=g(r),f&&(f.c(),f.m(k,null)))},i:C,o:C,d(r){r&&w(t),r&&w(c),r&&w(b),f.d(),v=!1,h()}}}function R(i,t,n){let e;G(i,J,c=>n(4,e=c));const l=E.getInstance();let s;const o=l.getDataSubscription("days").subscribe(c=>{n(0,s=c),console.log("*** days",s)});H(()=>{o.unsubscribe()});const a=c=>{e("/day/[id]",{id:c})};return[s,a,()=>a("new"),c=>a(c.id)]}class x extends z{constructor(t){super(),A(this,t,R,Q,B,{})}}export{x as default};
