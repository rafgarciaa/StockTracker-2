import React from 'react';
import { Provider } from 'react-redux';
import HeaderLayout from './header/headerLayout';
import ChartNewsLayout from './chartNews/chartNewsLayout';
import StatsInfoPeersLayout from './statsInfoPeers/statsInfoPeersLayout';
import FooterLayout from './footer/footerLayout';
import { RootState } from '../utilities/interfaces';

const App = ({ store }: any) => (
  <Provider store={store}>
    <div className="section-main">
      <HeaderLayout />
      <ChartNewsLayout />
      <StatsInfoPeersLayout />
    </div>
    <FooterLayout />
  </Provider>
);

export default App;
