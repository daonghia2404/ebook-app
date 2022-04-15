import { createActionCreator } from 'deox';
import { EUploadFileAction } from './constants';

export const uploadFileAction = {
  request: createActionCreator(EUploadFileAction.UPLOAD_FILE_REQUEST, (resolve) => (body, cb) => resolve({ body, cb })),
  success: createActionCreator(EUploadFileAction.UPLOAD_FILE_SUCCESS, (resolve) => (response) => resolve({ response })),
  failure: createActionCreator(EUploadFileAction.UPLOAD_FILE_FAILED, (resolve) => (error) => resolve({ error })),
};
