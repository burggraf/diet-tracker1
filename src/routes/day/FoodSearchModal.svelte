<script lang="ts">
    import { modalController } from "$ionic/svelte";
    import { onMount } from 'svelte'

    import food from "$services/food.json";

    import {
      closeOutline,
    } from "ionicons/icons";

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
    }

    onMount(() => {
        setTimeout(()=>{
            const toolbar = document.getElementById('toolbar');
            const thelist = document.getElementById('thelist');
            thelist.style.height = (thelist.parentElement.parentElement.parentElement.clientHeight - (toolbar.clientHeight * 2) - 20) + 'px';
            (document.getElementById('searchbar') as any).setFocus().then((result) => {
                document.getElementById('searchbar').click();
            });

        },1000)
    })
    function blurFunction(e) {
        const toolbar = document.getElementById('toolbar');
        const thelist = document.getElementById('thelist');
        thelist.style.height = (thelist.parentElement.parentElement.parentElement.clientHeight - (toolbar.clientHeight * 2) - 20) + 'px';
    }

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

      </ion-buttons>

    </ion-toolbar>
  </ion-header>
  <!-- <ion-content> -->
<div id="container" style="height: 100%">
  <ion-searchbar id="searchbar" 
  placeholder="Search" debounce={500} 
  on:ionBlur={blurFunction}
  on:ionChange={search}></ion-searchbar>
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
</div>
<!-- </ion-content> -->
  <style>
  input:-webkit-autofill {
      -webkit-text-fill-color: var(--ion-color-FORCEDARK);
      font-weight: 500px;
  }
  
  input:-webkit-autofill:focus {
      -webkit-text-fill-color: var(--ion-color-FORCEDARK);
      font-weight: 500px;
  } 
  </style>