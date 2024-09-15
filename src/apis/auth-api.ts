import { listApi } from "@/constants";
import http, { ApiClient } from "@/lib/http";

type IFormLogin = {
  email: string;
  password: string;
};
export const authApi = {
  login: async ({ email, password }: IFormLogin) => {
    await http.post(listApi.login, { email, password });
  },
  logout: async () => {
    await http.delete(listApi.logout);
    location.href = "/signin";
  },
  refreshToken: async () => {
    await http.put(listApi.refreshToken);
  },
  account: async () => {
    return await ApiClient.get("GameAccount/Info");
  },
};
