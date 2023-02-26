import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { appRouter } from '@/server/api/root';
import { api } from '@/utils/api';
import cx from '@/utils/cx';
import { isPageObjectResponse } from '@/utils/notion/typeGuard';

import React from 'react';
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

const BlogPost = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { id } = props;
  const post = api.blog.getOnePostDetail.useQuery({ id });

  if (!post.data) {
    return (
      <>
        <Head>
          <title>Fadhlan - Blog</title>
          <meta name="description" content="Made by Muhammad Fadhlan" />
        </Head>
        <Navbar />
        <main className="max-w-3xl  min-h-screen pt-[7rem] pb-10 relative z-20 container mx-auto px-3">
          <svg
            aria-hidden="true"
            className="inline w-8 h-8 mr-2 text-transparent animate-sspin dark:text-transparent fill-rose-500"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{post.data.title}</title>
        <meta name="description" content="Made by Muhammad Fadhlan" />
      </Head>
      <Navbar />
      <main className="max-w-3xl min-h-screen pt-[7rem] pb-10 relative z-20 container mx-auto px-3">
        <h1 className="text-3xl mt-8 font-semibold">{post.data.title}</h1>
        <div className="mt-3 flex justify-between items-center gap-3 opacity-70">
          <div className="flex items-baseline gap-1 text-sm">
            {post.data.tags.map((tag, idx) => {
              return (
                <div key={tag.id} className={'flex items-center gap-1'}>
                  <p>{tag.name}</p>
                  {(post.data?.tags.length ?? 0) - 1 <= idx ? (
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
            {dayjs(post.data.created_time).format('DD/MM/YYYY')}
          </p>
        </div>
        <article className="mt-16">
          <ReactMarkdown
            className={cx(
              'prose prose-headings:font-semibold prose-headings:text-warm-gray-50',
              'prose-p:text-warm-gray-100 prose-a:text-rose-500 prose-code:text-warm-gray-300',
              'prose-strong:text-warm-gray-50',
              'prose-ul:text-warm-gray-200 prose-ol:text-warm-gray-200',
              'prose-hr:border-warm-gray-500',
              'prose-pre:bg-warm-gray-900'
            )}
          >
            {post.data.content}
          </ReactMarkdown>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;

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
