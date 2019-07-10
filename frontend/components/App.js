import React from 'react';
import { Provider } from 'react-redux';
import HeaderContainer from './header/headerContainer';
import ChartNewsLayout from './chartNews/chartNewsLayout';
import StatsInfoPeersContainer from './statsInfoPeers/statsInfoPeersContainer';
import FooterContainer from './footer/footerContainer';

const App = ({ store }) => (
  <Provider store={store}>
    <HeaderContainer />
    <ChartNewsLayout />
    <StatsInfoPeersContainer />
    <FooterContainer />
  </Provider>
);

export default App;
