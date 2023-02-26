import { technologies, techStackData } from '@/data/techstackData';
import useHover from '@/hooks/useHover';
import cx from '@/utils/cx';

import React, { useEffect, useState } from 'react';

import * as Tooltip from '@radix-ui/react-tooltip';
import { motion } from 'framer-motion';
import Image from 'next/image';

const StackChip: React.FC<{
  content: string;
  setHoverChip: (s: string | undefined) => void;
}> = ({ content, setHoverChip }) => {
  const [chipRef, isChipHover] = useHover();
  useEffect(() => {
    if (isChipHover) {
      setHoverChip(content);
    } else {
      setHoverChip(undefined);
    }
  }, [isChipHover, content, setHoverChip]);

  return (
    <div
      ref={chipRef}
      className="bg-warm-gray-200 whitespace-nowrap cursor-pointer hover:bg-warm-gray-100 hover:dark:bg-warm-gray-600 dark:bg-warm-gray-700 border border-warm-gray-300 dark:border-warm-gray-600 py-0.5 px-2 text-xs font-normal dark:font-light rounded-full transition-all"
    >
      {content}
    </div>
  );
};

const TechStackSection = () => {
  const [hoveredChip, setHoveredChip] = useState<string>();

  return (
    <section
      id="tech-stack"
      className="relative min-h-[15rem] md:min-h-[10rem] mx-auto container px-3 z-20"
    >
      <div className="mb-2 flex justify-end w-full font-light text-sm md:text-base text-center">
        <p>
          <span className="text-rose-500 font-normal">*)</span> I work with a
          lot of stuff
        </p>
      </div>
      <div className="absolute w-full pr-4">
        <motion.div
          variants={{
            offscreen: {
              y: 10,
              opacity: 0,
              transition: {
                type: 'keyframes',
                duration: 0.8,
              },
            },
            onscreen: {
              y: 0,
              opacity: 100,
              transition: {
                type: 'keyframes',
                duration: 0.5,
              },
            },
          }}
          initial={'offscreen'}
          whileInView={'onscreen'}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          className="mr-3 min-w-full bg-warm-gray-100 dark:bg-warm-gray-800 border border-warm-gray-400 dark:border-warm-gray-600 rounded-lg shadow-lg p-8 z-30"
        >
          <h2 className="text-3xl font-normal text-center z-20">
            Tech I&apos;ve tinkered with
          </h2>
          <div className="flex justify-center mt-4">
            <div className="relative overflow-hidden max-w-sm group">
              <div className="absolute top-0 left-0 bg-gradient-to-r pointer-events-none h-[4rem] z-30 w-[4rem] from-warm-gray-100 dark:from-warm-gray-800 to-warm-gray-100/0 dark:to-warm-gray-800/0" />
              <div className="absolute top-0 right-0 bg-gradient-to-l pointer-events-none h-[4rem] z-30 w-[4rem] from-warm-gray-100 dark:from-warm-gray-800 to-warm-gray-100/0 dark:to-warm-gray-800/0" />
              <div className="flex animate-marquee w-fit gap-2 z-30 group-hover:pause">
                {technologies.map((techs) => (
                  <StackChip
                    key={techs}
                    content={techs}
                    setHoverChip={setHoveredChip}
                  />
                ))}
              </div>
              <div className="flex animate-marquee2 absolute top-0 z-10 w-fit gap-2 mx-2 group-hover:pause">
                {technologies.map((techs) => (
                  <StackChip
                    key={techs}
                    content={techs}
                    setHoverChip={setHoveredChip}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 flex justify-around gap-2 mx-auto max-w-6xl flex-wrap">
            {techStackData.map((data) => {
              return (
                <Tooltip.Provider key={data.name} delayDuration={100}>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <div className={'relative w-[4rem] h-[3rem]'}>
                        <Image
                          src={data.src}
                          alt={data.name}
                          fill
                          className={cx(
                            'object-contain transition-opacity invert dark:invert-0',
                            hoveredChip === data.tech
                              ? 'opacity-100'
                              : 'opacity-60 hover:opacity-100'
                          )}
                        />
                      </div>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        className="z-30 bg-warm-gray-300 dark:bg-warm-gray-700 text-warm-gray-900 dark:text-warm-gray-50 px-2 py-1 rounded-lg shadow-md text-sm animate-slideUpAndFade"
                        sideOffset={5}
                        data-side="bottom"
                      >
                        {data.name}
                        <Tooltip.Arrow className="fill-warm-gray-300 dark:fill-warm-gray-700" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </Tooltip.Provider>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
