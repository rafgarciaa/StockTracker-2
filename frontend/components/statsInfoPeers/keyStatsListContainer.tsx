import { connect } from 'react-redux';
import KeyStatsList from './keyStatsList';
import { RootState } from '../../utilities/interfaces';
import {
  selectCompanyStats,
  selectFetchingStatus,
} from '../../utilities/selectors';

const mapStateToProps = (state: RootState) => ({
  companyStatsLeft: selectCompanyStats(state.quotes.companyStats)
    .companyStatsLeft,
  companyStatsRight: selectCompanyStats(state.quotes.companyStats)
    .companyStatsRight,
  fetchStatus: state.fetchStatus.companyStats,
});

export default connect(
  mapStateToProps,
  null
)(KeyStatsList);
