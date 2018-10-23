export const Actions = {
  REQUEST_LOGIN          : 'REQUEST_LOGIN',
  REQUEST_OAUTH          : 'REQUEST_OAUTH',
  REQUEST_GOOGLE_OAUTH   : 'REQUEST_GOOGLE_OAUTH',
  REQUEST_FACEBOOK_OAUTH : 'REQUEST_FACEBOOK_OAUTH',
  AUTH_SUCCESS           : 'AUTH_SUCCESS',
};

export const requestLogin = (username, password) => {
  return {
    type    : Actions.REQUEST_LOGIN,
    payload : { username, password },
  };
};

export const requestOAuth = (provider, code) => {
  return {
    type    : Actions.REQUEST_OAUTH,
    payload : { provider, code },
  };
};

export const requestGoogleOAuth = () => {
  return {
    type: Actions.REQUEST_GOOGLE_OAUTH,
  };
};

export const requestFacebookOAuth = () => {
  return {
    type: Actions.REQUEST_FACEBOOK_OAUTH,
  };
};

export const authSuccess = (user) => {
  return {
    type    : Actions.AUTH_SUCCESS,
    payload : user,
  };
};
