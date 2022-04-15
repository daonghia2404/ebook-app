import ApiService from '@/services/api';

class Rate {
  async getListRate(id, params) {
    const response = await ApiService.get(`/rate/product/${id}`, { params });
    return response.data;
  }
  async getStatisticRate(id) {
    const response = await ApiService.get(`/rate/statistic/${id}`);
    return response.data;
  }
  async rateProduct(id, body) {
    const response = await ApiService.post(`/rate/product/${id}`, body);
    return response.data;
  }
}

const RateInstance = new Rate();
export default RateInstance;
