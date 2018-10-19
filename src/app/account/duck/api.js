import http from '../../../utils/http';

const root = "/account";

export default class AccountAPI {
  static get () {
    return http.get(root);
  }

  static edit (payload) {
    return http.put(`${root}/edit/payload.id`, payload);
  }

  static add (payload) {
    return http.post(root, payload);
  }

  static delete (payload) {
    return http.delete(`${root}/delete/${payload.id}`);
  }
}
