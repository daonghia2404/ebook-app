import { all, call, put, takeLatest } from 'redux-saga/effects';

import UploadInstance from '@/services/api/upload';
import { uploadFileAction } from '@/redux/actions';

export function* uploadFileSaga(action) {
  try {
    const { body, cb } = action.payload;
    const response = yield call(UploadInstance.uploadFile, body);
    yield put(uploadFileAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(uploadFileAction.failure(err));
  }
}

export default function* root() {
  yield all([takeLatest(uploadFileAction.request.type, uploadFileSaga)]);
}
