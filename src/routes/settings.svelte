<script lang="ts">
	import { onDestroy } from 'svelte';
	import { addOutline } from 'ionicons/icons'
	import SupabaseDataService from '$services/supabase.data.service'
	import { goto } from '@roxi/routify'
	const supabaseDataService = SupabaseDataService.getInstance()

	let days: any[]; // = cache || []
	const recordset = 
		supabaseDataService
		.getDataSubscription('days')
		.subscribe((recordset) => {
			days = recordset;
			console.log('*** days', days);
		}
	)

	onDestroy(() => {
		recordset.unsubscribe()
	})
	const gotoDay = (id: string) => {
		$goto(`/day/[id]`,{id})
	}
</script>

<ion-header translucent="true">
	<ion-toolbar>
		<ion-buttons slot="start">
			<ion-menu-button />
		</ion-buttons>
		<ion-title>Settings</ion-title>
		<!-- <ion-buttons slot="end">
			<ion-button on:click={() => gotoDay('new')}>
				<ion-icon slot="icon-only" icon={addOutline} />
			</ion-button>				
		</ion-buttons> -->
	</ion-toolbar>
</ion-header>

<ion-content class="ion-padding">
	settings...
</ion-content>

<style>
</style>
