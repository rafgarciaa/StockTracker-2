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
  fetchStatusPrices,
  fetchStatusTags,
}) => {
  return (
    <div className="header">
      <TabsLogoLayout />
      {fetchStatusPrices.startFetching && (
        <SearchPriceLayout
          latestPrice={latestPrice}
          change={change}
          changePercent={changePercent}
        />
      )}
      {fetchStatusTags && (
        <TagsMarketLayout
          updateTime={updateTime}
          exchange={exchange}
          sector={sector}
        />
      )}
    </div>
  );
};

export default Header;
