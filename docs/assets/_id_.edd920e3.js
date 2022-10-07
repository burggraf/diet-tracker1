import{S as ve,i as De,s as Se,e as d,a as k,b as m,d as C,f as s,l as H,n as j,h as F,r as V,t as U,z as R,x as Ce,w as Fe,B as fe,y as Oe,D as Be}from"./index.d3f6801b.js";import{g as Ee,p as Ie}from"./index.65783d0d.js";import{B as qe,D as Le,o as Te,C as Ae,E as Ne,F as Me}from"./index.68dc5f99.js";import{m as Pe}from"./controllers.6d4c0615.js";import Je from"./FoodEntryModal.ce325444.js";import{a as Ue,s as We}from"./alert.2f46e389.js";import{S as ze}from"./supabase.data.service.d57752ca.js";import{S as He}from"./supabase.auth.service.94afe2e3.js";import"./BehaviorSubject.50661575.js";import"./network.service.34454851.js";function _e(n,t,e){const i=n.slice();return i[22]=t[e],i[24]=e,i}function ue(n){let t,e,i,r,a,l,u;return{c(){t=d("ion-button"),e=d("ion-icon"),i=k(),r=d("ion-button"),a=d("ion-icon"),m(e,"slot","icon-only"),m(e,"icon",qe),m(a,"slot","icon-only"),m(a,"icon",Le)},m(c,p){C(c,t,p),s(t,e),C(c,i,p),C(c,r,p),s(r,a),l||(u=[H(t,"click",n[5]),H(r,"click",n[11])],l=!0)},p:j,d(c){c&&F(t),c&&F(i),c&&F(r),l=!1,V(u)}}}function me(n){let t,e,i,r,a,l,u;return{c(){t=d("ion-button"),e=d("ion-icon"),i=k(),r=d("ion-button"),a=d("ion-icon"),m(e,"slot","icon-only"),m(e,"icon",Te),m(a,"slot","icon-only"),m(a,"icon",Ae)},m(c,p){C(c,t,p),s(t,e),C(c,i,p),C(c,r,p),s(r,a),l||(u=[H(t,"click",n[12]),H(r,"click",n[13])],l=!0)},p:j,d(c){c&&F(t),c&&F(i),c&&F(r),l=!1,V(u)}}}function pe(n){var te,oe,le,ie,ne;let t,e,i,r,a=(((te=n[2])==null?void 0:te.food_total)||0).toFixed(2)+"",l,u,c,p,o,f,O,B,M,E,D,w,W,g,h,S,b,N,G,_,v,P=new Date((oe=n[2])==null?void 0:oe.created_at).toLocaleDateString()+"",J,X,Y=new Date((le=n[2])==null?void 0:le.created_at).toLocaleTimeString()+"",K,Z,$,x,Q,ee,I=n[1]==="view"&&ge(n),q=n[1]==="edit"&&be(n),L=n[1]==="view"&&ye(n),T=n[1]==="edit"&&ke(n),A=((ne=(ie=n[2])==null?void 0:ie.food_log)==null?void 0:ne.entries)&&he(n);return{c(){t=d("ion-card"),e=d("ion-card-header"),i=d("ion-card-subtitle"),r=U("Total: "),l=U(a),u=k(),c=d("ion-card-title"),I&&I.c(),p=k(),q&&q.c(),o=k(),f=d("ion-card-content"),L&&L.c(),O=k(),T&&T.c(),B=k(),M=d("br"),E=k(),D=d("ion-list"),w=d("ion-reorder-group"),A&&A.c(),W=k(),g=d("ion-item"),h=d("ion-icon"),S=U(`
						add new entry`),b=k(),N=d("br"),G=k(),_=d("br"),v=U(`
				created: `),J=U(P),X=k(),K=U(Y),Z=d("br"),$=k(),x=d("br"),m(w,"id","food_log_group"),m(w,"disabled","false"),m(h,"icon",Ne),m(h,"slot","start"),m(D,"lines","full")},m(y,z){C(y,t,z),s(t,e),s(e,i),s(i,r),s(i,l),s(e,u),s(e,c),I&&I.m(c,null),s(c,p),q&&q.m(c,null),s(t,o),s(t,f),L&&L.m(f,null),s(f,O),T&&T.m(f,null),s(f,B),s(f,M),s(f,E),s(f,D),s(D,w),A&&A.m(w,null),s(D,W),s(D,g),s(g,h),s(g,S),s(f,b),s(f,N),s(f,G),s(f,_),s(f,v),s(f,J),s(f,X),s(f,K),s(f,Z),s(f,$),s(f,x),Q||(ee=[H(w,"ionItemReorder",n[9]),H(g,"click",n[7])],Q=!0)},p(y,z){var se,re,ae,ce,de;z&4&&a!==(a=(((se=y[2])==null?void 0:se.food_total)||0).toFixed(2)+"")&&R(l,a),y[1]==="view"?I?I.p(y,z):(I=ge(y),I.c(),I.m(c,p)):I&&(I.d(1),I=null),y[1]==="edit"?q?q.p(y,z):(q=be(y),q.c(),q.m(c,null)):q&&(q.d(1),q=null),y[1]==="view"?L?L.p(y,z):(L=ye(y),L.c(),L.m(f,O)):L&&(L.d(1),L=null),y[1]==="edit"?T?T.p(y,z):(T=ke(y),T.c(),T.m(f,B)):T&&(T.d(1),T=null),(ae=(re=y[2])==null?void 0:re.food_log)!=null&&ae.entries?A?A.p(y,z):(A=he(y),A.c(),A.m(w,null)):A&&(A.d(1),A=null),z&4&&P!==(P=new Date((ce=y[2])==null?void 0:ce.created_at).toLocaleDateString()+"")&&R(J,P),z&4&&Y!==(Y=new Date((de=y[2])==null?void 0:de.created_at).toLocaleTimeString()+"")&&R(K,Y)},d(y){y&&F(t),I&&I.d(),q&&q.d(),L&&L.d(),T&&T.d(),A&&A.d(),Q=!1,V(ee)}}}function ge(n){var i;let t=((i=n[2])==null?void 0:i.date)+"",e;return{c(){e=U(t)},m(r,a){C(r,e,a)},p(r,a){var l;a&4&&t!==(t=((l=r[2])==null?void 0:l.date)+"")&&R(e,t)},d(r){r&&F(e)}}}function be(n){let t,e,i,r,a;return{c(){t=d("ion-label"),t.textContent="Date:",e=d("ion-input"),m(t,"class","svelte-1bxwl0a"),m(e,"value",i=n[2].date),m(e,"required",""),m(e,"name","date"),m(e,"type","text"),m(e,"class","svelte-1bxwl0a")},m(l,u){C(l,t,u),C(l,e,u),r||(a=H(e,"ionChange",n[3]),r=!0)},p(l,u){u&4&&i!==(i=l[2].date)&&m(e,"value",i)},d(l){l&&F(t),l&&F(e),r=!1,a()}}}function ye(n){var i;let t=((i=n[2])==null?void 0:i.notes)+"",e;return{c(){e=U(t)},m(r,a){C(r,e,a)},p(r,a){var l;a&4&&t!==(t=((l=r[2])==null?void 0:l.notes)+"")&&R(e,t)},d(r){r&&F(e)}}}function ke(n){let t,e,i,r,a;return{c(){t=d("ion-label"),t.textContent="Notes:",e=d("ion-input"),m(t,"class","svelte-1bxwl0a"),m(e,"value",i=n[2].notes),m(e,"required",""),m(e,"name","notes"),m(e,"type","text"),m(e,"class","svelte-1bxwl0a")},m(l,u){C(l,t,u),C(l,e,u),r||(a=H(e,"ionChange",n[3]),r=!0)},p(l,u){u&4&&i!==(i=l[2].notes)&&m(e,"value",i)},d(l){l&&F(t),l&&F(e),r=!1,a()}}}function he(n){var r,a;let t,e=(a=(r=n[2])==null?void 0:r.food_log)==null?void 0:a.entries,i=[];for(let l=0;l<e.length;l+=1)i[l]=we(_e(n,e,l));return{c(){for(let l=0;l<i.length;l+=1)i[l].c();t=Ce()},m(l,u){for(let c=0;c<i.length;c+=1)i[c].m(l,u);C(l,t,u)},p(l,u){var c,p;if(u&260){e=(p=(c=l[2])==null?void 0:c.food_log)==null?void 0:p.entries;let o;for(o=0;o<e.length;o+=1){const f=_e(l,e,o);i[o]?i[o].p(f,u):(i[o]=we(f),i[o].c(),i[o].m(t.parentNode,t))}for(;o<i.length;o+=1)i[o].d(1);i.length=e.length}},d(l){Fe(i,l),l&&F(t)}}}function we(n){var M,E;let t,e=((M=n[22])==null?void 0:M.title)+"",i,r,a,l=(((E=n[22])==null?void 0:E.amt)||0).toFixed(2)+"",u,c,p,o,f,O;function B(){return n[14](n[24])}return{c(){t=d("ion-item"),i=U(e),r=k(),a=d("ion-note"),u=U(l),c=k(),p=d("ion-reorder"),o=k(),m(a,"slot","end"),m(p,"slot","start")},m(D,w){C(D,t,w),s(t,i),s(t,r),s(t,a),s(a,u),s(t,c),s(t,p),s(t,o),f||(O=H(t,"click",B),f=!0)},p(D,w){var W,g;n=D,w&4&&e!==(e=((W=n[22])==null?void 0:W.title)+"")&&R(i,e),w&4&&l!==(l=(((g=n[22])==null?void 0:g.amt)||0).toFixed(2)+"")&&R(u,l)},d(D){D&&F(t),f=!1,O()}}}function Re(n){let t,e,i,r,a,l,u,c,p,o,f,O,B,M,E=JSON.stringify(n[2],null,2)+"",D,w,W,g=n[1]==="view"&&ue(n),h=n[1]==="edit"&&me(n),S=n[2]&&pe(n);return{c(){t=d("ion-header"),e=d("ion-toolbar"),i=d("ion-buttons"),r=d("ion-button"),a=d("ion-icon"),l=k(),u=d("ion-title"),u.textContent="Day",c=k(),p=d("ion-buttons"),g&&g.c(),o=k(),h&&h.c(),f=k(),O=d("ion-content"),S&&S.c(),B=k(),M=d("pre"),D=U(E),m(a,"slot","icon-only"),m(a,"icon",Me),m(i,"slot","start"),m(p,"slot","end"),m(t,"translucent","true"),m(O,"class","ion-padding")},m(b,N){C(b,t,N),s(t,e),s(e,i),s(i,r),s(r,a),s(e,l),s(e,u),s(e,c),s(e,p),g&&g.m(p,null),s(p,o),h&&h.m(p,null),C(b,f,N),C(b,O,N),S&&S.m(O,null),s(O,B),s(O,M),s(M,D),w||(W=H(r,"click",n[10]),w=!0)},p(b,[N]){b[1]==="view"?g?g.p(b,N):(g=ue(b),g.c(),g.m(p,o)):g&&(g.d(1),g=null),b[1]==="edit"?h?h.p(b,N):(h=me(b),h.c(),h.m(p,null)):h&&(h.d(1),h=null),b[2]?S?S.p(b,N):(S=pe(b),S.c(),S.m(O,B)):S&&(S.d(1),S=null),N&4&&E!==(E=JSON.stringify(b[2],null,2)+"")&&R(D,E)},i:j,o:j,d(b){b&&F(t),g&&g.d(),h&&h.d(),b&&F(f),b&&F(O),S&&S.d(),w=!1,W()}}}function Ye(n,t,e){let i,r;fe(n,Ee,_=>e(18,i=_)),fe(n,Ie,_=>e(19,r=_));const a=ze.getInstance();let l=null,u,c=r.id,p="view",o={};console.log("*** id",c);let f;c==="new"?(console.log("it is new"),o={id:a.gen_random_uuid(),user_id:(l==null?void 0:l.id)||null,created_at:new Date().toISOString(),date:new Date().toISOString().substring(0,10),food_log:{entries:[]},activity_log:{entries:[]},water_log:{entries:[]},weight:0,notes:""},p="edit",console.log("*** new day",o)):f=a.getDataSubscription("day",{id:c}).subscribe(_=>{e(2,o=_),console.log("*** day",o)}),Oe(()=>{u=He.user.subscribe(_=>{l=_})}),Be(()=>{try{f.unsubscribe(),u.unsubscribe()}catch(_){console.error("error unsubscribing",_)}});const O=_=>{if(typeof o[_.target.name]=="number")try{e(2,o[_.target.name]=parseFloat(_.target.value),o)}catch{e(2,o[_.target.name]=0,o)}else e(2,o[_.target.name]=_.target.value,o)},B=async()=>{console.log("save the day",o),o.user_id||e(2,o.user_id=l.id,o);try{e(2,o.food_total=0,o),o.food_log.entries.forEach(v=>{e(2,o.food_total+=v.amt,o)})}catch(v){console.error("error calculating food total",v)}const{error:_}=await a.save_day(o);_?(console.log("error message is: ",_.message),_.message.startsWith("duplicate key value violates unique constraint")?(console.log("DUPLICATE DAY"),Ue({header:"Duplicate Day",message:"This day already exists.  Please edit the existing day."})):console.error("save day error",_)):(e(0,c=o.id),e(1,p="view"))},M=async()=>{await We({header:"Delete Day",message:"Are you sure?",okHander:async()=>{const{data:_,error:v}=await a.delete_day(o);v?console.error("Error deleting day",v):E()}})},E=()=>{i("/days")},D=async _=>{o.food_log.entries||e(2,o.food_log.entries=[],o);const v={id:a.gen_random_uuid(),food_id:"",title:"",desc:"",cat:"",cps:0,qty:0,amt:0,created:new Date().toISOString()},P=await g(v,o.food_log.entries.length);console.log("done calling openFoodEntryBox",P),console.log("day.food_log.entries",o.food_log.entries),e(2,o.food_log.entries=[...o.food_log.entries],o),B()},w=async _=>{const v=await g(o.food_log.entries[_],_);console.log("edit_food_log_entry is done calling openFoodEntryBox",v),console.log("day.food_log.entries",o.food_log.entries),e(2,o.food_log.entries=[...o.food_log.entries],o),B()},W=({detail:_})=>{const{from:v,to:P}=_,J=o.food_log.entries.splice(v,1)[0];o.food_log.entries.splice(P,0,J),_.complete(),console.log("reorder_food_log: day",o),B()},g=async(_,v)=>{const P=await Pe.create({component:Je,componentProps:{entry:_},showBackdrop:!0,backdropDismiss:!0});await P.present();const{data:J}=await P.onWillDismiss();return(J==null?void 0:J.data)!==null?(J.data.deleted?o.food_log.entries.splice(v,1):e(2,o.food_log.entries[v]=J.data,o),console.log("*** day.food_log.entries",o.food_log.entries),!0):!1};return[c,p,o,O,B,M,E,D,w,W,()=>{E()},()=>{e(1,p="edit")},()=>{e(1,p="view"),c==="add"&&E()},()=>{B()},_=>{w(_)}]}class tt extends ve{constructor(t){super(),De(this,t,Ye,Re,Se,{})}}export{tt as default};
