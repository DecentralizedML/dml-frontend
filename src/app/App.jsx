/* eslint-disable react/prefer-stateless-function */

/* ############################# */
/* ### EXTERNAL DEPENDENCIES ### */
/* ############################# */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { DMLTheme } from '@kyokan/kyokan-ui';

/* ############################# */
/* ### INTERNAL DEPENDENCIES ### */
/* ############################# */

import store from '../state/store';
import Routes from './Routes';

/* ########### */
/* ### APP ### */
/* ########### */

class App extends Component {
  render () {
    return (
      <ThemeProvider theme={DMLTheme}>
        <Provider store={store}>
          <Routes />
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
