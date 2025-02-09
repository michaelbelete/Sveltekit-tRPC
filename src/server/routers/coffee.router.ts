import { CoffeeService } from '$server/services/coffee.service';
import { createTRPCRouter, publicProcedure } from '$server/trpcContext';
import { getCoffeeListParamSchema } from '$server/validations/coffee.schema';

export const coffeeRouter = createTRPCRouter({
	list: publicProcedure.input(getCoffeeListParamSchema).query(async ({ input }) => {
		return await new CoffeeService().getCoffeeList(input);
	})
});
