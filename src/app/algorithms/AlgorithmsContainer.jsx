import { connect } from 'react-redux';

import AlgorithmsComponent from './AlgorithmsComponent';

const mapStateToProps = (state) => {
  return ({
    text            : state.text,
    isAuthenticated : state.account.isAuthenticated,
  });
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const AlgorithmsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlgorithmsComponent);

export default AlgorithmsContainer;
