import ApiService from '@/services/api';

class Auth {
  async login(body) {
    const response = await ApiService.post(`/auth/login`, body);
    return response.data;
  }
  async register(body) {
    const response = await ApiService.post(`/auth/register`, body);
    return response.data;
  }
  async vertifyOtpSignUp(body, token) {
    const response = await ApiService.post(`/auth/verify`, body, {
      'headers': {
        token,
      },
    });
    return response.data;
  }
  async refreshToken() {
    const response = await ApiService.post(`/auth/refresh-token`);
    return response.data;
  }
}

const AuthInstance = new Auth();
export default AuthInstance;
