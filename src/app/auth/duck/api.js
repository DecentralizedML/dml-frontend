import http from '../../../utils/http';

const root = '/api/users';

// User / Sign-up
export function signup (payload) {
  return http.post(root, payload);
}

// User / Login
export function login (payload) {
  const data = {
    email    : payload.email,
    password : payload.password,
  };

  return http.post(`${root}/authenticate`, data);
}

// Facebook OAuth
export function facebookOAuth (payload) {
  return http.post(`/auth/facebook/callback?code=${payload.code}`, payload);
}

// Google OAuth
export function googleOAuth (payload) {
  return http.post(`/auth/google/callback?code=${payload.code}`, payload);
}

// Logout
export function logout (payload) {
  return http.put(root, payload);
}
