import React, { FunctionComponent, useState, useEffect } from 'react';
import { CompanyStat, FetchStatusElement } from '../../utilities/interfaces';
import KeyStatsListItem from './keyStatsListItem';
import AdaptiveLoader from '../adaptiveLoader/adaptiveLoader';

interface CompanyStatsProps {
  companySymbol: string | null;
  companyStatsLeft: CompanyStat[];
  companyStatsRight: CompanyStat[];
  fetchStatus: FetchStatusElement;
}

const KeyStatsList: FunctionComponent<CompanyStatsProps> = ({
  companySymbol,
  companyStatsLeft,
  companyStatsRight,
  fetchStatus,
}) => {
  const [firstLoad, setFirstLoad] = useState<boolean>(true);

  useEffect(() => {
    if (fetchStatus.doneFetching) {
      setFirstLoad(false);
    }
  }, [fetchStatus.doneFetching]);

  useEffect(() => {
    if (!fetchStatus.doneFetching) {
      setFirstLoad(true);
    }
  }, [companySymbol]);

  // nested ternary are difficult to read, and just check firstLoad, no need for firstLoad === true
  return (
    <div>
      {fetchStatus.startFetching && (
        <div>
          <h2 className="heading-section">Key Stats</h2>
          {!fetchStatus.doneFetching && firstLoad === true ? (
            <AdaptiveLoader />
          ) : fetchStatus.fetchSuccess !== '' ? (
            fetchStatus.fetchSuccess
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
