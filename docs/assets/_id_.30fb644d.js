import{S as Se,i as he,s as ye,e as d,a as D,b as _,d as b,f as u,l as W,n as j,h as w,r as De,t as T,z as A,c as ue,B as fe,D as Ce}from"./index.c4928765.js";import{g as Le,p as Oe}from"./index.c62049ee.js";import{A as Fe,D as Ie,o as qe,C as Be,F as Te}from"./index.27d24d2b.js";import{a as ce,s as Pe}from"./alert.83e516ea.js";import{S as Ae}from"./supabase.data.service.17629f50.js";import"./BehaviorSubject.0a9b7b09.js";import"./network.service.24d01c3c.js";function _e(n){let t,e,o,l,a,i,s;return{c(){t=d("ion-button"),e=d("ion-icon"),o=D(),l=d("ion-button"),a=d("ion-icon"),_(e,"slot","icon-only"),_(e,"icon",Fe),_(a,"slot","icon-only"),_(a,"icon",Ie)},m(r,m){b(r,t,m),u(t,e),b(r,o,m),b(r,l,m),u(l,a),i||(s=[W(t,"click",n[5]),W(l,"click",n[8])],i=!0)},p:j,d(r){r&&w(t),r&&w(o),r&&w(l),i=!1,De(s)}}}function de(n){let t,e,o,l,a,i,s;return{c(){t=d("ion-button"),e=d("ion-icon"),o=D(),l=d("ion-button"),a=d("ion-icon"),_(e,"slot","icon-only"),_(e,"icon",qe),_(a,"slot","icon-only"),_(a,"icon",Be)},m(r,m){b(r,t,m),u(t,e),b(r,o,m),b(r,l,m),u(l,a),i||(s=[W(t,"click",n[9]),W(l,"click",n[10])],i=!0)},p:j,d(r){r&&w(t),r&&w(o),r&&w(l),i=!1,De(s)}}}function pe(n){var x,ee,te,ie,le;let t,e,o,l=((x=n[2])==null?void 0:x.id)+"",a,i,s,r,m,c,P,q,B,z,v,g,k,f,S,Q,E=new Date((ee=n[2])==null?void 0:ee.created_at).toLocaleDateString()+"",G,R,H=new Date((te=n[2])==null?void 0:te.created_at).toLocaleTimeString()+"",J,V,X,N=new Date((ie=n[2])==null?void 0:ie.updated_at).toLocaleDateString()+"",K,Y,U=new Date((le=n[2])==null?void 0:le.updated_at).toLocaleTimeString()+"",M,Z,$,h=n[1]==="view"&&me(n),y=n[1]==="edit"&&be(n),C=n[1]==="view"&&we(n),L=n[1]==="edit"&&ke(n),O=n[1]==="edit"&&ve(n),F=n[1]==="view"&&ge(n);return{c(){t=d("ion-card"),e=d("ion-card-header"),o=d("ion-card-subtitle"),a=T(l),i=D(),s=d("ion-card-title"),h&&h.c(),r=D(),y&&y.c(),m=D(),c=d("ion-card-content"),C&&C.c(),P=D(),L&&L.c(),q=D(),B=d("br"),z=D(),v=d("br"),g=D(),O&&O.c(),k=D(),F&&F.c(),f=D(),S=d("br"),Q=T(`
				created: `),G=T(E),R=D(),J=T(H),V=d("br"),X=T(`
				updated: `),K=T(N),Y=D(),M=T(U),Z=D(),$=d("br")},m(p,I){b(p,t,I),u(t,e),u(e,o),u(o,a),u(e,i),u(e,s),h&&h.m(s,null),u(s,r),y&&y.m(s,null),u(t,m),u(t,c),C&&C.m(c,null),u(c,P),L&&L.m(c,null),u(c,q),u(c,B),u(c,z),u(c,v),u(c,g),O&&O.m(c,null),u(c,k),F&&F.m(c,null),u(c,f),u(c,S),u(c,Q),u(c,G),u(c,R),u(c,J),u(c,V),u(c,X),u(c,K),u(c,Y),u(c,M),u(c,Z),u(c,$)},p(p,I){var ne,oe,ae,se,re;I&4&&l!==(l=((ne=p[2])==null?void 0:ne.id)+"")&&A(a,l),p[1]==="view"?h?h.p(p,I):(h=me(p),h.c(),h.m(s,r)):h&&(h.d(1),h=null),p[1]==="edit"?y?y.p(p,I):(y=be(p),y.c(),y.m(s,null)):y&&(y.d(1),y=null),p[1]==="view"?C?C.p(p,I):(C=we(p),C.c(),C.m(c,P)):C&&(C.d(1),C=null),p[1]==="edit"?L?L.p(p,I):(L=ke(p),L.c(),L.m(c,q)):L&&(L.d(1),L=null),p[1]==="edit"?O?O.p(p,I):(O=ve(p),O.c(),O.m(c,k)):O&&(O.d(1),O=null),p[1]==="view"?F?F.p(p,I):(F=ge(p),F.c(),F.m(c,f)):F&&(F.d(1),F=null),I&4&&E!==(E=new Date((oe=p[2])==null?void 0:oe.created_at).toLocaleDateString()+"")&&A(G,E),I&4&&H!==(H=new Date((ae=p[2])==null?void 0:ae.created_at).toLocaleTimeString()+"")&&A(J,H),I&4&&N!==(N=new Date((se=p[2])==null?void 0:se.updated_at).toLocaleDateString()+"")&&A(K,N),I&4&&U!==(U=new Date((re=p[2])==null?void 0:re.updated_at).toLocaleTimeString()+"")&&A(M,U)},d(p){p&&w(t),h&&h.d(),y&&y.d(),C&&C.d(),L&&L.d(),O&&O.d(),F&&F.d()}}}function me(n){var o;let t=((o=n[2])==null?void 0:o.name)+"",e;return{c(){e=T(t)},m(l,a){b(l,e,a)},p(l,a){var i;a&4&&t!==(t=((i=l[2])==null?void 0:i.name)+"")&&A(e,t)},d(l){l&&w(e)}}}function be(n){let t,e,o,l,a;return{c(){t=d("ion-label"),t.textContent="Name:",e=d("ion-input"),_(t,"class","svelte-1bxwl0a"),_(e,"value",o=n[2].name),_(e,"required",""),_(e,"name","name"),_(e,"type","text"),_(e,"class","svelte-1bxwl0a")},m(i,s){b(i,t,s),b(i,e,s),l||(a=W(e,"ionChange",n[3]),l=!0)},p(i,s){s&4&&o!==(o=i[2].name)&&_(e,"value",o)},d(i){i&&w(t),i&&w(e),l=!1,a()}}}function we(n){var o;let t=((o=n[2])==null?void 0:o.description)+"",e;return{c(){e=T(t)},m(l,a){b(l,e,a)},p(l,a){var i;a&4&&t!==(t=((i=l[2])==null?void 0:i.description)+"")&&A(e,t)},d(l){l&&w(e)}}}function ke(n){let t,e,o,l,a;return{c(){t=d("ion-label"),t.textContent="Description:",e=d("ion-input"),_(t,"class","svelte-1bxwl0a"),_(e,"value",o=n[2].description),_(e,"required",""),_(e,"name","description"),_(e,"type","text"),_(e,"class","svelte-1bxwl0a")},m(i,s){b(i,t,s),b(i,e,s),l||(a=W(e,"ionChange",n[3]),l=!0)},p(i,s){s&4&&o!==(o=i[2].description)&&_(e,"value",o)},d(i){i&&w(t),i&&w(e),l=!1,a()}}}function ve(n){let t,e,o,l,a;return{c(){t=d("ion-label"),t.textContent="Price:",e=d("ion-input"),_(t,"class","svelte-1bxwl0a"),_(e,"value",o=n[2].price),_(e,"required",""),_(e,"name","price"),_(e,"type","number"),ue(e,"width","100px"),ue(e,"text-align","right"),_(e,"class","svelte-1bxwl0a")},m(i,s){b(i,t,s),b(i,e,s),l||(a=W(e,"ionChange",n[3]),l=!0)},p(i,s){s&4&&o!==(o=i[2].price)&&_(e,"value",o)},d(i){i&&w(t),i&&w(e),l=!1,a()}}}function ge(n){var l,a;let t,e=((a=(l=n[2])==null?void 0:l.price)==null?void 0:a.toFixed(2))+"",o;return{c(){t=T("price: "),o=T(e)},m(i,s){b(i,t,s),b(i,o,s)},p(i,s){var r,m;s&4&&e!==(e=((m=(r=i[2])==null?void 0:r.price)==null?void 0:m.toFixed(2))+"")&&A(o,e)},d(i){i&&w(t),i&&w(o)}}}function We(n){let t,e,o,l,a,i,s,r,m,c,P,q,B,z,v=n[1]==="view"&&_e(n),g=n[1]==="edit"&&de(n),k=n[2]&&pe(n);return{c(){t=d("ion-header"),e=d("ion-toolbar"),o=d("ion-buttons"),l=d("ion-button"),a=d("ion-icon"),i=D(),s=d("ion-title"),s.textContent="Widget",r=D(),m=d("ion-buttons"),v&&v.c(),c=D(),g&&g.c(),P=D(),q=d("ion-content"),k&&k.c(),_(a,"slot","icon-only"),_(a,"icon",Te),_(o,"slot","start"),_(m,"slot","end"),_(t,"translucent","true"),_(q,"class","ion-padding")},m(f,S){b(f,t,S),u(t,e),u(e,o),u(o,l),u(l,a),u(e,i),u(e,s),u(e,r),u(e,m),v&&v.m(m,null),u(m,c),g&&g.m(m,null),b(f,P,S),b(f,q,S),k&&k.m(q,null),B||(z=W(l,"click",n[7]),B=!0)},p(f,[S]){f[1]==="view"?v?v.p(f,S):(v=_e(f),v.c(),v.m(m,c)):v&&(v.d(1),v=null),f[1]==="edit"?g?g.p(f,S):(g=de(f),g.c(),g.m(m,null)):g&&(g.d(1),g=null),f[2]?k?k.p(f,S):(k=pe(f),k.c(),k.m(q,null)):k&&(k.d(1),k=null)},i:j,o:j,d(f){f&&w(t),v&&v.d(),g&&g.d(),f&&w(P),f&&w(q),k&&k.d(),B=!1,z()}}}function ze(n,t,e){let o,l;fe(n,Le,f=>e(11,o=f)),fe(n,Oe,f=>e(12,l=f));const a=Ae.getInstance();let i=l.id,s="view",r={};const m=a.getDataSubscription("widget",{id:i}).subscribe(f=>{i==="new"?(e(2,r={id:a.gen_random_uuid(),description:"",name:"",price:0,created_at:new Date().toISOString(),updated_at:new Date().toISOString()}),e(1,s="edit")):e(2,r=f||{})});Ce(()=>{m.unsubscribe()});const c=f=>{if(typeof r[f.target.name]=="number")try{e(2,r[f.target.name]=parseFloat(f.target.value),r)}catch{e(2,r[f.target.name]=0,r)}else e(2,r[f.target.name]=f.target.value,r)},P=async()=>{if(r.name.trim().length===0){ce({header:"Invalid entry",message:"Please enter a name"});return}try{parseFloat(r.price)}catch{ce({header:"Invalid entry",message:"Please enter a valid price"});return}const{error:f}=await a.save_widget(r);f?console.error("save_widget error",f):(e(0,i=r.id),e(1,s="view"),a.updateDataSubscription("widget",{id:i}))},q=async()=>{await Pe({header:"Delete Widget",message:"Are you sure?",okHander:async()=>{const{data:f,error:S}=await a.delete_widget(r);S?console.error("Error deleting widget",S):B()}})},B=()=>{o("/widgets")};return[i,s,r,c,P,q,B,()=>{B()},()=>{e(1,s="edit")},()=>{e(1,s="view"),i==="add"&&B()},()=>{P()}]}class Ke extends Se{constructor(t){super(),he(this,t,ze,We,ye,{})}}export{Ke as default};