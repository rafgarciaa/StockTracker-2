import React, { FunctionComponent } from 'react';
import MarketFavorite from './marketFavorite';
import { FavoriteState, FetchStatusElement } from '../../utilities/interfaces';

interface FooterLayoutProps {
  marketList: FavoriteState[];
  favoriteList: FavoriteState[];
  fetchStatus: FetchStatusElement;
}

const FooterLayout: FunctionComponent<any> = ({
  marketList,
  favoriteList,
  fetchStatus,
}) => {
  return (
    <div>
      {fetchStatus.startFetching && (
        <MarketFavorite sectionTitle={'us market'} symbolsList={marketList} />
      )}
      {fetchStatus.startFetching && (
        <MarketFavorite sectionTitle={'favorites'} symbolsList={favoriteList} />
      )}
    </div>
  );
};

export default FooterLayout;
