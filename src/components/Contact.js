import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { Context } from '../Context';
import { TwoColumns } from './Columns';
import { Heading } from './Headings';
import Iframe from './Iframe';

export default function Contact() {
  const { content } = useContext(Context);

  const [ref, inView] = useInView();
  const [opacity, setOpacity] = useState('0');

  useEffect(() => {
    if (inView) {
      setOpacity('1');
    }
  }, [inView]);

  return (
    <section
      id="kontakt"
      className="wrap fadein"
      ref={ref}
      style={{
        marginBottom: '50px',
        opacity: opacity,
      }}
    >
      <Heading h2 title={content.contact.heading} />
      <TwoColumns columnLeft="0 0 48%" columnRight="0 0 48%">
        <div className="column-left">
          <Heading h3 title={content.contact.sections[0].heading} />
          {content.contact.sections[0].content.map((line) => (
            <Fragment key={line}>
              {line}
              <br />
            </Fragment>
          ))}
          <Heading h3 title={content.contact.sections[1].heading} />
          {content.contact.sections[1].content.map((line) => (
            <Fragment key={line}>
              {line}
              <br />
            </Fragment>
          ))}
        </div>
        <div className="column-right">
          <Iframe
            title={content.contact.map.title}
            height={content.contact.map.height}
            width={content.contact.map.width}
            src={content.contact.map.src}
          />
        </div>
      </TwoColumns>
    </section>
  );
}
