import{S as B,i as E,s as H,e as _,a as v,b as g,d as S,f as u,l as z,n as D,h as w,B as I,D as M,t as F,z as L,x as O,w as T}from"./index.441583f4.js";import{E as $}from"./index.b561a64b.js";import{S as j}from"./supabase.data.service.d50958b0.js";import{g as A}from"./index.bec90ede.js";import"./BehaviorSubject.f6cb1d58.js";import"./network.service.2b5501fd.js";import"./overlays-ab6211c7.f3836102.js";function N(l,e,n){const t=l.slice();return t[7]=e[n],t}function G(l){let e;return{c(){e=_("ion-item"),e.textContent="No widgets found"},m(n,t){S(n,e,t)},p:D,d(n){n&&w(e)}}}function J(l){let e,n=l[0],t=[];for(let i=0;i<n.length;i+=1)t[i]=q(N(l,n,i));return{c(){for(let i=0;i<t.length;i+=1)t[i].c();e=O()},m(i,s){for(let o=0;o<t.length;o+=1)t[o].m(i,s);S(i,e,s)},p(i,s){if(s&3){n=i[0];let o;for(o=0;o<n.length;o+=1){const c=N(i,n,o);t[o]?t[o].p(c,s):(t[o]=q(c),t[o].c(),t[o].m(e.parentNode,e))}for(;o<t.length;o+=1)t[o].d(1);t.length=n.length}},d(i){T(t,i),i&&w(e)}}}function q(l){let e,n=l[7].name+"",t,i,s,o=l[7].price.toFixed(2)+"",c,p,m,r;function h(){return l[3](l[7])}return{c(){e=_("ion-item"),t=F(n),i=v(),s=_("ion-note"),c=F(o),p=v(),g(s,"slot","end")},m(d,b){S(d,e,b),u(e,t),u(e,i),u(e,s),u(s,c),u(e,p),m||(r=z(e,"click",h),m=!0)},p(d,b){l=d,b&1&&n!==(n=l[7].name+"")&&L(t,n),b&1&&o!==(o=l[7].price.toFixed(2)+"")&&L(c,o)},d(d){d&&w(e),m=!1,r()}}}function K(l){let e,n,t,i,s,o,c,p,m,r,h,d,b,C;function W(a,k){return a[0]&&a[0].length?J:G}let y=W(l),f=y(l);return{c(){e=_("ion-header"),n=_("ion-toolbar"),t=_("ion-buttons"),t.innerHTML="<ion-menu-button></ion-menu-button>",i=v(),s=_("ion-title"),s.textContent="Widgets List",o=v(),c=_("ion-buttons"),p=_("ion-button"),m=_("ion-icon"),r=v(),h=_("ion-content"),d=_("ion-list"),f.c(),g(t,"slot","start"),g(m,"slot","icon-only"),g(m,"icon",$),g(c,"slot","end"),g(e,"translucent","true"),g(h,"class","ion-padding")},m(a,k){S(a,e,k),u(e,n),u(n,t),u(n,i),u(n,s),u(n,o),u(n,c),u(c,p),u(p,m),S(a,r,k),S(a,h,k),u(h,d),f.m(d,null),b||(C=z(p,"click",l[2]),b=!0)},p(a,[k]){y===(y=W(a))&&f?f.p(a,k):(f.d(1),f=y(a),f&&(f.c(),f.m(d,null)))},i:D,o:D,d(a){a&&w(e),a&&w(r),a&&w(h),f.d(),b=!1,C()}}}function P(l,e,n){let t;I(l,A,r=>n(4,t=r));const i=j.getInstance();let s;const o=i.getDataSubscription("widgets").subscribe(r=>{n(0,s=r)});M(()=>{o.unsubscribe()});const c=r=>{t("/widget/[id]",{id:r})};return[s,c,()=>c("new"),r=>c(r.id)]}class x extends B{constructor(e){super(),E(this,e,P,K,H,{})}}export{x as default};
