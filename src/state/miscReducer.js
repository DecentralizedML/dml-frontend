import { Actions } from '../actions';

export const initialMiscState = {
  loading: false
};

export const miscReducer = (state = initialMiscState, action) => {
  switch (action.type) {
    case Actions.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};
