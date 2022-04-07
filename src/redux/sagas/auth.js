import { all, call, put, takeLatest } from 'redux-saga/effects';

import AuthInstance from '@/services/api/auth';
import AuthHelpers from '@/services/auth-helpers';
import { loginAction } from '@/redux/actions';

export function* loginSaga(action) {
  try {
    const { body, cb } = action.payload;
    const response = yield call(AuthInstance.login, body);

    AuthHelpers.storeAccessToken(response.accessToken);
    AuthHelpers.storeRefreshToken(response.refreshToken);

    yield put(loginAction.success(response));
    cb?.();
  } catch (err) {
    yield put(loginAction.failure(err));
  }
}

export default function* root() {
  yield all([takeLatest(loginAction.request.type, loginSaga)]);
}
