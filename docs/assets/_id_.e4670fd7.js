import{S as Se,i as Be,s as qe,e as d,a as w,b as u,d as S,f as i,l as J,n as ee,h as B,r as te,t as T,z as W,x as Ae,j as _e,w as Ce,B as ue,y as Oe,D as Fe}from"./index.345201d0.js";import{g as Ee,p as Ie}from"./index.1c019b01.js";import{t as $}from"./toast.c7fc4a68.js";import{A as Le,D as Te,o as Ne,C as Me,E as Pe,F as ze}from"./index.82e425ef.js";import{m as Je}from"./controllers.eaaf938f.js";import Ue from"./FoodEntryModal.9d7e7704.js";import{a as We,s as je}from"./alert.2b90b88a.js";import{S as He}from"./supabase.data.service.8363d56b.js";import{S as Re}from"./supabase.auth.service.2db8b8dd.js";import"./BehaviorSubject.0d342051.js";import"./network.service.2ea5a7b6.js";function pe(n,o,e){const s=n.slice();return s[22]=o[e],s[24]=e,s}function ge(n){let o,e,s,r,a,l,g;return{c(){o=d("ion-button"),e=d("ion-icon"),s=w(),r=d("ion-button"),a=d("ion-icon"),u(e,"slot","icon-only"),u(e,"icon",Le),u(a,"slot","icon-only"),u(a,"icon",Te)},m(c,p){S(c,o,p),i(o,e),S(c,s,p),S(c,r,p),i(r,a),l||(g=[J(o,"click",n[5]),J(r,"click",n[11])],l=!0)},p:ee,d(c){c&&B(o),c&&B(s),c&&B(r),l=!1,te(g)}}}function me(n){let o,e,s,r,a,l,g;return{c(){o=d("ion-button"),e=d("ion-icon"),s=w(),r=d("ion-button"),a=d("ion-icon"),u(e,"slot","icon-only"),u(e,"icon",Ne),u(a,"slot","icon-only"),u(a,"icon",Me)},m(c,p){S(c,o,p),i(o,e),S(c,s,p),S(c,r,p),i(r,a),l||(g=[J(o,"click",n[12]),J(r,"click",n[13])],l=!0)},p:ee,d(c){c&&B(o),c&&B(s),c&&B(r),l=!1,te(g)}}}function be(n){var oe,le,ie,ne,se;let o,e,s,r,a=(((oe=n[2])==null?void 0:oe.food_total)||0).toFixed(2)+"",l,g,c,p,t,_,C,A,N,b,h,y,k,D,P,G,j,R,K,f,m,M=new Date((le=n[2])==null?void 0:le.created_at).toLocaleDateString()+"",O,X,Y=new Date((ie=n[2])==null?void 0:ie.created_at).toLocaleTimeString()+"",Q,H,U,Z,V,x,q=n[1]==="view"&&ye(n),F=n[1]==="edit"&&he(n),E=n[1]==="view"&&ke(n),I=n[1]==="edit"&&ve(n),L=((se=(ne=n[2])==null?void 0:ne.food_log)==null?void 0:se.entries)&&we(n);return{c(){o=d("ion-card"),e=d("ion-card-header"),s=d("ion-card-subtitle"),r=T("Total: "),l=T(a),g=w(),c=d("ion-card-title"),q&&q.c(),p=w(),F&&F.c(),t=w(),_=d("ion-card-content"),E&&E.c(),C=w(),I&&I.c(),A=w(),N=d("br"),b=w(),h=d("ion-list"),y=d("ion-reorder-group"),L&&L.c(),k=w(),D=d("ion-item"),P=d("ion-icon"),G=T(`
						add new entry`),j=w(),R=d("br"),K=w(),f=d("br"),m=T(`
				created: `),O=T(M),X=w(),Q=T(Y),H=d("br"),U=w(),Z=d("br"),u(y,"id","food_log_group"),u(y,"disabled","false"),u(P,"icon",Pe),u(P,"slot","start"),u(h,"lines","full")},m(v,z){S(v,o,z),i(o,e),i(e,s),i(s,r),i(s,l),i(e,g),i(e,c),q&&q.m(c,null),i(c,p),F&&F.m(c,null),i(o,t),i(o,_),E&&E.m(_,null),i(_,C),I&&I.m(_,null),i(_,A),i(_,N),i(_,b),i(_,h),i(h,y),L&&L.m(y,null),i(h,k),i(h,D),i(D,P),i(D,G),i(_,j),i(_,R),i(_,K),i(_,f),i(_,m),i(_,O),i(_,X),i(_,Q),i(_,H),i(_,U),i(_,Z),V||(x=[J(y,"ionItemReorder",n[9]),J(D,"click",n[7])],V=!0)},p(v,z){var re,ae,ce,de,fe;z&4&&a!==(a=(((re=v[2])==null?void 0:re.food_total)||0).toFixed(2)+"")&&W(l,a),v[1]==="view"?q?q.p(v,z):(q=ye(v),q.c(),q.m(c,p)):q&&(q.d(1),q=null),v[1]==="edit"?F?F.p(v,z):(F=he(v),F.c(),F.m(c,null)):F&&(F.d(1),F=null),v[1]==="view"?E?E.p(v,z):(E=ke(v),E.c(),E.m(_,C)):E&&(E.d(1),E=null),v[1]==="edit"?I?I.p(v,z):(I=ve(v),I.c(),I.m(_,A)):I&&(I.d(1),I=null),(ce=(ae=v[2])==null?void 0:ae.food_log)!=null&&ce.entries?L?L.p(v,z):(L=we(v),L.c(),L.m(y,null)):L&&(L.d(1),L=null),z&4&&M!==(M=new Date((de=v[2])==null?void 0:de.created_at).toLocaleDateString()+"")&&W(O,M),z&4&&Y!==(Y=new Date((fe=v[2])==null?void 0:fe.created_at).toLocaleTimeString()+"")&&W(Q,Y)},d(v){v&&B(o),q&&q.d(),F&&F.d(),E&&E.d(),I&&I.d(),L&&L.d(),V=!1,te(x)}}}function ye(n){var s;let o=((s=n[2])==null?void 0:s.date)+"",e;return{c(){e=T(o)},m(r,a){S(r,e,a)},p(r,a){var l;a&4&&o!==(o=((l=r[2])==null?void 0:l.date)+"")&&W(e,o)},d(r){r&&B(e)}}}function he(n){let o,e,s,r,a;return{c(){o=d("ion-label"),o.textContent="Date:",e=d("ion-input"),u(o,"class","svelte-8l8qbx"),u(e,"value",s=n[2].date),u(e,"required",""),u(e,"name","date"),u(e,"type","text"),u(e,"class","svelte-8l8qbx")},m(l,g){S(l,o,g),S(l,e,g),r||(a=J(e,"ionChange",n[3]),r=!0)},p(l,g){g&4&&s!==(s=l[2].date)&&u(e,"value",s)},d(l){l&&B(o),l&&B(e),r=!1,a()}}}function ke(n){var s;let o=((s=n[2])==null?void 0:s.notes)+"",e;return{c(){e=T(o)},m(r,a){S(r,e,a)},p(r,a){var l;a&4&&o!==(o=((l=r[2])==null?void 0:l.notes)+"")&&W(e,o)},d(r){r&&B(e)}}}function ve(n){let o,e,s,r,a;return{c(){o=d("ion-label"),o.textContent="Notes:",e=d("ion-input"),u(o,"class","svelte-8l8qbx"),u(e,"value",s=n[2].notes),u(e,"required",""),u(e,"name","notes"),u(e,"type","text"),u(e,"class","svelte-8l8qbx")},m(l,g){S(l,o,g),S(l,e,g),r||(a=J(e,"ionChange",n[3]),r=!0)},p(l,g){g&4&&s!==(s=l[2].notes)&&u(e,"value",s)},d(l){l&&B(o),l&&B(e),r=!1,a()}}}function we(n){var r,a;let o,e=(a=(r=n[2])==null?void 0:r.food_log)==null?void 0:a.entries,s=[];for(let l=0;l<e.length;l+=1)s[l]=De(pe(n,e,l));return{c(){for(let l=0;l<s.length;l+=1)s[l].c();o=Ae()},m(l,g){for(let c=0;c<s.length;c+=1)s[c].m(l,g);S(l,o,g)},p(l,g){var c,p;if(g&260){e=(p=(c=l[2])==null?void 0:c.food_log)==null?void 0:p.entries;let t;for(t=0;t<e.length;t+=1){const _=pe(l,e,t);s[t]?s[t].p(_,g):(s[t]=De(_),s[t].c(),s[t].m(o.parentNode,o))}for(;t<s.length;t+=1)s[t].d(1);s.length=e.length}},d(l){Ce(s,l),l&&B(o)}}}function De(n){var O,X,Y,Q;let o,e,s,r,a=((O=n[22])==null?void 0:O.title)+"",l,g,c,p,t=(((X=n[22])==null?void 0:X.desc)||"")+"",_,C,A,N,b,h=(((Y=n[22])==null?void 0:Y.amt)||0).toFixed(2)+"",y,k,D,P,G,j=(((Q=n[22])==null?void 0:Q.cat)||"")+"",R,K,f,m;function M(){return n[14](n[24])}return{c(){o=d("ion-item"),e=d("ion-reorder"),s=w(),r=d("div"),l=T(a),g=d("br"),c=w(),p=d("span"),_=T(t),C=T("\xA0"),A=w(),N=d("ion-note"),b=d("div"),y=T(h),k=d("br"),D=w(),P=d("span"),G=T("\xA0"),R=T(j),K=w(),u(e,"slot","start"),_e(p,"class","description svelte-8l8qbx"),_e(P,"class","description svelte-8l8qbx"),u(N,"slot","end"),u(N,"class","right svelte-8l8qbx")},m(H,U){S(H,o,U),i(o,e),i(o,s),i(o,r),i(r,l),i(r,g),i(r,c),i(r,p),i(p,_),i(p,C),i(o,A),i(o,N),i(N,b),i(b,y),i(b,k),i(b,D),i(b,P),i(P,G),i(P,R),i(o,K),f||(m=J(o,"click",M),f=!0)},p(H,U){var Z,V,x,q;n=H,U&4&&a!==(a=((Z=n[22])==null?void 0:Z.title)+"")&&W(l,a),U&4&&t!==(t=(((V=n[22])==null?void 0:V.desc)||"")+"")&&W(_,t),U&4&&h!==(h=(((x=n[22])==null?void 0:x.amt)||0).toFixed(2)+"")&&W(y,h),U&4&&j!==(j=(((q=n[22])==null?void 0:q.cat)||"")+"")&&W(R,j)},d(H){H&&B(o),f=!1,m()}}}function Ye(n){let o,e,s,r,a,l,g,c,p,t,_,C,A,N,b=n[1]==="view"&&ge(n),h=n[1]==="edit"&&me(n),y=n[2]&&be(n);return{c(){o=d("ion-header"),e=d("ion-toolbar"),s=d("ion-buttons"),r=d("ion-button"),a=d("ion-icon"),l=w(),g=d("ion-title"),g.textContent="Day",c=w(),p=d("ion-buttons"),b&&b.c(),t=w(),h&&h.c(),_=w(),C=d("ion-content"),y&&y.c(),u(a,"slot","icon-only"),u(a,"icon",ze),u(s,"slot","start"),u(p,"slot","end"),u(o,"translucent","true"),u(C,"class","ion-padding")},m(k,D){S(k,o,D),i(o,e),i(e,s),i(s,r),i(r,a),i(e,l),i(e,g),i(e,c),i(e,p),b&&b.m(p,null),i(p,t),h&&h.m(p,null),S(k,_,D),S(k,C,D),y&&y.m(C,null),A||(N=J(r,"click",n[10]),A=!0)},p(k,[D]){k[1]==="view"?b?b.p(k,D):(b=ge(k),b.c(),b.m(p,t)):b&&(b.d(1),b=null),k[1]==="edit"?h?h.p(k,D):(h=me(k),h.c(),h.m(p,null)):h&&(h.d(1),h=null),k[2]?y?y.p(k,D):(y=be(k),y.c(),y.m(C,null)):y&&(y.d(1),y=null)},i:ee,o:ee,d(k){k&&B(o),b&&b.d(),h&&h.d(),k&&B(_),k&&B(C),y&&y.d(),A=!1,N()}}}function Ge(n,o,e){let s,r;ue(n,Ee,f=>e(18,s=f)),ue(n,Ie,f=>e(19,r=f));const a=He.getInstance();let l=null,g,c=r.id,p="view",t={};console.log("*** id",c);let _;c==="new"?(console.log("it is new"),t={id:a.gen_random_uuid(),user_id:(l==null?void 0:l.id)||null,created_at:new Date().toISOString(),date:new Date().toISOString().substring(0,10),food_log:{entries:[]},activity_log:{entries:[]},water_log:{entries:[]},weight:0,notes:""},p="edit",console.log("*** new day",t)):_=a.getDataSubscription("day",{id:c}).subscribe(f=>{e(2,t=f),console.log("*** day",t)}),Oe(()=>{g=Re.user.subscribe(f=>{l=f})}),Fe(()=>{try{_.unsubscribe(),g.unsubscribe()}catch(f){console.error("error unsubscribing",f)}});const C=f=>{if(typeof t[f.target.name]=="number")try{e(2,t[f.target.name]=parseFloat(f.target.value),t)}catch{e(2,t[f.target.name]=0,t)}else e(2,t[f.target.name]=f.target.value,t)},A=async()=>{console.log("save the day",t),t.user_id||e(2,t.user_id=l.id,t);try{e(2,t.food_total=0,t),t.food_log.entries.forEach(m=>{e(2,t.food_total+=m.amt,t)})}catch(m){console.error("error calculating food total",m)}const{error:f}=await a.save_day(t);f?(console.log("error message is: ",f.message),f.message.startsWith("duplicate key value violates unique constraint")?(console.log("DUPLICATE DAY"),We({header:"Duplicate Day",message:"This day already exists.  Please edit the existing day."})):console.error("save day error",f)):(e(0,c=t.id),e(1,p="view"),new Date().toISOString().substring(0,10)===t.date&&(console.log("check for badge support"),"setAppBadge"in navigator&&"clearAppBadge"in navigator?t.food_total?navigator.setAppBadge(t.food_total).then(m=>{console.log("setAppBadge result",m),$("badge set to "+t.food_total)}).catch(m=>{console.error("setAppBadge error",m),$("setAppBadge error "+JSON.stringify(m))}):navigator.clearAppBadge.then(m=>{console.log("clearAppBadge result",m),$("badge cleared")}).catch(m=>{console.error("clearAppBadge error",m),$("clearAppBadge error "+JSON.stringify(m))}):(console.log("no app badge support"),$("no app badge support"))))},N=async()=>{await je({header:"Delete Day",message:"Are you sure?",okHander:async()=>{const{data:f,error:m}=await a.delete_day(t);m?console.error("Error deleting day",m):b()}})},b=()=>{s("/days")},h=async f=>{t.food_log.entries||e(2,t.food_log.entries=[],t);const m={id:a.gen_random_uuid(),food_id:"",title:"",desc:"",cat:"",cps:0,qty:1,amt:0,created:new Date().toISOString()},M=await D(m,t.food_log.entries.length);console.log("done calling openFoodEntryBox",M),console.log("day.food_log.entries",t.food_log.entries),e(2,t.food_log.entries=[...t.food_log.entries],t),A()},y=async f=>{const m=await D(t.food_log.entries[f],f);console.log("edit_food_log_entry is done calling openFoodEntryBox",m),console.log("day.food_log.entries",t.food_log.entries),e(2,t.food_log.entries=[...t.food_log.entries],t),A()},k=({detail:f})=>{const{from:m,to:M}=f,O=t.food_log.entries.splice(m,1)[0];t.food_log.entries.splice(M,0,O),f.complete(),console.log("reorder_food_log: day",t),A()},D=async(f,m)=>{const M=await Je.create({component:Ue,componentProps:{entry:f},showBackdrop:!0,backdropDismiss:!0});await M.present();const{data:O}=await M.onWillDismiss();return(O==null?void 0:O.data)!==null?(O.data.deleted?t.food_log.entries.splice(m,1):e(2,t.food_log.entries[m]=O.data,t),console.log("*** day.food_log.entries",t.food_log.entries),!0):!1};return[c,p,t,C,A,N,b,h,y,k,()=>{b()},()=>{e(1,p="edit")},()=>{e(1,p="view"),c==="add"&&b()},()=>{A()},f=>{y(f)}]}class it extends Se{constructor(o){super(),Be(this,o,Ge,Ye,qe,{})}}export{it as default};
