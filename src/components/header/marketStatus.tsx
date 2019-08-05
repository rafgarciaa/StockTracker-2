import React, { FunctionComponent } from 'react';
import { FetchStatusElement } from '../../utilities/interfaces';
import { isMarketOpen } from '../../utilities/marketStatusUtil';

const getLocalTimeZone = () => {
  const date: string = new Date().toString();
  let timeZone: string | string[] = date.match(/\(([^)]+)\)/)![1];
  timeZone = timeZone.split(' ').map((el: string) => el[0]);
  return timeZone.join('');
};

interface MarketStatusProps {
  updateTime: string | null;
  fetchStatus: FetchStatusElement;
}

const MarketStatus: FunctionComponent<MarketStatusProps> = ({
  updateTime,
  fetchStatus,
}) => {
  const localTimeZone =
    getLocalTimeZone() && updateTime
      ? getLocalTimeZone()
      : new Date().toUTCString();
  const sun = <i className="far fa-sun" />;
  const moon = <i className="far fa-moon" />;

  return (
    <div>
      {fetchStatus.startFetching ? (
        fetchStatus.fetchSuccess !== '' ? null : (
          <div className="header__bottom-status">
            <span>
              Real-Time Price as of {updateTime} {localTimeZone}
            </span>
            <span>{` `}</span>
            <span>
              {isMarketOpen() ? sun : moon} Market{' '}
              {isMarketOpen() ? 'Open' : 'Closed'}
            </span>
          </div>
        )
      ) : null}
    </div>
  );
};

export default MarketStatus;
