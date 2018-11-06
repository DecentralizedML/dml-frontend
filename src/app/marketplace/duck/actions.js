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

export default { selectCategory, deselectCategory, selectTag, deselectTag };
