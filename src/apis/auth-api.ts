import http from '@/lib/http';

export const authApi = {
  logout: async () => {
    await http.delete('/users/logout');
    location.href = '/signin';
  },
  refreshToken: async () => {
    await http.put('/users/refresh_token');
  }
};
