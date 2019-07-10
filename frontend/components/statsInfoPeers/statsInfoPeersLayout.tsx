import React, { FunctionComponent } from 'react';
import TopPeers from './topPeers';
import CompanyInfo from './companyInfo';
import {
  CompanyStatsProps,
  CompanyInfoState,
  FetchStatusElement,
} from '../../utilities/interfaces';
import KeyStatsList from './keyStatsList';

interface StatsInfoPeersProps {
  companyStats: CompanyStatsProps;
  companyInfo: CompanyInfoState;
  topPeers: string[];
  fetchStatusCompanyStats: FetchStatusElement;
  fetchStatusCompanyInfo: FetchStatusElement;
  fetchStatusTopPeers: FetchStatusElement;
}

const StatsInfoPeersLayout: FunctionComponent<StatsInfoPeersProps> = ({
  topPeers,
  companyInfo,
  companyStats,
  fetchStatusCompanyStats,
  fetchStatusCompanyInfo,
  fetchStatusTopPeers,
}) => {
  return (
    <div>
      <div>
        {fetchStatusCompanyStats.startFetching && (
          <KeyStatsList
            companyStatsLeft={companyStats.companyStatsLeft}
            companyStatsRight={companyStats.companyStatsRight}
          />
        )}
      </div>
      <div>
        {fetchStatusCompanyInfo.startFetching && (
          <CompanyInfo companyInfo={companyInfo} />
        )}
        {fetchStatusTopPeers.startFetching && <TopPeers topPeers={topPeers} />}
      </div>
    </div>
  );
};

export default StatsInfoPeersLayout;
