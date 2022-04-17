import { createReducer } from 'deox';

import { getBannersAction } from '@/redux/actions';

const initialState = {
  banners: [],
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(getBannersAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, banners: response.data };
  }),
]);

export default reducer;
