/* eslint-disable no-param-reassign */

import produce from "immer";

import types from "./types";

// Add more values later -> start with component state
const inititalState = {
  currentStep: null,
  title: null,
  description: null,
  category: null,
  dataRequired: null,
  price: null,
  mlModel: null
};

// TODO: Implement the logic
const accountReducer = (state = inititalState, action) => {
  return produce(state, draftState => {
    switch (action.type) {
      case types.CREATE_ALGORITHM:
        break;
      case types.SAVE_NEW_ALGORITHM_DATA:
        // find a cleaner way to do this with ES6
        for (let key in action.payload) {
          draftState[key] = action.payload[key];
        }
        break;
      default:
    }
  });
};

export default accountReducer;
