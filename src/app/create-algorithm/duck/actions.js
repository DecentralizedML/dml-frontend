import types from "./types";

const createAlgorithm = data => {
  return {
    type: types.CREATE_ALGORITHM,
    payload: data
  };
};

const saveNewAlgorithmData = data => {
  return {
    type: types.SAVE_NEW_ALGORITHM_DATA,
    payload: data
  };
};

const navigateBack = data => {
  return {
    type: types.NAVIGATE_BACK
  };
};

const navigateNext = data => {
  return {
    type: types.NAVIGATE_NEXT
  };
};

const switchStep = step => {
  return {
    type: types.SWITCH_STEP,
    payload: step
  };
};

export default {
  createAlgorithm,
  saveNewAlgorithmData,
  navigateBack,
  navigateNext,
  switchStep
};
