import { createTRPCProxyClient, httpBatchLink, getFetch, httpLink } from '@trpc/client';
import type { AppRouter } from '$server/appRouter';
import superJSON from 'superjson';

type FetchEsque = ReturnType<typeof getFetch>;

export const trpc = createTRPCProxyClient<AppRouter>({
	transformer: superJSON,
	links: [httpBatchLink({ url: '/api/trpc' })]
});

/**
 * The same as `trpc`, but doesn't batch. Use this when you're batching queries
 * that have too large request headers (e.g. filter queries) to avoid 431 Request Header Fields Too Large.
 */
export const trpcNoBatch = createTRPCProxyClient<AppRouter>({
	transformer: superJSON,
	links: [httpLink({ url: '/api/trpc' })]
});

export const trpcServer = (fetch: FetchEsque) =>
	createTRPCProxyClient<AppRouter>({
		transformer: superJSON,
		links: [httpBatchLink({ fetch, url: '/api/trpc' })]
	});
