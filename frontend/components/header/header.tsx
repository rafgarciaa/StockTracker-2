import React, { FunctionComponent } from 'react';
import TabsLayout from './tabsLayout';
import SearchLayout from './searchLayout';
import TagsLayout from './tagsLayout';
import { HeaderProps } from '../../utilities/interfaces';

const header: FunctionComponent<HeaderProps> = ({
  latestPrice,
  change,
  changePercent,
  exchange,
  sector,
  lastUpdate,
}) => {
  return (
    <div>
      <TabsLayout />
      <SearchLayout
        latestPrice={latestPrice}
        change={change}
        changePercent={changePercent}
      />
      <TagsLayout lastUpdate={lastUpdate} exchange={exchange} sector={sector} />
    </div>
  );
};

export default header;
