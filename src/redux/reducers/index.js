import { combineReducers } from 'redux';

import loading from './status/loading';
import success from './status/success';
import error from './status/error';
import authState from './auth';
import productState from './products';
import uiState from './ui';
import newState from './news';
import profileState from './profile';
import notificationState from './notification';
import addressState from './address';
import rateProductState from './rate';
import authorState from './author';
import orderState from './order';
import bannerState from './banner';

const rootReducer = combineReducers({
  loading,
  success,
  error,
  authState,
  productState,
  uiState,
  newState,
  profileState,
  notificationState,
  addressState,
  rateProductState,
  authorState,
  orderState,
  bannerState,
});

export default rootReducer;
