import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { api } from '@/utils/api';
import { isPageObjectResponse } from '@/utils/notion/typeGuard';

import React from 'react';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { RxDotFilled } from 'react-icons/rx';

import dayjs from 'dayjs';
import { type NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Blog: NextPage = () => {
  const blogPosts = api.blog.getAllPost.useQuery({ status: 'Published' });

  return (
    <>
      <Head>
        <title>Fadhlan - Blog</title>
        {/* TODO: change description */}
        <meta name="description" content="Made by Muhammad Fadhlan" />
      </Head>
      <Navbar />
      <main className="max-w-3xl  min-h-screen pt-[7rem] pb-10 relative z-20 container mx-auto px-3">
        <h1 className="font-mono font-bold text-xl">Blog</h1>
        <p className="mt-4">
          Brain dumps and explorations. A{' '}
          <a
            href="https://maggieappleton.com/garden-history"
            className="inline-flex items-center gap-1 underline"
            target={'_blank'}
            rel="noreferrer"
          >
            {' '}
            digital garden <HiArrowTopRightOnSquare />
          </a>
          , if you will. Posts here are unpolished and unfinished. This is my
          attempt to do public learning.
        </p>
        <div className="mt-8 flex flex-col gap-4">
          {blogPosts.isSuccess ? (
            blogPosts.data.results.map((result) => {
              if (isPageObjectResponse(result)) {
                const titleProps = result.properties['Title'];
                const tagsProps = result.properties['Tags'];

                return (
                  <Link
                    key={result.id}
                    className="flex items-center justify-between gap-3 group relative"
                    href={`/blog/${result.id}`}
                  >
                    <div className="z-20 max-w-lg leading-5">
                      <p className="font-semibold group-hover:underline">
                        {titleProps?.type === 'title' ? (
                          titleProps.title[0]?.plain_text
                        ) : (
                          <></>
                        )}
                      </p>
                      <div className="flex items-baseline gap-1 text-sm opacity-70">
                        {tagsProps?.type === 'multi_select' ? (
                          tagsProps.multi_select.map((tag, idx) => {
                            return (
                              <div
                                key={tag.id}
                                className={'flex items-center gap-1'}
                              >
                                <p>{tag.name}</p>
                                {tagsProps.multi_select.length - 1 <= idx ? (
                                  <></>
                                ) : (
                                  <RxDotFilled />
                                )}
                              </div>
                            );
                          })
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                    <div className="h-[1px] bg-warm-gray-400 dark:bg-warm-gray-600 flex-1 z-20" />
                    <p className="text-sm z-20">
                      {dayjs(result.created_time).format('DD/MM/YYYY')}
                    </p>
                    <div className="opacity-0 scale-[0.99] group-hover:opacity-10 group-hover:scale-100 transition-all absolute bg-gradient-to-br from-amber-500 to-rose-500 z-0 h-[calc(100%+15px)] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[calc(100%+20px)] rounded-lg" />
                  </Link>
                );
              } else {
                return <></>;
              }
            })
          ) : (
            <>
              <div className="flex flex-col gap-2">
                <div className="bg-warm-gray-500/30 animate-pulse h-6 w-[80%] rounded-sm" />
                <div className="bg-warm-gray-500/30 animate-pulse h-3 w-[50%] rounded-sm" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="bg-warm-gray-500/30 animate-pulse h-6 w-[80%] rounded-sm" />
                <div className="bg-warm-gray-500/30 animate-pulse h-3 w-[50%] rounded-sm" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="bg-warm-gray-500/30 animate-pulse h-6 w-[80%] rounded-sm" />
                <div className="bg-warm-gray-500/30 animate-pulse h-3 w-[50%] rounded-sm" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="bg-warm-gray-500/30 animate-pulse h-6 w-[80%] rounded-sm" />
                <div className="bg-warm-gray-500/30 animate-pulse h-3 w-[50%] rounded-sm" />
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
