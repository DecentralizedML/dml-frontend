import { combineReducers } from 'redux';
import { miscReducer, initialMiscState } from './miscReducer';
import { userReducer, initialUserState } from './userReducer';

export const initialState = {
  misc: initialMiscState,
  user: initialUserState
};

export const reducers = combineReducers({
  misc: miscReducer,
  user: userReducer
});
