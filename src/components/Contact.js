import React, { Fragment, useContext } from 'react';
import styled from 'styled-components';

import { Context } from '../Context';
import { TwoColumns } from './Columns';
import { Heading } from './Headings';
import Iframe from './Iframe';

export default function Contact() {
  const { content } = useContext(Context);

  return (
    <StyledContainer>
      <div className="wrap">
        <Heading h2 title={content.contact.heading} id="kontakt" />
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
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  background-color: #fff;
  color: #000;
  width: 100%;
`;
