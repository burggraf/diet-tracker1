import{S as nt,i as it,s as st,h as rt,m as at,p as dt,q as ct,r as ft,w as he,x as _t,z as ut,b as a,c as b,d as f,a as y,f as o,l as F,H as lt,g as k,v as ye,t as S,o as G,j as ce,k as j,e as gt,u as mt}from"./index.91186ebc.js";import{I as pt}from"./IonPage.b11e6286.js";import{g as vt,p as bt}from"./index.e430cd44.js";import{m as wt}from"./controllers.00bfd0e3.js";import{y as ht,C as yt,r as kt,B as Dt,D as St,E as Je,F as Ct}from"./index.6903e97e.js";import Ft from"./FoodEntryModal.307907a0.js";import{a as Ot,s as It}from"./alert.2680e70a.js";import{S as Bt,U as zt}from"./supabase.data.service.abcf7fdb.js";import{c as Et}from"./user.store.cdc27a90.js";import"./overlays-ab6211c7.d1079922.js";import"./FoodSearchModal.c47db736.js";import"./BehaviorSubject.0b3377a2.js";import"./loadingMessage.56b3f921.js";function Ke(l,i,e){const n=l.slice();return n[26]=i[e],n[28]=e,n}function Qe(l){let i,e,n,r,u,s,c;return{c(){i=a("ion-button"),e=a("ion-icon"),n=b(),r=a("ion-button"),u=a("ion-icon"),f(e,"slot","icon-only"),f(e,"icon",ht),f(u,"slot","icon-only"),f(u,"icon",yt)},m(_,t){y(_,i,t),o(i,e),y(_,n,t),y(_,r,t),o(r,u),s||(c=[F(i,"click",l[6]),F(r,"click",l[16])],s=!0)},p:lt,d(_){_&&k(i),_&&k(n),_&&k(r),s=!1,ye(c)}}}function Xe(l){let i,e,n,r,u,s,c;return{c(){i=a("ion-button"),e=a("ion-icon"),n=b(),r=a("ion-button"),u=a("ion-icon"),f(e,"slot","icon-only"),f(e,"icon",kt),f(u,"slot","icon-only"),f(u,"icon",Dt)},m(_,t){y(_,i,t),o(i,e),y(_,n,t),y(_,r,t),o(r,u),s||(c=[F(i,"click",l[17]),F(r,"click",l[18])],s=!0)},p:lt,d(_){_&&k(i),_&&k(n),_&&k(r),s=!1,ye(c)}}}function Ze(l){var r,u,s;let i,e=(((u=(r=l[3])==null?void 0:r.user_metadata)==null?void 0:u.daily_budget)-((s=l[2])==null?void 0:s.food_total)||0).toFixed(2)+"",n;return{c(){i=S("Left: "),n=S(e)},m(c,_){y(c,i,_),y(c,n,_)},p(c,_){var t,p,w;_&12&&e!==(e=(((p=(t=c[3])==null?void 0:t.user_metadata)==null?void 0:p.daily_budget)-((w=c[2])==null?void 0:w.food_total)||0).toFixed(2)+"")&&G(n,e)},d(c){c&&k(i),c&&k(n)}}}function xe(l){let i,e,n,r,u,s;return{c(){i=a("div"),e=a("ion-label"),e.textContent="Date:",n=a("ion-input"),f(e,"class","svelte-15ns3sv"),f(n,"value",r=l[2].date),f(n,"required",""),f(n,"name","date"),f(n,"type","text"),f(n,"class","svelte-15ns3sv"),ce(i,"text-align","center")},m(c,_){y(c,i,_),o(i,e),o(i,n),u||(s=F(n,"ionChange",l[4]),u=!0)},p(c,_){_&4&&r!==(r=c[2].date)&&f(n,"value",r)},d(c){c&&k(i),u=!1,s()}}}function $e(l){var r;let i,e=((r=l[2])==null?void 0:r.notes)+"",n;return{c(){i=a("div"),n=S(e),j(i,"class","ion-padding")},m(u,s){y(u,i,s),o(i,n)},p(u,s){var c;s&4&&e!==(e=((c=u[2])==null?void 0:c.notes)+"")&&G(n,e)},d(u){u&&k(i)}}}function et(l){let i,e,n,r,u;return{c(){i=a("ion-label"),i.textContent="Notes:",e=a("ion-input"),f(i,"class","svelte-15ns3sv"),f(e,"value",n=l[2].notes),f(e,"required",""),f(e,"name","notes"),f(e,"type","text"),f(e,"class","svelte-15ns3sv")},m(s,c){y(s,i,c),y(s,e,c),r||(u=F(e,"ionChange",l[4]),r=!0)},p(s,c){c&4&&n!==(n=s[2].notes)&&f(e,"value",n)},d(s){s&&k(i),s&&k(e),r=!1,u()}}}function tt(l){var r,u;let i,e=(u=(r=l[2])==null?void 0:r.food_log)==null?void 0:u.entries,n=[];for(let s=0;s<e.length;s+=1)n[s]=ot(Ke(l,e,s));return{c(){for(let s=0;s<n.length;s+=1)n[s].c();i=gt()},m(s,c){for(let _=0;_<n.length;_+=1)n[_].m(s,c);y(s,i,c)},p(s,c){var _,t;if(c&516){e=(t=(_=s[2])==null?void 0:_.food_log)==null?void 0:t.entries;let p;for(p=0;p<e.length;p+=1){const w=Ke(s,e,p);n[p]?n[p].p(w,c):(n[p]=ot(w),n[p].c(),n[p].m(i.parentNode,i))}for(;p<n.length;p+=1)n[p].d(1);n.length=e.length}},d(s){mt(n,s),s&&k(i)}}}function ot(l){var d,m,h,M;let i,e,n,r,u=((d=l[26])==null?void 0:d.title)+"",s,c,_,t,p=(((m=l[26])==null?void 0:m.desc)||"")+"",w,C,J,v,U,q=(((h=l[26])==null?void 0:h.amt)||0).toFixed(2)+"",A,K,R,H,x,P=(((M=l[26])==null?void 0:M.cat)||"")+"",$,ee,Q,te;function Y(){return l[19](l[28])}return{c(){i=a("ion-item"),e=a("ion-reorder"),n=b(),r=a("div"),s=S(u),c=a("br"),_=b(),t=a("span"),w=S(p),C=S("\xA0"),J=b(),v=a("ion-note"),U=a("div"),A=S(q),K=a("br"),R=b(),H=a("span"),x=S("\xA0"),$=S(P),ee=b(),f(e,"slot","start"),j(t,"class","description svelte-15ns3sv"),j(H,"class","description svelte-15ns3sv"),f(v,"slot","end"),f(v,"class","right svelte-15ns3sv")},m(O,V){y(O,i,V),o(i,e),o(i,n),o(i,r),o(r,s),o(r,c),o(r,_),o(r,t),o(t,w),o(t,C),o(i,J),o(i,v),o(v,U),o(U,A),o(U,K),o(U,R),o(U,H),o(H,x),o(H,$),o(i,ee),Q||(te=F(i,"click",Y),Q=!0)},p(O,V){var oe,ne,X,ie;l=O,V&4&&u!==(u=((oe=l[26])==null?void 0:oe.title)+"")&&G(s,u),V&4&&p!==(p=(((ne=l[26])==null?void 0:ne.desc)||"")+"")&&G(w,p),V&4&&q!==(q=(((X=l[26])==null?void 0:X.amt)||0).toFixed(2)+"")&&G(A,q),V&4&&P!==(P=(((ie=l[26])==null?void 0:ie.cat)||"")+"")&&G($,P)},d(O){O&&k(i),Q=!1,te()}}}function Tt(l){var ze,Ee,Te,We,Ne,qe,Pe,Ue;let i,e,n,r,u,s,c,_=new Date(new Date((ze=l[2])==null?void 0:ze.date).getTime()+new Date((Ee=l[2])==null?void 0:Ee.date).getTimezoneOffset()*6e4).toDateString()+"",t,p,w,C,J,v,U,q,A,K,R=(((Te=l[2])==null?void 0:Te.food_total)||0).toFixed(2)+"",H,x,P,$,ee,Q,te,Y,d,m,h,M,O,V,oe,ne,X,ie,se,fe,ke,_e,L,ue,De,ve,re,ge,Se,Z,le,me,Ce,ae,Fe,pe=(l[2].water_total||0)+"",be,Oe,Ie,de,we,Be,I=l[1]==="view"&&Qe(l),B=l[1]==="edit"&&Xe(l),z=((Ne=(We=l[3])==null?void 0:We.user_metadata)==null?void 0:Ne.daily_budget)&&Ze(l),E=l[1]==="edit"&&xe(l),T=l[1]==="view"&&((qe=l[2])==null?void 0:qe.notes)&&$e(l),W=l[1]==="edit"&&et(l),N=((Ue=(Pe=l[2])==null?void 0:Pe.food_log)==null?void 0:Ue.entries)&&tt(l);return{c(){var g;i=a("ion-header"),e=a("ion-toolbar"),n=a("ion-buttons"),r=a("ion-button"),u=a("ion-icon"),s=b(),c=a("ion-title"),t=S(_),p=b(),w=a("ion-buttons"),I&&I.c(),C=b(),B&&B.c(),J=b(),v=a("ion-content"),U=a("ion-grid"),q=a("ion-row"),A=a("ion-col"),K=S("Total: "),H=S(R),x=b(),P=a("ion-col"),z&&z.c(),$=b(),E&&E.c(),ee=b(),T&&T.c(),Q=b(),W&&W.c(),te=b(),Y=a("ion-list"),d=a("ion-reorder-group"),N&&N.c(),m=b(),h=a("ion-item"),M=a("ion-icon"),O=S(`
				new food entry`),V=b(),oe=a("ion-footer"),ne=a("ion-grid"),X=a("ion-row"),ie=a("ion-col"),se=a("div"),fe=a("div"),fe.textContent="Weight",ke=b(),_e=a("div"),L=a("ion-input"),De=b(),ve=a("ion-col"),re=a("div"),ge=a("div"),ge.textContent="Water",Se=b(),Z=a("div"),le=a("ion-icon"),Ce=b(),ae=a("span"),Fe=S("\xA0"),be=S(pe),Oe=S("\xA0"),Ie=b(),de=a("ion-icon"),f(u,"slot","icon-only"),f(u,"icon",St),f(n,"slot","start"),f(w,"slot","end"),f(i,"translucent","true"),ce(A,"text-align","left"),ce(A,"font-weight","bold"),ce(P,"text-align","right"),ce(P,"font-weight","bold"),f(d,"id","food_log_group"),f(d,"disabled","false"),f(M,"icon",Je),f(M,"slot","start"),f(h,"lines","none"),f(Y,"lines","full"),f(v,"class","ion-padding"),j(fe,"class","footertitle svelte-15ns3sv"),f(L,"name","weight"),f(L,"class","weightBox svelte-15ns3sv"),f(L,"type","decimal"),f(L,"inputmode","decimal"),f(L,"value",ue=(g=l[2])==null?void 0:g.weight),j(_e,"class","footertitle svelte-15ns3sv"),j(se,"class","left svelte-15ns3sv"),j(ge,"class","footertitle svelte-15ns3sv"),f(le,"color",me=l[2].water_total<=0?"medium":"dark"),f(le,"icon",Ct),f(le,"size","large"),j(ae,"class","water-digits svelte-15ns3sv"),f(de,"icon",Je),f(de,"size","large"),j(Z,"class","footertitle together svelte-15ns3sv"),j(re,"class","right svelte-15ns3sv")},m(g,D){y(g,i,D),o(i,e),o(e,n),o(n,r),o(r,u),o(e,s),o(e,c),o(c,t),o(e,p),o(e,w),I&&I.m(w,null),o(w,C),B&&B.m(w,null),y(g,J,D),y(g,v,D),o(v,U),o(U,q),o(q,A),o(A,K),o(A,H),o(q,x),o(q,P),z&&z.m(P,null),o(v,$),E&&E.m(v,null),o(v,ee),T&&T.m(v,null),o(v,Q),W&&W.m(v,null),o(v,te),o(v,Y),o(Y,d),N&&N.m(d,null),o(Y,m),o(Y,h),o(h,M),o(h,O),y(g,V,D),y(g,oe,D),o(oe,ne),o(ne,X),o(X,ie),o(ie,se),o(se,fe),o(se,ke),o(se,_e),o(_e,L),o(X,De),o(X,ve),o(ve,re),o(re,ge),o(re,Se),o(re,Z),o(Z,le),o(Z,Ce),o(Z,ae),o(ae,Fe),o(ae,be),o(ae,Oe),o(Z,Ie),o(Z,de),we||(Be=[F(r,"click",l[15]),F(d,"ionItemReorder",l[10]),F(h,"click",l[8]),F(L,"ionChange",l[13]),F(L,"ionFocus",Nt),F(L,"ionBlur",l[14]),F(le,"click",l[12]),F(de,"click",l[11])],we=!0)},p(g,D){var Ae,Me,He,Le,Ve,je,Re,Ye,Ge;D&4&&_!==(_=new Date(new Date((Ae=g[2])==null?void 0:Ae.date).getTime()+new Date((Me=g[2])==null?void 0:Me.date).getTimezoneOffset()*6e4).toDateString()+"")&&G(t,_),g[1]==="view"?I?I.p(g,D):(I=Qe(g),I.c(),I.m(w,C)):I&&(I.d(1),I=null),g[1]==="edit"?B?B.p(g,D):(B=Xe(g),B.c(),B.m(w,null)):B&&(B.d(1),B=null),D&4&&R!==(R=(((He=g[2])==null?void 0:He.food_total)||0).toFixed(2)+"")&&G(H,R),(Ve=(Le=g[3])==null?void 0:Le.user_metadata)!=null&&Ve.daily_budget?z?z.p(g,D):(z=Ze(g),z.c(),z.m(P,null)):z&&(z.d(1),z=null),g[1]==="edit"?E?E.p(g,D):(E=xe(g),E.c(),E.m(v,ee)):E&&(E.d(1),E=null),g[1]==="view"&&((je=g[2])==null?void 0:je.notes)?T?T.p(g,D):(T=$e(g),T.c(),T.m(v,Q)):T&&(T.d(1),T=null),g[1]==="edit"?W?W.p(g,D):(W=et(g),W.c(),W.m(v,te)):W&&(W.d(1),W=null),(Ye=(Re=g[2])==null?void 0:Re.food_log)!=null&&Ye.entries?N?N.p(g,D):(N=tt(g),N.c(),N.m(d,null)):N&&(N.d(1),N=null),D&4&&ue!==(ue=(Ge=g[2])==null?void 0:Ge.weight)&&f(L,"value",ue),D&4&&me!==(me=g[2].water_total<=0?"medium":"dark")&&f(le,"color",me),D&4&&pe!==(pe=(g[2].water_total||0)+"")&&G(be,pe)},d(g){g&&k(i),I&&I.d(),B&&B.d(),g&&k(J),g&&k(v),z&&z.d(),E&&E.d(),T&&T.d(),W&&W.d(),N&&N.d(),g&&k(V),g&&k(oe),we=!1,ye(Be)}}}function Wt(l){let i,e;return i=new pt({props:{$$slots:{default:[Tt]},$$scope:{ctx:l}}}),{c(){rt(i.$$.fragment)},m(n,r){at(i,n,r),e=!0},p(n,[r]){const u={};r&536870927&&(u.$$scope={dirty:r,ctx:n}),i.$set(u)},i(n){e||(dt(i.$$.fragment,n),e=!0)},o(n){ct(i.$$.fragment,n),e=!1},d(n){ft(i,n)}}}function Nt(l){l.target.scrollTop=0;try{(parseFloat(l.target.value)||0)===0&&(l.target.value="")}catch(i){console.error("error clearing zero value",i)}}function qt(l,i,e){let n,r,u;he(l,vt,d=>e(21,n=d)),he(l,Et,d=>e(3,r=d)),he(l,bt,d=>e(22,u=d));const s=Bt.getInstance();zt.getInstance();let c=u.id,_="view",t={};console.log("*** id",c);let p;c==="new"?(console.log("it is new"),t={id:s.gen_random_uuid(),user_id:(r==null?void 0:r.id)||null,created_at:new Date().toISOString(),date:new Date().toISOString().substring(0,10),food_log:{entries:[]},food_total:0,activity_log:{entries:[]},water_log:{entries:[]},water_total:0,weight:0,notes:""},_="edit",console.log("*** new day",t)):p=s.getDataSubscription("day",{id:c}).subscribe(d=>{e(2,t=d),console.log("*** day",t)}),_t(async()=>{if(!r){n("/info");return}if(c==="new")try{const{data:d,error:m}=await s.getCurrentWeight();m?(console.error("getCurrentWeight error",m),e(2,t.weight=0,t)):e(2,t.weight=d.weight,t)}catch(d){console.log("exception",d),e(2,t.weight=0,t)}}),ut(()=>{try{p&&p.unsubscribe()}catch(d){console.error("error unsubscribing",d)}});const w=d=>{if(typeof t[d.target.name]=="number")try{e(2,t[d.target.name]=parseFloat(d.target.value),t)}catch{e(2,t[d.target.name]=0,t)}else e(2,t[d.target.name]=d.target.value,t)},C=async()=>{let d=!1;c==="new"&&(d=!0),t.user_id||e(2,t.user_id=r.id,t);try{e(2,t.food_total=0,t),t.food_log.entries.forEach(h=>{e(2,t.food_total+=h.amt,t)})}catch(h){console.error("error calculating food total",h)}const{error:m}=await s.save_day(t);m?(console.log("error message is: ",m.message),m.message.startsWith("duplicate key value violates unique constraint")?(console.log("DUPLICATE DAY"),Ot({header:"Duplicate Day",message:"This day already exists.  Please edit the existing day."})):console.error("save day error",m)):(e(0,c=t.id),e(1,_="view")),d&&(console.log("*** day is new, redirect to","/day/"+t.id),n("/day/"+t.id))},J=async()=>{await It({header:"Delete Day",message:"Are you sure?",okHander:async()=>{const{data:d,error:m}=await s.delete_day(t);m?console.error("Error deleting day",m):v()}})},v=()=>{n("/calendar")},U=async d=>{t.food_log.entries||e(2,t.food_log.entries=[],t);const m={id:s.gen_random_uuid(),food_id:"",title:"",desc:"",cat:"",cps:0,qty:1,amt:0,created:new Date().toISOString()},h=await K(m,t.food_log.entries.length,!0);console.log("done calling openFoodEntryBox",h),console.log("day.food_log.entries",t.food_log.entries),e(2,t.food_log.entries=[...t.food_log.entries],t),C()},q=async d=>{const m=await K(t.food_log.entries[d],d,!1);console.log("edit_food_log_entry is done calling openFoodEntryBox",m),console.log("day.food_log.entries",t.food_log.entries),e(2,t.food_log.entries=[...t.food_log.entries],t),C()},A=({detail:d})=>{const{from:m,to:h}=d,M=t.food_log.entries.splice(m,1)[0];t.food_log.entries.splice(h,0,M),d.complete(),console.log("reorder_food_log: day",t),C()},K=async(d,m,h)=>{const M=await wt.create({component:Ft,componentProps:{entry:d,isNew:h},showBackdrop:!0,backdropDismiss:!0});await M.present();const{data:O}=await M.onWillDismiss();return(O==null?void 0:O.data)!==null?(O.data.deleted?t.food_log.entries.splice(m,1):e(2,t.food_log.entries[m]=O.data,t),console.log("*** day.food_log.entries",t.food_log.entries),!0):!1};async function R(){t.water_log.entries.push({id:s.gen_random_uuid(),amt:1,created:new Date().toISOString()}),e(2,t.water_total++,t),C()}async function H(){t.water_total<=0||(t.water_log.entries.pop(),e(2,t.water_total--,t),C())}function x(d){try{e(2,t[d.target.name]=parseFloat(d.target.value)||0,t)}catch(m){console.error("handleNumberValue error",m),e(2,t[d.target.name]=0,t)}}function P(d){C()}return[c,_,t,r,w,C,J,v,U,q,A,R,H,x,P,()=>{v()},()=>{e(1,_="edit")},()=>{e(1,_="view"),c==="add"&&v()},()=>{C()},d=>{q(d)}]}class Qt extends nt{constructor(i){super(),it(this,i,qt,Wt,st,{})}}export{Qt as default};
