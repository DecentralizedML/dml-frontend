import http from '../../../utils/http';

const root = '/users/authenticate';

export const authenticate = (payload) => {
  const data = {
    email    : payload.email,
    password : payload.password,
  };

  return http.post(root, data);
};
