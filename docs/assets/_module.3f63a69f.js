import{S as ee,i as te,s as ne,e as re,a as j,b as f,c as k,t as D,d as u,n as R,f as o,l as U,g as A,h as le,j as M,k as F,m as oe,o as ae,p as H,q as B,r as se,u as ce,v as ue,w as W,x as fe,y as me,z as pe,A as _e,B as de,C as ve,D as ge,E as be}from"./index.96f83d63.js";import{c as X}from"./user.store.362cd591.js";import{c as he,s as ke,i as ze}from"./index.f1a9933f.js";import{L as ye,t as $e}from"./Login.43366ad2.js";import{S as Se}from"./supabase.auth.service.3ddbb23b.js";import{S as we,N as Oe}from"./supabase.data.service.83cdb649.js";import{g as Me,i as Ce}from"./index.032b7884.js";import{s as Le}from"./alert.5e81abcc.js";import"./controllers.d245880a.js";import"./overlays-ab6211c7.484f3bb7.js";import"./loadingMessage.74ebf756.js";import"./BehaviorSubject.c6630b10.js";const qe="diet-tracker",De="0.2.4",je="module",Ae={dev:"vite --port 8100 --host 0.0.0.0",build:"vite build && vite build --ssr","build:client":"vite build","build:server":"vite build  --ssr",preview:"vite preview",check:"svelte-check --tsconfig ./tsconfig.json",routes:"routify"},Ie={"@rollup/plugin-alias":"^3.1.9","@roxi/routify":"^3.0.0-next.93","@sveltejs/vite-plugin-svelte":"^1.0.0-next.30","@tsconfig/svelte":"^2.0.1","babel-loader":"^8.2.5",sass:"^1.52.2",spank:"^2.0.0-5",svelte:"^3.48.0","svelte-check":"^2.2.7","svelte-loader":"^3.1.3","svelte-preprocess":"^4.9.8",tslib:"^2.3.1",typescript:"^4.5.4",vite:"^2.9.9"},Ne={"@ionic/core":"^6.1.8","@supabase/supabase-js":"^1.35.7",routify:"^1.2.7",rxjs:"^7.5.6","vite-plugin-pwa":"^0.12.3"},Te={pages:"./src/routes"};var E={name:qe,private:!0,version:De,type:je,scripts:Ae,devDependencies:Ie,dependencies:Ne,routify:Te};function Y(n,l,e){const t=n.slice();return t[15]=l[e],t[17]=e,t}function Z(n){let l,e,t,r,a,m=n[15].title+"",p,i,s,v,y;function g(){return n[7](n[15])}return{c(){l=f("ion-menu-toggle"),e=f("ion-item"),t=f("ion-icon"),r=k(),a=f("ion-label"),p=D(m),s=k(),u(t,"slot","start"),u(t,"icon",n[15].icon),u(t,"class","svelte-1ub1zcr"),u(a,"class","svelte-1ub1zcr"),u(e,"routerdirection","root"),u(e,"lines","none"),u(e,"detail","false"),u(e,"class",i=R(n[2](n[15].url)&&n[15].url.length>1?"active-item":"")+" svelte-1ub1zcr"),u(l,"auto-hide","false")},m(h,z){j(h,l,z),o(l,e),o(e,t),o(e,r),o(e,a),o(a,p),o(l,s),v||(y=U(e,"click",g),v=!0)},p(h,z){n=h,z&4&&i!==(i=R(n[2](n[15].url)&&n[15].url.length>1?"active-item":"")+" svelte-1ub1zcr")&&u(e,"class",i)},d(h){h&&A(l),v=!1,y()}}}function x(n){let l,e=(!n[15].requireLogin||n[0])&&Z(n);return{c(){e&&e.c(),l=re()},m(t,r){e&&e.m(t,r),j(t,l,r)},p(t,r){!t[15].requireLogin||t[0]?e?e.p(t,r):(e=Z(t),e.c(),e.m(l.parentNode,l)):e&&(e.d(1),e=null)},d(t){e&&e.d(t),t&&A(l)}}}function Ee(n){let l,e,t,r,a,m,p,i,s,v,y,g,h,z,_,ie=(E==null?void 0:E.version)+"",P,V,G,J,C,$,I,L=n[1]?"Online":"Offline",N,q,S,T,K;s=new ye({props:{providers:["google","facebook","twitter"],onSignOut:n[6],profileFunction:Ue}});let w=n[4],b=[];for(let c=0;c<w.length;c+=1)b[c]=x(Y(n,w,c));return{c(){l=f("ion-menu"),e=f("ion-content"),t=f("ion-list"),r=f("h4"),r.innerHTML="<strong>Diet Tracker</strong>",a=k(),m=f("p"),m.textContent="Track your diet across devices.",p=k(),i=f("ion-menu-toggle"),le(s.$$.fragment),v=k();for(let c=0;c<b.length;c+=1)b[c].c();y=k(),g=f("ion-footer"),h=f("u"),h.textContent="clear cache",z=f("br"),_=D("v."),P=D(ie),V=k(),G=f("br"),J=k(),C=f("ion-item"),$=f("ion-label"),I=f("b"),N=D(L),M(r,"margin-top","0px"),M(r,"text-align","center"),M(r,"color","var(--ion-color-primary)"),M(m,"padding-bottom","5px"),M(m,"text-align","center"),M(m,"color","var(--ion-color-medium)"),u(i,"auto-hide","false"),u(t,"id","inbox-list"),u(e,"class","ion-padding svelte-1ub1zcr"),F(h,"class","svelte-1ub1zcr"),u($,"color",q=n[1]?"success":"danger"),u($,"class","svelte-1ub1zcr"),u(C,"class","svelte-1ub1zcr"),u(g,"class","ion-padding"),u(l,"content-id","main"),u(l,"menu-id","mainmenu"),u(l,"class","svelte-1ub1zcr")},m(c,O){j(c,l,O),o(l,e),o(e,t),o(t,r),o(t,a),o(t,m),o(t,p),o(t,i),oe(s,i,null),o(t,v);for(let d=0;d<b.length;d+=1)b[d].m(t,null);o(l,y),o(l,g),o(g,h),o(g,z),o(g,_),o(g,P),o(g,V),o(g,G),o(g,J),o(g,C),o(C,$),o($,I),o(I,N),S=!0,T||(K=[U(h,"click",n[8]),U(C,"click",n[9])],T=!0)},p(c,[O]){if(O&53){w=c[4];let d;for(d=0;d<w.length;d+=1){const Q=Y(c,w,d);b[d]?b[d].p(Q,O):(b[d]=x(Q),b[d].c(),b[d].m(t,null))}for(;d<b.length;d+=1)b[d].d(1);b.length=w.length}(!S||O&2)&&L!==(L=c[1]?"Online":"Offline")&&ae(N,L),(!S||O&2&&q!==(q=c[1]?"success":"danger"))&&u($,"color",q)},i(c){S||(H(s.$$.fragment,c),S=!0)},o(c){B(s.$$.fragment,c),S=!1},d(c){c&&A(l),se(s),ce(b,c),T=!1,ue(K)}}}const Ue=()=>{};function Fe(n,l,e){let t,r;W(n,Me,_=>e(12,t=_)),W(n,Ce,_=>e(2,r=_)),we.getInstance();let a=null,m,p=!1;const i=Oe.getInstance();fe(()=>{me("mainmenu"),m=Se.user.subscribe(async _=>{e(0,a=_),a?(X.set(a),console.log("MENU SET currentUser",a)):X.set(null)}),i.online.subscribe(_=>{console.log("got online:",_),e(1,p=_)})}),pe(()=>{m.unsubscribe()});const s=[{title:"Calendar",url:"/calendar",icon:he,requireLogin:!0},{title:"Settings",url:"/settings",icon:ke,requireLogin:!0},{title:"Info",url:"/info",icon:ze,requireLogin:!1}],v=_=>{t(_.url),_e.close("mainmenu")};return[a,p,r,i,s,v,()=>{localStorage.clear(),window.location.href="/"},_=>{v(_)},()=>{localStorage.clear()},async _=>{await Le({header:"Manually set online status",message:`Force online status to <b>${p?"Offline":"Online"}</b>?`,okHander:async()=>{i.forceOnlineValue(!p),$e(`Online status set to: <b>${p?"Online":"Offline"}</b>`,p?"success":"danger")}})}]}class He extends ee{constructor(l){super(),te(this,l,Fe,Ee,ne,{})}}function Be(n){let l,e,t,r,a,m;t=new He({});const p=n[1].default,i=de(p,n,n[0],null);return{c(){l=f("ion-app"),e=f("ion-split-pane"),le(t.$$.fragment),r=k(),a=f("div"),i&&i.c(),F(a,"class","ion-page"),F(a,"id","main"),u(e,"content-id","main")},m(s,v){j(s,l,v),o(l,e),oe(t,e,null),o(e,r),o(e,a),i&&i.m(a,null),m=!0},p(s,[v]){i&&i.p&&(!m||v&1)&&ve(i,p,s,s[0],m?be(p,s[0],v,null):ge(s[0]),null)},i(s){m||(H(t.$$.fragment,s),H(i,s),m=!0)},o(s){B(t.$$.fragment,s),B(i,s),m=!1},d(s){s&&A(l),se(t),i&&i.d(s)}}}function Pe(n,l,e){let{$$slots:t={},$$scope:r}=l;return n.$$set=a=>{"$$scope"in a&&e(0,r=a.$$scope)},[r,t]}class tt extends ee{constructor(l){super(),te(this,l,Pe,Be,ne,{})}}export{tt as default};
