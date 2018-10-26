import { connect } from 'react-redux';

import BountiesListComponent from './BountiesListComponent';

const mapStateToProps = (state) => {
  return ({
    text            : state.text,
    isAuthenticated : state.account.isAuthenticated,
  });
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const BountiesListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BountiesListComponent);

export default BountiesListContainer;
