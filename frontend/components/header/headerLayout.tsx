import React, { FunctionComponent, useEffect } from 'react';
import TabsLogoLayout from './tabsLogoLayout';
import SearchPriceLayout from './searchPriceLayout';
import TagsMarketLayout from './tagsMarketLayout';

import { isMarketOpen } from '../../utilities/marketStatusUtil';
import { RootState } from '../../utilities/interfaces';
import { fetchCompanyStats, fetchStatsType } from '../../actions/quotesActions';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';

import { getCurrentDate } from '../../utilities/getCurrentDate';

interface HeaderLayoutProps {
  latestPrice: number | null;
  change: number | null;
  changePercent: number | null;
  companySymbol: string | null;
  fetchTicker: fetchStatsType;
}

const HeaderLayout: FunctionComponent<HeaderLayoutProps> = ({
  latestPrice,
  change,
  changePercent,
  companySymbol,
  fetchTicker,
}) => {
  useEffect(() => {
    // console.log(`I am inside use effect ${getCurrentDate()}`);
    let intervalId: any;

    if (isMarketOpen() && companySymbol) {
      // console.log(`fetching company stats ${getCurrentDate()}`);
      intervalId = setInterval(() => {
        fetchTicker(companySymbol);
        // console.log(`Date and time now: ${getCurrentDate()}`);
        // console.log(`Price: ${latestPrice}`);
        // console.log(`Change: ${change}`);
        // console.log(`Change Percent: ${changePercent}`);
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
  latestPrice: quotes.companyStats.latestPrice,
  change: quotes.companyStats.change,
  changePercent: quotes.companyStats.changePercent,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => ({
  fetchTicker: (symbol: string) => dispatch(fetchCompanyStats(symbol)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderLayout);
