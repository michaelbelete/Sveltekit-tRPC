import { COFFEE_LIST_DEP, COFFEE_SEARCH_PARAM, type CoffeeType } from '$lib/coffee';
import { trpc } from '$lib/trpc';

export async function load({ depends, url }) {
	depends(COFFEE_LIST_DEP);

	const coffeeType = url.searchParams.get(COFFEE_SEARCH_PARAM);

	let type: CoffeeType = 'hot';

	if (coffeeType === 'iced') {
		type = 'iced';
	}

	async function getCoffee() {
		return await trpc.coffee.list.query({
			type: type
		});
	}

	return {
		getCoffee: getCoffee(),
		coffeeType: type
	};
}
