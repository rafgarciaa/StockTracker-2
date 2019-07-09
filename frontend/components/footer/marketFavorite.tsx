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
  console.log(Object.keys(symbolsList));
  Object.keys(symbolsList).map((idx, symbol) => {
    console.log(symbol);
  });
  return (
    <div>
      <span>{sectionTitle}</span>
      {!symbolsList &&
        symbolsList.map(obj => (
          <PriceOutput
            latestPrice={obj.latestPrice}
            change={obj.change}
            changePercent={obj.changePercent}
          />
        ))}
    </div>
  );
};

export default MarketFavorite;
