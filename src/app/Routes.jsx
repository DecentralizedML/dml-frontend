/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Account from './account';
import Algorithms from './algorithms';
import Bounties from './bounties';
import Marketplace from './marketplace';
import Onboarding from './onboarding';

import ProtectedRoute from './auth/ProtectedRoute';
import Logout from './auth/Logout';

import accountActions from './account/duck/actions';

import { initialize, startWatching } from '../utils/web3connect';

class Routes extends Component {
  componentWillMount () {
    this.props.hydrateUserData();
    this.props.initialize().then(this.props.startWatching);
  }

  render () {
    return (
      <Router>
        <Switch>
          <ProtectedRoute path="/account/:section(profile|wallet)" component={Account}     />
          <ProtectedRoute path="/account"                          component={Account}     />
          <ProtectedRoute path="/algorithms/:id"                   component={Algorithms}  />
          <ProtectedRoute path="/algorithms/"                      component={Algorithms}  />
          <ProtectedRoute path="/bounties/:id"                     component={Bounties}    />
          <ProtectedRoute path="/bounties"                         component={Bounties}    />
          <ProtectedRoute path="/marketplace"                      component={Marketplace} />

          <ProtectedRoute path="/details"                          component={Onboarding}  />
          <ProtectedRoute path="/metamask"                         component={Onboarding}  />

          <Route          path="/login"                            component={Onboarding}  />
          <Route          path="/signup"                           component={Onboarding}  />
          <Route          path="/logout"                           component={Logout}      />

          <Redirect to="/marketplace" />
        </Switch>
      </Router>
    );
  }
}

Routes.propTypes = {
  hydrateUserData : PropTypes.func.isRequired,
  initialize      : PropTypes.func.isRequired,
  startWatching   : PropTypes.func.isRequired,
};

export default connect(
  null,
  (dispatch) => {
    return (
      {
        hydrateUserData: () => {
          return dispatch(accountActions.hydrateUserData());
        },
        initialize: () => {
          return dispatch(initialize());
        },
        startWatching: () => {
          return dispatch(startWatching());
        },
      }
    );
  },
)(Routes);
