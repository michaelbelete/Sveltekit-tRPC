<script lang="ts">
	import { trpc } from '$lib/trpc';
	import { onMount } from 'svelte';

	let message = '';

	onMount(() => {
		trpc.hello.query().then((res) => {
			message = res.message;
		});
	});
</script>

<h1>{message}</h1>
