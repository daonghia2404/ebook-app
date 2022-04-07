import ApiService from '@/services/api';

class Auth {
  async login(body) {
    const response = await ApiService.post(`/auth/login`, body);
    return response.data;
  }

  async refreshToken() {
    const response = await ApiService.post(`/auth/refresh-token`);
    return response.data;
  }
}

const AuthInstance = new Auth();
export default AuthInstance;
