import { env } from '@/env.mjs';
import notion from '@/utils/notion';

import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '../trpc';

const getAllPost = publicProcedure
  .input(
    z.object({
      status: z.enum(['Published', 'Archived']),
      start_cursor: z.string().optional(),
      page_size: z.number().optional().default(15),
    })
  )
  .query(async ({ input }) => {
    const database_id = env.NOTION_DATABASE_ID;
    const res = await notion.databases.query({
      database_id,
      filter: {
        property: 'Status',
        select: {
          equals: input.status,
        },
      },
      page_size: input.page_size,
      start_cursor: input.start_cursor,
    });

    return res;
  });

export const blogRouter = createTRPCRouter({
  getAllPost,
});
