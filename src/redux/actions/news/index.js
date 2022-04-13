import { createActionCreator } from 'deox';
import { ENewAction } from './constants';

export const getListNewAction = {
  request: createActionCreator(ENewAction.GET_LIST_NEW_REQUEST, (resolve) => (param, cb) => resolve({ param, cb })),
  success: createActionCreator(ENewAction.GET_LIST_NEW_SUCCESS, (resolve) => (response) => resolve({ response })),
  failure: createActionCreator(ENewAction.GET_LIST_NEW_FAILED, (resolve) => (error) => resolve({ error })),
};

export const getListNewLatestAction = {
  request: createActionCreator(
    ENewAction.GET_LIST_NEW_LATEST_REQUEST,
    (resolve) => (param, cb) => resolve({ param, cb }),
  ),
  success: createActionCreator(
    ENewAction.GET_LIST_NEW_LATEST_SUCCESS,
    (resolve) => (response) => resolve({ response }),
  ),
  failure: createActionCreator(ENewAction.GET_LIST_NEW_LATEST_FAILED, (resolve) => (error) => resolve({ error })),
};
export const getDetailNewAction = {
  request: createActionCreator(ENewAction.GET_DETAIL_NEW_REQUEST, (resolve) => (param, cb) => resolve({ param, cb })),
  success: createActionCreator(ENewAction.GET_DETAIL_NEW_SUCCESS, (resolve) => (response) => resolve({ response })),
  failure: createActionCreator(ENewAction.GET_DETAIL_NEW_FAILED, (resolve) => (error) => resolve({ error })),
};
