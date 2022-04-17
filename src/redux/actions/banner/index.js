import { createActionCreator } from 'deox';
import { EBannerAction } from './constants';

export const getBannersAction = {
  request: createActionCreator(EBannerAction.GET_BANNERS_REQUEST, (resolve) => (params, cb) => resolve({ params, cb })),
  success: createActionCreator(EBannerAction.GET_BANNERS_SUCCESS, (resolve) => (response) => resolve({ response })),
  failure: createActionCreator(EBannerAction.GET_BANNERS_FAILED, (resolve) => (error) => resolve({ error })),
};
