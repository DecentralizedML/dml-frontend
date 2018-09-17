export const Actions = {
  SET_LOADING: 'SET_LOADING',
  REQUEST_LOGIN: 'REQUEST_LOGIN',
  REQUEST_LOGOUT: 'REQUEST_LOGOUT'
};

export const setLoading = (value) => ({
  type: Actions.SET_LOADING,
  payload: value
});

export const requestLogin = (username, password) => ({
  type: Actions.REQUEST_LOGIN,
  payload: {
    username: username,
    password: password
  }
});

export const requestLogout = () => ({
  type: Actions.REQUEST_LOGOUT
});
