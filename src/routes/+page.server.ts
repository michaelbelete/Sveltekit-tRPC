import { trpcServer } from '$lib/trpc';

export async function load({ fetch }) {
	return {
		hello: await trpcServer(fetch).hello.query()
	};
}
