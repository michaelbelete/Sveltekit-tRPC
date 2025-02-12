import { createSvelteKitTRPCContext } from '$server/trpcContext';
import { appRouter } from '$server/appRouter';
import type { RequestHandler } from '@sveltejs/kit';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

export const GET = ((event) =>
	fetchRequestHandler({
		req: event.request,
		router: appRouter,
		endpoint: '/api/trpc',
		createContext: createSvelteKitTRPCContext(event.locals)
	})) satisfies RequestHandler;

export const POST = ((event) =>
	fetchRequestHandler({
		req: event.request,
		router: appRouter,
		endpoint: '/api/trpc',
		createContext: createSvelteKitTRPCContext(event.locals)
	})) satisfies RequestHandler;
