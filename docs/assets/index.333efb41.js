import{S as d,i as f,s as _,c as p,h as $,a as i,m as g,p as b,q as x,g as r,r as S,w as y,x as v,b as l,d as u,H as w}from"./index.9f230ae0.js";import{I as D}from"./IonPage.888a1e20.js";import{g as H}from"./index.ee4352dc.js";import{S as I}from"./supabase.data.service.291be76c.js";import"./BehaviorSubject.0957f739.js";import"./loadingMessage.520ab183.js";import"./overlays-ab6211c7.280b2a75.js";function T(s){let a,n,o;return{c(){a=l("ion-header"),a.innerHTML=`<ion-toolbar><ion-buttons slot="start"><ion-menu-button></ion-menu-button></ion-buttons> 
      <ion-title>Diet Tracker</ion-title></ion-toolbar>`,n=p(),o=l("ion-content"),o.textContent="Landing Page Here...",u(a,"translucent","true"),u(o,"class","ion-padding")},m(t,e){i(t,a,e),i(t,n,e),i(t,o,e)},p:w,d(t){t&&r(a),t&&r(n),t&&r(o)}}}function k(s){let a,n,o;return n=new D({props:{$$slots:{default:[T]},$$scope:{ctx:s}}}),{c(){a=p(),$(n.$$.fragment),document.title="Diet Tracker"},m(t,e){i(t,a,e),g(n,t,e),o=!0},p(t,[e]){const c={};e&4&&(c.$$scope={dirty:e,ctx:t}),n.$set(c)},i(t){o||(b(n.$$.fragment,t),o=!0)},o(t){x(n.$$.fragment,t),o=!1},d(t){t&&r(a),S(n,t)}}}function q(s,a,n){let o;y(s,H,e=>n(0,o=e));const t=I.getInstance();return v(async()=>{console.log("*** index.svelte page");const{data:e,error:c}=await t.load_today();if(console.log("*** load_today data",e),e&&e.id){const m=e.id;o("/day/[id]",{id:m})}else o("/day/[id]",{id:"new"})}),[]}class z extends d{constructor(a){super(),f(this,a,q,k,_,{})}}export{z as default};
