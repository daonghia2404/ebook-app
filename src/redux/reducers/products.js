import { createReducer } from 'deox';

import {
  getListProductPaperBookAction,
  getListProductAudioBookAction,
  getListProductSearchAction,
  getProductDetailAction,
  addToCartAction,
  getListCartAction,
  updateCartAction,
  deleteCartAction,
  getSameProductAction,
} from '@/redux/actions';

const initialState = {
  paperBooks: [],
  audioBooks: [],
  books: [],
  book: {},
  sameBooks: [],
  carts: [],
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getListProductPaperBookAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, paperBooks: response.data.records };
  }),
  handleAction(getListProductAudioBookAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, audioBooks: response.data.records };
  }),
  handleAction(getListProductSearchAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, books: response.data };
  }),
  handleAction(getProductDetailAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, book: response.data };
  }),
  handleAction(addToCartAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state };
  }),
  handleAction(getListCartAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, carts: response.data };
  }),
  handleAction(updateCartAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state };
  }),
  handleAction(deleteCartAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state };
  }),
  handleAction(getSameProductAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, sameBooks: response.data.records };
  }),
]);

export default reducer;
