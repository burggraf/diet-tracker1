import{S as ee,i as te,s as ne,e as re,a as D,b as f,c as k,t as j,d as c,n as R,f as i,l as H,g as A,h as le,j as C,k as B,m as ie,o as ae,p as E,q as P,r as se,u as ce,v as ue,w as W,x as fe,y as me,z as pe,A as _e,B as de,C as ve,D as be,E as ge}from"./index.4014b118.js";import{c as X}from"./user.store.fd5d014e.js";import{c as he,b as ke,s as ze,i as ye}from"./index.6a8fe8ef.js";import{L as $e,t as we}from"./Login.a14a03ac.js";import{S as Se}from"./supabase.auth.service.4facf245.js";import{S as Oe,N as Ce}from"./supabase.data.service.808f0371.js";import{g as Le,i as qe}from"./index.0340b50a.js";import{s as Me}from"./alert.3666373c.js";import"./controllers.a43a9b0e.js";import"./loadingMessage.a46fc6aa.js";import"./BehaviorSubject.2e779836.js";const je="diet-tracker",De="0.5.1",Ae="module",Ie={dev:"vite --port 8100 --host 0.0.0.0",build:"vite build && vite build --ssr","build:client":"vite build","build:server":"vite build  --ssr",preview:"vite preview",check:"svelte-check --tsconfig ./tsconfig.json",routes:"routify"},Ne={"@rollup/plugin-alias":"^3.1.9","@roxi/routify":"^3.0.0-next.93","@sveltejs/vite-plugin-svelte":"^1.0.0-next.30","@tsconfig/svelte":"^2.0.1","babel-loader":"^8.2.5",sass:"^1.52.2",spank:"^2.0.0-5",svelte:"^3.48.0","svelte-check":"^2.2.7","svelte-loader":"^3.1.3","svelte-preprocess":"^4.9.8",tslib:"^2.3.1",typescript:"^4.5.4",vite:"^2.9.9"},Te={"@ionic/core":"^6.1.8","@supabase/supabase-js":"^1.35.7","chart.js":"^3.9.1",routify:"^1.2.7",rxjs:"^7.5.6","vite-plugin-pwa":"^0.12.3"},Fe={pages:"./src/routes"};var F={name:je,private:!0,version:De,type:Ae,scripts:Ie,devDependencies:Ne,dependencies:Te,routify:Fe};function Y(n,l,e){const t=n.slice();return t[15]=l[e],t[17]=e,t}function Z(n){let l,e,t,r,u,m=n[15].title+"",p,o,s,v,y;function b(){return n[7](n[15])}return{c(){l=f("ion-menu-toggle"),e=f("ion-item"),t=f("ion-icon"),r=k(),u=f("ion-label"),p=j(m),s=k(),c(t,"slot","start"),c(t,"icon",n[15].icon),c(t,"class","svelte-1ub1zcr"),c(u,"class","svelte-1ub1zcr"),c(e,"routerdirection","root"),c(e,"lines","none"),c(e,"detail","false"),c(e,"class",o=R(n[2](n[15].url)&&n[15].url.length>1?"active-item":"")+" svelte-1ub1zcr"),c(l,"auto-hide","false")},m(h,z){D(h,l,z),i(l,e),i(e,t),i(e,r),i(e,u),i(u,p),i(l,s),v||(y=H(e,"click",b),v=!0)},p(h,z){n=h,z&4&&o!==(o=R(n[2](n[15].url)&&n[15].url.length>1?"active-item":"")+" svelte-1ub1zcr")&&c(e,"class",o)},d(h){h&&A(l),v=!1,y()}}}function x(n){let l,e=(!n[15].requireLogin||n[0])&&Z(n);return{c(){e&&e.c(),l=re()},m(t,r){e&&e.m(t,r),D(t,l,r)},p(t,r){!t[15].requireLogin||t[0]?e?e.p(t,r):(e=Z(t),e.c(),e.m(l.parentNode,l)):e&&(e.d(1),e=null)},d(t){e&&e.d(t),t&&A(l)}}}function He(n){let l,e,t,r,u,m,p,o,s,v,y,b,h,z,d,oe=(F==null?void 0:F.version)+"",U,V,G,J,L,$,I,q=n[1]?"Online":"Offline",N,M,w,T,K;s=new $e({props:{providers:["google","facebook","twitter"],onSignOut:n[6],profileFunction:Be}});let S=n[4],g=[];for(let a=0;a<S.length;a+=1)g[a]=x(Y(n,S,a));return{c(){l=f("ion-menu"),e=f("ion-content"),t=f("ion-list"),r=f("h4"),r.innerHTML="<strong>Diet Tracker</strong>",u=k(),m=f("p"),m.textContent="Track your diet across devices.",p=k(),o=f("ion-menu-toggle"),le(s.$$.fragment),v=k();for(let a=0;a<g.length;a+=1)g[a].c();y=k(),b=f("ion-footer"),h=f("u"),h.textContent="clear cache",z=f("br"),d=j("v."),U=j(oe),V=k(),G=f("br"),J=k(),L=f("ion-item"),$=f("ion-label"),I=f("b"),N=j(q),C(r,"margin-top","0px"),C(r,"text-align","center"),C(r,"color","var(--ion-color-primary)"),C(m,"padding-bottom","5px"),C(m,"text-align","center"),C(m,"color","var(--ion-color-medium)"),c(o,"auto-hide","false"),c(t,"id","inbox-list"),c(e,"class","ion-padding svelte-1ub1zcr"),B(h,"class","svelte-1ub1zcr"),c($,"color",M=n[1]?"success":"danger"),c($,"class","svelte-1ub1zcr"),c(L,"class","svelte-1ub1zcr"),c(b,"class","ion-padding"),c(l,"content-id","main"),c(l,"menu-id","mainmenu"),c(l,"class","svelte-1ub1zcr")},m(a,O){D(a,l,O),i(l,e),i(e,t),i(t,r),i(t,u),i(t,m),i(t,p),i(t,o),ie(s,o,null),i(t,v);for(let _=0;_<g.length;_+=1)g[_].m(t,null);i(l,y),i(l,b),i(b,h),i(b,z),i(b,d),i(b,U),i(b,V),i(b,G),i(b,J),i(b,L),i(L,$),i($,I),i(I,N),w=!0,T||(K=[H(h,"click",n[8]),H(L,"click",n[9])],T=!0)},p(a,[O]){if(O&53){S=a[4];let _;for(_=0;_<S.length;_+=1){const Q=Y(a,S,_);g[_]?g[_].p(Q,O):(g[_]=x(Q),g[_].c(),g[_].m(t,null))}for(;_<g.length;_+=1)g[_].d(1);g.length=S.length}(!w||O&2)&&q!==(q=a[1]?"Online":"Offline")&&ae(N,q),(!w||O&2&&M!==(M=a[1]?"success":"danger"))&&c($,"color",M)},i(a){w||(E(s.$$.fragment,a),w=!0)},o(a){P(s.$$.fragment,a),w=!1},d(a){a&&A(l),se(s),ce(g,a),T=!1,ue(K)}}}const Be=()=>{};function Ee(n,l,e){let t,r;W(n,Le,d=>e(12,t=d)),W(n,qe,d=>e(2,r=d)),Oe.getInstance();let u=null,m,p=!1;const o=Ce.getInstance();fe(()=>{me("mainmenu"),m=Se.user.subscribe(async d=>{e(0,u=d),u?X.set(u):X.set(null)}),o.online.subscribe(d=>{e(1,p=d)})}),pe(()=>{m.unsubscribe()});const s=[{title:"Calendar",url:"/calendar",icon:he,requireLogin:!0},{title:"Charts",url:"/chart",icon:ke,requireLogin:!0},{title:"Settings",url:"/settings",icon:ze,requireLogin:!0},{title:"Info",url:"/info",icon:ye,requireLogin:!1}],v=d=>{t(d.url),_e.close("mainmenu")};return[u,p,r,o,s,v,()=>{localStorage.clear(),window.location.href="/"},d=>{v(d)},()=>{localStorage.clear()},async d=>{await Me({header:"Manually set online status",message:`Force online status to <b>${p?"Offline":"Online"}</b>?`,okHander:async()=>{o.forceOnlineValue(!p),we(`Online status set to: <b>${p?"Online":"Offline"}</b>`,p?"success":"danger")}})}]}class Pe extends ee{constructor(l){super(),te(this,l,Ee,He,ne,{})}}function Ue(n){let l,e,t,r,u,m;t=new Pe({});const p=n[1].default,o=de(p,n,n[0],null);return{c(){l=f("ion-app"),e=f("ion-split-pane"),le(t.$$.fragment),r=k(),u=f("div"),o&&o.c(),B(u,"class","ion-page"),B(u,"id","main"),c(e,"content-id","main")},m(s,v){D(s,l,v),i(l,e),ie(t,e,null),i(e,r),i(e,u),o&&o.m(u,null),m=!0},p(s,[v]){o&&o.p&&(!m||v&1)&&ve(o,p,s,s[0],m?ge(p,s[0],v,null):be(s[0]),null)},i(s){m||(E(t.$$.fragment,s),E(o,s),m=!0)},o(s){P(t.$$.fragment,s),P(o,s),m=!1},d(s){s&&A(l),se(t),o&&o.d(s)}}}function Ve(n,l,e){let{$$slots:t={},$$scope:r}=l;return n.$$set=u=>{"$$scope"in u&&e(0,r=u.$$scope)},[r,t]}class tt extends ee{constructor(l){super(),te(this,l,Ve,Ue,ne,{})}}export{tt as default};