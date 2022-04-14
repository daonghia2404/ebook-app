import ApiService from '@/services/api';

class Profile {
  async getProfile() {
    const response = await ApiService.get(`/profile`);
    return response.data;
  }
  async saveProfile(body) {
    const response = await ApiService.post(`/profile`, body);
    return response.data;
  }
  async getMyBook(params) {
    const response = await ApiService.get(`/my-book`, { params });
    return response.data;
  }
}

const ProfileInstance = new Profile();
export default ProfileInstance;
