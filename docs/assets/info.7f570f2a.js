import{S as j,i as y,s as L,b as p,c as q,d as x,k as w,a as f,f as h,q as g,J as S,p as v,g as _,w as T,I as H,h as A,m as C,H as d,r as D}from"./index.cecdf385.js";import{L as I}from"./Login.ca130273.js";import{c as M}from"./user.store.6af2ecce.js";import"./supabase.auth.service.cf4c9583.js";import"./BehaviorSubject.6b537679.js";import"./controllers.5986b951.js";import"./overlays-ab6211c7.10a3fe6d.js";import"./loadingMessage.0fba27f6.js";import"./index.f1a9933f.js";function U(l){let t,n,e;return n=new I({props:{providers:["google","facebook","twitter"],onSignOut:l[1],profileFunction:O}}),{c(){t=p("div"),A(n.$$.fragment),w(t,"class","grid375 center svelte-qwjb8s")},m(r,u){f(r,t,u),C(n,t,null),e=!0},p:d,i(r){e||(v(n.$$.fragment,r),e=!0)},o(r){g(n.$$.fragment,r),e=!1},d(r){r&&_(t),D(n)}}}function F(l){let t;return{c(){t=p("div"),t.textContent="logged in",w(t,"class","grid500 center svelte-qwjb8s")},m(n,e){f(n,t,e)},p:d,i:d,o:d,d(n){n&&_(t)}}}function J(l){let t,n,e,r,u,i,s,m;const k=[F,U],a=[];function $(o,c){return o[0]?0:1}return i=$(l),s=a[i]=k[i](l),{c(){t=p("ion-header"),t.innerHTML=`<ion-toolbar><ion-buttons slot="start"><ion-menu-button></ion-menu-button></ion-buttons> 
		<ion-title>About Diet Tracker</ion-title></ion-toolbar>`,n=q(),e=p("ion-content"),r=p("div"),r.innerHTML="About Diet Tracker... <br/><br/>",u=q(),s.c(),x(t,"translucent","true"),w(r,"class","grid500 center svelte-qwjb8s"),x(e,"class","ion-padding")},m(o,c){f(o,t,c),f(o,n,c),f(o,e,c),h(e,r),h(e,u),a[i].m(e,null),m=!0},p(o,[c]){let b=i;i=$(o),i===b?a[i].p(o,c):(H(),g(a[b],1,1,()=>{a[b]=null}),S(),s=a[i],s?s.p(o,c):(s=a[i]=k[i](o),s.c()),v(s,1),s.m(e,null))},i(o){m||(v(s),m=!0)},o(o){g(s),m=!1},d(o){o&&_(t),o&&_(n),o&&_(e),a[i].d()}}}const O=()=>{};function z(l,t,n){let e;return T(l,M,u=>n(0,e=u)),[e,()=>{localStorage.clear(),window.location.href="/"}]}class W extends j{constructor(t){super(),y(this,t,z,J,L,{})}}export{W as default};
