import React, { useContext, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { Context } from '../Context';
import { Heading } from './Headings';
import { TwoColumns } from './Columns';

export default function Projects() {
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
      className="fadein"
      ref={ref}
      style={{
        opacity: opacity,
      }}
    >
      <Heading h2 title={content.projects.heading} id="projekte" />
      <TwoColumns columnLeft="80%" columnRight="20%">
        <div className="column-left">
          <ul>
            {content.projects.list.map((listItem) => (
              <li key={listItem}>{listItem}</li>
            ))}
          </ul>
        </div>
        <div className="column-right">
          <img
            src={content.projects.img.src}
            alt={content.projects.img.alt}
            loading="lazy"
            style={{ marginTop: '1em' }}
          />
        </div>
      </TwoColumns>
    </section>
  );
}
