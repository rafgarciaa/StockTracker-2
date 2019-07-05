import React, { FunctionComponent } from 'react';
import { HeaderProps } from '../../utilities/interfaces';
import Tags from './tags';
import MarketStatus from './marketStatus';

const TagsMarketLayout: FunctionComponent<HeaderProps> = ({
  lastUpdate,
  exchange,
  sector,
}) => {
  return (
    <div>
      <Tags exchange={exchange} sector={sector} />
      <MarketStatus lastUpdate={lastUpdate} />
    </div>
  );
};

export default TagsMarketLayout;
