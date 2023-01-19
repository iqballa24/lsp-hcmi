import React from 'react';
import data from '@/data';

type HeroProps = {
  mRef: any;
};

const Hero: React.FC<HeroProps> = ({ mRef }) => {
  function scrollToAboutSection() {
    window.scrollTo({
      top: Number(mRef.current) + 600,
      behavior: 'smooth',
    });
  }

  return (
    <section className="carousel-section">
      <div className="carousel-text">
        <h1 tabIndex={0}>{data.longTitle}</h1>
        <a href="#" className="scroll-down" onClick={scrollToAboutSection} aria-label="scroll down"></a>
      </div>
    </section>
  );
};

export default Hero;
