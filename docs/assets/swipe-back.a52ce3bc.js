import{a9 as f,aa as D,ab as M}from"./index.412c86e6.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const k=(o,h,m,g,p)=>{const r=o.ownerDocument.defaultView,c=f(o),X=t=>{const{startX:e}=t;return c?e>=r.innerWidth-50:e<=50},i=t=>c?-t.deltaX:t.deltaX,w=t=>c?-t.velocityX:t.velocityX;return D({el:o,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:t=>X(t)&&h(),onStart:m,onMove:t=>{const e=i(t)/r.innerWidth;g(e)},onEnd:t=>{const n=i(t),e=r.innerWidth,s=n/e,a=w(t),v=e/2,l=a>=0&&(a>.2||n>v),u=(l?1-s:s)*e;let d=0;if(u>5){const y=u/Math.abs(a);d=Math.min(y,540)}p(l,s<=0?.01:M(0,s,.9999),d)}})};export{k as createSwipeBackGesture};
