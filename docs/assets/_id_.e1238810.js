import{S as et,i as tt,s as ot,h as lt,m as nt,p as it,q as rt,r as at,w as ye,x as st,z as ct,b as i,d as a,a as X,f as t,l as O,H as dt,g as Y,t as v,o as $,c as m,k as L,j as me,u as _t,v as ut}from"./index.fb11c5a4.js";import{I as ft}from"./IonPage.b0441645.js";import{g as gt,p as pt}from"./index.b4af1616.js";import{m as mt}from"./controllers.d0dc65c1.js";import{z as bt,D as ht,E as Ye,F as wt}from"./index.6a8fe8ef.js";import kt from"./FoodEntryModal.67cd58d2.js";import{s as vt,a as yt}from"./alert.af21b047.js";import{S as Dt,U as jt}from"./supabase.data.service.659d40a3.js";import{c as St}from"./user.store.3d2f150f.js";import"./loadingMessage.0829a986.js";import"./FoodSearchModal.a70b53e1.js";import"./BehaviorSubject.8776a223.js";function Ze(n,r,l){const d=n.slice();return d[26]=r[l],d[28]=l,d}function Ue(n){let r,l,d,s;return{c(){r=i("ion-button"),l=i("ion-icon"),a(l,"slot","icon-only"),a(l,"icon",bt)},m(g,f){X(g,r,f),t(r,l),d||(s=O(r,"click",n[5]),d=!0)},p:dt,d(g){g&&Y(r),d=!1,s()}}}function xe(n){var s,g,f;let r,l=(((g=(s=n[2])==null?void 0:s.user_metadata)==null?void 0:g.daily_budget)-((f=n[1])==null?void 0:f.food_total)||0).toFixed(2)+"",d;return{c(){r=v("Left: "),d=v(l)},m(u,e){X(u,r,e),X(u,d,e)},p(u,e){var h,E,y;e&6&&l!==(l=(((E=(h=u[2])==null?void 0:h.user_metadata)==null?void 0:E.daily_budget)-((y=u[1])==null?void 0:y.food_total)||0).toFixed(2)+"")&&$(d,l)},d(u){u&&Y(r),u&&Y(d)}}}function $e(n){var o,_,D,C;let r,l,d,s,g=((o=n[26])==null?void 0:o.title)+"",f,u,e,h,E=(((_=n[26])==null?void 0:_.desc)||"")+"",y,Z,p,B,w,J=(((D=n[26])==null?void 0:D.amt)||0).toFixed(2)+"",M,T,z,R,K,H=(((C=n[26])==null?void 0:C.cat)||"")+"",U,P,ee,V;function A(){return n[16](n[28])}return{c(){r=i("ion-item"),l=i("ion-reorder"),d=m(),s=i("div"),f=v(g),u=i("br"),e=m(),h=i("span"),y=v(E),Z=v("\xA0"),p=m(),B=i("ion-note"),w=i("div"),M=v(J),T=i("br"),z=m(),R=i("span"),K=v("\xA0"),U=v(H),P=m(),a(l,"slot","start"),L(h,"class","description svelte-1ljocbk"),L(R,"class","description svelte-1ljocbk"),a(B,"slot","end"),a(B,"class","right svelte-1ljocbk")},m(k,q){X(k,r,q),t(r,l),t(r,d),t(r,s),t(s,f),t(s,u),t(s,e),t(s,h),t(h,y),t(h,Z),t(r,p),t(r,B),t(B,w),t(w,M),t(w,T),t(w,z),t(w,R),t(R,K),t(R,U),t(r,P),ee||(V=O(r,"click",A),ee=!0)},p(k,q){var j,te,le,Q;n=k,q&2&&g!==(g=((j=n[26])==null?void 0:j.title)+"")&&$(f,g),q&2&&E!==(E=(((te=n[26])==null?void 0:te.desc)||"")+"")&&$(y,E),q&2&&J!==(J=(((le=n[26])==null?void 0:le.amt)||0).toFixed(2)+"")&&$(M,J),q&2&&H!==(H=(((Q=n[26])==null?void 0:Q.cat)||"")+"")&&$(U,H)},d(k){k&&Y(r),ee=!1,V()}}}function It(n){var Ee,Te,Pe,qe,Ne,Le,Me;let r,l,d,s,g,f,u,e=new Date(new Date((Ee=n[1])==null?void 0:Ee.date).getTime()+new Date((Te=n[1])==null?void 0:Te.date).getTimezoneOffset()*6e4).toDateString()+"",h,E,y,Z,p,B,w,J,M,T,z,R,K=(((Pe=n[1])==null?void 0:Pe.food_total)||0).toFixed(2)+"",H,U,P,ee,V,A,o,_,D,C,k,q,j,te,le,Q,be,se,he,ne,de,De,_e,N,ue,je,we,ie,fe,Se,x,oe,ge,Ie,re,Fe,pe=(n[1].water_total||0)+"",ke,Oe,Ce,ce,Be,ze,ve,We,S=n[0]!=="new"&&Ue(n),I=((Ne=(qe=n[2])==null?void 0:qe.user_metadata)==null?void 0:Ne.daily_budget)&&xe(n),ae=((Me=(Le=n[1])==null?void 0:Le.food_log)==null?void 0:Me.entries)||[],F=[];for(let c=0;c<ae.length;c+=1)F[c]=$e(Ze(n,ae,c));return{c(){var c,b;r=i("ion-header"),l=i("ion-toolbar"),d=i("ion-buttons"),s=i("ion-button"),g=i("ion-icon"),f=m(),u=i("ion-title"),h=v(e),E=m(),y=i("ion-buttons"),S&&S.c(),Z=m(),p=i("ion-content"),B=i("div"),w=i("ion-datetime"),J=m(),M=i("ion-grid"),T=i("ion-row"),z=i("ion-col"),R=v("Total: "),H=v(K),U=m(),P=i("ion-col"),I&&I.c(),ee=m(),V=i("ion-list"),A=i("ion-reorder-group");for(let G=0;G<F.length;G+=1)F[G].c();o=m(),_=i("ion-item"),D=i("ion-icon"),C=v(`
				new food entry`),k=m(),q=i("div"),j=i("ion-input"),le=m(),Q=i("ion-footer"),be=i("ion-grid"),se=i("ion-row"),he=i("ion-col"),ne=i("div"),de=i("div"),de.textContent="Weight",De=m(),_e=i("div"),N=i("ion-input"),je=m(),we=i("ion-col"),ie=i("div"),fe=i("div"),fe.textContent="Water",Se=m(),x=i("div"),oe=i("ion-icon"),Ie=m(),re=i("span"),Fe=v("\xA0"),ke=v(pe),Oe=v("\xA0"),Ce=m(),ce=i("ion-icon"),Be=m(),ze=i("br"),a(g,"slot","icon-only"),a(g,"icon",ht),a(d,"slot","start"),a(y,"slot","end"),a(r,"translucent","true"),a(w,"id","datepicker"),a(w,"class","hidden svelte-1ljocbk"),L(B,"class","centered svelte-1ljocbk"),me(z,"text-align","left"),me(z,"font-weight","bold"),me(P,"text-align","right"),me(P,"font-weight","bold"),a(A,"id","food_log_group"),a(A,"disabled","false"),a(D,"icon",Ye),a(D,"slot","start"),a(_,"lines","none"),a(V,"lines","full"),a(j,"class","notes-box svelte-1ljocbk"),a(j,"value",te=(c=n[1])==null?void 0:c.notes),a(j,"required",""),a(j,"name","notes"),a(j,"type","text"),a(j,"placeholder","notes"),L(q,"class","ion-padding"),a(p,"class","ion-padding"),L(de,"class","footertitle svelte-1ljocbk"),a(N,"name","weight"),a(N,"class","weightBox svelte-1ljocbk"),a(N,"type","decimal"),a(N,"inputmode","decimal"),a(N,"value",ue=(b=n[1])==null?void 0:b.weight),L(_e,"class","footertitle svelte-1ljocbk"),L(ne,"class","left svelte-1ljocbk"),L(fe,"class","footertitle svelte-1ljocbk"),a(oe,"color",ge=n[1].water_total<=0?"medium":"dark"),a(oe,"icon",wt),a(oe,"size","large"),L(re,"class","water-digits svelte-1ljocbk"),a(ce,"icon",Ye),a(ce,"size","large"),L(x,"class","footertitle together svelte-1ljocbk"),L(ie,"class","right svelte-1ljocbk")},m(c,b){X(c,r,b),t(r,l),t(l,d),t(d,s),t(s,g),t(l,f),t(l,u),t(u,h),t(l,E),t(l,y),S&&S.m(y,null),X(c,Z,b),X(c,p,b),t(p,B),t(B,w),t(p,J),t(p,M),t(M,T),t(T,z),t(z,R),t(z,H),t(T,U),t(T,P),I&&I.m(P,null),t(p,ee),t(p,V),t(V,A);for(let G=0;G<F.length;G+=1)F[G].m(A,null);t(V,o),t(V,_),t(_,D),t(_,C),t(p,k),t(p,q),t(q,j),X(c,le,b),X(c,Q,b),t(Q,be),t(be,se),t(se,he),t(he,ne),t(ne,de),t(ne,De),t(ne,_e),t(_e,N),t(se,je),t(se,we),t(we,ie),t(ie,fe),t(ie,Se),t(ie,x),t(x,oe),t(x,Ie),t(x,re),t(re,Fe),t(re,ke),t(re,Oe),t(x,Ce),t(x,ce),t(Q,Be),t(Q,ze),ve||(We=[O(s,"click",n[15]),O(u,"click",n[14]),O(w,"click",n[4]),O(A,"ionItemReorder",n[17]),O(_,"click",n[7]),O(j,"ionChange",n[3]),O(j,"ionBlur",n[13]),O(N,"ionChange",n[12]),O(N,"ionFocus",Ot),O(N,"ionBlur",n[13]),O(oe,"click",n[11]),O(ce,"click",n[10])],ve=!0)},p(c,b){var G,Re,He,Ve,Ae,Ge,Je,Ke,Qe;if(b&2&&e!==(e=new Date(new Date((G=c[1])==null?void 0:G.date).getTime()+new Date((Re=c[1])==null?void 0:Re.date).getTimezoneOffset()*6e4).toDateString()+"")&&$(h,e),c[0]!=="new"?S?S.p(c,b):(S=Ue(c),S.c(),S.m(y,null)):S&&(S.d(1),S=null),b&2&&K!==(K=(((He=c[1])==null?void 0:He.food_total)||0).toFixed(2)+"")&&$(H,K),(Ae=(Ve=c[2])==null?void 0:Ve.user_metadata)!=null&&Ae.daily_budget?I?I.p(c,b):(I=xe(c),I.c(),I.m(P,null)):I&&(I.d(1),I=null),b&258){ae=((Je=(Ge=c[1])==null?void 0:Ge.food_log)==null?void 0:Je.entries)||[];let W;for(W=0;W<ae.length;W+=1){const Xe=Ze(c,ae,W);F[W]?F[W].p(Xe,b):(F[W]=$e(Xe),F[W].c(),F[W].m(A,null))}for(;W<F.length;W+=1)F[W].d(1);F.length=ae.length}b&2&&te!==(te=(Ke=c[1])==null?void 0:Ke.notes)&&a(j,"value",te),b&2&&ue!==(ue=(Qe=c[1])==null?void 0:Qe.weight)&&a(N,"value",ue),b&2&&ge!==(ge=c[1].water_total<=0?"medium":"dark")&&a(oe,"color",ge),b&2&&pe!==(pe=(c[1].water_total||0)+"")&&$(ke,pe)},d(c){c&&Y(r),S&&S.d(),c&&Y(Z),c&&Y(p),I&&I.d(),_t(F,c),c&&Y(le),c&&Y(Q),ve=!1,ut(We)}}}function Ft(n){let r,l;return r=new ft({props:{$$slots:{default:[It]},$$scope:{ctx:n}}}),{c(){lt(r.$$.fragment)},m(d,s){nt(r,d,s),l=!0},p(d,[s]){const g={};s&536870919&&(g.$$scope={dirty:s,ctx:d}),r.$set(g)},i(d){l||(it(r.$$.fragment,d),l=!0)},o(d){rt(r.$$.fragment,d),l=!1},d(d){at(r,d)}}}function Ot(n){n.target.scrollTop=0;try{(parseFloat(n.target.value)||0)===0&&(n.target.value="")}catch(r){console.error("error clearing zero value",r)}}function Ct(n,r,l){let d,s,g;ye(n,gt,o=>l(19,d=o)),ye(n,St,o=>l(2,s=o)),ye(n,pt,o=>l(20,g=o));const f=Dt.getInstance();jt.getInstance();let u=g.id,e={},h;(async()=>{if(u==="new"){l(1,e={id:f.gen_random_uuid(),user_id:(s==null?void 0:s.id)||null,created_at:new Date().toISOString(),date:new Date().toISOString().substring(0,10),food_log:{entries:[]},food_total:0,activity_log:{entries:[]},water_log:{entries:[]},water_total:0,weight:0,notes:""});const{data:o,error:_}=await f.getDayId(new Date().toISOString().substring(0,10));if(o&&o.id){const{data:D,error:C}=await f.getNextFreeDay();C?console.error("getNextFreeDay error",C):(l(0,u=D),l(1,e={id:f.gen_random_uuid(),user_id:(s==null?void 0:s.id)||null,created_at:new Date().toISOString(),date:new Date(D).toISOString().substring(0,10),food_log:{entries:[]},food_total:0,activity_log:{entries:[]},water_log:{entries:[]},water_total:0,weight:0,notes:""}))}}else u.length===10?(l(1,e={id:f.gen_random_uuid(),user_id:(s==null?void 0:s.id)||null,created_at:new Date().toISOString(),date:u,food_log:{entries:[]},food_total:0,activity_log:{entries:[]},water_log:{entries:[]},water_total:0,weight:0,notes:""}),l(0,u=e.id)):h=f.getDataSubscription("day",{id:u}).subscribe(o=>{l(1,e=o)})})(),st(async()=>{if(!s){d("/info");return}if(u==="new")try{const{data:o,error:_}=await f.getCurrentWeight();_?(console.error("getCurrentWeight error",_),l(1,e.weight=0,e)):l(1,e.weight=o.weight,e)}catch(o){console.error("exception",o),l(1,e.weight=0,e)}}),ct(()=>{try{h&&h.unsubscribe()}catch(o){console.error("error unsubscribing",o)}});const y=o=>{if(typeof e[o.target.name]=="number")try{l(1,e[o.target.name]=parseFloat(o.target.value),e)}catch{l(1,e[o.target.name]=0,e)}else l(1,e[o.target.name]=o.target.value,e)},Z=o=>{l(1,e.date=new Date(o.target.value),e)},p=async()=>{e.user_id||l(1,e.user_id=s.id,e);try{l(1,e.food_total=0,e),e.food_log.entries.forEach(_=>{l(1,e.food_total+=(_==null?void 0:_.amt)||0,e)})}catch(_){console.error("error calculating food total",_)}const{error:o}=await f.save_day(e);o?(console.error("save_day error",o.message),o.message.startsWith("duplicate key value violates unique constraint")?yt({header:"Duplicate Day",message:"This day already exists.  Please edit the existing day."}):console.error("save day error",o)):(l(0,u=e.id),f.updateDataSubscription("day",{id:u}))},B=async()=>{await vt({header:"Delete Day",message:"Are you sure?",okHander:async()=>{const{data:o,error:_}=await f.delete_day(e);_?console.error("Error deleting day",_):w()}})},w=()=>{d("/calendar")},J=async o=>{e.food_log.entries||l(1,e.food_log.entries=[],e);const _={id:f.gen_random_uuid(),food_id:"",title:"",desc:"",cat:"",cps:0,qty:1,amt:0,created:new Date().toISOString()};await z(_,e.food_log.entries.length,!0),l(1,e.food_log.entries=[...e.food_log.entries],e),p()},M=async o=>{await z(e.food_log.entries[o],o,!1),l(1,e.food_log.entries=[...e.food_log.entries],e),p()},T=({detail:o})=>{const{from:_,to:D}=o,C=e.food_log.entries.splice(_,1)[0];e.food_log.entries.splice(D,0,C);const k=[...e.food_log.entries];p(),o.complete(k)},z=async(o,_,D)=>{const C=await mt.create({component:kt,componentProps:{entry:o||{},isNew:D},showBackdrop:!0,backdropDismiss:!0});await C.present();const{data:k}=await C.onWillDismiss();return(k==null?void 0:k.data)!==null?(k.data.deleted?e.food_log.entries.splice(_,1):l(1,e.food_log.entries[_]=k.data,e),!0):!1};async function R(){e.water_log.entries.push({id:f.gen_random_uuid(),amt:1,created:new Date().toISOString()}),l(1,e.water_total++,e),p()}async function K(){e.water_total<=0||(e.water_log.entries.pop(),l(1,e.water_total--,e),p())}function H(o){try{l(1,e[o.target.name]=parseFloat(o.target.value)||0,e)}catch(_){console.error("handleNumberValue error",_),l(1,e[o.target.name]=0,e)}}function U(o){p()}function P(){const o=document.getElementById("datepicker");u=="new"||u.length===10?o&&o.classList.toggle("hidden"):o.classList.contains("hidden")||o.classList.add("hidden")}return[u,e,s,y,Z,B,w,J,M,T,R,K,H,U,P,()=>{w()},o=>{M(o)},o=>{o.stopPropagation(),o.preventDefault(),T(o),o.stopPropagation(),o.preventDefault()}]}class Vt extends et{constructor(r){super(),tt(this,r,Ct,Ft,ot,{})}}export{Vt as default};
