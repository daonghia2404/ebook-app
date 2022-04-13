import { createActionCreator } from 'deox';
import { ENotiAction } from './constants';

export const getNoticeAction = {
  request: createActionCreator(ENotiAction.GET_NOTICE_REQUEST, (resolve) => (params, cb) => resolve({ params, cb })),
  success: createActionCreator(ENotiAction.GET_NOTICE_SUCCESS, (resolve) => (response) => resolve({ response })),
  failure: createActionCreator(ENotiAction.GET_NOTICE_FAILED, (resolve) => (error) => resolve({ error })),
};
// export const updateProfileAction = {
//   request: createActionCreator(ENotiAction.UPDATE_PROFILE_REQUEST, (resolve) => (body, cb) => resolve({ body, cb })),
//   success: createActionCreator(ENotiAction.UPDATE_PROFILE_SUCCESS, (resolve) => (response) => resolve({ response })),
//   failure: createActionCreator(ENotiAction.UPDATE_PROFILE_FAILED, (resolve) => (error) => resolve({ error })),
// };
