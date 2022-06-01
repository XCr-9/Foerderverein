import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Context } from '../Context';

export default function GeneralMeetingsList() {
  const { content, generalMeetingIndex, setGeneralMeetingIndex } = useContext(
    Context
  );

  const year = ['#2017', '#2018', '#2019', '#2020'];

  return (
    <StyledGeneralMeetingsList>
      {content.generalMeetings.list.map((listItem, index) => (
        <Link
          key={listItem.year}
          to={year[index]}
          onClick={() => {
            setGeneralMeetingIndex(index);
          }}
          className={generalMeetingIndex === index ? 'selected' : null}
        >
          {listItem.year}
        </Link>
      ))}
    </StyledGeneralMeetingsList>
  );
}

const StyledGeneralMeetingsList = styled.nav`
  border-bottom: 2px solid #971b24;
  display: flex;
  flex-flow: row-reverse wrap;
  justify-content: flex-end;
  margin: 60px 0 40px 0;

  a {
    background-color: #dbdbdb;
    border-radius: 4px 4px 0 0;
    box-sizing: border-box;
    margin-right: 15px;
    padding: 8px 13px;
    text-align: center;
    text-decoration: none;
    transition: 0.2s;
    width: 100px;

    &:hover {
      background-color: #bc414a;
      color: #fff;
    }

    &.selected {
      background-color: #971b24;
      color: #fff;
    }
  }
`;
