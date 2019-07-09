import React, { FunctionComponent } from 'react';
import MarketFavorite from './marketFavorite';
import { MarketFavoriteItemProps } from '../../utilities/interfaces';

interface FooterLayoutProps {
  marketList: MarketFavoriteItemProps[];
  favoriteList: MarketFavoriteItemProps[];
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
