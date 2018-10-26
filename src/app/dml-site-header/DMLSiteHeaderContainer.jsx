import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import DMLSiteHeaderComponent from './DMLSiteHeaderComponent';

const mapStateToProps = (state) => {
  const { firstName, lastName } = state.account;

  return {
    userName: `${firstName} ${lastName}`,
  };
};

const DMLSiteHeaderContainer = withRouter(
  connect(
    mapStateToProps,
  )(DMLSiteHeaderComponent),
);

export default DMLSiteHeaderContainer;
