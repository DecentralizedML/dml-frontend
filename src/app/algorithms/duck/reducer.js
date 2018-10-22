/* eslint-disable no-param-reassign */

import produce from 'immer';

import types from './types';

const accountReducer = (state = {}, action) => {
  return produce(state, (draftState) => {
    switch (action.type) {
      case types.CREATE_ALGORITHM:
        break;

      case types.CREATE_ALGORITHM_ERROR:
        break;

      case types.CREATE_ALGORITHM_SUCCESS:
        break;

      case types.DOWNLOAD_ALGORITHM:
        break;

      case types.DOWNLOAD_ALGORITHM_ERROR:
        break;

      case types.DOWNLOAD_ALGORITHM_SUCCESS:
        break;

      case types.LIST_ALGORITHMS:
        break;

      case types.LIST_ALGORITHMS_ERROR:
        break;

      case types.LIST_ALGORITHMS_MINE:
        break;

      case types.LIST_ALGORITHMS_MINE_ERROR:
        break;

      case types.SHOW_ALGORITHM:
        break;

      case types.SHOW_ALGORITHM_ERROR:
        break;

      case types.UPDATE_ALGORITHM:
        break;

      case types.UPDATE_ALGORITHM_ERROR:
        break;

      case types.UPDATE_ALGORITHM_SUCCESS:
        break;

      default:
    }
  });
};

export default accountReducer;
