import React, { useContext } from 'react';
import styled from 'styled-components';

import { Context } from '../../Context';
import { Heading } from '../Headings';

export default function BlogPost() {
  const { content, blogPostIndex } = useContext(Context);

  return (
    <StyledBlog0Post className="wrap">
      <Heading h1 title={content.blog.posts[blogPostIndex].heading} />
      <p className="meta">{content.blog.posts[blogPostIndex].meta}</p>
      <p
        dangerouslySetInnerHTML={{
          __html: content.blog.posts[blogPostIndex].content,
        }}
      />
    </StyledBlog0Post>
  );
}

const StyledBlog0Post = styled.article`
  .meta {
    color: #971b24;
    font-size: 0.9em;
  }

  img {
    height: auto;
    width: 100%;
  }
`;
