import React, { Component, Fragment } from "react";
import { Router } from '@reach/router';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/DesignSystem/GlobalStyle';
import { theme } from './components/DesignSystem/Theme'

import LandingPage from './containers/LandingPage/LandingPage';
import CelestPage from './containers/CelestPage/CelestPage';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
            <GlobalStyle />
            <Router>
              <LandingPage path='/' />
              <CelestPage path='/celest' />
            </Router>
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
