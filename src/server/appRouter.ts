import { createTRPCRouter, publicProcedure } from '$server/trpcContext';
import { coffeeRouter } from './routers/coffee.router';

export const appRouter = createTRPCRouter({
	hello: publicProcedure.query(() => {
		return { message: 'Hello, world!' };
	}),
	coffee: coffeeRouter
});

export type AppRouter = typeof appRouter;
