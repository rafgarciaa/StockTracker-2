import React from 'react';
import { Provider } from 'react-redux';
import HeaderContainer from './header/headerContainer';
import ChartNewsContainer from './chartNews/chartNewsContainer';
import StatsInfoPeersContainer from './statsInfoPeers/statsInfoPeersContainer';
import FooterContainer from './footer/footerContainer';

const App = ({ store }) => (
  <Provider store={store}>
    <HeaderContainer />
    <ChartNewsContainer />
    <StatsInfoPeersContainer />
    <FooterContainer />
  </Provider>
);

export default App;
