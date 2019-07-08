import React, { FunctionComponent } from 'react';
import TopPeers from './topPeers';
import CompanyInfo from './companyInfo';
import { CompanyInfoState } from '../../utilities/interfaces';

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
      <CompanyInfo companyInfo={companyInfo} />
      <TopPeers topPeers={topPeers} />
    </div>
  );
};

export default StatsInfoPeersLayout;
