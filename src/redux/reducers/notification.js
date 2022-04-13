import { createReducer } from 'deox';

import { getNoticeAction } from '@/redux/actions';

const initialState = {
  noticeList: [],
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getNoticeAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, noticeList: response.data.records };
  }),
]);

export default reducer;
