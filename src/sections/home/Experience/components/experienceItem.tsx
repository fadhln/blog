import cx from '@/utils/cx';

import React from 'react';

import { motion } from 'framer-motion';

const ExperienceItem: React.FC<{
  company: string;
  position: string;
  year: string;
  desc: string;
  isCurrent?: boolean;
  isLast?: boolean;
}> = ({ company, position, year, desc, isCurrent, isLast }) => {
  return (
    <motion.div className="flex gap-4">
      <div className="flex items-center flex-col relative">
        <div className="h-[1.75rem] aspect-square rounded-full z-20 bg-warm-gray-50 flex items-center justify-center dark:bg-warm-gray-900">
          <div className="h-[1.25rem] rounded-full border aspect-square mt-0.5 border-warm-gray-400 dark:border-warm-gray-600" />
        </div>
        {!isLast && (
          <div className="h-[120%] w-[1px] bg-warm-gray-400 dark:bg-warm-gray-600 absolute z-10" />
        )}
      </div>
      <motion.div
        className="flex flex-1 flex-col"
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
      >
        <p className="text-xl font-semibold">{company}</p>
        <p
          className={cx(
            'text-lg font-medium leading-4 mt-1',
            isCurrent ? 'text-amber-500' : 'text-rose-500'
          )}
        >
          {position}
        </p>
        <p className="text-lg font-medium">{year}</p>
        <p className="text-sm md:text-base max-w-4xl">{desc}</p>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceItem;
