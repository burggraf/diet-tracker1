import{S as ee,i as te,s as ne,e as re,a as D,b as f,c as k,t as j,d as u,n as R,f as o,l as U,g as A,h as le,j as C,k as F,m as oe,o as ae,p as H,q as B,r as se,u as ce,v as ue,w as W,x as fe,y as me,z as pe,A as _e,B as de,C as ge,D as ve,E as be}from"./index.31ee2d52.js";import{c as X}from"./user.store.8187fdff.js";import{c as he,b as ke,s as ze,i as ye}from"./index.6a8fe8ef.js";import{L as $e,t as Se}from"./Login.d056ecb3.js";import{S as we}from"./supabase.auth.service.8e18c37e.js";import{S as Oe,N as Ce}from"./supabase.data.service.9125819f.js";import{g as Le,i as Me}from"./index.7935ccda.js";import{s as qe}from"./alert.9981155f.js";import"./controllers.bd7db38a.js";import"./loadingMessage.36d4c671.js";import"./BehaviorSubject.c0dd683e.js";const je="diet-tracker",De="0.4.5",Ae="module",Ie={dev:"vite --port 8100 --host 0.0.0.0",build:"vite build && vite build --ssr","build:client":"vite build","build:server":"vite build  --ssr",preview:"vite preview",check:"svelte-check --tsconfig ./tsconfig.json",routes:"routify"},Ne={"@rollup/plugin-alias":"^3.1.9","@roxi/routify":"^3.0.0-next.93","@sveltejs/vite-plugin-svelte":"^1.0.0-next.30","@tsconfig/svelte":"^2.0.1","babel-loader":"^8.2.5",sass:"^1.52.2",spank:"^2.0.0-5",svelte:"^3.48.0","svelte-check":"^2.2.7","svelte-loader":"^3.1.3","svelte-preprocess":"^4.9.8",tslib:"^2.3.1",typescript:"^4.5.4",vite:"^2.9.9"},Te={"@ionic/core":"^6.1.8","@supabase/supabase-js":"^1.35.7","chart.js":"^3.9.1",routify:"^1.2.7",rxjs:"^7.5.6","vite-plugin-pwa":"^0.12.3"},Ee={pages:"./src/routes"};var E={name:je,private:!0,version:De,type:Ae,scripts:Ie,devDependencies:Ne,dependencies:Te,routify:Ee};function Y(n,l,e){const t=n.slice();return t[15]=l[e],t[17]=e,t}function Z(n){let l,e,t,r,a,m=n[15].title+"",p,i,s,g,y;function v(){return n[7](n[15])}return{c(){l=f("ion-menu-toggle"),e=f("ion-item"),t=f("ion-icon"),r=k(),a=f("ion-label"),p=j(m),s=k(),u(t,"slot","start"),u(t,"icon",n[15].icon),u(t,"class","svelte-1ub1zcr"),u(a,"class","svelte-1ub1zcr"),u(e,"routerdirection","root"),u(e,"lines","none"),u(e,"detail","false"),u(e,"class",i=R(n[2](n[15].url)&&n[15].url.length>1?"active-item":"")+" svelte-1ub1zcr"),u(l,"auto-hide","false")},m(h,z){D(h,l,z),o(l,e),o(e,t),o(e,r),o(e,a),o(a,p),o(l,s),g||(y=U(e,"click",v),g=!0)},p(h,z){n=h,z&4&&i!==(i=R(n[2](n[15].url)&&n[15].url.length>1?"active-item":"")+" svelte-1ub1zcr")&&u(e,"class",i)},d(h){h&&A(l),g=!1,y()}}}function x(n){let l,e=(!n[15].requireLogin||n[0])&&Z(n);return{c(){e&&e.c(),l=re()},m(t,r){e&&e.m(t,r),D(t,l,r)},p(t,r){!t[15].requireLogin||t[0]?e?e.p(t,r):(e=Z(t),e.c(),e.m(l.parentNode,l)):e&&(e.d(1),e=null)},d(t){e&&e.d(t),t&&A(l)}}}function Ue(n){let l,e,t,r,a,m,p,i,s,g,y,v,h,z,_,ie=(E==null?void 0:E.version)+"",P,V,G,J,L,$,I,M=n[1]?"Online":"Offline",N,q,S,T,K;s=new $e({props:{providers:["google","facebook","twitter"],onSignOut:n[6],profileFunction:Fe}});let w=n[4],b=[];for(let c=0;c<w.length;c+=1)b[c]=x(Y(n,w,c));return{c(){l=f("ion-menu"),e=f("ion-content"),t=f("ion-list"),r=f("h4"),r.innerHTML="<strong>Diet Tracker</strong>",a=k(),m=f("p"),m.textContent="Track your diet across devices.",p=k(),i=f("ion-menu-toggle"),le(s.$$.fragment),g=k();for(let c=0;c<b.length;c+=1)b[c].c();y=k(),v=f("ion-footer"),h=f("u"),h.textContent="clear cache",z=f("br"),_=j("v."),P=j(ie),V=k(),G=f("br"),J=k(),L=f("ion-item"),$=f("ion-label"),I=f("b"),N=j(M),C(r,"margin-top","0px"),C(r,"text-align","center"),C(r,"color","var(--ion-color-primary)"),C(m,"padding-bottom","5px"),C(m,"text-align","center"),C(m,"color","var(--ion-color-medium)"),u(i,"auto-hide","false"),u(t,"id","inbox-list"),u(e,"class","ion-padding svelte-1ub1zcr"),F(h,"class","svelte-1ub1zcr"),u($,"color",q=n[1]?"success":"danger"),u($,"class","svelte-1ub1zcr"),u(L,"class","svelte-1ub1zcr"),u(v,"class","ion-padding"),u(l,"content-id","main"),u(l,"menu-id","mainmenu"),u(l,"class","svelte-1ub1zcr")},m(c,O){D(c,l,O),o(l,e),o(e,t),o(t,r),o(t,a),o(t,m),o(t,p),o(t,i),oe(s,i,null),o(t,g);for(let d=0;d<b.length;d+=1)b[d].m(t,null);o(l,y),o(l,v),o(v,h),o(v,z),o(v,_),o(v,P),o(v,V),o(v,G),o(v,J),o(v,L),o(L,$),o($,I),o(I,N),S=!0,T||(K=[U(h,"click",n[8]),U(L,"click",n[9])],T=!0)},p(c,[O]){if(O&53){w=c[4];let d;for(d=0;d<w.length;d+=1){const Q=Y(c,w,d);b[d]?b[d].p(Q,O):(b[d]=x(Q),b[d].c(),b[d].m(t,null))}for(;d<b.length;d+=1)b[d].d(1);b.length=w.length}(!S||O&2)&&M!==(M=c[1]?"Online":"Offline")&&ae(N,M),(!S||O&2&&q!==(q=c[1]?"success":"danger"))&&u($,"color",q)},i(c){S||(H(s.$$.fragment,c),S=!0)},o(c){B(s.$$.fragment,c),S=!1},d(c){c&&A(l),se(s),ce(b,c),T=!1,ue(K)}}}const Fe=()=>{};function He(n,l,e){let t,r;W(n,Le,_=>e(12,t=_)),W(n,Me,_=>e(2,r=_)),Oe.getInstance();let a=null,m,p=!1;const i=Ce.getInstance();fe(()=>{me("mainmenu"),m=we.user.subscribe(async _=>{e(0,a=_),a?(X.set(a),console.log("MENU SET currentUser",a)):X.set(null)}),i.online.subscribe(_=>{console.log("got online:",_),e(1,p=_)})}),pe(()=>{m.unsubscribe()});const s=[{title:"Calendar",url:"/calendar",icon:he,requireLogin:!0},{title:"Charts",url:"/chart",icon:ke,requireLogin:!0},{title:"Settings",url:"/settings",icon:ze,requireLogin:!0},{title:"Info",url:"/info",icon:ye,requireLogin:!1}],g=_=>{t(_.url),_e.close("mainmenu")};return[a,p,r,i,s,g,()=>{localStorage.clear(),window.location.href="/"},_=>{g(_)},()=>{localStorage.clear()},async _=>{await qe({header:"Manually set online status",message:`Force online status to <b>${p?"Offline":"Online"}</b>?`,okHander:async()=>{i.forceOnlineValue(!p),Se(`Online status set to: <b>${p?"Online":"Offline"}</b>`,p?"success":"danger")}})}]}class Be extends ee{constructor(l){super(),te(this,l,He,Ue,ne,{})}}function Pe(n){let l,e,t,r,a,m;t=new Be({});const p=n[1].default,i=de(p,n,n[0],null);return{c(){l=f("ion-app"),e=f("ion-split-pane"),le(t.$$.fragment),r=k(),a=f("div"),i&&i.c(),F(a,"class","ion-page"),F(a,"id","main"),u(e,"content-id","main")},m(s,g){D(s,l,g),o(l,e),oe(t,e,null),o(e,r),o(e,a),i&&i.m(a,null),m=!0},p(s,[g]){i&&i.p&&(!m||g&1)&&ge(i,p,s,s[0],m?be(p,s[0],g,null):ve(s[0]),null)},i(s){m||(H(t.$$.fragment,s),H(i,s),m=!0)},o(s){B(t.$$.fragment,s),B(i,s),m=!1},d(s){s&&A(l),se(t),i&&i.d(s)}}}function Ve(n,l,e){let{$$slots:t={},$$scope:r}=l;return n.$$set=a=>{"$$scope"in a&&e(0,r=a.$$scope)},[r,t]}class tt extends ee{constructor(l){super(),te(this,l,Ve,Pe,ne,{})}}export{tt as default};
