import React from 'react';

import { motion } from 'framer-motion';

import TagAccent from './tagAccent';

const AboutSection = () => {
  return (
    <section
      className="h-[95vh] flex flex-col items-center justify-center relative -z-0"
      id="about"
    >
      <div className="absolute -top-10 -left-5">
        <TagAccent />
      </div>
      <div className="absolute -bottom-16 right-2 rotate-180">
        <TagAccent />
      </div>
      <div className="relative">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="260"
          height="26"
          viewBox="0 0 260 26"
          fill="none"
          className="w-[10rem] sm:w-auto absolute left-1/2 -translate-x-1/2 md:-translate-x-[4rem] -bottom-8 z-20"
          initial="hidden"
          animate="visible"
        >
          <motion.path
            d="M3.20348 12.2948C68.845 -1.69445 137.837 2.36491 204.317 6.33276C220.076 7.27336 236.647 6.94799 252.194 10.0458C253.531 10.3123 260.821 12.204 255.218 11.9373C232.948 10.8772 211.807 10.6939 189.5 10.5C160.133 10.2447 150.662 11.1928 121.5 15C112.456 16.1807 102.895 16.9994 94.1322 19.6402C85.1567 22.345 113.018 20.3515 122.084 22.7344"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: (i) => {
                const delay = 1 + i * 0.5;
                return {
                  pathLength: 1,
                  opacity: 1,
                  transition: {
                    pathLength: {
                      delay,
                      type: 'spring',
                      duration: 1.5,
                      bounce: 0,
                    },
                    opacity: { delay, duration: 0.01 },
                  },
                };
              },
            }}
            stroke="#F43F5E"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </motion.svg>
        <h1 className="z-30 text-center font-mono text-4xl sm:text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-[300deg] from-warm-gray-900 to-warm-gray-900/50 dark:from-warm-gray-50 dark:to-warm-gray-50/70">
          Hi, My Name <br /> is{' '}
          <span className="font-bold z-50 text-warm-gray-900 dark:text-warm-gray-50">
            Fadhlan
          </span>
        </h1>
      </div>
      <p className="mt-16 font-light text-sm md:text-base text-center">
        I am a Software Engineer, with a little bit of everything
        <span className="text-rose-500 font-normal">*</span>
      </p>
    </section>
  );
};

export default AboutSection;
