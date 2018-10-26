import { connect } from 'react-redux';

import BountiesUserComponent from './BountiesUserComponent';

const mapStateToProps = (state) => {
  return ({
    text            : state.text,
    isAuthenticated : state.account.isAuthenticated,
  });
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const BountiesUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BountiesUserComponent);

export default BountiesUserContainer;
