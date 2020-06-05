import React, { Fragment, useContext } from 'react';
import styled from 'styled-components';

import { Context } from '../Context';
import { Heading } from './Headings';

export default function Members() {
  const { content } = useContext(Context);

  return (
    <Fragment>
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
    </Fragment>
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

    img {
      border-radius: 50%;
      width: 200px;
    }

    span {
      font-weight: bold;
    }
  }
`;
