import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import DMLSiteHeaderComponent from './DMLSiteHeaderComponent';

const mapStateToProps = (state) => {
  const { firstName, lastName } = state.account;

  return {
    userName: `${firstName} ${lastName}`,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const OnboardingContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(DMLSiteHeaderComponent),
);

export default OnboardingContainer;
