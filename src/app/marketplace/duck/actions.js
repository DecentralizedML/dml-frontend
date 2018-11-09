import types from "./types";

const selectCategory = category => {
  return {
    type: types.SELECT_CATEGORY,
    payload: category
  };
};

const deselectCategory = category => {
  return {
    type: types.DESELECT_CATEGORY,
    payload: category
  };
};

const selectTag = tag => {
  return {
    type: types.SELECT_TAG,
    payload: tag
  };
};

const deselectTag = tag => {
  return {
    type: types.DESELECT_TAG,
    payload: tag
  };
};

const filterAlgorithms = algorithms => {
  return {
    type: types.FILTER_ALGORITHMS,
    payload: algorithms
  };
};

const startLoadingAlgorithms = () => {
  return {
    type: types.START_LOADING_ALGORITHMS
  };
};

const finishLoadingAlgorithms = () => {
  return {
    type: types.FINISH_LOADING_ALGORITHMS
  };
};

const selectAlgorithm = algorithm => {
  return {
    type: types.SELECT_ALGORITHM,
    payload: algorithm
  };
};

const closeSelectedAlgorithm = () => {
  return {
    type: types.CLOSE_SELECTED_ALGORITHM
  };
};

const uploadImage = image => {
  return {
    type: types.UPLOAD_IMAGE,
    payload: image
  };
};

export default {
  selectCategory,
  deselectCategory,
  selectTag,
  deselectTag,
  filterAlgorithms,
  startLoadingAlgorithms,
  finishLoadingAlgorithms,
  selectAlgorithm,
  closeSelectedAlgorithm,
  uploadImage
};
