import { createReducer } from 'deox';

import { getListNewAction, getListNewLatestAction } from '@/redux/actions';

const initialState = {
  news: [],
  newLatests: [],
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
]);

export default reducer;
