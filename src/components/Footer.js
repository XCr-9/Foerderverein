import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Context } from '../Context';

export default function Footer() {
  const { content } = useContext(Context);
  const currentYear = new Date().getFullYear();

  return (
    <Fragment>
      <StyledFooter>
        <p>
          <Link to="/">&copy; {content.footer.copyright.owner}</Link>,{' '}
          {content.footer.copyright.startYear} - {currentYear}
        </p>
        <nav>
          {content.footer.nav.map((link) => (
            <Link key={link.href} to={link.href}>
              {link.linkText}
            </Link>
          ))}
        </nav>
      </StyledFooter>

      <StyledSubFooter>
        <a href={content.developer[1]}>{content.developer[0]}</a>
      </StyledSubFooter>
    </Fragment>
  );
}

const StyledFooter = styled.footer`
  padding: 40px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  background-color: #971b24;

  p {
    color: #fff;
    margin: 0;

    @media screen and (max-width: 768px) {
      flex: 0 0 100%;
      text-align: center;
    }

    a {
      text-decoration: none;
      color: #fff;

      @media screen and (max-width: 768px) {
        flex: 0 0 100%;
        text-align: center;
      }
    }
  }

  nav {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
      flex: 0 0 100%;
      margin-top: 15px;
      text-align: center;
    }

    a {
      text-decoration: none;
      color: #fff;

      &:first-child {
        margin-right: 25px;

        @media screen and (max-width: 768px) {
          margin-right: 0;
        }
      }

      @media screen and (max-width: 768px) {
        flex: 0 0 100%;
        text-align: center;
      }
    }
  }
`;

const StyledSubFooter = styled.footer`
  padding: 5px 12px;
  display: flex;
  font-size: 12px;
  flex-flow: row wrap;
  justify-content: center;
  background-color: #24292e;

  a {
    text-decoration: none;
    color: #949494;
  }
`;
