import{S as B,i as H,s as j,e as p,a as D,b as g,d as v,f as r,l as A,n as z,h as S,B as E,y as G,D as J,t as O,A as C,z as I,x as K,w as P}from"./index.3d16749a.js";import{F as Q}from"./index.b72425f7.js";import{S as R}from"./supabase.data.service.c819a408.js";import{g as U}from"./index.13f48f12.js";import"./BehaviorSubject.0b3a8d03.js";import"./network.service.98057fa4.js";import"./overlays-ab6211c7.ea2658e9.js";function M(e,t,n){const o=e.slice();return o[8]=t[n],o}function V(e){let t;return{c(){t=p("ion-item"),t.textContent="No days found"},m(n,o){v(n,t,o)},p:z,d(n){n&&S(t)}}}function W(e){let t,n=e[1],o=[];for(let i=0;i<n.length;i+=1)o[i]=q(M(e,n,i));return{c(){for(let i=0;i<o.length;i+=1)o[i].c();t=K()},m(i,s){for(let l=0;l<o.length;l+=1)o[l].m(i,s);v(i,t,s)},p(i,s){if(s&7){n=i[1];let l;for(l=0;l<n.length;l+=1){const d=M(i,n,l);o[l]?o[l].p(d,s):(o[l]=q(d),o[l].c(),o[l].m(t.parentNode,t))}for(;l<o.length;l+=1)o[l].d(1);o.length=n.length}},d(i){P(o,i),i&&S(t)}}}function N(e){var s;let t,n=e[0].daily_budget-(((s=e[8])==null?void 0:s.food_total)||0).toFixed(2)+"",o,i;return{c(){t=p("b"),o=O(n),i=O(" left\xA0\xA0")},m(l,d){v(l,t,d),r(t,o),r(t,i)},p(l,d){var f;d&3&&n!==(n=l[0].daily_budget-(((f=l[8])==null?void 0:f.food_total)||0).toFixed(2)+"")&&I(o,n)},d(l){l&&S(t)}}}function q(e){var m;let t,n=e[8].date+"",o,i,s,l=w()===e[8].date&&e[0].daily_budget,d,f=(((m=e[8])==null?void 0:m.food_total)||0).toFixed(2)+"",y,h,_,b,k,F,c=l&&N(e);function T(){return e[4](e[8])}return{c(){t=p("ion-item"),o=O(n),i=D(),s=p("ion-note"),c&&c.c(),d=D(),y=O(f),_=D(),g(s,"slot","end"),g(s,"class",h=C(w()===e[8].date?"today":"notToday")+" svelte-107flm"),g(t,"class",b=C(w()===e[8].date?"today":"notToday")+" svelte-107flm")},m(a,u){v(a,t,u),r(t,o),r(t,i),r(t,s),c&&c.m(s,null),r(s,d),r(s,y),r(t,_),k||(F=A(t,"click",T),k=!0)},p(a,u){var L;e=a,u&2&&n!==(n=e[8].date+"")&&I(o,n),u&3&&(l=w()===e[8].date&&e[0].daily_budget),l?c?c.p(e,u):(c=N(e),c.c(),c.m(s,d)):c&&(c.d(1),c=null),u&2&&f!==(f=(((L=e[8])==null?void 0:L.food_total)||0).toFixed(2)+"")&&I(y,f),u&2&&h!==(h=C(w()===e[8].date?"today":"notToday")+" svelte-107flm")&&g(s,"class",h),u&2&&b!==(b=C(w()===e[8].date?"today":"notToday")+" svelte-107flm")&&g(t,"class",b)},d(a){a&&S(t),c&&c.d(),k=!1,F()}}}function X(e){let t,n,o,i,s,l,d,f,y,h,_,b,k,F;function c(a,u){return a[1]&&a[1].length?W:V}let T=c(e),m=T(e);return{c(){t=p("ion-header"),n=p("ion-toolbar"),o=p("ion-buttons"),o.innerHTML="<ion-menu-button></ion-menu-button>",i=D(),s=p("ion-title"),s.textContent="days List",l=D(),d=p("ion-buttons"),f=p("ion-button"),y=p("ion-icon"),h=D(),_=p("ion-content"),b=p("ion-list"),m.c(),g(o,"slot","start"),g(y,"slot","icon-only"),g(y,"icon",Q),g(d,"slot","end"),g(t,"translucent","true"),g(_,"class","ion-padding")},m(a,u){v(a,t,u),r(t,n),r(n,o),r(n,i),r(n,s),r(n,l),r(n,d),r(d,f),r(f,y),v(a,h,u),v(a,_,u),r(_,b),m.m(b,null),k||(F=A(f,"click",e[3]),k=!0)},p(a,[u]){T===(T=c(a))&&m?m.p(a,u):(m.d(1),m=T(a),m&&(m.c(),m.m(b,null)))},i:z,o:z,d(a){a&&S(t),a&&S(h),a&&S(_),m.d(),k=!1,F()}}}function w(){const e=new Date;return new Date(e.getTime()-e.getTimezoneOffset()*6e4).toISOString().split("T")[0]}function Y(e,t,n){let o;E(e,U,_=>n(5,o=_));const i=R.getInstance();let s={daily_budget:0,target_weight:0},l;const d=i.getDataSubscription("days").subscribe(_=>{n(1,l=_),console.log("*** days",l)});G(async()=>{const{data:_,error:b}=await i.getSettings();console.log("*** settings",_,b),n(0,s=_.settings||{})}),J(()=>{d.unsubscribe()});const f=_=>{o("/day/[id]",{id:_})};return[s,l,f,()=>f("new"),_=>f(_.id)]}class lt extends B{constructor(t){super(),H(this,t,Y,X,j,{})}}export{lt as default};
