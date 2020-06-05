import React, { Fragment, useContext } from 'react';

import { Context } from '../Context';
import { Heading } from './Headings';

export default function About() {
  const { content } = useContext(Context);

  return (
    <Fragment>
      <Heading h2 title={content.about.heading} id="ueber-uns" />
      <ul>
        {content.about.list.map((list) => (
          <li key={list}>{list}</li>
        ))}
      </ul>
    </Fragment>
  );
}
