import env from '@/env';
import AuthorizedInstance from '@/services/authorized';

const ApiService = AuthorizedInstance(env.api.baseUrl.service);

export default ApiService;
