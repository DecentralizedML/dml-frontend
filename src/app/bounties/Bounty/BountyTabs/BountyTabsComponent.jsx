import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { matchPath } from 'react-router-dom';

import BountyTab from '../BountyTab';

export default class BountyTabs extends PureComponent {
  static propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    bountyId: PropTypes.number,
  }

  isActive (path) {
    return Boolean(matchPath(this.props.location.pathname, {
      path, exact: true,
    }))
  }

  render () {
    const { className, history, bountyId } = this.props;
    const url = `/authenticated/bounties/${bountyId}`;

    return (
      <div className={classnames('bounty-tabs', className)}>
        <BountyTab
          onClick={() => history.push(url)}
          isActive={this.isActive(url)}
        >
          Description
        </BountyTab>
        <BountyTab
          onClick={() => history.push(`${url}/prizes`)}
          isActive={this.isActive(`${url}/prizes`)}
        >
          Prizes
        </BountyTab>
        <BountyTab
          onClick={() => history.push(`${url}/timeline`)}
          isActive={this.isActive(`${url}/timeline`)}
        >
          Timeline
        </BountyTab>
        <BountyTab
          onClick={() => history.push(`${url}/data`)}
          isActive={this.isActive(`${url}/data`)}
        >
          Data
        </BountyTab>
        <BountyTab
          onClick={() => history.push(`${url}/evaluation`)}
          isActive={this.isActive(`${url}/evaluation`)}
        >
          Evaluation
        </BountyTab>
        <BountyTab
          onClick={() => history.push(`${url}/rules`)}
          isActive={this.isActive(`${url}/rules`)}
        >
          Rules
        </BountyTab>
        <BountyTab
          onClick={() => history.push(`${url}/submission`)}
          isActive={this.isActive(`${url}/submission`)}
        >
          Submission
        </BountyTab>
        <div className="bounty-tabs__placeholder" />
      </div>
    )
  }
}
