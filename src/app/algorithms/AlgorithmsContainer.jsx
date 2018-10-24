import { connect } from 'react-redux';

import AlgorithmsComponent from './AlgorithmsComponent';

const mapStateToProps = (state) => {
  return ({
    text            : state.text,
    isAuthenticated : state.account.isAuthenticated,
  });
};

const AlgorithmsContainer = connect(
  mapStateToProps,
)(AlgorithmsComponent);

export default AlgorithmsContainer;
