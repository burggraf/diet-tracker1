import{ab as f,ac as D,ad as M}from"./index.82c33b84.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const k=(o,h,m,g,p)=>{const r=o.ownerDocument.defaultView,c=f(o),X=t=>{const{startX:e}=t;return c?e>=r.innerWidth-50:e<=50},i=t=>c?-t.deltaX:t.deltaX,w=t=>c?-t.velocityX:t.velocityX;return D({el:o,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:t=>X(t)&&h(),onStart:m,onMove:t=>{const e=i(t)/r.innerWidth;g(e)},onEnd:t=>{const n=i(t),e=r.innerWidth,s=n/e,a=w(t),v=e/2,l=a>=0&&(a>.2||n>v),d=(l?1-s:s)*e;let u=0;if(d>5){const y=d/Math.abs(a);u=Math.min(y,540)}p(l,s<=0?.01:M(0,s,.9999),u)}})};export{k as createSwipeBackGesture};
