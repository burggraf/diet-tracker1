import{S as b,i as g,s as D,F as y,e as d,j as E,d as f,G as C,H as k,I as x,o as p,W as H,X as S,p as L,Y as T,h as _,B as h,y as q,D as I,a as v,k as M,m as P,q as U,b as w,n as j}from"./index.bb73b6bc.js";import{b as B}from"./index.80fe8920.js";function F(r){const e=r-1;return e*e*e+1}function V(r,{delay:e=0,duration:n=400,easing:o=F,x:t=0,y:a=0,opacity:s=0}={}){const i=getComputedStyle(r),u=+i.opacity,c=i.transform==="none"?"":i.transform,l=u*(1-s);return{delay:e,duration:n,easing:o,css:(m,W)=>`
			transform: ${c} translate(${(1-m)*t}px, ${(1-m)*a}px);
			opacity: ${u-l*W}`}}function G(r){let e,n,o,t;const a=r[5].default,s=y(a,r,r[4],null);return{c(){e=d("div"),s&&s.c(),E(e,"class","ion-page")},m(i,u){f(i,e,u),s&&s.m(e,null),t=!0},p(i,[u]){s&&s.p&&(!t||u&16)&&C(s,a,i,i[4],t?x(a,i[4],u,null):k(i[4]),null)},i(i){t||(p(s,i),H(()=>{o&&o.end(1),n=S(e,V,{x:1e3,duration:300}),n.start()}),t=!0)},o(i){L(s,i),n&&n.invalidate(),o=T(e,V,{x:-1e3,duration:300}),t=!1},d(i){i&&_(e),s&&s.d(i),i&&o&&o.end()}}}function O(r,e,n){let o;h(r,B,l=>n(6,o=l));let{$$slots:t={},$$scope:a}=e,{ionViewWillEnter:s=()=>{}}=e,{ionViewDidEnter:i=()=>{}}=e,{ionViewWillLeave:u=()=>{}}=e,{ionViewDidLeave:c=()=>{}}=e;return s(),o(()=>(u(),!0)),q(()=>{i()}),I(()=>{c()}),r.$$set=l=>{"ionViewWillEnter"in l&&n(0,s=l.ionViewWillEnter),"ionViewDidEnter"in l&&n(1,i=l.ionViewDidEnter),"ionViewWillLeave"in l&&n(2,u=l.ionViewWillLeave),"ionViewDidLeave"in l&&n(3,c=l.ionViewDidLeave),"$$scope"in l&&n(4,a=l.$$scope)},[s,i,u,c,a,t]}class R extends b{constructor(e){super(),g(this,e,O,G,D,{ionViewWillEnter:0,ionViewDidEnter:1,ionViewWillLeave:2,ionViewDidLeave:3})}}function X(r){let e,n,o;return{c(){e=d("ion-header"),e.innerHTML=`<ion-toolbar><ion-buttons slot="start"><ion-menu-button></ion-menu-button></ion-buttons> 
      <ion-title>Diet Tracker</ion-title></ion-toolbar>`,n=v(),o=d("ion-content"),o.textContent="Landing Page Here...",w(e,"translucent","true"),w(o,"class","ion-padding")},m(t,a){f(t,e,a),f(t,n,a),f(t,o,a)},p:j,d(t){t&&_(e),t&&_(n),t&&_(o)}}}function Y(r){let e,n,o;return n=new R({props:{$$slots:{default:[X]},$$scope:{ctx:r}}}),{c(){e=v(),M(n.$$.fragment),document.title="Diet Tracker"},m(t,a){f(t,e,a),P(n,t,a),o=!0},p(t,[a]){const s={};a&1&&(s.$$scope={dirty:a,ctx:t}),n.$set(s)},i(t){o||(p(n.$$.fragment,t),o=!0)},o(t){L(n.$$.fragment,t),o=!1},d(t){t&&_(e),U(n,t)}}}class J extends b{constructor(e){super(),g(this,e,null,Y,D,{})}}export{J as default};
