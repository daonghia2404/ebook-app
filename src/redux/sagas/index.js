import { all, fork } from 'redux-saga/effects';

import authSaga from './auth';
import productSaga from './products';
import newsSaga from './news';
import profileSaga from './profile';
import notificationSaga from './notification';
import addressSaga from './address';
import rateProductSaga from './rate';
import authorSaga from './author';
import orderSaga from './order';
import uploadSaga from './upload';
import bannerSaga from './banner';
import feedbackSaga from './feedback';

const rootSaga = function* root() {
  yield all([
    fork(authSaga),
    fork(productSaga),
    fork(newsSaga),
    fork(profileSaga),
    fork(notificationSaga),
    fork(addressSaga),
    fork(rateProductSaga),
    fork(authorSaga),
    fork(orderSaga),
    fork(uploadSaga),
    fork(bannerSaga),
    fork(feedbackSaga),
  ]);
};

export default rootSaga;
