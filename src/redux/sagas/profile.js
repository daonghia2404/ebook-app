import ProfileInstance from '@/services/api/profile';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getProfileAction, updateProfileAction } from '@/redux/actions';

export function* getProfileSaga(action) {
  try {
    const { cb } = action.payload;
    const response = yield call(ProfileInstance.getProfile);
    yield put(getProfileAction.success(response));
    cb?.();
  } catch (err) {
    yield put(getProfileAction.failure(err));
  }
}
export function* updateProfileSaga(action) {
  try {
    const { body, cb } = action.payload;
    const response = yield call(ProfileInstance.saveProfile, body);
    yield put(updateProfileAction.success(response));
    cb?.();
  } catch (err) {
    yield put(updateProfileAction.failure(err));
  }
}

export default function* root() {
  yield all([takeLatest(updateProfileAction.request.type, getProfileSaga)]);
  yield all([takeLatest(updateProfileAction.request.type, updateProfileSaga)]);
}
