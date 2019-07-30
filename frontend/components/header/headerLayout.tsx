import React, { FunctionComponent, useEffect } from 'react';
import TabsLogoLayout from './tabsLogoLayout';
import SearchPriceLayout from './searchPriceLayout';
import TagsMarketLayout from './tagsMarketLayout';
import { isMarketOpen } from '../../utilities/marketStatusUtil';
import { RootState } from '../../utilities/interfaces';
import { fetchCompanyStats, fetchStatsType } from '../../actions/quotesActions';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';

interface HeaderLayoutProps {
  companySymbol: string | null;
  fetchTicker: fetchStatsType;
}

const HeaderLayout: FunctionComponent<HeaderLayoutProps> = ({
  companySymbol,
  fetchTicker,
}) => {
  useEffect(() => {
    /* not sure why intervalId has to be a type any.
     * One possible way to fix this is to use var inside the if
     * statement and remove the outter let to get type inference
     * from the setInterval... but I believe the type is NodeJS.Timeout
     */
    let intervalId: any;

    if (isMarketOpen() && companySymbol) {
      intervalId = setInterval(() => {
        fetchTicker(companySymbol);
      }, 5000);
    }

    return () => clearInterval(intervalId);
  });

  return (
    <div className="header">
      <TabsLogoLayout />
      <SearchPriceLayout />
      <TagsMarketLayout />
    </div>
  );
};

const mapStateToProps = ({ quotes }: RootState) => ({
  companySymbol: quotes.companyInfo.symbol,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
  fetchTicker: (symbol: string) => dispatch(fetchCompanyStats(symbol)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderLayout);
