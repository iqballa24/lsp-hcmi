import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import ButtonToTop from '@/components/UI/Button/ButtonToTop';

const Layouts = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Outlet />
        <ButtonToTop />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Layouts;
