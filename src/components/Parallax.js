import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import { Context } from '../Context';
import { Heading } from './Headings';

export default function Parallax() {
  const { content } = useContext(Context);

  const [ref, inView] = useInView();
  const [opacity, setOpacity] = useState('0');

  useEffect(() => {
    if (inView) {
      setOpacity('1');
    }
  }, [inView]);

  return (
    <StyledParallax ref={ref}>
      <Heading
        h1
        title={content.welcome}
        className="fadein"
        style={{
          opacity: opacity,
        }}
      />
    </StyledParallax>
  );
}

const StyledParallax = styled.div`
  align-items: center;
  background-attachment: fixed;
  background-image: url('./img/goethe-gymnasium-nauen.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-flow: row wrap;
  height: calc(100vh - 58px); // 58px = header navbars height incl padding
  justify-content: space-around;

  h1 {
    background-color: rgba(151, 27, 36, 0.9);
    border-radius: 3px;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
    box-sizing: border-box;
    color: #fff;
    flex: 0 0 50%;
    padding: 20px;
    text-align: center;
  }
`;
