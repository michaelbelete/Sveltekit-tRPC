<script lang="ts">
	import { trpc } from '$lib/trpc';
	import { onMount } from 'svelte';

	let message = '';

	let { data } = $props();

	onMount(() => {
		trpc.hello.query().then((res) => {
			message = res.message;
		});
	});
</script>

{#await data.getCoffee}
	<p>Loading...</p>
{:then coffee}
	<pre>
		{JSON.stringify(coffee, null, 2)}
	</pre>
{:catch error}
	<p>{error.message}</p>
{/await}
