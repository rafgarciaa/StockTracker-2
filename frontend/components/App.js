import React from 'react';
import { Provider } from 'react-redux';
import HeaderLayout from './header/headerLayout';
import ChartNewsLayout from './chartNews/chartNewsLayout';
import StatsInfoPeersContainer from './statsInfoPeers/statsInfoPeersContainer';
import FooterContainer from './footer/footerContainer';

const App = ({ store }) => (
  <Provider store={store}>
    <HeaderLayout />
    <ChartNewsLayout />
    <StatsInfoPeersContainer />
    <FooterContainer />
  </Provider>
);

export default App;
