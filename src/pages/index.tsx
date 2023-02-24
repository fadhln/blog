import BlurBlob from '@/components/blurBlob';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import AboutSection from '@/sections/home/About/AboutSection';
import ContactSection from '@/sections/home/Contact/ContactSection';
import ExperienceSection from '@/sections/home/Experience/ExperienceSection';
import ProjectSection from '@/sections/home/Project/ProjectSection';
import TechStackSection from '@/sections/home/TechStack/TechStackSection';

// import { api } from '@/utils/api';
import { type NextPage } from 'next';
import Head from 'next/head';

// import { useEffect } from 'react';

const Home: NextPage = () => {
  // const blogPosts = api.blog.getAllPost.useQuery({
  //   status: "Published",
  // })

  // useEffect(() => {
  //   if(blogPosts.isSuccess) {
  //     console.log(blogPosts.data)
  //   }
  // }, [blogPosts])

  return (
    <>
      <Head>
        <title>Fadhlan Personal Page</title>
        {/* TODO: change description */}
        <meta name="description" content="Made by Muhammad Fadhlan" />
      </Head>
      <Navbar />
      <main className="min-h-screen pt-[4.5rem] pb-10 relative">
        <div className="relative">
          <div className="absolute z-0 -translate-y-[60%] left-[50%] -translate-x-1/2 max-w-[90vw] overflow-hidden flex item-center justify-center">
            <BlurBlob
              className="w-[150vw]"
              pathClassName="fill-warm-gray-300 dark:fill-warm-gray-700"
            />
          </div>
        </div>
        <AboutSection />
        <TechStackSection />
        <ProjectSection />
        <ExperienceSection />
        <div className="relative z-10">
          <BlurBlob
            pathClassName="fill-amber-500/40"
            className="max-w-[30rem] absolute -top-[40rem] -right-[15rem] rotate-45 z-10"
          />
          <BlurBlob
            pathClassName="fill-rose-500/40"
            className="max-w-[30rem] absolute -top-[35rem] -right-[15rem] -rotate-45 z-10"
          />
        </div>
        <ContactSection />
        <div className="relative">
          <div className="absolute z-0 left-[50%] -translate-x-1/2 max-w-[90vw] overflow-hidden flex item-center justify-center">
            <BlurBlob
              className="w-[150vw]"
              pathClassName="fill-warm-gray-300 dark:fill-warm-gray-700"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
