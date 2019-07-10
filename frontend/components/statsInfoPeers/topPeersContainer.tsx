import { connect } from 'react-redux';
import TopPeers from './topPeers';
import { RootState } from '../../utilities/interfaces';

const mapStateToProps = (state: RootState) => ({
  topPeers: state.quotes.topPeers,
});

export default connect(
  mapStateToProps,
  null
)(TopPeers);
