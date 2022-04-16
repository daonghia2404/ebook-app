import { getProfileAction, getListMyBookAction, getFileMyBookAction, getVoiceMyBookAction } from '@/redux/actions';
import { createReducer } from 'deox';

const initialState = {
  profile: {},
  myBookList: {},
  fileMyBook: {},
  voiceMyBook: {},
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getProfileAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, profile: response.data };
  }),
  handleAction(getListMyBookAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, myBookList: response.data };
  }),
  handleAction(getFileMyBookAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, fileMyBook: response.data };
  }),
  handleAction(getVoiceMyBookAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, voiceMyBook: response.data };
  }),
]);

export default reducer;
