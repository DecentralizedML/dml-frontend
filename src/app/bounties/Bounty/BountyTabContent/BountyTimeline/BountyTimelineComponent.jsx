import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import BountyTimelineEntry from './BountyTimelineEntry';

export default class BountyTimeline extends PureComponent {
  static propTypes = {
    timeline: PropTypes.object,
  }

  render () {
    const { timeline: { enrollment, submissions, evaluation, winners } } = this.props;

    return (
      <div className="bounty-timeline">
        <div className="bounty-timeline__timeline-container">
          <BountyTimelineEntry
            title="Enrollment"
            startTimestamp={enrollment.start}
            deadlineTimestamp={enrollment.end}
          />
          <BountyTimelineEntry
            title="Submissions"
            startTimestamp={submissions.start}
            deadlineTimestamp={submissions.end}
          />
          <BountyTimelineEntry
            title="Evaluation"
            startTimestamp={evaluation.start}
            endTimestamp={evaluation.end}
          />
          <BountyTimelineEntry
            title="Winners"
            announcementTimestamp={winners.announcement}
          />
        </div>
        <div className="bounty-timeline__info">
          <ReactMarkdown
            source={'Bounty deadlines for each stage are at **11:59 PM UTC on the corresponding day.**\n\nThe bounty organizer reserves the right to update the contest timeline if they deem it necessary.'}
          />
        </div>
      </div>
    )
  }
}
