import ApiService from '@/services/api';

class News {
  async getList(params) {
    const response = await ApiService.get(`/news`, { params });
    return response.data;
  }
}

const NewInstance = new News();
export default NewInstance;
