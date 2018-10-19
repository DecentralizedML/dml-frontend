const TOKEN_ITEM_NAME = 'DML_JSON_WEB_TOKEN';

const storage = {
  _token: '',

  set token (token) {
    this._token = token;
    localStorage.setItem(TOKEN_ITEM_NAME, token);
  },

  get token () {
    return this._token || localStorage.getItem(TOKEN_ITEM_NAME);
  },
};

export default storage;
