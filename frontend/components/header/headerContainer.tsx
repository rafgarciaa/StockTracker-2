import { connect } from 'react-redux';
import Header from './header';
import { RootState } from '../../utilities/interfaces';
import { selectFetchingStatus } from '../../utilities/selectors';

const mapStateToProps = (state: RootState) => {
  const { companyStats, companyInfo } = state.quotes;

  return {
    exchange: companyInfo.exchange,
    sector: companyInfo.sector,
    latestPrice: companyStats.latestPrice,
    change: companyStats.change,
    changePercent: companyStats.changePercent,
    updateTime: state.updateTime,
    fetchStatusPrices: selectFetchingStatus(state, 'companyStats'),
    fetchStatusTags: selectFetchingStatus(state, 'companyInfo'),
  };
};

export default connect(mapStateToProps)(Header);
