import axios from 'axios';

import storage from './storage';

const http = axios.create({
  baseURL : process.env.REACT_APP_API_BASE_URL,
  timeout : process.env.REACT_APP_API_TIMEOUT,
  headers : {
    'Content-Type': 'application/json',
  },
});

http.interceptors.request.use(
  (config) => {
    const modifiedConfig = config;
    const token = storage.token;

    if (token) {
      modifiedConfig.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  },
);

export default http;
