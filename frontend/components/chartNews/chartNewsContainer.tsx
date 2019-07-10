import { connect } from 'react-redux';
import ChartNewsLayout from './chartNewsLayout';
import { RootState } from '../../utilities/interfaces';

const mapStateToProps = (state: RootState) => ({
  newsList: state.quotes.companyNews,
  isFetchingCompanyNews: state.fetchStatus.companyNews.isFetching,
  isFetchSuccessCompanyNews: state.fetchStatus.companyNews.fetchSuccess,
  isFetchSuccessChart: state.fetchStatus.chartData.fetchSuccess,
});

export default connect(
  mapStateToProps,
  null
)(ChartNewsLayout);
