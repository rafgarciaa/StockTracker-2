import React, { FunctionComponent } from 'react';
import MarketFavorite from './marketFavorite';
import { FavoriteState } from '../../utilities/interfaces';

interface FooterLayoutProps {
  // TEMPORARY: any type should be changed; marketList is currently hardcoded
  marketList: any;
  favoriteList: FavoriteState[];
}

const FooterLayout: FunctionComponent<FooterLayoutProps> = ({
  marketList,
  favoriteList,
}) => {
  return (
    <div>
      FOOTER
      <MarketFavorite sectionTitle={'us market'} symbolsList={marketList} />
      <MarketFavorite sectionTitle={'favorites'} symbolsList={favoriteList} />
    </div>
  );
};

export default FooterLayout;
