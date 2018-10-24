import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import DMLSiteHeaderComponent from './DMLSiteHeaderComponent';

const mapStateToProps = (state) => {
  const { userData } = state.account;

  return {
    userData,
  };
};

const mapDispatchToProps = (dispatch) => {};

const OnboardingContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(DMLSiteHeaderComponent),
);

export default OnboardingContainer;
