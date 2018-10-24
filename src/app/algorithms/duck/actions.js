import types from './types';

const createAlgorithm = (data) => {
  return ({
    type    : types.CREATE_ALGORITHM,
    payload : data,
  });
};

const createAlgorithmError = (error) => {
  return ({
    type    : types.CREATE_ALGORITHM_ERROR,
    payload : {
      error,
    },
  });
};

const createAlgorithmSuccess = () => {
  return ({
    type: types.CREATE_ALGORITHM_SUCCESS,
  });
};

const downloadAlgorithm = (data) => {
  return ({
    type    : types.DOWNLOAD_ALGORITHM,
    payload : data,
  });
};

const downloadAlgorithmError = (error) => {
  return ({
    type    : types.DOWNLOAD_ALGORITHM_ERROR,
    payload : {
      error,
    },
  });
};

const downloadAlgorithmSuccess = () => {
  return ({
    type: types.DOWNLOAD_ALGORITHM_SUCCESS,
  });
};

const listAlgorithms = () => {
  return ({
    type: types.LIST_ALGORITHMS,
  });
};

const listAlgorithmsError = (error) => {
  return ({
    type    : types.LIST_ALGORITHMS_ERROR,
    payload : {
      error,
    },
  });
};

const listUserAlgorithms = () => {
  return ({
    type: types.LIST_USER_ALGORITHMS,
  });
};

const listUserAlgorithmsError = (error) => {
  return ({
    type    : types.LIST_USER_ALGORITHMS_ERROR,
    payload : {
      error,
    },
  });
};

const showAlgorithm = (data) => {
  return ({
    type    : types.SHOW_ALGORITHM,
    payload : data,
  });
};

const showAlgorithmError = (error) => {
  return ({
    type    : types.SHOW_ALGORITHM_ERROR,
    payload : {
      error,
    },
  });
};

const updateAlgorithm = (data) => {
  return ({
    type    : types.UPDATE_ALGORITHM,
    payload : data,
  });
};

const updateAlgorithmError = (error) => {
  return ({
    type    : types.UPDATE_ALGORITHM_ERROR,
    payload : {
      error,
    },
  });
};

const updateAlgorithmSuccess = () => {
  return ({
    type: types.UPDATE_ALGORITHM_SUCCESS,
  });
};

export default {
  createAlgorithm,
  createAlgorithmError,
  createAlgorithmSuccess,
  downloadAlgorithm,
  downloadAlgorithmError,
  downloadAlgorithmSuccess,
  listAlgorithms,
  listAlgorithmsError,
  listUserAlgorithms,
  listUserAlgorithmsError,
  showAlgorithm,
  showAlgorithmError,
  updateAlgorithm,
  updateAlgorithmError,
  updateAlgorithmSuccess,
};
