import { getAuthorsAction } from '@/redux/actions';
import { createReducer } from 'deox';

const initialState = {
  authors: [],
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getAuthorsAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, authors: response.data };
  }),
]);

export default reducer;
