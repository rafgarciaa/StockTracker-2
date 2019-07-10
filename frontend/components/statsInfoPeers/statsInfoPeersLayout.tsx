import React, { FunctionComponent } from 'react';
import TopPeers from './topPeers';
import CompanyInfo from './companyInfo';
import {
  CompanyStatsProps,
  CompanyInfoState,
} from '../../utilities/interfaces';
import KeyStatsList from './keyStatsList';

interface StatsInfoPeersProps {
  companyStats: CompanyStatsProps;
  companyInfo: CompanyInfoState;
  topPeers: string[];
}

const StatsInfoPeersLayout: FunctionComponent<StatsInfoPeersProps> = ({
  topPeers,
  companyInfo,
  companyStats,
}) => {
  return (
    <div className="section-stats-info-peers">
      <div className="section-stats">
        <KeyStatsList
          companyStatsLeft={companyStats.companyStatsLeft}
          companyStatsRight={companyStats.companyStatsRight}
        />
      </div>
      <div className="section-info-peers">
        <CompanyInfo companyInfo={companyInfo} />
        <TopPeers topPeers={topPeers} />
      </div>
    </div>
  );
};

export default StatsInfoPeersLayout;
