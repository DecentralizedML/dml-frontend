import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Algorithms = (props) => {
  return (
    <div>
      {props.isAuthenticated ? 'AUTHENTICATED ALGO' : props.text}
    </div>
  );
};

Algorithms.propTypes = {
  text            : PropTypes.string.isRequired,
  isAuthenticated : PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return ({
    text            : state.text,
    isAuthenticated : state.account.isAuthenticated,
  });
};

export default connect(mapStateToProps)(Algorithms);
