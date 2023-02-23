import BlurBlob from '@/components/blurBlob';
import Navbar from '@/components/navbar';
import AboutSection from '@/sections/home/About/AboutSection';
import ExperienceSection from '@/sections/home/Experience/ExperienceSection';
import ProjectSection from '@/sections/home/Project/ProjectSection';
import TechStackSection from '@/sections/home/TechStack/TechStackSection';

import { type NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
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
        <div className="relative">
          <BlurBlob
            pathClassName="fill-amber-500/40"
            className="max-w-[30rem] absolute -top-[40rem] -right-[15rem] rotate-45"
          />
          <BlurBlob
            pathClassName="fill-rose-500/40"
            className="max-w-[30rem] absolute -top-[35rem] -right-[15rem] -rotate-45"
          />
        </div>
      </main>
    </>
  );
};

export default Home;
