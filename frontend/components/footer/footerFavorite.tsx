import React, { FunctionComponent } from 'react';
import PriceOutput from '../header/priceOutput';
import { FavoriteState, FetchStatusElement } from '../../utilities/interfaces';

interface FooterFavoriteProps {
  favoriteList: FavoriteState;
  fetchStatus: FetchStatusElement;
}

const FooterFavorite: FunctionComponent<FooterFavoriteProps> = ({
  favoriteList,
  fetchStatus,
}) => {
  return (
    <>
      {fetchStatus.startFetching && (
        <div className="section-footer__slice">
          <h4 className="section-footer__heading">Favorites</h4>
          {Object.keys(favoriteList).map((symbol, idx) => {
            const market = favoriteList[symbol];
            return (
              <div className="section-market-favorite" key={idx}>
                <span>{market.symbol}</span>
                <PriceOutput
                  latestPrice={market.latestPrice}
                  change={market.change}
                  changePercent={market.changePercent}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default FooterFavorite;
