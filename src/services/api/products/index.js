import ApiService from '@/services/api';

class Product {
  async getList(params) {
    const response = await ApiService.get(`/product`, { params });
    return response.data;
  }
}

const ProductInstance = new Product();
export default ProductInstance;
