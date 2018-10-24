import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import authActions from './duck/actions';

const Logout = (props) => {
  localStorage.clear();
  props.logout();
  props.history.push('/login');

  return null;
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return (
    {
      logout: () => {
        dispatch(authActions.logout());
      },
    }
  );
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Logout));
