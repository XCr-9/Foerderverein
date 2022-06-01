import React, { useContext, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { Context } from '../Context';
import { Heading } from './Headings';

export default function About() {
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
      id="ueber-uns"
      className="wrap fadein"
      ref={ref}
      style={{
        opacity: opacity,
      }}
    >
      <Heading h2 title={content.about.heading} />
      <ul>
        {content.about.list.map((list) => (
          <li key={list}>{list}</li>
        ))}
      </ul>
    </section>
  );
}
