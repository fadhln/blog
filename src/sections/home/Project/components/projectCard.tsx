import useHover from '@/hooks/useHover';
import cx from '@/utils/cx';

import React from 'react';
import { HiArrowRight } from 'react-icons/hi2';

import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const Chip: React.FC<{ content: string }> = ({ content }) => {
  return (
    <div className="line-clamp-1 transition-all cursor-default bg-warm-gray-900 text-warm-gray-50 group-hover:bg-transparent group-hover:text-warm-gray-50 dark:bg-warm-gray-50 rounded-full py-0.5 px-3 dark:text-warm-gray-900 text-xs border border-warm-gray-200 font-semibold uppercase">
      {content}
    </div>
  );
};

const ProjectCard: React.FC<{
  title: string;
  desc: string;
  href: string;
  techStacks: string[];
}> = ({ title, desc, href, techStacks }) => {
  const content = desc;
  const [cardRef, isCardHover] = useHover();
  const router = useRouter();

  return (
    <motion.div
      ref={cardRef}
      onClick={() => {
        void router.push(href);
      }}
      className={cx(
        'cursor-pointer rounded-lg border border-warm-gray-300 dark:border-warm-gray-700 relative overflow-hidden h-[18rem] md:h-[12rem] transition-all duration-150',
        'hover:before:bg-[100%_100%] hover:before:scale-[1.08_1.03] before:z-0 hover:border-rose-600 group',
        'before:bg-[linear-gradient(130deg,transparent_0%_33%,#f59e0b_66%,#e11d48_100%)]',
        'before:bg-[0%_0%] before:bg-[length:300%_300%] before:content-[""] before:h-full before:left-0 before:pointer-events-none before:absolute before:top-0 before:transition-all before:duration-500 before:w-full'
      )}
      variants={{
        offscreen: {
          opacity: 0,
          x: -10,
        },
        onscreen: {
          opacity: 1,
          x: 0,
          transition: {
            type: 'keyframes',
            duration: 0.2,
            ease: 'easeInOut',
          },
        },
      }}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2378716c' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div
        className={cx(
          'p-4 md:p-6 absolute flex flex-col z-10 w-full h-full hover:text-warm-gray-50 transition-all'
        )}
      >
        <div className="flex items-center justify-between gap-2">
          <h4 className="text-xl md:text-3xl font-semibold">{title}</h4>
          {isCardHover && <HiArrowRight />}
        </div>
        <motion.p
          className="text-sm lg:text-base mt-2 line-clamp-3"
          animate={isCardHover ? 'show' : 'hidden'}
          variants={{
            show: {
              transition: { staggerChildren: 0.1, delayChildren: 0.2 },
            },
            hidden: {
              transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
              },
            },
          }}
        >
          {content.split(' ').map((word, idx) => {
            return (
              <motion.span
                key={`${idx}-${word}`}
                initial={{
                  opacity: 0,
                  y: -5,
                }}
                variants={{
                  show: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.01,
                    },
                  },
                  hidden: {
                    y: -5,
                    opacity: 0,
                  },
                }}
              >
                {word}{' '}
              </motion.span>
            );
          })}
        </motion.p>
        <div className="flex-1 flex items-end">
          <div className="flex items-center justify-start gap-2 flex-wrap max-h-[3.5rem] overflow-hidden">
            {techStacks.map((c) => (
              <Chip content={c} key={c} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
