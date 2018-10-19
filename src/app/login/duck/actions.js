import types from './types';

const requestLogin = () => {
  return ({
    type: types.REQUEST_LOGIN,
  });
};

const loadUserData = (userData) => {
  return ({
    type    : types.LOAD_USER_DATA,
    payload : {
      userData,
    },
  });
};

const loadUserDataError = (error) => {
  return ({
    type    : types.LOAD_USER_DATA_ERROR,
    payload : {
      error,
    },
  });
};

export default {
  requestLogin,
  loadUserData,
  loadUserDataError,
};
