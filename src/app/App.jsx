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

import requireAuth from '../utils/requireAuth';

import Account from './account';
import Algorithms from './pages/Algorithms';
import Bounties from './pages/Bounties';
import Login from './login';
import Marketplace from './pages/Marketplace';

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
              <Route path="/account"          component={requireAuth(Account)}     />
              <Route path="/algorithms"       component={requireAuth(Algorithms)}  />
              <Route path="/algorithms/mine"  component={requireAuth(Algorithms)}  />
              <Route path="/bounties"         component={requireAuth(Bounties)}    />
              <Route path="/bounties/mine"    component={requireAuth(Bounties)}    />
              <Route path="/marketplace"      component={requireAuth(Marketplace)} />
              <Route
                path="/"
                exact
                render={() => {
                  if (store.getState().auth.isAuthenticated) {
                    return (<Redirect to="/marketplace" />);
                  } else {
                    return (<Login />);
                  }
                }}
              />
            </Switch>
          </Router>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
