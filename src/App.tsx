import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router';
import Layouts from '@/components/layouts';
import { Preloader } from '@/components/UI';

const HomePages = React.lazy(() => import('./pages/Homepage'));

function App() {
  return (
    <Suspense fallback={<Preloader />}>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<HomePages />} />
          <Route path='*' element={<HomePages />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
