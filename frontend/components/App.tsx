import React from 'react';
import { Provider } from 'react-redux';
import HeaderLayout from './header/headerLayout';
import ChartNewsLayout from './chartNews/chartNewsLayout';
import StatsInfoPeersLayout from './statsInfoPeers/statsInfoPeersLayout';
import FooterContainer from './footer/footerContainer';

const App = ({ store }: any) => (
  <Provider store={store}>
    <div className="section-main">
      <HeaderLayout />
      <ChartNewsLayout />
      <StatsInfoPeersLayout />
    </div>
    <FooterContainer />
  </Provider>
);

export default App;