import { connect } from 'react-redux';
import Header from './header';
import { RootState } from '../../utilities/interfaces';

const mapStateToProps = (state: RootState) => {
  const { companyStats, companyInfo } = state.quotes;

  return {
    exchange: companyInfo.exchange,
    sector: companyInfo.sector,
    latestPrice: companyStats.latestPrice,
    change: companyStats.change,
    changePercent: companyStats.changePercent,
    updateTime: state.updateTime,
  };
};

export default connect(mapStateToProps)(Header);
