import{S as De,i as Ee,s as Ne,b as t,d as e,a as E,l as f,H as be,g as N,c,t as Oe,j as Ve,f as o,v as We}from"./index.35c1ef69.js";import{m as X}from"./controllers.7a2c95ad.js";import Ge from"./FoodSearchModal.7fbdc06c.js";import{y as Pe,r as je,z as Ae,A as Re,B as Je}from"./index.8eb3de29.js";import"./loadingMessage.f600e144.js";import"./supabase.data.service.0025da67.js";import"./BehaviorSubject.983ab50d.js";function ze(i){let a,r,l;return{c(){a=t("ion-icon"),e(a,"icon",Pe),e(a,"slot","start"),e(a,"size","large"),e(a,"color","primary")},m(_,M){E(_,a,M),r||(l=f(a,"click",i[7]),r=!0)},p:be,d(_){_&&N(a),r=!1,l()}}}function Ke(i){let a,r,l,_,M,S,y,O,w,F,k,B,n,d,ve,Y,Z,L,g,I,V,he,$,ye,ee,oe,H,q,te,we,T,ne,b,W,ke,le,v,G,xe,ie,h,P,Ce,ae,Ie,re,se,z,u,j,Te,A,Me,R,Se,J,K,Fe,ce,Be,ue,me,D,x,Q,Le,de,fe,C,U,He,pe,_e,qe,m=!i[1]&&ze(i);return{c(){a=c(),r=t("ion-header"),l=t("ion-toolbar"),_=t("ion-title"),_.textContent="Edit Entry",M=c(),S=t("ion-buttons"),y=t("ion-icon"),O=c(),w=t("ion-buttons"),m&&m.c(),F=c(),k=t("ion-icon"),B=c(),n=t("ion-grid"),d=t("ion-row"),d.innerHTML="<ion-col><ion-label>Title</ion-label></ion-col>",ve=c(),Y=t("ion-row"),Z=t("ion-col"),L=t("ion-item"),g=t("ion-input"),I=t("ion-icon"),he=c(),$=t("ion-row"),$.innerHTML="<ion-col><ion-label>Cost Per Serving</ion-label></ion-col>",ye=c(),ee=t("ion-row"),oe=t("ion-col"),H=t("ion-item"),q=t("ion-grid"),te=t("ion-row"),te.innerHTML=`<ion-col style="text-align: center;"><ion-label>Per Serving</ion-label></ion-col> 
                            <ion-col style="text-align: center;"><ion-label>Servings</ion-label></ion-col> 
                            <ion-col style="text-align: center;"><ion-label>Total</ion-label></ion-col>`,we=c(),T=t("ion-row"),ne=t("ion-col"),b=t("ion-input"),ke=c(),le=t("ion-col"),v=t("ion-input"),xe=c(),ie=t("ion-col"),h=t("ion-input"),Ce=c(),ae=t("ion-row"),ae.innerHTML="<ion-col><ion-label>Category</ion-label></ion-col>",Ie=c(),re=t("ion-row"),se=t("ion-col"),z=t("ion-item"),u=t("ion-segment"),j=t("ion-segment-button"),j.innerHTML="<ion-label>Breakfast</ion-label>",Te=c(),A=t("ion-segment-button"),A.innerHTML="<ion-label>Lunch</ion-label>",Me=c(),R=t("ion-segment-button"),R.innerHTML="<ion-label>Dinner</ion-label>",Se=c(),J=t("ion-segment-button"),J.innerHTML="<ion-label>Snack</ion-label>",Fe=c(),ce=t("ion-row"),ce.innerHTML="<ion-col><ion-label>Description</ion-label></ion-col>",Be=c(),ue=t("ion-row"),me=t("ion-col"),D=t("ion-item"),x=t("ion-textarea"),Le=c(),de=t("ion-row"),fe=t("ion-col"),C=t("ion-button"),U=t("ion-icon"),He=Oe(`\xA0\xA0
                `),pe=t("b"),pe.textContent="Done",document.title="FoodEntryModal",e(y,"icon",je),e(y,"slot","start"),e(y,"size","large"),e(y,"color","primary"),e(S,"slot","start"),e(k,"icon",Ae),e(k,"slot","start"),e(k,"size","large"),e(k,"color","primary"),e(w,"slot","end"),e(r,"translucent","true"),e(I,"class","inputIcon svelte-mfc9i2"),e(I,"icon",Re),e(I,"slot","start"),e(I,"size","large"),e(I,"color","medium"),e(g,"name","title"),e(g,"class","formInputBoxWithIcon svelte-mfc9i2"),e(g,"type","text"),e(g,"value",V=i[0].title),e(g,"placeholder","Title"),e(L,"class","formItem svelte-mfc9i2"),e(L,"lines","none"),e(b,"name","cps"),e(b,"class","formInputBoxCentered svelte-mfc9i2"),e(b,"inputmode","decimal"),e(b,"type","decimal"),e(b,"value",W=i[0].cps),e(v,"name","qty"),e(v,"class","formInputBoxCentered svelte-mfc9i2"),e(v,"inputmode","decimal"),e(v,"type","decimal"),e(v,"value",G=i[0].qty),e(h,"name","amt"),e(h,"class","formInputBoxCentered svelte-mfc9i2"),e(h,"inputmode","decimal"),e(h,"type","decimal"),e(h,"value",P=i[0].amt),e(H,"class","formItem svelte-mfc9i2"),e(H,"lines","none"),e(j,"value","Breakfast"),e(A,"value","Lunch"),e(R,"value","Dinner"),e(J,"value","Snack"),e(u,"value",K=i[0].cat),e(u,"color","dark"),e(u,"name","cat"),e(u,"id","cat"),e(u,"class","formSegment svelte-mfc9i2"),Ve(u,"width","100%"),e(z,"class","formItem svelte-mfc9i2"),e(z,"lines","none"),e(x,"name","desc"),e(x,"class","formTextarea svelte-mfc9i2"),e(x,"type","text"),e(x,"value",Q=i[0].desc),e(x,"placeholder","Description"),e(D,"class","formItem svelte-mfc9i2"),e(D,"lines","none"),e(U,"icon",Je),e(U,"size","large"),e(C,"expand","block"),e(C,"disabled",!1),e(n,"class","ion-padding Grid svelte-mfc9i2")},m(s,p){E(s,a,p),E(s,r,p),o(r,l),o(l,_),o(l,M),o(l,S),o(S,y),o(l,O),o(l,w),m&&m.m(w,null),o(w,F),o(w,k),E(s,B,p),E(s,n,p),o(n,d),o(n,ve),o(n,Y),o(Y,Z),o(Z,L),o(L,g),o(g,I),o(n,he),o(n,$),o(n,ye),o(n,ee),o(ee,oe),o(oe,H),o(H,q),o(q,te),o(q,we),o(q,T),o(T,ne),o(ne,b),o(T,ke),o(T,le),o(le,v),o(T,xe),o(T,ie),o(ie,h),o(n,Ce),o(n,ae),o(n,Ie),o(n,re),o(re,se),o(se,z),o(z,u),o(u,j),o(u,Te),o(u,A),o(u,Me),o(u,R),o(u,Se),o(u,J),o(n,Fe),o(n,ce),o(n,Be),o(n,ue),o(ue,me),o(me,D),o(D,x),o(n,Le),o(n,de),o(de,fe),o(fe,C),o(C,U),o(C,He),o(C,pe),_e||(qe=[f(y,"click",i[2]),f(k,"click",i[8]),f(g,"ionChange",i[3]),f(b,"ionChange",i[5]),f(b,"ionFocus",ge),f(v,"ionChange",i[5]),f(v,"ionFocus",ge),f(h,"ionChange",i[5]),f(h,"ionFocus",ge),f(u,"ionChange",i[4]),f(x,"ionChange",i[3]),f(C,"click",i[6])],_e=!0)},p(s,[p]){s[1]?m&&(m.d(1),m=null):m?m.p(s,p):(m=ze(s),m.c(),m.m(w,F)),p&1&&V!==(V=s[0].title)&&e(g,"value",V),p&1&&W!==(W=s[0].cps)&&e(b,"value",W),p&1&&G!==(G=s[0].qty)&&e(v,"value",G),p&1&&P!==(P=s[0].amt)&&e(h,"value",P),p&1&&K!==(K=s[0].cat)&&e(u,"value",K),p&1&&Q!==(Q=s[0].desc)&&e(x,"value",Q)},i:be,o:be,d(s){s&&N(a),s&&N(r),m&&m.d(),s&&N(B),s&&N(n),_e=!1,We(qe)}}}function ge(i){try{(parseFloat(i.target.value)||0)===0&&(i.target.value="")}catch(a){console.error("error clearing zero value",a)}i.target.getInputElement().then(a=>{console.log("input",a),a.type="text",a.setSelectionRange(a.value.length,a.value.length),a.type="number"})}function Qe(i,a,r){let{entry:l={}}=a,{isNew:_}=a;console.log("entry",l);const M=()=>{X.dismiss({data:null})};function S(n){r(0,l[n.target.name]=n.target.value,l)}function y(n){r(0,l[n.target.id]=n.target.value,l)}function O(n){try{r(0,l[n.target.name]=parseFloat(n.target.value)||0,l)}catch(d){console.error("handleNumberValue error",d),r(0,l[n.target.name]=0,l)}(n.target.name==="cps"||n.target.name==="qty")&&r(0,l.amt=l.cps*l.qty,l)}function w(){X.dismiss({data:l})}function F(){r(0,l.deleted=!0,l),X.dismiss({data:l})}async function k(){console.log("search");const n=await B();console.log("result",n)}const B=async()=>{const n=await X.create({component:Ge,showBackdrop:!0,backdropDismiss:!0});await n.present();const{data:d}=await n.onWillDismiss();return(d==null?void 0:d.data)!==null?(console.log("got data",d.data),r(0,l.title=d.data.title,l),r(0,l.cps=d.data.calories,l),r(0,l.qty=1,l),r(0,l.amt=l.cps*l.qty,l),r(0,l.desc=d.data.portion,l),!0):!1};return i.$$set=n=>{"entry"in n&&r(0,l=n.entry),"isNew"in n&&r(1,_=n.isNew)},[l,_,M,S,y,O,w,F,k]}class to extends De{constructor(a){super(),Ee(this,a,Qe,Ke,Ne,{entry:0,isNew:1})}}export{to as default};
