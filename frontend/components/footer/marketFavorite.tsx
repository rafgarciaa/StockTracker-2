import React, { FunctionComponent } from 'react';
import PriceOutput from '../header/priceOutput';

const MarketFavorite: FunctionComponent = (sectionTitle, symbolsList) => {
  return (
    <div>
      {symbolsList.prices.map((symbol, idx) => (
        <PriceOutput
          key={idx}
          latestPrice={latestPrice}
          change={change}
          changePercent={changePercent}
        />
      ))}
    </div>
  );
};

export default MarketFavorite;
