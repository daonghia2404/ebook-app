import { combineReducers } from 'redux';

import loading from './status/loading';
import success from './status/success';
import error from './status/error';
import authState from './auth';

const rootReducer = combineReducers({
  loading,
  success,
  error,
  authState,
});

export default rootReducer;
