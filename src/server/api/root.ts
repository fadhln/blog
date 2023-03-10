import { blogRouter } from '@/server/api/routers/blog';
import { exampleRouter } from '@/server/api/routers/example';
import { createTRPCRouter } from '@/server/api/trpc';

import { messageRouter } from './routers/message';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  blog: blogRouter,
  message: messageRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
