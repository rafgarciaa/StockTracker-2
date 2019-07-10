import React, { FunctionComponent } from 'react';
import TabsLogoLayout from './tabsLogoLayout';
import SearchPriceLayout from './searchPriceLayout';
import TagsMarketLayout from './tagsMarketLayout';
import { HeaderProps } from '../../utilities/interfaces';

const Header: FunctionComponent<HeaderProps> = ({
  latestPrice,
  change,
  changePercent,
  exchange,
  sector,
  updateTime,
}) => {
  return (
    <div className="header">
      <TabsLogoLayout />
      <SearchPriceLayout
        latestPrice={latestPrice}
        change={change}
        changePercent={changePercent}
      />
      <TagsMarketLayout
        updateTime={updateTime}
        exchange={exchange}
        sector={sector}
      />
    </div>
  );
};

export default Header;
