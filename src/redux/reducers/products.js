import { createReducer } from 'deox';

import { getListProductPaperBookAction, getListProductAudioBookAction } from '@/redux/actions';

const initialState = {
  paperBooks: [],
  audioBooks: [],
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
]);

export default reducer;
