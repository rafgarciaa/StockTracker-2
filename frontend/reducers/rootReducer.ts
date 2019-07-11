import { combineReducers } from 'redux';
import quotes from './quotes/quotesReducer';
import updateTime from './updates/updateTimeReducer';
import fetchStatus from './fetches/fetchStatusReducer';

const rootReducer = combineReducers({
  quotes,
  fetchStatus,
  updateTime,
});

export default rootReducer;
