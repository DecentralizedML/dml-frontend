import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import DMLSiteSubheaderComponent from './DMLSiteSubheaderComponent';

const mapStateToProps = (state) => {
  return state;
};

const DMLSiteSubheaderContainer = withRouter(
  connect(
    mapStateToProps,
  )(DMLSiteSubheaderComponent),
);

export default DMLSiteSubheaderContainer;
