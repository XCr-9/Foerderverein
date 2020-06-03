import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const GeneralMeetings = lazy(() => import('./pages/GeneralMeetings'));
const Home = lazy(() => import('./pages/Home'));
const Membership = lazy(() => import('./pages/Membership'));
const Projects = lazy(() => import('./pages/Projects'));
const LegalNotice = lazy(() => import('./pages/LegalNotice'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/datenschutzerklaerung" component={PrivacyPolicy} />
      <Route path="/impressum" component={LegalNotice} />
      <Route path="/kontakt" component={Contact} />
      <Route path="/mitglied-werden" component={Membership} />
      <Route path="/mitgliederversammlungen" component={GeneralMeetings} />
      <Route path="/projekte" component={Projects} />
      <Route path="/ueber-uns" component={About} />
      <Route component={NotFound} />
    </Switch>
  );
}
