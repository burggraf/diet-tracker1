import{T as u,U as l,V as d}from"./index.c534e146.js";var i=function(n){return{create:function(e){return f(n,e)},dismiss:function(e,r,t){return m(document,e,r,n,t)},getTop:function(){return u(this,void 0,void 0,function(){return l(this,function(e){return[2,s(document,n)]})})}}},h=i("ion-alert"),c=i("ion-loading"),w=i("ion-modal"),O=i("ion-toast"),f=function(n,e){return typeof window!="undefined"&&typeof window.customElements!="undefined"?window.customElements.whenDefined(n).then(function(){var r=document.createElement(n);return r.classList.add("overlay-hidden"),Object.assign(r,Object.assign(Object.assign({},e),{hasController:!0})),p(document).appendChild(r),new Promise(function(t){return d(r,t)})}):Promise.resolve()},v=function(n){return n.classList.contains("overlay-hidden")},m=function(n,e,r,t,o){var a=s(n,t,o);return a?a.dismiss(e,r):Promise.reject("overlay does not exist")},y=function(n,e){return e===void 0&&(e="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"),Array.from(n.querySelectorAll(e)).filter(function(r){return r.overlayIndex>0})},s=function(n,e,r){var t=y(n,e).filter(function(o){return!v(o)});return r===void 0?t[t.length-1]:t.find(function(o){return o.id===r})},p=function(n){return n.querySelector("ion-app")||n.body};const C=async(n="Loading...")=>{const e=await c.create({message:n});return e.present(),e};export{h as a,C as l,w as m,O as t};
