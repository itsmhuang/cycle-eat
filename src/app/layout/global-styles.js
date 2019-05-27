import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    font-size: 16px;
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};
    font-family: 'Roboto', 'Helvetica Neue', 'Segoe UI', Helvetica, Impact, Verdana, Arial, sans-serif;
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
