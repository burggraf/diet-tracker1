<script lang="ts">
	/**
	 this version looks up each individual widget instead of using the widgets recordset
	*/
	import { params, goto } from '@roxi/routify'
	import { toast } from '$services/toast';
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
	let settings: any = {daily_budget: 0, target_weight: 0}

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

	onMount(async () => {
		const { data, error } = await supabaseDataService.getSettings();
		console.log('*** settings', data, error);
		settings = data.settings || {};
		userSubscription = SupabaseAuthService.user.subscribe((newuser: User | null) => {
			user = newuser
			//console.log('got user:', user)
		})
	})

	onDestroy(() => {
		try {
			recordset.unsubscribe()
			userSubscription.unsubscribe()
		} catch (err) {
			console.error('error unsubscribing', err)
		}
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
		try {
			day.food_total = 0;
			day.food_log.entries.forEach(entry => {
				day.food_total += entry.amt
			})
		} catch (err) {
			console.error('error calculating food total', err)
		}

		const { error } = await supabaseDataService.save_day(day)
		if (error) {
			console.log('error message is: ', error.message)
			if (error.message.startsWith("duplicate key value violates unique constraint")) {
      			console.log('DUPLICATE DAY');
				alert({
					header: 'Duplicate Day',
 				    //subHeader: '',
				    message: 'This day already exists.  Please edit the existing day.',
				})
    		} else {
				console.error('save day error', error)
			}
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
			qty: 1,
			amt: 0,
			created: new Date().toISOString(),
		}

		const saved = await openFoodEntryBox(entry, day.food_log.entries.length, true);
		console.log('done calling openFoodEntryBox', saved)
		console.log('day.food_log.entries', day.food_log.entries)
		day.food_log.entries = [...day.food_log.entries]
		save()
	}
	const edit_food_log_entry = async (index) => {
		const saved = await openFoodEntryBox(day.food_log.entries[index], index, false);
		console.log('edit_food_log_entry is done calling openFoodEntryBox', saved)
		console.log('day.food_log.entries', day.food_log.entries)
		day.food_log.entries = [...day.food_log.entries]
		save()
	}

	const reorder_food_log = ({ detail }) => {
			const { from, to } = detail
			const item = day.food_log.entries.splice(from, 1)[0]
			day.food_log.entries.splice(to, 0, item)
			detail.complete()
			console.log('reorder_food_log: day', day)
			save()
	};


	const openFoodEntryBox = async (entry: any, index: number, isNew: boolean) => {
		const openFodEntryModalController = await modalController.create({
			component: FoodEntryModal,
			componentProps: {
				entry: entry,
				isNew: isNew
			},
			showBackdrop: true,
			backdropDismiss: true,
		})

		await openFodEntryModalController.present()
		const { data } = await openFodEntryModalController.onWillDismiss();
		if (data?.data !== null) {			
			if (data.data.deleted) { // check for deleted entry...
				day.food_log.entries.splice(index, 1)
			} else {
				day.food_log.entries[index] = data.data
			}
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
				<ion-card-subtitle>
					<ion-grid>
						<ion-row>
							<ion-col>Total: {(day?.food_total || 0).toFixed(2)}</ion-col>
							<ion-col style="text-align: right; font-weight: bold;">
								Left: {(settings.daily_budget - day?.food_total || 0).toFixed(2)}
							</ion-col>
						</ion-row>
					</ion-grid>
					
				</ion-card-subtitle>
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
							{#each day?.food_log?.entries as entry, index}
								<ion-item
									on:click={() => {
										edit_food_log_entry(index)
									}}>
									<ion-reorder slot="start" />
									<div>
									{entry?.title}<br/>
									<span class="description">{entry?.desc || ''}&nbsp;</span>
									</div>
									<!-- <ion-grid>
										<ion-row>
											<ion-col style="font-weight: bold;">{entry?.title}</ion-col>
										</ion-row>
										<ion-row>
											<ion-col>{entry?.desc}</ion-col>											
										</ion-row>
									</ion-grid>										 -->
									<ion-note slot="end" class="right">
										<div>
										{(entry?.amt || 0).toFixed(2)}<br/>
										<span class="description">&nbsp;{entry?.cat || ''}</span>
										</div>
										<!-- <ion-grid>
											<ion-row>
												<ion-col style="text-align: right; font-weight: bold;">{(entry?.amt || 0).toFixed(2)}</ion-col>
											</ion-row>
											<ion-row>
												<ion-col  style="text-align: right;">{entry?.cat || ''}</ion-col>
											</ion-row>
										</ion-grid>										 -->
									</ion-note>
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
	<!-- <pre>{JSON.stringify(day,null,2)}</pre> -->
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
	.description {
		color: gray;
		font-size: 0.8em;
	}
	.right {
		text-align: right;
	}
</style>
