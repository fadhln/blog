import { env } from '@/env.mjs';
import notion from '@/utils/notion';

import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '../trpc';

const postMessage = publicProcedure
  .input(
    z.object({
      name: z.string(),
      email: z.string(),
      message: z.string(),
    })
  )
  .mutation(async ({ input }) => {
    const database_id = env.NOTION_INBOX_ID;
    const res = await notion.pages.create({
      parent: { database_id },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: input.name,
              },
            },
          ],
        },
        Message: {
          rich_text: [
            {
              text: {
                content: input.message,
              },
            },
          ],
        },
        Email: {
          rich_text: [
            {
              text: {
                content: input.email,
              },
            },
          ],
        },
      },
    });
    return res;
  });

export const messageRouter = createTRPCRouter({
  postMessage,
});
