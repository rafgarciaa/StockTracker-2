import React, { FunctionComponent } from 'react';
import { HeaderProps } from '../../utilities/interfaces';
import SearchInputContainer from './searchInputContainer';

const SearchLayout: FunctionComponent<HeaderProps> = ({
  latestPrice,
  change,
  changePercent,
}) => {
  return (
    <div>
      <SearchInputContainer />
    </div>
  );
};

export default SearchLayout;
