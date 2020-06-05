import React, { useContext } from 'react';
import styled from 'styled-components';

import { Context } from '../Context';
import { Heading } from './Headings';

export default function Parallax() {
  const { content } = useContext(Context);

  return (
    <StyledParallax>
      <Heading h1 title={content.welcome} />
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
    background-color: #971b24e6;
    border-radius: 3px;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
    box-sizing: border-box;
    color: #fff;
    flex: 0 0 50%;
    padding: 20px;
    text-align: center;
  }
`;
