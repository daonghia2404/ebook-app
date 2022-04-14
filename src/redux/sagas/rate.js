import { all, call, put, takeLatest } from 'redux-saga/effects';
import { postRateProductAction, getRateProductAction, getRateStatisticProductAction } from '../actions/rate';
import RateInstance from '@/services/api/rate';

export function* getRateProductSaga(action) {
  try {
    const { body, cb } = action.payload;
    const response = yield call(RateInstance.getListRate, body);
    yield put(getRateProductAction.success(response));
    cb?.();
  } catch (err) {
    yield put(getRateProductAction.failure(err));
  }
}

export function* getRateStatisticProductSaga(action) {
  try {
    const { body, cb } = action.payload;
    const response = yield call(RateInstance.getStatisticRate, body);
    yield put(getRateStatisticProductAction.success(response));
    cb?.();
  } catch (err) {
    yield put(getRateStatisticProductAction.failure(err));
  }
}

export default function* root() {
  yield all([takeLatest(getRateProductAction.request.type, getRateProductSaga)]);
  yield all([takeLatest(getRateStatisticProductAction.request.type, getRateStatisticProductSaga)]);
}
