import"./index.91186ebc.js";import{m as c}from"./overlays-ab6211c7.d1079922.js";const i={create:t=>Promise.resolve(i.__create(t.component,t)),__create:(t,e)=>{const o=document.createElement("div"),a="id"+Date.now();o.id=a;const s=document.createElement("ion-modal");e.cssClass&&(Array.isArray(e.cssClass)?e.cssClass.forEach(r=>{s.classList.add(r)}):s.classList.add(e.cssClass));let n=document.createElement("div");Object.keys(e).filter(r=>!["component","componentProps"].includes(r)).forEach(r=>{s[r]=e[r]}),o.appendChild(s),s.appendChild(n),document.body.appendChild(o);const d=new t({target:n,props:e.componentProps});return s.onDidDismiss().then(()=>{d.$destroy(),o.remove()}),s},dismiss:(t,e,o)=>c.dismiss(t,e),getTop:()=>c.getTop()};export{i as m};
