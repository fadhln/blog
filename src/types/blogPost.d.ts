export type BlogPost = {
  id: string;
  created_time: string;
  last_edited_time: string;
  title: string;
  content: string;
  tags: Array<{ id: string; name: string }>;
  description: string;
};
