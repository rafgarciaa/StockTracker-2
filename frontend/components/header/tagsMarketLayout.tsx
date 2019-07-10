import React, { FunctionComponent } from 'react';
import { HeaderProps } from '../../utilities/interfaces';
import Tags from './tags';
import MarketStatus from './marketStatus';

const TagsMarketLayout: FunctionComponent<HeaderProps> = ({
  updateTime,
  exchange,
  sector,
}) => {
  return (
    <div className="header__bottom">
      <Tags exchange={exchange} sector={sector} />
      <MarketStatus updateTime={updateTime} />
    </div>
  );
};

export default TagsMarketLayout;
