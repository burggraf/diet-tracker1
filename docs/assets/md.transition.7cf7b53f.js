import{ad as m,ac as i}from"./index.c4920b7e.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const E=(b,t)=>{const o="40px",a="0px",r=t.direction==="back",d=t.enteringEl,l=t.leavingEl,s=m(d),c=s.querySelector("ion-toolbar"),n=i();if(n.addElement(s).fill("both").beforeRemoveClass("ion-page-invisible"),r?n.duration(t.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):n.duration(t.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform",`translateY(${o})`,`translateY(${a})`).fromTo("opacity",.01,1),c){const e=i();e.addElement(c),n.addAnimation(e)}if(l&&r){n.duration(t.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const e=i();e.addElement(m(l)).onFinish(g=>{g===1&&e.elements.length>0&&e.elements[0].style.setProperty("display","none")}).fromTo("transform",`translateY(${a})`,`translateY(${o})`).fromTo("opacity",1,0),n.addAnimation(e)}return n};export{E as mdTransitionAnimation};
