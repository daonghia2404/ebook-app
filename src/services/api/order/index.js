import ApiService from '@/services/api';

class Order {
  async createCodOrder(body) {
    const response = await ApiService.post(`/order/create-cod`, body);
    return response.data;
  }

  async createOnlineOrder(body) {
    const response = await ApiService.post(`/order/online`, body);
    return response.data;
  }

  async getOrders(params) {
    const response = await ApiService.get(`/order`, { params });
    return response.data;
  }

  async getOrder(id) {
    const response = await ApiService.get(`/order/user-detail/${id}`);
    return response.data;
  }

  async cancelOrder(id) {
    const response = await ApiService.put(`/order/cancel/${id}`);
    return response.data;
  }
}

const OrderInstance = new Order();
export default OrderInstance;
