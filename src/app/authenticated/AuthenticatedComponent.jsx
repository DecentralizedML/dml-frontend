import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import ProtectedRoute from "../auth/ProtectedRoute";

import DMLSiteHeader from "../dml-site-header";
import Account from "../account";
import Algorithms from "../algorithms";
import Bounties from "../bounties";
import Marketplace from "../marketplace";
import CreateAlgorithm from "../create-algorithm";

export default class Authenticated extends PureComponent {
  render() {
    return (
      <div className="authenticated">
        <div>
          <DMLSiteHeader
            showMarketplace
            showBounties
            showAlgorithms
            showAreateAlgorithm
            showAccountDropdown
            showCreateAlgorithm
          />
        </div>
        <Switch>
          <ProtectedRoute
            path="/authenticated/account/:section(profile|wallet)"
            component={Account}
          />
          <ProtectedRoute path="/authenticated/account" component={Account} />
          <ProtectedRoute
            path="/authenticated/algorithms/edit/:id"
            component={CreateAlgorithm}
          />
          <ProtectedRoute
            path="/authenticated/algorithms/new"
            component={CreateAlgorithm}
          />
          <ProtectedRoute
            path="/authenticated/algorithms/"
            component={Algorithms}
          />
          <ProtectedRoute path="/authenticated/bounties" component={Bounties} />
          <ProtectedRoute
            path="/authenticated/marketplace/:algoId?"
            component={Marketplace}
          />
          <Redirect to="/authenticated/marketplace" />
        </Switch>
      </div>
    );
  }
}
