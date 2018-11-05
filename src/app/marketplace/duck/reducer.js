/* eslint-disable no-param-reassign */

import produce from "immer";
import types from "./types";

// import types from './types';

const marketplaceReducer = (state = {}, action) => {
  return produce(state, draftState => {
    switch (action.type) {
      case types.SELECT_CATEGORY:
        draftState["category"] = action.payload;

      case types.SELECT_TAG:
        draftState["tag"] = action.payload;

      default:
    }
  });
};

export default marketplaceReducer;
