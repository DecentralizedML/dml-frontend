import React, { Component } from "react";
import BountyTabContent from "../Bounty/BountyTabContent/";
import BountyTabs from "../Bounty/BountyTabs/";
import BountyDetails from "../BountyDetails";
import BountyPrizePool from "../Bounty/BountyPrizePool";

// import PropTypes from 'prop-types';

class BountyCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bounty: {
        create: true,
        id: 0,
        name: "Your Awesome Name",
        tagline: "Your Amazing Tagline",
        organization: "My Awesome Organization",
        userCount: 0,
        description: "",
        prizes: [1, 2, 3],
        timeline: {
          enrollment: {
            start: 0,
            end: 0
          },
          submissions: {
            start: 0,
            end: 0
          },
          evaluation: {
            start: 0,
            end: 0
          },
          winners: {
            announcement: 0
          }
        }
      }
    };
  }

  render() {
    const { bounty = {} } = this.state;
    const {
      create,
      id,
      name,
      tagline,
      organization,
      userCount,
      prizes = []
    } = bounty;
    const prizePool = prizes.reduce((acc, base) => acc + base, 0);

    console.log("logging inside the create ", bounty);
    return (
      <div className="bounty__container">
        <div className="bounty">
          <div className="bounty__header">
            <div className="bounty__info">
              <div className="bounty__title">{name}</div>
              <div className="bounty__subtitle">{tagline}</div>
              <div className="bounty__details">
                {/* need new component to implement organization name*/}
                <BountyDetails organization={organization} count={userCount} />
              </div>
            </div>
            <div className="">
              {/* need new component to implement bounty prizepool */}
              <BountyPrizePool count={prizePool} onEnroll={() => {}} />
            </div>
          </div>
          <div className="bounty__tabs-container">
            <BountyTabs
              className="bounty__tabs"
              bountyId={id}
              create={create}
            />
            <div className="bounty__tab-content">
              <BountyTabContent bounty={bounty} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BountyCreate.propTypes = {};

export default BountyCreate;
