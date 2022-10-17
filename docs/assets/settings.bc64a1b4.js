import{S as V,i as X,s as Y,e as o,a as b,b as n,d as A,f as e,l as f,n as U,h as E,r as Z,B as $,D as tt,y as et}from"./index.6ea46e12.js";import{B as nt}from"./index.8307df69.js";import{S as it}from"./supabase.data.service.f223df7c.js";import{g as st}from"./index.c078768f.js";import{S as ot}from"./supabase.auth.service.8842defd.js";import"./BehaviorSubject.cd55190f.js";import"./network.service.84bab140.js";import"./overlays-ab6211c7.1bb838e8.js";function lt(a){let l,s,d,t,_,v,y,w,j,B,i,g,m,I,L,c,T,N,S,M,R,h,O,G,C,W,J,p,q,z,K;return{c(){var r,u,x,k,D,F;l=o("ion-header"),s=o("ion-toolbar"),d=o("ion-buttons"),d.innerHTML="<ion-menu-button></ion-menu-button>",t=b(),_=o("ion-title"),_.textContent="Settings",v=b(),y=o("ion-buttons"),w=o("ion-button"),j=o("ion-icon"),B=b(),i=o("ion-content"),g=o("ion-list"),m=o("ion-item"),I=o("ion-label"),I.textContent="Daily Budget",L=b(),c=o("ion-input"),N=b(),S=o("ion-item"),M=o("ion-label"),M.textContent="Water Target",R=b(),h=o("ion-input"),G=b(),C=o("ion-item"),W=o("ion-label"),W.textContent="Target Weight",J=b(),p=o("ion-input"),n(d,"slot","start"),n(j,"slot","icon-only"),n(j,"icon",nt),n(y,"slot","end"),n(l,"translucent","true"),n(I,"class","svelte-je3hji"),n(c,"type","number"),n(c,"class","short svelte-je3hji"),n(c,"value",T=(u=(r=a[0])==null?void 0:r.settings)==null?void 0:u.daily_budget),n(M,"class","svelte-je3hji"),n(h,"type","number"),n(h,"class","short svelte-je3hji"),n(h,"value",O=(k=(x=a[0])==null?void 0:x.settings)==null?void 0:k.water_target),n(W,"class","svelte-je3hji"),n(p,"type","number"),n(p,"class","short svelte-je3hji"),n(p,"value",q=(F=(D=a[0])==null?void 0:D.settings)==null?void 0:F.target_weight),n(i,"class","ion-padding")},m(r,u){A(r,l,u),e(l,s),e(s,d),e(s,t),e(s,_),e(s,v),e(s,y),e(y,w),e(w,j),A(r,B,u),A(r,i,u),e(i,g),e(g,m),e(m,I),e(m,L),e(m,c),e(g,N),e(g,S),e(S,M),e(S,R),e(S,h),e(g,G),e(g,C),e(C,W),e(C,J),e(C,p),z||(K=[f(w,"click",a[1]),f(c,"ionFocus",H),f(c,"ionChange",a[2]),f(h,"ionFocus",H),f(h,"ionChange",a[3]),f(p,"ionFocus",H),f(p,"ionChange",a[4])],z=!0)},p(r,[u]){var x,k,D,F,P,Q;u&1&&T!==(T=(k=(x=r[0])==null?void 0:x.settings)==null?void 0:k.daily_budget)&&n(c,"value",T),u&1&&O!==(O=(F=(D=r[0])==null?void 0:D.settings)==null?void 0:F.water_target)&&n(h,"value",O),u&1&&q!==(q=(Q=(P=r[0])==null?void 0:P.settings)==null?void 0:Q.target_weight)&&n(p,"value",q)},i:U,o:U,d(r){r&&E(l),r&&E(B),r&&E(i),z=!1,Z(K)}}}function H(a){try{(parseFloat(a.target.value)||0)===0&&(a.target.value="")}catch(l){console.error("error clearing zero value",l)}a.target.getInputElement().then(l=>{console.log("input",l),l.type="text",l.setSelectionRange(l.value.length,l.value.length),l.type="number"})}function at(a,l,s){$(a,st,i=>s(7,i));const d=it.getInstance();let t={settings:{daily_budget:0,target_weight:0,water_target:8}},_=null,v;return tt(()=>{try{v.unsubscribe()}catch(i){console.error("error unsubscribing",i)}}),et(async()=>{v=ot.user.subscribe(m=>{_=m});const{data:i,error:g}=await d.getSettings();console.log("*** data",i,g),s(0,t=i||{}),t.settings||s(0,t.settings={daily_budget:0,target_weight:0,water_target:8},t),typeof t.settings.water_target=="undefined"&&s(0,t.settings.water_target=8,t)}),[t,async()=>{t.user_id||s(0,t.user_id=(_==null?void 0:_.id)||null,t),t.settings||s(0,t.settings={},t),t.settings.daily_budget||s(0,t.settings.daily_budget=0,t),t.settings.target_weight||s(0,t.settings.target_weight=0,t),console.log("calling saveSettings",t);const{data:i,error:g}=await d.saveSettings(t);g?console.log("save error",g):console.log("save results",i,g)},i=>s(0,t.settings.daily_budget=i.detail.value,t),i=>s(0,t.settings.water_target=i.detail.value,t),i=>s(0,t.settings.target_weight=i.detail.value,t)]}class dt extends V{constructor(l){super(),X(this,l,at,lt,Y,{})}}export{dt as default};
