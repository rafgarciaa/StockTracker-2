import { combineReducers } from 'redux';
import quotes from './quotes/quotesReducer';

const rootReducer = combineReducers({
  quotes,
});

export default rootReducer;
