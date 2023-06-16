var p=Object.defineProperty;var f=(a,s,e)=>s in a?p(a,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[s]=e;var t=(a,s,e)=>(f(a,typeof s!="symbol"?s+"":s,e),e);import{c as h,B as c}from"./BehaviorSubject.f845dde8.js";const d="https://msdviherrmoyvbhzpknk.supabase.red",g="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zZHZpaGVycm1veXZiaHpwa25rIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY5MjA2OTUsImV4cCI6MjAwMjQ5NjY5NX0.ghuMmWTXZ6JVn_uNN1Lzr3MqVfCq69fpJbpBQ94n16E",r=class{constructor(){t(this,"showLogin");t(this,"setShowLogin");t(this,"_user",null);t(this,"signUpWithEmail",async(s,e)=>{console.log("signUpWithEmail",s,e),console.log("redirectTo",window.location.origin);const{user:i,session:n,error:l}=await r.supabase.auth.signUp({email:s,password:e},{redirectTo:window.location.origin});return{user:i,session:n,error:l}});t(this,"signInWithEmail",async(s,e)=>{const{user:i,session:n,error:l}=await r.supabase.auth.signIn({email:s,password:e});return{user:i,session:n,error:l}});t(this,"signInWithProvider",async s=>{const{user:e,session:i,error:n}=await r.supabase.auth.signIn({provider:s},{redirectTo:window.location.origin});return{user:e,session:i,error:n}});t(this,"resetPassword",async s=>{const{data:e,error:i}=await r.supabase.auth.api.resetPasswordForEmail(s,{redirectTo:window.location.origin});return{data:e,error:i}});t(this,"sendMagicLink",async s=>{console.log("sendMagicLink: ",s);const{user:e,session:i,error:n}=await r.supabase.auth.signIn({email:s},{redirectTo:window.location.origin});return{user:e,session:i,error:n}});t(this,"updatePassword",async(s,e)=>{const{error:i,data:n}=await r.supabase.auth.api.updateUser(s,{password:e});return{error:i,data:n}});t(this,"signOut",async()=>{const{error:s}=await r.supabase.auth.signOut();return s||r.user.next(null),{error:s}});t(this,"checkForPasswordResetToken",()=>{const s=window.location.hash;let e="";if(s&&s.substring(0,1)==="#"){const i=s.substring(1).split("&"),n={};i.map(l=>{const u=(l+"=").split("=");n[u[0]]=u[1]}),(n==null?void 0:n.type)==="recovery"&&(e=n.access_token)}return e});t(this,"saveSettings",async s=>{const{user:e,error:i}=await r.supabase.auth.update({data:s});return{user:e,error:i}});this.loadUser(),r.subscription=r.supabase.auth.onAuthStateChange(async(s,e)=>{s==="SIGNED_IN"&&e?(this._user=e.user,r.user.next(e.user),this.updateUserListeners(e.user)):e===null&&(this._user=null,r.user.next(null),this.updateUserListeners(null)),this.loadProfile()})}static getInstance(s,e){return r.profileTable=s||"",r.profileKey=e||"",this.myInstance===null&&(this.supabase=h(d,g),this.myInstance=new this),this.myInstance}static setProfileTable(s){r.profileTable=s}static setProfileKey(s){r.profileKey=s}static unsubscribeUser(s){this.userListeners=this.userListeners.filter(e=>e.id!==s)}static unsubscribeProfile(s){this.userListeners=this.profileListeners.filter(e=>e.id!==s)}updateUserListeners(s){for(let e=0;e<r.userListeners.length;e++)r.userListeners[e].func(s)}updateProfileListeners(s){for(let e=0;e<r.profileListeners.length;e++)r.profileListeners[e].func(s)}async loadUser(){const s=r.supabase.auth.user();s&&(this._user=s,r.user.next(s),this.updateUserListeners(s))}async loadProfile(){var s,e;if(!(!r.profileTable||!r.profileKey))if((s=this._user)!=null&&s.id){const{data:i,error:n}=await r.supabase.from(r.profileTable).select("*").eq(r.profileKey,(e=this._user)==null?void 0:e.id).limit(1).single();n?console.error("loadProfile error: ",n):(r.profile.next(i),this.updateProfileListeners(i))}else r.profile.next(null),this.updateProfileListeners(null)}getCurrentUser(){return this._user}};let o=r;t(o,"myInstance",null),t(o,"supabase"),t(o,"profileTable"),t(o,"profileKey"),t(o,"user",new c(null)),t(o,"profile",new c(null)),t(o,"subscription",null),t(o,"userListeners",[]),t(o,"profileListeners",[]),t(o,"subscribeUser",(s,e)=>(e||(e=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)),r.userListeners.push({id:e,func:s}),e)),t(o,"subscribeProfile",(s,e)=>!r.profileTable||!r.profileKey?(console.error("missing parameter(s): profileTable and/or profileKey"),""):(e||(e=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)),r.profileListeners.push({id:e,func:s}),e));export{o as S};
