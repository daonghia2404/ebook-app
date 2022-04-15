import { createActionCreator } from 'deox';
import { EAddressAction } from './constants';

export const addressListAction = {
  request: createActionCreator(
    EAddressAction.ADDRESS_LIST_REQUEST,
    (resolve) => (params, cb) => resolve({ params, cb }),
  ),
  success: createActionCreator(EAddressAction.ADDRESS_LIST_SUCCESS, (resolve) => (response) => resolve({ response })),
  failure: createActionCreator(EAddressAction.ADDRESS_LIST_FAILED, (resolve) => (error) => resolve({ error })),
};
export const getAddressDefaultAction = {
  request: createActionCreator(EAddressAction.GET_ADDRESS_DEFAULT_REQUEST, (resolve) => (cb) => resolve({ cb })),
  success: createActionCreator(
    EAddressAction.GET_ADDRESS_DEFAULT_SUCCESS,
    (resolve) => (response) => resolve({ response }),
  ),
  failure: createActionCreator(EAddressAction.GET_ADDRESS_DEFAULT_FAILED, (resolve) => (error) => resolve({ error })),
};
export const addAddressAction = {
  request: createActionCreator(EAddressAction.ADDRESS_ADD_REQUEST, (resolve) => (body, cb) => resolve({ body, cb })),
  success: createActionCreator(EAddressAction.ADDRESS_ADD_SUCCESS, (resolve) => (response) => resolve({ response })),
  failure: createActionCreator(EAddressAction.ADDRESS_ADD_FAILED, (resolve) => (error) => resolve({ error })),
};
export const updateAddressAction = {
  request: createActionCreator(
    EAddressAction.ADDRESS_UPDATE_REQUEST,
    (resolve) => (id, body, cb) => resolve({ id, body, cb }),
  ),
  success: createActionCreator(EAddressAction.ADDRESS_UPDATE_SUCCESS, (resolve) => (response) => resolve({ response })),
  failure: createActionCreator(EAddressAction.ADDRESS_UPDATE_FAILED, (resolve) => (error) => resolve({ error })),
};
export const getProvinceAction = {
  request: createActionCreator(EAddressAction.GET_PROVINCE_REQUEST, (resolve) => (cb) => resolve({ cb })),
  success: createActionCreator(EAddressAction.GET_PROVINCE_SUCCESS, (resolve) => (response) => resolve({ response })),
  failure: createActionCreator(EAddressAction.GET_PROVINCE_FAILED, (resolve) => (error) => resolve({ error })),
};
export const getDistrictAction = {
  request: createActionCreator(
    EAddressAction.GET_DISTRICT_REQUEST,
    (resolve) => (params, cb) => resolve({ params, cb }),
  ),
  success: createActionCreator(EAddressAction.GET_DISTRICT_SUCCESS, (resolve) => (response) => resolve({ response })),
  failure: createActionCreator(EAddressAction.GET_DISTRICT_FAILED, (resolve) => (error) => resolve({ error })),
};
export const getWardAction = {
  request: createActionCreator(EAddressAction.GET_WARD_REQUEST, (resolve) => (params, cb) => resolve({ params, cb })),
  success: createActionCreator(EAddressAction.GET_WARD_SUCCESS, (resolve) => (response) => resolve({ response })),
  failure: createActionCreator(EAddressAction.GET_WARD_FAILED, (resolve) => (error) => resolve({ error })),
};
export const caculateAction = {
  request: createActionCreator(
    EAddressAction.CACULATE_FEE_SHIP_REQUEST,
    (resolve) => (body, cb) => resolve({ body, cb }),
  ),
  success: createActionCreator(
    EAddressAction.CACULATE_FEE_SHIP_SUCCESS,
    (resolve) => (response) => resolve({ response }),
  ),
  failure: createActionCreator(EAddressAction.CACULATE_FEE_SHIP_FAILED, (resolve) => (error) => resolve({ error })),
};
