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
      {fetchStatus.startFetching ? (
        fetchStatus.fetchSuccess !== '' ? null : (
          <MarketFavorite sectionTitle={'us market'} symbolsList={marketList} />
        )
      ) : null}
      {fetchStatus.startFetching ? (
        fetchStatus.fetchSuccess !== '' ? null : (
          <MarketFavorite
            sectionTitle={'favorites'}
            symbolsList={favoriteList}
          />
        )
      ) : null}
    </div>
  );
};

export default FooterLayout;
