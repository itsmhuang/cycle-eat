import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html,
  body {
    height: 100%;
    width: 100%;
    font-size: 16px;
    color: ${props => props.theme.colors.black};
    font-family: 'Helvetica Neue', 'Segoe UI', Helvetica, Impact, Verdana, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 { font-size: 32px; }
  h2 { font-size: 24px; }
  h3 { font-size: 18px; }
  h4 { font-size: 16px; }
  h5 { font-size: 14px; }
  h6 { font-size: 12px; }

  a, a:hover, a:visited, a:active {
    color: ${props => props.theme.colors.black};
    text-decoration: none;
  }
`;

export default GlobalStyle;
