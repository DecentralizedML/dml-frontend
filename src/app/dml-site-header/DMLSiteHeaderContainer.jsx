import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import DMLSiteHeaderComponent from './DMLSiteHeaderComponent';

const mapStateToProps = (state) => {
  const { firstName, lastName } = state.account;

  return {
    userName: `${firstName} ${lastName}`,
  };
};

const OnboardingContainer = withRouter(
  connect(
    mapStateToProps,
  )(DMLSiteHeaderComponent),
);

export default OnboardingContainer;
