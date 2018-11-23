import React from "react";
import { Switch, Route } from "react-router-dom";

import BountyDescription from "./BountyDescription";
import BountyPrizes from "./BountyPrizes";
import BountyTimeline from "./BountyTimeline";

export default function BountyTabContent(props) {
  const { bounty } = props;
  const { description, prizes, timeline, create } = bounty;

  const root = create
    ? "/authenticated/bounties/create"
    : "/authenticated/bounties/:id";

  const placeholder = title => {
    return (
      <div>
        <p class="md-block-unstyled">
          <strong class="md-inline-bold">{title}</strong>
        </p>
        <p class="md-block-unstyled">Your description here.</p>
      </div>
    );
  };

  const renderContent = htmlAsJSON => {
    let content = "";
    if (htmlAsJSON) {
      console.log(htmlAsJSON);
      content = JSON.parse(htmlAsJSON);
    }
    return content;
  };

  return (
    <Switch>
      <Route
        path={`${root}/prizes`}
        render={props => <BountyPrizes {...props} prizes={prizes} />}
      />
      <Route
        path={`${root}/timeline`}
        render={props => <BountyTimeline {...props} timeline={timeline} />}
      />
      <Route
        path={`${root}/data`}
        render={props => (
          <BountyDescription {...props} content={placeholder("Data")} />
        )}
      />
      <Route
        path={`${root}/data`}
        render={props => (
          <BountyDescription {...props} content={placeholder("Data")} />
        )}
      />
      <Route
        path={`${root}/evaluation`}
        render={props => (
          <BountyDescription {...props} content={placeholder("Evaluation")} />
        )}
      />
      <Route
        path={`${root}/rules`}
        render={props => (
          <BountyDescription {...props} content={placeholder("Rules")} />
        )}
      />
      <Route
        path={`${root}/submission`}
        render={props => (
          <BountyDescription {...props} content={placeholder("Submission")} />
        )}
      />
      <Route
        path={`${root}`}
        render={props => (
          <BountyDescription
            {...props}
            content={placeholder("WE NEED TO IMPLEMENT THIS")}
          />
        )}
      />
    </Switch>
  );
}
