import { all, call, put, takeLatest } from 'redux-saga/effects';

import FeedbackInstance from '@/services/api/feedback';
import { postFeedbackAction } from '@/redux/actions';

export function* getFeedbacksSaga(action) {
  try {
    const { body, cb } = action.payload;
    const response = yield call(FeedbackInstance.postFeedback, body);
    yield put(postFeedbackAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(postFeedbackAction.failure(err));
  }
}

export default function* root() {
  yield all([takeLatest(postFeedbackAction.request.type, getFeedbacksSaga)]);
}
