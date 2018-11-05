/* eslint-disable no-param-reassign */

import produce from "immer";
import types from "./types";

// import types from './types';

const initialState = {
  category: "all",
  tag: "all",
  singleView: false,
  filteredView: false
};

const marketplaceReducer = (state = initialState, action) => {
  return produce(state, draftState => {
    switch (action.type) {
      case types.SELECT_CATEGORY:
        draftState["category"] = action.payload;
      case types.SELECT_TAG:
        draftState["tag"] = action.payload;
        draftState["filteredView"] = true;
      case types.SELECT_TAG:
        draftState["tag"] = action.payload;
        draftState["filteredView"] = true;

      default:
    }
  });
};

export default marketplaceReducer;
