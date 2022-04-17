import { all, call, put, takeLatest } from 'redux-saga/effects';

import AuthInstance from '@/services/api/auth';
import AuthHelpers from '@/services/auth-helpers';
import {
  loginAction,
  registerAction,
  vertifyOtpAction,
  forgotPasswordAction,
  resetPasswordAction,
  vertifyForgotAction,
  updatePasswordAction,
  resendRegisterOtpAction,
  resendForgotOtpAction,
} from '@/redux/actions';

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
    cb?.(response);
  } catch (err) {
    yield put(registerAction.failure(err));
  }
}
export function* vertifyOtpSaga(action) {
  try {
    const { body, token, cb } = action.payload;
    const response = yield call(AuthInstance.vertifyOtpSignUp, body, token);
    yield put(vertifyOtpAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(vertifyOtpAction.failure(err));
  }
}
export function* forgotPasswordSaga(action) {
  try {
    const { body, cb } = action.payload;
    const response = yield call(AuthInstance.forgotPassword, body);
    yield put(forgotPasswordAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(forgotPasswordAction.failure(err));
  }
}
export function* vertifyOtpPasswordSaga(action) {
  try {
    const { body, token, cb } = action.payload;
    const response = yield call(AuthInstance.vertifyOtpForgot, body, token);
    yield put(vertifyForgotAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(vertifyForgotAction.failure(err));
  }
}
export function* resetPasswordSaga(action) {
  try {
    const { token, body, cb } = action.payload;
    const response = yield call(AuthInstance.resetPassword, token, body);
    yield put(resetPasswordAction.success(response));
    cb?.();
  } catch (err) {
    yield put(resetPasswordAction.failure(err));
  }
}
export function* updatePasswordSaga(action) {
  try {
    const { body, cb } = action.payload;
    const response = yield call(AuthInstance.updatePassword, body);
    yield put(updatePasswordAction.success(response));
    cb?.();
  } catch (err) {
    yield put(updatePasswordAction.failure(err));
  }
}
export function* resendRegisterOtpSaga(action) {
  try {
    const { token, cb } = action.payload;
    const response = yield call(AuthInstance.resendRegisterOtp, token);
    yield put(resendRegisterOtpAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(resendRegisterOtpAction.failure(err));
  }
}
export function* resendForgotOtpSaga(action) {
  try {
    const { token, cb } = action.payload;
    const response = yield call(AuthInstance.resendForgotOtp, token);
    yield put(resendForgotOtpAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(resendForgotOtpAction.failure(err));
  }
}

export default function* root() {
  yield all([takeLatest(loginAction.request.type, loginSaga)]);
  yield all([takeLatest(registerAction.request.type, registerSaga)]);
  yield all([takeLatest(vertifyOtpAction.request.type, vertifyOtpSaga)]);
  yield all([takeLatest(forgotPasswordAction.request.type, forgotPasswordSaga)]);
  yield all([takeLatest(resetPasswordAction.request.type, resetPasswordSaga)]);
  yield all([takeLatest(vertifyForgotAction.request.type, vertifyOtpPasswordSaga)]);
  yield all([takeLatest(updatePasswordAction.request.type, updatePasswordSaga)]);
  yield all([takeLatest(resendRegisterOtpAction.request.type, resendRegisterOtpSaga)]);
  yield all([takeLatest(resendForgotOtpAction.request.type, resendForgotOtpSaga)]);
}
