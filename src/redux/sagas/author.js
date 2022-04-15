import { all, call, put, takeLatest } from 'redux-saga/effects';

import AuthorInstance from '@/services/api/author';
import { getAuthorsAction } from '@/redux/actions';

export function* getAuthorsSaga(action) {
  try {
    const { params, cb } = action.payload;
    const response = yield call(AuthorInstance.getAuthors, params);
    yield put(getAuthorsAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getAuthorsAction.failure(err));
  }
}

export default function* root() {
  yield all([takeLatest(getAuthorsAction.request.type, getAuthorsSaga)]);
}
