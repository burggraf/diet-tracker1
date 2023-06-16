import{S as J,i as K,s as Q,h as X,m as Y,p as Z,q as U,r as $,w as G,b as r,c as b,d as i,a as O,f as o,l as v,g as W,v as ee}from"./index.82c33b84.js";import{I as te}from"./IonPage.7fa999e5.js";import{C as ne}from"./index.4efd86c3.js";import{S as oe}from"./supabase.auth.service.3549c203.js";import{g as ae}from"./index.20440114.js";import{c as ie}from"./user.store.3d97b41c.js";import"./BehaviorSubject.f845dde8.js";function le(s){let t,a,e,h,n,q,w,y,j,D,l,_,m,f,C,g,E,B,S,I,H,c,F,L,k,V,M,d,T,A,N;return{c(){var u,p,x;t=r("ion-header"),a=r("ion-toolbar"),e=r("ion-buttons"),e.innerHTML="<ion-menu-button></ion-menu-button>",h=b(),n=r("ion-title"),n.textContent="Settings",q=b(),w=r("ion-buttons"),y=r("ion-button"),j=r("ion-icon"),D=b(),l=r("ion-content"),_=r("ion-list"),m=r("ion-item"),f=r("ion-label"),f.textContent="Daily Budget",C=b(),g=r("ion-input"),B=b(),S=r("ion-item"),I=r("ion-label"),I.textContent="Water Target",H=b(),c=r("ion-input"),L=b(),k=r("ion-item"),V=r("ion-label"),V.textContent="Target Weight",M=b(),d=r("ion-input"),i(e,"slot","start"),i(j,"slot","icon-only"),i(j,"icon",ne),i(w,"slot","end"),i(t,"translucent","true"),i(f,"class","svelte-je3hji"),i(g,"type","number"),i(g,"class","short svelte-je3hji"),i(g,"value",E=(u=s[0])==null?void 0:u.daily_budget),i(I,"class","svelte-je3hji"),i(c,"type","number"),i(c,"class","short svelte-je3hji"),i(c,"value",F=(p=s[0])==null?void 0:p.water_target),i(V,"class","svelte-je3hji"),i(d,"type","number"),i(d,"class","short svelte-je3hji"),i(d,"value",T=(x=s[0])==null?void 0:x.target_weight),i(l,"class","ion-padding")},m(u,p){O(u,t,p),o(t,a),o(a,e),o(a,h),o(a,n),o(a,q),o(a,w),o(w,y),o(y,j),O(u,D,p),O(u,l,p),o(l,_),o(_,m),o(m,f),o(m,C),o(m,g),o(_,B),o(_,S),o(S,I),o(S,H),o(S,c),o(_,L),o(_,k),o(k,V),o(k,M),o(k,d),A||(N=[v(y,"click",s[2]),v(g,"ionFocus",z),v(g,"ionChange",s[3]),v(c,"ionFocus",z),v(c,"ionChange",s[4]),v(d,"ionFocus",z),v(d,"ionChange",s[5])],A=!0)},p(u,p){var x,P,R;p&1&&E!==(E=(x=u[0])==null?void 0:x.daily_budget)&&i(g,"value",E),p&1&&F!==(F=(P=u[0])==null?void 0:P.water_target)&&i(c,"value",F),p&1&&T!==(T=(R=u[0])==null?void 0:R.target_weight)&&i(d,"value",T)},d(u){u&&W(t),u&&W(D),u&&W(l),A=!1,ee(N)}}}function se(s){let t,a;return t=new te({props:{ionViewDidEnter:s[1],$$slots:{default:[le]},$$scope:{ctx:s}}}),{c(){X(t.$$.fragment)},m(e,h){Y(t,e,h),a=!0},p(e,[h]){const n={};h&2049&&(n.$$scope={dirty:h,ctx:e}),t.$set(n)},i(e){a||(Z(t.$$.fragment,e),a=!0)},o(e){U(t.$$.fragment,e),a=!1},d(e){$(t,e)}}}function z(s){try{(parseFloat(s.target.value)||0)===0&&(s.target.value="")}catch(t){console.error("error clearing zero value",t)}s.target.getInputElement().then(t=>{console.log("input",t),t.type="text",t.setSelectionRange(t.value.length,t.value.length),t.type="number"})}function re(s,t,a){let e;G(s,ae,l=>a(6,l)),G(s,ie,l=>a(7,e=l));const h=oe.getInstance();let n={settings:{daily_budget:0,target_weight:0,water_target:8}};return[n,()=>{var l,_,m,f,C,g;console.log("** ionViewDidEnter",e),a(0,n={daily_budget:0,target_weight:0,water_target:8}),(l=e==null?void 0:e.user_metadata)!=null&&l.daily_budget&&a(0,n.daily_budget=(_=e==null?void 0:e.user_metadata)==null?void 0:_.daily_budget,n),(m=e==null?void 0:e.user_metadata)!=null&&m.target_weight&&a(0,n.target_weight=(f=e==null?void 0:e.user_metadata)==null?void 0:f.target_weight,n),(C=e==null?void 0:e.user_metadata)!=null&&C.water_target&&a(0,n.water_target=(g=e==null?void 0:e.user_metadata)==null?void 0:g.water_target,n)},async()=>{console.log("save settings as",n);const{user:l,error:_}=await h.saveSettings(n);_?console.log("save error",_):console.log("save results",l,_)},l=>a(0,n.daily_budget=l.detail.value,n),l=>a(0,n.water_target=l.detail.value,n),l=>a(0,n.target_weight=l.detail.value,n)]}class de extends J{constructor(t){super(),K(this,t,re,se,Q,{})}}export{de as default};
