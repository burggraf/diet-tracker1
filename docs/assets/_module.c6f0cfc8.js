import{S as X,i as Y,s as Z,e as ie,a as A,b as d,c as q,t as ee,d as f,n as G,f as i,l as I,g as N,h as te,j as L,k as y,m as ne,o as le,p as F,q as H,r as se,u as oe,v as re,w as J,x as ae,y as ce,z as ue,A as de,B as fe,C as pe,D as me,E as ge}from"./index.4d3b39aa.js";import{c as K}from"./user.store.ae2c5865.js";import{c as ve,b as _e,s as he,i as be}from"./index.4efd86c3.js";import{L as qe,t as ke}from"./Login.3344920a.js";import{S as xe}from"./supabase.auth.service.46038d61.js";import{S as ye,N as $e}from"./supabase.data.service.b5bf7c44.js";import{g as we,i as Se}from"./index.4200f55d.js";import{s as Oe}from"./alert.b589df90.js";import"./controllers.0c24b3c0.js";import"./loadingMessage.783bbb09.js";import"./BehaviorSubject.f4d7deea.js";const Le="diet-tracker",Ce="0.5.3",De="module",Me={dev:"vite --port 8100 --host 0.0.0.0",build:"vite build && vite build --ssr","build:client":"vite build","build:server":"vite build  --ssr",preview:"vite preview",check:"svelte-check --tsconfig ./tsconfig.json",routes:"routify"},je={"@rollup/plugin-alias":"^3.1.9","@roxi/routify":"^3.0.0-next.93","@sveltejs/vite-plugin-svelte":"^1.0.0-next.30","@tsconfig/svelte":"^2.0.1","babel-loader":"^8.2.5",sass:"^1.52.2",spank:"^2.0.0-5",svelte:"^3.48.0","svelte-check":"^2.2.7","svelte-loader":"^3.1.3","svelte-preprocess":"^4.9.8",tslib:"^2.3.1",typescript:"^4.5.4",vite:"^2.9.9"},Ie={"@ionic/core":"^6.1.8","@supabase/supabase-js":"^1.35.7","chart.js":"^3.9.1",routify:"^1.2.7",rxjs:"^7.5.6","vite-plugin-pwa":"^0.12.3"},Ae={pages:"./src/routes"};var E={name:Le,private:!0,version:Ce,type:De,scripts:Me,devDependencies:je,dependencies:Ie,routify:Ae};function Q(n,s,e){const t=n.slice();return t[16]=s[e],t[18]=e,t}function R(n){let s,e,t,r,u,p=n[16].title+"",m,o,l,v,$;function b(){return n[8](n[16])}return{c(){s=d("ion-menu-toggle"),e=d("ion-item"),t=d("ion-icon"),r=q(),u=d("ion-label"),m=ee(p),l=q(),f(t,"slot","start"),f(t,"icon",n[16].icon),f(t,"class","svelte-1xq0461"),f(u,"class","svelte-1xq0461"),f(e,"routerdirection","root"),f(e,"lines","none"),f(e,"detail","false"),f(e,"class",o=G(n[2](n[16].url)&&n[16].url.length>1?"active-item":"")+" svelte-1xq0461"),f(s,"auto-hide","false")},m(h,x){A(h,s,x),i(s,e),i(e,t),i(e,r),i(e,u),i(u,m),i(s,l),v||($=I(e,"click",b),v=!0)},p(h,x){n=h,x&4&&o!==(o=G(n[2](n[16].url)&&n[16].url.length>1?"active-item":"")+" svelte-1xq0461")&&f(e,"class",o)},d(h){h&&N(s),v=!1,$()}}}function W(n){let s,e=(!n[16].requireLogin||n[0])&&R(n);return{c(){e&&e.c(),s=ie()},m(t,r){e&&e.m(t,r),A(t,s,r)},p(t,r){!t[16].requireLogin||t[0]?e?e.p(t,r):(e=R(t),e.c(),e.m(s.parentNode,s)):e&&(e.d(1),e=null)},d(t){e&&e.d(t),t&&N(s)}}}function Ne(n){let s,e,t,r,u,p,m,o,l,v,$,b,h,x,k,a,P,C,D,T,M=n[1]?"Online":"Offline",z,j,w,B,U;l=new qe({props:{providers:["google","facebook","twitter"],onSignOut:n[7],profileFunction:Te}});let S=n[4],_=[];for(let c=0;c<S.length;c+=1)_[c]=W(Q(n,S,c));return{c(){s=d("ion-menu"),e=d("ion-content"),t=d("ion-list"),r=d("h4"),r.innerHTML="<strong>Diet Tracker</strong>",u=q(),p=d("p"),p.textContent="Track your diet across devices.",m=q(),o=d("ion-menu-toggle"),te(l.$$.fragment),v=q();for(let c=0;c<_.length;c+=1)_[c].c();$=q(),b=d("ion-footer"),h=d("div"),h.textContent=`v.${E==null?void 0:E.version}`,x=q(),k=d("div"),a=d("span"),a.textContent="clear cache",P=q(),C=d("span"),D=d("ion-label"),T=d("b"),z=ee(M),L(r,"margin-top","0px"),L(r,"text-align","center"),L(r,"color","var(--ion-color-primary)"),L(p,"padding-bottom","5px"),L(p,"text-align","center"),L(p,"color","var(--ion-color-medium)"),f(o,"auto-hide","false"),f(t,"id","inbox-list"),f(e,"class","ion-padding svelte-1xq0461"),y(h,"class","pointer centered svelte-1xq0461"),y(a,"class","pointer svelte-1xq0461"),f(D,"color",j=n[1]?"success":"danger"),y(C,"class","pointer span-on-right svelte-1xq0461"),y(k,"id","debugger"),y(k,"class","hidden svelte-1xq0461"),f(b,"class","ion-padding"),f(s,"content-id","main"),f(s,"menu-id","mainmenu"),f(s,"class","svelte-1xq0461")},m(c,O){A(c,s,O),i(s,e),i(e,t),i(t,r),i(t,u),i(t,p),i(t,m),i(t,o),ne(l,o,null),i(t,v);for(let g=0;g<_.length;g+=1)_[g].m(t,null);i(s,$),i(s,b),i(b,h),i(b,x),i(b,k),i(k,a),i(k,P),i(k,C),i(C,D),i(D,T),i(T,z),w=!0,B||(U=[I(h,"click",n[6]),I(a,"click",n[9]),I(C,"click",n[10])],B=!0)},p(c,[O]){if(O&53){S=c[4];let g;for(g=0;g<S.length;g+=1){const V=Q(c,S,g);_[g]?_[g].p(V,O):(_[g]=W(V),_[g].c(),_[g].m(t,null))}for(;g<_.length;g+=1)_[g].d(1);_.length=S.length}(!w||O&2)&&M!==(M=c[1]?"Online":"Offline")&&le(z,M),(!w||O&2&&j!==(j=c[1]?"success":"danger"))&&f(D,"color",j)},i(c){w||(F(l.$$.fragment,c),w=!0)},o(c){H(l.$$.fragment,c),w=!1},d(c){c&&N(s),se(l),oe(_,c),B=!1,re(U)}}}const Te=()=>{};function ze(n,s,e){let t,r;J(n,we,a=>e(13,t=a)),J(n,Se,a=>e(2,r=a)),ye.getInstance();let u=null,p,m=!1;const o=$e.getInstance();ae(()=>{ce("mainmenu"),p=xe.user.subscribe(async a=>{e(0,u=a),u?K.set(u):K.set(null)}),o.online.subscribe(a=>{e(1,m=a)})}),ue(()=>{p.unsubscribe()});const l=[{title:"Calendar",url:"/calendar",icon:ve,requireLogin:!0},{title:"Charts",url:"/chart",icon:_e,requireLogin:!0},{title:"Settings",url:"/settings",icon:he,requireLogin:!0},{title:"Info",url:"/info",icon:be,requireLogin:!1}],v=a=>{t(a.url),de.close("mainmenu")};return[u,m,r,o,l,v,()=>{const a=document.getElementById("debugger");a.classList.contains("hidden")?a.classList.remove("hidden"):a.classList.add("hidden")},()=>{localStorage.clear(),window.location.href="/"},a=>{v(a)},()=>{localStorage.clear()},async a=>{await Oe({header:"Manually set online status",message:`Force online status to <b>${m?"Offline":"Online"}</b>?`,okHander:async()=>{o.forceOnlineValue(!m),ke(`Online status set to: <b>${m?"Online":"Offline"}</b>`,m?"success":"danger")}})}]}class Be extends X{constructor(s){super(),Y(this,s,ze,Ne,Z,{})}}function Ee(n){let s,e,t,r,u,p;t=new Be({});const m=n[1].default,o=fe(m,n,n[0],null);return{c(){s=d("ion-app"),e=d("ion-split-pane"),te(t.$$.fragment),r=q(),u=d("div"),o&&o.c(),y(u,"class","ion-page"),y(u,"id","main"),f(e,"content-id","main")},m(l,v){A(l,s,v),i(s,e),ne(t,e,null),i(e,r),i(e,u),o&&o.m(u,null),p=!0},p(l,[v]){o&&o.p&&(!p||v&1)&&pe(o,m,l,l[0],p?ge(m,l[0],v,null):me(l[0]),null)},i(l){p||(F(t.$$.fragment,l),F(o,l),p=!0)},o(l){H(t.$$.fragment,l),H(o,l),p=!1},d(l){l&&N(s),se(t),o&&o.d(l)}}}function Fe(n,s,e){let{$$slots:t={},$$scope:r}=s;return n.$$set=u=>{"$$scope"in u&&e(0,r=u.$$scope)},[r,t]}class Ye extends X{constructor(s){super(),Y(this,s,Fe,Ee,Z,{})}}export{Ye as default};