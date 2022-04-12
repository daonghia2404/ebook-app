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
