import { connect } from 'react-redux';
import StatsInfoPeersLayout from './statsInfoPeersLayout';
import { RootState } from '../../utilities/interfaces';
import {
  selectCompanyStats,
  selectFetchingStatus,
} from '../../utilities/selectors';

const mapStateToProps = (state: RootState) => ({
  companyStats: selectCompanyStats(state.quotes.companyStats),
  companyInfo: state.quotes.companyInfo,
  topPeers: state.quotes.topPeers,
  fetchStatusCompanyStats: selectFetchingStatus(state, 'companyStats'),
  fetchStatusCompanyInfo: selectFetchingStatus(state, 'companyInfo'),
  fetchStatusTopPeers: selectFetchingStatus(state, 'topPeers'),
});

export default connect(
  mapStateToProps,
  null
)(StatsInfoPeersLayout);
