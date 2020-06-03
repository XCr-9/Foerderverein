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
      <div className="site-title-desktop">
        <Link to="/">{content.siteTitle.desktop}</Link>
      </div>
      <Navbar open={open} setOpen={setOpen} />
      <div className="site-title-mobile">
        <Link to="/">{content.siteTitle.mobile}</Link>
      </div>
    </StyledMainNavigation>
  );
}

const StyledMainNavigation = styled.div`
  background-color: #971b24;
  display: flex;
  height: 28px;
  letter-spacing: 1px;
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
