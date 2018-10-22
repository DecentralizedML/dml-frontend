import types from './types';

const listUsers = () => {
  return ({
    type: types.LIST_USERS,
  });
};

const listUsersError = (error) => {
  return ({
    type    : types.LIST_USERS_ERROR,
    payload : {
      error,
    },
  });
};

const loadAccountData = (data) => {
  return ({
    type    : types.LOAD_ACCOUNT_DATA,
    payload : data,
  });
};

export const updateUser = (data) => {
  return ({
    type    : types.UPDATE_USER,
    payload : data,
  });
};

const updateUserError = (error) => {
  return ({
    type    : types.UPDATE_USER_ERROR,
    payload : {
      error,
    },
  });
};

const updateUserSuccess = () => {
  return ({
    type: types.UPDATE_USER_SUCCESS,
  });
};

export default {
  listUsers,
  listUsersError,
  loadAccountData,
  updateUser,
  updateUserError,
  updateUserSuccess,
};
