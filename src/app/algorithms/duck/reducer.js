/* eslint-disable no-param-reassign */

import produce from "immer";

import types from "./types";

const inititalState = {
  allAlgorithmsOrder: [],
  allAlgorithmsMap: {},
  myAlgoIds: []
};

// TODO: Implement the logic
const accountReducer = (state = inititalState, action) => {
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
        action.payload.forEach(algorithm => {
          draftState.allAlgorithmsOrder.push(algorithm.id);
          draftState.allAlgorithmsMap[algorithm.id] = algorithm;
          // Add a way to grab the User's Algos
        });
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
