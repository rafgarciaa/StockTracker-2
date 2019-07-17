import { createStore, applyMiddleware, Store, AnyAction } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';
import { RootState, AllActions } from '../utilities/interfaces';

const configureStore: Store<RootState, AnyAction> = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

export default configureStore;
