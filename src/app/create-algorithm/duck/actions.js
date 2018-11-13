import types from "./types";

const createAlgorithm = data => {
  return {
    type: types.CREATE_ALGORITHM,
    payload: data
  };
};

export default {
  createAlgorithm
};
