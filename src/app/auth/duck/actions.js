import types from './types';

const facebookOAuth = (data) => {
  return ({
    type    : types.FACEBOOK_OAUTH,
    payload : data,
  });
};

const facebookOAuthError = (error) => {
  return ({
    type    : types.FACEBOOK_OAUTH_ERROR,
    payload : {
      error,
    },
  });
};

const facebookOAuthSuccess = () => {
  return ({
    type: types.FACEBOOK_OAUTH_SUCCESS,
  });
};

const googleOAuth = (data) => {
  return ({
    type    : types.GOOGLE_OAUTH,
    payload : data,
  });
};

const googleOAuthError = (error) => {
  return ({
    type    : types.GOOGLE_OAUTH_ERROR,
    payload : {
      error,
    },
  });
};

const googleOAuthSuccess = () => {
  return ({
    type: types.GOOGLE_OAUTH_SUCCESS,
  });
};

const login = (data) => {
  return ({
    type    : types.LOGIN,
    payload : data,
  });
};

const loginError = (error) => {
  return ({
    type    : types.LOGIN_ERROR,
    payload : {
      error,
    },
  });
};

const loginSuccess = () => {
  return ({
    type: types.LOGIN_SUCCESS,
  });
};

const logout = () => {
  return ({
    type: types.LOGOUT,
  });
};

const logoutError = (error) => {
  return ({
    type    : types.LOGOUT_ERROR,
    payload : {
      error,
    },
  });
};

const logoutSuccess = () => {
  return ({
    type: types.LOGOUT_SUCCESS,
  });
};

const signup = (data) => {
  return ({
    type    : types.SIGNUP,
    payload : data,
  });
};

const signupError = (error) => {
  return ({
    type    : types.SIGNUP_ERROR,
    payload : {
      error,
    },
  });
};

const signupSuccess = () => {
  return ({
    type: types.SIGNUP_SUCCESS,
  });
};

export default {
  facebookOAuth,
  facebookOAuthError,
  facebookOAuthSuccess,
  googleOAuth,
  googleOAuthError,
  googleOAuthSuccess,
  login,
  loginError,
  loginSuccess,
  logout,
  logoutError,
  logoutSuccess,
  signup,
  signupError,
  signupSuccess,
};
