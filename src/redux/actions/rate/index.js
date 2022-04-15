import { createActionCreator } from 'deox';
import { ERateProductAction } from './constants';

export const postRateProductAction = {
  request: createActionCreator(
    ERateProductAction.POST_RATE_PRODUCT_REQUEST,
    (resolve) => (id, body, cb) => resolve({ id, body, cb }),
  ),
  success: createActionCreator(
    ERateProductAction.POST_RATE_PRODUCT_SUCCESS,
    (resolve) => (response) => resolve({ response }),
  ),
  failure: createActionCreator(ERateProductAction.POST_RATE_PRODUCT_FAILED, (resolve) => (error) => resolve({ error })),
};

export const getRateProductAction = {
  request: createActionCreator(
    ERateProductAction.GET_RATE_PRODUCT_REQUEST,
    (resolve) => (id, params, cb) => resolve({ id, params, cb }),
  ),
  success: createActionCreator(
    ERateProductAction.GET_RATE_PRODUCT_SUCCESS,
    (resolve) => (response) => resolve({ response }),
  ),
  failure: createActionCreator(ERateProductAction.GET_RATE_PRODUCT_FAILED, (resolve) => (error) => resolve({ error })),
};

export const getRateStatisticProductAction = {
  request: createActionCreator(
    ERateProductAction.GET_RATE_STATISTIC_PRODUCT_REQUEST,
    (resolve) => (id, cb) => resolve({ id, cb }),
  ),
  success: createActionCreator(
    ERateProductAction.GET_RATE_STATISTIC_PRODUCT_SUCCESS,
    (resolve) => (response) => resolve({ response }),
  ),
  failure: createActionCreator(
    ERateProductAction.GET_RATE_STATISTIC_PRODUCT_FAILED,
    (resolve) => (error) => resolve({ error }),
  ),
};
