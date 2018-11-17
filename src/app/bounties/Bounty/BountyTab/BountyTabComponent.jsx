import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'

export default class BountyTab extends PureComponent {
  static propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
    isActive: PropTypes.bool,
  }

  render () {
    const { children, onClick, isActive } = this.props

    return (
      <div
        className={classnames('bounty-tab', {
          'bounty-tab--active': isActive,
        })}
        onClick={onClick}
      >
        { children }
      </div>
    )
  }
}
