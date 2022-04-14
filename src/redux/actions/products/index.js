import { createActionCreator } from 'deox';
import { EProductAction } from './constants';

export const getListProductPaperBookAction = {
  request: createActionCreator(
    EProductAction.GET_LIST_PRODUCT_PAPER_REQUEST,
    (resolve) => (params, cb) => resolve({ params, cb }),
  ),
  success: createActionCreator(
    EProductAction.GET_LIST_PRODUCT_PAPER_SUCCESS,
    (resolve) => (response) => resolve({ response }),
  ),
  failure: createActionCreator(
    EProductAction.GET_LIST_PRODUCT_PAPER_FAILED,
    (resolve) => (error) => resolve({ error }),
  ),
};
export const getListProductAudioBookAction = {
  request: createActionCreator(
    EProductAction.GET_LIST_PRODUCT_AUDIO_REQUEST,
    (resolve) => (params, cb) => resolve({ params, cb }),
  ),
  success: createActionCreator(
    EProductAction.GET_LIST_PRODUCT_AUDIO_SUCCESS,
    (resolve) => (response) => resolve({ response }),
  ),
  failure: createActionCreator(
    EProductAction.GET_LIST_PRODUCT_PAPER_FAILED,
    (resolve) => (error) => resolve({ error }),
  ),
};
export const getListProductSearchAction = {
  request: createActionCreator(
    EProductAction.GET_LIST_PRODUCT_SEARCH_REQUEST,
    (resolve) => (params, cb) => resolve({ params, cb }),
  ),
  success: createActionCreator(
    EProductAction.GET_LIST_PRODUCT_SEARCH_SUCCESS,
    (resolve) => (response) => resolve({ response }),
  ),
  failure: createActionCreator(
    EProductAction.GET_LIST_PRODUCT_SEARCH_FAILED,
    (resolve) => (error) => resolve({ error }),
  ),
};
export const getProductDetailAction = {
  request: createActionCreator(
    EProductAction.GET_DETAIL_PRODUCT_REQUEST,
    (resolve) => (params, cb) => resolve({ params, cb }),
  ),
  success: createActionCreator(
    EProductAction.GET_DETAIL_PRODUCT_SUCCESS,
    (resolve) => (response) => resolve({ response }),
  ),
  failure: createActionCreator(EProductAction.GET_DETAIL_PRODUCT_FAILED, (resolve) => (error) => resolve({ error })),
};
export const addToCartAction = {
  request: createActionCreator(
    EProductAction.ADD_TO_CART_PRODUCT_REQUEST,
    (resolve) => (body, cb) => resolve({ body, cb }),
  ),
  success: createActionCreator(
    EProductAction.ADD_TO_CART_PRODUCT_SUCCESS,
    (resolve) => (response) => resolve({ response }),
  ),
  failure: createActionCreator(EProductAction.ADD_TO_CART_PRODUCT_FAILED, (resolve) => (error) => resolve({ error })),
};
export const getListCartAction = {
  request: createActionCreator(
    EProductAction.LIST_CART_PRODUCT_REQUEST,
    (resolve) => (body, cb) => resolve({ body, cb }),
  ),
  success: createActionCreator(
    EProductAction.LIST_CART_PRODUCT_SUCCESS,
    (resolve) => (response) => resolve({ response }),
  ),
  failure: createActionCreator(EProductAction.LIST_CART_PRODUCT_FAILED, (resolve) => (error) => resolve({ error })),
};
export const updateCartAction = {
  request: createActionCreator(
    EProductAction.UPDATE_CART_PRODUCT_REQUEST,
    (resolve) => (params, body, cb) => resolve({ params, body, cb }),
  ),
  success: createActionCreator(
    EProductAction.UPDATE_CART_PRODUCT_SUCCESS,
    (resolve) => (response) => resolve({ response }),
  ),
  failure: createActionCreator(EProductAction.UPDATE_CART_PRODUCT_FAILED, (resolve) => (error) => resolve({ error })),
};
export const deleteCartAction = {
  request: createActionCreator(
    EProductAction.DELETE_CART_PRODUCT_REQUEST,
    (resolve) => (params, cb) => resolve({ params, cb }),
  ),
  success: createActionCreator(
    EProductAction.DELETE_CART_PRODUCT_SUCCESS,
    (resolve) => (response) => resolve({ response }),
  ),
  failure: createActionCreator(EProductAction.DELETE_CART_PRODUCT_FAILED, (resolve) => (error) => resolve({ error })),
};
export const getSameProductAction = {
  request: createActionCreator(
    EProductAction.GET_SAME_PRODUCT_REQUEST,
    (resolve) => (id, params, cb) => resolve({ id, params, cb }),
  ),
  success: createActionCreator(
    EProductAction.GET_SAME_PRODUCT_SUCCESS,
    (resolve) => (response) => resolve({ response }),
  ),
  failure: createActionCreator(EProductAction.GET_SAME_PRODUCT_FAILED, (resolve) => (error) => resolve({ error })),
};
