import { createActionCreator } from 'deox';
import { EOrderAction } from './constants';

export const getOrdersAction = {
  request: createActionCreator(EOrderAction.GET_ORDERS_REQUEST, (resolve) => (params, cb) => resolve({ params, cb })),
  success: createActionCreator(EOrderAction.GET_ORDERS_SUCCESS, (resolve) => (response) => resolve({ response })),
  failure: createActionCreator(EOrderAction.GET_ORDERS_FAILED, (resolve) => (error) => resolve({ error })),
};
export const getOrderAction = {
  request: createActionCreator(EOrderAction.GET_ORDER_REQUEST, (resolve) => (id, cb) => resolve({ id, cb })),
  success: createActionCreator(EOrderAction.GET_ORDER_SUCCESS, (resolve) => (response) => resolve({ response })),
  failure: createActionCreator(EOrderAction.GET_ORDER_FAILED, (resolve) => (error) => resolve({ error })),
};
export const createCodOrderAction = {
  request: createActionCreator(EOrderAction.CREATE_COD_ORDER_REQUEST, (resolve) => (body, cb) => resolve({ body, cb })),
  success: createActionCreator(EOrderAction.CREATE_COD_ORDER_SUCCESS, (resolve) => (response) => resolve({ response })),
  failure: createActionCreator(EOrderAction.CREATE_COD_ORDER_FAILED, (resolve) => (error) => resolve({ error })),
};
export const createOnlineOrderAction = {
  request: createActionCreator(
    EOrderAction.CREATE_ONLINE_ORDER_REQUEST,
    (resolve) => (body, cb) => resolve({ body, cb }),
  ),
  success: createActionCreator(
    EOrderAction.CREATE_ONLINE_ORDER_SUCCESS,
    (resolve) => (response) => resolve({ response }),
  ),
  failure: createActionCreator(EOrderAction.CREATE_ONLINE_ORDER_FAILED, (resolve) => (error) => resolve({ error })),
};
export const cancelOrderAction = {
  request: createActionCreator(EOrderAction.CANCEL_ORDER_REQUEST, (resolve) => (id, cb) => resolve({ id, cb })),
  success: createActionCreator(EOrderAction.CANCEL_ORDER_SUCCESS, (resolve) => (response) => resolve({ response })),
  failure: createActionCreator(EOrderAction.CANCEL_ORDER_FAILED, (resolve) => (error) => resolve({ error })),
};
