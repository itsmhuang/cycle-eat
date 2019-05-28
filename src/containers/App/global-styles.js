import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Lato:400&display=swap');


  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    font-size: 16px;
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};
    font-family: 'Lato', 'Helvetica Neue', 'Segoe UI', Helvetica, Impact, Verdana, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
  }

  h1 { font-size: 36px; font-weight: normal }
  h2 { font-size: 24px; font-weight: normal }
  h3 { font-size: 18px; font-weight: normal }
  h4 { font-size: 16px; font-weight: normal }
  h5 { font-size: 14px; font-weight: normal }
  h6 { font-size: 12px; font-weight: normal }

  a, a:hover, a:visited, a:active {
    color: ${props => props.theme.colors.black};
    text-decoration: none;
  }
`;

export default GlobalStyle;
