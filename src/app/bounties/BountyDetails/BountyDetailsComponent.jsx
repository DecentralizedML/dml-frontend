import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { CountMetric } from '@kyokan/kyokan-ui';

export default class BountyDetails extends PureComponent {
  static propTypes = {
    organization: PropTypes.string,
    count: PropTypes.number,
    enrollmentCloseDate: PropTypes.number
  }

  static defaultProps = {
    count: 0,
  }

  render () {
    const { organization, count, enrollmentCloseDate } = this.props

    return (
      <div className="bounty-details">
        <div className="bounty-details__organization">
          { organization }
        </div>
        <div className="bounty-details__count-metric">
          <CountMetric
            icon="user"
            metricValue={count}
          />
        </div>
        <div className="bounty-details__enrollment">
          Enrollment Closes: <b>{ moment(enrollmentCloseDate).format('MMM Do') }</b>
        </div>
      </div>
    )
  }
}
