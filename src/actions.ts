export enum Actions {
  SET_LOADING = 'SET_LOADING',
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT'
};

export interface Action {
  type: string
};

export interface LoadingAction extends Action {
  payload: boolean
};

export const loading = (value: boolean): LoadingAction => ({
  type: Actions.SET_LOADING,
  payload: value
});

export interface LoginAction extends Action {
  payload: {
    username: string,
    password: string
  }
};

export const login = (username: string, password: string): LoginAction => ({
  type: Actions.LOGIN,
  payload: { username, password }
});

export const logout = (): Action => ({
  type: Actions.LOGOUT
});
