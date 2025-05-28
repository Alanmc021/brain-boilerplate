import axios from 'axios';
import { store } from '@store/index';

const api = axios.create({
  baseURL: process.env.API_URL || 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Handle 401 Unauthorized errors
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // TODO: Implement refresh token logic here
        // const response = await api.post('/auth/refresh');
        // store.dispatch(setCredentials(response.data));
        // return api(originalRequest);
      } catch (refreshError) {
        // Handle refresh token failure
        store.dispatch({ type: 'auth/logout' });
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default api; 