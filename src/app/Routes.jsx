/* eslint-disable react/prefer-stateless-function */

import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { connect } from "react-redux";

import Account from "./account";
import Algorithms from "./algorithms";
import BountiesList from "./bounties/BountiesList";
import BountyCreate from "./bounties/BountyCreate";
import BountiesUser from "./bounties/BountiesUser";
import Bounty from "./bounties/Bounty";
import Marketplace from "./marketplace";
import Onboarding from "./onboarding";

import ProtectedRoute from "./auth/ProtectedRoute";
import Logout from "./auth/Logout";

import accountActions from "./account/duck/actions";
import algorithmsActions from "./algorithms/duck/actions";
import marketplaceActions from "./marketplace/duck/actions";
import { listAlgorithms as getAllAlgorithms } from "./algorithms/duck/api";

import { initialize, startWatching } from "../utils/web3connect";

class Routes extends Component {
  async componentWillMount() {
    this.props.hydrateUserData();
    this.props.initialize().then(this.props.startWatching);
    await this.props.hydrateAlgorithmData();
    // this.props.hydrateUserAlgorithms();
    // -> 'entry point to everything'
  }

  render() {
    return (
      <Router>
        <Switch>
          <ProtectedRoute
            path="/account/:section(profile|wallet)"
            component={Account}
          />
          <ProtectedRoute path="/account" component={Account} />
          <ProtectedRoute path="/algorithms/:id" component={Algorithms} />
          <ProtectedRoute path="/algorithms/" component={Algorithms} />
          <ProtectedRoute path="/bounties/create" component={BountyCreate} />
          <ProtectedRoute path="/bounties/user" component={BountiesUser} />
          <ProtectedRoute path="/bounties/:id" component={Bounty} />
          <ProtectedRoute path="/bounties" component={BountiesList} />
          <ProtectedRoute path="/marketplace" component={Marketplace} />
          <ProtectedRoute path="/marketplace/:id" component={Marketplace} />

          <ProtectedRoute path="/details" component={Onboarding} />
          <ProtectedRoute path="/metamask" component={Onboarding} />

          <Route path="/login" component={Onboarding} />
          <Route path="/signup" component={Onboarding} />
          <Route path="/logout" component={Logout} />

          <Redirect to="/marketplace" />
        </Switch>
      </Router>
    );
  }
}

Routes.propTypes = {
  hydrateUserData: PropTypes.func.isRequired,
  initialize: PropTypes.func.isRequired,
  startWatching: PropTypes.func.isRequired
};

export default connect(
  null,
  dispatch => {
    return {
      hydrateUserData: () => {
        return dispatch(accountActions.hydrateUserData());
      },
      initialize: () => {
        return dispatch(initialize());
      },
      startWatching: () => {
        return dispatch(startWatching());
      },
      hydrateAlgorithmData: async () => {
        dispatch(marketplaceActions.startLoadingAlgorithms());
        const response = await getAllAlgorithms();
        dispatch(algorithmsActions.listAlgorithms(response.data));
        return dispatch(marketplaceActions.finishLoadingAlgorithms());
      }
    };
  }
)(Routes);
