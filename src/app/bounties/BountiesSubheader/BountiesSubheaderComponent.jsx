import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { matchPath } from 'react-router-dom'

import BountiesSubheaderLink from './BountiesSubheaderLink';

export default class BountiesSubheader extends PureComponent {
  static propTypes = {
    showAllBounties: PropTypes.bool,
    showCreateBounty: PropTypes.bool,
    history: PropTypes.object.isRequired,
    location: PropTypes.object,
    showMyParticipations: PropTypes.bool,
  };

  static defaultProps = {
    showAllBounties: false,
    showCreateBounty: false,
    showMyParticipations: false,
  };

  isActive (path) {
    return Boolean(matchPath(this.props.location.pathname, {
      path, exact: true,
    }))
  }

  renderAllBounties () {
    const { showAllBounties, history } = this.props

    return showAllBounties && (
      <BountiesSubheaderLink
        text="All Bounties"
        active={this.isActive('/authenticated/bounties')}
        onClick={() => history.push('/authenticated/bounties')}
      />
    )
  }

  renderMyParticipations () {
    const { showMyParticipations, history } = this.props

    return showMyParticipations && (
      <BountiesSubheaderLink
        text="My Participations"
        active={this.isActive('/authenticated/bounties/user')}
        onClick={() => history.push('/authenticated/bounties/user')}
      />
    )
  }

  renderCreateBounty () {
    const { showCreateBounty, history } = this.props

    return showCreateBounty && (
      <BountiesSubheaderLink
        text="Create Bounty"
        active={this.isActive('/authenticated/bounties/create')}
        onClick={() => history.push('/authenticated/bounties/create')}
      />
    )
  }

  render () {
    return (
      <div className="bounties-subheader">
        { this.renderAllBounties() }
        { this.renderMyParticipations() }
        { this.renderCreateBounty() }
      </div>
    )
  }
}
