import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import UiContextProvider from '@/store/ui-provider';

import '@/styles/sass/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UiContextProvider>
      <Router>
        <App />
      </Router>
    </UiContextProvider>
  </React.StrictMode>
);
