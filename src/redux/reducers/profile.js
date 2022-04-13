import { getProfileAction, updateProfileAction, getListMyBookAction } from '@/redux/actions';
import { createReducer } from 'deox';

const initialState = {
  profile: {},
  myBookList: [],
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getProfileAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, profile: response.data };
  }),
  handleAction(updateProfileAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, profile: response };
  }),
  handleAction(getListMyBookAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, profile: response.data.records };
  }),
]);

export default reducer;
