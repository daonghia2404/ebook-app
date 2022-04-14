import ApiService from '@/services/api';

class Rate {
  async getListRate(params) {
    const response = await ApiService.get(`/rate/product/` + params.id, { params });
    return response.data;
  }
  async getStatisticRate(id) {
    const response = await ApiService.get(`/rate/statistic/${id}`);
    return response.data;
  }
}

const RateInstance = new Rate();
export default RateInstance;
