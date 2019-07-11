import React, { FunctionComponent } from 'react';
import { CompanyStat, FetchStatusElement } from '../../utilities/interfaces';
import KeyStatsListItem from './keyStatsListItem';
import AdaptiveLoader from '../adaptiveLoader/adaptiveLoader';

interface CompanyStatsProps {
  companyStatsLeft: CompanyStat[];
  companyStatsRight: CompanyStat[];
  fetchStatusCompanyStats: FetchStatusElement;
}

const KeyStatsList: FunctionComponent<CompanyStatsProps> = ({
  companyStatsLeft,
  companyStatsRight,
  fetchStatusCompanyStats,
}) => {
  return (
    <div>
      {fetchStatusCompanyStats.startFetching && (
        <div>
          <h2 className="heading-section">Key Stats</h2>
          {!fetchStatusCompanyStats.doneFetching ? (
            <AdaptiveLoader />
          ) : (
            <div className="section-stats__list">
              <ul>
                {companyStatsLeft.map(({ name, value }: CompanyStat) => (
                  <KeyStatsListItem key={name} name={name} value={value} />
                ))}
              </ul>

              <ul>
                {companyStatsRight.map(({ name, value }: CompanyStat) => (
                  <KeyStatsListItem key={name} name={name} value={value} />
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default KeyStatsList;
