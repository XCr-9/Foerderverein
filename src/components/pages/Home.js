import React, { Fragment, useContext } from 'react';

import { Context } from '../../Context';
import Parallax from '../Parallax';
import News from '../News';
import About from '../About';
import Members from '../Members';
import Projects from '../Projects';
import Membership from '../Membership';
import Contact from '../Contact';
import { GeneralMeetingsLink } from '../GeneralMeetingsLink';
import { meta } from '../../helpers/meta';

export default function Home() {
  const { content } = useContext(Context);

  document.title = content.home.meta.title;
  meta('name', 'description', content.home.meta.description);

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
