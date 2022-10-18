import{S as _e,i as me,s as we,b as r,c as k,d as i,j as X,a as y,f as s,l as O,G as We,g as S,H as Q,t as ae,k as x,v as ce,h as Xe,m as Ze,p as fe,q as Le,r as Je,I as Ye,J as Ke,u as Qe,e as xe,x as $e,o as eo}from"./index.91186ebc.js";import{S as se}from"./supabase.auth.service.0ce2c186.js";import{m as re}from"./controllers.00bfd0e3.js";import{t as oo}from"./overlays-ab6211c7.d1079922.js";import{l as ee}from"./loadingMessage.56b3f921.js";import{l as no,a as io,b as to,d as lo,e as so,f as ro,g as ao,h as co,j as uo,k as go,m as fo,n as bo,o as Be,p as Ne,q as po,r as Re,t as _o,u as be,v as pe,w as mo}from"./index.6903e97e.js";const V=async(t,e="danger",o=3e3)=>{await(await oo.create({message:t,color:e,cssClass:"toast",position:"top",buttons:[{icon:"close",handler:()=>{console.log("dismiss")}}],duration:o})).present()};function He(t){let e,o;return{c(){e=r("ion-icon"),We(e.src,o=t[0])||i(e,"src",o),i(e,"size","large"),i(e,"slot","icon-only")},m(n,a){y(n,e,a)},p(n,a){a&1&&!We(e.src,o=n[0])&&i(e,"src",o)},d(n){n&&S(e)}}}function Te(t){let e,o;return{c(){e=r("ion-icon"),i(e,"icon",o=t[2][t[0]]),X(e,"color",t[1][t[0]]||"black"),i(e,"size","large"),i(e,"slot","icon-only")},m(n,a){y(n,e,a)},p(n,a){a&1&&o!==(o=n[2][n[0]])&&i(e,"icon",o),a&1&&X(e,"color",n[1][n[0]]||"black")},d(n){n&&S(e)}}}function wo(t){let e,o=t[0].startsWith("./assets/"),n,a=!t[0].startsWith("./assets/"),c,g,d=o&&He(t),b=a&&Te(t);return{c(){e=r("ion-button"),d&&d.c(),n=k(),b&&b.c(),i(e,"fill","clear"),i(e,"class","round-button svelte-10cza71"),X(e,"margin","8px"),X(e,"color","primary")},m(l,p){y(l,e,p),d&&d.m(e,null),s(e,n),b&&b.m(e,null),c||(g=O(e,"click",t[4]),c=!0)},p(l,[p]){p&1&&(o=l[0].startsWith("./assets/")),o?d?d.p(l,p):(d=He(l),d.c(),d.m(e,n)):d&&(d.d(1),d=null),p&1&&(a=!l[0].startsWith("./assets/")),a?b?b.p(l,p):(b=Te(l),b.c(),b.m(e,null)):b&&(b.d(1),b=null)},i:Q,o:Q,d(l){l&&S(e),d&&d.d(),b&&b.d(),c=!1,g()}}}function ho(t,e,o){let{name:n}=e;const a={google:"rgb(227,44,41)",facebook:"rgb(59,89,152)",spotify:"rgb(36,203,75)",twitter:"rgb(30,135,235)",apple:"gray",slack:"rgb(221,157,35)",twitch:"rgb(120,34,244)",discord:"rgb(116,131,244)",github:"rgb(0,0,0)",bitbucket:"rgb(56,98,169)",gitlab:"rgb(209,44,30)",azure:"rgb(228,54,26)",linkedin:"rgb(2,119,181)",zoom:"rgb(45,140,255)",notion:window.matchMedia("(prefers-color-scheme: dark)").matches?"gray":"black"},c={apple:no,google:io,twitter:to,facebook:lo,yahoo:so,github:ro,slack:ao,twitch:co,discord:uo,bitbucket:go,gitlab:fo,linkedin:bo,azure:Be,microsoft:Be,spotify:"./assets/spotify.svg",notion:"./assets/notion.svg",zoom:"./assets/zoom.svg"};let g;g||(g=se.getInstance());const d=async l=>{const p=await ee(`Contacting ${l}...`),{error:I}=await g.signInWithProvider(l);I&&(p.dismiss(),V(I.message))},b=()=>{d(n)};return t.$$set=l=>{"name"in l&&o(0,n=l.name)},[n,a,c,d,b]}class ko extends _e{constructor(e){super(),me(this,e,ho,wo,we,{name:0})}}function Ae(t,e,o){const n=t.slice();return n[17]=e[o],n}function De(t){let e;return{c(){e=r("ion-row"),e.innerHTML='<ion-col><ion-label color="danger"><b>Invalid email format</b></ion-label></ion-col>'},m(o,n){y(o,e,n)},d(o){o&&S(e)}}}function je(t){let e;return{c(){e=r("ion-row"),e.innerHTML='<ion-col><ion-label color="danger"><b>Password too short</b></ion-label></ion-col>'},m(o,n){y(o,e,n)},d(o){o&&S(e)}}}function Ee(t){let e,o,n,a,c,g,d,b,l,p,I;return{c(){e=r("ion-row"),o=r("ion-col"),n=r("ion-button"),a=r("ion-icon"),c=ae(`\xA0\xA0
                      `),g=r("b"),g.textContent="Sign in with email",b=k(),l=r("div"),l.innerHTML="<ion-label>Don&#39;t have an account? <b>Sign Up</b></ion-label>",i(a,"icon",Ne),i(a,"size","large"),i(n,"expand","block"),i(n,"color","primary"),i(n,"disabled",d=!t[7](t[1])||t[2].length<6),x(l,"class","ion-text-center"),X(l,"padding-top","10px")},m(m,P){y(m,e,P),s(e,o),s(o,n),s(n,a),s(n,c),s(n,g),s(o,b),s(o,l),p||(I=[O(n,"click",t[9]),O(l,"click",t[11])],p=!0)},p(m,P){P&6&&d!==(d=!m[7](m[1])||m[2].length<6)&&i(n,"disabled",d)},d(m){m&&S(e),p=!1,ce(I)}}}function Ge(t){let e,o,n,a,c,g,d,b,l,p,I;return{c(){e=r("ion-row"),o=r("ion-col"),n=r("ion-button"),a=r("ion-icon"),c=ae(`\xA0\xA0
                      `),g=r("b"),g.textContent="Sign Up",b=k(),l=r("div"),l.innerHTML="<ion-label>Already have an account? <b>Sign In</b></ion-label>",i(a,"icon",po),i(a,"size","large"),i(n,"expand","block"),i(n,"disabled",d=!t[7](t[1])||t[2].length<6),x(l,"class","ion-text-center"),X(l,"padding-top","10px")},m(m,P){y(m,e,P),s(e,o),s(o,n),s(n,a),s(n,c),s(n,g),s(o,b),s(o,l),p||(I=[O(n,"click",t[10]),O(l,"click",t[11])],p=!0)},p(m,P){P&6&&d!==(d=!m[7](m[1])||m[2].length<6)&&i(n,"disabled",d)},d(m){m&&S(e),p=!1,ce(I)}}}function Ue(t){let e;return{c(){e=r("div"),e.innerHTML="<ion-label>or, sign in with:</ion-label>",x(e,"class","ion-text-center")},m(o,n){y(o,e,n)},d(o){o&&S(e)}}}function Fe(t){let e,o;return e=new ko({props:{name:t[17]}}),{c(){Xe(e.$$.fragment)},m(n,a){Ze(e,n,a),o=!0},p(n,a){const c={};a&1&&(c.name=n[17]),e.$set(c)},i(n){o||(fe(e.$$.fragment,n),o=!0)},o(n){Le(e.$$.fragment,n),o=!1},d(n){Je(e,n)}}}function vo(t){let e,o,n,a,c,g,d,b,l,p,I,m,P,W,f,w,C,_=!t[7](t[1])&&t[1].length>0,v,N,Z,H,F,J,U,D,Y,oe,L,B,q,he,ke,ve,ne,ie,Pe,R,de,Me,Ie,ue,ye,te,le,Se,ge,$,ze,Ce,j=_&&De(),E=t[2].length>0&&t[2].length<6&&je(),T=!t[3]&&Ee(t),A=t[3]&&Ge(t),G=t[0]&&t[0].length>0&&Ue(),K=t[0],z=[];for(let u=0;u<K.length;u+=1)z[u]=Fe(Ae(t,K,u));const Ve=u=>Le(z[u],1,1,()=>{z[u]=null});return{c(){e=k(),o=r("ion-header"),n=r("ion-toolbar"),a=r("ion-title"),a.textContent="Sign In",c=k(),g=r("ion-buttons"),d=r("ion-icon"),b=k(),l=r("ion-grid"),p=r("ion-row"),p.innerHTML="<ion-col><ion-label>Email Address</ion-label></ion-col>",I=k(),m=r("ion-row"),P=r("ion-col"),W=r("ion-item"),f=r("ion-input"),w=r("ion-icon"),C=k(),j&&j.c(),v=k(),N=r("ion-row"),N.innerHTML="<ion-col><ion-label>Password</ion-label></ion-col>",Z=k(),H=r("ion-row"),F=r("ion-col"),J=r("ion-item"),U=r("ion-input"),D=r("ion-icon"),oe=k(),L=r("div"),L.innerHTML="<ion-label><b>Forgot password?</b></ion-label>",B=k(),E&&E.c(),q=k(),T&&T.c(),he=k(),A&&A.c(),ke=k(),ve=r("ion-row"),ne=r("ion-col"),ie=r("div"),ie.innerHTML="<ion-label><b>or</b></ion-label>",Pe=k(),R=r("ion-button"),de=r("ion-icon"),Me=ae(`\xA0\xA0
              `),Ie=r("b"),Ie.textContent="Send Sign In Link",ye=k(),G&&G.c(),te=k(),le=r("ion-grid"),Se=r("ion-row"),ge=r("ion-col");for(let u=0;u<z.length;u+=1)z[u].c();document.title="Diet Tracker",i(d,"icon",Re),i(d,"slot","start"),i(d,"size","large"),i(d,"color","medium"),i(g,"slot","start"),i(o,"translucent","true"),i(w,"class","inputIcon svelte-169g1w8"),i(w,"icon",_o),i(w,"slot","start"),i(w,"size","large"),i(w,"color","medium"),i(f,"class","loginInputBoxWithIcon svelte-169g1w8"),i(f,"type","email"),i(f,"placeholder","Email"),i(W,"class","loginItem svelte-169g1w8"),i(W,"lines","none"),i(D,"class","inputIcon svelte-169g1w8"),i(D,"icon",Y=t[2].length?be:pe),i(D,"slot","start"),i(D,"size","large"),i(D,"color","medium"),i(U,"type","password"),i(U,"placeholder","Password"),i(U,"class","loginInputBoxWithIcon svelte-169g1w8"),i(J,"class","loginItem svelte-169g1w8"),i(J,"lines","none"),x(L,"class","ion-text-right"),X(L,"padding-top","10px"),x(ie,"class","ion-text-center"),X(ie,"margin-bottom","10px"),i(de,"icon",mo),i(de,"size","large"),i(R,"expand","block"),i(R,"disabled",ue=!t[7](t[1])||t[2].length>0),i(l,"class","ion-padding LoginGrid svelte-169g1w8"),i(le,"class","ion-padding ion-text-center ProvidersGrid svelte-169g1w8")},m(u,h){y(u,e,h),y(u,o,h),s(o,n),s(n,a),s(n,c),s(n,g),s(g,d),y(u,b,h),y(u,l,h),s(l,p),s(l,I),s(l,m),s(m,P),s(P,W),s(W,f),s(f,w),s(l,C),j&&j.m(l,null),s(l,v),s(l,N),s(l,Z),s(l,H),s(H,F),s(F,J),s(J,U),s(U,D),s(F,oe),s(F,L),s(l,B),E&&E.m(l,null),s(l,q),T&&T.m(l,null),s(l,he),A&&A.m(l,null),s(l,ke),s(l,ve),s(ve,ne),s(ne,ie),s(ne,Pe),s(ne,R),s(R,de),s(R,Me),s(R,Ie),y(u,ye,h),G&&G.m(u,h),y(u,te,h),y(u,le,h),s(le,Se),s(Se,ge);for(let M=0;M<z.length;M+=1)z[M].m(ge,null);$=!0,ze||(Ce=[O(d,"click",t[4]),O(f,"ionChange",t[5]),O(U,"ionChange",t[6]),O(L,"click",t[8]),O(R,"click",t[12])],ze=!0)},p(u,[h]){if(h&2&&(_=!u[7](u[1])&&u[1].length>0),_?j||(j=De(),j.c(),j.m(l,v)):j&&(j.d(1),j=null),(!$||h&4&&Y!==(Y=u[2].length?be:pe))&&i(D,"icon",Y),u[2].length>0&&u[2].length<6?E||(E=je(),E.c(),E.m(l,q)):E&&(E.d(1),E=null),u[3]?T&&(T.d(1),T=null):T?T.p(u,h):(T=Ee(u),T.c(),T.m(l,he)),u[3]?A?A.p(u,h):(A=Ge(u),A.c(),A.m(l,ke)):A&&(A.d(1),A=null),(!$||h&6&&ue!==(ue=!u[7](u[1])||u[2].length>0))&&i(R,"disabled",ue),u[0]&&u[0].length>0?G||(G=Ue(),G.c(),G.m(te.parentNode,te)):G&&(G.d(1),G=null),h&1){K=u[0];let M;for(M=0;M<K.length;M+=1){const Oe=Ae(u,K,M);z[M]?(z[M].p(Oe,h),fe(z[M],1)):(z[M]=Fe(Oe),z[M].c(),fe(z[M],1),z[M].m(ge,null))}for(Ye(),M=K.length;M<z.length;M+=1)Ve(M);Ke()}},i(u){if(!$){for(let h=0;h<K.length;h+=1)fe(z[h]);$=!0}},o(u){z=z.filter(Boolean);for(let h=0;h<z.length;h+=1)Le(z[h]);$=!1},d(u){u&&S(e),u&&S(o),u&&S(b),u&&S(l),j&&j.d(),E&&E.d(),T&&T.d(),A&&A.d(),u&&S(ye),G&&G.d(u),u&&S(te),u&&S(le),Qe(z,u),ze=!1,ce(Ce)}}}function Io(t,e,o){let{providers:n=[]}=e,{onSignIn:a=()=>{}}=e,c;c||(c=se.getInstance()),window.matchMedia("(prefers-color-scheme: dark)").matches;const g=()=>{re.dismiss({data:Date.now()})};function d(_){o(1,f=_.target.value)}function b(_){o(2,w=_.target.value)}const l=_=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(_).toLowerCase()),p=async()=>{const _=await ee("Requesting password reset link..."),{error:v}=await c.resetPassword(f);v?(_.dismiss(),V(v.message)):(_.dismiss(),V("Please check your email for a password reset link","success"))},I=async()=>{const _=await ee("Logging in...");console.log("loader",_);const{user:v,session:N,error:Z}=await c.signInWithEmail(f,w);Z?_.dismiss():(_.dismiss(),re.dismiss({data:Date.now()}),a&&a(v,N))},m=async()=>{const _=await ee("Signing you up..."),{error:v}=await c.signUpWithEmail(f,w);v?(console.error(v),_.dismiss(),V(v.message)):(_.dismiss(),V("Please check your email for a confirmation link","success"))},P=()=>{o(3,C=!C)},W=async()=>{const _=await ee("Requesting magic link..."),{error:v}=await c.sendMagicLink(f);v?(_.dismiss(),V(v.message)):(_.dismiss(),V("Please check your email for a sign in link","success"))};let f="",w="",C=!1;return t.$$set=_=>{"providers"in _&&o(0,n=_.providers),"onSignIn"in _&&o(13,a=_.onSignIn)},[n,f,w,C,g,d,b,l,p,I,m,P,W,a]}class yo extends _e{constructor(e){super(),me(this,e,Io,vo,we,{providers:0,onSignIn:13})}}function qe(t){let e;return{c(){e=r("ion-row"),e.innerHTML='<ion-col><ion-label color="danger"><b>Password too short</b></ion-label></ion-col>'},m(o,n){y(o,e,n)},d(o){o&&S(e)}}}function So(t){let e,o,n,a,c,g,d,b,l,p,I,m,P,W,f,w,C,_,v,N,Z,H,F,J,U,D,Y,oe,L=t[0].length>0&&t[0].length<6&&qe();return{c(){e=r("ion-header"),o=r("ion-toolbar"),n=r("ion-title"),n.textContent="Reset Password",a=k(),c=r("ion-buttons"),g=r("ion-button"),d=r("ion-icon"),b=k(),l=r("ion-grid"),p=r("ion-row"),p.innerHTML="<ion-col><ion-label>New Password:</ion-label></ion-col>",I=k(),m=r("ion-row"),P=r("ion-col"),W=r("ion-item"),f=r("ion-input"),w=r("ion-icon"),_=k(),L&&L.c(),v=k(),N=r("ion-row"),Z=r("ion-col"),H=r("ion-button"),F=r("ion-icon"),J=ae(`\xA0\xA0
                      `),U=r("b"),U.textContent="Save New Password",i(d,"icon",Re),i(d,"slot","start"),i(d,"size","large"),i(d,"color","medium"),i(c,"slot","start"),i(e,"translucent","true"),i(w,"class","inputIcon svelte-xr9zj9"),i(w,"icon",C=t[0].length?be:pe),i(w,"slot","start"),i(w,"size","large"),i(w,"color","medium"),i(f,"type","password"),i(f,"placeholder","Password"),i(f,"class","loginInputBoxWithIcon svelte-xr9zj9"),i(W,"class","loginItem svelte-xr9zj9"),i(W,"lines","none"),i(F,"icon",Ne),i(F,"size","large"),i(H,"expand","block"),i(H,"color","primary"),i(H,"disabled",D=t[0].length<6),i(l,"class","ion-padding"),X(l,"max-width","375px")},m(B,q){y(B,e,q),s(e,o),s(o,n),s(o,a),s(o,c),s(c,g),s(g,d),y(B,b,q),y(B,l,q),s(l,p),s(l,I),s(l,m),s(m,P),s(P,W),s(W,f),s(f,w),s(l,_),L&&L.m(l,null),s(l,v),s(l,N),s(N,Z),s(Z,H),s(H,F),s(H,J),s(H,U),Y||(oe=[O(g,"click",t[1]),O(f,"ionChange",t[2]),O(H,"click",t[3])],Y=!0)},p(B,[q]){q&1&&C!==(C=B[0].length?be:pe)&&i(w,"icon",C),B[0].length>0&&B[0].length<6?L||(L=qe(),L.c(),L.m(l,v)):L&&(L.d(1),L=null),q&1&&D!==(D=B[0].length<6)&&i(H,"disabled",D)},i:Q,o:Q,d(B){B&&S(e),B&&S(b),B&&S(l),L&&L.d(),Y=!1,ce(oe)}}}function zo(t,e,o){let{token:n=""}=e,a;a||(a=se.getInstance());const c=()=>{re.dismiss({data:Date.now()})};function g(l){o(0,d=l.target.value)}let d="";const b=async()=>{const l=await ee("Updating password..."),{error:p}=await a.updatePassword(n,d);p?(l.dismiss(),V(p.message)):(l.dismiss(),V("Password updated","success",3e3),c())};return t.$$set=l=>{"token"in l&&o(4,n=l.token)},[d,c,g,b,n]}class Lo extends _e{constructor(e){super(),me(this,e,zo,So,we,{token:4})}}function Po(t){let e,o,n,a;return{c(){e=r("div"),o=r("ion-button"),o.textContent="Sign In",i(o,"fill","outline"),i(o,"color","dark"),i(o,"size","small"),i(o,"expand","block"),i(o,"strong",""),x(e,"class","fullWidth svelte-17l94cn")},m(c,g){y(c,e,g),s(e,o),n||(a=O(o,"click",t[3]),n=!0)},p:Q,d(c){c&&S(e),n=!1,a()}}}function Mo(t){var l;let e,o,n=((l=t[0])==null?void 0:l.email)+"",a,c,g,d,b;return{c(){e=r("div"),o=r("ion-button"),a=ae(n),c=k(),g=r("ion-button"),g.textContent="Sign Out",i(o,"fill","outline"),i(o,"color","dark"),i(o,"size","small"),i(o,"expand","block"),i(o,"strong",""),i(g,"fill","outline"),i(g,"color","dark"),i(g,"size","small"),i(g,"expand","block"),i(g,"strong",""),x(e,"class","fullWidth svelte-17l94cn")},m(p,I){y(p,e,I),s(e,o),s(o,a),s(e,c),s(e,g),d||(b=[O(o,"click",t[1]),O(g,"click",t[2])],d=!0)},p(p,I){var m;I&1&&n!==(n=((m=p[0])==null?void 0:m.email)+"")&&eo(a,n)},d(p){p&&S(e),d=!1,ce(b)}}}function Co(t){let e;function o(c,g){return c[0]?Mo:Po}let n=o(t),a=n(t);return{c(){a.c(),e=xe()},m(c,g){a.m(c,g),y(c,e,g)},p(c,[g]){n===(n=o(c))&&a?a.p(c,g):(a.d(1),a=n(c),a&&(a.c(),a.m(e.parentNode,e)))},i:Q,o:Q,d(c){a.d(c),c&&S(e)}}}function Oo(t,e,o){let{profileFunction:n=()=>{}}=e,{providers:a=[]}=e,{onSignIn:c=()=>{}}=e,{onSignOut:g=()=>{}}=e,d="",b,l=null;$e(()=>{p(),se.user.subscribe(f=>{o(0,l=f)}),b||(b=se.getInstance())});const p=()=>{const f=window.location.hash;if(f&&f.substring(0,1)==="#"){const w=f.substring(1).split("&"),C={};w.map(_=>{const v=(_+"=").split("=");C[v[0]]=v[1]}),(C==null?void 0:C.type)==="recovery"&&(d=C.access_token,setTimeout(()=>{W()},2500))}},I=async()=>{n&&n()},m=async()=>{const{error:f}=await b.signOut();f?console.error("Error signing out",f):g?g():window.location.reload()},P=async()=>{await(await re.create({component:yo,componentProps:{providers:a,onSignIn:c},showBackdrop:!0,backdropDismiss:!0})).present()},W=async()=>{const f=await re.create({component:Lo,componentProps:{token:d},showBackdrop:!0,backdropDismiss:!0});f.onDidDismiss().then(w=>{w.role==="backdrop"&&console.log("Backdrop clicked")}),await f.present()};return t.$$set=f=>{"profileFunction"in f&&o(4,n=f.profileFunction),"providers"in f&&o(5,a=f.providers),"onSignIn"in f&&o(6,c=f.onSignIn),"onSignOut"in f&&o(7,g=f.onSignOut)},[l,I,m,P,n,a,c,g]}class jo extends _e{constructor(e){super(),me(this,e,Oo,Co,we,{profileFunction:4,providers:5,onSignIn:6,onSignOut:7})}}export{jo as L,V as t};
