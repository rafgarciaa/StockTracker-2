import React, { FunctionComponent } from 'react';
import MarketFavorite from './marketFavorite';
import { FavoriteState } from '../../utilities/interfaces';

interface FooterLayoutProps {
  marketList: FavoriteState[];
  favoriteList: FavoriteState[];
}

const FooterLayout: FunctionComponent<FooterLayoutProps> = ({
  marketList,
  favoriteList,
}) => {
  return (
    <div className="section-footer">
      <MarketFavorite sectionTitle={'us market'} symbolsList={marketList} />
      <MarketFavorite sectionTitle={'favorites'} symbolsList={favoriteList} />
    </div>
  );
};

export default FooterLayout;
