import React, { FunctionComponent } from 'react';
import SearchInputContainer from './searchInputContainer';
import PriceOutputContainer from './priceOutputContainer';
import { connect } from 'react-redux';
import { FetchStatusState } from '../../utilities/interfaces';
import { RootState } from '../../reducers/rootReducer';
import { selectFetchingStatus } from '../../utilities/selectors';

const SearchPriceLayout: FunctionComponent<FetchStatusState> = ({
  fetchStatus,
}) => {
  return (
    <div className="header__top-search-area">
      <SearchInputContainer />
      {fetchStatus.startFetching ? (
        fetchStatus.fetchSuccess !== '' ? (
          'N/A'
        ) : (
          <PriceOutputContainer />
        )
      ) : null}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  fetchStatus: selectFetchingStatus(state, 'companyStats'),
});

export default connect(mapStateToProps)(SearchPriceLayout);
