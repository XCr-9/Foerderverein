import { createGlobalStyle } from 'styled-components';

import OpenSansRegular from '../assets/fonts/OpenSans-Regular.ttf';

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Open Sans';
  src: url(${OpenSansRegular});
}

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    margin: 0;

    .wrap {
      box-sizing: border-box;
      margin: 30px auto 60px auto;
      max-width: 1170px;
      padding: 15px;
      width: 100%;

      a {
        color: #000;
      }
    }

    ul {
      padding-inline-start: 19px;

      &.blank {
        list-style-type: none;
        padding: 0;
      }
    }

    ol {
      margin-top: 0;
      padding-inline-start: 19px;

      &.letter {
        counter-reset: list;
        padding-inline-start: 19px;

        li {
          list-style-type: none;
          position: relative;

          &:before {
            counter-increment: list;
            content: counter(list, lower-alpha) ") ";
            left: -1.1em;
            position: absolute;
          }
        }
      }
    }

    hr {
      background-color: #fff;
      background-image: linear-gradient(to right, rgba(151, 27, 36, 0), rgba(151, 27, 36, 0.9), rgba(151, 27, 36, 0));
      border: 0;
      height: 1px;
      margin: 80px auto;
      max-width: 1170px;
      padding: 0;
      width: 100%;
    }

    .fadein {
      transition: .5s;
      transition-delay: .2s;
    }
  }
`;
