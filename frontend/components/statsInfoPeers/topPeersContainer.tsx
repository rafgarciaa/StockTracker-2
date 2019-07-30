import { connect } from 'react-redux';
import TopPeers from './topPeers';
import { RootState } from '../../utilities/interfaces';
import { selectFetchingStatus } from '../../utilities/selectors';

// You could destructure the state object in the 
// function's signature to get rid of some
// boilerplate.

// For example (state: RootState) would become
// ({quotes,fetchStatus}: RootState)
// then you could map topPeers to
// quotes.topPeers.

// It is not a necessary change, it comes
// down to preference.

const mapStateToProps = (state: RootState) => ({
  topPeers: state.quotes.topPeers,
  fetchStatus: state.fetchStatus.topPeers,
});

export default connect(
  mapStateToProps,
  null
)(TopPeers);
