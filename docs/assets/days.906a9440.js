import{S as B,i as H,s as j,e as p,a as D,b as y,d as v,f as c,l as A,n as z,h as S,B as E,y as G,D as J,t as C,A as O,z as I,x as K,w as P}from"./index.c7d6b215.js";import{F as Q}from"./index.b72425f7.js";import{S as R}from"./supabase.data.service.6a64c5bc.js";import{g as U}from"./index.35fbe3c4.js";import"./BehaviorSubject.61e7888d.js";import"./network.service.e574dd90.js";import"./overlays-ab6211c7.f96df8d6.js";function M(e,t,n){const o=e.slice();return o[8]=t[n],o}function V(e){let t;return{c(){t=p("ion-item"),t.textContent="No days found"},m(n,o){v(n,t,o)},p:z,d(n){n&&S(t)}}}function W(e){let t,n=e[1],o=[];for(let l=0;l<n.length;l+=1)o[l]=q(M(e,n,l));return{c(){for(let l=0;l<o.length;l+=1)o[l].c();t=K()},m(l,s){for(let i=0;i<o.length;i+=1)o[i].m(l,s);v(l,t,s)},p(l,s){if(s&7){n=l[1];let i;for(i=0;i<n.length;i+=1){const a=M(l,n,i);o[i]?o[i].p(a,s):(o[i]=q(a),o[i].c(),o[i].m(t.parentNode,t))}for(;i<o.length;i+=1)o[i].d(1);o.length=n.length}},d(l){P(o,l),l&&S(t)}}}function N(e){var i;let t,n,o=e[0].daily_budget-(((i=e[8])==null?void 0:i.food_total)||0).toFixed(2)+"",l,s;return{c(){t=p("b"),n=C("["),l=C(o),s=C("]\xA0\xA0")},m(a,r){v(a,t,r),c(t,n),c(t,l),c(t,s)},p(a,r){var b;r&3&&o!==(o=a[0].daily_budget-(((b=a[8])==null?void 0:b.food_total)||0).toFixed(2)+"")&&I(l,o)},d(a){a&&S(t)}}}function q(e){var m;let t,n=e[8].date+"",o,l,s,i=w()===e[8].date&&e[0].daily_budget,a,r=(((m=e[8])==null?void 0:m.food_total)||0).toFixed(2)+"",b,h,d,g,k,F,f=i&&N(e);function T(){return e[4](e[8])}return{c(){t=p("ion-item"),o=C(n),l=D(),s=p("ion-note"),f&&f.c(),a=D(),b=C(r),d=D(),y(s,"slot","end"),y(s,"class",h=O(w()===e[8].date?"today":"notToday")+" svelte-107flm"),y(t,"class",g=O(w()===e[8].date?"today":"notToday")+" svelte-107flm")},m(_,u){v(_,t,u),c(t,o),c(t,l),c(t,s),f&&f.m(s,null),c(s,a),c(s,b),c(t,d),k||(F=A(t,"click",T),k=!0)},p(_,u){var L;e=_,u&2&&n!==(n=e[8].date+"")&&I(o,n),u&3&&(i=w()===e[8].date&&e[0].daily_budget),i?f?f.p(e,u):(f=N(e),f.c(),f.m(s,a)):f&&(f.d(1),f=null),u&2&&r!==(r=(((L=e[8])==null?void 0:L.food_total)||0).toFixed(2)+"")&&I(b,r),u&2&&h!==(h=O(w()===e[8].date?"today":"notToday")+" svelte-107flm")&&y(s,"class",h),u&2&&g!==(g=O(w()===e[8].date?"today":"notToday")+" svelte-107flm")&&y(t,"class",g)},d(_){_&&S(t),f&&f.d(),k=!1,F()}}}function X(e){let t,n,o,l,s,i,a,r,b,h,d,g,k,F;function f(_,u){return _[1]&&_[1].length?W:V}let T=f(e),m=T(e);return{c(){t=p("ion-header"),n=p("ion-toolbar"),o=p("ion-buttons"),o.innerHTML="<ion-menu-button></ion-menu-button>",l=D(),s=p("ion-title"),s.textContent="days List",i=D(),a=p("ion-buttons"),r=p("ion-button"),b=p("ion-icon"),h=D(),d=p("ion-content"),g=p("ion-list"),m.c(),y(o,"slot","start"),y(b,"slot","icon-only"),y(b,"icon",Q),y(a,"slot","end"),y(t,"translucent","true"),y(d,"class","ion-padding")},m(_,u){v(_,t,u),c(t,n),c(n,o),c(n,l),c(n,s),c(n,i),c(n,a),c(a,r),c(r,b),v(_,h,u),v(_,d,u),c(d,g),m.m(g,null),k||(F=A(r,"click",e[3]),k=!0)},p(_,[u]){T===(T=f(_))&&m?m.p(_,u):(m.d(1),m=T(_),m&&(m.c(),m.m(g,null)))},i:z,o:z,d(_){_&&S(t),_&&S(h),_&&S(d),m.d(),k=!1,F()}}}function w(){const e=new Date;return new Date(e.getTime()-e.getTimezoneOffset()*6e4).toISOString().split("T")[0]}function Y(e,t,n){let o;E(e,U,d=>n(5,o=d));const l=R.getInstance();let s={daily_budget:0,target_weight:0},i;const a=l.getDataSubscription("days").subscribe(d=>{n(1,i=d),console.log("*** days",i)});G(async()=>{const{data:d,error:g}=await l.getSettings();console.log("*** settings",d,g),n(0,s=d.settings||{})}),J(()=>{a.unsubscribe()});const r=d=>{o("/day/[id]",{id:d})};return[s,i,r,()=>r("new"),d=>r(d.id)]}class lt extends B{constructor(t){super(),H(this,t,Y,X,j,{})}}export{lt as default};
