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

export default {
  createAlgorithm,
  saveNewAlgorithmData,
  navigateBack,
  navigateNext
};
