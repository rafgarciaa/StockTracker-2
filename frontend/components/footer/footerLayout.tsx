import React, { FunctionComponent } from 'react';
import MarketFavorite from './marketFavorite';

const FooterLayout: FunctionComponent = () => {
  return (
    <div>
      <MarketFavorite sectionTitle={'us market'} />
      <MarketFavorite sectionTitle={'favorites'} />
    </div>
  );
};

export default FooterLayout;
