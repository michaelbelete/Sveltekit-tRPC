import { z } from 'zod';
import { coffeeType } from '$lib/coffee';

export const coffeeSchema = z.object({
	title: z.string(),
	description: z.string(),
	ingredients: z.array(z.string()),
	image: z.string().url(),
	id: z.number()
});

export const getCoffeeListParamSchema = z.object({
	type: z.enum(coffeeType).default(coffeeType['0'])
});

export const coffeeListSchema = z.array(coffeeSchema);

export type Coffee = z.infer<typeof coffeeSchema>;
export type CoffeeList = z.infer<typeof coffeeListSchema>;
export type GetCoffeeListParam = z.infer<typeof getCoffeeListParamSchema>;
