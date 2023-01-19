import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router';
import Layouts from '@/components/layouts';
import { Preloader } from '@/components/UI';

const HomePage = React.lazy(() => import('@/pages/Homepage'));
const AboutPage = React.lazy(() => import('@/pages/Aboutpage'));
const SchemePage = React.lazy(() => import('@/pages/SchemePage'));
const GalleryPage = React.lazy(() => import('@/pages/GalleryPage'));
const ContactPage = React.lazy(() => import('@/pages/ContactPage'));

function App() {
  return (
    <Suspense fallback={<Preloader />}>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/scheme" element={<SchemePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />}/>
          <Route path="*" element={<AboutPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
