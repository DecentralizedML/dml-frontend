import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import BountyDetails from "../BountyDetails";
import BountyPrizePool from "./BountyPrizePool";

import BountyTabs from "./BountyTabs";
import BountyTabContent from "./BountyTabContent";

const mockBounty = {
  id: 1,
  name: "Home Credit Default Risk",
  tagline: "Can you predict how capable each applicant is of repaying a loan?",
  organization: "Home Credit Group",
  userCount: 120,
  prizes: [250, 125, 60],
  description: JSON.stringify(
    <div>
      <p class="md-block-unstyled">
        <strong class="md-inline-bold">Description</strong>
      </p>
      <p class="md-block-unstyled">Your description here.</p>
    </div>
  ),
  timeline: {
    enrollment: {
      start: 1542400222686,
      end: 1542400243046
    },
    submissions: {
      start: 1542401661898,
      end: 1545401674359
    },
    evaluation: {
      start: 1645522714727,
      end: 1742401714780
    },
    winners: {
      announcement: 1753401714727
    }
  }
};

export default class Bounty extends PureComponent {
  state = {
    bounty: {}
  };

  componentDidMount() {
    this.setState({ bounty: { ...mockBounty } });
  }

  render() {
    const { bounty = {} } = this.state;
    const { id, name, tagline, organization, userCount, prizes = [] } = bounty;
    const prizePool = prizes.reduce((acc, base) => acc + base, 0);
    return (
      <div className="bounty__container">
        <div className="bounty">
          <div className="bounty__header">
            <div className="bounty__info">
              <div className="bounty__title">{name}</div>
              <div className="bounty__subtitle">{tagline}</div>
              <div className="bounty__details">
                <BountyDetails
                  organization={organization}
                  count={userCount}
                  enrollmentCloseDate={1542401661898}
                />
              </div>
            </div>
            <div className="">
              <BountyPrizePool count={prizePool} onEnroll={() => {}} />
            </div>
          </div>
          <div className="bounty__tabs-container">
            <BountyTabs className="bounty__tabs" bountyId={id} />
            <div className="bounty__tab-content">
              <BountyTabContent bounty={bounty} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
