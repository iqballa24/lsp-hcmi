import React from 'react';
import Hero from '@/components/Hero';

import {
  ServiceSection,
  BackgroundSection,
  VisiMisiSection,
  StructureSection
} from '@/components/About';

const Aboutpage = () => {
  const refContent = React.createRef();

  return (
    <React.Fragment>
      <Hero mRef={refContent} />
      <ServiceSection />
      <BackgroundSection />
      <VisiMisiSection />
      <StructureSection />
    </React.Fragment>
  );
};

export default Aboutpage;
