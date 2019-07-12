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
    <div className="section-footer__slice">
      <h4 className="section-footer__heading">{sectionTitle}</h4>
      {Object.keys(symbolsList).map((symbol, idx) => {
        const market = symbolsList[symbol];
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
  );
};

export default MarketFavorite;
