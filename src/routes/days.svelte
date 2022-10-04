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
		<ion-title>days List</ion-title>
		<ion-buttons slot="end">
			<ion-button on:click={() => gotoDay('new')}>
				<ion-icon slot="icon-only" icon={addOutline} />
			</ion-button>				
		</ion-buttons>
	</ion-toolbar>
</ion-header>

<ion-content class="ion-padding">
	<ion-list>
		{#if days && days.length }
			{#each days as day}
					<ion-item on:click={() => gotoDay(day.id)}>
						{day.date}
						<ion-note slot="end">
							<!-- {day.food_total.toFixed(0)} -->
							stuff
						</ion-note>
				</ion-item>
			{/each}
		{:else}
			<ion-item>
				No days found
			</ion-item>
		{/if}
	</ion-list>
</ion-content>

<style>
</style>
