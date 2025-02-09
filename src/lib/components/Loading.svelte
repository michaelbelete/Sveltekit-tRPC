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
