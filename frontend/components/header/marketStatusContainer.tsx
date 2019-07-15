import { connect } from 'react-redux';
import MarketStatus from './marketStatus';
import { RootState } from '../../reducers/rootReducer';
import { selectFetchingStatus } from '../../utilities/selectors';

const mapStateToProps = (state: RootState) => ({
  updateTime: state.updateTime,
  fetchStatus: selectFetchingStatus(state, 'companyInfo'),
});

export default connect(mapStateToProps)(MarketStatus);
