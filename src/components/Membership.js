import React, { Fragment, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import { Context } from '../Context';
import { TwoColumns } from './Columns';
import { Heading } from './Headings';

export default function Membership() {
  const { content } = useContext(Context);

  const [ref, inView] = useInView();
  const [opacity, setOpacity] = useState('0');

  useEffect(() => {
    if (inView) {
      setOpacity('1');
    }
  }, [inView]);

  return (
    <StyledContainer>
      <div
        className="wrap fadein"
        ref={ref}
        style={{
          opacity: opacity,
        }}
      >
        <Heading h2 title={content.membership.heading} id="mitglied-werden" />

        <TwoColumns columnLeft="0 0 48%" columnRight="0 0 48%">
          <div className="column-left">
            <Heading h3 title={content.membership.becomeMember.heading} />
            <p>
              {content.membership.becomeMember.text}

              <a href={content.membership.becomeMember.link[0]}>
                {content.membership.becomeMember.link[1]}
              </a>
            </p>
          </div>

          <div className="column-right">
            <Heading h3 title={content.membership.donate.heading} />
            {content.membership.donate.text}
            <p>
              {content.contact.sections[1].content.map((line) => (
                <Fragment key={line}>
                  {line}
                  <br />
                </Fragment>
              ))}
            </p>
          </div>
        </TwoColumns>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  background-color: #fff;
  color: #000;
  width: 100%;
`;
