/* eslint-disable react/prefer-stateless-function */

/* ############################# */
/* ### EXTERNAL DEPENDENCIES ### */
/* ############################# */

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

/* ############################# */
/* ### INTERNAL DEPENDENCIES ### */
/* ############################# */

import Account from './account';
import Algorithms from './algorithms';
import Bounties from './bounties';
import Marketplace from './marketplace';
import Onboarding from './onboarding';
import ProtectedRoute from './auth/ProtectedRoute';
import { getMyUser } from './account/duck/actions';
import { initialize, startWatching } from '../utils/web3connect';

/* ########### */
/* ### APP ### */
/* ########### */

class Routes extends Component {
  componentWillMount() {
    this.props.getMyUser();
    this.props.initialize()
      .then(this.props.startWatching)
  };

  render () {
    return (
      <Router>
        <Switch>
          <ProtectedRoute path="/account/:section" component={Account}     />
          <ProtectedRoute path="/account"          component={Account}     />
          <ProtectedRoute path="/algorithms/:id"   component={Algorithms}  />
          <ProtectedRoute path="/algorithms/"      component={Algorithms}  />
          <ProtectedRoute path="/bounties/:id"     component={Bounties}    />
          <ProtectedRoute path="/bounties"         component={Bounties}    />
          <ProtectedRoute path="/marketplace"      component={Marketplace} />

          <ProtectedRoute path="/details"          component={Onboarding}  />
          <ProtectedRoute path="/metamask"         component={Onboarding}  />

          <Route          path="/login"            component={Onboarding}  />
          <Route          path="/signup"           component={Onboarding}  />

          <Redirect to="/marketplace" />
        </Switch>
      </Router>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    getMyUser: () => dispatch(getMyUser()),
    initialize: () => dispatch(initialize()),
    startWatching: () => dispatch(startWatching()),
  })
)(Routes);
