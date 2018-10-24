import http from '../../../utils/http';

const root = '/api/users';
const me = '/api/me';

// User / List (all)
export function listUsers () {
  return http.get(root);
}

// User / Update
export function updateUser (payload) {
  return http.put(`${root}/`, payload);
}

// User / me
export function hydrateUserData () {
  return http.get(me);
}
