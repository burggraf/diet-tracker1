import{S as ft,i as _t,s as ut,e as r,a as w,b as d,d as F,f as t,l as z,n as ye,h as O,r as Be,t as B,c as ce,j as G,z as j,x as gt,w as pt,B as $e,y as mt,D as bt}from"./index.83d5ce26.js";import{g as yt,p as wt}from"./index.74e1b417.js";import{m as kt}from"./controllers.801e6c9a.js";import{y as vt,C as ht,o as Dt,B as St,D as et,E as Ct,F as Ft}from"./index.8307df69.js";import Ot from"./FoodEntryModal.dc9cd7e4.js";import{a as Bt,s as It}from"./alert.acc59f84.js";import{S as Et,U as Tt}from"./supabase.data.service.ff5edb82.js";import{S as zt}from"./supabase.auth.service.d839e4b2.js";import"./overlays-ab6211c7.eb3bf2d3.js";import"./FoodSearchModal.143e0063.js";import"./BehaviorSubject.5b864271.js";import"./network.service.06e0a21d.js";function tt(n,o,e){const s=n.slice();return s[28]=o[e],s[30]=e,s}function ot(n){let o,e,s,c,a,i,g;return{c(){o=r("ion-button"),e=r("ion-icon"),s=w(),c=r("ion-button"),a=r("ion-icon"),d(e,"slot","icon-only"),d(e,"icon",vt),d(a,"slot","icon-only"),d(a,"icon",ht)},m(_,u){F(_,o,u),t(o,e),F(_,s,u),F(_,c,u),t(c,a),i||(g=[z(o,"click",n[6]),z(c,"click",n[16])],i=!0)},p:ye,d(_){_&&O(o),_&&O(s),_&&O(c),i=!1,Be(g)}}}function lt(n){let o,e,s,c,a,i,g;return{c(){o=r("ion-button"),e=r("ion-icon"),s=w(),c=r("ion-button"),a=r("ion-icon"),d(e,"slot","icon-only"),d(e,"icon",Dt),d(a,"slot","icon-only"),d(a,"icon",St)},m(_,u){F(_,o,u),t(o,e),F(_,s,u),F(_,c,u),t(c,a),i||(g=[z(o,"click",n[17]),z(c,"click",n[18])],i=!0)},p:ye,d(_){_&&O(o),_&&O(s),_&&O(c),i=!1,Be(g)}}}function nt(n){var Pe,Re,Ve,je,He,Ye;let o,e,s,c,a,i,g,_=(((Pe=n[3])==null?void 0:Pe.food_total)||0).toFixed(2)+"",u,y,l,T,U=(n[0].daily_budget-((Re=n[3])==null?void 0:Re.food_total)||0).toFixed(2)+"",C,v,b,D,h,p,M,J,Y,K,R,P,ee,Q,X,te,f,k,S,I,V,x=new Date((Ve=n[3])==null?void 0:Ve.created_at).toLocaleDateString()+"",oe,re,de=new Date((je=n[3])==null?void 0:je.created_at).toLocaleTimeString()+"",we,Ie,Ee,Te,ke,fe,ve,he,De,se,Se,le,_e,ze,ue,H,ge,We,Ce,ne,pe,Ne,Z,$,me,Le,ie,qe,be=(n[3].water_total||0)+"",Fe,Ae,Ue,ae,Oe,Me,W=n[2]==="view"&&it(n),N=n[2]==="edit"&&rt(n),L=n[2]==="view"&&st(n),q=n[2]==="edit"&&at(n),A=((Ye=(He=n[3])==null?void 0:He.food_log)==null?void 0:Ye.entries)&&ct(n);return{c(){var m;o=r("ion-card"),e=r("ion-card-header"),s=r("ion-card-subtitle"),c=r("ion-grid"),a=r("ion-row"),i=r("ion-col"),g=B("Total: "),u=B(_),y=w(),l=r("ion-col"),T=B("Left: "),C=B(U),v=w(),b=r("ion-card-title"),W&&W.c(),D=w(),N&&N.c(),h=w(),p=r("ion-card-content"),L&&L.c(),M=w(),q&&q.c(),J=w(),Y=r("br"),K=w(),R=r("ion-list"),P=r("ion-reorder-group"),A&&A.c(),ee=w(),Q=r("ion-item"),X=r("ion-icon"),te=B(`
						new food entry`),f=w(),k=r("br"),S=w(),I=r("br"),V=B(`
				created: `),oe=B(x),re=w(),we=B(de),Ie=r("br"),Ee=w(),Te=r("br"),ke=w(),fe=r("ion-footer"),ve=r("ion-card"),he=r("ion-card-content"),De=r("ion-grid"),se=r("ion-row"),Se=r("ion-col"),le=r("div"),_e=r("div"),_e.textContent="Weight",ze=w(),ue=r("div"),H=r("ion-input"),We=w(),Ce=r("ion-col"),ne=r("div"),pe=r("div"),pe.textContent="Water",Ne=w(),Z=r("div"),$=r("ion-icon"),Le=w(),ie=r("span"),qe=B("\xA0"),Fe=B(be),Ae=B("\xA0"),Ue=w(),ae=r("ion-icon"),ce(i,"text-align","left"),ce(i,"font-weight","bold"),ce(l,"text-align","right"),ce(l,"font-weight","bold"),ce(b,"text-align","center"),d(P,"id","food_log_group"),d(P,"disabled","false"),d(X,"icon",et),d(X,"slot","start"),d(R,"lines","full"),G(_e,"class","footertitle svelte-1nypkbx"),d(H,"name","weight"),d(H,"class","weightBox svelte-1nypkbx"),d(H,"type","number"),d(H,"value",ge=(m=n[3])==null?void 0:m.weight),G(ue,"class","footertitle svelte-1nypkbx"),G(le,"class","left svelte-1nypkbx"),G(pe,"class","footertitle svelte-1nypkbx"),d($,"color",me=n[3].water_total<=0?"medium":"dark"),d($,"icon",Ct),d($,"size","large"),G(ie,"class","water-digits svelte-1nypkbx"),d(ae,"icon",et),d(ae,"size","large"),G(Z,"class","footertitle together svelte-1nypkbx"),G(ne,"class","right svelte-1nypkbx")},m(m,E){F(m,o,E),t(o,e),t(e,s),t(s,c),t(c,a),t(a,i),t(i,g),t(i,u),t(a,y),t(a,l),t(l,T),t(l,C),t(e,v),t(e,b),W&&W.m(b,null),t(b,D),N&&N.m(b,null),t(o,h),t(o,p),L&&L.m(p,null),t(p,M),q&&q.m(p,null),t(p,J),t(p,Y),t(p,K),t(p,R),t(R,P),A&&A.m(P,null),t(R,ee),t(R,Q),t(Q,X),t(Q,te),t(p,f),t(p,k),t(p,S),t(p,I),t(p,V),t(p,oe),t(p,re),t(p,we),t(p,Ie),t(p,Ee),t(p,Te),F(m,ke,E),F(m,fe,E),t(fe,ve),t(ve,he),t(he,De),t(De,se),t(se,Se),t(Se,le),t(le,_e),t(le,ze),t(le,ue),t(ue,H),t(se,We),t(se,Ce),t(Ce,ne),t(ne,pe),t(ne,Ne),t(ne,Z),t(Z,$),t(Z,Le),t(Z,ie),t(ie,qe),t(ie,Fe),t(ie,Ae),t(Z,Ue),t(Z,ae),Oe||(Me=[z(P,"ionItemReorder",n[10]),z(Q,"click",n[8]),z(H,"ionChange",n[13]),z(H,"ionFocus",Nt),z(H,"ionBlur",n[14]),z($,"click",n[12]),z(ae,"click",n[11])],Oe=!0)},p(m,E){var Ge,Je,Ke,Qe,Xe,Ze,xe;E&8&&_!==(_=(((Ge=m[3])==null?void 0:Ge.food_total)||0).toFixed(2)+"")&&j(u,_),E&9&&U!==(U=(m[0].daily_budget-((Je=m[3])==null?void 0:Je.food_total)||0).toFixed(2)+"")&&j(C,U),m[2]==="view"?W?W.p(m,E):(W=it(m),W.c(),W.m(b,D)):W&&(W.d(1),W=null),m[2]==="edit"?N?N.p(m,E):(N=rt(m),N.c(),N.m(b,null)):N&&(N.d(1),N=null),m[2]==="view"?L?L.p(m,E):(L=st(m),L.c(),L.m(p,M)):L&&(L.d(1),L=null),m[2]==="edit"?q?q.p(m,E):(q=at(m),q.c(),q.m(p,J)):q&&(q.d(1),q=null),(Qe=(Ke=m[3])==null?void 0:Ke.food_log)!=null&&Qe.entries?A?A.p(m,E):(A=ct(m),A.c(),A.m(P,null)):A&&(A.d(1),A=null),E&8&&x!==(x=new Date((Xe=m[3])==null?void 0:Xe.created_at).toLocaleDateString()+"")&&j(oe,x),E&8&&de!==(de=new Date((Ze=m[3])==null?void 0:Ze.created_at).toLocaleTimeString()+"")&&j(we,de),E&8&&ge!==(ge=(xe=m[3])==null?void 0:xe.weight)&&d(H,"value",ge),E&8&&me!==(me=m[3].water_total<=0?"medium":"dark")&&d($,"color",me),E&8&&be!==(be=(m[3].water_total||0)+"")&&j(Fe,be)},d(m){m&&O(o),W&&W.d(),N&&N.d(),L&&L.d(),q&&q.d(),A&&A.d(),m&&O(ke),m&&O(fe),Oe=!1,Be(Me)}}}function it(n){var s,c;let o=new Date(new Date((s=n[3])==null?void 0:s.date).getTime()+new Date((c=n[3])==null?void 0:c.date).getTimezoneOffset()*6e4).toDateString()+"",e;return{c(){e=B(o)},m(a,i){F(a,e,i)},p(a,i){var g,_;i&8&&o!==(o=new Date(new Date((g=a[3])==null?void 0:g.date).getTime()+new Date((_=a[3])==null?void 0:_.date).getTimezoneOffset()*6e4).toDateString()+"")&&j(e,o)},d(a){a&&O(e)}}}function rt(n){let o,e,s,c,a;return{c(){o=r("ion-label"),o.textContent="Date:",e=r("ion-input"),d(o,"class","svelte-1nypkbx"),d(e,"value",s=n[3].date),d(e,"required",""),d(e,"name","date"),d(e,"type","text"),d(e,"class","svelte-1nypkbx")},m(i,g){F(i,o,g),F(i,e,g),c||(a=z(e,"ionChange",n[4]),c=!0)},p(i,g){g&8&&s!==(s=i[3].date)&&d(e,"value",s)},d(i){i&&O(o),i&&O(e),c=!1,a()}}}function st(n){var s;let o=((s=n[3])==null?void 0:s.notes)+"",e;return{c(){e=B(o)},m(c,a){F(c,e,a)},p(c,a){var i;a&8&&o!==(o=((i=c[3])==null?void 0:i.notes)+"")&&j(e,o)},d(c){c&&O(e)}}}function at(n){let o,e,s,c,a;return{c(){o=r("ion-label"),o.textContent="Notes:",e=r("ion-input"),d(o,"class","svelte-1nypkbx"),d(e,"value",s=n[3].notes),d(e,"required",""),d(e,"name","notes"),d(e,"type","text"),d(e,"class","svelte-1nypkbx")},m(i,g){F(i,o,g),F(i,e,g),c||(a=z(e,"ionChange",n[4]),c=!0)},p(i,g){g&8&&s!==(s=i[3].notes)&&d(e,"value",s)},d(i){i&&O(o),i&&O(e),c=!1,a()}}}function ct(n){var c,a;let o,e=(a=(c=n[3])==null?void 0:c.food_log)==null?void 0:a.entries,s=[];for(let i=0;i<e.length;i+=1)s[i]=dt(tt(n,e,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();o=gt()},m(i,g){for(let _=0;_<s.length;_+=1)s[_].m(i,g);F(i,o,g)},p(i,g){var _,u;if(g&520){e=(u=(_=i[3])==null?void 0:_.food_log)==null?void 0:u.entries;let y;for(y=0;y<e.length;y+=1){const l=tt(i,e,y);s[y]?s[y].p(l,g):(s[y]=dt(l),s[y].c(),s[y].m(o.parentNode,o))}for(;y<s.length;y+=1)s[y].d(1);s.length=e.length}},d(i){pt(s,i),i&&O(o)}}}function dt(n){var X,te,f,k;let o,e,s,c,a=((X=n[28])==null?void 0:X.title)+"",i,g,_,u,y=(((te=n[28])==null?void 0:te.desc)||"")+"",l,T,U,C,v,b=(((f=n[28])==null?void 0:f.amt)||0).toFixed(2)+"",D,h,p,M,J,Y=(((k=n[28])==null?void 0:k.cat)||"")+"",K,R,P,ee;function Q(){return n[19](n[30])}return{c(){o=r("ion-item"),e=r("ion-reorder"),s=w(),c=r("div"),i=B(a),g=r("br"),_=w(),u=r("span"),l=B(y),T=B("\xA0"),U=w(),C=r("ion-note"),v=r("div"),D=B(b),h=r("br"),p=w(),M=r("span"),J=B("\xA0"),K=B(Y),R=w(),d(e,"slot","start"),G(u,"class","description svelte-1nypkbx"),G(M,"class","description svelte-1nypkbx"),d(C,"slot","end"),d(C,"class","right svelte-1nypkbx")},m(S,I){F(S,o,I),t(o,e),t(o,s),t(o,c),t(c,i),t(c,g),t(c,_),t(c,u),t(u,l),t(u,T),t(o,U),t(o,C),t(C,v),t(v,D),t(v,h),t(v,p),t(v,M),t(M,J),t(M,K),t(o,R),P||(ee=z(o,"click",Q),P=!0)},p(S,I){var V,x,oe,re;n=S,I&8&&a!==(a=((V=n[28])==null?void 0:V.title)+"")&&j(i,a),I&8&&y!==(y=(((x=n[28])==null?void 0:x.desc)||"")+"")&&j(l,y),I&8&&b!==(b=(((oe=n[28])==null?void 0:oe.amt)||0).toFixed(2)+"")&&j(D,b),I&8&&Y!==(Y=(((re=n[28])==null?void 0:re.cat)||"")+"")&&j(K,Y)},d(S){S&&O(o),P=!1,ee()}}}function Wt(n){let o,e,s,c,a,i,g,_,u,y,l,T,U,C,v=n[2]==="view"&&ot(n),b=n[2]==="edit"&&lt(n),D=n[3]&&nt(n);return{c(){o=r("ion-header"),e=r("ion-toolbar"),s=r("ion-buttons"),c=r("ion-button"),a=r("ion-icon"),i=w(),g=r("ion-title"),g.textContent="Day",_=w(),u=r("ion-buttons"),v&&v.c(),y=w(),b&&b.c(),l=w(),T=r("ion-content"),D&&D.c(),d(a,"slot","icon-only"),d(a,"icon",Ft),d(s,"slot","start"),d(u,"slot","end"),d(o,"translucent","true"),d(T,"class","ion-padding")},m(h,p){F(h,o,p),t(o,e),t(e,s),t(s,c),t(c,a),t(e,i),t(e,g),t(e,_),t(e,u),v&&v.m(u,null),t(u,y),b&&b.m(u,null),F(h,l,p),F(h,T,p),D&&D.m(T,null),U||(C=z(c,"click",n[15]),U=!0)},p(h,[p]){h[2]==="view"?v?v.p(h,p):(v=ot(h),v.c(),v.m(u,y)):v&&(v.d(1),v=null),h[2]==="edit"?b?b.p(h,p):(b=lt(h),b.c(),b.m(u,null)):b&&(b.d(1),b=null),h[3]?D?D.p(h,p):(D=nt(h),D.c(),D.m(T,null)):D&&(D.d(1),D=null)},i:ye,o:ye,d(h){h&&O(o),v&&v.d(),b&&b.d(),h&&O(l),h&&O(T),D&&D.d(),U=!1,C()}}}function Nt(n){try{(parseFloat(n.target.value)||0)===0&&(n.target.value="")}catch(o){console.error("error clearing zero value",o)}n.target.getInputElement().then(o=>{console.log("input",o),o.type="text",o.setSelectionRange(o.value.length,o.value.length),o.type="number"})}function Lt(n,o,e){let s,c;$e(n,yt,f=>e(23,s=f)),$e(n,wt,f=>e(24,c=f));const a=Et.getInstance();Tt.getInstance();let i=null,g,_={daily_budget:0,target_weight:0},u=c.id,y="view",l={};console.log("*** id",u);let T;u==="new"?(console.log("it is new"),l={id:a.gen_random_uuid(),user_id:(i==null?void 0:i.id)||null,created_at:new Date().toISOString(),date:new Date().toISOString().substring(0,10),food_log:{entries:[]},food_total:0,activity_log:{entries:[]},water_log:{entries:[]},water_total:0,weight:0,notes:""},y="edit",console.log("*** new day",l)):T=a.getDataSubscription("day",{id:u}).subscribe(f=>{e(3,l=f),console.log("*** day",l)}),mt(async()=>{const{data:f,error:k}=await a.getSettings();if(console.log("*** settings",f,k),e(0,_=f.settings||{}),g=zt.user.subscribe(S=>{i=S}),u==="new"){const{data:S,error:I}=await a.getCurrentWeight();I?console.error("getCurrentWeight error",I):e(3,l.weight=S.weight,l)}}),bt(()=>{try{T.unsubscribe(),g.unsubscribe()}catch(f){console.error("error unsubscribing",f)}});const U=f=>{if(typeof l[f.target.name]=="number")try{e(3,l[f.target.name]=parseFloat(f.target.value),l)}catch{e(3,l[f.target.name]=0,l)}else e(3,l[f.target.name]=f.target.value,l)},C=async()=>{console.log("save the day",l),console.log("id is currently",u);let f=!1;u==="new"&&(f=!0),l.user_id||e(3,l.user_id=i.id,l);try{e(3,l.food_total=0,l),l.food_log.entries.forEach(S=>{e(3,l.food_total+=S.amt,l)})}catch(S){console.error("error calculating food total",S)}const{error:k}=await a.save_day(l);k?(console.log("error message is: ",k.message),k.message.startsWith("duplicate key value violates unique constraint")?(console.log("DUPLICATE DAY"),Bt({header:"Duplicate Day",message:"This day already exists.  Please edit the existing day."})):console.error("save day error",k)):(e(1,u=l.id),e(2,y="view")),f&&(console.log("*** day is new, redirect to","/day/"+l.id),s("/day/"+l.id))},v=async()=>{await It({header:"Delete Day",message:"Are you sure?",okHander:async()=>{const{data:f,error:k}=await a.delete_day(l);k?console.error("Error deleting day",k):b()}})},b=()=>{s("/calendar")},D=async f=>{l.food_log.entries||e(3,l.food_log.entries=[],l);const k={id:a.gen_random_uuid(),food_id:"",title:"",desc:"",cat:"",cps:0,qty:1,amt:0,created:new Date().toISOString()},S=await M(k,l.food_log.entries.length,!0);console.log("done calling openFoodEntryBox",S),console.log("day.food_log.entries",l.food_log.entries),e(3,l.food_log.entries=[...l.food_log.entries],l),C()},h=async f=>{const k=await M(l.food_log.entries[f],f,!1);console.log("edit_food_log_entry is done calling openFoodEntryBox",k),console.log("day.food_log.entries",l.food_log.entries),e(3,l.food_log.entries=[...l.food_log.entries],l),C()},p=({detail:f})=>{const{from:k,to:S}=f,I=l.food_log.entries.splice(k,1)[0];l.food_log.entries.splice(S,0,I),f.complete(),console.log("reorder_food_log: day",l),C()},M=async(f,k,S)=>{const I=await kt.create({component:Ot,componentProps:{entry:f,isNew:S},showBackdrop:!0,backdropDismiss:!0});await I.present();const{data:V}=await I.onWillDismiss();return(V==null?void 0:V.data)!==null?(V.data.deleted?l.food_log.entries.splice(k,1):e(3,l.food_log.entries[k]=V.data,l),console.log("*** day.food_log.entries",l.food_log.entries),!0):!1};async function J(){l.water_log.entries.push({id:a.gen_random_uuid(),amt:1,created:new Date().toISOString()}),e(3,l.water_total++,l),C()}async function Y(){l.water_total<=0||(l.water_log.entries.pop(),e(3,l.water_total--,l),C())}function K(f){try{e(3,l[f.target.name]=parseFloat(f.target.value)||0,l)}catch(k){console.error("handleNumberValue error",k),e(3,l[f.target.name]=0,l)}}function R(f){C()}return[_,u,y,l,U,C,v,b,D,h,p,J,Y,K,R,()=>{b()},()=>{e(2,y="edit")},()=>{e(2,y="view"),u==="add"&&b()},()=>{C()},f=>{h(f)}]}class Kt extends ft{constructor(o){super(),_t(this,o,Lt,Wt,ut,{})}}export{Kt as default};
