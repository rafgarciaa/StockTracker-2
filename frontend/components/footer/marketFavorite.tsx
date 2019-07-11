import React, { FunctionComponent } from 'react';
import PriceOutput from '../header/priceOutput';
import { FavoriteState } from '../../utilities/interfaces';

interface MarketFavoriteProps {
  sectionTitle: string;
  symbolsList: FavoriteState[];
}

const MarketFavorite: FunctionComponent<MarketFavoriteProps> = ({
  sectionTitle,
  symbolsList,
}) => {
  return (
    <div>
      <span>{sectionTitle}</span>
      {Object.keys(symbolsList).map((symbol, idx) => {
        const market = symbolsList[symbol];
        return (
          <div key={idx}>
            {market.symbol}
            <PriceOutput
              latestPrice={market.latestPrice}
              change={market.change}
              changePercent={market.changePercent}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MarketFavorite;
