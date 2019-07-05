import React from 'react';
import { Provider } from 'react-redux';
import HeaderContainer from './header/headerContainer';

const App = ({ store }) => (
  <Provider store={store}>
    <h1>Stock Tracker App: Phase Two</h1>
    <HeaderContainer />
  </Provider>
);

export default App;
