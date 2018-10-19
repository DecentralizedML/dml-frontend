import { combineReducers } from 'redux';

export default combineReducers({
  auth: () => {
    return ({
      isAuthenticated: false,
    });
  },

  account: () => {
    return ({
      userData: {
        firstName : '',
        lastName  : '',
      },
    });
  },
});
