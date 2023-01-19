import React from 'react';
import Hero from '@/components/Hero';

import {
  AboutSection,
  SchemeSection,
  PesertaSection,
  StepsSection,
  ScheduleSection,
  LawsSection,
  CommitmentSection,
  GallerySection,
} from '@/components/Home';

const Homepage = () => {
  const refContent = React.createRef();

  return (
    <React.Fragment>
      <Hero mRef={refContent} />
      <AboutSection />
      <SchemeSection />
      <PesertaSection />
      <StepsSection />
      <ScheduleSection />
      <LawsSection />
      <CommitmentSection />
      <GallerySection />
    </React.Fragment>
  );
};

export default Homepage;
