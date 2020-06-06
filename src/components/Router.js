import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import { ga } from '../helpers/analytics';

const Home = lazy(() => import('./pages/Home'));
const LegalNotice = lazy(() => import('./pages/LegalNotice'));
const GeneralMeetings = lazy(() => import('./pages/GeneralMeetings'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Statute = lazy(() => import('./pages/Statute'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={ga(Home)} />
      <Route path="/datenschutzerklaerung" component={ga(PrivacyPolicy)} />
      <Route path="/impressum" component={ga(LegalNotice)} />
      <Route path="/mitgliederversammlungen" component={ga(GeneralMeetings)} />
      <Route path="/satzung" component={ga(Statute)} />
      <Route component={ga(NotFound)} />
    </Switch>
  );
}
