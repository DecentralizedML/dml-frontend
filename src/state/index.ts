import { combineReducers } from 'redux';
import { miscReducer, initialMiscState, MiscState } from './miscReducer';
import { userReducer, initialUserState, UserState } from './userReducer';

export interface State {
  misc: MiscState,
  user: UserState
};

export const initialState: State = {
  misc: initialMiscState,
  user: initialUserState
};

export const reducers = combineReducers({
  misc: miscReducer,
  user: userReducer
});
