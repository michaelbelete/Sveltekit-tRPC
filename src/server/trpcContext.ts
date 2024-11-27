import { TRPCError, initTRPC } from '@trpc/server';
import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import superJSON from 'superjson';
import { ZodError } from 'zod';

export const createSvelteKitTRPCContext =
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	(locals: App.Locals) => (opts: FetchCreateContextFnOptions) => locals;

const t = initTRPC.context<ReturnType<typeof createSvelteKitTRPCContext>>().create({
	transformer: superJSON,
	errorFormatter({ shape, error }) {
		return {
			...shape,
			data: {
				...shape.data,
				zodError: error.cause instanceof ZodError ? error.cause.flatten() : null
			}
		};
	}
});

export const createTRPCRouter = t.router;

export const publicProcedure = t.procedure;

const enforceUserIsAuth = t.middleware(async ({ ctx, next }) => {
	// This is where you would check if the user is authenticated
	// add what you include in ctx in App.Locals in app.d.ts and you can add libraries like Prisma, etc
	// i.e ctx.prisma = new PrismaClient()...etc
	const isLoggedIn = true;

	if (!isLoggedIn) {
		throw new TRPCError({
			code: 'UNAUTHORIZED',
			message: 'User is not authenticated'
		});
	}

	return next({
		ctx
	});
});

export const privateProcedure = t.procedure.use(enforceUserIsAuth);
