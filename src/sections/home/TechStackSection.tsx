import React from 'react';

const StackChip: React.FC<{ content: string }> = ({ content }) => {
  return (
    <div className="bg-warm-gray-200 whitespace-nowrap dark:bg-warm-gray-700 border border-warm-gray-300 dark:border-warm-gray-600 py-0.5 px-2 text-xs font-normal dark:font-light rounded-full">
      {content}
    </div>
  );
};

const TechStackSection = () => {
  return (
    <section id="tech-stack" className="mx-auto container">
      <div className="mb-2 flex justify-end w-full font-light text-sm md:text-base text-center">
        <p>
          <span className="text-rose-500 font-normal">*)</span> I work with a
          lot of stuff
        </p>
      </div>
      <div className="bg-warm-gray-100 dark:bg-warm-gray-800 border border-warm-gray-400 dark:border-warm-gray-600 rounded-lg shadow-lg p-8 z-30">
        <h2 className="text-3xl font-normal text-center">
          Tech I&apos;ve tinkered with
        </h2>
        <div className="flex justify-center mt-4">
          <div className="relative overflow-hidden max-w-sm">
            <div className="absolute top-0 left-0 bg-gradient-to-r pointer-events-none h-[4rem] z-30 w-[4rem] from-warm-gray-100 to-warm-gray-100/0" />
            <div className="absolute top-0 right-0 bg-gradient-to-l pointer-events-none h-[4rem] z-30 w-[4rem] from-warm-gray-100 to-warm-gray-100/0" />
            <div className="flex animate-marquee w-fit gap-2 z-10">
              <StackChip content="Front-end Development" />
              <StackChip content="Back-end Development" />
              <StackChip content="Internet of Things" />
              <StackChip content="Artificial Intelligence" />
            </div>
            <div className="flex animate-marquee2 absolute top-0 z-10 w-fit gap-2 mx-2">
              <StackChip content="Front-end Development" />
              <StackChip content="Back-end Development" />
              <StackChip content="Internet of Things" />
              <StackChip content="Artificial Intelligence" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
