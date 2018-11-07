/* eslint-disable no-param-reassign */

import produce from "immer";
import types from "./types";

// import types from './types';

const initialState = {
  selectedAlgorithm: null,
  selectedCategory: null,
  selectedTags: [],
  filteredAlgorithms: null,
  loadingAlgorithms: false
};

const marketplaceReducer = (state = initialState, action) => {
  return produce(state, draftState => {
    switch (action.type) {
      case types.SELECT_CATEGORY:
        draftState["selectedCategory"] = action.payload;
        break;
      case types.SELECT_TAG:
        draftState["selectedTags"].push(action.payload);
        break;
      case types.DESELECT_CATEGORY:
        draftState["selectedCategory"] = null;
        break;
      case types.DESELECT_TAG:
        const index = draftState["selectedTags"].indexOf(5);
        if (index > -1) {
          draftState["selectedTags"].splice(index, 1);
        }
        break;
      case types.FILTER_ALGORITHMS:
        draftState["filteredAlgorithms"] = action.payload;
        break;
      case types.START_LOADING_ALGORITHMS:
        draftState["loadingAlgorithms"] = true;
        break;
      case types.FINISH_LOADING_ALGORITHMS:
        draftState["loadingAlgorithms"] = false;
        break;
      case types.SELECT_ALGORITHM:
        draftState["selectedAlgorithm"] = action.payload;
        break;
      case types.CLOSE_SELECTED_ALGORITHM:
        draftState["selectedAlgorithm"] = false;
        break;
      // case types.SELECT_ALGORITHM
      // case types.DESELECT_ALGORITHM
      default:
    }
  });
};

export default marketplaceReducer;
