import ProfileInstance from '@/services/api/profile';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  getProfileAction,
  updateProfileAction,
  getListMyBookAction,
  getVoiceMyBookAction,
  getFileMyBookAction,
} from '@/redux/actions';

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
export function* getMyBookListSaga(action) {
  try {
    const { params, cb } = action.payload;
    const response = yield call(ProfileInstance.getMyBook, params);
    yield put(getListMyBookAction.success(response));
    cb?.();
  } catch (err) {
    yield put(getListMyBookAction.failure(err));
  }
}
export function* getFileMyBookSaga(action) {
  try {
    const { body, cb } = action.payload;
    const response = yield call(ProfileInstance.getFileMyBook, body);
    yield put(getFileMyBookAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getFileMyBookAction.failure(err));
  }
}
export function* getVoiceMyBookSaga(action) {
  try {
    const { body, cb } = action.payload;
    const response = yield call(ProfileInstance.getVoiceMyBook, body);
    yield put(getVoiceMyBookAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getVoiceMyBookAction.failure(err));
  }
}

export default function* root() {
  yield all([takeLatest(getProfileAction.request.type, getProfileSaga)]);
  yield all([takeLatest(updateProfileAction.request.type, updateProfileSaga)]);
  yield all([takeLatest(getListMyBookAction.request.type, getMyBookListSaga)]);
  yield all([takeLatest(getFileMyBookAction.request.type, getFileMyBookSaga)]);
  yield all([takeLatest(getVoiceMyBookAction.request.type, getVoiceMyBookSaga)]);
}
