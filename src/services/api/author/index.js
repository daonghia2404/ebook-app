import ApiService from '@/services/api';

class Address {
  async getAuthors(params) {
    const response = await ApiService.get(`/author`, { params });
    return response.data;
  }
}

const AddressInstance = new Address();
export default AddressInstance;
