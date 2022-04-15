import ApiService from '@/services/api';

class Address {
  async getList(params) {
    const response = await ApiService.get(`/address-shipping`, { params });
    return response.data;
  }
  async addAddress(body) {
    const response = await ApiService.post(`/address-shipping`, body);
    return response.data;
  }
  async updateAddress(id, body) {
    const response = await ApiService.put(`/address-shipping/${id}`, body);
    return response.data;
  }
  async getDefaultAddress() {
    const response = await ApiService.get(`/address-shipping/user/default`);
    return response.data;
  }
  async getProvince() {
    const response = await ApiService.get(`/address-shipping/list/province`);
    return response.data;
  }
  async getDistrict(params) {
    const response = await ApiService.get(`/address-shipping/list/district`, { params });
    return response.data;
  }
  async getWard(params) {
    const response = await ApiService.get(`/address-shipping/list/ward`, { params });
    return response.data;
  }
  async caculateFeeShipping(body) {
    const response = await ApiService.post(`/order/shipping-fee`, body);
    return response.data;
  }
}

const AddressInstance = new Address();
export default AddressInstance;
