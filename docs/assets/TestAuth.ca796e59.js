import{S as v,i as S,s as y,b as p,c as h,t as _,d as b,a as c,f,o as x,H as d,g as m,x as $,z as A}from"./index.a41f35f7.js";import{S as T}from"./supabase.auth.service.64277566.js";import"./BehaviorSubject.cf1ddfed.js";function g(l){let s,n,t,o,r,a=JSON.stringify(l[0],null,2)+"",u;return{c(){s=p("ion-header"),s.innerHTML=`<ion-toolbar><ion-buttons slot="start"><ion-menu-button class="svelte-1hrsrfd"></ion-menu-button></ion-buttons> 
      <ion-title>Current User</ion-title></ion-toolbar>`,n=h(),t=p("ion-content"),o=_(`User:
    `),r=p("pre"),u=_(a),b(s,"translucent","true"),b(t,"class","ion-padding")},m(e,i){c(e,s,i),c(e,n,i),c(e,t,i),f(t,o),f(t,r),f(r,u)},p(e,[i]){i&1&&a!==(a=JSON.stringify(e[0],null,2)+"")&&x(u,a)},i:d,o:d,d(e){e&&m(s),e&&m(n),e&&m(t)}}}function C(l,s,n){let t=null,o;return $(()=>{o=T.user.subscribe(r=>{n(0,t=r)})}),A(()=>{o.unsubscribe()}),[t]}class N extends v{constructor(s){super(),S(this,s,C,g,y,{})}}export{N as default};
