import SectionHeading from '@/components/sectionHeading';

import React from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';

import ProjectCard from './components/projectCard';

const ProjectSection = () => {
  return (
    <section className="mx-auto container mt-56 px-3 relative z-20">
      <SectionHeading name={'project'} />
      <motion.div
        className="grid grid-cols-2 gap-2 md:gap-6 mt-24"
        initial="offscreen"
        whileInView="onscreen"
        transition={{
          staggerChildren: 0.25,
          delayChildren: 0.2,
        }}
      >
        <ProjectCard
          title="Murakali E-Commerce"
          desc="Fully working E-Commerce made from scratch"
          href="#"
          techStacks={['Next.Js', 'Tailwind', 'Go', 'Redis']}
        />
        <ProjectCard
          title="Litera News App"
          desc="CRUD News Application with simple Digital Rights Management"
          href="#"
          techStacks={['React', 'Vite', 'Go', 'Postgres']}
        />
        <ProjectCard
          title="Personal Webpage"
          desc="This website that you are seeing right now"
          href="#"
          techStacks={['Next.Js', 'Framer Motion', 'Notion API']}
        />
        <ProjectCard
          title="Smart Water Meter"
          desc="Embedded system to read Water Meter using on-cloud AI"
          href="#"
          techStacks={['ESP32', 'Tensorflow', 'Next.Js']}
        />
      </motion.div>
      <div className="text-center mt-16 font-light text-sm">
        Check out other stuff I built on{' '}
        <Link
          href="https://github.com/fadhln"
          className="font-medium underline"
        >
          my GitHub
        </Link>
        .
      </div>
    </section>
  );
};

export default ProjectSection;
