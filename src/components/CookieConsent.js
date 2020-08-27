import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Context } from '../Context';

export default function CookieConsentBanner() {
  const { legal, cookieOptIn, optIn, optOut } = useContext(Context);

  return cookieOptIn === undefined ? (
    <CookieConsent>
      <p>
        {legal.cookieConsent.text}
        <Link to={legal.cookieConsent.link[1]}>
          {legal.cookieConsent.link[0]}
        </Link>
        .
      </p>
      <button type="button" className="decline" onClick={() => optOut()}>
        {legal.cookieConsent.buttons.decline}
      </button>
      <button type="button" className="accept" onClick={() => optIn()}>
        {legal.cookieConsent.buttons.accept}
      </button>
    </CookieConsent>
  ) : null;
}

const CookieConsent = styled.div`
  border-radius: 5px;
  padding: 15px;
  background-color: #f7f8fb;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.05),
    0 10px 10px 2px rgba(0, 0, 0, 0.05);
  font-size: 14px;
  line-height: 40px;
  position: fixed;
  z-index: 100;
  bottom: 50px;
  right: 50px;
  margin: auto;
  max-width: 500px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  p {
    flex: 0 0 100%;
    line-height: 1.5;
    padding-right: 16px;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;

    a {
      display: inline-block;
      color: #008000;
      text-decoration: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
  }

  button {
    border: 0;
    border-radius: 3px;
    cursor: pointer;
    padding: 8px;
    transition: 0.2s;

    &.accept {
      background-color: #008000;
      color: #fff;
      flex: 0 0 49%;
      font-size: 16px;

      &:hover {
        background-color: #006500;
      }
    }

    &.decline {
      background-color: #e1dfdf;
      color: #474747;
      flex: 0 0 49%;

      &:hover {
        background-color: #cdcdcd;
      }
    }
  }
`;
