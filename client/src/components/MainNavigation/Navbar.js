import React, { useContext } from 'react';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

import { Context } from '../../Context';

function Navbar({ open, setOpen }) {
  const { content } = useContext(Context);

  return (
    <StyledNavbar open={open}>
      {content.header.navigation.map((links) => (
        <HashLink
          key={links.href}
          to={links.href}
          onClick={() => setOpen(false)}
        >
          {links.linkText}
        </HashLink>
      ))}
    </StyledNavbar>
  );
}

export default Navbar;

const StyledNavbar = styled.nav`
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.75);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: 0;
  max-width: 80vw;
  overflow-y: auto;
  padding: 0;
  position: fixed;
  text-align: left;
  top: 0;
  transform: ${({ open }) =>
    open ? 'translateX(0)' : 'translateX(calc(-100% - 7px))'};
  transition: transform 0.3s ease-in-out;
  width: 333px;

  @media (max-width: 1360px) {
    background-color: #971b24;
  }

  a {
    color: #fff;
    font-size: 16px;
    padding: 7px 12px;
    text-decoration: none;
    transition: 0.2s;

    @media (min-width: 1360px) {
      &:hover {
        color: #ff939c;
      }
    }

    @media (max-width: 1360px) {
      background-color: #971b24;
      font-size: 20px;
    }

    &:first-child {
      margin-top: 50px;
    }
  }

  @media (min-width: 1361px) {
    box-shadow: none;
    display: block;
    height: 50px;
    margin: 0 auto;
    max-width: 100%;
    overflow-y: hidden;
    padding: 2px 0;
    position: static;
    text-align: right;
    transform: translateX(0);
    width: 100%;
  }
`;
