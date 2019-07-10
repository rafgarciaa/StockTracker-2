import React, { FunctionComponent } from 'react';
import TabsLogoLayout from './tabsLogoLayout';
import SearchPriceLayout from './searchPriceLayout';
import TagsMarketLayout from './tagsMarketLayout';

const HeaderLayout: FunctionComponent = () => {
  return (
    <div className="header">
      <TabsLogoLayout />
      <SearchPriceLayout />
      <TagsMarketLayout />
    </div>
  );
};

export default HeaderLayout;
