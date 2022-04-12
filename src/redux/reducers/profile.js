import { getProfileAction, updateProfileAction } from '@/redux/actions';
import { createReducer } from 'deox';

const initialState = {
  profile: {},
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getProfileAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, profile: response };
  }),
  handleAction(updateProfileAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, profile: response };
  }),
]);

export default reducer;
