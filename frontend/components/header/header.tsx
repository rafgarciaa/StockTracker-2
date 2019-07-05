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
  lastUpdate,
}) => {
  return (
    <div>
      <TabsLogoLayout />
      <SearchPriceLayout
        latestPrice={latestPrice}
        change={change}
        changePercent={changePercent}
      />
      <TagsMarketLayout
        lastUpdate={lastUpdate}
        exchange={exchange}
        sector={sector}
      />
    </div>
  );
};

export default Header;
