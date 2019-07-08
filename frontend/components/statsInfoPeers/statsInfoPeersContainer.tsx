import { connect } from 'react-redux';
import StatsInfoPeersLayout from './statsInfoPeersLayout';
import { RootState } from '../../utilities/interfaces';

const mapStateToProps = (state: RootState) => ({
  companyStats: state.quotes.companyStats,
  companyInfo: state.quotes.companyInfo,
  topPeers: state.quotes.topPeers,
});

export default connect(
  mapStateToProps,
  null
)(StatsInfoPeersLayout);
