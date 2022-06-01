import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import { Context } from '../Context';
import { Heading } from './Headings';

export default function Members() {
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
      className="wrap fadein"
      ref={ref}
      style={{
        opacity: opacity,
      }}
    >
      <Heading h2 title={content.about.members.heading} />
      <StyledMembers>
        {content.about.members.images.map((member) => (
          <li key={member.name}>
            <img src={member.src} alt={member.alt} loading="lazy" />
            <p>
              {member.role}
              <br />
              <span>{member.name}</span>
            </p>
          </li>
        ))}
      </StyledMembers>
    </section>
  );
}

const StyledMembers = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;

  li {
    flex: 0 0 33%;
    text-align: center;

    @media (max-width: 768px) {
      flex: 0 0 100%;
    }

    img {
      border-radius: 50%;
      width: 200px;
    }

    span {
      font-weight: bold;
    }
  }
`;
