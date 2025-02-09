<script lang="ts">
	import type { Coffee } from '$server/validations/coffee.schema';

	type CoffeeCardProps = {
		coffee: Coffee;
	};

	let { coffee }: CoffeeCardProps = $props();
</script>

<div class="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-105">
	<img src={coffee.image} alt={coffee.title} class="h-48 w-full object-cover" />
	<div class="p-4">
		<h3 class="mb-2 text-xl font-semibold text-gray-800">{coffee.title}</h3>
		<p class="mb-4 text-gray-600">{coffee.description}</p>
		<div class="mt-auto space-y-4">
			<h4 class="font-medium text-gray-700">Ingredients:</h4>
			<div class="flex flex-wrap gap-2">
				{#each coffee.ingredients as ingredient}
					<span
						class="coffees-center inline-flex rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800"
					>
						{ingredient}
					</span>
				{/each}
			</div>
		</div>
	</div>
</div>
