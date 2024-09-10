import { authApi } from '@/apis';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000 * 60 * 5,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

http.interceptors.request.use(
  (config) => {
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  }
);
let refrehTokenPromise: Promise<unknown> | null = null;
http.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
      await authApi.logout();
    }
    type OriginalRequest = AxiosRequestConfig & { _retry?: boolean };
    const originalRequest = error.config as OriginalRequest;
    if (error.response && error.response.status === 410 && !originalRequest._retry) {
      originalRequest._retry = true;
      if (!refrehTokenPromise) {
        refrehTokenPromise = authApi
          .refreshToken()
          .then(() => {})
          .catch(async () => {
            await authApi.logout();
          })
          .finally(() => {
            refrehTokenPromise = null;
          });
      }
      refrehTokenPromise.then(() => {
        return http(originalRequest);
      });
    }
    if (error.response && error.response.status !== 410) {
      throw new Error('Handle Error !410');
    }
    return Promise.reject(error);
  }
);

export default http;
