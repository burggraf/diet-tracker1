var w=Object.defineProperty;var p=(l,e,t)=>e in l?w(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var s=(l,e,t)=>(p(l,typeof e!="symbol"?e+"":e,t),t);import{c as x,B as S}from"./BehaviorSubject.f6ee691a.js";import{N as I,l as f}from"./network.service.1aac107c.js";const q="https://kwmjtwyvwupiycxiitll.supabase.co",v="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3bWp0d3l2d3VwaXljeGlpdGxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ5MTk4ODksImV4cCI6MTk4MDQ5NTg4OX0.yRWZ9DVk46cawYg8Nu1i02xDc3xLKqRLnT1agO9hXL4";let n,d;const C=I.getInstance();let m=!1;const u=class{constructor(){s(this,"isConnected",()=>typeof n!="undefined");s(this,"getSupabase",()=>n);s(this,"connect",async()=>{this.isConnected()||(n=await x(q,v))});s(this,"gen_random_uuid",()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=Math.random()*16|0,r=e==="x"?t:t&3|8;return r.toString(16)}));s(this,"uuid_generate_v4",this.gen_random_uuid);s(this,"getDataSubscription",(e,t)=>{const r=e+(t?":"+JSON.stringify(t):"");return u.datasets[r]=new S([]),this.updateDataSubscription(e,t),u.datasets[r]});s(this,"updateDataSubscription",async(e,t)=>{const r=e+(t?":"+JSON.stringify(t):""),a=this.loadCache(r);if(a!==null&&u.datasets[r].next(a),!d)return;console.log(`loadFunction: load_${e}`);const i=this[`load_${e}`];if(!i){console.error("supabaseDataService: missing function load_"+e);return}t?t={...t,cached:a!==null}:t={cached:a!==null};try{const{data:o,error:c}=await i(t);c?(console.error("updateDataSubscription: error",c),c.message):(u.datasets[r].next(o),this.saveCache(o,r))}catch{}});s(this,"loadCache",e=>{const t=localStorage.getItem(e);return t?JSON.parse(t):null});s(this,"processQueue",async()=>{if(d){const e=JSON.parse(localStorage.getItem("update-queue")||"[]");if(e.length>0){const{functionName:t,table:r,record:a,timestamp:i}=e.shift();if(t==="saveRecord"||t==="deleteRecord"){const{status:c,data:y,error:g}=await this.checkRecordVersion(r,a);console.log(`function: ${t}:`,"status",c,"data",y,"error",g),c==="conflict"&&(console.log("conflict detected"),console.log("queued record:",a))}const{error:o}=await this[t](r,a);if(o){console.error("error processing update queue",o),console.error("functionName",t),console.error("table",r),console.error("record",a),console.error("timestamp",i);return}else localStorage.setItem("update-queue",JSON.stringify(e)),this.processQueue()}else console.log("processQueue: queue is empty"),m=!1}});s(this,"updateCollection",async(e,t,r="id")=>{const a=e.findIndex(i=>i[r]===t[r]);return a>-1?e[a]=t:e.push(t),e});s(this,"deleteFromCollection",async(e,t,r="id")=>{const a=e.findIndex(i=>i[r]===(typeof t=="string"?t:t[r]));return a>-1&&e.splice(a,1),e});s(this,"load_widgets",async(e={})=>{let t;e.cached||(t=await f("loading widgets...")),this.isConnected()||await this.connect();const{data:r,error:a}=await n.from("widgets").select().order("name");return e.cached||t.dismiss(),{data:r,error:a}});s(this,"load_widget",async(e={})=>{let t;e.cached||(t=await f("loading widget...")),this.isConnected()||await this.connect();const{data:r,error:a}=await n.from("widgets").select().eq("id",e.id).limit(1).single();return e.cached||t.dismiss(),{data:r,error:a}});s(this,"load_days",async(e={})=>{let t;e.cached||(t=await f("loading days...")),this.isConnected()||await this.connect();const{data:r,error:a}=await n.from("days").select().order("date",{ascending:!1}).limit(31);return e.cached||t.dismiss(),{data:r,error:a}});s(this,"load_day",async(e={})=>{let t;e.cached||(t=await f("loading day...")),this.isConnected()||await this.connect();const{data:r,error:a}=await n.from("days").select().eq("id",e.id).limit(1).single();return e.cached||t.dismiss(),{data:r,error:a}});s(this,"getToday",()=>{const e=new Date;return new Date(e.getTime()-e.getTimezoneOffset()*6e4).toISOString().split("T")[0]});s(this,"load_today",async()=>{let e;e=await f("loading today..."),this.isConnected()||await this.connect();const{data:t,error:r}=await n.from("days").select().eq("date",this.getToday()).limit(1).single();return e.dismiss(),{data:t,error:r}});s(this,"getSingleRecordById",async(e,t)=>{const{data:r,error:a}=await n.from(e).select("*").eq("id",t).limit(1).single();return{data:r,error:a}});s(this,"updateUserSetting",async(e,t)=>{const{user:r,error:a}=await n.auth.update({data:{[e]:t}});return a?console.error("updateUserSetting error",a):console.log("updateUserSetting result (user):",r),{user:r,error:a}})}static getInstance(){return this.myInstance===null&&(this.myInstance=new this,this.myInstance.connect()),this.myInstance}saveCache(e,t){return localStorage.setItem(t,JSON.stringify(e)),e}clearCache(e){localStorage.removeItem(e)}clearAllCache(){localStorage.clear()}queueUpdate(e,t,r){const a=JSON.parse(localStorage.getItem("update-queue")||"[]");a.push({functionName:e,table:t,record:r,timestamp:+Date.now()}),localStorage.setItem("update-queue",JSON.stringify(a))}async checkRecordVersion(e,t,r="updated_at"){if(d){const{error:a,count:i}=await n.from(e).select("id",{count:"exact"}).eq("id",t.id);if(a)return console.error("checkRecordVersion getCount: error",a),{status:"error",error:a};if(i===0)return{status:"notFound",data:null,error:null};if(i>1)return{status:"multipleFound",data:null,error:null};const{data:o,error:c}=await n.from(e).select(`id, ${r}`).eq("id",t.id).single();if(c)return{status:"error",data:null,error:c};if(o&&typeof o[r]==typeof t[r]){if(o[r]===t[r])return{status:"ok",data:o,error:c};{console.log(`${r} conflict detected, ${o[r]} != ${t[r]}`);const{data:y,error:g}=await n.from(e).select("*").eq("id",t.id).single();return g?{status:"conflict",data:o,error:g}:{status:"conflict",data:y,error:g}}}else return{status:"error",data:null,error:`${r} data missing or wrong type`}}else return{status:"offline",data:null,error:null}}async saveRecord(e,t){if(d){console.log("saveRecord",e,t);const{data:r,error:a}=await n.from(e).upsert(t);return console.log("data",r,"error",a),{data:r,error:a}}else return this.queueUpdate("saveRecord",e,t),{data:null,error:null}}async deleteRecord(e,t){if(d){const{data:r,error:a}=await n.from(e).delete().eq("id",t.id);return{data:r,error:a}}else return this.queueUpdate("deleteRecord",e,t),{data:null,error:null}}async save_day(e){const{data:t,error:r}=await this.saveRecord("days",e);return{data:t,error:r}}async delete_day(e){const{data:t,error:r}=await this.deleteRecord("days",e);return{data:t,error:r}}async save_widget(e){const{data:t,error:r}=await this.saveRecord("widgets",e);return{data:t,error:r}}async delete_widget(e){const{data:t,error:r}=await this.deleteRecord("widgets",e);return{data:t,error:r}}async getProfile(e){if(e){const{data:t,error:r}=await n.from("profile").select("*").eq("id",e).limit(1).single();return{data:t,error:r}}else return console.error("#### getProfile: no id"),{data:{},error:null}}async getSettings(){const{data:e,error:t}=await n.from("settings").select("*").limit(1).single();return{data:e,error:t}}async saveSettings(e){console.log("** saveSettings",e);const{data:t,error:r}=await n.from("settings").upsert(e);return{data:t,error:r}}async saveProfile(e){const{data:t,error:r}=await n.from("profile").upsert(e);return{data:t,error:r}}};let h=u;s(h,"myInstance",null),s(h,"datasets",{});const R=h.getInstance();C.online.subscribe(l=>{d=l,d&&(console.log("supabase: app came online -- process pending queue"),m?console.error("supabaseDataService: processQueue already active"):(m=!0,R.processQueue()))});export{h as S};
