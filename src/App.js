import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import ContextProvider from './Context';
import Router from './components/Router';

export default function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Suspense fallback="Inhalt wird geladen...">
          <Router />
        </Suspense>
      </BrowserRouter>
    </ContextProvider>
  );
}
