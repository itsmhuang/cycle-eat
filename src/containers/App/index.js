import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyle from './global-styles';
import NavBar from 'src/containers/NavBar';
import LandingPage from 'src/containers/LandingPage';

function Index() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <NavBar />
          <LandingPage/>
        </>
      </ThemeProvider>
    </>
  );
}

export default Index;
