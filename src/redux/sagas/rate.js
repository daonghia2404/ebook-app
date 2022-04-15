import { all, call, put, takeLatest } from 'redux-saga/effects';
import { postRateProductAction, getRateProductAction, getRateStatisticProductAction } from '../actions/rate';
import RateInstance from '@/services/api/rate';

export function* getRateProductSaga(action) {
  try {
    const { id, params, cb } = action.payload;
    const response = yield call(RateInstance.getListRate, id, params);
    yield put(getRateProductAction.success(response));
    cb?.();
  } catch (err) {
    yield put(getRateProductAction.failure(err));
  }
}

export function* postRateProductSaga(action) {
  try {
    const { id, body, cb } = action.payload;
    const response = yield call(RateInstance.rateProduct, id, body);
    yield put(postRateProductAction.success(response));
    cb?.();
  } catch (err) {
    yield put(postRateProductAction.failure(err));
  }
}

export function* getRateStatisticProductSaga(action) {
  try {
    const { id, cb } = action.payload;
    const response = yield call(RateInstance.getStatisticRate, id);
    yield put(getRateStatisticProductAction.success(response));
    cb?.();
  } catch (err) {
    yield put(getRateStatisticProductAction.failure(err));
  }
}

export default function* root() {
  yield all([takeLatest(getRateProductAction.request.type, getRateProductSaga)]);
  yield all([takeLatest(postRateProductAction.request.type, postRateProductSaga)]);
  yield all([takeLatest(getRateStatisticProductAction.request.type, getRateStatisticProductSaga)]);
}
