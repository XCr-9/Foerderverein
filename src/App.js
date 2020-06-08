import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import ContextProvider from './Context';
import Router from './components/Router';
import MainNavigation from './components/MainNavigation/MainNavigation';
import { GlobalStyles } from './components/GlobalStyles';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Spinner from './components/Spinner';
import IE from './components/IE';

export default function App() {
  // detect if browser is internet explorer
  let isIE = /*@cc_on!@*/ false || !!document.documentMode;

  return !isIE ? (
    <ContextProvider>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <GlobalStyles />
          <ScrollToTop />
          <MainNavigation />
          <Router />
          <Footer />
        </Suspense>
      </BrowserRouter>
    </ContextProvider>
  ) : (
    <IE />
  );
}
