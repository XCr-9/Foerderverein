import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import { ga } from '../helpers/analytics';

const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const GeneralMeetings = lazy(() => import('./pages/GeneralMeetings'));
const Home = lazy(() => import('./pages/Home'));
const Invitation = lazy(() => import('./pages/Invitation'));
const LegalNotice = lazy(() => import('./pages/LegalNotice'));
const NotFound = lazy(() => import('./pages/NotFound'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Statute = lazy(() => import('./pages/Statute'));

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={ga(Home)} />
      <Route exact path="/blog" component={ga(Blog)} />
      <Route path="/blog/:post" component={ga(BlogPost)} />
      <Route path="/datenschutzerklaerung" component={ga(PrivacyPolicy)} />
      <Route path="/einladung" component={ga(Invitation)} />
      <Route path="/impressum" component={ga(LegalNotice)} />
      <Route path="/mitgliederversammlungen" component={ga(GeneralMeetings)} />
      <Route path="/satzung" component={ga(Statute)} />
      <Route component={ga(NotFound)} />
    </Switch>
  );
}
