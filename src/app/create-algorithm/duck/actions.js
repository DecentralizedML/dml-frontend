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

export default {
  createAlgorithm,
  saveNewAlgorithmData
};
