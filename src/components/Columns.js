import React from 'react';
import styled from 'styled-components';

const StyledTwoColumns = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  img {
    width: 100%;
  }

  .column-left {
    box-sizing: border-box;
    flex: 0 0 100%;
    margin-bottom: 20px;

    @media (min-width: 1300px) {
      flex: ${(props) => props.columnLeft || '0 0 50%'};
    }
  }

  .column-right {
    box-sizing: border-box;
    flex: 0 0 100%;
    margin-bottom: 20px;

    @media (min-width: 1300px) {
      flex: ${(props) => props.columnRight || '0 0 50%'};
    }
  }
`;

export const TwoColumns = (props) => {
  const { children, columnLeft, columnRight } = props;
  return (
    <StyledTwoColumns columnLeft={columnLeft} columnRight={columnRight}>
      {children}
    </StyledTwoColumns>
  );
};
