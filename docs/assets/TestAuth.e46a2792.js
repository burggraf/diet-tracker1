import{S as v,i as S,s as y,e as p,a as h,t as _,b,d as c,f,z as $,n as d,h as m,y as x,D as A}from"./index.c7d6b215.js";import{S as T}from"./supabase.auth.service.52a8ff3f.js";import"./BehaviorSubject.61e7888d.js";function C(l){let s,n,t,o,r,a=JSON.stringify(l[0],null,2)+"",u;return{c(){s=p("ion-header"),s.innerHTML=`<ion-toolbar><ion-buttons slot="start"><ion-menu-button class="svelte-1hrsrfd"></ion-menu-button></ion-buttons> 
      <ion-title>Current User</ion-title></ion-toolbar>`,n=h(),t=p("ion-content"),o=_(`User:
    `),r=p("pre"),u=_(a),b(s,"translucent","true"),b(t,"class","ion-padding")},m(e,i){c(e,s,i),c(e,n,i),c(e,t,i),f(t,o),f(t,r),f(r,u)},p(e,[i]){i&1&&a!==(a=JSON.stringify(e[0],null,2)+"")&&$(u,a)},i:d,o:d,d(e){e&&m(s),e&&m(n),e&&m(t)}}}function D(l,s,n){let t=null,o;return x(()=>{o=T.user.subscribe(r=>{n(0,t=r)})}),A(()=>{o.unsubscribe()}),[t]}class O extends v{constructor(s){super(),S(this,s,D,C,y,{})}}export{O as default};
