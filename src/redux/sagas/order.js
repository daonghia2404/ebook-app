import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  cancelOrderAction,
  createCodOrderAction,
  createOnlineOrderAction,
  getOrderAction,
  getOrdersAction,
} from '@/redux/actions';
import OrderInstance from '@/services/api/order';

export function* getOrdersSaga(action) {
  try {
    const { params, cb } = action.payload;
    const response = yield call(OrderInstance.getOrders, params);
    yield put(getOrdersAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getOrdersAction.failure(err));
  }
}
export function* getOrderSaga(action) {
  try {
    const { id, cb } = action.payload;
    const response = yield call(OrderInstance.getOrder, id);
    yield put(getOrderAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getOrderAction.failure(err));
  }
}
export function* cancelOrderSaga(action) {
  try {
    const { id, cb } = action.payload;
    const response = yield call(OrderInstance.cancelOrder, id);
    yield put(cancelOrderAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(cancelOrderAction.failure(err));
  }
}
export function* createCodOrderSaga(action) {
  try {
    const { body, cb } = action.payload;
    const response = yield call(OrderInstance.createCodOrder, body);
    yield put(createCodOrderAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(createCodOrderAction.failure(err));
  }
}
export function* createOnlineOrderSaga(action) {
  try {
    const { body, cb } = action.payload;
    const response = yield call(OrderInstance.createOnlineOrder, body);
    yield put(createOnlineOrderAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(createOnlineOrderAction.failure(err));
  }
}

export default function* root() {
  yield all([takeLatest(getOrdersAction.request.type, getOrdersSaga)]);
  yield all([takeLatest(getOrderAction.request.type, getOrderSaga)]);
  yield all([takeLatest(cancelOrderAction.request.type, cancelOrderSaga)]);
  yield all([takeLatest(createCodOrderAction.request.type, createCodOrderSaga)]);
  yield all([takeLatest(createOnlineOrderAction.request.type, createOnlineOrderSaga)]);
}
