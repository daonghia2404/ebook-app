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
  async forgotPassword(body) {
    const response = await ApiService.post(`/auth/forgot`, body);
    return response.data;
  }
  async resetPassword(body) {
    const response = await ApiService.post(`/auth/forgot-reset`, body);
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
  async vertifyOtpForgot(body, token) {
    const response = await ApiService.post(`/auth/forgot-verify`, body, {
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
  async updatePassword(body) {
    const response = await ApiService.post(`/auth/change-password`, body);
    return response.data;
  }
  async resendRegisterOtp(token) {
    const response = await ApiService.post(
      `/auth/register-resend-otp`,
      {},
      {
        headers: {
          token,
        },
      },
    );
    return response.data;
  }
  async resendForgotOtp(token) {
    const response = await ApiService.post(
      `/auth/forgot-resend-otp`,
      {},
      {
        headers: {
          token,
        },
      },
    );
    return response.data;
  }
}

const AuthInstance = new Auth();
export default AuthInstance;
