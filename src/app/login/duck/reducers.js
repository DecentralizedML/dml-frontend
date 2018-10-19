import { combineReducers } from 'redux';

import types from './types';

const loginReducer = (state = false, action) => {
  switch (action.type) {
    case types.QUACK:
      return true;
    /* ... */
    default:
      return state;
  }
};

const reducer = combineReducers({
  login: loginReducer,
});

export default reducer;
