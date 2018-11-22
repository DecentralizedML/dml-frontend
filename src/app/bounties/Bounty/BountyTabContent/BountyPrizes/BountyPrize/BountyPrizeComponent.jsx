import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import DMLLogo from '../../../../../../components/DMLLogo';

const placementHash = {
  1: '1ST',
  2: '2ND',
  3: '3RD'
};

export default class BountyPrize extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    tokens: PropTypes.number,
    place: PropTypes.number,
  }

  render () {
    const { className, tokens, place } = this.props

    return (
      <div className={classnames('bounty-prize', className)}>
        <img
          src="/logos/Logo-Icon-Blue.svg"
          width="50"
          height="50"
        />
        <div className="bounty-prize__details">
          <div className="bounty-prize__title">
            { `${placementHash[place]} PLACE` }
          </div>
          <div className="bounty-prize__tokens">
            <div className="bounty-prize__tokens-count">
              { tokens }
            </div>
            <DMLLogo
              className="bounty-prize__dml-logo"
              type="blue"
            />
          </div>
        </div>
      </div>
    )
  }
}
