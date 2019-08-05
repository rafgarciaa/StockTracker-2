import React, { FunctionComponent } from 'react';
import TopPeersContainer from './topPeersContainer';
import CompanyInfoContainer from './companyInfoContainer';
import KeyStatsListContainer from './keyStatsListContainer';

const StatsInfoPeersLayout: FunctionComponent = () => {
  return (
    <div className="section-stats-info-peers">
      <div className="section-stats">
        <KeyStatsListContainer />
      </div>
      <div className="section-info-peers">
        <CompanyInfoContainer />
        <TopPeersContainer />
      </div>
    </div>
  );
};

export default StatsInfoPeersLayout;
