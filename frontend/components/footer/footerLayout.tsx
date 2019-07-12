import React, { FunctionComponent } from 'react';
import MarketFavorite from './marketFavorite';
import { FavoriteState, FetchStatusElement } from '../../utilities/interfaces';

interface FooterLayoutProps {
  // TEMPORARY: any type should be changed; marketList is currently hardcoded
  marketList: any;
  favoriteList: FavoriteState[];
  fetchStatus: FetchStatusElement;
}

const FooterLayout: FunctionComponent<FooterLayoutProps> = ({
  marketList,
  favoriteList,
  fetchStatus,
}) => {
  return (
    <div className="section-footer">
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
