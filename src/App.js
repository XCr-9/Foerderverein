import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import ContextProvider from './Context';
import Router from './components/Router';
import MainNavigation from './components/MainNavigation/MainNavigation';
import { GlobalStyles } from './components/GlobalStyles';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Suspense fallback="Inhalt wird geladen...">
          <GlobalStyles />
          <ScrollToTop />
          <MainNavigation />
          <Router />
          <Footer />
        </Suspense>
      </BrowserRouter>
    </ContextProvider>
  );
}
