/* eslint-disable no-param-reassign */

import produce from "immer";

import types from "./types";

/*

const state = {
  order = [id0, id1, id2, id3];
  map = {
    id0: data0;
    id1: data1;
    id2: data2;
  };
  myAlgoIds = [id3, id7];
}

*/

// TODO: Implement the logic
const accountReducer = (state = {}, action) => {
  return produce(state, draftState => {
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
        // draftState["algorithms"] = action.payload;
        break;

      case types.LIST_ALGORITHMS_ERROR:
        break;

      case types.LIST_USER_ALGORITHMS:
        break;

      case types.LIST_USER_ALGORITHMS_ERROR:
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
