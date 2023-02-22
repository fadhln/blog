import SectionHeading from '@/components/sectionHeading';

import React from 'react';

import ProjectCard from './projectCard';

const ProjectSection = () => {
  return (
    <section className="mx-auto container mt-56 px-3 relative">
      <SectionHeading name={'project'} />
      <div className="grid grid-cols-2 gap-6 mt-24">
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default ProjectSection;
