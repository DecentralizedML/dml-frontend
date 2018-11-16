/* eslint-disable no-param-reassign */

import produce from "immer";

import types from "./types";

// Add more values later -> start with component state
const inititalState = {
  readyToSubmit: false, // <- to enable switching between steps
  currentStep: 0,
  title: "",
  description: "",
  category: "",
  preProcessing: "",
  dataRequired: [],
  price: "",
  mlModel: "",
  mlModelFileName: "",
  postProcessingCode: "Your code here"
};

// TODO: Implement the logic
const createAlgorithmReducer = (state = inititalState, action) => {
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
      case types.NAVIGATE_BACK:
        draftState.currentStep--;
        break;
      case types.NAVIGATE_NEXT:
        draftState.currentStep++;
        break;
      case types.SWITCH_STEP:
        draftState.readyToSubmit && (draftState.currentStep = action.payload);
        break;
      default:
        break;
    }
  });
};

export default createAlgorithmReducer;
