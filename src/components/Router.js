import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const LegalNotice = lazy(() => import('./pages/LegalNotice'));
const GeneralMeetings = lazy(() => import('./pages/GeneralMeetings'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Statute = lazy(() => import('./pages/Statute'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/datenschutzerklaerung" component={PrivacyPolicy} />
      <Route path="/impressum" component={LegalNotice} />
      <Route path="/mitgliederversammlungen" component={GeneralMeetings} />
      <Route path="/satzung" component={Statute} />
      <Route component={NotFound} />
    </Switch>
  );
}
