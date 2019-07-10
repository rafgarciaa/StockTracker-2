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
          <PriceOutput
            key={idx}
            latestPrice={market.latestPrice}
            change={market.change}
            changePercent={market.changePercent}
          />
        );
      })}
    </div>
  );
};

export default MarketFavorite;
