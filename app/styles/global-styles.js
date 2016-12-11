import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }
`;
