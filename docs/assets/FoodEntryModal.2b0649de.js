import{S as He,i as qe,s as Ee,a as r,e as n,t as De,b as e,c as Fe,d as J,f as o,l as f,n as Be,h as K,r as Oe}from"./index.eaa94812.js";import"./supabase.auth.service.c72303e8.js";import{m as de}from"./controllers.351717f4.js";import{o as ze,A as Ve,B as Ge,C as Ne}from"./index.d05ab2fe.js";import"./BehaviorSubject.fe6ce491.js";function Pe(a){let w,m,t,I,q,k,d,E,C,l,T,i,Q,pe,R,U,M,_,y,D,fe,X,be,Y,Z,L,S,$,ge,x,ee,b,F,ve,oe,g,O,he,ne,v,z,we,te,ye,le,ie,B,s,V,xe,G,ke,N,Ce,P,W,Ie,ae,Te,re,se,H,p,A,Me,ce,me,h,j,Le,ue,_e,Se;return{c(){w=r(),m=n("ion-header"),t=n("ion-toolbar"),I=n("ion-title"),I.textContent="Edit Entry",q=r(),k=n("ion-buttons"),d=n("ion-icon"),E=r(),C=n("ion-buttons"),l=n("ion-icon"),T=r(),i=n("ion-grid"),Q=n("ion-row"),Q.innerHTML="<ion-col><ion-label>Title</ion-label></ion-col>",pe=r(),R=n("ion-row"),U=n("ion-col"),M=n("ion-item"),_=n("ion-input"),y=n("ion-icon"),fe=r(),X=n("ion-row"),X.innerHTML="<ion-col><ion-label>Cost Per Serving</ion-label></ion-col>",be=r(),Y=n("ion-row"),Z=n("ion-col"),L=n("ion-item"),S=n("ion-grid"),$=n("ion-row"),$.innerHTML=`<ion-col style="text-align: center;"><ion-label>Per Serving</ion-label></ion-col> 
                            <ion-col style="text-align: center;"><ion-label>Servings</ion-label></ion-col> 
                            <ion-col style="text-align: center;"><ion-label>Total</ion-label></ion-col>`,ge=r(),x=n("ion-row"),ee=n("ion-col"),b=n("ion-input"),ve=r(),oe=n("ion-col"),g=n("ion-input"),he=r(),ne=n("ion-col"),v=n("ion-input"),we=r(),te=n("ion-row"),te.innerHTML="<ion-col><ion-label>Category</ion-label></ion-col>",ye=r(),le=n("ion-row"),ie=n("ion-col"),B=n("ion-item"),s=n("ion-segment"),V=n("ion-segment-button"),V.innerHTML="<ion-label>Breakfast</ion-label>",xe=r(),G=n("ion-segment-button"),G.innerHTML="<ion-label>Lunch</ion-label>",ke=r(),N=n("ion-segment-button"),N.innerHTML="<ion-label>Dinner</ion-label>",Ce=r(),P=n("ion-segment-button"),P.innerHTML="<ion-label>Snack</ion-label>",Ie=r(),ae=n("ion-row"),ae.innerHTML="<ion-col><ion-label>Description</ion-label></ion-col>",Te=r(),re=n("ion-row"),se=n("ion-col"),H=n("ion-item"),p=n("ion-textarea"),Me=r(),ce=n("ion-row"),me=n("ion-col"),h=n("ion-button"),j=n("ion-icon"),Le=De(`\xA0\xA0
                `),ue=n("b"),ue.textContent="Done",document.title="FoodEntryModal",e(d,"icon",ze),e(d,"slot","start"),e(d,"size","large"),e(d,"color","medium"),e(k,"slot","start"),e(l,"icon",Ve),e(l,"slot","start"),e(l,"size","large"),e(l,"color","medium"),e(C,"slot","end"),e(m,"translucent","true"),e(y,"class","inputIcon svelte-mfc9i2"),e(y,"icon",Ge),e(y,"slot","start"),e(y,"size","large"),e(y,"color","medium"),e(_,"name","title"),e(_,"class","formInputBoxWithIcon svelte-mfc9i2"),e(_,"type","text"),e(_,"value",D=a[0].title),e(_,"placeholder","Title"),e(M,"class","formItem svelte-mfc9i2"),e(M,"lines","none"),e(b,"name","cps"),e(b,"class","formInputBoxCentered svelte-mfc9i2"),e(b,"type","number"),e(b,"value",F=a[0].cps),e(g,"name","qty"),e(g,"class","formInputBoxCentered svelte-mfc9i2"),e(g,"type","number"),e(g,"value",O=a[0].qty),e(v,"name","amt"),e(v,"class","formInputBoxCentered svelte-mfc9i2"),e(v,"type","number"),e(v,"value",z=a[0].amt),e(L,"class","formItem svelte-mfc9i2"),e(L,"lines","none"),e(V,"value","Breakfast"),e(G,"value","Lunch"),e(N,"value","Dinner"),e(P,"value","Snack"),e(s,"value",W=a[0].cat),e(s,"color","dark"),e(s,"name","cat"),e(s,"id","cat"),e(s,"class","formSegment svelte-mfc9i2"),Fe(s,"width","100%"),e(B,"class","formItem svelte-mfc9i2"),e(B,"lines","none"),e(p,"name","desc"),e(p,"class","formTextarea svelte-mfc9i2"),e(p,"type","text"),e(p,"value",A=a[0].desc),e(p,"placeholder","Description"),e(H,"class","formItem svelte-mfc9i2"),e(H,"lines","none"),e(j,"icon",Ne),e(j,"size","large"),e(h,"expand","block"),e(h,"disabled",!1),e(i,"class","ion-padding Grid svelte-mfc9i2")},m(c,u){J(c,w,u),J(c,m,u),o(m,t),o(t,I),o(t,q),o(t,k),o(k,d),o(t,E),o(t,C),o(C,l),J(c,T,u),J(c,i,u),o(i,Q),o(i,pe),o(i,R),o(R,U),o(U,M),o(M,_),o(_,y),o(i,fe),o(i,X),o(i,be),o(i,Y),o(Y,Z),o(Z,L),o(L,S),o(S,$),o(S,ge),o(S,x),o(x,ee),o(ee,b),o(x,ve),o(x,oe),o(oe,g),o(x,he),o(x,ne),o(ne,v),o(i,we),o(i,te),o(i,ye),o(i,le),o(le,ie),o(ie,B),o(B,s),o(s,V),o(s,xe),o(s,G),o(s,ke),o(s,N),o(s,Ce),o(s,P),o(i,Ie),o(i,ae),o(i,Te),o(i,re),o(re,se),o(se,H),o(H,p),o(i,Me),o(i,ce),o(ce,me),o(me,h),o(h,j),o(h,Le),o(h,ue),_e||(Se=[f(d,"click",a[1]),f(l,"click",a[6]),f(_,"ionChange",a[2]),f(b,"ionChange",a[4]),f(g,"ionChange",a[4]),f(v,"ionChange",a[4]),f(s,"ionChange",a[3]),f(p,"ionChange",a[2]),f(h,"click",a[5])],_e=!0)},p(c,[u]){u&1&&D!==(D=c[0].title)&&e(_,"value",D),u&1&&F!==(F=c[0].cps)&&e(b,"value",F),u&1&&O!==(O=c[0].qty)&&e(g,"value",O),u&1&&z!==(z=c[0].amt)&&e(v,"value",z),u&1&&W!==(W=c[0].cat)&&e(s,"value",W),u&1&&A!==(A=c[0].desc)&&e(p,"value",A)},i:Be,o:Be,d(c){c&&K(w),c&&K(m),c&&K(T),c&&K(i),_e=!1,Oe(Se)}}}function We(a,w,m){let{entry:t={}}=w;const I=()=>{de.dismiss({data:null})};function q(l){m(0,t[l.target.name]=l.target.value,t)}function k(l){m(0,t[l.target.id]=l.target.value,t)}function d(l){try{m(0,t[l.target.name]=parseFloat(l.target.value)||0,t)}catch(T){console.error("handleNumberValue error",T),m(0,t[l.target.name]=0,t)}(l.target.name==="cps"||l.target.name==="qty")&&m(0,t.amt=t.cps*t.qty,t)}function E(){de.dismiss({data:t})}function C(){m(0,t.deleted=!0,t),de.dismiss({data:t})}return a.$$set=l=>{"entry"in l&&m(0,t=l.entry)},[t,I,q,k,d,E,C]}class Re extends He{constructor(w){super(),qe(this,w,We,Pe,Ee,{entry:0})}}export{Re as default};
