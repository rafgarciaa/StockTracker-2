import React, { FunctionComponent } from 'react';
import SearchInputContainer from './searchInputContainer';
import PriceOutputContainer from './priceOutputContainer';
import { connect } from 'react-redux';
import { RootState, FetchStatusState } from '../../utilities/interfaces';
import { selectFetchingStatus } from '../../utilities/selectors';

const SearchPriceLayout: FunctionComponent<FetchStatusState> = ({
  fetchingStatus,
}) => {
  return (
    <div className="header__top-search-area">
      <SearchInputContainer />
      {fetchingStatus.startFetching && <PriceOutputContainer />}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  fetchingStatus: selectFetchingStatus(state, 'companyStats'),
});

export default connect(mapStateToProps)(SearchPriceLayout);
