import{S as m,i as w,s as V,B as D,b,k as g,a as v,C as E,D as W,E as L,p as y,W as C,X as h,q as S,Y as k,g as q,w as x,x as I,z as U}from"./index.eb52a671.js";import{b as z}from"./index.35f69efb.js";function B(a){const t=a-1;return t*t*t+1}function _(a,{delay:t=0,duration:o=400,easing:l=B,x:r=0,y:f=0,opacity:i=0}={}){const e=getComputedStyle(a),s=+e.opacity,u=e.transform==="none"?"":e.transform,n=s*(1-i);return{delay:t,duration:o,easing:l,css:(c,d)=>`
			transform: ${u} translate(${(1-c)*r}px, ${(1-c)*f}px);
			opacity: ${s-n*d}`}}function M(a){let t,o,l,r;const f=a[5].default,i=D(f,a,a[4],null);return{c(){t=b("div"),i&&i.c(),g(t,"class","ion-page")},m(e,s){v(e,t,s),i&&i.m(t,null),r=!0},p(e,[s]){i&&i.p&&(!r||s&16)&&E(i,f,e,e[4],r?L(f,e[4],s,null):W(e[4]),null)},i(e){r||(y(i,e),C(()=>{l&&l.end(1),o=h(t,_,{x:1e3,duration:300}),o.start()}),r=!0)},o(e){S(i,e),o&&o.invalidate(),l=k(t,_,{x:-1e3,duration:300}),r=!1},d(e){e&&q(t),i&&i.d(e),e&&l&&l.end()}}}function O(a,t,o){let l;x(a,z,n=>o(6,l=n));let{$$slots:r={},$$scope:f}=t,{ionViewWillEnter:i=()=>{}}=t,{ionViewDidEnter:e=()=>{}}=t,{ionViewWillLeave:s=()=>{}}=t,{ionViewDidLeave:u=()=>{}}=t;return i(),l(()=>(s(),!0)),I(()=>{e()}),U(()=>{u()}),a.$$set=n=>{"ionViewWillEnter"in n&&o(0,i=n.ionViewWillEnter),"ionViewDidEnter"in n&&o(1,e=n.ionViewDidEnter),"ionViewWillLeave"in n&&o(2,s=n.ionViewWillLeave),"ionViewDidLeave"in n&&o(3,u=n.ionViewDidLeave),"$$scope"in n&&o(4,f=n.$$scope)},[i,e,s,u,f,r]}class Y extends m{constructor(t){super(),w(this,t,O,M,V,{ionViewWillEnter:0,ionViewDidEnter:1,ionViewWillLeave:2,ionViewDidLeave:3})}}export{Y as I};
