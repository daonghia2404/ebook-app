import { createReducer } from 'deox';

import { postRateProductAction, getRateProductAction, getRateStatisticProductAction } from '@/redux/actions';

const initialState = {
  postRateBooks: [],
  getRateBooks: [],
  getRateStatistic: [],
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(postRateProductAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, postRateBooks: response };
  }),
  handleAction(getRateProductAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, getRateBooks: response.data.records };
  }),
  handleAction(getRateStatisticProductAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, getRateStatistic: response.data };
  }),
]);

export default reducer;
