import{R as s,T as l,U as d}from"./index.6e62adb1.js";var i=function(n){return{create:function(e){return c(n,e)},dismiss:function(e,r,t){return v(document,e,r,n,t)},getTop:function(){return s(this,void 0,void 0,function(){return l(this,function(e){return[2,u(document,n)]})})}}},g=i("ion-alert"),h=i("ion-loading"),w=i("ion-modal"),O=i("ion-toast"),c=function(n,e){return typeof window!="undefined"&&typeof window.customElements!="undefined"?window.customElements.whenDefined(n).then(function(){var r=document.createElement(n);return r.classList.add("overlay-hidden"),Object.assign(r,Object.assign(Object.assign({},e),{hasController:!0})),y(document).appendChild(r),new Promise(function(t){return d(r,t)})}):Promise.resolve()},f=function(n){return n.classList.contains("overlay-hidden")},v=function(n,e,r,t,o){var a=u(n,t,o);return a?a.dismiss(e,r):Promise.reject("overlay does not exist")},m=function(n,e){return e===void 0&&(e="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"),Array.from(n.querySelectorAll(e)).filter(function(r){return r.overlayIndex>0})},u=function(n,e,r){var t=m(n,e).filter(function(o){return!f(o)});return r===void 0?t[t.length-1]:t.find(function(o){return o.id===r})},y=function(n){return n.querySelector("ion-app")||n.body};export{g as a,h as l,w as m,O as t};
