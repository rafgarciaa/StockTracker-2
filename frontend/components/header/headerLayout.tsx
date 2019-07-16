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
  companySymbol: string | null;
  fetchTicker: fetchStatsType;
}

const HeaderLayout: FunctionComponent<HeaderLayoutProps> = ({
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
      }, 3000);
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
