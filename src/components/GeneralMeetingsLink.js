import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Context } from '../Context';

export function GeneralMeetingsLink() {
  const { content } = useContext(Context);

  return (
    <StyledContainer>
      <p id="mitgliederversammlungen">
        {content.membership.link.text}

        <Link to={content.membership.link.button[1]}>
          <button type="button">{content.membership.link.button[0]}</button>
        </Link>
      </p>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  background-color: #d7d7d7;
  color: #000;

  p {
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 1170px;
    padding: 30px 15px;
    text-align: center;
    width: 100%;

    a {
      text-decoration: none;
    }

    button {
      background-color: #fdfdfd;
      border: none;
      border-radius: 25px;
      cursor: pointer;
      display: block;
      font-size: 16px;
      margin: 15px auto 0 auto;
      outline: none;
      padding: 9px 15px;
    }
  }
`;
