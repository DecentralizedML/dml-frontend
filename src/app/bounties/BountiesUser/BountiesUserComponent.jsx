import React from 'react';
import PropTypes from 'prop-types';
import BountyCard from '../BountyCard';

import { Sorter } from '@kyokan/kyokan-ui';

const BountiesUserComponent = (props) => {
  return (
    <div className="bounties-user">
      <div className="bounties-user__bounties-container">
        <div className="bounties-user__bounties-header">
          <div className="bounties-user__bounties-count">
            <b>22</b> Bounties
          </div>
          <Sorter
            prefix="Sort by:"
            sortOptions={['Deadline']}
          />
        </div>
        <div className="bounties-user__bounties">
          <BountyCard
            onClick={() => props.history.push('/authenticated/bounties/1')}
            title="Home Credit Default Risk"
            subtitle="Can you predict how capable each applicant is of repaying a loan?"
            organization="Home Credit Group"
            enrollmentCloseDate="Sep 5"
            prizePool={250}
            count={120}
          />
        </div>
      </div>
    </div>
  );
};

BountiesUserComponent.propTypes = {
  history: PropTypes.object.isRequired,
};

export default BountiesUserComponent;
