import { Actions } from '../actions';

export const initialUserState = {
  server: {
    id: null,
    jwt: null,
    email: 'rwebber@kyokan.io',
    first_name: null,
    last_name: null,
    wallet_address: null
  }
};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    // case Actions.REQUEST_LOGIN: needs to make an call, so definitely needs to be in sagas.
    case Actions.REQUEST_LOGOUT:
      return {
        ...state,
        server: initialUserState.server
        // This will probably clear a cookie/localStorage, so should be in sagas instead.
      };
    default:
      return state;
  }
};
