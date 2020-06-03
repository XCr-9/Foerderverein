import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import ContextProvider from './Context';
import Router from './components/Router';
import MainNavigation from './components/MainNavigation/MainNavigation';
import { GlobalStyles } from './components/GlobalStyles';
import Footer from './components/Footer';

export default function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Suspense fallback="Inhalt wird geladen...">
          <GlobalStyles />
          <MainNavigation />
          <Router />
          <Footer />
        </Suspense>
      </BrowserRouter>
    </ContextProvider>
  );
}
