import { connect } from 'react-redux';
import MarketStatus from './marketStatus';
import { RootState } from '../../utilities/interfaces';
import { selectFetchingStatus } from '../../utilities/selectors';

const mapStateToProps = (state: RootState) => ({
  updateTime: state.updateTime,
  fetchingStatus: selectFetchingStatus(state, 'companyInfo'),
});

export default connect(mapStateToProps)(MarketStatus);
