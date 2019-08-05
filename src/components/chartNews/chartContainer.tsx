import { connect } from 'react-redux';
import Chart from './chart';
import { RootState } from '../../utilities/interfaces';
import * as selectors from '../../utilities/selectors';

const mapStateToProps = (state: RootState) => ({
  // oneDayData: selectors.selectChartDataDay(state.quotes.chartDataDay),
  // fiveDayData: selectors.selectChartDataFiveDay(state.quotes.chartData.fiveDay),
  // oneMonthData: selectors.selectChartDataOneMonth(
  //   state.quotes.chartData.oneMonth
  // ),
  // oneYearData: selectors.selectChartDataYear(state.quotes.chartData.oneYear),
  // fiveYearData: selectors.selectChartDataYear(state.quotes.chartData.fiveYear),
  // maxData: selectors.selectChartDataYear(state.quotes.chartData.max),

  oneDayData: state.quotes.chartDataDay,
  fiveDayData: state.quotes.chartData.fiveDay,
  oneMonthData: state.quotes.chartData.oneMonth,
  oneYearData: state.quotes.chartData.oneYear,
  fiveYearData: state.quotes.chartData.fiveYear,
  maxData: state.quotes.chartData.max,
  // fetchStatus: selectors.selectFetchingStatus(state, 'chartData'),
  fetchStatus: state.fetchStatus.chartData,
});

export default connect(
  mapStateToProps,
  null
)(Chart);
