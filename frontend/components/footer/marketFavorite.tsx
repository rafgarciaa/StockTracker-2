import React, { FunctionComponent } from 'react';
import PriceOutput from '../header/priceOutput';
import { MarketFavoriteItemProps } from '../../utilities/interfaces';

interface MarketFavoriteProps {
  sectionTitle: string;
  symbolsList: MarketFavoriteItemProps[];
}

const MarketFavorite: FunctionComponent<MarketFavoriteProps> = ({
  sectionTitle,
  symbolsList,
}) => {
  return (
    <div>
      <span>{sectionTitle}</span>
      {symbolsList.map(obj => (
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
