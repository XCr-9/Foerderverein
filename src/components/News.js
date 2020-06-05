import React, { Fragment, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Context } from '../Context';
import { Heading } from './Headings';

export default function News() {
  const { content } = useContext(Context);

  return (
    <StyledNews>
      <Heading h2 title={content.news.heading} style={{ color: '#fff' }} />
      {content.news.messages ? (
        <ul>
          {content.news.messages.map((message) => (
            <li key={message.text}>
              {message.date}: {message.text}{' '}
              {message.link ? (
                <Fragment>
                  - <Link to={message.link[0]}>{message.link[1]}</Link>
                </Fragment>
              ) : null}
            </li>
          ))}
        </ul>
      ) : (
        content.news.defaultMessage
      )}
    </StyledNews>
  );
}

const StyledNews = styled.div`
  background-color: #971b24;
  border-radius: 4px;
  color: #fff;
  margin-bottom: 90px;
  padding: 20px;
`;
