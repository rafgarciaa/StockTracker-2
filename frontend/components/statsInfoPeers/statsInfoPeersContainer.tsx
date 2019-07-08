import { connect } from 'react-redux';
import StatsInfoPeersLayout from './statsInfoPeersLayout';
import { RootState } from '../../utilities/interfaces';

const mapStateToProps = (state: RootState) => ({
  companyInfo: state.quotes.companyInfo,
  topPeers: state.quotes.topPeers,
});

export default connect(
  mapStateToProps,
  null
)(StatsInfoPeersLayout);
