<script lang="ts">
  import IonPage from "$ionic/svelte/components/IonPage.svelte";
  import { onMount } from 'svelte'
  import { goto } from '@roxi/routify'
	import SupabaseDataService from '$services/supabase.data.service'
	const supabaseDataService = SupabaseDataService.getInstance()

  // import { goto } from "@roxi/routify";
  // $goto("/", {  });
	onMount(async () => {
    const {data, error} = await supabaseDataService.load_today();
    if (data && data.id) {
      const id = data.id;
      // $goto(`/day/${data.id}`);
      $goto(`/day/[id]`,{id})
    } else {
      $goto(`/day/[id]`,{id: 'new'})
    }
	})

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

