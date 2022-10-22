import{S as xe,i as $e,s as et,h as tt,m as ot,p as lt,q as nt,r as it,w as we,x as rt,z as st,b as s,d,a as V,f as t,l as B,H as at,g as R,t as j,o as Z,e as ct,c as b,k as P,u as dt,j as ge,v as _t}from"./index.9491b236.js";import{I as ft}from"./IonPage.965bdc74.js";import{g as gt,p as ut}from"./index.4c209845.js";import{m as mt}from"./controllers.23d27572.js";import{y as pt,C as bt,D as Je,E as ht}from"./index.8eb3de29.js";import wt from"./FoodEntryModal.a768d9c5.js";import{s as yt,a as kt}from"./alert.c2ce854a.js";import{S as vt,U as Dt}from"./supabase.data.service.91eda452.js";import{c as jt}from"./user.store.23cb988e.js";import"./loadingMessage.d9ea9475.js";import"./FoodSearchModal.5cd908e4.js";import"./BehaviorSubject.9eaf438a.js";function Ke(n,r,o){const i=n.slice();return i[25]=r[o],i[27]=o,i}function Qe(n){let r,o,i,c;return{c(){r=s("ion-button"),o=s("ion-icon"),d(o,"slot","icon-only"),d(o,"icon",pt)},m(u,a){V(u,r,a),t(r,o),i||(c=B(r,"click",n[5]),i=!0)},p:at,d(u){u&&R(r),i=!1,c()}}}function Ue(n){var c,u,a;let r,o=(((u=(c=n[2])==null?void 0:c.user_metadata)==null?void 0:u.daily_budget)-((a=n[1])==null?void 0:a.food_total)||0).toFixed(2)+"",i;return{c(){r=j("Left: "),i=j(o)},m(_,e){V(_,r,e),V(_,i,e)},p(_,e){var h,m,k;e&6&&o!==(o=(((m=(h=_[2])==null?void 0:h.user_metadata)==null?void 0:m.daily_budget)-((k=_[1])==null?void 0:k.food_total)||0).toFixed(2)+"")&&Z(i,o)},d(_){_&&R(r),_&&R(i)}}}function Xe(n){var c,u;let r,o=(u=(c=n[1])==null?void 0:c.food_log)==null?void 0:u.entries,i=[];for(let a=0;a<o.length;a+=1)i[a]=Ze(Ke(n,o,a));return{c(){for(let a=0;a<i.length;a+=1)i[a].c();r=ct()},m(a,_){for(let e=0;e<i.length;e+=1)i[e].m(a,_);V(a,r,_)},p(a,_){var e,h;if(_&258){o=(h=(e=a[1])==null?void 0:e.food_log)==null?void 0:h.entries;let m;for(m=0;m<o.length;m+=1){const k=Ke(a,o,m);i[m]?i[m].p(k,_):(i[m]=Ze(k),i[m].c(),i[m].m(r.parentNode,r))}for(;m<i.length;m+=1)i[m].d(1);i.length=o.length}},d(a){dt(i,a),a&&R(r)}}}function Ze(n){var g,w,D,T;let r,o,i,c,u=((g=n[25])==null?void 0:g.title)+"",a,_,e,h,m=(((w=n[25])==null?void 0:w.desc)||"")+"",k,K,p,C,v,Y=(((D=n[25])==null?void 0:D.amt)||0).toFixed(2)+"",q,L,E,A,G,M=(((T=n[25])==null?void 0:T.cat)||"")+"",Q,z,x,H;function l(){return n[16](n[27])}return{c(){r=s("ion-item"),o=s("ion-reorder"),i=b(),c=s("div"),a=j(u),_=s("br"),e=b(),h=s("span"),k=j(m),K=j("\xA0"),p=b(),C=s("ion-note"),v=s("div"),q=j(Y),L=s("br"),E=b(),A=s("span"),G=j("\xA0"),Q=j(M),z=b(),d(o,"slot","start"),P(h,"class","description svelte-1ljocbk"),P(A,"class","description svelte-1ljocbk"),d(C,"slot","end"),d(C,"class","right svelte-1ljocbk")},m(U,W){V(U,r,W),t(r,o),t(r,i),t(r,c),t(c,a),t(c,_),t(c,e),t(c,h),t(h,k),t(h,K),t(r,p),t(r,C),t(C,v),t(v,q),t(v,L),t(v,E),t(v,A),t(A,G),t(A,Q),t(r,z),x||(H=B(r,"click",l),x=!0)},p(U,W){var S,$,te,J;n=U,W&2&&u!==(u=((S=n[25])==null?void 0:S.title)+"")&&Z(a,u),W&2&&m!==(m=((($=n[25])==null?void 0:$.desc)||"")+"")&&Z(k,m),W&2&&Y!==(Y=(((te=n[25])==null?void 0:te.amt)||0).toFixed(2)+"")&&Z(q,Y),W&2&&M!==(M=(((J=n[25])==null?void 0:J.cat)||"")+"")&&Z(Q,M)},d(U){U&&R(r),x=!1,H()}}}function St(n){var Ce,Ee,ze,Te,We,Ne,Pe;let r,o,i,c,u,a,_,e=new Date(new Date((Ce=n[1])==null?void 0:Ce.date).getTime()+new Date((Ee=n[1])==null?void 0:Ee.date).getTimezoneOffset()*6e4).toDateString()+"",h,m,k,K,p,C,v,Y,q,L,E,A,G=(((ze=n[1])==null?void 0:ze.food_total)||0).toFixed(2)+"",M,Q,z,x,H,l,g,w,D,T,U,W,S,$,te,J,ue,ie,me,oe,se,ye,ae,N,ce,ke,pe,le,de,ve,X,ee,_e,De,ne,je,fe=(n[1].water_total||0)+"",be,Se,Fe,re,Ie,Oe,he,Be,F=n[0]!=="new"&&Qe(n),I=((We=(Te=n[2])==null?void 0:Te.user_metadata)==null?void 0:We.daily_budget)&&Ue(n),O=((Pe=(Ne=n[1])==null?void 0:Ne.food_log)==null?void 0:Pe.entries)&&Xe(n);return{c(){var f,y;r=s("ion-header"),o=s("ion-toolbar"),i=s("ion-buttons"),c=s("ion-button"),u=s("ion-icon"),a=b(),_=s("ion-title"),h=j(e),m=b(),k=s("ion-buttons"),F&&F.c(),K=b(),p=s("ion-content"),C=s("div"),v=s("ion-datetime"),Y=b(),q=s("ion-grid"),L=s("ion-row"),E=s("ion-col"),A=j("Total: "),M=j(G),Q=b(),z=s("ion-col"),I&&I.c(),x=b(),H=s("ion-list"),l=s("ion-reorder-group"),O&&O.c(),g=b(),w=s("ion-item"),D=s("ion-icon"),T=j(`
				new food entry`),U=b(),W=s("div"),S=s("ion-input"),te=b(),J=s("ion-footer"),ue=s("ion-grid"),ie=s("ion-row"),me=s("ion-col"),oe=s("div"),se=s("div"),se.textContent="Weight",ye=b(),ae=s("div"),N=s("ion-input"),ke=b(),pe=s("ion-col"),le=s("div"),de=s("div"),de.textContent="Water",ve=b(),X=s("div"),ee=s("ion-icon"),De=b(),ne=s("span"),je=j("\xA0"),be=j(fe),Se=j("\xA0"),Fe=b(),re=s("ion-icon"),Ie=b(),Oe=s("br"),d(u,"slot","icon-only"),d(u,"icon",bt),d(i,"slot","start"),d(k,"slot","end"),d(r,"translucent","true"),d(v,"id","datepicker"),d(v,"class","hidden svelte-1ljocbk"),P(C,"class","centered svelte-1ljocbk"),ge(E,"text-align","left"),ge(E,"font-weight","bold"),ge(z,"text-align","right"),ge(z,"font-weight","bold"),d(l,"id","food_log_group"),d(l,"disabled","false"),d(D,"icon",Je),d(D,"slot","start"),d(w,"lines","none"),d(H,"lines","full"),d(S,"class","notes-box svelte-1ljocbk"),d(S,"value",$=(f=n[1])==null?void 0:f.notes),d(S,"required",""),d(S,"name","notes"),d(S,"type","text"),d(S,"placeholder","notes"),P(W,"class","ion-padding"),d(p,"class","ion-padding"),P(se,"class","footertitle svelte-1ljocbk"),d(N,"name","weight"),d(N,"class","weightBox svelte-1ljocbk"),d(N,"type","decimal"),d(N,"inputmode","decimal"),d(N,"value",ce=(y=n[1])==null?void 0:y.weight),P(ae,"class","footertitle svelte-1ljocbk"),P(oe,"class","left svelte-1ljocbk"),P(de,"class","footertitle svelte-1ljocbk"),d(ee,"color",_e=n[1].water_total<=0?"medium":"dark"),d(ee,"icon",ht),d(ee,"size","large"),P(ne,"class","water-digits svelte-1ljocbk"),d(re,"icon",Je),d(re,"size","large"),P(X,"class","footertitle together svelte-1ljocbk"),P(le,"class","right svelte-1ljocbk")},m(f,y){V(f,r,y),t(r,o),t(o,i),t(i,c),t(c,u),t(o,a),t(o,_),t(_,h),t(o,m),t(o,k),F&&F.m(k,null),V(f,K,y),V(f,p,y),t(p,C),t(C,v),t(p,Y),t(p,q),t(q,L),t(L,E),t(E,A),t(E,M),t(L,Q),t(L,z),I&&I.m(z,null),t(p,x),t(p,H),t(H,l),O&&O.m(l,null),t(H,g),t(H,w),t(w,D),t(w,T),t(p,U),t(p,W),t(W,S),V(f,te,y),V(f,J,y),t(J,ue),t(ue,ie),t(ie,me),t(me,oe),t(oe,se),t(oe,ye),t(oe,ae),t(ae,N),t(ie,ke),t(ie,pe),t(pe,le),t(le,de),t(le,ve),t(le,X),t(X,ee),t(X,De),t(X,ne),t(ne,je),t(ne,be),t(ne,Se),t(X,Fe),t(X,re),t(J,Ie),t(J,Oe),he||(Be=[B(c,"click",n[15]),B(_,"click",n[14]),B(v,"click",n[4]),B(l,"ionItemReorder",n[9]),B(w,"click",n[7]),B(S,"ionChange",n[3]),B(S,"ionBlur",n[13]),B(N,"ionChange",n[12]),B(N,"ionFocus",It),B(N,"ionBlur",n[13]),B(ee,"click",n[11]),B(re,"click",n[10])],he=!0)},p(f,y){var qe,Le,Ae,Me,He,Ve,Re,Ye,Ge;y&2&&e!==(e=new Date(new Date((qe=f[1])==null?void 0:qe.date).getTime()+new Date((Le=f[1])==null?void 0:Le.date).getTimezoneOffset()*6e4).toDateString()+"")&&Z(h,e),f[0]!=="new"?F?F.p(f,y):(F=Qe(f),F.c(),F.m(k,null)):F&&(F.d(1),F=null),y&2&&G!==(G=(((Ae=f[1])==null?void 0:Ae.food_total)||0).toFixed(2)+"")&&Z(M,G),(He=(Me=f[2])==null?void 0:Me.user_metadata)!=null&&He.daily_budget?I?I.p(f,y):(I=Ue(f),I.c(),I.m(z,null)):I&&(I.d(1),I=null),(Re=(Ve=f[1])==null?void 0:Ve.food_log)!=null&&Re.entries?O?O.p(f,y):(O=Xe(f),O.c(),O.m(l,null)):O&&(O.d(1),O=null),y&2&&$!==($=(Ye=f[1])==null?void 0:Ye.notes)&&d(S,"value",$),y&2&&ce!==(ce=(Ge=f[1])==null?void 0:Ge.weight)&&d(N,"value",ce),y&2&&_e!==(_e=f[1].water_total<=0?"medium":"dark")&&d(ee,"color",_e),y&2&&fe!==(fe=(f[1].water_total||0)+"")&&Z(be,fe)},d(f){f&&R(r),F&&F.d(),f&&R(K),f&&R(p),I&&I.d(),O&&O.d(),f&&R(te),f&&R(J),he=!1,_t(Be)}}}function Ft(n){let r,o;return r=new ft({props:{$$slots:{default:[St]},$$scope:{ctx:n}}}),{c(){tt(r.$$.fragment)},m(i,c){ot(r,i,c),o=!0},p(i,[c]){const u={};c&268435463&&(u.$$scope={dirty:c,ctx:i}),r.$set(u)},i(i){o||(lt(r.$$.fragment,i),o=!0)},o(i){nt(r.$$.fragment,i),o=!1},d(i){it(r,i)}}}function It(n){n.target.scrollTop=0;try{(parseFloat(n.target.value)||0)===0&&(n.target.value="")}catch(r){console.error("error clearing zero value",r)}}function Ot(n,r,o){let i,c,u;we(n,gt,l=>o(18,i=l)),we(n,jt,l=>o(2,c=l)),we(n,ut,l=>o(19,u=l));const a=vt.getInstance();Dt.getInstance();let _=u.id,e={};console.log("*** id",_);let h;(async()=>{if(_==="new"){console.log("it is new"),o(1,e={id:a.gen_random_uuid(),user_id:(c==null?void 0:c.id)||null,created_at:new Date().toISOString(),date:new Date().toISOString().substring(0,10),food_log:{entries:[]},food_total:0,activity_log:{entries:[]},water_log:{entries:[]},water_total:0,weight:0,notes:""});const{data:l,error:g}=await a.getDayId(new Date().toISOString().substring(0,10));if(l&&l.id){const{data:w,error:D}=await a.getNextFreeDay();console.log("getNextFreeDay",w,D),D?console.log("getNextFreeDay error",D):(o(0,_=w),o(1,e={id:a.gen_random_uuid(),user_id:(c==null?void 0:c.id)||null,created_at:new Date().toISOString(),date:new Date(w).toISOString().substring(0,10),food_log:{entries:[]},food_total:0,activity_log:{entries:[]},water_log:{entries:[]},water_total:0,weight:0,notes:""}))}}else _.length===10?(o(1,e={id:a.gen_random_uuid(),user_id:(c==null?void 0:c.id)||null,created_at:new Date().toISOString(),date:_,food_log:{entries:[]},food_total:0,activity_log:{entries:[]},water_log:{entries:[]},water_total:0,weight:0,notes:""}),o(0,_=e.id)):h=a.getDataSubscription("day",{id:_}).subscribe(l=>{o(1,e=l),console.log("*** day",e)})})(),rt(async()=>{if(!c){i("/info");return}if(_==="new")try{const{data:l,error:g}=await a.getCurrentWeight();g?(console.error("getCurrentWeight error",g),o(1,e.weight=0,e)):o(1,e.weight=l.weight,e)}catch(l){console.log("exception",l),o(1,e.weight=0,e)}}),st(()=>{try{h&&h.unsubscribe()}catch(l){console.error("error unsubscribing",l)}});const k=l=>{if(typeof e[l.target.name]=="number")try{o(1,e[l.target.name]=parseFloat(l.target.value),e)}catch{o(1,e[l.target.name]=0,e)}else o(1,e[l.target.name]=l.target.value,e)},K=l=>{o(1,e.date=new Date(l.target.value),e)},p=async()=>{e.user_id||o(1,e.user_id=c.id,e);try{o(1,e.food_total=0,e),e.food_log.entries.forEach(g=>{o(1,e.food_total+=g.amt,e)})}catch(g){console.error("error calculating food total",g)}const{error:l}=await a.save_day(e);l?(console.log("error message is: ",l.message),l.message.startsWith("duplicate key value violates unique constraint")?(console.log("DUPLICATE DAY"),kt({header:"Duplicate Day",message:"This day already exists.  Please edit the existing day."})):console.error("save day error",l)):o(0,_=e.id)},C=async()=>{await yt({header:"Delete Day",message:"Are you sure?",okHander:async()=>{const{data:l,error:g}=await a.delete_day(e);g?console.error("Error deleting day",g):v()}})},v=()=>{i("/calendar")},Y=async l=>{e.food_log.entries||o(1,e.food_log.entries=[],e);const g={id:a.gen_random_uuid(),food_id:"",title:"",desc:"",cat:"",cps:0,qty:1,amt:0,created:new Date().toISOString()},w=await E(g,e.food_log.entries.length,!0);console.log("done calling openFoodEntryBox",w),console.log("day.food_log.entries",e.food_log.entries),o(1,e.food_log.entries=[...e.food_log.entries],e),p()},q=async l=>{const g=await E(e.food_log.entries[l],l,!1);console.log("edit_food_log_entry is done calling openFoodEntryBox",g),console.log("day.food_log.entries",e.food_log.entries),o(1,e.food_log.entries=[...e.food_log.entries],e),p()},L=({detail:l})=>{const{from:g,to:w}=l,D=e.food_log.entries.splice(g,1)[0];e.food_log.entries.splice(w,0,D),l.complete(),console.log("reorder_food_log: day",e),p()},E=async(l,g,w)=>{const D=await mt.create({component:wt,componentProps:{entry:l,isNew:w},showBackdrop:!0,backdropDismiss:!0});await D.present();const{data:T}=await D.onWillDismiss();return(T==null?void 0:T.data)!==null?(T.data.deleted?e.food_log.entries.splice(g,1):o(1,e.food_log.entries[g]=T.data,e),console.log("*** day.food_log.entries",e.food_log.entries),!0):!1};async function A(){e.water_log.entries.push({id:a.gen_random_uuid(),amt:1,created:new Date().toISOString()}),o(1,e.water_total++,e),p()}async function G(){e.water_total<=0||(e.water_log.entries.pop(),o(1,e.water_total--,e),p())}function M(l){try{o(1,e[l.target.name]=parseFloat(l.target.value)||0,e)}catch(g){console.error("handleNumberValue error",g),o(1,e[l.target.name]=0,e)}}function Q(l){console.log("*** saveOnBlur",l.target.value),p()}function z(){console.log("** toggleDatePicker, id:",_);const l=document.getElementById("datepicker");_=="new"||_.length===10?l&&l.classList.toggle("hidden"):l.classList.contains("hidden")||l.classList.add("hidden")}return[_,e,c,k,K,C,v,Y,q,L,A,G,M,Q,z,()=>{v()},l=>{q(l)}]}class Ht extends xe{constructor(r){super(),$e(this,r,Ot,Ft,et,{})}}export{Ht as default};
