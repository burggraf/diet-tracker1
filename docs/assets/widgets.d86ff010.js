import{S as z,i as I,s as M,b as _,c as y,d as g,a as S,f as u,l as q,H as D,g as w,w as O,z as T,t as F,o as H,e as $,u as j}from"./index.df49d984.js";import{y as A}from"./index.6a8fe8ef.js";import{S as B}from"./supabase.data.service.217d2631.js";import{g as E}from"./index.7300f0d0.js";import"./BehaviorSubject.06578408.js";import"./loadingMessage.55947c0d.js";function L(l,e,n){const t=l.slice();return t[7]=e[n],t}function G(l){let e;return{c(){e=_("ion-item"),e.textContent="No widgets found"},m(n,t){S(n,e,t)},p:D,d(n){n&&w(e)}}}function J(l){let e,n=l[0],t=[];for(let i=0;i<n.length;i+=1)t[i]=N(L(l,n,i));return{c(){for(let i=0;i<t.length;i+=1)t[i].c();e=$()},m(i,s){for(let o=0;o<t.length;o+=1)t[o].m(i,s);S(i,e,s)},p(i,s){if(s&3){n=i[0];let o;for(o=0;o<n.length;o+=1){const c=L(i,n,o);t[o]?t[o].p(c,s):(t[o]=N(c),t[o].c(),t[o].m(e.parentNode,e))}for(;o<t.length;o+=1)t[o].d(1);t.length=n.length}},d(i){j(t,i),i&&w(e)}}}function N(l){let e,n=l[7].name+"",t,i,s,o=l[7].price.toFixed(2)+"",c,p,m,a;function h(){return l[3](l[7])}return{c(){e=_("ion-item"),t=F(n),i=y(),s=_("ion-note"),c=F(o),p=y(),g(s,"slot","end")},m(d,b){S(d,e,b),u(e,t),u(e,i),u(e,s),u(s,c),u(e,p),m||(a=q(e,"click",h),m=!0)},p(d,b){l=d,b&1&&n!==(n=l[7].name+"")&&H(t,n),b&1&&o!==(o=l[7].price.toFixed(2)+"")&&H(c,o)},d(d){d&&w(e),m=!1,a()}}}function K(l){let e,n,t,i,s,o,c,p,m,a,h,d,b,C;function W(r,k){return r[0]&&r[0].length?J:G}let v=W(l),f=v(l);return{c(){e=_("ion-header"),n=_("ion-toolbar"),t=_("ion-buttons"),t.innerHTML="<ion-menu-button></ion-menu-button>",i=y(),s=_("ion-title"),s.textContent="Widgets List",o=y(),c=_("ion-buttons"),p=_("ion-button"),m=_("ion-icon"),a=y(),h=_("ion-content"),d=_("ion-list"),f.c(),g(t,"slot","start"),g(m,"slot","icon-only"),g(m,"icon",A),g(c,"slot","end"),g(e,"translucent","true"),g(h,"class","ion-padding")},m(r,k){S(r,e,k),u(e,n),u(n,t),u(n,i),u(n,s),u(n,o),u(n,c),u(c,p),u(p,m),S(r,a,k),S(r,h,k),u(h,d),f.m(d,null),b||(C=q(p,"click",l[2]),b=!0)},p(r,[k]){v===(v=W(r))&&f?f.p(r,k):(f.d(1),f=v(r),f&&(f.c(),f.m(d,null)))},i:D,o:D,d(r){r&&w(e),r&&w(a),r&&w(h),f.d(),b=!1,C()}}}function P(l,e,n){let t;O(l,E,a=>n(4,t=a));const i=B.getInstance();let s;const o=i.getDataSubscription("widgets").subscribe(a=>{n(0,s=a)});T(()=>{o.unsubscribe()});const c=a=>{t("/widget/[id]",{id:a})};return[s,c,()=>c("new"),a=>c(a.id)]}class Z extends z{constructor(e){super(),I(this,e,P,K,M,{})}}export{Z as default};
