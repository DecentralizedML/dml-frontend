import types from "./types";

const selectCategory = category => {
  return {
    type: types.SELECT_CATEGORY,
    payload: category
  };
};

const selectTag = tag => {
  return {
    type: types.SELECT_TAG,
    payload: tag
  };
};

export default { selectCategory, selectTag };
