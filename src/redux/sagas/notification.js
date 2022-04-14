import { all, call, put, takeLatest } from 'redux-saga/effects';
import NotificationInstance from '@/services/api/notification';
import { getNoticeAction } from '@/redux/actions';

export function* getListNotiSaga(action) {
  try {
    const { params, cb } = action.payload;
    const response = yield call(NotificationInstance.getList, params);
    yield put(getNoticeAction.success(response));
    cb?.(response);
  } catch (err) {
    yield put(getNoticeAction.failure(err));
  }
}

export default function* root() {
  yield all([takeLatest(getNoticeAction.request.type, getListNotiSaga)]);
}
