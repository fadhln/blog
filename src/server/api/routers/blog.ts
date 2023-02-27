import { env } from '@/env.mjs';
import { type BlogPost } from '@/types/blogPost';
import notion from '@/utils/notion';
import { isPageObjectResponse } from '@/utils/notion/typeGuard';

import { NotionToMarkdown } from 'notion-to-md';
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

const getOnePostDetail = publicProcedure
  .input(
    z.object({
      id: z.string(),
    })
  )
  .query(async ({ input }) => {
    const n2m = new NotionToMarkdown({ notionClient: notion });
    const mdBlocks = await n2m.pageToMarkdown(input.id);
    const mdString = n2m.toMarkdownString(mdBlocks);

    const notionRes = await notion.pages.retrieve({
      page_id: input.id,
    });

    if (isPageObjectResponse(notionRes)) {
      const titleProps = notionRes.properties['Title'];
      const tagProps = notionRes.properties['Tags'];

      const res: BlogPost = {
        id: notionRes.id,
        created_time: notionRes.created_time,
        last_edited_time: notionRes.last_edited_time,
        title:
          titleProps?.type === 'title'
            ? titleProps.title[0]?.plain_text ?? ''
            : '',
        tags:
          tagProps?.type === 'multi_select'
            ? tagProps.multi_select.map((t) => ({
                id: t.id,
                name: t.name,
              }))
            : [],
        content: mdString,
      };

      return res;
    } else {
      return undefined;
    }
  });

export const blogRouter = createTRPCRouter({
  getAllPost,
  getOnePostDetail,
});
