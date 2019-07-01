import React from 'react';
import { Provider } from 'react-redux';
import SearchInputContainer from './search/searchInputContainer';

const App = ({ store }) => (
  <Provider store={store}>
    <h1>Stock Tracker App: Phase Two</h1>
    <SearchInputContainer />
  </Provider>
);

export default App;
