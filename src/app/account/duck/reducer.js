/* eslint-disable no-param-reassign */

import produce from 'immer';

import types from './types';

const accountReducer = (state = {}, action) => {
  return produce(state, (draftState) => {
    switch (action.type) {
      case types.LIST_USERS_ERROR:
        break;

      case types.LIST_USERS:
        break;

      case types.LOAD_ACCOUNT_DATA:
        draftState.email         = action.payload.email;
        draftState.firstName     = action.payload.first_name;
        draftState.id            = action.payload.id;
        draftState.lastName      = action.payload.last_name;
        draftState.walletAddress = action.payload.wallet_address;
        break;

      case types.UPDATE_USER_ERROR:
        break;

      case types.UPDATE_USER_SUCCESS:
        break;

      case types.UPDATE_USER:
        break;

      default:
    }
  });
};

export default accountReducer;
