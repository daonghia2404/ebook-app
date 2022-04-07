import { all, fork } from 'redux-saga/effects';

import authSaga from './auth';

const rootSaga = function* root() {
  yield all([fork(authSaga)]);
};

export default rootSaga;
