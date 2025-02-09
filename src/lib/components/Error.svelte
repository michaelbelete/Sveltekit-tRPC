<script lang="ts">
	let { error } = $props();
</script>

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
