import{S as j,i as B,s as $,h as A,m as G,p as J,q as K,r as Q,w as W,x as R,z as U,b,c as V,d as h,k as X,a as D,f as u,l as O,g as T,v as Y,H as N,t as F,n as L,o as E,e as Z,u as x}from"./index.c534e146.js";import{I as ee}from"./IonPage.5efe7612.js";import{c as te}from"./user.store.e0d6a8f6.js";import{y as ne}from"./index.6a8fe8ef.js";import{U as oe,S as ie}from"./supabase.data.service.f2a1f8fe.js";import{g as le}from"./index.c2f40427.js";import"./BehaviorSubject.08b3cf18.js";import"./loadingMessage.d53f0b0f.js";function q(t,e,o){const n=t.slice();return n[13]=e[o],n}function ae(t){let e;return{c(){e=b("ion-item"),e.textContent="No days found"},m(o,n){D(o,e,n)},p:N,d(o){o&&T(e)}}}function se(t){let e,o=t[1],n=[];for(let i=0;i<o.length;i+=1)n[i]=M(q(t,o,i));return{c(){for(let i=0;i<n.length;i+=1)n[i].c();e=Z()},m(i,a){for(let l=0;l<n.length;l+=1)n[l].m(i,a);D(i,e,a)},p(i,a){if(a&15){o=i[1];let l;for(l=0;l<o.length;l+=1){const r=q(i,o,l);n[l]?n[l].p(r,a):(n[l]=M(r),n[l].c(),n[l].m(e.parentNode,e))}for(;l<n.length;l+=1)n[l].d(1);n.length=o.length}},d(i){x(n,i),i&&T(e)}}}function de(t){var n,i;let e=new Date(new Date((n=t[13])==null?void 0:n.date).getTime()+new Date((i=t[13])==null?void 0:i.date).getTimezoneOffset()*6e4).toDateString()+"",o;return{c(){o=F(e)},m(a,l){D(a,o,l)},p(a,l){var r,c;l&2&&e!==(e=new Date(new Date((r=a[13])==null?void 0:r.date).getTime()+new Date((c=a[13])==null?void 0:c.date).getTimezoneOffset()*6e4).toDateString()+"")&&E(o,e)},d(a){a&&T(o)}}}function re(t){let e;return{c(){e=F("Today")},m(o,n){D(o,e,n)},p:N,d(o){o&&T(e)}}}function H(t){var l,r;let e,o,n=((l=t[0])==null?void 0:l.daily_budget)-(((r=t[13])==null?void 0:r.food_total)||0).toFixed(2)+"",i,a;return{c(){e=b("b"),o=F("["),i=F(n),a=F("]\xA0\xA0")},m(c,f){D(c,e,f),u(e,o),u(e,i),u(e,a)},p(c,f){var p,g;f&3&&n!==(n=((p=c[0])==null?void 0:p.daily_budget)-(((g=c[13])==null?void 0:g.food_total)||0).toFixed(2)+"")&&E(i,n)},d(c){c&&T(e)}}}function M(t){var I,y;let e,o,n,i,a=t[2].getToday()===t[13].date&&((I=t[0])==null?void 0:I.daily_budget),l,r=(((y=t[13])==null?void 0:y.food_total)||0).toFixed(2)+"",c,f,p,g,w,v;function C(d,m){return m&2&&(o=null),o==null&&(o=d[2].getToday()===d[13].date),o?re:de}let k=C(t,-1),s=k(t),_=a&&H(t);function S(){return t[8](t[13])}return{c(){e=b("ion-item"),s.c(),n=V(),i=b("ion-note"),_&&_.c(),l=V(),c=F(r),p=V(),h(i,"slot","end"),h(i,"class",f=L(t[2].getToday()===t[13].date?"today":"notToday")+" svelte-1dsdix1"),h(e,"class",g=L(t[2].getToday()===t[13].date?"today":"notToday")+" svelte-1dsdix1")},m(d,m){D(d,e,m),s.m(e,null),u(e,n),u(e,i),_&&_.m(i,null),u(i,l),u(i,c),u(e,p),w||(v=O(e,"click",S),w=!0)},p(d,m){var z,P;t=d,k===(k=C(t,m))&&s?s.p(t,m):(s.d(1),s=k(t),s&&(s.c(),s.m(e,n))),m&3&&(a=t[2].getToday()===t[13].date&&((z=t[0])==null?void 0:z.daily_budget)),a?_?_.p(t,m):(_=H(t),_.c(),_.m(i,l)):_&&(_.d(1),_=null),m&2&&r!==(r=(((P=t[13])==null?void 0:P.food_total)||0).toFixed(2)+"")&&E(c,r),m&2&&f!==(f=L(t[2].getToday()===t[13].date?"today":"notToday")+" svelte-1dsdix1")&&h(i,"class",f),m&2&&g!==(g=L(t[2].getToday()===t[13].date?"today":"notToday")+" svelte-1dsdix1")&&h(e,"class",g)},d(d){d&&T(e),s.d(),_&&_.d(),w=!1,v()}}}function ce(t){let e,o,n,i,a,l,r,c,f,p,g,w,v,C,k,s,_;function S(d,m){return d[1]&&d[1].length?se:ae}let I=S(t),y=I(t);return{c(){e=b("ion-header"),o=b("ion-toolbar"),n=b("ion-buttons"),n.innerHTML="<ion-menu-button></ion-menu-button>",i=V(),a=b("ion-title"),a.textContent="Calendar",l=V(),r=b("ion-buttons"),c=b("ion-button"),f=b("ion-icon"),p=V(),g=b("ion-content"),w=b("div"),v=b("ion-datetime"),C=V(),k=b("ion-list"),y.c(),h(n,"slot","start"),h(f,"slot","icon-only"),h(f,"icon",ne),h(r,"slot","end"),h(e,"translucent","true"),h(v,"id","datepicker"),h(v,"class","hidden svelte-1dsdix1"),X(w,"class","centered svelte-1dsdix1"),h(g,"class","ion-padding")},m(d,m){D(d,e,m),u(e,o),u(o,n),u(o,i),u(o,a),u(o,l),u(o,r),u(r,c),u(c,f),D(d,p,m),D(d,g,m),u(g,w),u(w,v),u(g,C),u(g,k),y.m(k,null),s||(_=[O(a,"click",ue),O(c,"click",t[7]),O(v,"click",t[6])],s=!0)},p(d,m){I===(I=S(d))&&y?y.p(d,m):(y.d(1),y=I(d),y&&(y.c(),y.m(k,null)))},d(d){d&&T(e),d&&T(p),d&&T(g),y.d(),s=!1,Y(_)}}}function _e(t){let e,o;return e=new ee({props:{ionViewDidEnter:t[4],ionViewWillLeave:t[5],$$slots:{default:[ce]},$$scope:{ctx:t}}}),{c(){A(e.$$.fragment)},m(n,i){G(e,n,i),o=!0},p(n,[i]){const a={};i&65539&&(a.$$scope={dirty:i,ctx:n}),e.$set(a)},i(n){o||(J(e.$$.fragment,n),o=!0)},o(n){K(e.$$.fragment,n),o=!1},d(n){Q(e,n)}}}function ue(){console.log("** toggleDatePicker");const t=document.getElementById("datepicker");t&&t.classList.toggle("hidden")}function fe(t,e,o){let n,i;W(t,te,s=>o(10,n=s)),W(t,le,s=>o(11,i=s));const a=oe.getInstance(),l=ie.getInstance();let r={daily_budget:0,target_weight:0,water_target:8},c,f;R(async()=>{}),U(()=>{});const p=s=>{i("/day/[id]",{id:s})};return[r,c,a,p,async()=>{n!=null&&n.user_metadata?o(0,r=n==null?void 0:n.user_metadata):o(0,r={daily_budget:0,target_weight:0,water_target:8}),f||(f=await l.getDataSubscription("days").subscribe(s=>{s&&s.length>0&&o(1,c=s)}))},()=>{f&&f.unsubscribe(),o(1,c=[])},async s=>{const _=new Date(s.target.value),{data:S,error:I}=await l.getDayId(_.toISOString().substring(0,10));S&&S.id?p(S.id):p(_.toISOString().substring(0,10))},()=>p("new"),s=>p(s.id)]}class ve extends j{constructor(e){super(),B(this,e,fe,_e,$,{})}}export{ve as default};
