var I=Object.defineProperty;var S=(l,t,e)=>t in l?I(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e;var s=(l,t,e)=>(S(l,typeof t!="symbol"?t+"":t,e),e);import{B as m,c as v}from"./BehaviorSubject.3a174332.js";import{l as f}from"./loadingMessage.1748f252.js";class w{constructor(){s(this,"ping",async(t="/ping")=>{fetch(`${window.location.origin}${t}`).then(e=>e.status===200?(console.log(e),!0):(console.error("ping failed",e),!1)).catch(e=>(console.log("fetch error",e),console.log("do something here"),!1))})}static getInstance(){if(this.myInstance===null){this.myInstance=new this,this.myInstance.online=new m(window.navigator.onLine);const t=this.myInstance.online;window.addEventListener("offline",function(e){t.next(!1)}),window.addEventListener("online",function(e){t.next(!0)}),this.myInstance.forceOnlineValue=e=>{t.next(e)}}return this.myInstance}}s(w,"myInstance",null);class p{constructor(){s(this,"gen_random_uuid",()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=Math.random()*16|0,a=t==="x"?e:e&3|8;return a.toString(16)}));s(this,"uuid_generate_v4",this.gen_random_uuid);s(this,"getToday",()=>{const t=new Date;return new Date(t.getTime()-t.getTimezoneOffset()*6e4).toISOString().split("T")[0]})}static getInstance(){return this.myInstance===null&&(this.myInstance=new this),this.myInstance}}s(p,"myInstance",null);const _=p.getInstance(),q="https://kwmjtwyvwupiycxiitll.supabase.co",C="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3bWp0d3l2d3VwaXljeGlpdGxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ5MTk4ODksImV4cCI6MTk4MDQ5NTg4OX0.yRWZ9DVk46cawYg8Nu1i02xDc3xLKqRLnT1agO9hXL4";let n,d;const R=w.getInstance();let x=!1;const u=class{constructor(){s(this,"isConnected",()=>typeof n!="undefined");s(this,"getSupabase",()=>n);s(this,"connect",async()=>{this.isConnected()||(n=await v(q,C))});s(this,"gen_random_uuid",()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=Math.random()*16|0,a=t==="x"?e:e&3|8;return a.toString(16)}));s(this,"uuid_generate_v4",this.gen_random_uuid);s(this,"getDataSubscription",(t,e)=>{const a=t+(e?":"+JSON.stringify(e):"");return u.datasets[a]=new m([]),this.updateDataSubscription(t,e),u.datasets[a]});s(this,"updateDataSubscription",async(t,e)=>{const a=t+(e?":"+JSON.stringify(e):""),r=this.loadCache(a);if(r!==null&&u.datasets[a].next(r),!d)return;console.log(`loadFunction: load_${t}`);const i=this[`load_${t}`];if(!i){console.error("supabaseDataService: missing function load_"+t);return}e?e={...e,cached:r!==null}:e={cached:r!==null};try{const{data:o,error:c}=await i(e);c?(console.error("updateDataSubscription: error",c),c.message):(u.datasets[a].next(o),this.saveCache(o,a))}catch{}});s(this,"loadCache",t=>{const e=localStorage.getItem(t);return e?JSON.parse(e):null});s(this,"processQueue",async()=>{if(d){const t=JSON.parse(localStorage.getItem("update-queue")||"[]");if(t.length>0){const{functionName:e,table:a,record:r,timestamp:i}=t.shift();if(e==="saveRecord"||e==="deleteRecord"){const{status:c,data:y,error:g}=await this.checkRecordVersion(a,r);console.log(`function: ${e}:`,"status",c,"data",y,"error",g),c==="conflict"&&(console.log("conflict detected"),console.log("queued record:",r))}const{error:o}=await this[e](a,r);if(o){console.error("error processing update queue",o),console.error("functionName",e),console.error("table",a),console.error("record",r),console.error("timestamp",i);return}else localStorage.setItem("update-queue",JSON.stringify(t)),this.processQueue()}else console.log("processQueue: queue is empty"),x=!1}});s(this,"updateCollection",async(t,e,a="id")=>{const r=t.findIndex(i=>i[a]===e[a]);return r>-1?t[r]=e:t.push(e),t});s(this,"deleteFromCollection",async(t,e,a="id")=>{const r=t.findIndex(i=>i[a]===(typeof e=="string"?e:e[a]));return r>-1&&t.splice(r,1),t});s(this,"load_widgets",async(t={})=>{let e;t.cached||(e=await f("loading widgets...")),this.isConnected()||await this.connect();const{data:a,error:r}=await n.from("widgets").select().order("name");return t.cached||e.dismiss(),{data:a,error:r}});s(this,"load_widget",async(t={})=>{let e;t.cached||(e=await f("loading widget...")),this.isConnected()||await this.connect();const{data:a,error:r}=await n.from("widgets").select().eq("id",t.id).limit(1).single();return t.cached||e.dismiss(),{data:a,error:r}});s(this,"load_days",async(t={})=>{console.log("load_days: options",t);let e;t.cached||(e=await f("loading days...")),this.isConnected()||await this.connect();const{data:a,error:r}=await n.from("days").select().order("date",{ascending:!1}).limit(31);return t.cached||e.dismiss(),console.log("load_days: data, error",a,r),{data:a,error:r}});s(this,"load_day",async(t={})=>{let e;t.cached||(e=await f("loading day...")),this.isConnected()||await this.connect();const{data:a,error:r}=await n.from("days").select().eq("id",t.id).limit(1).single();return t.cached||e.dismiss(),{data:a,error:r}});s(this,"load_today",async()=>{let t;t=await f("loading today..."),this.isConnected()||await this.connect();const{data:e,error:a}=await n.from("days").select().eq("date",_.getToday()).limit(1).single();return t.dismiss(),{data:e,error:a}});s(this,"getSingleRecordById",async(t,e)=>{const{data:a,error:r}=await n.from(t).select("*").eq("id",e).limit(1).single();return{data:a,error:r}});s(this,"updateUserSetting",async(t,e)=>{const{user:a,error:r}=await n.auth.update({data:{[t]:e}});return r?console.error("updateUserSetting error",r):console.log("updateUserSetting result (user):",a),{user:a,error:r}})}static getInstance(){return this.myInstance===null&&(this.myInstance=new this,this.myInstance.connect()),this.myInstance}saveCache(t,e){return localStorage.setItem(e,JSON.stringify(t)),t}clearCache(t){localStorage.removeItem(t)}clearAllCache(){localStorage.clear()}queueUpdate(t,e,a){const r=JSON.parse(localStorage.getItem("update-queue")||"[]");r.push({functionName:t,table:e,record:a,timestamp:+Date.now()}),localStorage.setItem("update-queue",JSON.stringify(r))}async checkRecordVersion(t,e,a="updated_at"){if(d){const{error:r,count:i}=await n.from(t).select("id",{count:"exact"}).eq("id",e.id);if(r)return console.error("checkRecordVersion getCount: error",r),{status:"error",error:r};if(i===0)return{status:"notFound",data:null,error:null};if(i>1)return{status:"multipleFound",data:null,error:null};const{data:o,error:c}=await n.from(t).select(`id, ${a}`).eq("id",e.id).single();if(c)return{status:"error",data:null,error:c};if(o&&typeof o[a]==typeof e[a]){if(o[a]===e[a])return{status:"ok",data:o,error:c};{console.log(`${a} conflict detected, ${o[a]} != ${e[a]}`);const{data:y,error:g}=await n.from(t).select("*").eq("id",e.id).single();return g?{status:"conflict",data:o,error:g}:{status:"conflict",data:y,error:g}}}else return{status:"error",data:null,error:`${a} data missing or wrong type`}}else return{status:"offline",data:null,error:null}}async saveRecord(t,e){if(d){console.log("saveRecord",t,e);const{data:a,error:r}=await n.from(t).upsert(e);return console.log("data",a,"error",r),{data:a,error:r}}else return this.queueUpdate("saveRecord",t,e),{data:null,error:null}}async deleteRecord(t,e){if(d){const{data:a,error:r}=await n.from(t).delete().eq("id",e.id);return{data:a,error:r}}else return this.queueUpdate("deleteRecord",t,e),{data:null,error:null}}async save_day(t){const{data:e,error:a}=await this.saveRecord("days",t);return{data:e,error:a}}async delete_day(t){const{data:e,error:a}=await this.deleteRecord("days",t);return{data:e,error:a}}async save_widget(t){const{data:e,error:a}=await this.saveRecord("widgets",t);return{data:e,error:a}}async delete_widget(t){const{data:e,error:a}=await this.deleteRecord("widgets",t);return{data:e,error:a}}async getProfile(t){if(t){const{data:e,error:a}=await n.from("profile").select("*").eq("id",t).limit(1).single();return{data:e,error:a}}else return console.error("#### getProfile: no id"),{data:{},error:null}}async getCurrentWeight(){const{data:t,error:e}=await n.from("days").select("weight").order("date",{ascending:!1}).limit(1).single();return{data:t,error:e}}async getSettings(t){this.isConnected()||await this.connect(),console.log("### supabaseDataService.getSettings, uid:",t);const{data:e,error:a}=await n.from("settings").select("*").eq("user_id",t).limit(1).single();return console.log("result-> supabaseDataService.getSettings, data:",e,a),{data:e,error:a}}async saveSettings(t){console.log("** saveSettings",t);const{data:e,error:a}=await n.from("settings").upsert(t);return{data:e,error:a}}async saveProfile(t){const{data:e,error:a}=await n.from("profile").upsert(t);return{data:e,error:a}}};let h=u;s(h,"myInstance",null),s(h,"datasets",{});const O=h.getInstance();R.online.subscribe(l=>{d=l,d&&(console.log("supabase: app came online -- process pending queue"),x?console.error("supabaseDataService: processQueue already active"):(x=!0,O.processQueue()))});export{w as N,h as S,p as U};
