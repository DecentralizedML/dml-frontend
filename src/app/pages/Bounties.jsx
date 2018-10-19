import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Bounties = (props) => {
  return (
    <div>
      {props.isAuthenticated ? 'AUTHENTICATED BOUNTIES' : props.text}
    </div>
  );
};

Bounties.propTypes = {
  text            : PropTypes.string.isRequired,
  isAuthenticated : PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return ({
    text            : state.text,
    isAuthenticated : state.auth.isAuthenticated,
  });
};

export default connect(mapStateToProps)(Bounties);
