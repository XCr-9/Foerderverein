import React, { useContext, useEffect, useRef, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

import { Context } from '../../Context';
import ToggleButton from './ToggleButton';
import Navbar from './Navbar';

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};

export default function MainNavigation() {
  const { content } = useContext(Context);

  const [open, setOpen] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <StyledMainNavigation ref={node}>
      <ToggleButton open={open} setOpen={setOpen} />
      <div className="site-title-desktop" onClick={() => window.scrollTo(0, 0)}>
        <Link to="/">{content.siteTitle.desktop}</Link>
      </div>
      <Navbar open={open} setOpen={setOpen} />
      <div className="site-title-mobile" onClick={() => window.scrollTo(0, 0)}>
        <Link to="/">{content.siteTitle.mobile}</Link>
      </div>
      <Backdrop open={open} />
    </StyledMainNavigation>
  );
}

const Backdrop = createGlobalStyle`
  body::after {
    content: '';
    transition: opacity 0.3s ease-in-out;
    opacity: ${(props) => (props.open ? '1' : '0')};
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 0;
    transform: ${(props) =>
      props.open ? 'translateX(0)' : 'translateX(calc(-100%))'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
  }
`;

const StyledMainNavigation = styled.div`
  background-color: #971b24;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  height: 28px;
  letter-spacing: 0.5px;
  padding: 15px;
  position: sticky;
  top: 0;
  z-index: 3;

  .site-title-desktop {
    padding: 2px 0;
    white-space: nowrap;

    @media (max-width: 1360px) {
      display: none;
    }

    a {
      color: #fff;
      text-decoration: none;
    }
  }

  .site-title-mobile {
    text-align: center;
    width: 100%;

    @media (min-width: 1361px) {
      display: none;
    }

    a {
      color: #fff;
      text-decoration: none;
    }
  }
`;
