export const Actions = {
  SET_LOADING: 'SET_LOADING',
  SET_AUTH_REQUIRED: 'SET_AUTH_REQUIRED',
  REQUEST_LOGIN: 'REQUEST_LOGIN',
  REQUEST_OAUTH: 'REQUEST_OAUTH',
  REQUEST_GOOGLE_OAUTH: 'REQUEST_GOOGLE_OAUTH',
  REQUEST_FACEBOOK_OAUTH: 'REQUEST_FACEBOOK_OAUTH',
  AUTH_SUCCESS: 'AUTH_SUCCESS',
  AUTH_FAILURE: 'AUTH_FAILURE',
  AUTH_LOGOUT: 'AUTH_LOGOUT',
  CLEAR_FAILURES: 'CLEAR_FAILURES'
};

export const setLoading = (value) => ({
  type: Actions.SET_LOADING,
  payload: value
});

export const setAuthRequired = (value) => ({
  type: Actions.SET_AUTH_REQUIRED,
  payload: value
});

export const requestLogin = (username, password) => ({
  type: Actions.REQUEST_LOGIN,
  payload: { username, password }
});

export const requestOAuth = (provider, code) => ({
  type: Actions.REQUEST_OAUTH,
  payload: { provider, code }
});

export const requestGoogleOAuth = () => ({
  type: Actions.REQUEST_GOOGLE_OAUTH
});

export const requestFacebookOAuth = () => ({
  type: Actions.REQUEST_FACEBOOK_OAUTH
});

export const authSuccess = (user) => ({
  type: Actions.AUTH_SUCCESS,
  payload: user
});

export const authFailure = (e) => ({
  type: Actions.AUTH_FAILURE,
  payload: e
});

export const requestLogout = () => ({
  type: Actions.AUTH_LOGOUT
});

export const clearFailures = () => ({
  type: Actions.CLEAR_FAILURES
});
