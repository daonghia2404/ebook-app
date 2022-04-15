import { createActionCreator } from 'deox';
import { EAuthorAction } from './constants';

export const getAuthorsAction = {
  request: createActionCreator(EAuthorAction.GET_AUTHORS_REQUEST, (resolve) => (params, cb) => resolve({ params, cb })),
  success: createActionCreator(EAuthorAction.GET_AUTHORS_SUCCESS, (resolve) => (response) => resolve({ response })),
  failure: createActionCreator(EAuthorAction.GET_AUTHORS_FAILED, (resolve) => (error) => resolve({ error })),
};
