import React, { useContext } from 'react';
import styled from 'styled-components';

import { Context } from '../../Context';

function ToggleButton({ open, setOpen }) {
  const { content } = useContext(Context);

  return (
    <StyledToggleButton
      open={open}
      onClick={() => setOpen(!open)}
      aria-label={content.header.toggleButton}
    >
      <div />
      <div />
      <div />
    </StyledToggleButton>
  );
}

export default ToggleButton;

const StyledToggleButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 25px;
  justify-content: space-around;
  padding: 0;
  width: 26px;
  z-index: 2;

  &:focus {
    outline: none;
  }

  div {
    background-color: #fff;
    border-radius: 10px;
    height: 3px;
    position: relative;
    transform-origin: 1px;
    transition: all 0.3s linear;
    width: 26px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (min-width: 1361px) {
    display: none;
  }
`;
