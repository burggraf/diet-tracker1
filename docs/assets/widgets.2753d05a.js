import{S as B,i as G,s as H,e as _,a as v,b as g,d as S,f as u,l as z,n as D,h as w,B as I,D as M,t as F,z as L,x as O,w as T}from"./index.ee229192.js";import{G as $}from"./index.6934bd1b.js";import{S as j}from"./supabase.data.service.7c4079a0.js";import{g as A}from"./index.d3abd61c.js";import"./BehaviorSubject.b97a6d18.js";import"./network.service.bd7c5cdb.js";function N(l,e,n){const t=l.slice();return t[7]=e[n],t}function E(l){let e;return{c(){e=_("ion-item"),e.textContent="No widgets found"},m(n,t){S(n,e,t)},p:D,d(n){n&&w(e)}}}function J(l){let e,n=l[0],t=[];for(let i=0;i<n.length;i+=1)t[i]=q(N(l,n,i));return{c(){for(let i=0;i<t.length;i+=1)t[i].c();e=O()},m(i,s){for(let o=0;o<t.length;o+=1)t[o].m(i,s);S(i,e,s)},p(i,s){if(s&3){n=i[0];let o;for(o=0;o<n.length;o+=1){const c=N(i,n,o);t[o]?t[o].p(c,s):(t[o]=q(c),t[o].c(),t[o].m(e.parentNode,e))}for(;o<t.length;o+=1)t[o].d(1);t.length=n.length}},d(i){T(t,i),i&&w(e)}}}function q(l){let e,n=l[7].name+"",t,i,s,o=l[7].price.toFixed(2)+"",c,p,m,a;function h(){return l[3](l[7])}return{c(){e=_("ion-item"),t=F(n),i=v(),s=_("ion-note"),c=F(o),p=v(),g(s,"slot","end")},m(d,b){S(d,e,b),u(e,t),u(e,i),u(e,s),u(s,c),u(e,p),m||(a=z(e,"click",h),m=!0)},p(d,b){l=d,b&1&&n!==(n=l[7].name+"")&&L(t,n),b&1&&o!==(o=l[7].price.toFixed(2)+"")&&L(c,o)},d(d){d&&w(e),m=!1,a()}}}function K(l){let e,n,t,i,s,o,c,p,m,a,h,d,b,C;function W(r,k){return r[0]&&r[0].length?J:E}let y=W(l),f=y(l);return{c(){e=_("ion-header"),n=_("ion-toolbar"),t=_("ion-buttons"),t.innerHTML="<ion-menu-button></ion-menu-button>",i=v(),s=_("ion-title"),s.textContent="Widgets List",o=v(),c=_("ion-buttons"),p=_("ion-button"),m=_("ion-icon"),a=v(),h=_("ion-content"),d=_("ion-list"),f.c(),g(t,"slot","start"),g(m,"slot","icon-only"),g(m,"icon",$),g(c,"slot","end"),g(e,"translucent","true"),g(h,"class","ion-padding")},m(r,k){S(r,e,k),u(e,n),u(n,t),u(n,i),u(n,s),u(n,o),u(n,c),u(c,p),u(p,m),S(r,a,k),S(r,h,k),u(h,d),f.m(d,null),b||(C=z(p,"click",l[2]),b=!0)},p(r,[k]){y===(y=W(r))&&f?f.p(r,k):(f.d(1),f=y(r),f&&(f.c(),f.m(d,null)))},i:D,o:D,d(r){r&&w(e),r&&w(a),r&&w(h),f.d(),b=!1,C()}}}function P(l,e,n){let t;I(l,A,a=>n(4,t=a));const i=j.getInstance();let s;const o=i.getDataSubscription("widgets").subscribe(a=>{n(0,s=a)});M(()=>{o.unsubscribe()});const c=a=>{t("/widget/[id]",{id:a})};return[s,c,()=>c("new"),a=>c(a.id)]}class Z extends B{constructor(e){super(),G(this,e,P,K,H,{})}}export{Z as default};
