import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import BountyPrize from './BountyPrize';

export default class BountyPrizes extends PureComponent {
  static propTypes = {
    prizes: PropTypes.array,
  }

  render () {
    const { prizes } = this.props;

    return (
      <div className="bounty-prizes">
        <div className="bounty-prizes__title">
          Prizes
        </div>
        <div className="bounty-prizes__prizes">
          {
            prizes.map((prize, index) => (
              <BountyPrize
                className="bounty-prizes__prize"
                tokens={prize}
                place={index + 1}
                key={index}
              />
            ))
          }
        </div>
        <div className="bounty-prizes__title">
          How prizes are awarded
        </div>
        <div className="bounty-prizes__description">
          Once the bounty creator picks the winners, all prizes will be paid out to the corresponding developers' Metamask wallet.
        </div>
      </div>
    )
  }
}
