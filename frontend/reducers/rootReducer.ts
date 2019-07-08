import { combineReducers } from 'redux';
import quotes from './quotes/quotesReducer';
import errors from './errors/errorsReducer';

const rootReducer = combineReducers({
  quotes,
  errors,
});

export default rootReducer;
