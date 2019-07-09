import { connect } from 'react-redux';
import StatsInfoPeersLayout from './statsInfoPeersLayout';
import { RootState } from '../../utilities/interfaces';
import { selectCompanyStats } from '../../utilities/selectors';

const mapStateToProps = (state: RootState) => ({
  companyStats: selectCompanyStats(state.quotes.companyStats),
  companyInfo: state.quotes.companyInfo,
  topPeers: state.quotes.topPeers,
});

export default connect(
  mapStateToProps,
  null
)(StatsInfoPeersLayout);
