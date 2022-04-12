import ApiService from '@/services/api';

class Product {
  async getList(params) {
    const response = await ApiService.get(`/product`, { params });
    console.log(response, 'response');
    return response.data;
  }
}

const ProductInstance = new Product();
export default ProductInstance;
