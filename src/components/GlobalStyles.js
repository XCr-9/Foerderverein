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
      width: 100%;
      max-width: 1170px;
      margin: 0 auto;
      padding: 15px;
      box-sizing: border-box;
    }
  }
`;
