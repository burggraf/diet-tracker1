<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { addOutline } from 'ionicons/icons'
	import SupabaseDataService from '$services/supabase.data.service'
	import { goto } from '@roxi/routify'
	const supabaseDataService = SupabaseDataService.getInstance()

	let settings: any = {daily_budget: 0, target_weight: 0}
	let days: any[]; // = cache || []
	const recordset = 
		supabaseDataService
		.getDataSubscription('days')
		.subscribe((recordset) => {
			days = recordset;
			console.log('*** days', days);
		}
	)
	onMount(async () => {
		const { data, error } = await supabaseDataService.getSettings();
		console.log('*** settings', data, error);
		settings = data.settings || {};
	})
	onDestroy(() => {
		recordset.unsubscribe()
	})
	const gotoDay = (id: string) => {
		$goto(`/day/[id]`,{id})
	}
	function getToday() {
		const date = new Date();
		return new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];
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
					<ion-item on:click={() => gotoDay(day.id)} 
						class={getToday()===day.date ? 'today' : 'notToday'}>
						{day.date}
						<ion-note slot="end"
						class={getToday()===day.date ? 'today' : 'notToday'}>
							{#if (getToday()===day.date) && settings.daily_budget}
								<b>{settings.daily_budget - (day?.food_total || 0).toFixed(2)} left&nbsp;&nbsp;</b>
							{/if}
							{(day?.food_total || 0).toFixed(2)}
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
	.today {
		font-weight: bold;
	}
	.notToday {
		font-weight: normal;
	}
</style>
