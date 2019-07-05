import React, { FunctionComponent } from 'react';
import { HeaderProps } from '../../utilities/interfaces';
import SearchInputContainer from './searchInputContainer';
import PriceOutput from './priceOutput';

const SearchPriceLayout: FunctionComponent<HeaderProps> = ({
  latestPrice,
  change,
  changePercent,
}) => {
  return (
    <div>
      <SearchInputContainer />
      <PriceOutput
        latestPrice={latestPrice}
        change={change}
        changePercent={changePercent}
      />
    </div>
  );
};

export default SearchPriceLayout;
