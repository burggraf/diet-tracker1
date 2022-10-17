var f=Object.defineProperty;var p=(a,s,e)=>s in a?f(a,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[s]=e;var r=(a,s,e)=>(p(a,typeof s!="symbol"?s+"":s,e),e);import{c as h,B as c}from"./BehaviorSubject.76cebf4d.js";const g="https://kwmjtwyvwupiycxiitll.supabase.co",d="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3bWp0d3l2d3VwaXljeGlpdGxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ5MTk4ODksImV4cCI6MTk4MDQ5NTg4OX0.yRWZ9DVk46cawYg8Nu1i02xDc3xLKqRLnT1agO9hXL4",t=class{constructor(){r(this,"showLogin");r(this,"setShowLogin");r(this,"_user",null);r(this,"signUpWithEmail",async(s,e)=>{console.log("signUpWithEmail",s,e),console.log("redirectTo",window.location.origin);const{user:n,session:i,error:l}=await t.supabase.auth.signUp({email:s,password:e},{redirectTo:window.location.origin});return{user:n,session:i,error:l}});r(this,"signInWithEmail",async(s,e)=>{const{user:n,session:i,error:l}=await t.supabase.auth.signIn({email:s,password:e});return{user:n,session:i,error:l}});r(this,"signInWithProvider",async s=>{const{user:e,session:n,error:i}=await t.supabase.auth.signIn({provider:s},{redirectTo:window.location.origin});return{user:e,session:n,error:i}});r(this,"resetPassword",async s=>{const{data:e,error:n}=await t.supabase.auth.api.resetPasswordForEmail(s,{redirectTo:window.location.origin});return{data:e,error:n}});r(this,"sendMagicLink",async s=>{console.log("sendMagicLink: ",s);const{user:e,session:n,error:i}=await t.supabase.auth.signIn({email:s},{redirectTo:window.location.origin});return{user:e,session:n,error:i}});r(this,"updatePassword",async(s,e)=>{const{error:n,data:i}=await t.supabase.auth.api.updateUser(s,{password:e});return{error:n,data:i}});r(this,"signOut",async()=>{const{error:s}=await t.supabase.auth.signOut();return s||t.user.next(null),{error:s}});r(this,"checkForPasswordResetToken",()=>{const s=window.location.hash;let e="";if(s&&s.substring(0,1)==="#"){const n=s.substring(1).split("&"),i={};n.map(l=>{const u=(l+"=").split("=");i[u[0]]=u[1]}),(i==null?void 0:i.type)==="recovery"&&(e=i.access_token)}return e});this.loadUser(),t.subscription=t.supabase.auth.onAuthStateChange(async(s,e)=>{s==="SIGNED_IN"&&e?(this._user=e.user,t.user.next(e.user),this.updateUserListeners(e.user)):e===null&&(this._user=null,t.user.next(null),this.updateUserListeners(null)),this.loadProfile()})}static getInstance(s,e){return t.profileTable=s||"",t.profileKey=e||"",this.myInstance===null&&(this.supabase=h(g,d),this.myInstance=new this),this.myInstance}static setProfileTable(s){t.profileTable=s}static setProfileKey(s){t.profileKey=s}static unsubscribeUser(s){this.userListeners=this.userListeners.filter(e=>e.id!==s)}static unsubscribeProfile(s){this.userListeners=this.profileListeners.filter(e=>e.id!==s)}updateUserListeners(s){for(let e=0;e<t.userListeners.length;e++)t.userListeners[e].func(s)}updateProfileListeners(s){for(let e=0;e<t.profileListeners.length;e++)t.profileListeners[e].func(s)}async loadUser(){const s=t.supabase.auth.user();s&&(this._user=s,t.user.next(s),this.updateUserListeners(s))}async loadProfile(){var s,e;if(!(!t.profileTable||!t.profileKey))if((s=this._user)!=null&&s.id){const{data:n,error:i}=await t.supabase.from(t.profileTable).select("*").eq(t.profileKey,(e=this._user)==null?void 0:e.id).limit(1).single();i?console.error("loadProfile error: ",i):(t.profile.next(n),this.updateProfileListeners(n))}else t.profile.next(null),this.updateProfileListeners(null)}getCurrentUser(){return this._user}};let o=t;r(o,"myInstance",null),r(o,"supabase"),r(o,"profileTable"),r(o,"profileKey"),r(o,"user",new c(null)),r(o,"profile",new c(null)),r(o,"subscription",null),r(o,"userListeners",[]),r(o,"profileListeners",[]),r(o,"subscribeUser",(s,e)=>(e||(e=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)),t.userListeners.push({id:e,func:s}),e)),r(o,"subscribeProfile",(s,e)=>!t.profileTable||!t.profileKey?(console.error("missing parameter(s): profileTable and/or profileKey"),""):(e||(e=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)),t.profileListeners.push({id:e,func:s}),e));export{o as S};
