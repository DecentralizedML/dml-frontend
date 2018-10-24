/* eslint-disable no-param-reassign */

import produce from 'immer';

// import storage from '../../../utils/storage';

import types from './types';

const authReducer = (state = {}, action) => {
  return produce(state, (draftState) => {
    switch (action.type) {
      case types.FACEBOOK_OAUTH:
        break;

      case types.FACEBOOK_OAUTH_ERROR:
        break;

      case types.FACEBOOK_OAUTH_SUCCESS:
        break;

      case types.GOOGLE_OAUTH:
        break;

      case types.GOOGLE_OAUTH_ERROR:
        break;

      case types.GOOGLE_OAUTH_SUCCESS:
        break;

      case types.LOGIN:
        break;

      case types.LOGIN_ERROR:
        draftState.isAuthenticated = false;
        break;

      case types.LOGIN_SUCCESS:
        draftState.isAuthenticated = true;
        break;

      case types.LOGOUT:
        draftState.isAuthenticated = false;
        break;

      case types.LOGOUT_ERROR:
        draftState.isAuthenticated = false;
        break;

      case types.LOGOUT_SUCCESS:
        draftState.isAuthenticated = false;
        break;

      case types.SIGNUP:
        break;

      case types.SIGNUP_ERROR:
        break;

      case types.SIGNUP_SUCCESS:
        draftState.isAuthenticated = true;
        break;

      default:
    }
  });
};

export default authReducer;
