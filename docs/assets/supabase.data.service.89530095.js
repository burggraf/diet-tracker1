var I=Object.defineProperty;var _=(u,t,e)=>t in u?I(u,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):u[t]=e;var n=(u,t,e)=>(_(u,typeof t!="symbol"?t+"":t,e),e);import{B as x,c as S}from"./BehaviorSubject.cf1ddfed.js";import{l as h}from"./loadingMessage.459d342e.js";class p{constructor(){n(this,"ping",async(t="/ping")=>{fetch(`${window.location.origin}${t}`).then(e=>e.status===200?(console.log(e),!0):(console.error("ping failed",e),!1)).catch(e=>(console.log("fetch error",e),console.log("do something here"),!1))})}static getInstance(){if(this.myInstance===null){this.myInstance=new this,this.myInstance.online=new x(window.navigator.onLine);const t=this.myInstance.online;window.addEventListener("offline",function(e){t.next(!1)}),window.addEventListener("online",function(e){t.next(!0)}),this.myInstance.forceOnlineValue=e=>{t.next(e)}}return this.myInstance}}n(p,"myInstance",null);class w{constructor(){n(this,"gen_random_uuid",()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=Math.random()*16|0,r=t==="x"?e:e&3|8;return r.toString(16)}));n(this,"uuid_generate_v4",this.gen_random_uuid);n(this,"getToday",()=>{const t=new Date;return new Date(t.getTime()-t.getTimezoneOffset()*6e4).toISOString().split("T")[0]})}static getInstance(){return this.myInstance===null&&(this.myInstance=new this),this.myInstance}}n(w,"myInstance",null);const v=w.getInstance(),q="https://kwmjtwyvwupiycxiitll.supabase.co",C="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3bWp0d3l2d3VwaXljeGlpdGxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ5MTk4ODksImV4cCI6MTk4MDQ5NTg4OX0.yRWZ9DVk46cawYg8Nu1i02xDc3xLKqRLnT1agO9hXL4";let s,g;const R=p.getInstance();let m=!1;const f=class{constructor(){n(this,"isConnected",()=>typeof s!="undefined");n(this,"getSupabase",()=>s);n(this,"connect",async()=>{this.isConnected()||(s=await S(q,C))});n(this,"gen_random_uuid",()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=Math.random()*16|0,r=t==="x"?e:e&3|8;return r.toString(16)}));n(this,"uuid_generate_v4",this.gen_random_uuid);n(this,"getDataSubscription",(t,e)=>{const r=t+(e?":"+JSON.stringify(e):"");return f.datasets[r]=new x([]),this.updateDataSubscription(t,e),f.datasets[r]});n(this,"updateDataSubscription",async(t,e)=>{const r=t+(e?":"+JSON.stringify(e):""),a=this.loadCache(r);if(a!==null&&f.datasets[r].next(a),!g)return;console.log(`loadFunction: load_${t}`);const o=this[`load_${t}`];if(!o){console.error("supabaseDataService: missing function load_"+t);return}e?e={...e,cached:a!==null}:e={cached:a!==null};try{const{data:i,error:c}=await o(e);c?(console.error("updateDataSubscription: error",c),c.message):(f.datasets[r].next(i),this.saveCache(i,r))}catch{}});n(this,"loadCache",t=>{const e=localStorage.getItem(t);return e?JSON.parse(e):null});n(this,"processQueue",async()=>{if(g){const t=JSON.parse(localStorage.getItem("update-queue")||"[]");if(t.length>0){const{functionName:e,table:r,record:a,timestamp:o}=t.shift();if(e==="saveRecord"||e==="deleteRecord"){const{status:c,data:l,error:d}=await this.checkRecordVersion(r,a);console.log(`function: ${e}:`,"status",c,"data",l,"error",d),c==="conflict"&&(console.log("conflict detected"),console.log("queued record:",a))}const{error:i}=await this[e](r,a);if(i){console.error("error processing update queue",i),console.error("functionName",e),console.error("table",r),console.error("record",a),console.error("timestamp",o);return}else localStorage.setItem("update-queue",JSON.stringify(t)),this.processQueue()}else console.log("processQueue: queue is empty"),m=!1}});n(this,"updateCollection",async(t,e,r="id")=>{const a=t.findIndex(o=>o[r]===e[r]);return a>-1?t[a]=e:t.push(e),t});n(this,"deleteFromCollection",async(t,e,r="id")=>{const a=t.findIndex(o=>o[r]===(typeof e=="string"?e:e[r]));return a>-1&&t.splice(a,1),t});n(this,"load_widgets",async(t={})=>{let e;t.cached||(e=await h("loading widgets...")),this.isConnected()||await this.connect();const{data:r,error:a}=await s.from("widgets").select().order("name");return t.cached||e.dismiss(),{data:r,error:a}});n(this,"load_widget",async(t={})=>{let e;t.cached||(e=await h("loading widget...")),this.isConnected()||await this.connect();const{data:r,error:a}=await s.from("widgets").select().eq("id",t.id).limit(1).single();return t.cached||e.dismiss(),{data:r,error:a}});n(this,"load_days",async(t={})=>{console.log("load_days: options",t);let e;t.cached||(e=await h("loading days...")),this.isConnected()||await this.connect();const{data:r,error:a}=await s.from("days").select().order("date",{ascending:!1}).limit(31);return t.cached||e.dismiss(),console.log("load_days: data, error",r,a),{data:r,error:a}});n(this,"load_day",async(t={})=>{let e;t.cached||(e=await h("loading day...")),this.isConnected()||await this.connect();const{data:r,error:a}=await s.from("days").select().eq("id",t.id).limit(1).single();return t.cached||e.dismiss(),{data:r,error:a}});n(this,"load_today",async()=>{let t;t=await h("loading today..."),this.isConnected()||await this.connect();const{data:e,error:r}=await s.from("days").select().eq("date",v.getToday()).limit(1).single();return t.dismiss(),{data:e,error:r}});n(this,"getSingleRecordById",async(t,e)=>{const{data:r,error:a}=await s.from(t).select("*").eq("id",e).limit(1).single();return{data:r,error:a}});n(this,"updateUserSetting",async(t,e)=>{const{user:r,error:a}=await s.auth.update({data:{[t]:e}});return a?console.error("updateUserSetting error",a):console.log("updateUserSetting result (user):",r),{user:r,error:a}});n(this,"search_food_log",async t=>{const{data:e,error:r}=await s.rpc("search_food_log",{string:t});return{data:e,error:r}});n(this,"search_internet",async t=>{let e=[],r=null;try{const a=`https://us.openfoodfacts.org/cgi/search.pl?search_terms=${t}&search_simple=1&action=process&json=1&nutriment_0=energy-kcal&nutriment_compare_0=gt&nutriment_value_0=500&fields=code,product_name,nutriments,serving_size&sort_by=product_name`,o=await fetch(a),i=await o.json();if(!o.ok)return console.error("** fetch ERROR **",o.statusText),r=o.statusText,{data:null,error:r};if(i&&i.products)for(let c=0;c<i.products.length;c++){const l=i.products[c];let d=l.serving_size||"";l.nutriments["energy-kcal_100g"]&&(d.length>0&&(d+=" - "),d+=`${Math.round(l.nutriments["energy-kcal_100g"])} cal/100g`),e.push({title:l.product_name,calories:Math.round(l.nutriments["energy-kcal_serving"]||l.nutriments["energy-kcal"]),desc:d})}}catch(a){const o=(a.toString()+`
`).split(`
`)[0];console.error("line 1",o),r=o}return{data:e,error:r}})}static getInstance(){return this.myInstance===null&&(this.myInstance=new this,this.myInstance.connect()),this.myInstance}saveCache(t,e){return localStorage.setItem(e,JSON.stringify(t)),t}clearCache(t){localStorage.removeItem(t)}clearAllCache(){localStorage.clear()}queueUpdate(t,e,r){const a=JSON.parse(localStorage.getItem("update-queue")||"[]");a.push({functionName:t,table:e,record:r,timestamp:+Date.now()}),localStorage.setItem("update-queue",JSON.stringify(a))}async checkRecordVersion(t,e,r="updated_at"){if(g){const{error:a,count:o}=await s.from(t).select("id",{count:"exact"}).eq("id",e.id);if(a)return console.error("checkRecordVersion getCount: error",a),{status:"error",error:a};if(o===0)return{status:"notFound",data:null,error:null};if(o>1)return{status:"multipleFound",data:null,error:null};const{data:i,error:c}=await s.from(t).select(`id, ${r}`).eq("id",e.id).single();if(c)return{status:"error",data:null,error:c};if(i&&typeof i[r]==typeof e[r]){if(i[r]===e[r])return{status:"ok",data:i,error:c};{console.log(`${r} conflict detected, ${i[r]} != ${e[r]}`);const{data:l,error:d}=await s.from(t).select("*").eq("id",e.id).single();return d?{status:"conflict",data:i,error:d}:{status:"conflict",data:l,error:d}}}else return{status:"error",data:null,error:`${r} data missing or wrong type`}}else return{status:"offline",data:null,error:null}}async saveRecord(t,e){if(g){console.log("saveRecord",t,e);const{data:r,error:a}=await s.from(t).upsert(e);return console.log("data",r,"error",a),{data:r,error:a}}else return this.queueUpdate("saveRecord",t,e),{data:null,error:null}}async deleteRecord(t,e){if(g){const{data:r,error:a}=await s.from(t).delete().eq("id",e.id);return{data:r,error:a}}else return this.queueUpdate("deleteRecord",t,e),{data:null,error:null}}async save_day(t){const{data:e,error:r}=await this.saveRecord("days",t);return{data:e,error:r}}async delete_day(t){const{data:e,error:r}=await this.deleteRecord("days",t);return{data:e,error:r}}async save_widget(t){const{data:e,error:r}=await this.saveRecord("widgets",t);return{data:e,error:r}}async delete_widget(t){const{data:e,error:r}=await this.deleteRecord("widgets",t);return{data:e,error:r}}async getProfile(t){if(t){const{data:e,error:r}=await s.from("profile").select("*").eq("id",t).limit(1).single();return{data:e,error:r}}else return console.error("#### getProfile: no id"),{data:{},error:null}}async getCurrentWeight(){const{data:t,error:e}=await s.from("days").select("weight").order("date",{ascending:!1}).limit(1).single();return{data:t,error:e}}async getDayId(t){this.isConnected()||await this.connect();const{data:e,error:r}=await s.from("days").select("id").eq("date",t.substring(0,10)).limit(1).single();return{data:e,error:r}}async getNextFreeDay(){this.isConnected()||await this.connect();const{data:t,error:e}=await s.rpc("next_free_day");return{data:t,error:e}}async getSettings(t){this.isConnected()||await this.connect(),console.log("### supabaseDataService.getSettings, uid:",t);const{data:e,error:r}=await s.from("settings").select("*").eq("user_id",t).limit(1).single();return console.log("result-> supabaseDataService.getSettings, data:",e,r),{data:e,error:r}}async saveSettings(t){console.log("** saveSettings",t);const{data:e,error:r}=await s.from("settings").upsert(t);return{data:e,error:r}}async saveProfile(t){const{data:e,error:r}=await s.from("profile").upsert(t);return{data:e,error:r}}};let y=f;n(y,"myInstance",null),n(y,"datasets",{});const O=y.getInstance();R.online.subscribe(u=>{g=u,g&&(console.log("supabase: app came online -- process pending queue"),m?console.error("supabaseDataService: processQueue already active"):(m=!0,O.processQueue()))});export{p as N,y as S,w as U};
