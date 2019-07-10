import { combineReducers } from 'redux';
import quotes from './quotes/quotesReducer';
import fetchStatus from './errors/fetchStatusReducer';

const rootReducer = combineReducers({
  quotes,
  fetchStatus,
});

export default rootReducer;
