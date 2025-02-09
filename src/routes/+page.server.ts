import { trpcServer } from '$lib/trpc';
import type { GetCoffeeListParam } from '$server/validations/coffee.schema.js';

export async function load({ fetch }) {
	let type: GetCoffeeListParam['type'] = 'iced';

	async function getCoffee() {
		return await trpcServer(fetch).coffee.list.query({
			type: type
		});
	}

	return {
		hello: await trpcServer(fetch).hello.query(),
		getCoffee: getCoffee()
	};
}
