import{S as B,i as H,s as L,e as b,a as w,b as g,d as k,f as r,l as A,n as I,h as T,B as O,y as j,D as E,t as C,A as F,z as M,x as G,w as J}from"./index.ec099d1c.js";import{x as K}from"./index.8307df69.js";import{U as P,S as Q}from"./supabase.data.service.e20451c4.js";import{g as R}from"./index.80b5464c.js";import"./BehaviorSubject.e75d365c.js";import"./network.service.0c8d3f51.js";import"./overlays-ab6211c7.bef31e9b.js";function U(t,e,n){const o=t.slice();return o[9]=e[n],o}function V(t){let e;return{c(){e=b("ion-item"),e.textContent="No days found"},m(n,o){k(n,e,o)},p:I,d(n){n&&T(e)}}}function W(t){let e,n=t[1],o=[];for(let l=0;l<n.length;l+=1)o[l]=z(U(t,n,l));return{c(){for(let l=0;l<o.length;l+=1)o[l].c();e=G()},m(l,a){for(let i=0;i<o.length;i+=1)o[i].m(l,a);k(l,e,a)},p(l,a){if(a&15){n=l[1];let i;for(i=0;i<n.length;i+=1){const s=U(l,n,i);o[i]?o[i].p(s,a):(o[i]=z(s),o[i].c(),o[i].m(e.parentNode,e))}for(;i<o.length;i+=1)o[i].d(1);o.length=n.length}},d(l){J(o,l),l&&T(e)}}}function q(t){var i;let e,n,o=t[0].daily_budget-(((i=t[9])==null?void 0:i.food_total)||0).toFixed(2)+"",l,a;return{c(){e=b("b"),n=C("["),l=C(o),a=C("]\xA0\xA0")},m(s,u){k(s,e,u),r(e,n),r(e,l),r(e,a)},p(s,u){var f;u&3&&o!==(o=s[0].daily_budget-(((f=s[9])==null?void 0:f.food_total)||0).toFixed(2)+"")&&M(l,o)},d(s){s&&T(e)}}}function z(t){var p;let e,n=t[9].date+"",o,l,a,i=t[2].getToday()===t[9].date&&t[0].daily_budget,s,u=(((p=t[9])==null?void 0:p.food_total)||0).toFixed(2)+"",f,y,h,d,v,D,c=i&&q(t);function S(){return t[5](t[9])}return{c(){e=b("ion-item"),o=C(n),l=w(),a=b("ion-note"),c&&c.c(),s=w(),f=C(u),h=w(),g(a,"slot","end"),g(a,"class",y=F(t[2].getToday()===t[9].date?"today":"notToday")+" svelte-107flm"),g(e,"class",d=F(t[2].getToday()===t[9].date?"today":"notToday")+" svelte-107flm")},m(_,m){k(_,e,m),r(e,o),r(e,l),r(e,a),c&&c.m(a,null),r(a,s),r(a,f),r(e,h),v||(D=A(e,"click",S),v=!0)},p(_,m){var N;t=_,m&2&&n!==(n=t[9].date+"")&&M(o,n),m&3&&(i=t[2].getToday()===t[9].date&&t[0].daily_budget),i?c?c.p(t,m):(c=q(t),c.c(),c.m(a,s)):c&&(c.d(1),c=null),m&2&&u!==(u=(((N=t[9])==null?void 0:N.food_total)||0).toFixed(2)+"")&&M(f,u),m&2&&y!==(y=F(t[2].getToday()===t[9].date?"today":"notToday")+" svelte-107flm")&&g(a,"class",y),m&2&&d!==(d=F(t[2].getToday()===t[9].date?"today":"notToday")+" svelte-107flm")&&g(e,"class",d)},d(_){_&&T(e),c&&c.d(),v=!1,D()}}}function X(t){let e,n,o,l,a,i,s,u,f,y,h,d,v,D;function c(_,m){return _[1]&&_[1].length?W:V}let S=c(t),p=S(t);return{c(){e=b("ion-header"),n=b("ion-toolbar"),o=b("ion-buttons"),o.innerHTML="<ion-menu-button></ion-menu-button>",l=w(),a=b("ion-title"),a.textContent="Calendar",i=w(),s=b("ion-buttons"),u=b("ion-button"),f=b("ion-icon"),y=w(),h=b("ion-content"),d=b("ion-list"),p.c(),g(o,"slot","start"),g(f,"slot","icon-only"),g(f,"icon",K),g(s,"slot","end"),g(e,"translucent","true"),g(h,"class","ion-padding")},m(_,m){k(_,e,m),r(e,n),r(n,o),r(n,l),r(n,a),r(n,i),r(n,s),r(s,u),r(u,f),k(_,y,m),k(_,h,m),r(h,d),p.m(d,null),v||(D=A(u,"click",t[4]),v=!0)},p(_,[m]){S===(S=c(_))&&p?p.p(_,m):(p.d(1),p=S(_),p&&(p.c(),p.m(d,null)))},i:I,o:I,d(_){_&&T(e),_&&T(y),_&&T(h),p.d(),v=!1,D()}}}function Y(t,e,n){let o;O(t,R,d=>n(6,o=d));const l=P.getInstance(),a=Q.getInstance();let i={daily_budget:0,target_weight:0},s;const u=a.getDataSubscription("days").subscribe(d=>{n(1,s=d),console.log("*** days",s)});j(async()=>{const{data:d,error:v}=await a.getSettings();console.log("*** settings",d,v),n(0,i=d.settings||{})}),E(()=>{u.unsubscribe()});const f=d=>{o("/day/[id]",{id:d})};return[i,s,l,f,()=>f("new"),d=>f(d.id)]}class lt extends B{constructor(e){super(),H(this,e,Y,X,L,{})}}export{lt as default};