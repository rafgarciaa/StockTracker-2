import React, { FunctionComponent } from 'react';
import FooterMarketContainer from './footerMarketContainer';
import FooterFavoriteContainer from './footerFavoriteContainer';

const FooterLayout: FunctionComponent = () => {
  return (
    <div className="section-footer">
      <FooterMarketContainer />
      <FooterFavoriteContainer />
    </div>
  );
};

export default FooterLayout;
