import React, { FunctionComponent } from 'react';
import TagsContainer from './tagsContainer';
import MarketStatusContainer from './marketStatusContainer';

const TagsMarketLayout: FunctionComponent = () => {
  return (
    <div className="header__bottom">
      <TagsContainer />
      <MarketStatusContainer />
    </div>
  );
};

export default TagsMarketLayout;
