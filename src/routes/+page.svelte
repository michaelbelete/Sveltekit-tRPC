<script lang="ts">
	import { goto, invalidate } from '$app/navigation';
	import { COFFEE_LIST_DEP, COFFEE_SEARCH_PARAM, coffeeType } from '$lib/coffee.js';

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
					class="rounded-full px-6 py-2 font-medium transition-all
          {coffee === data.coffeeType
						? 'bg-amber-800 text-white'
						: 'bg-amber-100 text-amber-800 hover:bg-amber-200'}"
				>
					{coffee}
				</button>
			{/each}
		</div>

		{#await data.getCoffee}
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each Array(6) as _}
					<div class="animate-pulse rounded-lg bg-white p-4 shadow-md">
						<div class="mb-4 h-48 rounded-lg bg-gray-200"></div>
						<div class="mb-2 h-4 w-3/4 rounded bg-gray-200"></div>
						<div class="mb-4 h-4 w-1/2 rounded bg-gray-200"></div>
						<div class="space-y-2">
							<div class="h-3 w-full rounded bg-gray-200"></div>
							<div class="h-3 w-5/6 rounded bg-gray-200"></div>
						</div>
					</div>
				{/each}
			</div>
		{:then coffee}
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each coffee as item}
					<div
						class="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-105"
					>
						<img src={item.image} alt={item.title} class="h-48 w-full object-cover" />
						<div class="p-4">
							<h3 class="mb-2 text-xl font-semibold text-gray-800">{item.title}</h3>
							<p class="mb-4 text-gray-600">{item.description}</p>
							<div class="mt-auto space-y-4">
								<h4 class="font-medium text-gray-700">Ingredients:</h4>
								<div class="flex flex-wrap gap-2">
									{#each item.ingredients as ingredient}
										<span
											class="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800"
										>
											{ingredient}
										</span>
									{/each}
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{:catch error}
			<div class="rounded border-l-4 border-red-400 bg-red-50 p-4">
				<div class="flex items-center">
					<svg class="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<p class="ml-3 text-red-700">{error.message}</p>
				</div>
			</div>
		{/await}
	</div>
</div>
