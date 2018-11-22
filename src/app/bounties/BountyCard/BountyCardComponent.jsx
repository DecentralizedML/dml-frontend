import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import TokenDisplay from '../../../components/TokenDisplay';
import BountyDetails from '../BountyDetails';

export default class BountyCard extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    onClick: PropTypes.func,
    organization: PropTypes.string,
    count: PropTypes.number,
  }

  render () {
    const {
      title,
      subtitle,
      onClick,
      organization,
      count,
      prizePool,
      enrollmentCloseDate
    } = this.props;

    return (
      <div
        className="bounty-card"
        onClick={onClick}
      >
        <div className="bounty-card__header">
          <div className="bounty-card__title">
            { title }
          </div>
          <div className="bounty-card__subtitle">
            { subtitle }
          </div>
        </div>
        <div className="bounty-card__details">
          <BountyDetails
            organization={organization}
            count={count}
            enrollmentCloseDate={enrollmentCloseDate}
          />
          <div className="bounty-card__prize-pool">
            <div className="bounty-card__prize-pool-label">
              PRIZE POOL
            </div>
            <TokenDisplay tokens={prizePool} />
          </div>
        </div>
      </div>
    )
  }
}
