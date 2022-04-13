import { createActionCreator } from 'deox';
import { EAuthAction } from './constants';

export const loginAction = {
  request: createActionCreator(EAuthAction.LOGIN_REQUEST, (resolve) => (body, cb) => resolve({ body, cb })),
  success: createActionCreator(EAuthAction.LOGIN_SUCCESS, (resolve) => (response) => resolve({ response })),
  failure: createActionCreator(EAuthAction.LOGIN_FAILED, (resolve) => (error) => resolve({ error })),
};
export const registerAction = {
  request: createActionCreator(EAuthAction.REGISTER_REQUEST, (resolve) => (body, cb) => resolve({ body, cb })),
  success: createActionCreator(EAuthAction.REGISTER_SUCCESS, (resolve) => (response) => resolve({ response })),
  failure: createActionCreator(EAuthAction.REGISTER_FAILED, (resolve) => (error) => resolve({ error })),
};
export const vertifyOtpAction = {
  request: createActionCreator(
    EAuthAction.VERTIFY_OTP_REQUEST,
    (resolve) => (body, token, cb) => resolve({ body, token, cb }),
  ),
  success: createActionCreator(EAuthAction.VERTIFY_OTP_SUCCESS, (resolve) => (response) => resolve({ response })),
  failure: createActionCreator(EAuthAction.VERTIFY_OTP_FAILED, (resolve) => (error) => resolve({ error })),
};
export const forgotPasswordAction = {
  request: createActionCreator(EAuthAction.FORGOT_PASSWORD_REQUEST, (resolve) => (body, cb) => resolve({ body, cb })),
  success: createActionCreator(EAuthAction.FORGOT_PASSWORD_SUCCESS, (resolve) => (response) => resolve({ response })),
  failure: createActionCreator(EAuthAction.FORGOT_PASSWORD_FAILED, (resolve) => (error) => resolve({ error })),
};
export const vertifyForgotAction = {
  request: createActionCreator(
    EAuthAction.VERTIFY_FORGOT_PASSWORD_REQUEST,
    (resolve) => (body, token, cb) => resolve({ body, token, cb }),
  ),
  success: createActionCreator(
    EAuthAction.VERTIFY_FORGOT_PASSWORD_SUCCESS,
    (resolve) => (response) => resolve({ response }),
  ),
  failure: createActionCreator(EAuthAction.VERTIFY_FORGOT_PASSWORD_FAILED, (resolve) => (error) => resolve({ error })),
};
export const resetPasswordAction = {
  request: createActionCreator(EAuthAction.RESET_PASSWORD_REQUEST, (resolve) => (body, cb) => resolve({ body, cb })),
  success: createActionCreator(EAuthAction.RESET_PASSWORD_SUCCESS, (resolve) => (response) => resolve({ response })),
  failure: createActionCreator(EAuthAction.RESET_PASSWORD_FAILED, (resolve) => (error) => resolve({ error })),
};
export const updatePasswordAction = {
  request: createActionCreator(EAuthAction.UPDATE_PASSWORD_REQUEST, (resolve) => (body, cb) => resolve({ body, cb })),
  success: createActionCreator(EAuthAction.UPDATE_PASSWORD_SUCCESS, (resolve) => (response) => resolve({ response })),
  failure: createActionCreator(EAuthAction.UPDATE_PASSWORD_FAILED, (resolve) => (error) => resolve({ error })),
};
