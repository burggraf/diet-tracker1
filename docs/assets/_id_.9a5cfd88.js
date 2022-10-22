import{S as Se,i as he,s as Ce,b as _,c as S,d,a as w,f,l as j,H as U,g,v as De,t as B,o as Z,j as ce,w as fe,z as ye}from"./index.35c1ef69.js";import{g as Le,p as Fe}from"./index.9b96d19e.js";import{y as Oe,F as Ie,r as qe,B as Be,C as Te}from"./index.8eb3de29.js";import{a as ue,s as Pe}from"./alert.20d71678.js";import{S as He}from"./supabase.data.service.0025da67.js";import"./loadingMessage.f600e144.js";import"./BehaviorSubject.983ab50d.js";function de(n){let t,e,a,i,o,l,s;return{c(){t=_("ion-button"),e=_("ion-icon"),a=S(),i=_("ion-button"),o=_("ion-icon"),d(e,"slot","icon-only"),d(e,"icon",Oe),d(o,"slot","icon-only"),d(o,"icon",Ie)},m(r,c){w(r,t,c),f(t,e),w(r,a,c),w(r,i,c),f(i,o),l||(s=[j(t,"click",n[5]),j(i,"click",n[8])],l=!0)},p:U,d(r){r&&g(t),r&&g(a),r&&g(i),l=!1,De(s)}}}function _e(n){let t,e,a,i,o,l,s;return{c(){t=_("ion-button"),e=_("ion-icon"),a=S(),i=_("ion-button"),o=_("ion-icon"),d(e,"slot","icon-only"),d(e,"icon",qe),d(o,"slot","icon-only"),d(o,"icon",Be)},m(r,c){w(r,t,c),f(t,e),w(r,a,c),w(r,i,c),f(i,o),l||(s=[j(t,"click",n[9]),j(i,"click",n[10])],l=!0)},p:U,d(r){r&&g(t),r&&g(a),r&&g(i),l=!1,De(s)}}}function pe(n){var x,ee,te,le,ie;let t,e,a,i=((x=n[2])==null?void 0:x.id)+"",o,l,s,r,c,u,P,I,W,T,k,D,v,b,p,H,z=new Date((ee=n[2])==null?void 0:ee.created_at).toLocaleDateString()+"",G,Q,A=new Date((te=n[2])==null?void 0:te.created_at).toLocaleTimeString()+"",J,R,V,E=new Date((le=n[2])==null?void 0:le.updated_at).toLocaleDateString()+"",K,X,N=new Date((ie=n[2])==null?void 0:ie.updated_at).toLocaleTimeString()+"",M,Y,$,h=n[1]==="view"&&me(n),C=n[1]==="edit"&&be(n),y=n[1]==="view"&&we(n),L=n[1]==="edit"&&ge(n),F=n[1]==="edit"&&ve(n),O=n[1]==="view"&&ke(n);return{c(){t=_("ion-card"),e=_("ion-card-header"),a=_("ion-card-subtitle"),o=B(i),l=S(),s=_("ion-card-title"),h&&h.c(),r=S(),C&&C.c(),c=S(),u=_("ion-card-content"),y&&y.c(),P=S(),L&&L.c(),I=S(),W=_("br"),T=S(),k=_("br"),D=S(),F&&F.c(),v=S(),O&&O.c(),b=S(),p=_("br"),H=B(`
				created: `),G=B(z),Q=S(),J=B(A),R=_("br"),V=B(`
				updated: `),K=B(E),X=S(),M=B(N),Y=S(),$=_("br")},m(m,q){w(m,t,q),f(t,e),f(e,a),f(a,o),f(e,l),f(e,s),h&&h.m(s,null),f(s,r),C&&C.m(s,null),f(t,c),f(t,u),y&&y.m(u,null),f(u,P),L&&L.m(u,null),f(u,I),f(u,W),f(u,T),f(u,k),f(u,D),F&&F.m(u,null),f(u,v),O&&O.m(u,null),f(u,b),f(u,p),f(u,H),f(u,G),f(u,Q),f(u,J),f(u,R),f(u,V),f(u,K),f(u,X),f(u,M),f(u,Y),f(u,$)},p(m,q){var ne,oe,ae,se,re;q&4&&i!==(i=((ne=m[2])==null?void 0:ne.id)+"")&&Z(o,i),m[1]==="view"?h?h.p(m,q):(h=me(m),h.c(),h.m(s,r)):h&&(h.d(1),h=null),m[1]==="edit"?C?C.p(m,q):(C=be(m),C.c(),C.m(s,null)):C&&(C.d(1),C=null),m[1]==="view"?y?y.p(m,q):(y=we(m),y.c(),y.m(u,P)):y&&(y.d(1),y=null),m[1]==="edit"?L?L.p(m,q):(L=ge(m),L.c(),L.m(u,I)):L&&(L.d(1),L=null),m[1]==="edit"?F?F.p(m,q):(F=ve(m),F.c(),F.m(u,v)):F&&(F.d(1),F=null),m[1]==="view"?O?O.p(m,q):(O=ke(m),O.c(),O.m(u,b)):O&&(O.d(1),O=null),q&4&&z!==(z=new Date((oe=m[2])==null?void 0:oe.created_at).toLocaleDateString()+"")&&Z(G,z),q&4&&A!==(A=new Date((ae=m[2])==null?void 0:ae.created_at).toLocaleTimeString()+"")&&Z(J,A),q&4&&E!==(E=new Date((se=m[2])==null?void 0:se.updated_at).toLocaleDateString()+"")&&Z(K,E),q&4&&N!==(N=new Date((re=m[2])==null?void 0:re.updated_at).toLocaleTimeString()+"")&&Z(M,N)},d(m){m&&g(t),h&&h.d(),C&&C.d(),y&&y.d(),L&&L.d(),F&&F.d(),O&&O.d()}}}function me(n){var a;let t=((a=n[2])==null?void 0:a.name)+"",e;return{c(){e=B(t)},m(i,o){w(i,e,o)},p(i,o){var l;o&4&&t!==(t=((l=i[2])==null?void 0:l.name)+"")&&Z(e,t)},d(i){i&&g(e)}}}function be(n){let t,e,a,i,o;return{c(){t=_("ion-label"),t.textContent="Name:",e=_("ion-input"),d(t,"class","svelte-1bxwl0a"),d(e,"value",a=n[2].name),d(e,"required",""),d(e,"name","name"),d(e,"type","text"),d(e,"class","svelte-1bxwl0a")},m(l,s){w(l,t,s),w(l,e,s),i||(o=j(e,"ionChange",n[3]),i=!0)},p(l,s){s&4&&a!==(a=l[2].name)&&d(e,"value",a)},d(l){l&&g(t),l&&g(e),i=!1,o()}}}function we(n){var a;let t=((a=n[2])==null?void 0:a.description)+"",e;return{c(){e=B(t)},m(i,o){w(i,e,o)},p(i,o){var l;o&4&&t!==(t=((l=i[2])==null?void 0:l.description)+"")&&Z(e,t)},d(i){i&&g(e)}}}function ge(n){let t,e,a,i,o;return{c(){t=_("ion-label"),t.textContent="Description:",e=_("ion-input"),d(t,"class","svelte-1bxwl0a"),d(e,"value",a=n[2].description),d(e,"required",""),d(e,"name","description"),d(e,"type","text"),d(e,"class","svelte-1bxwl0a")},m(l,s){w(l,t,s),w(l,e,s),i||(o=j(e,"ionChange",n[3]),i=!0)},p(l,s){s&4&&a!==(a=l[2].description)&&d(e,"value",a)},d(l){l&&g(t),l&&g(e),i=!1,o()}}}function ve(n){let t,e,a,i,o;return{c(){t=_("ion-label"),t.textContent="Price:",e=_("ion-input"),d(t,"class","svelte-1bxwl0a"),d(e,"value",a=n[2].price),d(e,"required",""),d(e,"name","price"),d(e,"type","number"),ce(e,"width","100px"),ce(e,"text-align","right"),d(e,"class","svelte-1bxwl0a")},m(l,s){w(l,t,s),w(l,e,s),i||(o=j(e,"ionChange",n[3]),i=!0)},p(l,s){s&4&&a!==(a=l[2].price)&&d(e,"value",a)},d(l){l&&g(t),l&&g(e),i=!1,o()}}}function ke(n){var i,o;let t,e=((o=(i=n[2])==null?void 0:i.price)==null?void 0:o.toFixed(2))+"",a;return{c(){t=B("price: "),a=B(e)},m(l,s){w(l,t,s),w(l,a,s)},p(l,s){var r,c;s&4&&e!==(e=((c=(r=l[2])==null?void 0:r.price)==null?void 0:c.toFixed(2))+"")&&Z(a,e)},d(l){l&&g(t),l&&g(a)}}}function We(n){let t,e,a,i,o,l,s,r,c,u,P,I,W,T,k=n[1]==="view"&&de(n),D=n[1]==="edit"&&_e(n),v=n[2]&&pe(n);return{c(){t=_("ion-header"),e=_("ion-toolbar"),a=_("ion-buttons"),i=_("ion-button"),o=_("ion-icon"),l=S(),s=_("ion-title"),s.textContent="Widget",r=S(),c=_("ion-buttons"),k&&k.c(),u=S(),D&&D.c(),P=S(),I=_("ion-content"),v&&v.c(),d(o,"slot","icon-only"),d(o,"icon",Te),d(a,"slot","start"),d(c,"slot","end"),d(t,"translucent","true"),d(I,"class","ion-padding")},m(b,p){w(b,t,p),f(t,e),f(e,a),f(a,i),f(i,o),f(e,l),f(e,s),f(e,r),f(e,c),k&&k.m(c,null),f(c,u),D&&D.m(c,null),w(b,P,p),w(b,I,p),v&&v.m(I,null),W||(T=j(i,"click",n[7]),W=!0)},p(b,[p]){b[1]==="view"?k?k.p(b,p):(k=de(b),k.c(),k.m(c,u)):k&&(k.d(1),k=null),b[1]==="edit"?D?D.p(b,p):(D=_e(b),D.c(),D.m(c,null)):D&&(D.d(1),D=null),b[2]?v?v.p(b,p):(v=pe(b),v.c(),v.m(I,null)):v&&(v.d(1),v=null)},i:U,o:U,d(b){b&&g(t),k&&k.d(),D&&D.d(),b&&g(P),b&&g(I),v&&v.d(),W=!1,T()}}}function Ze(n,t,e){let a,i;fe(n,Le,p=>e(12,a=p)),fe(n,Fe,p=>e(13,i=p));const o=He.getInstance();let l=i.id,s="view",r,c={};const u=o.getDataSubscription("widgets").subscribe(p=>{r=p,l==="new"?(e(2,c={id:o.gen_random_uuid(),description:"",name:"",price:0,created_at:new Date().toISOString().replace("Z","+00:00"),updated_at:new Date().toISOString().replace("Z","+00:00")}),e(1,s="edit")):(console.log("searching for ",l),console.log("widgets",r),r&&r.length>0?e(2,c=r.find(H=>H.id===l)||{}):(console.error(`could not find widget ${l}, widgets:`,r),console.log(r[1])))});ye(()=>{u.unsubscribe()});const P=p=>{if(typeof c[p.target.name]=="number")try{e(2,c[p.target.name]=parseFloat(p.target.value),c)}catch{e(2,c[p.target.name]=0,c)}else e(2,c[p.target.name]=p.target.value,c)},I=async()=>{if(c.name.trim().length===0){ue({header:"Invalid entry",message:"Please enter a name"});return}try{parseFloat(c.price)}catch{ue({header:"Invalid entry",message:"Please enter a valid price"});return}const{error:p}=await o.save_widget(c);p?console.error("save_widget error",p):(console.log("calling updateCollection",r,c),r=await o.updateCollection(r,c),console.log("widgets",r),o.saveCache(r,"widgets"),e(0,l=c.id),e(1,s="view"),o.updateDataSubscription("widgets"))},W=async()=>{await Pe({header:"Delete Widget",message:"Are you sure?",okHander:async()=>{const{data:p,error:H}=await o.delete_widget(c);H?console.error("Error deleting widget",H):(console.log("calling deleteFromCollection",r,c),r=await o.deleteFromCollection(r,c),console.log("widgets",r),o.saveCache(r,"widgets"),T())}})},T=()=>{a("/widgets")};return[l,s,c,P,I,W,T,()=>{T()},()=>{e(1,s="edit")},()=>{e(1,s="view"),l==="add"&&T()},()=>{I()}]}class Je extends Se{constructor(t){super(),he(this,t,Ze,We,Ce,{})}}export{Je as default};
