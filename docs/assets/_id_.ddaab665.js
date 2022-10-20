import{S as xe,i as $e,s as et,h as tt,m as ot,p as lt,q as nt,r as it,w as we,x as rt,z as st,b as s,d as a,a as H,f as t,l as O,H as at,g as V,t as v,o as X,e as ct,c as p,k as L,u as dt,j as ue,v as _t}from"./index.32cc4062.js";import{I as ft}from"./IonPage.62631d5b.js";import{g as ut,p as gt}from"./index.b205a2fb.js";import{m as mt}from"./controllers.19a5d25b.js";import{y as pt,C as bt,D as Ge,E as ht}from"./index.8eb3de29.js";import wt from"./FoodEntryModal.4de2845e.js";import{s as kt,a as vt}from"./alert.f9a58e0c.js";import{S as yt,U as Dt}from"./supabase.data.service.ee4b387c.js";import{c as jt}from"./user.store.3d892c3c.js";import"./loadingMessage.9b4fd445.js";import"./FoodSearchModal.b2e307e1.js";import"./BehaviorSubject.5c05d6f3.js";function Je(n,r,o){const i=n.slice();return i[24]=r[o],i[26]=o,i}function Ke(n){let r,o,i,d;return{c(){r=s("ion-button"),o=s("ion-icon"),a(o,"slot","icon-only"),a(o,"icon",pt)},m(g,c){H(g,r,c),t(r,o),i||(d=O(r,"click",n[5]),i=!0)},p:at,d(g){g&&V(r),i=!1,d()}}}function Qe(n){var d,g,c;let r,o=(((g=(d=n[2])==null?void 0:d.user_metadata)==null?void 0:g.daily_budget)-((c=n[1])==null?void 0:c.food_total)||0).toFixed(2)+"",i;return{c(){r=v("Left: "),i=v(o)},m(u,e){H(u,r,e),H(u,i,e)},p(u,e){var b,m,w;e&6&&o!==(o=(((m=(b=u[2])==null?void 0:b.user_metadata)==null?void 0:m.daily_budget)-((w=u[1])==null?void 0:w.food_total)||0).toFixed(2)+"")&&X(i,o)},d(u){u&&V(r),u&&V(i)}}}function Xe(n){var d,g;let r,o=(g=(d=n[1])==null?void 0:d.food_log)==null?void 0:g.entries,i=[];for(let c=0;c<o.length;c+=1)i[c]=Ze(Je(n,o,c));return{c(){for(let c=0;c<i.length;c+=1)i[c].c();r=ct()},m(c,u){for(let e=0;e<i.length;e+=1)i[e].m(c,u);H(c,r,u)},p(c,u){var e,b;if(u&258){o=(b=(e=c[1])==null?void 0:e.food_log)==null?void 0:b.entries;let m;for(m=0;m<o.length;m+=1){const w=Je(c,o,m);i[m]?i[m].p(w,u):(i[m]=Ze(w),i[m].c(),i[m].m(r.parentNode,r))}for(;m<i.length;m+=1)i[m].d(1);i.length=o.length}},d(c){dt(i,c),c&&V(r)}}}function Ze(n){var W,j,E,ne;let r,o,i,d,g=((W=n[24])==null?void 0:W.title)+"",c,u,e,b,m=(((j=n[24])==null?void 0:j.desc)||"")+"",w,I,k,y,D,N=(((E=n[24])==null?void 0:E.amt)||0).toFixed(2)+"",R,z,T,U,Y,A=(((ne=n[24])==null?void 0:ne.cat)||"")+"",J,M,Z,l;function _(){return n[16](n[26])}return{c(){r=s("ion-item"),o=s("ion-reorder"),i=p(),d=s("div"),c=v(g),u=s("br"),e=p(),b=s("span"),w=v(m),I=v("\xA0"),k=p(),y=s("ion-note"),D=s("div"),R=v(N),z=s("br"),T=p(),U=s("span"),Y=v("\xA0"),J=v(A),M=p(),a(o,"slot","start"),L(b,"class","description svelte-1ljocbk"),L(U,"class","description svelte-1ljocbk"),a(y,"slot","end"),a(y,"class","right svelte-1ljocbk")},m(K,P){H(K,r,P),t(r,o),t(r,i),t(r,d),t(d,c),t(d,u),t(d,e),t(d,b),t(b,w),t(b,I),t(r,k),t(r,y),t(y,D),t(D,R),t(D,z),t(D,T),t(D,U),t(U,Y),t(U,J),t(r,M),Z||(l=O(r,"click",_),Z=!0)},p(K,P){var S,x,ee,G;n=K,P&2&&g!==(g=((S=n[24])==null?void 0:S.title)+"")&&X(c,g),P&2&&m!==(m=(((x=n[24])==null?void 0:x.desc)||"")+"")&&X(w,m),P&2&&N!==(N=(((ee=n[24])==null?void 0:ee.amt)||0).toFixed(2)+"")&&X(R,N),P&2&&A!==(A=(((G=n[24])==null?void 0:G.cat)||"")+"")&&X(J,A)},d(K){K&&V(r),Z=!1,l()}}}function St(n){var Ie,Ee,ze,Te,We,Pe,qe;let r,o,i,d,g,c,u,e=new Date(new Date((Ie=n[1])==null?void 0:Ie.date).getTime()+new Date((Ee=n[1])==null?void 0:Ee.date).getTimezoneOffset()*6e4).toDateString()+"",b,m,w,I,k,y,D,N,R,z,T,U,Y=(((ze=n[1])==null?void 0:ze.food_total)||0).toFixed(2)+"",A,J,M,Z,l,_,W,j,E,ne,K,P,S,x,ee,G,ge,ie,me,te,se,ke,ae,q,ce,ve,pe,oe,de,ye,Q,$,_e,De,le,je,fe=(n[1].water_total||0)+"",be,Se,Fe,re,Be,Ce,he,Oe,F=n[0]!=="new"&&Ke(n),B=((We=(Te=n[2])==null?void 0:Te.user_metadata)==null?void 0:We.daily_budget)&&Qe(n),C=((qe=(Pe=n[1])==null?void 0:Pe.food_log)==null?void 0:qe.entries)&&Xe(n);return{c(){var f,h;r=s("ion-header"),o=s("ion-toolbar"),i=s("ion-buttons"),d=s("ion-button"),g=s("ion-icon"),c=p(),u=s("ion-title"),b=v(e),m=p(),w=s("ion-buttons"),F&&F.c(),I=p(),k=s("ion-content"),y=s("div"),D=s("ion-datetime"),N=p(),R=s("ion-grid"),z=s("ion-row"),T=s("ion-col"),U=v("Total: "),A=v(Y),J=p(),M=s("ion-col"),B&&B.c(),Z=p(),l=s("ion-list"),_=s("ion-reorder-group"),C&&C.c(),W=p(),j=s("ion-item"),E=s("ion-icon"),ne=v(`
				new food entry`),K=p(),P=s("div"),S=s("ion-input"),ee=p(),G=s("ion-footer"),ge=s("ion-grid"),ie=s("ion-row"),me=s("ion-col"),te=s("div"),se=s("div"),se.textContent="Weight",ke=p(),ae=s("div"),q=s("ion-input"),ve=p(),pe=s("ion-col"),oe=s("div"),de=s("div"),de.textContent="Water",ye=p(),Q=s("div"),$=s("ion-icon"),De=p(),le=s("span"),je=v("\xA0"),be=v(fe),Se=v("\xA0"),Fe=p(),re=s("ion-icon"),Be=p(),Ce=s("br"),a(g,"slot","icon-only"),a(g,"icon",bt),a(i,"slot","start"),a(w,"slot","end"),a(r,"translucent","true"),a(D,"id","datepicker"),a(D,"class","hidden svelte-1ljocbk"),L(y,"class","centered svelte-1ljocbk"),ue(T,"text-align","left"),ue(T,"font-weight","bold"),ue(M,"text-align","right"),ue(M,"font-weight","bold"),a(_,"id","food_log_group"),a(_,"disabled","false"),a(E,"icon",Ge),a(E,"slot","start"),a(j,"lines","none"),a(l,"lines","full"),a(S,"class","notes-box svelte-1ljocbk"),a(S,"value",x=(f=n[1])==null?void 0:f.notes),a(S,"required",""),a(S,"name","notes"),a(S,"type","text"),a(S,"placeholder","notes"),L(P,"class","ion-padding"),a(k,"class","ion-padding"),L(se,"class","footertitle svelte-1ljocbk"),a(q,"name","weight"),a(q,"class","weightBox svelte-1ljocbk"),a(q,"type","decimal"),a(q,"inputmode","decimal"),a(q,"value",ce=(h=n[1])==null?void 0:h.weight),L(ae,"class","footertitle svelte-1ljocbk"),L(te,"class","left svelte-1ljocbk"),L(de,"class","footertitle svelte-1ljocbk"),a($,"color",_e=n[1].water_total<=0?"medium":"dark"),a($,"icon",ht),a($,"size","large"),L(le,"class","water-digits svelte-1ljocbk"),a(re,"icon",Ge),a(re,"size","large"),L(Q,"class","footertitle together svelte-1ljocbk"),L(oe,"class","right svelte-1ljocbk")},m(f,h){H(f,r,h),t(r,o),t(o,i),t(i,d),t(d,g),t(o,c),t(o,u),t(u,b),t(o,m),t(o,w),F&&F.m(w,null),H(f,I,h),H(f,k,h),t(k,y),t(y,D),t(k,N),t(k,R),t(R,z),t(z,T),t(T,U),t(T,A),t(z,J),t(z,M),B&&B.m(M,null),t(k,Z),t(k,l),t(l,_),C&&C.m(_,null),t(l,W),t(l,j),t(j,E),t(j,ne),t(k,K),t(k,P),t(P,S),H(f,ee,h),H(f,G,h),t(G,ge),t(ge,ie),t(ie,me),t(me,te),t(te,se),t(te,ke),t(te,ae),t(ae,q),t(ie,ve),t(ie,pe),t(pe,oe),t(oe,de),t(oe,ye),t(oe,Q),t(Q,$),t(Q,De),t(Q,le),t(le,je),t(le,be),t(le,Se),t(Q,Fe),t(Q,re),t(G,Be),t(G,Ce),he||(Oe=[O(d,"click",n[15]),O(u,"click",n[14]),O(D,"click",n[4]),O(_,"ionItemReorder",n[9]),O(j,"click",n[7]),O(S,"ionChange",n[3]),O(S,"ionBlur",n[13]),O(q,"ionChange",n[12]),O(q,"ionFocus",Bt),O(q,"ionBlur",n[13]),O($,"click",n[11]),O(re,"click",n[10])],he=!0)},p(f,h){var Le,Ne,Ue,Ae,Me,He,Ve,Re,Ye;h&2&&e!==(e=new Date(new Date((Le=f[1])==null?void 0:Le.date).getTime()+new Date((Ne=f[1])==null?void 0:Ne.date).getTimezoneOffset()*6e4).toDateString()+"")&&X(b,e),f[0]!=="new"?F?F.p(f,h):(F=Ke(f),F.c(),F.m(w,null)):F&&(F.d(1),F=null),h&2&&Y!==(Y=(((Ue=f[1])==null?void 0:Ue.food_total)||0).toFixed(2)+"")&&X(A,Y),(Me=(Ae=f[2])==null?void 0:Ae.user_metadata)!=null&&Me.daily_budget?B?B.p(f,h):(B=Qe(f),B.c(),B.m(M,null)):B&&(B.d(1),B=null),(Ve=(He=f[1])==null?void 0:He.food_log)!=null&&Ve.entries?C?C.p(f,h):(C=Xe(f),C.c(),C.m(_,null)):C&&(C.d(1),C=null),h&2&&x!==(x=(Re=f[1])==null?void 0:Re.notes)&&a(S,"value",x),h&2&&ce!==(ce=(Ye=f[1])==null?void 0:Ye.weight)&&a(q,"value",ce),h&2&&_e!==(_e=f[1].water_total<=0?"medium":"dark")&&a($,"color",_e),h&2&&fe!==(fe=(f[1].water_total||0)+"")&&X(be,fe)},d(f){f&&V(r),F&&F.d(),f&&V(I),f&&V(k),B&&B.d(),C&&C.d(),f&&V(ee),f&&V(G),he=!1,_t(Oe)}}}function Ft(n){let r,o;return r=new ft({props:{$$slots:{default:[St]},$$scope:{ctx:n}}}),{c(){tt(r.$$.fragment)},m(i,d){ot(r,i,d),o=!0},p(i,[d]){const g={};d&134217735&&(g.$$scope={dirty:d,ctx:i}),r.$set(g)},i(i){o||(lt(r.$$.fragment,i),o=!0)},o(i){nt(r.$$.fragment,i),o=!1},d(i){it(r,i)}}}function Bt(n){n.target.scrollTop=0;try{(parseFloat(n.target.value)||0)===0&&(n.target.value="")}catch(r){console.error("error clearing zero value",r)}}function Ct(n,r,o){let i,d,g;we(n,ut,l=>o(18,i=l)),we(n,jt,l=>o(2,d=l)),we(n,gt,l=>o(19,g=l));const c=yt.getInstance();Dt.getInstance();let u=g.id,e={};console.log("*** id",u);let b;u==="new"?(console.log("it is new"),e={id:c.gen_random_uuid(),user_id:(d==null?void 0:d.id)||null,created_at:new Date().toISOString(),date:new Date().toISOString().substring(0,10),food_log:{entries:[]},food_total:0,activity_log:{entries:[]},water_log:{entries:[]},water_total:0,weight:0,notes:""},console.log("*** new day",e)):b=c.getDataSubscription("day",{id:u}).subscribe(l=>{o(1,e=l),console.log("*** day",e)}),rt(async()=>{if(!d){i("/info");return}if(u==="new")try{const{data:l,error:_}=await c.getCurrentWeight();_?(console.error("getCurrentWeight error",_),o(1,e.weight=0,e)):o(1,e.weight=l.weight,e)}catch(l){console.log("exception",l),o(1,e.weight=0,e)}}),st(()=>{try{b&&b.unsubscribe()}catch(l){console.error("error unsubscribing",l)}});const m=l=>{if(typeof e[l.target.name]=="number")try{o(1,e[l.target.name]=parseFloat(l.target.value),e)}catch{o(1,e[l.target.name]=0,e)}else o(1,e[l.target.name]=l.target.value,e)},w=l=>{o(1,e.date=new Date(l.target.value),e)},I=async()=>{e.user_id||o(1,e.user_id=d.id,e);try{o(1,e.food_total=0,e),e.food_log.entries.forEach(_=>{o(1,e.food_total+=_.amt,e)})}catch(_){console.error("error calculating food total",_)}const{error:l}=await c.save_day(e);l?(console.log("error message is: ",l.message),l.message.startsWith("duplicate key value violates unique constraint")?(console.log("DUPLICATE DAY"),vt({header:"Duplicate Day",message:"This day already exists.  Please edit the existing day."})):console.error("save day error",l)):o(0,u=e.id)},k=async()=>{await kt({header:"Delete Day",message:"Are you sure?",okHander:async()=>{const{data:l,error:_}=await c.delete_day(e);_?console.error("Error deleting day",_):y()}})},y=()=>{i("/calendar")},D=async l=>{e.food_log.entries||o(1,e.food_log.entries=[],e);const _={id:c.gen_random_uuid(),food_id:"",title:"",desc:"",cat:"",cps:0,qty:1,amt:0,created:new Date().toISOString()},W=await z(_,e.food_log.entries.length,!0);console.log("done calling openFoodEntryBox",W),console.log("day.food_log.entries",e.food_log.entries),o(1,e.food_log.entries=[...e.food_log.entries],e),I()},N=async l=>{const _=await z(e.food_log.entries[l],l,!1);console.log("edit_food_log_entry is done calling openFoodEntryBox",_),console.log("day.food_log.entries",e.food_log.entries),o(1,e.food_log.entries=[...e.food_log.entries],e),I()},R=({detail:l})=>{const{from:_,to:W}=l,j=e.food_log.entries.splice(_,1)[0];e.food_log.entries.splice(W,0,j),l.complete(),console.log("reorder_food_log: day",e),I()},z=async(l,_,W)=>{const j=await mt.create({component:wt,componentProps:{entry:l,isNew:W},showBackdrop:!0,backdropDismiss:!0});await j.present();const{data:E}=await j.onWillDismiss();return(E==null?void 0:E.data)!==null?(E.data.deleted?e.food_log.entries.splice(_,1):o(1,e.food_log.entries[_]=E.data,e),console.log("*** day.food_log.entries",e.food_log.entries),!0):!1};async function T(){e.water_log.entries.push({id:c.gen_random_uuid(),amt:1,created:new Date().toISOString()}),o(1,e.water_total++,e),I()}async function U(){e.water_total<=0||(e.water_log.entries.pop(),o(1,e.water_total--,e),I())}function Y(l){try{o(1,e[l.target.name]=parseFloat(l.target.value)||0,e)}catch(_){console.error("handleNumberValue error",_),o(1,e[l.target.name]=0,e)}}function A(l){console.log("*** saveOnBlur",l.target.value),I()}function J(){console.log("** toggleDatePicker");const l=document.getElementById("datepicker");u=="new"?l&&l.classList.toggle("hidden"):l.classList.contains("hidden")||l.classList.add("hidden")}return[u,e,d,m,w,k,y,D,N,R,T,U,Y,A,J,()=>{y()},l=>{N(l)}]}class Mt extends xe{constructor(r){super(),$e(this,r,Ct,Ft,et,{})}}export{Mt as default};
