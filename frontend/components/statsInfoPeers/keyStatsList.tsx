import React, { FunctionComponent } from 'react';
import { CompanyStat, FetchStatusElement } from '../../utilities/interfaces';
import KeyStatsListItem from './keyStatsListItem';
import AdaptiveLoader from '../adaptiveLoader/adaptiveLoader';

interface CompanyStatsProps {
  companyStatsLeft: CompanyStat[];
  companyStatsRight: CompanyStat[];
  fetchStatus: FetchStatusElement;
}

const KeyStatsList: FunctionComponent<CompanyStatsProps> = ({
  companyStatsLeft,
  companyStatsRight,
  fetchStatus,
}) => {
  return (
    <div>
      {fetchStatus.startFetching && (
        <div>
          <h2 className="heading-section">Key Stats</h2>
          {!fetchStatus.doneFetching ? (
            <AdaptiveLoader />
          ) : !fetchStatus.fetchSuccess ? (
            'ERROR: Cannot display key stats'
          ) : (
            <div className="section-stats__list">
              <ul>
                {companyStatsLeft.map(
                  ({ name, value }: CompanyStat, index: number) => (
                    <KeyStatsListItem
                      key={name ? name : index}
                      name={name}
                      value={value}
                    />
                  )
                )}
              </ul>

              <ul>
                {companyStatsRight.map(
                  ({ name, value }: CompanyStat, index: number) => (
                    <KeyStatsListItem
                      key={name ? name : index}
                      name={name}
                      value={value}
                    />
                  )
                )}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default KeyStatsList;
