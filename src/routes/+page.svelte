<script lang="ts">
	import { goto, invalidate } from '$app/navigation';
	import { COFFEE_LIST_DEP, COFFEE_SEARCH_PARAM, coffeeType } from '$lib/coffee.js';
	import CoffeeCard from '$lib/components/CoffeeCard.svelte';
	import Error from '$lib/components/Error.svelte';
	import Loading from '$lib/components/Loading.svelte';

	let { data } = $props();

	async function loadCoffeeList(coffee: string) {
		await goto(`?${COFFEE_SEARCH_PARAM}=${coffee}`, { keepFocus: true });
		invalidate(COFFEE_LIST_DEP);
	}
</script>

<div class="min-h-screen bg-gray-50">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<div class="mb-8 text-center">
			<h1 class="mb-2 text-4xl font-bold text-gray-900">Coffee Explorer</h1>
			<p class="text-lg text-gray-600">Select your preferred coffee style below</p>
		</div>

		<div class="mb-12 flex justify-center space-x-2">
			{#each coffeeType as coffee}
				<button
					onclick={() => loadCoffeeList(coffee)}
					class="rounded-full px-6 py-2 font-medium transition-all"
					class:active-tab={data.coffeeType === coffee}
					class:inactive-tab={data.coffeeType !== coffee}
				>
					{coffee}
				</button>
			{/each}
		</div>

		{#await data.getCoffee}
			<Loading />
		{:then coffees}
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each coffees as coffee}
					<CoffeeCard {coffee} />
				{/each}
			</div>
		{:catch error}
			<Error {error} />
		{/await}
	</div>
</div>

<style lang="postcss">
	.active-tab {
		@apply bg-amber-800 text-white;
	}

	.inactive-tab {
		@apply bg-amber-100 text-amber-800 hover:bg-amber-200;
	}
</style>
