import { createReducer } from 'deox';

import { getOrdersAction, getOrderAction } from '@/redux/actions';

const initialState = {
  orders: {},
  order: {},
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getOrdersAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, orders: response.data };
  }),
  handleAction(getOrderAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, order: response.data };
  }),
]);

export default reducer;
