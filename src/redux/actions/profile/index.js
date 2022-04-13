import { createActionCreator } from 'deox';
import { EProfileAction } from './constants';

export const getProfileAction = {
  request: createActionCreator(EProfileAction.GET_PROFILE_REQUEST, (resolve) => (cb) => resolve({ cb })),
  success: createActionCreator(EProfileAction.GET_PROFILE_SUCCESS, (resolve) => (response) => resolve({ response })),
  failure: createActionCreator(EProfileAction.GET_PROFILE_FAILED, (resolve) => (error) => resolve({ error })),
};
export const updateProfileAction = {
  request: createActionCreator(EProfileAction.UPDATE_PROFILE_REQUEST, (resolve) => (body, cb) => resolve({ body, cb })),
  success: createActionCreator(EProfileAction.UPDATE_PROFILE_SUCCESS, (resolve) => (response) => resolve({ response })),
  failure: createActionCreator(EProfileAction.UPDATE_PROFILE_FAILED, (resolve) => (error) => resolve({ error })),
};