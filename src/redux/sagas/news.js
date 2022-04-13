import { all, call, put, takeLatest } from 'redux-saga/effects';
import NewInstance from '@/services/api/news';
import { getListNewAction, getListNewLatestAction, getDetailNewAction } from '@/redux/actions';

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
export function* getByIdSaga(action) {
  try {
    const { param, cb } = action.payload;
    const response = yield call(NewInstance.getById, param);
    yield put(getDetailNewAction.success(response));
    cb?.();
  } catch (err) {
    yield put(getDetailNewAction.failure(err));
  }
}

export default function* root() {
  yield all([takeLatest(getListNewAction.request.type, getListNewSaga)]);
  yield all([takeLatest(getListNewLatestAction.request.type, getListNewLatestSaga)]);
  yield all([takeLatest(getDetailNewAction.request.type, getByIdSaga)]);
}
