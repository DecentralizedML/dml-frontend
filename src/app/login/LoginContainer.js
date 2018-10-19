import { connect } from 'react-redux';

import LoginComponent from './LoginComponent';
import { loginTypes } from './duck';

const mapStateToProps = (state) => {
  const { userData }        = state.account;
  const { isAuthenticated } = state.auth;

  return {
    userData,
    isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  const authenticate = (email, password) => {
    dispatch({
      type    : loginTypes.REQUEST_LOGIN,
      payload : {
        email    : email,
        password : password,
      },
    });
  };

  return {
    authenticate,
  };
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginComponent);

export default LoginContainer;
