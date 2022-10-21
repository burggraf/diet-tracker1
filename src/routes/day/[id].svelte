<script lang="ts">
	import IonPage from '$ionic/svelte/components/IonPage.svelte'
	import { params, goto } from '@roxi/routify'
	import { toast } from '$services/toast'
	import {
		chevronBackOutline,
		createOutline,
		checkmarkOutline,
		closeOutline,
		trashOutline,
		addCircleOutline,
		removeCircleOutline,
	} from 'ionicons/icons'
	import { modalController } from '$ionic/svelte'
	import FoodEntryModal from './FoodEntryModal.svelte'

	import { alert, showConfirm } from '$services/alert'
	import SupabaseDataService from '$services/supabase.data.service'
	const supabaseDataService = SupabaseDataService.getInstance()
	import { currentUser } from '$services/user.store'

	import { onDestroy, onMount } from 'svelte'
	import SupabaseUtilityService from '$services/utility.functions.service'
	const utils = SupabaseUtilityService.getInstance()

	let id = $params.id
	// let mode = 'view'

	let day: any = {} // = cache || {}
	console.log('*** id', id)
	let recordset: any

	const init = async () => {
		if (id === 'new') {
			console.log('it is new')
			day = {
					id: supabaseDataService.gen_random_uuid(),
					user_id: $currentUser?.id || null,
					created_at: new Date().toISOString(),
					date: new Date().toISOString().substring(0, 10),
					food_log: { entries: [] },
					food_total: 0,
					activity_log: { entries: [] },
					water_log: { entries: [] },
					water_total: 0,
					weight: 0,
					notes: '',
				}

			// do we have an entry for today already?
			const { data, error } = await supabaseDataService.getDayId(
				new Date().toISOString().substring(0, 10)
			)
			if (data && data.id) {
				const { data, error } = await supabaseDataService.getNextFreeDay()
				console.log('getNextFreeDay', data, error)
				if (error) {
					console.log('getNextFreeDay error', error)
				} else {
					id = data.next_free_day;
					day = {
						id: supabaseDataService.gen_random_uuid(),
						user_id: $currentUser?.id || null,
						created_at: new Date().toISOString(),
						date: new Date(data).toISOString().substring(0, 10),
						food_log: { entries: [] },
						food_total: 0,
						activity_log: { entries: [] },
						water_log: { entries: [] },
						water_total: 0,
						weight: 0,
						notes: '',
					}
				}
			} else if (id.length === 10) {
			// new specific date sent in url
			day = {
				id: supabaseDataService.gen_random_uuid(),
				user_id: $currentUser?.id || null,
				created_at: new Date().toISOString(),
				date: id,
				food_log: { entries: [] },
				food_total: 0,
				activity_log: { entries: [] },
				water_log: { entries: [] },
				water_total: 0,
				weight: 0,
				notes: '',
			}
			id = day.id
		}} else {
			recordset = supabaseDataService.getDataSubscription('day', { id }).subscribe((rec) => {
				day = rec
				console.log('*** day', day)
			})
		}
	}
	init();

	onMount(async () => {
		// console.log('day onMount, $currentUser', $currentUser)
		if (!$currentUser) {
			$goto('/info')
			return
		}
		if (id === 'new') {
			try {
				const { data, error } = await supabaseDataService.getCurrentWeight()
				if (error) {
					console.error('getCurrentWeight error', error)
					day.weight = 0
				} else {
					day.weight = data.weight
				}
			} catch (ex) {
				console.log('exception', ex)
				day.weight = 0
			}
		}
	})

	onDestroy(() => {
		try {
			if (recordset) recordset.unsubscribe()
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
	const handleDate = (event) => {
		day.date = new Date(event.target.value)
		// day.date = event.target.value
	}
	const save = async () => {
		// validate here...
		// console.log('save the day', day)
		// console.log('id is currently', id)

		if (!day.user_id) {
			day.user_id = $currentUser.id
		}
		try {
			day.food_total = 0
			day.food_log.entries.forEach((entry) => {
				day.food_total += entry.amt
			})
		} catch (err) {
			console.error('error calculating food total', err)
		}

		const { error } = await supabaseDataService.save_day(day)
		if (error) {
			console.log('error message is: ', error.message)
			if (error.message.startsWith('duplicate key value violates unique constraint')) {
				console.log('DUPLICATE DAY')
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
			// mode = 'view'
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
					// window.location.href = '/calendar'
				}
			},
		})
	}
	const goBack = () => {
		$goto(`/calendar`)
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

		const saved = await openFoodEntryBox(entry, day.food_log.entries.length, true)
		console.log('done calling openFoodEntryBox', saved)
		console.log('day.food_log.entries', day.food_log.entries)
		day.food_log.entries = [...day.food_log.entries]
		save()
	}
	const edit_food_log_entry = async (index) => {
		const saved = await openFoodEntryBox(day.food_log.entries[index], index, false)
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
	}

	const openFoodEntryBox = async (entry: any, index: number, isNew: boolean) => {
		const openFodEntryModalController = await modalController.create({
			component: FoodEntryModal,
			componentProps: {
				entry: entry,
				isNew: isNew,
			},
			showBackdrop: true,
			backdropDismiss: true,
		})

		await openFodEntryModalController.present()
		const { data } = await openFodEntryModalController.onWillDismiss()
		if (data?.data !== null) {
			if (data.data.deleted) {
				// check for deleted entry...
				day.food_log.entries.splice(index, 1)
			} else {
				day.food_log.entries[index] = data.data
			}
			console.log('*** day.food_log.entries', day.food_log.entries)
			return true
		} else {
			return false
		}
	}
	async function upWater() {
		day.water_log.entries.push({
			id: supabaseDataService.gen_random_uuid(),
			amt: 1,
			created: new Date().toISOString(),
		})
		day.water_total++
		save()
	}
	async function downWater() {
		if (day.water_total <= 0) return
		// find the last entry and delete it
		day.water_log.entries.pop()
		day.water_total--
		save()
	}
	function handleNumberValue(event) {
		try {
			day[event.target.name] = parseFloat(event.target.value!) || 0
		} catch (err) {
			console.error('handleNumberValue error', err)
			day[event.target.name] = 0
		}
	}
	function focusOnNumericInput(event) {
		// console.log('event.target.scrollTop', event.target.scrollTop)
		event.target.scrollTop = 0
		try {
			if ((parseFloat(event.target.value!) || 0) === 0) {
				event.target.value = ''
			}
		} catch (err) {
			console.error('error clearing zero value', err)
		}
	}
	function saveOnBlur(event) {
		console.log('*** saveOnBlur', event.target.value)
		save()
	}
	function toggleDatePicker() {
		console.log('** toggleDatePicker')
		const el = document.getElementById('datepicker')
		if (id == 'new') {
			if (el) {
				el.classList.toggle('hidden')
			}
		} else {
			if (!el.classList.contains('hidden')) {
				el.classList.add('hidden')
			}
		}
	}
</script>

<IonPage>
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
			<ion-title on:click={toggleDatePicker}>
				{new Date(
					new Date(day?.date).getTime() + new Date(day?.date).getTimezoneOffset() * 60000
				).toDateString()}
			</ion-title>
			<ion-buttons slot="end">
				<!-- {#if mode === 'view'} -->
				{#if id !== 'new'}
					<ion-button on:click={delete_day}>
						<ion-icon slot="icon-only" icon={trashOutline} />
					</ion-button>
				{/if}
				<!-- <ion-button
						on:click={() => {
							mode = 'edit'
						}}
					>
						<ion-icon slot="icon-only" icon={createOutline} />
					</ion-button> -->
				<!-- {/if} -->
				<!-- {#if mode === 'edit'}
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
				{/if} -->
			</ion-buttons>
		</ion-toolbar>
	</ion-header>
	<ion-content class="ion-padding">
		<!-- center this content -->
		<div class="centered">
			<ion-datetime id="datepicker" class="hidden" on:click={handleDate} />
		</div>

		<ion-grid>
			<ion-row>
				<ion-col style="text-align: left; font-weight: bold;">
					Total: {(day?.food_total || 0).toFixed(2)}
				</ion-col>
				<ion-col style="text-align: right; font-weight: bold;">
					{#if $currentUser?.user_metadata?.daily_budget}
						Left: {($currentUser?.user_metadata?.daily_budget - day?.food_total || 0).toFixed(2)}
					{/if}
				</ion-col>
			</ion-row>
		</ion-grid>
		<ion-list lines="full">
			<ion-reorder-group id="food_log_group" disabled="false" on:ionItemReorder={reorder_food_log}>
				{#if day?.food_log?.entries}
					{#each day?.food_log?.entries as entry, index}
						<ion-item
							on:click={() => {
								edit_food_log_entry(index)
							}}
						>
							<ion-reorder slot="start" />
							<div>
								{entry?.title}<br />
								<span class="description">{entry?.desc || ''}&nbsp;</span>
							</div>
							<ion-note slot="end" class="right">
								<div>
									{(entry?.amt || 0).toFixed(2)}<br />
									<span class="description">&nbsp;{entry?.cat || ''}</span>
								</div>
							</ion-note>
						</ion-item>
					{/each}
				{/if}
			</ion-reorder-group>

			<ion-item lines="none" on:click={add_food_log_entry}>
				<ion-icon icon={addCircleOutline} slot="start" />
				new food entry
			</ion-item>
		</ion-list>
		<!-- {#if mode === 'view' && day?.notes}<div class="ion-padding">{day?.notes}</div>{/if} -->
		<div class="ion-padding">
			<ion-input
				class="notes-box"
				value={day?.notes}
				on:ionChange={handler}
				on:ionBlur={saveOnBlur}
				required
				name="notes"
				type="text"
				placeholder="notes"
			/>
		</div>
	</ion-content>
	<ion-footer>
		<ion-grid>
			<ion-row>
				<ion-col>
					<div class="left">
						<div class="footertitle">Weight</div>
						<div class="footertitle">
							<ion-input
								on:ionChange={handleNumberValue}
								on:ionFocus={focusOnNumericInput}
								on:ionBlur={saveOnBlur}
								name="weight"
								class="weightBox"
								type="decimal"
								inputmode="decimal"
								value={day?.weight}
							/>
						</div>
					</div>
				</ion-col>
				<ion-col>
					<div class="right">
						<div class="footertitle">Water</div>
						<div class="footertitle together">
							<ion-icon
								color={day.water_total <= 0 ? 'medium' : 'dark'}
								icon={removeCircleOutline}
								size="large"
								on:click={downWater}
							/>
							<span class="water-digits">&nbsp;{day.water_total || 0}&nbsp;</span>
							<ion-icon icon={addCircleOutline} size="large" on:click={upWater} />
						</div>
					</div>
				</ion-col>
			</ion-row>
		</ion-grid>
		<br />
	</ion-footer>
</IonPage>

<style>
	.centered {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.hidden {
		display: none;
	}
	.water-digits {
		/* font-size: 2em; */
		/* font-weight: bold; */
		font-size: 2em;
		/* font-family: 'Courier New', Courier, monospace; */
	}
	.water-line {
		display: flex;
		flex-direction: row;
		justify-content: right;
		align-items: center;
	}
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
	.notes-box {
		width: 100% !important;
		border: none;
	}
	.description {
		color: gray;
		font-size: 0.8em;
	}
	.right {
		text-align: right;
	}
	.weightBox {
		height: 50px;
		width: 100px;
		max-width: 100px;
		border: 1px solid rgb(212, 212, 212);
		background-color: var(--ion-background-color) !important;
		border-radius: 5px;
		text-align: center;
	}
	.footertitle {
		font-size: larger;
		text-align: center;
	}
	.left {
		text-align: left;
	}
	.right {
		text-align: right;
	}
	.together {
		page-break-inside: avoid;
	}
</style>
