import{S as K,i as P,s as Q,e as o,a as d,t as U,b as l,d as B,f as e,l as x,z as V,n as W,h as J,r as X,B as Y,D as Z,y as $}from"./index.00450e9e.js";import{A as tt}from"./index.b561a64b.js";import{S as et}from"./supabase.data.service.09fcdf72.js";import{g as nt}from"./index.f502aa51.js";import{S as st}from"./supabase.auth.service.c16da4ce.js";import"./BehaviorSubject.f6ee691a.js";import"./network.service.1aac107c.js";import"./overlays-ab6211c7.c2d6fb0a.js";function it(r){let n,s,h,t,_,m,f,v,y,i,u,b,S,k,M,c,D,T,j,O,q,p,F,E,N,I=JSON.stringify(r[0],null,2)+"",z,A,H;return{c(){var a,g,w,C;n=o("ion-header"),s=o("ion-toolbar"),h=o("ion-buttons"),h.innerHTML="<ion-menu-button></ion-menu-button>",t=d(),_=o("ion-title"),_.textContent="Settings",m=d(),f=o("ion-buttons"),v=o("ion-button"),y=o("ion-icon"),i=d(),u=o("ion-content"),b=o("ion-list"),S=o("ion-item"),k=o("ion-label"),k.textContent="Daily Budget",M=d(),c=o("ion-input"),T=d(),j=o("ion-item"),O=o("ion-label"),O.textContent="Target Weight",q=d(),p=o("ion-input"),E=d(),N=o("pre"),z=U(I),l(h,"slot","start"),l(y,"slot","icon-only"),l(y,"icon",tt),l(f,"slot","end"),l(n,"translucent","true"),l(k,"class","svelte-je3hji"),l(c,"type","number"),l(c,"class","short svelte-je3hji"),l(c,"value",D=(g=(a=r[0])==null?void 0:a.settings)==null?void 0:g.daily_budget),l(O,"class","svelte-je3hji"),l(p,"type","number"),l(p,"class","short svelte-je3hji"),l(p,"value",F=(C=(w=r[0])==null?void 0:w.settings)==null?void 0:C.target_weight),l(u,"class","ion-padding")},m(a,g){B(a,n,g),e(n,s),e(s,h),e(s,t),e(s,_),e(s,m),e(s,f),e(f,v),e(v,y),B(a,i,g),B(a,u,g),e(u,b),e(b,S),e(S,k),e(S,M),e(S,c),e(b,T),e(b,j),e(j,O),e(j,q),e(j,p),e(u,E),e(u,N),e(N,z),A||(H=[x(v,"click",r[1]),x(c,"ionFocus",G),x(c,"ionChange",r[2]),x(p,"ionFocus",G),x(p,"ionChange",r[3])],A=!0)},p(a,[g]){var w,C,L,R;g&1&&D!==(D=(C=(w=a[0])==null?void 0:w.settings)==null?void 0:C.daily_budget)&&l(c,"value",D),g&1&&F!==(F=(R=(L=a[0])==null?void 0:L.settings)==null?void 0:R.target_weight)&&l(p,"value",F),g&1&&I!==(I=JSON.stringify(a[0],null,2)+"")&&V(z,I)},i:W,o:W,d(a){a&&J(n),a&&J(i),a&&J(u),A=!1,X(H)}}}function G(r){try{(parseFloat(r.target.value)||0)===0&&(r.target.value="")}catch(n){console.error("error clearing zero value",n)}r.target.getInputElement().then(n=>{console.log("input",n),n.type="text",n.setSelectionRange(n.value.length,n.value.length),n.type="number"})}function ot(r,n,s){Y(r,nt,i=>s(6,i));const h=et.getInstance();let t={settings:{daily_budget:0,target_weight:0}},_=null,m;return Z(()=>{try{m.unsubscribe()}catch(i){console.error("error unsubscribing",i)}}),$(async()=>{m=st.user.subscribe(b=>{_=b});const{data:i,error:u}=await h.getSettings();console.log("*** data",i,u),s(0,t=i||{}),t.settings||s(0,t.settings={daily_budget:0,target_weight:0},t)}),[t,async()=>{t.user_id||s(0,t.user_id=(_==null?void 0:_.id)||null,t),t.settings||s(0,t.settings={},t),t.settings.daily_budget||s(0,t.settings.daily_budget=0,t),t.settings.target_weight||s(0,t.settings.target_weight=0,t),console.log("calling saveSettings",t);const{data:i,error:u}=await h.saveSettings(t);u?console.log("save error",u):console.log("save results",i,u)},i=>s(0,t.settings.daily_budget=i.detail.value,t),i=>s(0,t.settings.target_weight=i.detail.value,t)]}class ht extends K{constructor(n){super(),P(this,n,ot,it,Q,{})}}export{ht as default};