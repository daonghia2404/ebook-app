import { combineReducers } from 'redux';

import loading from './status/loading';
import success from './status/success';
import error from './status/error';
import authState from './auth';
import productState from './products';
import uiState from './ui';
import newState from './news';

const rootReducer = combineReducers({
  loading,
  success,
  error,
  authState,
  productState,
  uiState,
  newState,
});

export default rootReducer;
