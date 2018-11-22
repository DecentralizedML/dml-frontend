import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Sorter, TextInput } from '@kyokan/kyokan-ui';

import BountyCard from '../BountyCard';
import BountiesListFilter from './BountiesListFilter';

const OPEN_FOR_ENROLLMENT_FILTER = 'OPEN_FOR_ENROLLMENT_FILTER'
const OPEN_FOR_SUBMISSIONS_FILTER = 'OPEN_FOR_SUBMISSIONS_FILTER'
const UNDER_EVALUATION_FILTER = 'UNDER_EVALUATION_FILTER'
const FINISHED_FILTER = 'FINISHED_FILTER'

const mockBounties = [
  {
    id: 1,
    name: 'Home Credit Default Risk',
    tagline: 'Can you predict how capable each applicant is of repaying a loan?',
    organization: 'Home Credit Group',
    userCount: 120,
    prizes: [250, 125, 60],
    enrollmentCloseDate: 1542400243046
  }
]

export default class Bounties extends PureComponent {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };

  state = {
    activeFilter: OPEN_FOR_ENROLLMENT_FILTER,
    bounties: []
  }

  componentDidMount () {
    this.setState({ bounties: [...mockBounties] })
  }

  renderFilters () {
    const { activeFilter } = this.state

    return (
      <div className="bounties-list__filters-container">
        <div className="bounties-list__filters-title">
          FILTER BY STATUS
        </div>
        <div className="bounties-list__filters">
          <BountiesListFilter
            isActive={activeFilter === OPEN_FOR_ENROLLMENT_FILTER}
            onClick={() => this.setState({ activeFilter: OPEN_FOR_ENROLLMENT_FILTER })}
          >
            Open for Enrollment
          </BountiesListFilter>
          <BountiesListFilter
            isActive={activeFilter === OPEN_FOR_SUBMISSIONS_FILTER}
            onClick={() => this.setState({ activeFilter: OPEN_FOR_SUBMISSIONS_FILTER })}
          >
            Open for Submissions
          </BountiesListFilter>
          <BountiesListFilter
            isActive={activeFilter === UNDER_EVALUATION_FILTER}
            onClick={() => this.setState({ activeFilter: UNDER_EVALUATION_FILTER })}
          >
            Under Evaluation
          </BountiesListFilter>
          <BountiesListFilter
            isActive={activeFilter === FINISHED_FILTER}
            onClick={() => this.setState({ activeFilter: FINISHED_FILTER })}
          >
            Finished
          </BountiesListFilter>
        </div>
      </div>
    )
  }

  render () {
    const { history } = this.props;
    const { bounties } = this.state;

    return (
      <div className="bounties-list">
        <div className="bounties-list__sidebar">
          <TextInput placeholder="Search" />
          { this.renderFilters() }
        </div>
        <div className="bounties-list__bounties-container">
          <div className="bounties-list__bounties-header">
            <div className="bounties-list__bounties-count">
              <b>22</b> Bounties
            </div>
            <Sorter
              prefix="Sort by:"
              sortOptions={['Deadline']}
            />
          </div>
          <div className="bounties-list__bounties">
            {
              bounties.map(bounty => {
                const {
                  id,
                  name,
                  tagline,
                  organization,
                  enrollmentCloseDate,
                  userCount,
                  prizes = []
                } = bounty;

                const prizePool = prizes.reduce((acc, base) => acc + base, 0);

                return (
                  <BountyCard
                    onClick={() => history.push(`/authenticated/bounties/${id}`)}
                    title={name}
                    subtitle={tagline}
                    organization={organization}
                    enrollmentCloseDate={enrollmentCloseDate}
                    prizePool={prizePool}
                    count={userCount}
                    key={id}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
