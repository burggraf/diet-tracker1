import{S as g,i as b,s as L,F as y,e as d,j as E,d as f,G as C,H as x,I as P,o as p,V as H,W as S,p as D,X as h,h as _,B as k,y as q,D as I,a as v,k as M,m as U,q as j,b as w,n as B}from"./index.c4920b7e.js";import{b as F}from"./index.8ea8d20a.js";function G(l){const e=l-1;return e*e*e+1}function V(l,{delay:e=0,duration:n=400,easing:o=G,x:t=0,y:s=0,opacity:a=0}={}){const i=getComputedStyle(l),u=+i.opacity,c=i.transform==="none"?"":i.transform,r=u*(1-a);return{delay:e,duration:n,easing:o,css:(m,W)=>`
			transform: ${c} translate(${(1-m)*t}px, ${(1-m)*s}px);
			opacity: ${u-r*W}`}}function O(l){let e,n,o,t;const s=l[5].default,a=y(s,l,l[4],null);return{c(){e=d("div"),a&&a.c(),E(e,"class","ion-page")},m(i,u){f(i,e,u),a&&a.m(e,null),t=!0},p(i,[u]){a&&a.p&&(!t||u&16)&&C(a,s,i,i[4],t?P(s,i[4],u,null):x(i[4]),null)},i(i){t||(p(a,i),H(()=>{o&&o.end(1),n=S(e,V,{x:1e3,duration:300}),n.start()}),t=!0)},o(i){D(a,i),n&&n.invalidate(),o=h(e,V,{x:-1e3,duration:300}),t=!1},d(i){i&&_(e),a&&a.d(i),i&&o&&o.end()}}}function R(l,e,n){let o;k(l,F,r=>n(6,o=r));let{$$slots:t={},$$scope:s}=e,{ionViewWillEnter:a=()=>{}}=e,{ionViewDidEnter:i=()=>{}}=e,{ionViewWillLeave:u=()=>{}}=e,{ionViewDidLeave:c=()=>{}}=e;return a(),o(()=>(u(),!0)),q(()=>{i()}),I(()=>{c()}),l.$$set=r=>{"ionViewWillEnter"in r&&n(0,a=r.ionViewWillEnter),"ionViewDidEnter"in r&&n(1,i=r.ionViewDidEnter),"ionViewWillLeave"in r&&n(2,u=r.ionViewWillLeave),"ionViewDidLeave"in r&&n(3,c=r.ionViewDidLeave),"$$scope"in r&&n(4,s=r.$$scope)},[a,i,u,c,s,t]}class T extends g{constructor(e){super(),b(this,e,R,O,L,{ionViewWillEnter:0,ionViewDidEnter:1,ionViewWillLeave:2,ionViewDidLeave:3})}}function X(l){let e,n,o;return{c(){e=d("ion-header"),e.innerHTML=`<ion-toolbar><ion-buttons slot="start"><ion-menu-button></ion-menu-button></ion-buttons> 
      <ion-title>Landing Page</ion-title></ion-toolbar>`,n=v(),o=d("ion-content"),o.textContent="Landing Page Here...",w(e,"translucent","true"),w(o,"class","ion-padding")},m(t,s){f(t,e,s),f(t,n,s),f(t,o,s)},p:B,d(t){t&&_(e),t&&_(n),t&&_(o)}}}function z(l){let e,n,o;return n=new T({props:{$$slots:{default:[X]},$$scope:{ctx:l}}}),{c(){e=v(),M(n.$$.fragment),document.title="Landing Page"},m(t,s){f(t,e,s),U(n,t,s),o=!0},p(t,[s]){const a={};s&1&&(a.$$scope={dirty:s,ctx:t}),n.$set(a)},i(t){o||(p(n.$$.fragment,t),o=!0)},o(t){D(n.$$.fragment,t),o=!1},d(t){t&&_(e),j(n,t)}}}class K extends g{constructor(e){super(),b(this,e,null,z,L,{})}}export{K as default};
