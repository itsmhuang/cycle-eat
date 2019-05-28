import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyle from './global-styles';
import NavBar from 'src/containers/NavBar';
import LandingPage from 'src/containers/LandingPage';
import MapPage from 'src/containers/MapPage';

function Index() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <NavBar />
          <Route path="/" exact component={LandingPage} />
          <Route path="/search" component={MapPage} />
        </>
      </ThemeProvider>
    </>
  );
}

export default Index;
