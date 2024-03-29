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

const hydrateUserData = history => {
  return {
    type: types.HYDRATE_USER_DATA,
    payload: {
      history,
    },
  };
};

const hydrateUserDataError = (error) => {
  return {
    type    : types.HYDRATE_USER_DATA_ERROR,
    payload : {
      error,
    },
  };
};

const hydrateUserDataSuccess = () => {
  return {
    type: types.HYDRATE_USER_DATA_SUCCESS,
  };
};

const loadAccountData = (data) => {
  return ({
    type    : types.LOAD_ACCOUNT_DATA,
    payload : data,
  });
};

const updateUser = (data) => {
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
  hydrateUserData,
  hydrateUserDataError,
  hydrateUserDataSuccess,
  loadAccountData,
  updateUser,
  updateUserError,
  updateUserSuccess,
};
