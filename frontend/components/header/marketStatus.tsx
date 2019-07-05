import React, { FunctionComponent } from 'react';
import { HeaderProps } from '../../utilities/interfaces';

const isMarketOpen = () => {
  const dateNow = new Date();
  const marketOpen = new Date().setUTCHours(13, 30, 0, 0);
  const marketClose = new Date().setUTCHours(20, 0, 0, 0);

  return dateNow.getTime() > marketOpen && dateNow.getTime() < marketClose;
};

const MarketStatus: FunctionComponent<HeaderProps> = ({ lastUpdate }) => {
  const localTimeZone = new Date().toUTCString();
  const sun = <i className="far fa-sun" />;
  const moon = <i className="far fa-moon" />;
  return (
    <div>
      <span>
        Real-Time Price as of {lastUpdate} {localTimeZone}
      </span>
      <span>{` `}</span>
      <span>
        {isMarketOpen() ? sun : moon} Market{' '}
        {isMarketOpen() ? 'Open' : 'Closed'}
      </span>
    </div>
  );
};

export default MarketStatus;
