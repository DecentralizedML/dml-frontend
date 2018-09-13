export enum Actions {
  SET_LOADING = 'SET_LOADING',
  REQUEST_LOGIN = 'REQUEST_LOGIN',
  REQUEST_LOGOUT = 'REQUEST_LOGOUT'
};

export interface Action {
  type: string
};

export interface SetLoadingAction extends Action {
  payload: boolean
};

export const setLoading = (value: boolean): SetLoadingAction => ({
  type: Actions.SET_LOADING,
  payload: value
});

export interface RequestLoginAction extends Action {
  payload: {
    username: string,
    password: string
  }
};

export const requestLogin = (username: string, password: string): RequestLoginAction => ({
  type: Actions.REQUEST_LOGIN,
  payload: { username, password }
});

export const requestLogout = (): Action => ({
  type: Actions.REQUEST_LOGOUT
});
