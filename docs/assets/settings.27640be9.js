import{S as m,i as b,s as d,e as l,a as f,b as p,d as r,n as c,h as u,B as S,D as _}from"./index.bb73b6bc.js";import{S as g}from"./supabase.data.service.d27de8a6.js";import{g as D}from"./index.80fe8920.js";import"./BehaviorSubject.0ddadc7e.js";import"./network.service.ec896e6d.js";import"./overlays-ab6211c7.bfe5cf67.js";function x(i){let e,o,n;return{c(){e=l("ion-header"),e.innerHTML=`<ion-toolbar><ion-buttons slot="start"><ion-menu-button></ion-menu-button></ion-buttons> 
		<ion-title>Settings</ion-title></ion-toolbar>`,o=f(),n=l("ion-content"),n.textContent="settings...",p(e,"translucent","true"),p(n,"class","ion-padding")},m(t,s){r(t,e,s),r(t,o,s),r(t,n,s)},p:c,i:c,o:c,d(t){t&&u(e),t&&u(o),t&&u(n)}}}function y(i,e,o){S(i,D,a=>o(1,a));const n=g.getInstance();let t;const s=n.getDataSubscription("days").subscribe(a=>{t=a,console.log("*** days",t)});return _(()=>{s.unsubscribe()}),[]}class H extends m{constructor(e){super(),b(this,e,y,x,d,{})}}export{H as default};