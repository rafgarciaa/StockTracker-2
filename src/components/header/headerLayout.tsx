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
