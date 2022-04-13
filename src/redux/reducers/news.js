import { createReducer } from 'deox';

import { getListNewAction, getListNewLatestAction, getDetailNewAction } from '@/redux/actions';

const initialState = {
  news: [],
  newLatests: [],
  new: {},
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getListNewAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, news: response.data.records };
  }),
  handleAction(getListNewLatestAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, newLatests: response.data.records };
  }),
  handleAction(getDetailNewAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, new: response.data };
  }),
]);

export default reducer;
