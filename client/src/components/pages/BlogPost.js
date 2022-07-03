import React, { useContext } from 'react';
import styled from 'styled-components';

import { Context } from '../../Context';
import { Heading } from '../Headings';
import { meta } from '../../helpers/meta';

import Attendance from '../Attendance';

export default function BlogPost(props) {
  const { content } = useContext(Context);

  const { index } = props;

  document.title = content.blog.posts[index].meta.title;
  meta('name', 'description', content.blog.posts[index].meta.description);

  return (
    <StyledBlogPost className="wrap">
      <Heading h1 title={content.blog.posts[index].heading} />
      <p className="meta">{content.blog.posts[index].info}</p>
      <p
        dangerouslySetInnerHTML={{
          __html: content.blog.posts[index].content,
        }}
      />
      {content.blog.posts[index].attendance && <Attendance />}
    </StyledBlogPost>
  );
}

const StyledBlogPost = styled.article`
  .meta {
    color: #971b24;
    font-size: 0.9em;
  }

  img {
    height: auto;
    width: 100%;
  }
`;
