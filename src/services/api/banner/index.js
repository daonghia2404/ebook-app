import ApiService from '@/services/api';

class Address {
  async getBanners(params) {
    const response = await ApiService.get(`/banner`, { params });
    return response.data;
  }
}

const AddressInstance = new Address();
export default AddressInstance;
