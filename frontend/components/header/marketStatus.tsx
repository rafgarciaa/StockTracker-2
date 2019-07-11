import React, { FunctionComponent } from 'react';
import { FetchStatusState } from '../../utilities/interfaces';

const isMarketOpen = () => {
  const dateNow: Date = new Date();
  const marketOpen: number = new Date().setUTCHours(13, 30, 0, 0);
  const marketClose: number = new Date().setUTCHours(20, 0, 0, 0);

  return dateNow.getTime() > marketOpen && dateNow.getTime() < marketClose;
};

const getLocalTimeZone = () => {
  const date: string = new Date().toString();
  let timeZone: string | string[] = date.match(/\(([^)]+)\)/)![1];
  timeZone = timeZone.split(' ').map((el: string) => el[0]);
  return timeZone.join('');
};

interface MarketStatusProps {
  updateTime: string | null;
  fetchingStatus: FetchStatusState;
}

const MarketStatus: FunctionComponent<MarketStatusProps> = ({
  updateTime,
  fetchingStatus,
}) => {
  const localTimeZone =
    getLocalTimeZone() && updateTime
      ? getLocalTimeZone()
      : new Date().toUTCString();
  const sun = <i className="far fa-sun" />;
  const moon = <i className="far fa-moon" />;

  return (
    <div>
      {fetchingStatus.startFetching && (
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
      )}
    </div>
  );
};

export default MarketStatus;
