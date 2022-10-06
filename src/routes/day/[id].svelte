<script lang="ts">
	/**
	 this version looks up each individual widget instead of using the widgets recordset
	*/
	import { params, goto } from '@roxi/routify'
	import {
		chevronBackOutline,
		createOutline,
		checkmarkOutline,
		closeOutline,
		trashOutline,
		addCircleOutline,
	} from 'ionicons/icons'
	import { modalController } from '$ionic/svelte'
	import FoodEntryModal from './FoodEntryModal.svelte'

	import { alert, showConfirm } from '$services/alert'
	import SupabaseDataService from '$services/supabase.data.service'
	const supabaseDataService = SupabaseDataService.getInstance()
	import SupabaseAuthService from '$services/supabase.auth.service'
	import type { User } from '@supabase/supabase-js'

	import { onDestroy, onMount } from 'svelte'

	let user = null
	let userSubscription: any

	let id = $params.id
	let mode = 'view'

	let day: any = {} // = cache || {}
	console.log('*** id', id)
	let recordset: any

	if (id === 'new') {
		console.log('it is new')
		day = {
			id: supabaseDataService.gen_random_uuid(),
			user_id: user?.id || null,
			created_at: new Date().toISOString(),
			date: new Date().toISOString().substring(0, 10),
			food_log: { entries: [] },
			activity_log: { entries: [] },
			water_log: { entries: [] },
			weight: 0,
			notes: '',
		}
		mode = 'edit'
		console.log('*** new day', day)
	} else {
		recordset = supabaseDataService.getDataSubscription('day', { id }).subscribe((rec) => {
			day = rec
			console.log('*** day', day)
		})
	}

	onMount(() => {
		userSubscription = SupabaseAuthService.user.subscribe((newuser: User | null) => {
			user = newuser
			//console.log('got user:', user)
		})
	})

	onDestroy(() => {
		recordset.unsubscribe()
		userSubscription.unsubscribe()
	})

	const handler = (event) => {
		if (typeof day[event.target.name] === 'number') {
			try {
				day[event.target.name] = parseFloat(event.target.value)
			} catch (e) {
				day[event.target.name] = 0
			}
		} else {
			// string or object
			day[event.target.name] = event.target.value
		}
	}
	const save = async () => {
		// validate here...
		console.log('save the day', day)

		if (!day.user_id) {
			day.user_id = user.id
		}

		const { error } = await supabaseDataService.save_day(day)
		if (error) {
			console.error('save day error', error)
		} else {
			id = day.id
			mode = 'view'
			// supabaseDataService.updateDataSubscription('day', { id })
		}
	}
	const delete_day = async () => {
		await showConfirm({
			header: 'Delete Day',
			message: 'Are you sure?',
			okHander: async () => {
				const { data, error } = await supabaseDataService.delete_day(day)
				if (error) {
					console.error('Error deleting day', error)
				} else {
					goBack()
					// window.location.href = '/days'
				}
			},
		})
	}
	const goBack = () => {
		$goto(`/days`)
	}
	const add_food_log_entry = async (id) => {
		if (!day.food_log.entries) {
			day.food_log.entries = []
		}
		const entry = {
			id: supabaseDataService.gen_random_uuid(),
			food_id: '',
			title: '',
			desc: '',
			cat: '',
			cps: 0,
			qty: 0,
			amt: 0
		}

		const saved = await openFoodEntryBox(entry, day.food_log.entries.length);
		console.log('done calling openFoodEntryBox', saved)
		console.log('day.food_log.entries', day.food_log.entries)
		day.food_log.entries = [...day.food_log.entries]
		save();
	}
	const edit_food_log_entry = (id) => {
		console.log('edit_new_food_log_entry: not implemented yet')
		//$goto(`/food_log_entry/${id}`)
	}

	const reorder_food_log = ({ detail }) => {
			const { from, to } = detail
			const item = day.food_log.entries.splice(from, 1)[0]
			day.food_log.entries.splice(to, 0, item)
			detail.complete()
			console.log('reorder_food_log: day', day)
			save()
	};


	const openFoodEntryBox = async (entry: any, index: number) => {
		const openFodEntryModalController = await modalController.create({
			component: FoodEntryModal,
			componentProps: {
				entry: entry,
			},
			showBackdrop: true,
			backdropDismiss: true,
		})

		await openFodEntryModalController.present()
		const { data } = await openFodEntryModalController.onWillDismiss();
		if (data?.data !== null) {
			day.food_log.entries[index] = data.data;
			console.log('*** day.food_log.entries', day.food_log.entries)
			return true;
		} else {
			return false;
		}	
	}

</script>

<ion-header translucent="true">
	<ion-toolbar>
		<ion-buttons slot="start">
			<ion-button
				on:click={() => {
					//history.back()
					// window.location.href = '/days'
					goBack()
				}}
			>
				<ion-icon slot="icon-only" icon={chevronBackOutline} />
			</ion-button>
		</ion-buttons>
		<ion-title>Day</ion-title>
		<ion-buttons slot="end">
			{#if mode === 'view'}
				<ion-button on:click={delete_day}>
					<ion-icon slot="icon-only" icon={trashOutline} />
				</ion-button>
				<ion-button
					on:click={() => {
						mode = 'edit'
					}}
				>
					<ion-icon slot="icon-only" icon={createOutline} />
				</ion-button>
			{/if}
			{#if mode === 'edit'}
				<ion-button
					on:click={() => {
						mode = 'view'
						if (id === 'add') goBack() // window.location.href = '/TestData';
						// else day = cache || {}
					}}
				>
					<ion-icon slot="icon-only" icon={closeOutline} />
				</ion-button>
				<ion-button
					on:click={() => {
						save()
					}}
				>
					<ion-icon slot="icon-only" icon={checkmarkOutline} />
				</ion-button>
			{/if}
		</ion-buttons>
	</ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
	{#if day}
		<ion-card>
			<ion-card-header>
				<ion-card-subtitle>{day?.id}</ion-card-subtitle>
				<ion-card-title>
					{#if mode === 'view'}{day?.date}{/if}
					{#if mode === 'edit'}
						<ion-label>Date:</ion-label><ion-input
							value={day.date}
							on:ionChange={handler}
							required
							name="date"
							type="text"
						/>
					{/if}
				</ion-card-title>
			</ion-card-header>

			<ion-card-content>
				{#if mode === 'view'}{day?.notes}{/if}
				{#if mode === 'edit'}
					<ion-label>Notes:</ion-label><ion-input
						value={day.notes}
						on:ionChange={handler}
						required
						name="notes"
						type="text"
					/>
				{/if}
				<br />
				<ion-list lines="full">
					<ion-reorder-group
						id="food_log_group"
						disabled="false"
						on:ionItemReorder={reorder_food_log}>
						{#if day?.food_log?.entries}
							{#each day?.food_log?.entries as entry}
								<ion-item
									on:click={() => {
										edit_food_log_entry(entry?.id)
									}}>
									{entry?.title}
									<ion-note slot="end">
										<!-- {day.food_total.toFixed(0)} -->
										{entry?.amt || 0}
									</ion-note>
									<ion-reorder slot="start" />
								</ion-item>
							{/each}
						{/if}
					</ion-reorder-group>

					<ion-item on:click={add_food_log_entry}>
						<ion-icon icon={addCircleOutline} slot="start" />
						add new entry
					</ion-item>
				</ion-list>

				<br />
				<br />
				created: {new Date(day?.created_at).toLocaleDateString()}
				{new Date(day?.created_at).toLocaleTimeString()}<br />
				<br />
			</ion-card-content>
		</ion-card>
	{/if}
</ion-content>

<style>
	ion-label {
		display: inline-block;
		width: 40%;
		text-align: right;
		padding-right: 10px;
	}
	ion-input {
		width: 60%;
		border: 1px solid;
		display: inline-block;
	}
</style>
