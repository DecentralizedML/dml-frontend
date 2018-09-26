export const Actions = {
  SET_LOADING: 'SET_LOADING',
  REQUEST_LOGIN: 'REQUEST_LOGIN',
  REQUEST_OAUTH: 'REQUEST_OAUTH',
  AUTH_SUCCESS: 'AUTH_SUCCESS',
  AUTH_FAILURE: 'AUTH_FAILURE',
  AUTH_LOGOUT: 'AUTH_LOGOUT'
};

export const setLoading = (value) => ({
  type: Actions.SET_LOADING,
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
