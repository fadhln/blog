import SectionHeading from '@/components/sectionHeading';

import React from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';

import ExperienceItem from './components/experienceItem';

const ExperienceSection = () => {
  return (
    <section className="mx-auto container mt-56 px-3 relative z-20">
      <SectionHeading name={'experience'} />
      <p className="mt-24 max-w-lg">
        I love building stuff. I have been building tech solutions that ranging
        from full-stack web application down to low-level Internet of Things
        products.
      </p>
      <motion.div
        className="mt-8 flex flex-col gap-3"
        initial="offscreen"
        whileInView="onscreen"
        transition={{
          staggerChildren: 0.25,
          delayChildren: 0.2,
        }}
      >
        <ExperienceItem
          company="Shopee"
          position="Junior Engineer"
          year="2022 - Present"
          desc="I am currently working at Sea Labs Indonesia (Shopee) as a Junior
          Engineer. I am trained to utilize React and Go for industry compliant
          code."
          isCurrent
        />
        <ExperienceItem
          company="Prosa AI"
          position="Front-end Engineer Intern"
          year="2022"
          desc="Contribute into building a production-grade SaaS with Next.JS and Material UI. 
          Practizing Agile with Git Flow Paradigm to collaborate asynchronously between team"
        />
        <ExperienceItem
          company="XL Axiata"
          position="IoT Engineer Intern"
          year="2021"
          desc="Led the Front-end Development team in building dashboard for monitoring IoT product"
          isLast
        />
      </motion.div>
      <div className="text-center mt-16 font-light text-sm">
        More complete information can be seen in my{' '}
        <Link
          href="https://drive.google.com/file/d/1lbOeWQ-blvLejchyVffinvH_5_K6Bymj/view?usp=sharing"
          target={'_blank'}
          className="font-medium underline"
        >
          Resume
        </Link>
        .
      </div>
    </section>
  );
};

export default ExperienceSection;
