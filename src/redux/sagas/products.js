import { all, call, put, takeLatest } from 'redux-saga/effects';

import ProductInstance from '@/services/api/products';
import { getListProductPaperBookAction, getListProductAudioBookAction } from '@/redux/actions';

export function* getListProducPaperBooktSaga(action) {
  try {
    const { params, cb } = action.payload;
    const response = yield call(ProductInstance.getList, params);
    yield put(getListProductPaperBookAction.success(response));
    cb?.();
  } catch (err) {
    yield put(getListProductPaperBookAction.failure(err));
  }
}

export function* getListProductAudioBooktSaga(action) {
  try {
    const { params, cb } = action.payload;
    const response = yield call(ProductInstance.getList, params);
    yield put(getListProductAudioBookAction.success(response));
    cb?.();
  } catch (err) {
    yield put(getListProductAudioBookAction.failure(err));
  }
}

export default function* root() {
  yield all([takeLatest(getListProductPaperBookAction.request.type, getListProducPaperBooktSaga)]);
  yield all([takeLatest(getListProductAudioBookAction.request.type, getListProductAudioBooktSaga)]);
}
