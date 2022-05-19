import { createReducer } from 'deox';

import { getListNewAction, getDetailNewAction } from '@/redux/actions';

const initialState = {
  news: {},
  new: {},
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getListNewAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, news: response.data };
  }),
  handleAction(getDetailNewAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, new: response.data };
  }),
]);

export default reducer;
