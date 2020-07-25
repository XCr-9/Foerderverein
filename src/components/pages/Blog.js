import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Context } from '../../Context';
import { Heading } from '../Headings';
import { meta } from '../../helpers/meta';

export default function Blog() {
  const { content } = useContext(Context);

  document.title = content.blog.meta.title;
  meta('name', 'description', content.blog.meta.description);

  return (
    <div className="wrap">
      <Heading h1 title={content.blog.heading} />

      <StyledBlog>
        {content.blog.posts.map((post, index) => (
          <section key={post.heading}>
            <div
              className="image"
              style={{
                backgroundImage: post.thumbnail
                  ? `url(${post.thumbnail})`
                  : `url(${content.blog.defaultThumbnail})`,
              }}
            >
              <Link to={post.button[0]}>
                <Heading h2 title={post.heading} />
              </Link>
            </div>
            <div className="text">
              <p>{post.info}</p>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.excerpt + '...',
                }}
              />
              <Link to={post.button[0]}>
                <button type="button">{post.button[1]}</button>
              </Link>
            </div>
          </section>
        ))}
      </StyledBlog>
    </div>
  );
}

const StyledBlog = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  section {
    background-color: #dbdbdb;
    border-radius: 4px;
    box-sizing: border-box;
    flex: 0 0 49%;
    margin: 10px 0;

    &:first-child {
      flex: 0 0 100%;
    }

    .image {
      background-size: cover;
      border-radius: 4px 4px 0 0;
      height: 250px;
      padding: 20px;

      a {
        text-decoration: none;

        h2 {
          background-color: rgba(0, 0, 0, 0.5);
          border-radius: 4px;
          color: #fff;
          margin: 0;
          padding: 12px 20px;
        }
      }
    }

    .text {
      padding: 20px;

      a {
        text-decoration: none;

        button {
          background-color: #fdfdfd;
          border: none;
          border-radius: 25px;
          cursor: pointer;
          display: block;
          font-size: 16px;
          margin-top: 15px;
          outline: none;
          padding: 9px 15px;
        }
      }
    }
  }
`;
