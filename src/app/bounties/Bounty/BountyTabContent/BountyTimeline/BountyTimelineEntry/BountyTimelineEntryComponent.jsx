import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classnames from 'classnames';

export default class BountyTimelineEntry extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    startTimestamp: PropTypes.number,
    deadlineTimestamp: PropTypes.number,
    endTimestamp: PropTypes.number,
    announcementTimestamp: PropTypes.number
  }

  renderStart () {
    const { startTimestamp } = this.props

    return startTimestamp && (
      <div className="bounty-timeline-entry__date">
        Start: <b>{ moment(startTimestamp).format('MMMM do, YYYY') }</b>
      </div>
    )
  }

  renderDeadline () {
    const { deadlineTimestamp } = this.props

    return deadlineTimestamp && (
      <div className="bounty-timeline-entry__date">
        Deadline: <b>{ moment(deadlineTimestamp).format('MMMM do, YYYY') }</b>
      </div>
    )
  }

  renderEnd () {
    const { endTimestamp } = this.props

    return endTimestamp && (
      <div className="bounty-timeline-entry__date">
        End: <b>{ moment(endTimestamp).format('MMMM do, YYYY') }</b>
      </div>
    )
  }

  renderAnnouncement () {
    const { announcementTimestamp } = this.props

    return announcementTimestamp && (
      <div className="bounty-timeline-entry__date">
        End: <b>{ moment(announcementTimestamp).format('MMMM do, YYYY') }</b>
      </div>
    )
  }

  isPastStart () {
    const { startTimestamp } = this.props;
    return moment.now() > startTimestamp;
  }

  isPastEnd () {
    const { deadlineTimestamp, endTimestamp, announcementTimestamp } = this.props;
    const lastTimestamp = deadlineTimestamp || endTimestamp || announcementTimestamp;
    return moment.now() > lastTimestamp;
  }

  renderPassedLine () {
    const { announcementTimestamp } = this.props;
    const pastStart = this.isPastStart();
    const pastEnd = this.isPastEnd();

    return !announcementTimestamp && pastStart && (
      <div className={classnames('bounty-timeline-entry__passed-line', {
        'bounty-timeline-entry__passed-line--full': pastEnd
      })} />
    )
  }

  render () {
    const { title, announcementTimestamp } = this.props;

    return (
      <div className="bounty-timeline-entry">
        <div className={classnames('bounty-timeline-entry__dot', {
          'bounty-timeline-entry__dot--past': this.isPastStart()
        })} />
        {
          !announcementTimestamp && <div className="bounty-timeline-entry__line" />
        }
        { this.renderPassedLine() }
        <div className="bounty-timeline-entry__section">
          <div className="bounty-timeline-entry__title">
            { title }
          </div>
          <div className="bounty-timeline-entry__dates">
            { this.renderStart() }
            { this.renderDeadline() }
            { this.renderEnd() }
            { this.renderAnnouncement() }
          </div>
        </div>
      </div>
    )
  }
}
