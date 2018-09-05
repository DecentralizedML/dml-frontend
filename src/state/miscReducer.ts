import { Actions, Action, LoadingAction } from '../actions';

export interface MiscState {
  loading: boolean;
};

export const initialMiscState: MiscState = {
  loading: false
};

export const miscReducer = (state = initialMiscState, action: Action): MiscState => {
  switch (action.type) {
    case Actions.SET_LOADING:
      const loadingAction = action as LoadingAction;
      return {
        ...state,
        loading: loadingAction.payload
      };
    default:
      return state;
  }
};
