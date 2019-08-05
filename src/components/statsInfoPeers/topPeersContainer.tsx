import { connect } from 'react-redux';
import TopPeers from './topPeers';
import { RootState } from '../../utilities/interfaces';
import { selectFetchingStatus } from '../../utilities/selectors';

const mapStateToProps = (state: RootState) => ({
  topPeers: state.quotes.topPeers,
  fetchStatus: state.fetchStatus.topPeers,
});

export default connect(
  mapStateToProps,
  null
)(TopPeers);
