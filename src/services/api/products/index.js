import ApiService from '@/services/api';

class Product {
  async getList(params) {
    const response = await ApiService.get(`/product`, { params });
    return response.data;
  }
  async getById(id) {
    const response = await ApiService.get(`/product/${id}`);
    return response.data;
  }
  async getListSearch(params) {
    const response = await ApiService.get(`/product/search`, { params });
    return response.data;
  }
  async addToCart(body) {
    const response = await ApiService.post(`/cart`, body);
    return response.data;
  }
  async getListCart() {
    const response = await ApiService.get(`/cart`);
    return response.data;
  }
  async updateCart(id, body) {
    const response = await ApiService.put(`/cart/${id}`, body);
    return response.data;
  }
  async deleteCart(id) {
    const response = await ApiService.delete(`/cart/${id}`);
    return response.data;
  }
  async getSameProduct(id, params) {
    const response = await ApiService.get(`/product/same/${id}`, { params });
    return response.data;
  }
}

const ProductInstance = new Product();
export default ProductInstance;
