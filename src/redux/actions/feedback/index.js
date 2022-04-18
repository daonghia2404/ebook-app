import { createActionCreator } from 'deox';
import { EFeedbackAction } from './constants';

export const postFeedbackAction = {
  request: createActionCreator(EFeedbackAction.POST_FEEDBACK_REQUEST, (resolve) => (body, cb) => resolve({ body, cb })),
  success: createActionCreator(EFeedbackAction.POST_FEEDBACK_SUCCESS, (resolve) => (response) => resolve({ response })),
  failure: createActionCreator(EFeedbackAction.POST_FEEDBACK_FAILED, (resolve) => (error) => resolve({ error })),
};
