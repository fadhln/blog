import React from 'react';

const SectionHeading: React.FC<{ name: string }> = ({ name }) => {
  return (
    <h2
      className="z-30 font-mono text-3xl sm:text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-[300deg] from-warm-gray-900 to-warm-gray-900/50 dark:from-warm-gray-50 dark:to-warm-gray-50/70"
      style={{
        fontFeatureSettings: `"liga" 0`,
        fontVariantLigatures: 'none',
      }}
      id={name}
    >
      {'<section id="'}
      <span className="font-bold text-warm-gray-900 dark:text-warm-gray-50">
        {name}
      </span>
      {'" />'}
    </h2>
  );
};

export default SectionHeading;
