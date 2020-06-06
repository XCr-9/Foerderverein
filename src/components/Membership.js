import React, { useContext } from 'react';
import styled from 'styled-components';

import { Context } from '../Context';
import { TwoColumns } from './Columns';
import { Heading } from './Headings';

export default function Membership() {
  const { content } = useContext(Context);

  return (
    <StyledContainer>
      <div className="wrap">
        <Heading h2 title={content.membership.heading} id="mitglied-werden" />
        <TwoColumns columnLeft="0 0 48%" columnRight="0 0 48%">
          <div className="column-left">
            <Heading h3 title={content.membership.becomeMember.heading} />
            {content.membership.becomeMember.text}
            <a href={content.membership.becomeMember.link[0]}>
              {content.membership.becomeMember.link[1]}
            </a>
          </div>
          <div className="column-right">
            <Heading h3 title={content.membership.donate.heading} />
            {content.membership.donate.text}
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
