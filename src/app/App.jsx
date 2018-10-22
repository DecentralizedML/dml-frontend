/* eslint-disable react/prefer-stateless-function */

/* ############################# */
/* ### EXTERNAL DEPENDENCIES ### */
/* ############################# */

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import { DMLTheme } from '@kyokan/kyokan-ui';

/* ############################# */
/* ### INTERNAL DEPENDENCIES ### */
/* ############################# */

import store from '../state/store';

import Account from './account';
import Algorithms from './algorithms';
import Bounties from './bounties';
import Marketplace from './marketplace';
import Onboarding from './onboarding';
import ProtectedRoute from './auth/ProtectedRoute';

/* ########### */
/* ### APP ### */
/* ########### */

class App extends Component {
  render () {
    return (
      <ThemeProvider theme={DMLTheme}>
        <Provider store={store}>
          <Router>
            <Switch>
              <ProtectedRoute path="/account/:section" component={Account}     />
              <ProtectedRoute path="/account"          component={Account}     />
              <ProtectedRoute path="/algorithms/:id"   component={Algorithms}  />
              <ProtectedRoute path="/bounties/:id"     component={Bounties}    />
              <ProtectedRoute path="/marketplace"      component={Marketplace} />

              <ProtectedRoute path="/details"          component={Onboarding}  />
              <ProtectedRoute path="/metamask"         component={Onboarding}  />

              <Route          path="/login"            component={Onboarding}  />
              <Route          path="/signup"           component={Onboarding}  />

              <Redirect to="/marketplace" />
            </Switch>
          </Router>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
