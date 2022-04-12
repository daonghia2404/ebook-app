import { all, fork } from 'redux-saga/effects';

import authSaga from './auth';
import productSaga from './products';
import newsSaga from './news';

const rootSaga = function* root() {
  yield all([fork(authSaga), fork(productSaga), fork(newsSaga)]);
};

export default rootSaga;
