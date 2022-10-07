import{S as Be,i as Ee,s as Fe,a as r,e as n,t as Oe,b as e,c as qe,d as J,f as o,l as b,n as Se,h as K,r as ze}from"./index.d2ad4e6f.js";import"./supabase.auth.service.c64e88b8.js";import{m as de}from"./controllers.24ddf2c6.js";import{o as De,A as Ve,B as Ge,C as Ne}from"./index.8b2cdf33.js";import"./BehaviorSubject.2a878591.js";function Pe(a){let w,m,t,I,E,C,d,F,k,i,T,l,Q,pe,R,U,M,_,y,O,be,X,fe,Y,Z,L,H,$,ge,x,ee,f,q,ve,oe,g,z,he,ne,v,D,we,te,ye,le,ie,S,s,V,xe,G,Ce,N,ke,P,W,Ie,ae,Te,re,se,B,p,A,Me,ce,me,h,j,Le,ue,_e,He;return{c(){w=r(),m=n("ion-header"),t=n("ion-toolbar"),I=n("ion-title"),I.textContent="Edit Entry",E=r(),C=n("ion-buttons"),d=n("ion-icon"),F=r(),k=n("ion-buttons"),i=n("ion-icon"),T=r(),l=n("ion-grid"),Q=n("ion-row"),Q.innerHTML="<ion-col><ion-label>Title</ion-label></ion-col>",pe=r(),R=n("ion-row"),U=n("ion-col"),M=n("ion-item"),_=n("ion-input"),y=n("ion-icon"),be=r(),X=n("ion-row"),X.innerHTML="<ion-col><ion-label>Cost Per Serving</ion-label></ion-col>",fe=r(),Y=n("ion-row"),Z=n("ion-col"),L=n("ion-item"),H=n("ion-grid"),$=n("ion-row"),$.innerHTML=`<ion-col style="text-align: center;"><ion-label>Per Serving</ion-label></ion-col> 
                            <ion-col style="text-align: center;"><ion-label>Servings</ion-label></ion-col> 
                            <ion-col style="text-align: center;"><ion-label>Total</ion-label></ion-col>`,ge=r(),x=n("ion-row"),ee=n("ion-col"),f=n("ion-input"),ve=r(),oe=n("ion-col"),g=n("ion-input"),he=r(),ne=n("ion-col"),v=n("ion-input"),we=r(),te=n("ion-row"),te.innerHTML="<ion-col><ion-label>Category</ion-label></ion-col>",ye=r(),le=n("ion-row"),ie=n("ion-col"),S=n("ion-item"),s=n("ion-segment"),V=n("ion-segment-button"),V.innerHTML="<ion-label>Breakfast</ion-label>",xe=r(),G=n("ion-segment-button"),G.innerHTML="<ion-label>Lunch</ion-label>",Ce=r(),N=n("ion-segment-button"),N.innerHTML="<ion-label>Dinner</ion-label>",ke=r(),P=n("ion-segment-button"),P.innerHTML="<ion-label>Snack</ion-label>",Ie=r(),ae=n("ion-row"),ae.innerHTML="<ion-col><ion-label>Description</ion-label></ion-col>",Te=r(),re=n("ion-row"),se=n("ion-col"),B=n("ion-item"),p=n("ion-textarea"),Me=r(),ce=n("ion-row"),me=n("ion-col"),h=n("ion-button"),j=n("ion-icon"),Le=Oe(`\xA0\xA0
                `),ue=n("b"),ue.textContent="Done",document.title="FoodEntryModal",e(d,"icon",De),e(d,"slot","start"),e(d,"size","large"),e(d,"color","medium"),e(C,"slot","start"),e(i,"icon",Ve),e(i,"slot","start"),e(i,"size","large"),e(i,"color","medium"),e(k,"slot","end"),e(m,"translucent","true"),e(y,"class","inputIcon svelte-mfc9i2"),e(y,"icon",Ge),e(y,"slot","start"),e(y,"size","large"),e(y,"color","medium"),e(_,"name","title"),e(_,"class","formInputBoxWithIcon svelte-mfc9i2"),e(_,"type","text"),e(_,"value",O=a[0].title),e(_,"placeholder","Title"),e(M,"class","formItem svelte-mfc9i2"),e(M,"lines","none"),e(f,"name","cps"),e(f,"class","formInputBoxCentered svelte-mfc9i2"),e(f,"type","number"),e(f,"value",q=a[0].cps),e(g,"name","qty"),e(g,"class","formInputBoxCentered svelte-mfc9i2"),e(g,"type","number"),e(g,"value",z=a[0].qty),e(v,"name","amt"),e(v,"class","formInputBoxCentered svelte-mfc9i2"),e(v,"type","number"),e(v,"value",D=a[0].amt),e(L,"class","formItem svelte-mfc9i2"),e(L,"lines","none"),e(V,"value","1"),e(G,"value","2"),e(N,"value","3"),e(P,"value","4"),e(s,"value",W=a[0].cat),e(s,"color","dark"),e(s,"name","cat"),e(s,"id","cat"),e(s,"class","formSegment svelte-mfc9i2"),qe(s,"width","100%"),e(S,"class","formItem svelte-mfc9i2"),e(S,"lines","none"),e(p,"name","desc"),e(p,"class","formTextarea svelte-mfc9i2"),e(p,"type","text"),e(p,"value",A=a[0].desc),e(p,"placeholder","Description"),e(B,"class","formItem svelte-mfc9i2"),e(B,"lines","none"),e(j,"icon",Ne),e(j,"size","large"),e(h,"expand","block"),e(h,"disabled",!1),e(l,"class","ion-padding Grid svelte-mfc9i2")},m(c,u){J(c,w,u),J(c,m,u),o(m,t),o(t,I),o(t,E),o(t,C),o(C,d),o(t,F),o(t,k),o(k,i),J(c,T,u),J(c,l,u),o(l,Q),o(l,pe),o(l,R),o(R,U),o(U,M),o(M,_),o(_,y),o(l,be),o(l,X),o(l,fe),o(l,Y),o(Y,Z),o(Z,L),o(L,H),o(H,$),o(H,ge),o(H,x),o(x,ee),o(ee,f),o(x,ve),o(x,oe),o(oe,g),o(x,he),o(x,ne),o(ne,v),o(l,we),o(l,te),o(l,ye),o(l,le),o(le,ie),o(ie,S),o(S,s),o(s,V),o(s,xe),o(s,G),o(s,Ce),o(s,N),o(s,ke),o(s,P),o(l,Ie),o(l,ae),o(l,Te),o(l,re),o(re,se),o(se,B),o(B,p),o(l,Me),o(l,ce),o(ce,me),o(me,h),o(h,j),o(h,Le),o(h,ue),_e||(He=[b(d,"click",a[1]),b(i,"click",a[6]),b(_,"ionChange",a[2]),b(f,"ionChange",a[4]),b(g,"ionChange",a[4]),b(v,"ionChange",a[4]),b(s,"ionChange",a[3]),b(p,"ionChange",a[2]),b(h,"click",a[5])],_e=!0)},p(c,[u]){u&1&&O!==(O=c[0].title)&&e(_,"value",O),u&1&&q!==(q=c[0].cps)&&e(f,"value",q),u&1&&z!==(z=c[0].qty)&&e(g,"value",z),u&1&&D!==(D=c[0].amt)&&e(v,"value",D),u&1&&W!==(W=c[0].cat)&&e(s,"value",W),u&1&&A!==(A=c[0].desc)&&e(p,"value",A)},i:Se,o:Se,d(c){c&&K(w),c&&K(m),c&&K(T),c&&K(l),_e=!1,ze(He)}}}function We(a,w,m){let{entry:t={}}=w;const I=()=>{de.dismiss({data:null})};function E(i){m(0,t[i.target.name]=i.target.value,t)}function C(i){m(0,t[i.target.id]=i.target.value,t)}function d(i){try{m(0,t[i.target.name]=parseFloat(i.target.value)||0,t)}catch(T){console.error("handleNumberValue error",T),m(0,t[i.target.name]=0,t)}}function F(){de.dismiss({data:t})}function k(){m(0,t.deleted=!0,t),de.dismiss({data:t})}return a.$$set=i=>{"entry"in i&&m(0,t=i.entry)},[t,I,E,C,d,F,k]}class Re extends Be{constructor(w){super(),Ee(this,w,We,Pe,Fe,{entry:0})}}export{Re as default};
