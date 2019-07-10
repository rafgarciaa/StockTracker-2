import { connect } from 'react-redux';
import ChartNewsLayout from './chartNewsLayout';
import { RootState } from '../../utilities/interfaces';
import { selectFetchingStatus } from '../../utilities/selectors';

const mapStateToProps = (state: RootState) => ({
  newsList: state.quotes.companyNews,
  fetchingStatusCompanyNews: selectFetchingStatus(state, 'companyNews'),
});

export default connect(
  mapStateToProps,
  null
)(ChartNewsLayout);
