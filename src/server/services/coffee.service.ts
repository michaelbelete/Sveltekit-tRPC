import {
	coffeeListSchema,
	type CoffeeList,
	type GetCoffeeListParam
} from '$server/validations/coffee.schema';
import { TRPCError } from '@trpc/server';

export class CoffeeService {
	private apiURL = 'https://api.sampleapis.com/coffee';

	async getCoffeeList(param: GetCoffeeListParam): Promise<CoffeeList> {
		const { type } = param;

		const response = await fetch(`${this.apiURL}/${type}`);

		if (!response.ok) {
			console.error('Failed to fetch coffee list', response);
			throw new TRPCError({
				code: 'INTERNAL_SERVER_ERROR',
				message: 'Failed to fetch coffee list'
			});
		}

		const data = await response.json();

		const validatedData = coffeeListSchema.safeParse(data);

		if (!validatedData.success) {
			console.error('Invalid coffee list data', validatedData.error);
			throw new TRPCError({
				code: 'INTERNAL_SERVER_ERROR',
				message: 'Invalid coffee list data'
			});
		}

		return validatedData.data;
	}
}
