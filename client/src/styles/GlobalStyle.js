import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    html {
      font-family: ${theme.fonts.default};
      color: ${theme.colors.neutralDark};
      line-height: 1.45;
    }

    body {
      padding: 0;
      margin: 0;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    a,
    input:focus {
      outline: none;
    }

    button::-moz-focus-inner {
      border: 0;
    }
  `};
`;
