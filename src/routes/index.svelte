<script lang="ts">
  import IonPage from "$ionic/svelte/components/IonPage.svelte";

  // import { goto } from "@roxi/routify";
  // $goto("/", {  });
  console.log('*** index.svelte page');
</script>

<svelte:head>
  <title>Diet Tracker</title>
</svelte:head>

<IonPage>
  <ion-header translucent="true">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button />
      </ion-buttons>
      <ion-title>Diet Tracker</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">

    Landing Page Here...

  </ion-content>
</IonPage>

