import{S as w,i as b,s as V,F as S,e as _,j as x,d as f,G as C,H as k,I as H,o as D,W as I,X as T,p as y,Y as h,h as d,B as v,y as L,D as q,a as W,k as M,m as P,q as U,b as p,n as j}from"./index.ec81be64.js";import{b as B,g as F}from"./index.65b24fea.js";import{S as G}from"./supabase.data.service.f216918f.js";import"./BehaviorSubject.b47b3d16.js";import"./network.service.bed67e72.js";import"./overlays-ab6211c7.e870ed74.js";function O(r){const e=r-1;return e*e*e+1}function g(r,{delay:e=0,duration:n=400,easing:o=O,x:t=0,y:i=0,opacity:s=0}={}){const a=getComputedStyle(r),c=+a.opacity,u=a.transform==="none"?"":a.transform,l=c*(1-s);return{delay:e,duration:n,easing:o,css:(m,E)=>`
			transform: ${u} translate(${(1-m)*t}px, ${(1-m)*i}px);
			opacity: ${c-l*E}`}}function R(r){let e,n,o,t;const i=r[5].default,s=S(i,r,r[4],null);return{c(){e=_("div"),s&&s.c(),x(e,"class","ion-page")},m(a,c){f(a,e,c),s&&s.m(e,null),t=!0},p(a,[c]){s&&s.p&&(!t||c&16)&&C(s,i,a,a[4],t?H(i,a[4],c,null):k(a[4]),null)},i(a){t||(D(s,a),I(()=>{o&&o.end(1),n=T(e,g,{x:1e3,duration:300}),n.start()}),t=!0)},o(a){y(s,a),n&&n.invalidate(),o=h(e,g,{x:-1e3,duration:300}),t=!1},d(a){a&&d(e),s&&s.d(a),a&&o&&o.end()}}}function X(r,e,n){let o;v(r,B,l=>n(6,o=l));let{$$slots:t={},$$scope:i}=e,{ionViewWillEnter:s=()=>{}}=e,{ionViewDidEnter:a=()=>{}}=e,{ionViewWillLeave:c=()=>{}}=e,{ionViewDidLeave:u=()=>{}}=e;return s(),o(()=>(c(),!0)),L(()=>{a()}),q(()=>{u()}),r.$$set=l=>{"ionViewWillEnter"in l&&n(0,s=l.ionViewWillEnter),"ionViewDidEnter"in l&&n(1,a=l.ionViewDidEnter),"ionViewWillLeave"in l&&n(2,c=l.ionViewWillLeave),"ionViewDidLeave"in l&&n(3,u=l.ionViewDidLeave),"$$scope"in l&&n(4,i=l.$$scope)},[s,a,c,u,i,t]}class Y extends w{constructor(e){super(),b(this,e,X,R,V,{ionViewWillEnter:0,ionViewDidEnter:1,ionViewWillLeave:2,ionViewDidLeave:3})}}function z(r){let e,n,o;return{c(){e=_("ion-header"),e.innerHTML=`<ion-toolbar><ion-buttons slot="start"><ion-menu-button></ion-menu-button></ion-buttons> 
      <ion-title>Diet Tracker</ion-title></ion-toolbar>`,n=W(),o=_("ion-content"),o.textContent="Landing Page Here...",p(e,"translucent","true"),p(o,"class","ion-padding")},m(t,i){f(t,e,i),f(t,n,i),f(t,o,i)},p:j,d(t){t&&d(e),t&&d(n),t&&d(o)}}}function A(r){let e,n,o;return n=new Y({props:{$$slots:{default:[z]},$$scope:{ctx:r}}}),{c(){e=W(),M(n.$$.fragment),document.title="Diet Tracker"},m(t,i){f(t,e,i),P(n,t,i),o=!0},p(t,[i]){const s={};i&4&&(s.$$scope={dirty:i,ctx:t}),n.$set(s)},i(t){o||(D(n.$$.fragment,t),o=!0)},o(t){y(n.$$.fragment,t),o=!1},d(t){t&&d(e),U(n,t)}}}function J(r,e,n){let o;v(r,F,i=>n(0,o=i));const t=G.getInstance();return L(async()=>{console.log("*** index.svelte page");const{data:i,error:s}=await t.load_today();if(console.log("*** load_today data",i),i&&i.id){const a=i.id;o("/day/[id]",{id:a})}else o("/day/[id]",{id:"new"})}),[]}class te extends w{constructor(e){super(),b(this,e,J,A,V,{})}}export{te as default};
