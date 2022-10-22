import{S as De,i as Ne,s as Oe,b as t,d as e,a as N,l as f,H as be,g as O,c,t as Ee,j as Ve,f as o,v as We}from"./index.05f77f27.js";import{m as X}from"./controllers.1f3cde1a.js";import Ge from"./FoodSearchModal.d9e9a460.js";import{y as Pe,r as je,z as Ae,A as Je,B as Ke}from"./index.8eb3de29.js";import"./loadingMessage.24c8b483.js";import"./supabase.data.service.9ec7cb38.js";import"./BehaviorSubject.1c2d4c68.js";function ze(i){let r,a,l;return{c(){r=t("ion-icon"),e(r,"icon",Pe),e(r,"slot","start"),e(r,"size","large"),e(r,"color","primary")},m(_,M){N(_,r,M),a||(l=f(r,"click",i[7]),a=!0)},p:be,d(_){_&&O(r),a=!1,l()}}}function Qe(i){let r,a,l,_,M,S,y,E,h,F,k,B,n,d,ve,Y,Z,L,g,I,V,we,$,ye,ee,oe,H,q,te,he,T,ne,b,W,ke,le,v,G,xe,ie,w,P,Ce,ae,Ie,re,se,z,u,j,Te,A,Me,J,Se,K,Q,Fe,ce,Be,ue,me,D,x,R,Le,de,fe,C,U,He,pe,_e,qe,m=!i[1]&&ze(i);return{c(){r=c(),a=t("ion-header"),l=t("ion-toolbar"),_=t("ion-title"),_.textContent="Edit Entry",M=c(),S=t("ion-buttons"),y=t("ion-icon"),E=c(),h=t("ion-buttons"),m&&m.c(),F=c(),k=t("ion-icon"),B=c(),n=t("ion-grid"),d=t("ion-row"),d.innerHTML="<ion-col><ion-label>Title</ion-label></ion-col>",ve=c(),Y=t("ion-row"),Z=t("ion-col"),L=t("ion-item"),g=t("ion-input"),I=t("ion-icon"),we=c(),$=t("ion-row"),$.innerHTML="<ion-col><ion-label>Cost Per Serving</ion-label></ion-col>",ye=c(),ee=t("ion-row"),oe=t("ion-col"),H=t("ion-item"),q=t("ion-grid"),te=t("ion-row"),te.innerHTML=`<ion-col style="text-align: center;"><ion-label>Per Serving</ion-label></ion-col> 
                            <ion-col style="text-align: center;"><ion-label>Servings</ion-label></ion-col> 
                            <ion-col style="text-align: center;"><ion-label>Total</ion-label></ion-col>`,he=c(),T=t("ion-row"),ne=t("ion-col"),b=t("ion-input"),ke=c(),le=t("ion-col"),v=t("ion-input"),xe=c(),ie=t("ion-col"),w=t("ion-input"),Ce=c(),ae=t("ion-row"),ae.innerHTML="<ion-col><ion-label>Category</ion-label></ion-col>",Ie=c(),re=t("ion-row"),se=t("ion-col"),z=t("ion-item"),u=t("ion-segment"),j=t("ion-segment-button"),j.innerHTML="<ion-label>Breakfast</ion-label>",Te=c(),A=t("ion-segment-button"),A.innerHTML="<ion-label>Lunch</ion-label>",Me=c(),J=t("ion-segment-button"),J.innerHTML="<ion-label>Dinner</ion-label>",Se=c(),K=t("ion-segment-button"),K.innerHTML="<ion-label>Snack</ion-label>",Fe=c(),ce=t("ion-row"),ce.innerHTML="<ion-col><ion-label>Description</ion-label></ion-col>",Be=c(),ue=t("ion-row"),me=t("ion-col"),D=t("ion-item"),x=t("ion-textarea"),Le=c(),de=t("ion-row"),fe=t("ion-col"),C=t("ion-button"),U=t("ion-icon"),He=Ee(`\xA0\xA0
                `),pe=t("b"),pe.textContent="Done",document.title="FoodEntryModal",e(y,"icon",je),e(y,"slot","start"),e(y,"size","large"),e(y,"color","primary"),e(S,"slot","start"),e(k,"icon",Ae),e(k,"slot","start"),e(k,"size","large"),e(k,"color","primary"),e(h,"slot","end"),e(a,"translucent","true"),e(I,"class","inputIcon svelte-mfc9i2"),e(I,"icon",Je),e(I,"slot","start"),e(I,"size","large"),e(I,"color","medium"),e(g,"name","title"),e(g,"class","formInputBoxWithIcon svelte-mfc9i2"),e(g,"type","text"),e(g,"value",V=i[0].title),e(g,"placeholder","Title"),e(L,"class","formItem svelte-mfc9i2"),e(L,"lines","none"),e(b,"name","cps"),e(b,"class","formInputBoxCentered svelte-mfc9i2"),e(b,"inputmode","decimal"),e(b,"type","decimal"),e(b,"value",W=i[0].cps),e(v,"name","qty"),e(v,"class","formInputBoxCentered svelte-mfc9i2"),e(v,"inputmode","decimal"),e(v,"type","decimal"),e(v,"value",G=i[0].qty),e(w,"name","amt"),e(w,"class","formInputBoxCentered svelte-mfc9i2"),e(w,"inputmode","decimal"),e(w,"type","decimal"),e(w,"value",P=i[0].amt),e(H,"class","formItem svelte-mfc9i2"),e(H,"lines","none"),e(j,"value","Breakfast"),e(A,"value","Lunch"),e(J,"value","Dinner"),e(K,"value","Snack"),e(u,"value",Q=i[0].cat),e(u,"color","dark"),e(u,"name","cat"),e(u,"id","cat"),e(u,"class","formSegment svelte-mfc9i2"),Ve(u,"width","100%"),e(z,"class","formItem svelte-mfc9i2"),e(z,"lines","none"),e(x,"name","desc"),e(x,"class","formTextarea svelte-mfc9i2"),e(x,"type","text"),e(x,"value",R=i[0].desc),e(x,"placeholder","Description"),e(D,"class","formItem svelte-mfc9i2"),e(D,"lines","none"),e(U,"icon",Ke),e(U,"size","large"),e(C,"expand","block"),e(C,"disabled",!1),e(n,"class","ion-padding Grid svelte-mfc9i2")},m(s,p){N(s,r,p),N(s,a,p),o(a,l),o(l,_),o(l,M),o(l,S),o(S,y),o(l,E),o(l,h),m&&m.m(h,null),o(h,F),o(h,k),N(s,B,p),N(s,n,p),o(n,d),o(n,ve),o(n,Y),o(Y,Z),o(Z,L),o(L,g),o(g,I),o(n,we),o(n,$),o(n,ye),o(n,ee),o(ee,oe),o(oe,H),o(H,q),o(q,te),o(q,he),o(q,T),o(T,ne),o(ne,b),o(T,ke),o(T,le),o(le,v),o(T,xe),o(T,ie),o(ie,w),o(n,Ce),o(n,ae),o(n,Ie),o(n,re),o(re,se),o(se,z),o(z,u),o(u,j),o(u,Te),o(u,A),o(u,Me),o(u,J),o(u,Se),o(u,K),o(n,Fe),o(n,ce),o(n,Be),o(n,ue),o(ue,me),o(me,D),o(D,x),o(n,Le),o(n,de),o(de,fe),o(fe,C),o(C,U),o(C,He),o(C,pe),_e||(qe=[f(y,"click",i[2]),f(k,"click",i[8]),f(g,"ionChange",i[3]),f(b,"ionChange",i[5]),f(b,"ionFocus",ge),f(v,"ionChange",i[5]),f(v,"ionFocus",ge),f(w,"ionChange",i[5]),f(w,"ionFocus",ge),f(u,"ionChange",i[4]),f(x,"ionChange",i[3]),f(C,"click",i[6])],_e=!0)},p(s,[p]){s[1]?m&&(m.d(1),m=null):m?m.p(s,p):(m=ze(s),m.c(),m.m(h,F)),p&1&&V!==(V=s[0].title)&&e(g,"value",V),p&1&&W!==(W=s[0].cps)&&e(b,"value",W),p&1&&G!==(G=s[0].qty)&&e(v,"value",G),p&1&&P!==(P=s[0].amt)&&e(w,"value",P),p&1&&Q!==(Q=s[0].cat)&&e(u,"value",Q),p&1&&R!==(R=s[0].desc)&&e(x,"value",R)},i:be,o:be,d(s){s&&O(r),s&&O(a),m&&m.d(),s&&O(B),s&&O(n),_e=!1,We(qe)}}}function ge(i){try{(parseFloat(i.target.value)||0)===0&&(i.target.value="")}catch(r){console.error("error clearing zero value",r)}}function Re(i,r,a){let{entry:l={}}=r,{isNew:_}=r;console.log("entry",l);const M=()=>{X.dismiss({data:null})};function S(n){a(0,l[n.target.name]=n.target.value,l)}function y(n){a(0,l[n.target.id]=n.target.value,l)}function E(n){try{a(0,l[n.target.name]=parseFloat(n.target.value)||0,l)}catch(d){console.error("handleNumberValue error",d),a(0,l[n.target.name]=0,l)}(n.target.name==="cps"||n.target.name==="qty")&&a(0,l.amt=l.cps*l.qty,l)}function h(){X.dismiss({data:l})}function F(){a(0,l.deleted=!0,l),X.dismiss({data:l})}async function k(){console.log("search");const n=await B();console.log("result",n)}const B=async()=>{const n=await X.create({component:Ge,showBackdrop:!0,backdropDismiss:!0});await n.present();const{data:d}=await n.onWillDismiss();return(d==null?void 0:d.data)!==null?(console.log("got data",d.data),a(0,l.title=d.data.title,l),a(0,l.cps=d.data.calories,l),a(0,l.qty=1,l),a(0,l.amt=l.cps*l.qty,l),a(0,l.desc=d.data.portion,l),!0):!1};return i.$$set=n=>{"entry"in n&&a(0,l=n.entry),"isNew"in n&&a(1,_=n.isNew)},[l,_,M,S,y,E,h,F,k]}class to extends De{constructor(r){super(),Ne(this,r,Re,Qe,Oe,{entry:0,isNew:1})}}export{to as default};
