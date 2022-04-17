import { all, call, put, takeLatest } from 'redux-saga/effects';

import BannerInstance from '@/services/api/banner';
import { getBannersAction } from '@/redux/actions';

export function* getBannersSaga(action) {
  try {
    const { params, cb } = action.payload;
    const response = yield call(BannerInstance.getBanners, params);
    yield put(getBannersAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getBannersAction.failure(err));
  }
}

export default function* root() {
  yield all([takeLatest(getBannersAction.request.type, getBannersSaga)]);
}
