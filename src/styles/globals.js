import { css } from '@emotion/core';

export default css`
  * {
    box-sizing: border-box;
  }

  html {
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  span,
  small,
  p {
    margin: 0;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    font-weight: 400;

    &.bold {
      font-weight: bold;
    }

    &.light {
      font-weight: 200;
    }
  }

  a {
    color: #0ea5c6;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;
