<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { checkmarkOutline } from 'ionicons/icons'
	import SupabaseDataService from '$services/supabase.data.service'
	import { goto } from '@roxi/routify'
	import SupabaseAuthService from '$services/supabase.auth.service'
	import type { User } from '@supabase/supabase-js'

	const supabaseDataService = SupabaseDataService.getInstance()

	let days: any[]; // = cache || []
	let settings: any = {
		settings: {
			daily_budget: 0,
			target_weight: 0,
		}
	};
	let user: User = null
	let userSubscription: any

	onDestroy(() => {
		try {
			userSubscription.unsubscribe()
		} catch (err) {
			console.error('error unsubscribing', err)
		}
	})


	onMount(async () => {
		userSubscription = SupabaseAuthService.user.subscribe((newuser: User | null) => {
			user = newuser
			//console.log('got user:', user)
		})
		const { data, error } = await supabaseDataService.getSettings();
		console.log('*** data', data, error);
		settings = data || {};
		if (!settings.settings) {
			settings.settings = {
				daily_budget: 0,
				target_weight: 0,
			}
		}
	})

	const gotoDay = (id: string) => {
		$goto(`/day/[id]`,{id})
	}
	const save = async () => {
		if (!settings.user_id) {settings.user_id = user?.id || null}
		if (!settings.settings) {settings.settings = {}}
		if (!settings.settings.daily_budget) {settings.settings.daily_budget = 0}
		if (!settings.settings.target_weight) {settings.settings.target_weight = 0}
		console.log('calling saveSettings', settings)

		const { data, error } = await supabaseDataService.saveSettings(settings);
		if (error) {
			console.log('save error', error)
		} else {
			console.log('save results', data, error)
		}
	}
	function focusOnNumericInput(event) {
        try {
            if ((parseFloat(event.target.value!) || 0) === 0) {
                event.target.value = '';
            }
        } catch (err) {
            console.error('error clearing zero value', err)
        }
        // put cursor at end of input
        event.target.getInputElement().then((input) => {
            console.log('input', input)
            // set cursor to end of input
            input.type = 'text';
            input.setSelectionRange(input.value.length, input.value.length);
            input.type = 'number';
        })
    }

</script>

<ion-header translucent="true">
	<ion-toolbar>
		<ion-buttons slot="start">
			<ion-menu-button />
		</ion-buttons>
		<ion-title>Settings</ion-title>
		<ion-buttons slot="end">
			<ion-button on:click={save}>
				<ion-icon slot="icon-only" icon={checkmarkOutline} />
			</ion-button>				
		</ion-buttons>
	</ion-toolbar>
</ion-header>

<ion-content class="ion-padding">
	<ion-list>
		<ion-item>
			<ion-label>Daily Budget</ion-label>
			<ion-input type="number" class="short"
				value={settings?.settings?.daily_budget} 
				on:ionFocus={focusOnNumericInput}
				on:ionChange={(e) => settings.settings.daily_budget = e.detail.value}>
			</ion-input>
		</ion-item>
		<ion-item>
			<ion-label>Target Weight</ion-label>
			<ion-input type="number" class="short"
				value={settings?.settings?.target_weight} 
				on:ionFocus={focusOnNumericInput}
				on:ionChange={(e) => settings.settings.target_weight = e.detail.value}>
			</ion-input>
		</ion-item>
		<!-- <ion-item>
			<ion-label position="stacked">Target Date</ion-label>
			<ion-datetime display-format="MMM DD, YYYY" value={settings?.target_date} on:ionChange={(e) => settings.target_date = e.detail.value}></ion-datetime>
		</ion-item> -->
	</ion-list>
	<pre>{JSON.stringify(settings,null,2)}</pre>
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
	.short {
		width: 80px;
		max-width: 80px;
		text-align: right;
	}
	.description {
		color: gray;
		font-size: 0.8em;
	}
	.right {
		text-align: right;
	}

</style>
