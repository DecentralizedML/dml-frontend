import { Actions } from '../actions';

export const initialUserState = {
  id: null
};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    // case Actions.REQUEST_LOGIN: needs to make an call, so definitely needs to be in sagas.
    case Actions.REQUEST_LOGOUT:
      return {
        ...state,
        id: null
        // This will probably clear a cookie/localStorage, so should be in sagas instead.
      };
    default:
      return state;
  }
};
