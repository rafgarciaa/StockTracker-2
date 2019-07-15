import { connect } from 'react-redux';
import KeyStatsList from './keyStatsList';
import { RootState } from '../../reducers/rootReducer';
import {
  selectCompanyStats,
  selectFetchingStatus,
} from '../../utilities/selectors';

const mapStateToProps = (state: RootState) => ({
  companyStatsLeft: selectCompanyStats(state.quotes.companyStats)
    .companyStatsLeft,
  companyStatsRight: selectCompanyStats(state.quotes.companyStats)
    .companyStatsRight,
  fetchStatus: selectFetchingStatus(state, 'companyStats'),
});

export default connect(
  mapStateToProps,
  null
)(KeyStatsList);
