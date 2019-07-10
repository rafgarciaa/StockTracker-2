import React, { FunctionComponent } from 'react';
import SearchInputContainer from './searchInputContainer';
import PriceOutputContainer from './priceOutputContainer';

const SearchPriceLayout: FunctionComponent = () => {
  return (
    <div className="header__top-search-area">
      <SearchInputContainer />
      <PriceOutputContainer />
    </div>
  );
};

export default SearchPriceLayout;
