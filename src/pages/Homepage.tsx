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
  const refAbout = React.createRef();

  return (
    <React.Fragment>
      <Hero mRef={refAbout} />
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
