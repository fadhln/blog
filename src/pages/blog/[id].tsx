import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { appRouter } from '@/server/api/root';
import { type BlogPost } from '@/types/blogPost';
import { api } from '@/utils/api';
import cx from '@/utils/cx';
import { isPageObjectResponse } from '@/utils/notion/typeGuard';

import React, { useEffect, useState } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import ReactMarkdown from 'react-markdown';

import { createProxySSGHelpers } from '@trpc/react-query/ssg';
import dayjs from 'dayjs';
import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import Head from 'next/head';

const BlogPostPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { id, trpcState } = props;
  const post = api.blog.getOnePostDetail.useQuery({ id });
  const prefetchData = trpcState.queries[0]?.state.data as BlogPost;

  const [currData, setCurrData] = useState<BlogPost>(prefetchData);
  useEffect(() => {
    if (post.data) {
      setCurrData(post.data);
    }
  }, [post.data]);

  return (
    <>
      <Head>
        <title>{currData.title}</title>
        <meta name="description" content="Made by Muhammad Fadhlan" />
      </Head>
      <Navbar />
      <main className="max-w-3xl min-h-screen pt-[7rem] pb-10 relative z-20 container mx-auto px-3">
        <h1 className="text-3xl mt-8 font-semibold">{currData.title}</h1>
        <div className="mt-3 flex justify-between items-center gap-3 opacity-70">
          <div className="flex items-baseline gap-1 text-sm">
            {currData.tags.map((tag, idx) => {
              return (
                <div key={tag.id} className={'flex items-center gap-1'}>
                  <p>{tag.name}</p>
                  {(currData?.tags.length ?? 0) - 1 <= idx ? (
                    <></>
                  ) : (
                    <RxDotFilled />
                  )}
                </div>
              );
            })}
          </div>
          <div className="h-[1px] bg-warm-gray-400 dark:bg-warm-gray-600 flex-1 z-20" />
          <p className="text-sm z-20">
            {dayjs(currData.created_time).format('DD/MM/YYYY')}
          </p>
        </div>
        <article className="mt-16">
          <ReactMarkdown
            className={cx(
              'prose prose-headings:font-semibold prose-headings:text-warm-gray-900 dark:prose-headings:text-warm-gray-50',
              'prose-p:text-warm-gray-800 dark:prose-p:text-warm-gray-100 prose-a:text-rose-500 prose-code:text-warm-gray-600 dark:prose-code:text-warm-gray-300',
              'prose-strong:text-warm-gray-900 dark:prose-strong:text-warm-gray-50',
              'prose-ul:text-warm-gray-700 prose-ol:text-warm-gray-700 dark:prose-ul:text-warm-gray-200 dark:prose-ol:text-warm-gray-200',
              'prose-hr:border-warm-gray-500 prose-img:rounded-lg',
              'prose-pre:bg-warm-gray-50 prose-pre:border prose-pre:shadow-sm dark:prose-pre:border-warm-gray-800 dark:prose-pre:bg-warm-gray-900'
            )}
          >
            {currData.content}
          </ReactMarkdown>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogPostPage;

export async function getStaticProps(
  context: GetStaticPropsContext<{ id: string }>
) {
  const ssg = createProxySSGHelpers({
    router: appRouter,
    ctx: context,
  });
  const id = context.params?.id as string;
  await ssg.blog.getOnePostDetail.prefetch({ id });
  return {
    props: {
      trpcState: ssg.dehydrate(),
      id,
    },
    revalidate: 1,
  };
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  const ssg = createProxySSGHelpers({
    router: appRouter,
    ctx: context,
  });

  const res = await ssg.blog.getAllPost.fetch({ status: 'Published' });

  return {
    paths: res.results.map((result) => {
      return {
        params: {
          id: isPageObjectResponse(result) ? result.id : '',
        },
      };
    }),
    fallback: 'blocking',
  };
};
