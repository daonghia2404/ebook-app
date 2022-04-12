import { all, call, put, takeLatest } from 'redux-saga/effects';

import AuthInstance from '@/services/api/auth';
import AuthHelpers from '@/services/auth-helpers';
import { loginAction, registerAction, vertifyOtpAction } from '@/redux/actions';

export function* loginSaga(action) {
  try {
    const { body, cb } = action.payload;
    const response = yield call(AuthInstance.login, body);

    AuthHelpers.storeAccessToken(response.data.token);
    // AuthHelpers.storeRefreshToken(response.refreshToken);

    yield put(loginAction.success(response));
    cb?.();
  } catch (err) {
    yield put(loginAction.failure(err));
  }
}
export function* registerSaga(action) {
  try {
    const { body, cb } = action.payload;
    const response = yield call(AuthInstance.register, body);
    yield put(registerAction.success(response));
    cb?.();
  } catch (err) {
    yield put(registerAction.failure(err));
  }
}
export function* vertifyOtpSaga(action) {
  try {
    const { body, token, cb } = action.payload;
    const response = yield call(AuthInstance.vertifyOtpSignUp, body, token);
    yield put(vertifyOtpAction.success(response));
    cb?.();
  } catch (err) {
    yield put(vertifyOtpAction.failure(err));
  }
}
export default function* root() {
  yield all([takeLatest(loginAction.request.type, loginSaga)]);
  yield all([takeLatest(registerAction.request.type, registerSaga)]);
  yield all([takeLatest(vertifyOtpAction.request.type, vertifyOtpSaga)]);
}
