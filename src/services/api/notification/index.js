import ApiService from '@/services/api';

class Notification {
  async getList(params) {
    const response = await ApiService.get(`/notification`, { params });
    return response.data;
  }
}

const NotificationInstance = new Notification();
export default NotificationInstance;
