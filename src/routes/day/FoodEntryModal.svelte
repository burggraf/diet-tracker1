<script lang="ts">
    import SupabaseAuthService from "$services/supabase.auth.service";
    import { modalController } from "$ionic/svelte";
  
    import { toast } from '$services/toast';
    import { loadingBox } from "$services/loadingMessage";
    export let entry: any = {};  

    import {
      mailOutline,
      closeOutline,
      personAdd,
      lockOpenOutline,
      lockClosedOutline,
      arrowForwardOutline,
      link
    } from "ionicons/icons";
  import { saveConfig } from "@ionic/core"
  
    let showModal = false;
    const closeOverlay = () => {
      modalController.dismiss({ data: null });
    };

    function handleTextValue(event) {
        entry[event.target.name] = event.target.value!;
    }

    function save() {
        modalController.dismiss({ data: entry });
    }
  
  </script>
  
  <svelte:head>
    <title>FoodEntryModal</title>
  </svelte:head>
  <ion-header translucent="true">
    <ion-toolbar>
      <ion-title>Edit Entry</ion-title>
      <ion-buttons slot="start">
        <ion-icon 
        on:click={closeOverlay}
        icon={closeOutline} 
        slot="start" size="large" color="medium"></ion-icon>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  
  entry: {JSON.stringify(entry)}

<!-- day.food_log.entries.push({id: supabaseDataService.gen_random_uuid()})
day.food_log.entries[day.food_log.entries.length - 1].food_id = ''
day.food_log.entries[day.food_log.entries.length - 1].title = ''
day.food_log.entries[day.food_log.entries.length - 1].desc = ''
day.food_log.entries[day.food_log.entries.length - 1].cat = ''
day.food_log.entries[day.food_log.entries.length - 1].cps = 0 // cost per serving
day.food_log.entries[day.food_log.entries.length - 1].qty = 1 // servings
day.food_log.entries[day.food_log.entries.length - 1].amt = 0 -->

    <ion-grid class="ion-padding Grid">
        <ion-row>
            <ion-col>
                <ion-label>Title</ion-label>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col>
  
                <ion-item class="formItem" lines="none">
                    <ion-input 
                        on:ionChange={handleTextValue}
                        name="title"
                        class="formInputBoxWithIcon"
                        type="text" 
                        value={entry.title}
                        placeholder="Title">
                        <ion-icon class="inputIcon" 
                          icon={mailOutline} 
                          slot="start" size="large" color="medium"></ion-icon>
                    </ion-input>
  
                </ion-item>
  
            </ion-col>
        </ion-row>

        <ion-row>
            <ion-col>
                <div class="ion-text-center" style="margin-bottom:10px">
                    <ion-label><b>or</b></ion-label>
                </div>
                <ion-button expand="block" 
                disabled={false}
                on:click={save}>
                <ion-icon icon={link} size="large" />&nbsp;&nbsp;
                <b>Done</b></ion-button>                    
            </ion-col>
        </ion-row>
    </ion-grid>    
  
  <style>
  .Grid {
      max-width:375px;
  }
  input:-webkit-autofill {
      -webkit-text-fill-color: var(--ion-color-FORCEDARK);
      font-weight: 500px;
  }
  
  input:-webkit-autofill:focus {
      -webkit-text-fill-color: var(--ion-color-FORCEDARK);
      font-weight: 500px;
  } 
  
  
  .inputIcon {
      margin-left: 10px;
      margin-right: 10px
  }
  
  .formItem {
      --padding-start: 0px;
      --padding-end: 0px;
      --inner-padding-end: 0px;
  }
  .formInputBoxWithIcon {
      height: 50px;
      border: 1px solid rgb(212, 212, 212);
      background-color: var(--ion-background-color) !important;
      border-radius: 5px;
  }
  .toast {
      font-weight: bold;
  }
  .flex-container {
      display: flex;
      display: -webkit-flex;
      display: -moz-flex;
      flex-flow: row wrap;
      -webkit-flex-flow: row wrap;
      -moz-flex-flow: row wrap;
      justify-content: center;
  }
  </style>