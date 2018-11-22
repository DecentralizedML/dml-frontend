import React from 'react';
import PropTypes from 'prop-types';
import DMLLogo from '../DMLLogo';

export default function TokenDisplay (props) {
  const { tokens } = props

  return (
    <div className="token-display">
      <div className="token-display__tokens">
        { tokens }
      </div>
      <DMLLogo
        className="token-display__dml-logo"
        type="blue"
      />
    </div>
  )
};

TokenDisplay.propTypes = {
  tokens: PropTypes.number
};
