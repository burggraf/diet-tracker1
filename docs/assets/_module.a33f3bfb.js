import{S as ue,i as de,s as fe,e as a,a as v,b as i,c as F,d as I,f as s,l as D,g as Ae,h as S,n as le,t as oe,j as Q,r as ge,k as Oe,m as Pe,o as ie,p as ae,q as Ce,u as lo,v as so,w as Qe,x as xe,y as eo,z as oo,A as De,B as je,C as ro,D as ao,E as co,F as uo,G as fo,H as go,I as bo}from"./index.ec81be64.js";import{l as po,a as mo,b as _o,c as vo,d as ho,e as wo,f as ko,g as zo,h as yo,i as Io,j as So,k as Lo,m as qe,n as no,p as Mo,o as to,q as Oo,r as ke,s as ze,t as Po,u as Co,v as Wo,w as Bo}from"./index.8307df69.js";import{S as ce}from"./supabase.auth.service.e06ab974.js";import{m as _e}from"./controllers.05177169.js";import{t as Ho}from"./overlays-ab6211c7.e870ed74.js";import{l as re,N as To}from"./network.service.bed67e72.js";import{g as Ao,i as Do}from"./index.65b24fea.js";import{s as jo}from"./alert.c5658a37.js";import"./BehaviorSubject.b47b3d16.js";const K=async(t,e="danger",o=3e3)=>{await(await Ho.create({message:t,color:e,cssClass:"toast",position:"top",buttons:[{icon:"close",handler:()=>{console.log("dismiss")}}],duration:o})).present()};function Ee(t){let e,o;return{c(){e=a("ion-icon"),Ae(e.src,o=t[0])||i(e,"src",o),i(e,"size","large"),i(e,"slot","icon-only")},m(n,r){I(n,e,r)},p(n,r){r&1&&!Ae(e.src,o=n[0])&&i(e,"src",o)},d(n){n&&S(e)}}}function Fe(t){let e,o;return{c(){e=a("ion-icon"),i(e,"icon",o=t[2][t[0]]),F(e,"color",t[1][t[0]]||"black"),i(e,"size","large"),i(e,"slot","icon-only")},m(n,r){I(n,e,r)},p(n,r){r&1&&o!==(o=n[2][n[0]])&&i(e,"icon",o),r&1&&F(e,"color",n[1][n[0]]||"black")},d(n){n&&S(e)}}}function qo(t){let e,o=t[0].startsWith("./assets/"),n,r=!t[0].startsWith("./assets/"),c,d,u=o&&Ee(t),f=r&&Fe(t);return{c(){e=a("ion-button"),u&&u.c(),n=v(),f&&f.c(),i(e,"fill","clear"),i(e,"class","round-button svelte-10cza71"),F(e,"margin","8px"),F(e,"color","primary")},m(l,b){I(l,e,b),u&&u.m(e,null),s(e,n),f&&f.m(e,null),c||(d=D(e,"click",t[4]),c=!0)},p(l,[b]){b&1&&(o=l[0].startsWith("./assets/")),o?u?u.p(l,b):(u=Ee(l),u.c(),u.m(e,n)):u&&(u.d(1),u=null),b&1&&(r=!l[0].startsWith("./assets/")),r?f?f.p(l,b):(f=Fe(l),f.c(),f.m(e,null)):f&&(f.d(1),f=null)},i:le,o:le,d(l){l&&S(e),u&&u.d(),f&&f.d(),c=!1,d()}}}function Eo(t,e,o){let{name:n}=e;const r={google:"rgb(227,44,41)",facebook:"rgb(59,89,152)",spotify:"rgb(36,203,75)",twitter:"rgb(30,135,235)",apple:"gray",slack:"rgb(221,157,35)",twitch:"rgb(120,34,244)",discord:"rgb(116,131,244)",github:"rgb(0,0,0)",bitbucket:"rgb(56,98,169)",gitlab:"rgb(209,44,30)",azure:"rgb(228,54,26)",linkedin:"rgb(2,119,181)",zoom:"rgb(45,140,255)",notion:window.matchMedia("(prefers-color-scheme: dark)").matches?"gray":"black"},c={apple:po,google:mo,twitter:_o,facebook:vo,yahoo:ho,github:wo,slack:ko,twitch:zo,discord:yo,bitbucket:Io,gitlab:So,linkedin:Lo,azure:qe,microsoft:qe,spotify:"./assets/spotify.svg",notion:"./assets/notion.svg",zoom:"./assets/zoom.svg"};let d;d||(d=ce.getInstance());const u=async l=>{const b=await re(`Contacting ${l}...`),{error:w}=await d.signInWithProvider(l);w&&(b.dismiss(),K(w.message))},f=()=>{u(n)};return t.$$set=l=>{"name"in l&&o(0,n=l.name)},[n,r,c,u,f]}class Fo extends ue{constructor(e){super(),de(this,e,Eo,qo,fe,{name:0})}}function Ne(t,e,o){const n=t.slice();return n[17]=e[o],n}function Ge(t){let e;return{c(){e=a("ion-row"),e.innerHTML='<ion-col><ion-label color="danger"><b>Invalid email format</b></ion-label></ion-col>'},m(o,n){I(o,e,n)},d(o){o&&S(e)}}}function Ue(t){let e;return{c(){e=a("ion-row"),e.innerHTML='<ion-col><ion-label color="danger"><b>Password too short</b></ion-label></ion-col>'},m(o,n){I(o,e,n)},d(o){o&&S(e)}}}function Re(t){let e,o,n,r,c,d,u,f,l,b,w;return{c(){e=a("ion-row"),o=a("ion-col"),n=a("ion-button"),r=a("ion-icon"),c=oe(`\xA0\xA0
                      `),d=a("b"),d.textContent="Sign in with email",f=v(),l=a("div"),l.innerHTML="<ion-label>Don&#39;t have an account? <b>Sign Up</b></ion-label>",i(r,"icon",no),i(r,"size","large"),i(n,"expand","block"),i(n,"color","primary"),i(n,"disabled",u=!t[7](t[1])||t[2].length<6),Q(l,"class","ion-text-center"),F(l,"padding-top","10px")},m(m,h){I(m,e,h),s(e,o),s(o,n),s(n,r),s(n,c),s(n,d),s(o,f),s(o,l),b||(w=[D(n,"click",t[9]),D(l,"click",t[11])],b=!0)},p(m,h){h&6&&u!==(u=!m[7](m[1])||m[2].length<6)&&i(n,"disabled",u)},d(m){m&&S(e),b=!1,ge(w)}}}function Ve(t){let e,o,n,r,c,d,u,f,l,b,w;return{c(){e=a("ion-row"),o=a("ion-col"),n=a("ion-button"),r=a("ion-icon"),c=oe(`\xA0\xA0
                      `),d=a("b"),d.textContent="Sign Up",f=v(),l=a("div"),l.innerHTML="<ion-label>Already have an account? <b>Sign In</b></ion-label>",i(r,"icon",Mo),i(r,"size","large"),i(n,"expand","block"),i(n,"disabled",u=!t[7](t[1])||t[2].length<6),Q(l,"class","ion-text-center"),F(l,"padding-top","10px")},m(m,h){I(m,e,h),s(e,o),s(o,n),s(n,r),s(n,c),s(n,d),s(o,f),s(o,l),b||(w=[D(n,"click",t[10]),D(l,"click",t[11])],b=!0)},p(m,h){h&6&&u!==(u=!m[7](m[1])||m[2].length<6)&&i(n,"disabled",u)},d(m){m&&S(e),b=!1,ge(w)}}}function Xe(t){let e;return{c(){e=a("div"),e.innerHTML="<ion-label>or, sign in with:</ion-label>",Q(e,"class","ion-text-center")},m(o,n){I(o,e,n)},d(o){o&&S(e)}}}function Ze(t){let e,o;return e=new Fo({props:{name:t[17]}}),{c(){Oe(e.$$.fragment)},m(n,r){Pe(e,n,r),o=!0},p(n,r){const c={};r&1&&(c.name=n[17]),e.$set(c)},i(n){o||(ie(e.$$.fragment,n),o=!0)},o(n){ae(e.$$.fragment,n),o=!1},d(n){Ce(e,n)}}}function No(t){let e,o,n,r,c,d,u,f,l,b,w,m,h,O,g,k,H,_=!t[7](t[1])&&t[1].length>0,z,Y,N,W,G,V,q,j,E,x,P,C,L,y,J,T,ne,be,We,ee,ve,Be,ye,he,Ie,pe,me,Se,we,se,Le,He,X=_&&Ge(),Z=t[2].length>0&&t[2].length<6&&Ue(),U=!t[3]&&Re(t),R=t[3]&&Ve(t),$=t[0]&&t[0].length>0&&Xe(),te=t[0],B=[];for(let p=0;p<te.length;p+=1)B[p]=Ze(Ne(t,te,p));const io=p=>ae(B[p],1,1,()=>{B[p]=null});return{c(){e=v(),o=a("ion-header"),n=a("ion-toolbar"),r=a("ion-title"),r.textContent="Sign In",c=v(),d=a("ion-buttons"),u=a("ion-icon"),f=v(),l=a("ion-grid"),b=a("ion-row"),b.innerHTML="<ion-col><ion-label>Email Address</ion-label></ion-col>",w=v(),m=a("ion-row"),h=a("ion-col"),O=a("ion-item"),g=a("ion-input"),k=a("ion-icon"),H=v(),X&&X.c(),z=v(),Y=a("ion-row"),Y.innerHTML="<ion-col><ion-label>Password</ion-label></ion-col>",N=v(),W=a("ion-row"),G=a("ion-col"),V=a("ion-item"),q=a("ion-input"),j=a("ion-icon"),x=v(),P=a("div"),P.innerHTML="<ion-label><b>Forgot password?</b></ion-label>",C=v(),Z&&Z.c(),L=v(),U&&U.c(),y=v(),R&&R.c(),J=v(),T=a("ion-row"),ne=a("ion-col"),be=a("div"),be.innerHTML="<ion-label><b>or</b></ion-label>",We=v(),ee=a("ion-button"),ve=a("ion-icon"),Be=oe(`\xA0\xA0
              `),ye=a("b"),ye.textContent="Send Sign In Link",Ie=v(),$&&$.c(),pe=v(),me=a("ion-grid"),Se=a("ion-row"),we=a("ion-col");for(let p=0;p<B.length;p+=1)B[p].c();document.title="Ionic Companion - Modal Extra",i(u,"icon",to),i(u,"slot","start"),i(u,"size","large"),i(u,"color","medium"),i(d,"slot","start"),i(o,"translucent","true"),i(k,"class","inputIcon svelte-169g1w8"),i(k,"icon",Oo),i(k,"slot","start"),i(k,"size","large"),i(k,"color","medium"),i(g,"class","loginInputBoxWithIcon svelte-169g1w8"),i(g,"type","email"),i(g,"placeholder","Email"),i(O,"class","loginItem svelte-169g1w8"),i(O,"lines","none"),i(j,"class","inputIcon svelte-169g1w8"),i(j,"icon",E=t[2].length?ke:ze),i(j,"slot","start"),i(j,"size","large"),i(j,"color","medium"),i(q,"type","password"),i(q,"placeholder","Password"),i(q,"class","loginInputBoxWithIcon svelte-169g1w8"),i(V,"class","loginItem svelte-169g1w8"),i(V,"lines","none"),Q(P,"class","ion-text-right"),F(P,"padding-top","10px"),Q(be,"class","ion-text-center"),F(be,"margin-bottom","10px"),i(ve,"icon",Po),i(ve,"size","large"),i(ee,"expand","block"),i(ee,"disabled",he=!t[7](t[1])||t[2].length>0),i(l,"class","ion-padding LoginGrid svelte-169g1w8"),i(me,"class","ion-padding ion-text-center ProvidersGrid svelte-169g1w8")},m(p,M){I(p,e,M),I(p,o,M),s(o,n),s(n,r),s(n,c),s(n,d),s(d,u),I(p,f,M),I(p,l,M),s(l,b),s(l,w),s(l,m),s(m,h),s(h,O),s(O,g),s(g,k),s(l,H),X&&X.m(l,null),s(l,z),s(l,Y),s(l,N),s(l,W),s(W,G),s(G,V),s(V,q),s(q,j),s(G,x),s(G,P),s(l,C),Z&&Z.m(l,null),s(l,L),U&&U.m(l,null),s(l,y),R&&R.m(l,null),s(l,J),s(l,T),s(T,ne),s(ne,be),s(ne,We),s(ne,ee),s(ee,ve),s(ee,Be),s(ee,ye),I(p,Ie,M),$&&$.m(p,M),I(p,pe,M),I(p,me,M),s(me,Se),s(Se,we);for(let A=0;A<B.length;A+=1)B[A].m(we,null);se=!0,Le||(He=[D(u,"click",t[4]),D(g,"ionChange",t[5]),D(q,"ionChange",t[6]),D(P,"click",t[8]),D(ee,"click",t[12])],Le=!0)},p(p,[M]){if(M&2&&(_=!p[7](p[1])&&p[1].length>0),_?X||(X=Ge(),X.c(),X.m(l,z)):X&&(X.d(1),X=null),(!se||M&4&&E!==(E=p[2].length?ke:ze))&&i(j,"icon",E),p[2].length>0&&p[2].length<6?Z||(Z=Ue(),Z.c(),Z.m(l,L)):Z&&(Z.d(1),Z=null),p[3]?U&&(U.d(1),U=null):U?U.p(p,M):(U=Re(p),U.c(),U.m(l,y)),p[3]?R?R.p(p,M):(R=Ve(p),R.c(),R.m(l,J)):R&&(R.d(1),R=null),(!se||M&6&&he!==(he=!p[7](p[1])||p[2].length>0))&&i(ee,"disabled",he),p[0]&&p[0].length>0?$||($=Xe(),$.c(),$.m(pe.parentNode,pe)):$&&($.d(1),$=null),M&1){te=p[0];let A;for(A=0;A<te.length;A+=1){const Te=Ne(p,te,A);B[A]?(B[A].p(Te,M),ie(B[A],1)):(B[A]=Ze(Te),B[A].c(),ie(B[A],1),B[A].m(we,null))}for(lo(),A=te.length;A<B.length;A+=1)io(A);so()}},i(p){if(!se){for(let M=0;M<te.length;M+=1)ie(B[M]);se=!0}},o(p){B=B.filter(Boolean);for(let M=0;M<B.length;M+=1)ae(B[M]);se=!1},d(p){p&&S(e),p&&S(o),p&&S(f),p&&S(l),X&&X.d(),Z&&Z.d(),U&&U.d(),R&&R.d(),p&&S(Ie),$&&$.d(p),p&&S(pe),p&&S(me),Qe(B,p),Le=!1,ge(He)}}}function Go(t,e,o){let{providers:n=[]}=e,{onSignIn:r=()=>{}}=e,c;c||(c=ce.getInstance()),window.matchMedia("(prefers-color-scheme: dark)").matches;const d=()=>{_e.dismiss({data:Date.now()})};function u(_){o(1,g=_.target.value)}function f(_){o(2,k=_.target.value)}const l=_=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(_).toLowerCase()),b=async()=>{const _=await re("Requesting password reset link..."),{error:z}=await c.resetPassword(g);z?(_.dismiss(),K(z.message)):(_.dismiss(),K("Please check your email for a password reset link","success"))},w=async()=>{const _=await re("Logging in...");console.log("loader",_);const{user:z,session:Y,error:N}=await c.signInWithEmail(g,k);N?_.dismiss():(_.dismiss(),_e.dismiss({data:Date.now()}),r&&r(z,Y))},m=async()=>{const _=await re("Signing you up..."),{error:z}=await c.signUpWithEmail(g,k);z?(console.error(z),_.dismiss(),K(z.message)):(_.dismiss(),K("Please check your email for a confirmation link","success"))},h=()=>{o(3,H=!H)},O=async()=>{const _=await re("Requesting magic link..."),{error:z}=await c.sendMagicLink(g);z?(_.dismiss(),K(z.message)):(_.dismiss(),K("Please check your email for a sign in link","success"))};let g="",k="",H=!1;return t.$$set=_=>{"providers"in _&&o(0,n=_.providers),"onSignIn"in _&&o(13,r=_.onSignIn)},[n,g,k,H,d,u,f,l,b,w,m,h,O,r]}class Uo extends ue{constructor(e){super(),de(this,e,Go,No,fe,{providers:0,onSignIn:13})}}function $e(t){let e;return{c(){e=a("ion-row"),e.innerHTML='<ion-col><ion-label color="danger"><b>Password too short</b></ion-label></ion-col>'},m(o,n){I(o,e,n)},d(o){o&&S(e)}}}function Ro(t){let e,o,n,r,c,d,u,f,l,b,w,m,h,O,g,k,H,_,z,Y,N,W,G,V,q,j,E,x,P=t[0].length>0&&t[0].length<6&&$e();return{c(){e=a("ion-header"),o=a("ion-toolbar"),n=a("ion-title"),n.textContent="Reset Password",r=v(),c=a("ion-buttons"),d=a("ion-button"),u=a("ion-icon"),f=v(),l=a("ion-grid"),b=a("ion-row"),b.innerHTML="<ion-col><ion-label>New Password:</ion-label></ion-col>",w=v(),m=a("ion-row"),h=a("ion-col"),O=a("ion-item"),g=a("ion-input"),k=a("ion-icon"),_=v(),P&&P.c(),z=v(),Y=a("ion-row"),N=a("ion-col"),W=a("ion-button"),G=a("ion-icon"),V=oe(`\xA0\xA0
                      `),q=a("b"),q.textContent="Save New Password",i(u,"icon",to),i(u,"slot","start"),i(u,"size","large"),i(u,"color","medium"),i(c,"slot","start"),i(e,"translucent","true"),i(k,"class","inputIcon svelte-xr9zj9"),i(k,"icon",H=t[0].length?ke:ze),i(k,"slot","start"),i(k,"size","large"),i(k,"color","medium"),i(g,"type","password"),i(g,"placeholder","Password"),i(g,"class","loginInputBoxWithIcon svelte-xr9zj9"),i(O,"class","loginItem svelte-xr9zj9"),i(O,"lines","none"),i(G,"icon",no),i(G,"size","large"),i(W,"expand","block"),i(W,"color","primary"),i(W,"disabled",j=t[0].length<6),i(l,"class","ion-padding"),F(l,"max-width","375px")},m(C,L){I(C,e,L),s(e,o),s(o,n),s(o,r),s(o,c),s(c,d),s(d,u),I(C,f,L),I(C,l,L),s(l,b),s(l,w),s(l,m),s(m,h),s(h,O),s(O,g),s(g,k),s(l,_),P&&P.m(l,null),s(l,z),s(l,Y),s(Y,N),s(N,W),s(W,G),s(W,V),s(W,q),E||(x=[D(d,"click",t[1]),D(g,"ionChange",t[2]),D(W,"click",t[3])],E=!0)},p(C,[L]){L&1&&H!==(H=C[0].length?ke:ze)&&i(k,"icon",H),C[0].length>0&&C[0].length<6?P||(P=$e(),P.c(),P.m(l,z)):P&&(P.d(1),P=null),L&1&&j!==(j=C[0].length<6)&&i(W,"disabled",j)},i:le,o:le,d(C){C&&S(e),C&&S(f),C&&S(l),P&&P.d(),E=!1,ge(x)}}}function Vo(t,e,o){let{token:n=""}=e,r;r||(r=ce.getInstance());const c=()=>{_e.dismiss({data:Date.now()})};function d(l){o(0,u=l.target.value)}let u="";const f=async()=>{const l=await re("Updating password..."),{error:b}=await r.updatePassword(n,u);b?(l.dismiss(),K(b.message)):(l.dismiss(),K("Password updated","success",3e3),c())};return t.$$set=l=>{"token"in l&&o(4,n=l.token)},[u,c,d,f,n]}class Xo extends ue{constructor(e){super(),de(this,e,Vo,Ro,fe,{token:4})}}function Zo(t){let e,o,n,r;return{c(){e=a("div"),o=a("ion-button"),o.textContent="Sign In",i(o,"fill","outline"),i(o,"color","dark"),i(o,"size","small"),i(o,"expand","block"),i(o,"strong",""),Q(e,"class","fullWidth svelte-17l94cn")},m(c,d){I(c,e,d),s(e,o),n||(r=D(o,"click",t[3]),n=!0)},p:le,d(c){c&&S(e),n=!1,r()}}}function $o(t){var l;let e,o,n=((l=t[0])==null?void 0:l.email)+"",r,c,d,u,f;return{c(){e=a("div"),o=a("ion-button"),r=oe(n),c=v(),d=a("ion-button"),d.textContent="Sign Out",i(o,"fill","outline"),i(o,"color","dark"),i(o,"size","small"),i(o,"expand","block"),i(o,"strong",""),i(d,"fill","outline"),i(d,"color","dark"),i(d,"size","small"),i(d,"expand","block"),i(d,"strong",""),Q(e,"class","fullWidth svelte-17l94cn")},m(b,w){I(b,e,w),s(e,o),s(o,r),s(e,c),s(e,d),u||(f=[D(o,"click",t[1]),D(d,"click",t[2])],u=!0)},p(b,w){var m;w&1&&n!==(n=((m=b[0])==null?void 0:m.email)+"")&&oo(r,n)},d(b){b&&S(e),u=!1,ge(f)}}}function Yo(t){let e;function o(c,d){return c[0]?$o:Zo}let n=o(t),r=n(t);return{c(){r.c(),e=xe()},m(c,d){r.m(c,d),I(c,e,d)},p(c,[d]){n===(n=o(c))&&r?r.p(c,d):(r.d(1),r=n(c),r&&(r.c(),r.m(e.parentNode,e)))},i:le,o:le,d(c){r.d(c),c&&S(e)}}}function Jo(t,e,o){let{profileFunction:n=()=>{}}=e,{providers:r=[]}=e,{onSignIn:c=()=>{}}=e,{onSignOut:d=()=>{}}=e,u="",f,l=null;eo(()=>{b(),ce.user.subscribe(g=>{o(0,l=g)}),f||(f=ce.getInstance())});const b=()=>{const g=window.location.hash;if(g&&g.substring(0,1)==="#"){const k=g.substring(1).split("&"),H={};k.map(_=>{const z=(_+"=").split("=");H[z[0]]=z[1]}),(H==null?void 0:H.type)==="recovery"&&(u=H.access_token,setTimeout(()=>{O()},2500))}},w=async()=>{n&&n()},m=async()=>{const{error:g}=await f.signOut();g?console.error("Error signing out",g):d?d():window.location.reload()},h=async()=>{await(await _e.create({component:Uo,componentProps:{providers:r,onSignIn:c},showBackdrop:!0,backdropDismiss:!0})).present()},O=async()=>{const g=await _e.create({component:Xo,componentProps:{token:u},showBackdrop:!0,backdropDismiss:!0});g.onDidDismiss().then(k=>{k.role==="backdrop"&&console.log("Backdrop clicked")}),await g.present()};return t.$$set=g=>{"profileFunction"in g&&o(4,n=g.profileFunction),"providers"in g&&o(5,r=g.providers),"onSignIn"in g&&o(6,c=g.onSignIn),"onSignOut"in g&&o(7,d=g.onSignOut)},[l,w,m,h,n,r,c,d]}class Ko extends ue{constructor(e){super(),de(this,e,Jo,Yo,fe,{profileFunction:4,providers:5,onSignIn:6,onSignOut:7})}}const Qo="diet-tracker",xo="0.1.7",en="module",on={dev:"vite --port 8100 --host 0.0.0.0",build:"vite build && vite build --ssr","build:client":"vite build","build:server":"vite build  --ssr",preview:"vite preview",check:"svelte-check --tsconfig ./tsconfig.json",routes:"routify"},nn={"@rollup/plugin-alias":"^3.1.9","@roxi/routify":"^3.0.0-next.93","@sveltejs/vite-plugin-svelte":"^1.0.0-next.30","@tsconfig/svelte":"^2.0.1","babel-loader":"^8.2.5",sass:"^1.52.2",spank:"^2.0.0-5",svelte:"^3.48.0","svelte-check":"^2.2.7","svelte-loader":"^3.1.3","svelte-preprocess":"^4.9.8",tslib:"^2.3.1",typescript:"^4.5.4",vite:"^2.9.9"},tn={"@ionic/core":"^6.1.8","@supabase/supabase-js":"^1.35.7",routify:"^1.2.7",rxjs:"^7.5.6","vite-plugin-pwa":"^0.12.3"},ln={pages:"./src/routes"};var Me={name:Qo,private:!0,version:xo,type:en,scripts:on,devDependencies:nn,dependencies:tn,routify:ln};function Ye(t,e,o){const n=t.slice();return n[14]=e[o],n[16]=o,n}function Je(t){let e,o,n,r,c,d=t[14].title+"",u,f,l,b,w;function m(){return t[7](t[14])}return{c(){e=a("ion-menu-toggle"),o=a("ion-item"),n=a("ion-icon"),r=v(),c=a("ion-label"),u=oe(d),l=v(),i(n,"slot","start"),i(n,"icon",t[14].icon),i(n,"class","svelte-1ub1zcr"),i(c,"class","svelte-1ub1zcr"),i(o,"routerdirection","root"),i(o,"lines","none"),i(o,"detail","false"),i(o,"class",f=De(t[2](t[14].url)&&t[14].url.length>1?"active-item":"")+" svelte-1ub1zcr"),i(e,"auto-hide","false")},m(h,O){I(h,e,O),s(e,o),s(o,n),s(o,r),s(o,c),s(c,u),s(e,l),b||(w=D(o,"click",m),b=!0)},p(h,O){t=h,O&4&&f!==(f=De(t[2](t[14].url)&&t[14].url.length>1?"active-item":"")+" svelte-1ub1zcr")&&i(o,"class",f)},d(h){h&&S(e),b=!1,w()}}}function Ke(t){let e,o=(!t[14].requireLogin||t[0])&&Je(t);return{c(){o&&o.c(),e=xe()},m(n,r){o&&o.m(n,r),I(n,e,r)},p(n,r){!n[14].requireLogin||n[0]?o?o.p(n,r):(o=Je(n),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null)},d(n){o&&o.d(n),n&&S(e)}}}function sn(t){let e,o,n,r,c,d,u,f,l,b,w,m,h,O,g,k=(Me==null?void 0:Me.version)+"",H,_,z,Y,N,W,G,V=t[1]?"Online":"Offline",q,j,E,x,P;l=new Ko({props:{providers:["google","facebook","twitter"],onSignOut:t[6],profileFunction:rn}});let C=t[4],L=[];for(let y=0;y<C.length;y+=1)L[y]=Ke(Ye(t,C,y));return{c(){e=a("ion-menu"),o=a("ion-content"),n=a("ion-list"),r=a("h4"),r.innerHTML="<strong>Diet Tracker</strong>",c=v(),d=a("p"),d.textContent="Track your diet across devices.",u=v(),f=a("ion-menu-toggle"),Oe(l.$$.fragment),b=v();for(let y=0;y<L.length;y+=1)L[y].c();w=v(),m=a("ion-footer"),h=a("u"),h.textContent="clear cache",O=a("br"),g=oe("v."),H=oe(k),_=v(),z=a("br"),Y=v(),N=a("ion-item"),W=a("ion-label"),G=a("b"),q=oe(V),F(r,"margin-top","0px"),F(r,"text-align","center"),F(r,"color","var(--ion-color-primary)"),F(d,"padding-bottom","5px"),F(d,"text-align","center"),F(d,"color","var(--ion-color-medium)"),i(f,"auto-hide","false"),i(n,"id","inbox-list"),i(o,"class","ion-padding svelte-1ub1zcr"),Q(h,"class","svelte-1ub1zcr"),i(W,"color",j=t[1]?"success":"danger"),i(W,"class","svelte-1ub1zcr"),i(N,"class","svelte-1ub1zcr"),i(m,"class","ion-padding"),i(e,"content-id","main"),i(e,"menu-id","mainmenu"),i(e,"class","svelte-1ub1zcr")},m(y,J){I(y,e,J),s(e,o),s(o,n),s(n,r),s(n,c),s(n,d),s(n,u),s(n,f),Pe(l,f,null),s(n,b);for(let T=0;T<L.length;T+=1)L[T].m(n,null);s(e,w),s(e,m),s(m,h),s(m,O),s(m,g),s(m,H),s(m,_),s(m,z),s(m,Y),s(m,N),s(N,W),s(W,G),s(G,q),E=!0,x||(P=[D(h,"click",t[8]),D(N,"click",t[9])],x=!0)},p(y,[J]){if(J&53){C=y[4];let T;for(T=0;T<C.length;T+=1){const ne=Ye(y,C,T);L[T]?L[T].p(ne,J):(L[T]=Ke(ne),L[T].c(),L[T].m(n,null))}for(;T<L.length;T+=1)L[T].d(1);L.length=C.length}(!E||J&2)&&V!==(V=y[1]?"Online":"Offline")&&oo(q,V),(!E||J&2&&j!==(j=y[1]?"success":"danger"))&&i(W,"color",j)},i(y){E||(ie(l.$$.fragment,y),E=!0)},o(y){ae(l.$$.fragment,y),E=!1},d(y){y&&S(e),Ce(l),Qe(L,y),x=!1,ge(P)}}}const rn=()=>{};function an(t,e,o){let n,r;je(t,Ao,g=>o(12,n=g)),je(t,Do,g=>o(2,r=g));let c=null,d,u=!1;const f=To.getInstance();eo(()=>{ro("mainmenu"),d=ce.user.subscribe(g=>{o(0,c=g)}),f.online.subscribe(g=>{console.log("got online:",g),o(1,u=g)})}),ao(()=>{d.unsubscribe()});const l=[{title:"Calendar",url:"/calendar",icon:Co,requireLogin:!0},{title:"Settings",url:"/settings",icon:Wo,requireLogin:!0},{title:"Info",url:"/",icon:Bo,requireLogin:!1}],b=g=>{n(g.url),co.close("mainmenu")};return[c,u,r,f,l,b,()=>{window.location.href="/"},g=>{b(g)},()=>{localStorage.clear()},async g=>{await jo({header:"Manually set online status",message:`Force online status to <b>${u?"Offline":"Online"}</b>?`,okHander:async()=>{f.forceOnlineValue(!u),K(`Online status set to: <b>${u?"Online":"Offline"}</b>`,u?"success":"danger")}})}]}class cn extends ue{constructor(e){super(),de(this,e,an,sn,fe,{})}}function un(t){let e,o,n,r,c,d;n=new cn({});const u=t[1].default,f=uo(u,t,t[0],null);return{c(){e=a("ion-app"),o=a("ion-split-pane"),Oe(n.$$.fragment),r=v(),c=a("div"),f&&f.c(),Q(c,"class","ion-page"),Q(c,"id","main"),i(o,"content-id","main")},m(l,b){I(l,e,b),s(e,o),Pe(n,o,null),s(o,r),s(o,c),f&&f.m(c,null),d=!0},p(l,[b]){f&&f.p&&(!d||b&1)&&fo(f,u,l,l[0],d?bo(u,l[0],b,null):go(l[0]),null)},i(l){d||(ie(n.$$.fragment,l),ie(f,l),d=!0)},o(l){ae(n.$$.fragment,l),ae(f,l),d=!1},d(l){l&&S(e),Ce(n),f&&f.d(l)}}}function dn(t,e,o){let{$$slots:n={},$$scope:r}=e;return t.$$set=c=>{"$$scope"in c&&o(0,r=c.$$scope)},[r,n]}class kn extends ue{constructor(e){super(),de(this,e,dn,un,fe,{})}}export{kn as default};
