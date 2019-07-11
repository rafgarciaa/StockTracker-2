import { combineReducers } from 'redux';
import quotes from './quotes/quotesReducer';
import errors from './errors/errorsReducer';
import updateTime from './updates/updateTimeReducer';

const rootReducer = combineReducers({
  quotes,
  errors,
  updateTime,
});

export default rootReducer;
