import React, { Fragment } from 'react';

import Parallax from '../Parallax';
import News from '../News';
import About from '../About';
import Members from '../Members';
import Projects from '../Projects';
import Membership from '../Membership';
import Contact from '../Contact';
import { GeneralMeetingsLink } from '../GeneralMeetingsLink';

export default function Home() {
  return (
    <Fragment>
      <Parallax />
      <div className="wrap">
        <News />
        <About />
        <Members />
        <hr />
        <Projects />
      </div>
      <GeneralMeetingsLink />
      <Membership />
      <hr />
      <Contact />
    </Fragment>
  );
}
