import { all, call, put, takeLatest } from 'redux-saga/effects';
import NewInstance from '@/services/api/news';
import { getListNewAction, getListNewLatestAction } from '@/redux/actions';

export function* getListNewSaga(action) {
  try {
    const { param, cb } = action.payload;
    const response = yield call(NewInstance.getList, param);
    yield put(getListNewAction.success(response));
    cb?.();
  } catch (err) {
    yield put(getListNewAction.failure(err));
  }
}

export function* getListNewLatestSaga(action) {
  try {
    const { param, cb } = action.payload;
    const response = yield call(NewInstance.getList, param);
    yield put(getListNewLatestAction.success(response));
    cb?.();
  } catch (err) {
    yield put(getListNewLatestAction.failure(err));
  }
}

export default function* root() {
  yield all([takeLatest(getListNewAction.request.type, getListNewSaga)]);
  yield all([takeLatest(getListNewLatestAction.request.type, getListNewLatestSaga)]);
}
