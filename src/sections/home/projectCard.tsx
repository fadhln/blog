import useHover from '@/hooks/useHover';
import cx from '@/utils/cx';

import React from 'react';

import { motion } from 'framer-motion';

const ProjectCard = () => {
  const content = 'Lorem ipsum dolor sit amet';
  const [cardRef, isCardHover] = useHover();

  return (
    <div
      ref={cardRef}
      className={cx(
        'rounded-lg border border-warm-gray-300 dark:border-warm-gray-700 relative overflow-hidden h-[12rem] hover:scale-[1.01] transition-all duration-150',
        'hover:before:bg-[100%_100%] hover:before:scale-[1.08_1.03] before:z-0 hover:border-rose-600',
        'before:bg-[linear-gradient(130deg,transparent_0%_33%,#f59e0b_66%,#e11d48_100%)]',
        'before:bg-[0%_0%] before:bg-[length:300%_300%] before:content-[""] before:h-full before:left-0 before:pointer-events-none before:absolute before:top-0 before:transition-all before:duration-500 before:w-full'
      )}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2378716c' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div
        className={cx(
          'p-6 absolute z-10 w-full h-full hover:text-warm-gray-50 transition-all'
        )}
      >
        <h4 className="text-3xl font-semibold">Litera News App</h4>
        <motion.p
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
      </div>
    </div>
  );
};

export default ProjectCard;
