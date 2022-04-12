import { createReducer } from 'deox';

import {
  loginAction,
  registerAction,
  vertifyOtpAction,
  forgotPasswordAction,
  resetPasswordAction,
  vertifyForgotAction,
} from '@/redux/actions';

const initialState = {
  currentUser: {},
  token: '',
  tokenForgot: '',
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(loginAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, currentUser: response };
  }),
  handleAction(registerAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, token: response.data.token };
  }),
  handleAction(vertifyOtpAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state };
  }),
  handleAction(forgotPasswordAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state };
  }),
  handleAction(vertifyForgotAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state, tokenForgot: response.data.token };
  }),
  handleAction(resetPasswordAction.success, (state, action) => {
    const { response } = action.payload;
    return { ...state };
  }),
]);

export default reducer;
