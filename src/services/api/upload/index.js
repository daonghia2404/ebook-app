import ApiService from '@/services/api';

class Upload {
  async uploadFile(formData) {
    const response = await ApiService.post(`/upload`, formData);
    return response.data;
  }
}

const UploadInstance = new Upload();
export default UploadInstance;
