import React, { Fragment, useContext } from 'react';

import { Context } from '../../Context';
import { Heading } from '../Headings';

export default function Contact() {
  const { content } = useContext(Context);

  return (
    <div className="wrap">
      <Heading h1 title={content.contact.heading} />

      {content.contact.sections.map((section) => (
        <Fragment key={section.heading}>
          <Heading h2 title={section.heading} style={{ marginTop: '50px' }} />
          {section.content.map((line) => (
            <Fragment key={line.heading}>
              {line}
              <br />
            </Fragment>
          ))}
        </Fragment>
      ))}
    </div>
  );
}
