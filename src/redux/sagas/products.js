import { all, call, put, takeLatest } from 'redux-saga/effects';

import ProductInstance from '@/services/api/products';
import {
  getListProductPaperBookAction,
  getListProductAudioBookAction,
  getListProductSearchAction,
  getProductDetailAction,
  addToCartAction,
  getListCartAction,
  updateCartAction,
  getSameProductAction,
  deleteCartAction,
} from '@/redux/actions';

export function* getListProducPaperBookSaga(action) {
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
export function* getListProductSearchtSaga(action) {
  try {
    const { params, cb } = action.payload;
    const response = yield call(ProductInstance.getListSearch, params);
    yield put(getListProductSearchAction.success(response));
    cb?.();
  } catch (err) {
    yield put(getListProductSearchAction.failure(err));
  }
}
export function* getProductByIdSaga(action) {
  try {
    const { params, cb } = action.payload;
    const response = yield call(ProductInstance.getById, params);
    yield put(getProductDetailAction.success(response));
    cb?.();
  } catch (err) {
    yield put(getProductDetailAction.failure(err));
  }
}
export function* addToCartSaga(action) {
  try {
    const { body, cb } = action.payload;
    const response = yield call(ProductInstance.addToCart, body);
    yield put(addToCartAction.success(response));
    cb?.();
  } catch (err) {
    yield put(addToCartAction.failure(err));
  }
}
export function* getListCartSaga(action) {
  try {
    const { params, cb } = action.payload;
    const response = yield call(ProductInstance.getListCart, params);
    yield put(getListCartAction.success(response));
    cb?.();
  } catch (err) {
    yield put(getListCartAction.failure(err));
  }
}
export function* updateCartSaga(action) {
  try {
    const { params, body, cb } = action.payload;
    const response = yield call(ProductInstance.updateCart, params, body);
    yield put(updateCartAction.success(response));
    cb?.();
  } catch (err) {
    yield put(updateCartAction.failure(err));
  }
}
export function* deleteCartSaga(action) {
  try {
    const { params, cb } = action.payload;
    const response = yield call(ProductInstance.deleteCart, params);
    yield put(deleteCartAction.success(response));
    cb?.();
  } catch (err) {
    yield put(deleteCartAction.failure(err));
  }
}
export function* getSameProductSaga(action) {
  try {
    const { id, params, cb } = action.payload;
    const response = yield call(ProductInstance.getSameProduct, id, params);
    yield put(getSameProductAction.success(response));
    cb?.();
  } catch (err) {
    yield put(getSameProductAction.failure(err));
  }
}
export default function* root() {
  yield all([takeLatest(getListProductPaperBookAction.request.type, getListProducPaperBookSaga)]);
  yield all([takeLatest(getListProductAudioBookAction.request.type, getListProductAudioBooktSaga)]);
  yield all([takeLatest(getListProductSearchAction.request.type, getListProductSearchtSaga)]);
  yield all([takeLatest(getProductDetailAction.request.type, getProductByIdSaga)]);
  yield all([takeLatest(addToCartAction.request.type, addToCartSaga)]);
  yield all([takeLatest(getListCartAction.request.type, getListCartSaga)]);
  yield all([takeLatest(updateCartAction.request.type, updateCartSaga)]);
  yield all([takeLatest(deleteCartAction.request.type, deleteCartSaga)]);
  yield all([takeLatest(getSameProductAction.request.type, getSameProductSaga)]);
}
