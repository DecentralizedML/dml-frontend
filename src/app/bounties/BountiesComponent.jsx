import React, { PureComponent } from "react";
import { Switch } from "react-router-dom";

import ProtectedRoute from "../auth/ProtectedRoute";

import BountiesSubheader from './BountiesSubheader';
import BountiesList from "./BountiesList";
import BountyCreate from "./BountyCreate";
import BountiesUser from "./BountiesUser";
import Bounty from "./Bounty";

export default class Bounties extends PureComponent {
  render () {
    return (
      <div className="bounties">
        <BountiesSubheader
          showAllBounties
          showMyParticipations
          showCreateBounty
        />
        <Switch>
          <ProtectedRoute path="/authenticated/bounties/create" component={BountyCreate} exact />
          <ProtectedRoute path="/authenticated/bounties/user" component={BountiesUser} exact />
          <ProtectedRoute path="/authenticated/bounties/:id" component={Bounty} />
          <ProtectedRoute path="/authenticated/bounties" component={BountiesList} exact />
        </Switch>
      </div>
    )
  }
}
