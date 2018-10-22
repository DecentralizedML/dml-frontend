import http from '../../../utils/http';

const root = '/api/users';

// User / List (all)
export function listUsers () {
  return http.get(root);
}

// User / Update
export function updateUser (payload) {
  return http.put(`${root}/`, payload);
}
