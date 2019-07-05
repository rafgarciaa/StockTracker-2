import React from 'react';
import { Provider } from 'react-redux';
import HeaderContainer from './header/headerContainer';
import ChartNewsContainer from './chartNews/chartNewsContainer';

const App = ({ store }) => (
  <Provider store={store}>
    <h1>Stock Tracker App: Phase Two</h1>
    <HeaderContainer />
    <ChartNewsContainer />
  </Provider>
);

export default App;
