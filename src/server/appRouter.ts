import { createTRPCRouter, publicProcedure } from '$server/trpcContext';

export const appRouter = createTRPCRouter({
	hello: publicProcedure.query(() => {
		return { message: 'Hello, world!' };
	})
});

export type AppRouter = typeof appRouter;
