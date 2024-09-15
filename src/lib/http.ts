/* eslint-disable @typescript-eslint/no-explicit-any */
import { authApi } from "@/apis";
import { createSignHash, encodeFormData } from "@/helpers/hash";
import axios from "axios";
const apiHasSignAccessToken = [""];
const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000 * 60 * 5,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken") ?? "";
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
let refrehTokenPromise: Promise<unknown> | null = null;
http.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      await authApi.logout();
    }
    const originalRequest = error.config;
    if (error.response.status === 410 && !originalRequest._retry) {
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
    if (error.response.status !== 410) {
      throw new Error("Handle Error !410");
    }
    return Promise.reject(error);
  }
);

export const ApiClient = {
  post: async (url: string, data = {}, conf = {}) => {
    const accessToken = localStorage.getItem("accessToken") ?? "";
    const formData = encodeFormData(url, data, accessToken);
    return http.post(url, formData, conf);
  },
  get: async (url: string, data: any = {}, conf: any = {}) => {
    const accessToken = localStorage.getItem("accessToken") ?? "";
    if (data.data) {
      if (apiHasSignAccessToken.includes(url)) {
        conf.sign = createSignHash(url, data.data, accessToken);
      } else {
        conf.sign = createSignHash(url, data.data);
      }
    }
    return http.get(url, {
      params: encodeFormData(url, data, accessToken),
      ...conf,
    });
  },
};

export default http;
