import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

import { Context } from '../Context';

export function GeneralMeetingsLink() {
  const { content } = useContext(Context);

  const [ref, inView] = useInView();
  const [opacity, setOpacity] = useState('0');

  useEffect(() => {
    if (inView) {
      setOpacity('1');
    }
  }, [inView]);

  return (
    <div id="mitgliederversammlungen">
      <StyledContainer>
        <p
          className="wrap fadein"
          ref={ref}
          style={{
            opacity: opacity,
          }}
        >
          {content.membership.link.text}

          <Link to={content.membership.link.button[1]}>
            <button type="button">{content.membership.link.button[0]}</button>
          </Link>
        </p>
      </StyledContainer>
    </div>
  );
}

const StyledContainer = styled.div`
  background-color: #d7d7d7;
  color: #000;
  margin: 30px auto 0 auto;

  p {
    box-sizing: border-box;
    padding: 30px 0;
    text-align: center;

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
