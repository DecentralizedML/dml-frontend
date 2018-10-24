import { connect } from 'react-redux';

import BountiesComponent from './BountiesComponent';

const mapStateToProps = (state) => {
  return ({
    text            : state.text,
    isAuthenticated : state.account.isAuthenticated,
  });
};

const mapDispatchToProps = (dispatch) => {};

const BountiesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BountiesComponent);

export default BountiesContainer;
