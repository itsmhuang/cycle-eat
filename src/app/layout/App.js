import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyle from './global-styles';
import NavBar from 'src/features/nav/NavBar';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <NavBar />
        </>
      </ThemeProvider>
    </>
  );
}

export default App;
