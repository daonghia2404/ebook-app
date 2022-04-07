import { createReducer } from 'deox';

import { loginAction } from '@/redux/actions';

const initialState = {
  currentUser: {},
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(loginAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, currentUser: response };
  }),
]);

export default reducer;
