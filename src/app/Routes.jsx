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

import Authenticated from "./authenticated"
import Onboarding from "./onboarding";
import CreateAlgorithm from "./create-algorithm";
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
    return !this.props.initialized ? (
      <noscript />
    ) : (
      <Router>
        <Switch>
          {/* Move to Authenticated Component */}
          <ProtectedRoute
            path="/algorithms/edit/:algoId"
            component={CreateAlgorithm}
          />
          <ProtectedRoute path="/algorithms/new" component={CreateAlgorithm} />
          {/* Move to Authenticated Component */}
          <ProtectedRoute path="/authenticated" component={Authenticated} />
          <Route path="/details" component={Onboarding} />
          <Route path="/metamask" component={Onboarding} />
          <Route path="/login" component={Onboarding} />
          <Route path="/signup" component={Onboarding} />
          <Route path="/logout" component={Logout} />

          <Redirect to="/authenticated/marketplace" />
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
  ({ account }) => ({ initialized: account.initialized }),
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
