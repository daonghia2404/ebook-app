import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  addressListAction,
  addAddressAction,
  getProvinceAction,
  getDistrictAction,
  getWardAction,
  caculateAction,
} from '@/redux/actions';
import AddressInstance from '@/services/api/address';

export function* getListAddressSaga(action) {
  try {
    const { params, cb } = action.payload;
    const response = yield call(AddressInstance.getList, params);
    yield put(addressListAction.success(response));
    cb?.();
  } catch (err) {
    yield put(addressListAction.failure(err));
  }
}
export function* saveAddressSaga(action) {
  try {
    const { body, cb } = action.payload;
    const response = yield call(AddressInstance.addAddress, body);
    yield put(addAddressAction.success(response));
    cb?.();
  } catch (err) {
    yield put(addAddressAction.failure(err));
  }
}
export function* getProvinceSaga(action) {
  try {
    const { cb } = action.payload;
    const response = yield call(AddressInstance.getProvince);
    yield put(getProvinceAction.success(response));
    cb?.();
  } catch (err) {
    yield put(getProvinceAction.failure(err));
  }
}
export function* getDistrictSaga(action) {
  try {
    const { params, cb } = action.payload;
    const response = yield call(AddressInstance.getDistrict, params);
    yield put(getDistrictAction.success(response));
    cb?.();
  } catch (err) {
    yield put(getDistrictAction.failure(err));
  }
}
export function* getWardSaga(action) {
  try {
    const { params, cb } = action.payload;
    const response = yield call(AddressInstance.getWard, params);
    yield put(getWardAction.success(response));
    cb?.();
  } catch (err) {
    yield put(getWardAction.failure(err));
  }
}
export function* caculateShipSaga(action) {
  try {
    const { body, cb } = action.payload;
    const response = yield call(AddressInstance.caculateFeeShipping, body);
    yield put(caculateAction.success(response));
    cb?.();
  } catch (err) {
    yield put(caculateAction.failure(err));
  }
}
export default function* root() {
  yield all([takeLatest(addressListAction.request.type, getListAddressSaga)]);
  yield all([takeLatest(addAddressAction.request.type, saveAddressSaga)]);
  yield all([takeLatest(getProvinceAction.request.type, getProvinceSaga)]);
  yield all([takeLatest(getDistrictAction.request.type, getDistrictSaga)]);
  yield all([takeLatest(getWardAction.request.type, getWardSaga)]);
  yield all([takeLatest(caculateAction.request.type, caculateShipSaga)]);
}
