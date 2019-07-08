import React, { FunctionComponent } from 'react';
import TopPeers from './topPeers';
import CompanyInfo from './companyInfo';
import { CompanyInfoState } from '../../utilities/interfaces';
import KeyStatsListContainer from './keyStatsListContainer';

interface StatsInfoPeersProps {
  companyInfo: CompanyInfoState;
  topPeers: string[];
}

const StatsInfoPeersLayout: FunctionComponent<StatsInfoPeersProps> = ({
  topPeers,
  companyInfo,
}) => {
  return (
    <div>
      <div>
        <KeyStatsListContainer />
      </div>
      <div>
        <CompanyInfo companyInfo={companyInfo} />
        <TopPeers topPeers={topPeers} />
      </div>
    </div>
  );
};

export default StatsInfoPeersLayout;
