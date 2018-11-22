import { connect } from 'react-redux';
import BountiesListComponent from './BountiesListComponent';

const mapStateToProps = (state) => {
  return ({
    text            : state.text,
    isAuthenticated : state.account.isAuthenticated,
  });
};

export default connect(mapStateToProps)(BountiesListComponent);
