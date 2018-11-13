/* eslint-disable no-param-reassign */

import produce from "immer";

import types from "./types";

// Add more values later -> start with component state
const inititalState = {
  creationStep = null,
};

// TODO: Implement the logic
const accountReducer = (state = inititalState, action) => {
  return produce(state, draftState => {
    switch (action.type) {
      case types.CREATE_ALGORITHM:
        break;
      default:
    }
  });
};

export default accountReducer;
