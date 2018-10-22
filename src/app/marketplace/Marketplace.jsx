import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Marketplace = (props) => {
  return (
    <div>
      {props.isAuthenticated ? 'AUTHENTICATED MARKETPLACE' : props.text}
    </div>
  );
};

Marketplace.propTypes = {
  text            : PropTypes.string.isRequired,
  isAuthenticated : PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return ({
    text            : state.text,
    isAuthenticated : state.account.isAuthenticated,
  });
};

export default connect(mapStateToProps)(Marketplace);
