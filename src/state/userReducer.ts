import { Actions, Action } from '../actions';

export interface UserState {
  id: string | null;
};

export const initialUserState: UserState = {
  id: null
};

export const userReducer = (state = initialUserState, action: Action): UserState => {
  switch (action.type) {
    // case Actions.LOGIN: needs to make an call, so definitely needs to be in sagas.
    case Actions.LOGOUT:
      return {
        ...state,
        id: null
        // This will probably clear a cookie, so should be in sagas instead.
      };
    default:
      return state;
  }
};
