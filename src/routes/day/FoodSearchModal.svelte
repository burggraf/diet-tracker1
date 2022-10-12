<script lang="ts">
    import SupabaseAuthService from "$services/supabase.auth.service";
    import { modalController } from "$ionic/svelte";
    import { onDestroy, onMount } from 'svelte'

    import { toast } from '$services/toast';
    import { loadingBox } from "$services/loadingMessage";
    // read food data from json file
    import food from "$services/food.json";
    // export let entry: any = {};  

    import {
      mailOutline,
      closeOutline,
      fastFoodOutline,
      personAdd,
      lockOpenOutline,
      lockClosedOutline,
      arrowForwardOutline,
      trashOutline,
      checkmarkOutline,
      searchOutline,
      link
    } from "ionicons/icons";
  import { saveConfig } from "@ionic/core"
  
    let showModal = false;
    const closeOverlay = () => {
      modalController.dismiss({ data: null });
    };
    let filteredFood = [];

    function save(item: any) {
        modalController.dismiss({ data: item });
    }
    function search($event) {
        console.log('search', $event.target.value);
        let s = $event.target.value.trim().toLowerCase();
        if (s != '') {            
            filteredFood = food.filter((item) => {
                return (item.name.toLowerCase().indexOf(s) > -1);
            })
        } else {
            filteredFood = [];
        }
        // setTimeout(() => {
        //     const thelist = document.getElementById('thelist');
        //     console.log(thelist)
        //     console.log('thelist.offsetHeight', thelist.offsetHeight)
        //     console.log('thelist.parentElement.offsetHeight', thelist.parentElement.offsetHeight)
        //     console.log('thelist.clientHeight', thelist.clientHeight)
        //     console.log('thelist.parentElement.clientHeight', thelist.parentElement.clientHeight)
        //     console.log('thelist.parentElement.parentElement.clientHeight', thelist.parentElement.parentElement.clientHeight)
        //     thelist.style.height = thelist.parentElement.parentElement.clientHeight + 'px';
        // },3000);

    }

    onMount(() => {
        (document.getElementById('searchbar') as any).setFocus();
        setTimeout(()=>{
            const toolbar = document.getElementById('toolbar');
            const thelist = document.getElementById('thelist');
            thelist.style.height = (thelist.parentElement.clientHeight - toolbar.clientHeight) + 'px';
            (document.getElementById('searchbar') as any).setFocus();
        },500)
    })

  </script>
  
  <svelte:head>
    <title>FoodSearchModal</title>
  </svelte:head>
  <ion-header translucent="true">
    <ion-toolbar id="toolbar">
      <ion-title>Food Search</ion-title>
      <ion-buttons slot="start">
        <ion-icon 
        on:click={closeOverlay}
        icon={closeOutline} 
        slot="start" size="large" color="primary"></ion-icon>
      </ion-buttons>

      <ion-buttons slot="end">

        <!-- <ion-icon 
        on:click={deleteEntry}
        icon={trashOutline} 
        slot="start" size="large" color="primary"></ion-icon>

        <ion-icon 
        on:click={search}
        icon={searchOutline} 
        slot="start" size="large" color="primary"></ion-icon> -->

      </ion-buttons>

    </ion-toolbar>
  </ion-header>
  <!-- <ion-content> -->
  <ion-searchbar id="searchbar" placeholder="Search" debounce={500} on:ionChange={search}></ion-searchbar>
    <ion-list  id="thelist" style="overflow-y: scroll !important; height: 500px;">
        {#each filteredFood as item}
            <ion-item on:click={() => {save(item)}}>
                <ion-label>
                    <h2>{item.name}</h2>
                </ion-label>
                <!-- <ion-note slot="end">{item.calories}</ion-note> -->
                <ion-label slot="end">
                    <h2 style="text-align: right;">{item.calories}</h2>
                    <p style="text-align: right;">{item.portion}</p>
                </ion-label>
            </ion-item>
        {/each}
    </ion-list>
<!-- </ion-content> -->
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
  .formItem3 {
      --padding-start: 0px;
      --padding-end: 0px;
      --inner-padding-end: 0px;
      width: 33%;
  }
  .formInputBoxWithIcon {
      height: 50px;
      border: 1px solid rgb(212, 212, 212);
      background-color: var(--ion-background-color) !important;
      border-radius: 5px;
  }
  .formInputBox {
      height: 50px;
      border: 1px solid rgb(212, 212, 212);
      background-color: var(--ion-background-color) !important;
      border-radius: 5px;
  }
  .formSegment {
    border: 1px solid rgb(212, 212, 212);
  }
  .formInputBoxCentered {
      height: 50px;
      border: 1px solid rgb(212, 212, 212);
      background-color: var(--ion-background-color) !important;
      border-radius: 5px;
      text-align: center;
  }
  .formTextarea {
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
  ion-segment {
    --background: var(--ion-color-primary);
  }
  </style>