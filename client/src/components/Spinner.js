import React from 'react';
import styled from 'styled-components';

export default function Spinner() {
  return (
    <StyledSpinner>
      <div>
        <img
          src="/img/loading.png"
          alt="Loading"
        />
        <p>Inhalt wird geladen...</p>
      </div>
    </StyledSpinner>
  );
}

const StyledSpinner = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  div {
    img {
      animation: spinner infinite 2s linear;
      z-index: 1000;
    }
  }

  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
