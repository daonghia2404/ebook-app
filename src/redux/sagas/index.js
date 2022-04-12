import { all, fork } from 'redux-saga/effects';

import authSaga from './auth';
import productSaga from './products';
import newsSaga from './news';
import profileSaga from './profile';

const rootSaga = function* root() {
  yield all([fork(authSaga), fork(productSaga), fork(newsSaga), fork(profileSaga)]);
  // yield all([fork(authSaga), fork(profileSaga)]);
};

export default rootSaga;
