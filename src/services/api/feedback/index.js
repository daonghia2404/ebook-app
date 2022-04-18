import ApiService from '@/services/api';

class Feedback {
  async postFeedback(body) {
    const response = await ApiService.post(`/feed-back`, body);
    return response.data;
  }
}

const FeedbackInstance = new Feedback();
export default FeedbackInstance;
