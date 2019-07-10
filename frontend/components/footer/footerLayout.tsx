import React, { FunctionComponent } from 'react';
import MarketFavorite from './marketFavorite';
import { FavoriteState } from '../../utilities/interfaces';

interface FooterLayoutProps {
  marketList: FavoriteState[];
  favoriteList: FavoriteState[];
}

const FooterLayout: FunctionComponent<any> = ({ marketList, favoriteList }) => {
  return (
    <div>
      FOOTER
      <MarketFavorite sectionTitle={'us market'} symbolsList={marketList} />
      <MarketFavorite sectionTitle={'favorites'} symbolsList={favoriteList} />
    </div>
  );
};

export default FooterLayout;
