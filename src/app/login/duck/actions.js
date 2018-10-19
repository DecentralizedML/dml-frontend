import types from './types';

const requestLogin = () => {
  return ({
    type: types.REQUEST_LOGIN,
  });
};

const loadUserData = (data) => {
  return ({
    type    : types.LOAD_USER_DATA,
    payload : {
      data,
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
