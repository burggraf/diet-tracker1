var i=Object.defineProperty;var s=(t,n,e)=>n in t?i(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var o=(t,n,e)=>(s(t,typeof n!="symbol"?n+"":n,e),e);import"./index.27b818bc.js";import{x as a}from"./index.9f95a569.js";import{B as r}from"./BehaviorSubject.ec4d16d0.js";const g=async(t="Loading...")=>{const n=await a.create({message:t});return n.present(),n};class c{constructor(){o(this,"ping",async(n="/ping")=>{fetch(`${window.location.origin}${n}`).then(e=>e.status===200?(console.log(e),!0):(console.error("ping failed",e),!1)).catch(e=>(console.log("fetch error",e),console.log("do something here"),!1))})}static getInstance(){if(this.myInstance===null){this.myInstance=new this,this.myInstance.online=new r(window.navigator.onLine);const n=this.myInstance.online;window.addEventListener("offline",function(e){n.next(!1)}),window.addEventListener("online",function(e){n.next(!0)}),this.myInstance.forceOnlineValue=e=>{n.next(e)}}return this.myInstance}}o(c,"myInstance",null);export{c as N,g as l};
