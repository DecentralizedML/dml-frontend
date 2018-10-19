import { Actions } from '../actions';

export const initialUserState = {
  authRequired: false,
  server: {
    id: null,
    jwt: null,
    email: null,
    first_name: null,
    last_name: null,
    wallet_address: null
  }
};

export const userReducer = (state = initialUserState, { type, payload }) => {
  switch (type) {
    case Actions.SET_AUTH_REQUIRED:
      return {
        ...state,
        authRequired: payload
      };
    case Actions.AUTH_SUCCESS:
      return {
        ...state,
        server: {
          id: payload.id,
          jwt: payload.jwt,
          email: payload.email,
          first_name: payload.first_name,
          last_name: payload.last_name,
          wallet_address: payload.wallet_address
        }
      };
    case Actions.AUTH_LOGOUT:
    case Actions.AUTH_FAILURE:
      return {
        ...state,
        server: initialUserState.server
      };
    default:
      return state;
  }
};
