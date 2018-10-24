import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SignupComponent from './SignupComponent';

import { requestOAuth, requestGoogleOAuth, requestFacebookOAuth } from '../../../../actions';

import authActions from '../../../auth/duck/actions';

const mapStateToProps = () => {
  return {
    email    : null,
    password : null,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (email, password) => {
      dispatch(authActions.login({
        email,
        password,
        history: ownProps.history,
      }));
    },
    signup: (email, password, passwordConfirmation, next) => {
      dispatch(authActions.signup({
        user: {
          email                 : email,
          password              : password,
          password_confirmation : passwordConfirmation,
        },
        next,
      }));
    },
    requestOAuth: (provider, code) => {
      dispatch(requestOAuth(provider, code));
    },
    requestGoogleOAuth: () => {
      dispatch(requestGoogleOAuth());
    },
    requestFacebookOAuth: () => {
      dispatch(requestFacebookOAuth());
    },
  };
};

const SignupContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SignupComponent),
);

export default SignupContainer;
