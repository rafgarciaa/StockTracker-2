import React, { FunctionComponent } from 'react';
import { HeaderProps } from '../../utilities/interfaces';

const MarketStatus: FunctionComponent<HeaderProps> = ({ lastUpdate }) => {
  return (
    <div>
      <span>Real-Time Price as of {lastUpdate} </span>
    </div>
  );
};

export default MarketStatus;
