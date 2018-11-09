/* eslint-disable no-param-reassign */

import produce from "immer";
import types from "./types";

// import types from './types';

const initialState = {
  selectedCategory: null,
  selectedTags: [],
  filteredAlgorithms: null,
  loadingAlgorithms: false,
  uploadedImage: null
};

const marketplaceReducer = (state = initialState, action) => {
  return produce(state, draftState => {
    switch (action.type) {
      case types.SELECT_CATEGORY:
        draftState.selectedCategory = action.payload;
        break;
      case types.SELECT_TAG:
        if (!draftState.selectedTags.includes(action.payload)) {
          draftState.selectedTags.push(action.payload);
        }
        break;
      case types.DESELECT_CATEGORY:
        draftState.selectedCategory = null;
        break;
      case types.DESELECT_TAG:
        draftState.selectedTags = state.selectedTags.filter(
          tag => tag !== action.payload
        );
        break;
      case types.FILTER_ALGORITHMS:
        draftState.filteredAlgorithms = action.payload;
        break;
      case types.START_LOADING_ALGORITHMS:
        draftState.loadingAlgorithms = true;
        break;
      case types.FINISH_LOADING_ALGORITHMS:
        draftState.loadingAlgorithms = false;
        break;
      case types.UPLOAD_IMAGE:
        draftState.uploadedImage = action.payload;
      // case types.SELECT_ALGORITHM
      // case types.DESELECT_ALGORITHM
      default:
    }
  });
};

export default marketplaceReducer;
