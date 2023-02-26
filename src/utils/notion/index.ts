import { env } from '@/env.mjs';

import { Client } from '@notionhq/client';

const notion = new Client({
  auth: env.NOTION_TOKEN,
});

export default notion;
