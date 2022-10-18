import{S as De,i as Ee,s as Ne,e as t,b as e,d as E,l as d,n as be,h as N,a as c,t as Oe,c as Ve,f as o,r as We}from"./index.ec81be64.js";import"./supabase.auth.service.e06ab974.js";import{m as X}from"./controllers.05177169.js";import Ge from"./FoodSearchModal.4a237a53.js";import{y as Pe,o as Ae,z as Re,A as je,B as Je}from"./index.8307df69.js";import"./BehaviorSubject.b47b3d16.js";import"./overlays-ab6211c7.e870ed74.js";function ze(i){let a,r,l;return{c(){a=t("ion-icon"),e(a,"icon",Pe),e(a,"slot","start"),e(a,"size","large"),e(a,"color","primary")},m(_,M){E(_,a,M),r||(l=d(a,"click",i[7]),r=!0)},p:be,d(_){_&&N(a),r=!1,l()}}}function Ke(i){let a,r,l,_,M,S,b,O,v,F,h,B,n,f,ve,Y,Z,L,g,I,V,he,$,ye,ee,oe,H,q,te,we,T,ne,y,W,ke,le,w,G,xe,ie,k,P,Ce,ae,Ie,re,se,z,u,A,Te,R,Me,j,Se,J,K,Fe,ce,Be,ue,me,D,x,Q,Le,fe,de,C,U,He,pe,_e,qe,m=!i[1]&&ze(i);return{c(){a=c(),r=t("ion-header"),l=t("ion-toolbar"),_=t("ion-title"),_.textContent="Edit Entry",M=c(),S=t("ion-buttons"),b=t("ion-icon"),O=c(),v=t("ion-buttons"),m&&m.c(),F=c(),h=t("ion-icon"),B=c(),n=t("ion-grid"),f=t("ion-row"),f.innerHTML="<ion-col><ion-label>Title</ion-label></ion-col>",ve=c(),Y=t("ion-row"),Z=t("ion-col"),L=t("ion-item"),g=t("ion-input"),I=t("ion-icon"),he=c(),$=t("ion-row"),$.innerHTML="<ion-col><ion-label>Cost Per Serving</ion-label></ion-col>",ye=c(),ee=t("ion-row"),oe=t("ion-col"),H=t("ion-item"),q=t("ion-grid"),te=t("ion-row"),te.innerHTML=`<ion-col style="text-align: center;"><ion-label>Per Serving</ion-label></ion-col> 
                            <ion-col style="text-align: center;"><ion-label>Servings</ion-label></ion-col> 
                            <ion-col style="text-align: center;"><ion-label>Total</ion-label></ion-col>`,we=c(),T=t("ion-row"),ne=t("ion-col"),y=t("ion-input"),ke=c(),le=t("ion-col"),w=t("ion-input"),xe=c(),ie=t("ion-col"),k=t("ion-input"),Ce=c(),ae=t("ion-row"),ae.innerHTML="<ion-col><ion-label>Category</ion-label></ion-col>",Ie=c(),re=t("ion-row"),se=t("ion-col"),z=t("ion-item"),u=t("ion-segment"),A=t("ion-segment-button"),A.innerHTML="<ion-label>Breakfast</ion-label>",Te=c(),R=t("ion-segment-button"),R.innerHTML="<ion-label>Lunch</ion-label>",Me=c(),j=t("ion-segment-button"),j.innerHTML="<ion-label>Dinner</ion-label>",Se=c(),J=t("ion-segment-button"),J.innerHTML="<ion-label>Snack</ion-label>",Fe=c(),ce=t("ion-row"),ce.innerHTML="<ion-col><ion-label>Description</ion-label></ion-col>",Be=c(),ue=t("ion-row"),me=t("ion-col"),D=t("ion-item"),x=t("ion-textarea"),Le=c(),fe=t("ion-row"),de=t("ion-col"),C=t("ion-button"),U=t("ion-icon"),He=Oe(`\xA0\xA0
                `),pe=t("b"),pe.textContent="Done",document.title="FoodEntryModal",e(b,"icon",Ae),e(b,"slot","start"),e(b,"size","large"),e(b,"color","primary"),e(S,"slot","start"),e(h,"icon",Re),e(h,"slot","start"),e(h,"size","large"),e(h,"color","primary"),e(v,"slot","end"),e(r,"translucent","true"),e(I,"class","inputIcon svelte-mfc9i2"),e(I,"icon",je),e(I,"slot","start"),e(I,"size","large"),e(I,"color","medium"),e(g,"name","title"),e(g,"class","formInputBoxWithIcon svelte-mfc9i2"),e(g,"type","text"),e(g,"value",V=i[0].title),e(g,"placeholder","Title"),e(L,"class","formItem svelte-mfc9i2"),e(L,"lines","none"),e(y,"name","cps"),e(y,"class","formInputBoxCentered svelte-mfc9i2"),e(y,"type","number"),e(y,"value",W=i[0].cps),e(w,"name","qty"),e(w,"class","formInputBoxCentered svelte-mfc9i2"),e(w,"type","number"),e(w,"value",G=i[0].qty),e(k,"name","amt"),e(k,"class","formInputBoxCentered svelte-mfc9i2"),e(k,"type","number"),e(k,"value",P=i[0].amt),e(H,"class","formItem svelte-mfc9i2"),e(H,"lines","none"),e(A,"value","Breakfast"),e(R,"value","Lunch"),e(j,"value","Dinner"),e(J,"value","Snack"),e(u,"value",K=i[0].cat),e(u,"color","dark"),e(u,"name","cat"),e(u,"id","cat"),e(u,"class","formSegment svelte-mfc9i2"),Ve(u,"width","100%"),e(z,"class","formItem svelte-mfc9i2"),e(z,"lines","none"),e(x,"name","desc"),e(x,"class","formTextarea svelte-mfc9i2"),e(x,"type","text"),e(x,"value",Q=i[0].desc),e(x,"placeholder","Description"),e(D,"class","formItem svelte-mfc9i2"),e(D,"lines","none"),e(U,"icon",Je),e(U,"size","large"),e(C,"expand","block"),e(C,"disabled",!1),e(n,"class","ion-padding Grid svelte-mfc9i2")},m(s,p){E(s,a,p),E(s,r,p),o(r,l),o(l,_),o(l,M),o(l,S),o(S,b),o(l,O),o(l,v),m&&m.m(v,null),o(v,F),o(v,h),E(s,B,p),E(s,n,p),o(n,f),o(n,ve),o(n,Y),o(Y,Z),o(Z,L),o(L,g),o(g,I),o(n,he),o(n,$),o(n,ye),o(n,ee),o(ee,oe),o(oe,H),o(H,q),o(q,te),o(q,we),o(q,T),o(T,ne),o(ne,y),o(T,ke),o(T,le),o(le,w),o(T,xe),o(T,ie),o(ie,k),o(n,Ce),o(n,ae),o(n,Ie),o(n,re),o(re,se),o(se,z),o(z,u),o(u,A),o(u,Te),o(u,R),o(u,Me),o(u,j),o(u,Se),o(u,J),o(n,Fe),o(n,ce),o(n,Be),o(n,ue),o(ue,me),o(me,D),o(D,x),o(n,Le),o(n,fe),o(fe,de),o(de,C),o(C,U),o(C,He),o(C,pe),_e||(qe=[d(b,"click",i[2]),d(h,"click",i[8]),d(g,"ionChange",i[3]),d(y,"ionChange",i[5]),d(y,"ionFocus",ge),d(w,"ionChange",i[5]),d(w,"ionFocus",ge),d(k,"ionChange",i[5]),d(k,"ionFocus",ge),d(u,"ionChange",i[4]),d(x,"ionChange",i[3]),d(C,"click",i[6])],_e=!0)},p(s,[p]){s[1]?m&&(m.d(1),m=null):m?m.p(s,p):(m=ze(s),m.c(),m.m(v,F)),p&1&&V!==(V=s[0].title)&&e(g,"value",V),p&1&&W!==(W=s[0].cps)&&e(y,"value",W),p&1&&G!==(G=s[0].qty)&&e(w,"value",G),p&1&&P!==(P=s[0].amt)&&e(k,"value",P),p&1&&K!==(K=s[0].cat)&&e(u,"value",K),p&1&&Q!==(Q=s[0].desc)&&e(x,"value",Q)},i:be,o:be,d(s){s&&N(a),s&&N(r),m&&m.d(),s&&N(B),s&&N(n),_e=!1,We(qe)}}}function ge(i){try{(parseFloat(i.target.value)||0)===0&&(i.target.value="")}catch(a){console.error("error clearing zero value",a)}i.target.getInputElement().then(a=>{console.log("input",a),a.type="text",a.setSelectionRange(a.value.length,a.value.length),a.type="number"})}function Qe(i,a,r){let{entry:l={}}=a,{isNew:_}=a;console.log("entry",l);const M=()=>{X.dismiss({data:null})};function S(n){r(0,l[n.target.name]=n.target.value,l)}function b(n){r(0,l[n.target.id]=n.target.value,l)}function O(n){try{r(0,l[n.target.name]=parseFloat(n.target.value)||0,l)}catch(f){console.error("handleNumberValue error",f),r(0,l[n.target.name]=0,l)}(n.target.name==="cps"||n.target.name==="qty")&&r(0,l.amt=l.cps*l.qty,l)}function v(){X.dismiss({data:l})}function F(){r(0,l.deleted=!0,l),X.dismiss({data:l})}async function h(){console.log("search");const n=await B();console.log("result",n)}const B=async()=>{const n=await X.create({component:Ge,showBackdrop:!0,backdropDismiss:!0});await n.present();const{data:f}=await n.onWillDismiss();return(f==null?void 0:f.data)!==null?(console.log("got data",f.data),r(0,l.title=f.data.name,l),r(0,l.cps=f.data.calories,l),r(0,l.qty=1,l),r(0,l.amt=l.cps*l.qty,l),r(0,l.desc=f.data.portion,l),!0):!1};return i.$$set=n=>{"entry"in n&&r(0,l=n.entry),"isNew"in n&&r(1,_=n.isNew)},[l,_,M,S,b,O,v,F,h]}class to extends De{constructor(a){super(),Ee(this,a,Qe,Ke,Ne,{entry:0,isNew:1})}}export{to as default};
