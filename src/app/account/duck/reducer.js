/* eslint-disable no-param-reassign */

import produce from 'immer';

import types from './types';

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  id: '',
  walletAddress: '',
  initialized: false,
};

const accountReducer = (state = initialState, { type, payload }) => {
  return produce(state, (draftState) => {
    switch (type) {
      case types.LIST_USERS_ERROR:
        break;

      case types.LIST_USERS:
        break;

      case types.LOAD_ACCOUNT_DATA:
        draftState.email = payload.email;
        draftState.firstName = payload.first_name;
        draftState.id = payload.id;
        draftState.lastName = payload.last_name;
        draftState.walletAddress = payload.wallet_address;
        draftState.initialized = true;
        break;

      case types.HYDRATE_USER_DATA_ERROR:
        draftState.initialized = true;
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
