import { Actions } from '../actions';

export const initialMiscState = {
  loading: false,
  failures: []
};

export const miscReducer = (state = initialMiscState, { type, payload }) => {
  switch (type) {
    case Actions.SET_LOADING:
      return {
        ...state,
        loading: payload
      };
    case Actions.AUTH_FAILURE:
      return {
        ...state,
        failures: state.failures.concat(payload)
      };
    case Actions.CLEAR_FAIURES:
      return {
        ...state,
        failures: []
      };
    default:
      return state;
  }
};
