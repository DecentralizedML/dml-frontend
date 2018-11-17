import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BountyDescription from './BountyDescription';
import BountyPrizes from './BountyPrizes';
import BountyTimeline from './BountyTimeline';

export default function BountyTabContent (props) {
  const { bounty } = props;
  const { description, prizes, timeline } = bounty;

  return (
    <Switch>
      <Route
        path="/authenticated/bounties/:id/prizes"
        render={props => (
          <BountyPrizes
            { ...props }
            prizes={prizes}
          />
        )}
      />
      <Route
        path="/authenticated/bounties/:id/timeline"
        render={props => (
          <BountyTimeline
            { ...props }
            timeline={timeline}
          />
        )}
      />
      <Route
        path="/authenticated/bounties/:id/data"
        render={props => (
          <BountyDescription
            { ...props }
            content={'# Data\n\nIntro'}
          />
        )}
      />
      <Route
        path="/authenticated/bounties/:id/data"
        render={props => (
          <BountyDescription
            { ...props }
            content={'# Data\n\nIntro'}
          />
        )}
      />
      <Route
        path="/authenticated/bounties/:id/evaluation"
        render={props => (
          <BountyDescription
            { ...props }
            content={'# Evaluation\n\nIntro'}
          />
        )}
      />
      <Route
        path="/authenticated/bounties/:id/rules"
        render={props => (
          <BountyDescription
            { ...props }
            content={'# Rules\n\nIntro'}
          />
        )}
      />
      <Route
        path="/authenticated/bounties/:id/submission"
        render={props => (
          <BountyDescription
            { ...props }
            content={'# Submission\n\nIntro'}
          />
        )}
      />
      <Route
        path="/authenticated/bounties/:id"
        render={props => (
          <BountyDescription
            { ...props }
            content={description}
          />
        )}
      />
    </Switch>
  )
}
