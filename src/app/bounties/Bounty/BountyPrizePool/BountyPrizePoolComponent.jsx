import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DMLLogo from '../../../../components/DMLLogo';

export default class BountyPrizePool extends PureComponent {
  static propTypes = {
    count: PropTypes.number,
    onEnroll: PropTypes.func,
  }

  render () {
    const { count, onEnroll } = this.props

    return (
      <div className="bounty-prize-pool">
        <div className="bounty-prize-pool__label">
          PRIZE POOL
        </div>
        <div className="bounty-prize-pool__tokens">
          <div className="bounty-prize-pool__count">
            { count }
          </div>
          <DMLLogo
            className="bounty-prize-pool__logo-container"
            type="white"
          />
        </div>
        <div className="bounty-prize-pool__enroll-button">
          Enroll in Bounty
        </div>
      </div>
    )
  }
}
