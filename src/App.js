import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './components/Router';

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback="Inhalt wird geladen...">
        <Router />
      </Suspense>
    </BrowserRouter>
  );
}
