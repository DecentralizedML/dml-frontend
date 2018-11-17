import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const BountiesSubheaderLink = props => {
  const { active, onClick, text } = props

  return (
    <div
      className={classnames('bounties-subheader-link', {
        'bounties-subheader-link--active': active
      })}
      onClick={onClick}
    >
      { text }
    </div>
  );
};

BountiesSubheaderLink.defaultProps = {
  active  : false,
  onClick : () =>  {},
};

BountiesSubheaderLink.propTypes = {
  text    : PropTypes.string.isRequired,
  active  : PropTypes.bool,
  onClick : PropTypes.func,
};

export default BountiesSubheaderLink;
