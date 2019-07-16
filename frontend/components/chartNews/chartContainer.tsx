import { connect } from 'react-redux';
import Chart from './chart';
import * as selectors from '../../utilities/selectors';
import { RootState } from '../../utilities/interfaces';

const mapStateToProps = (state: RootState) => ({
  oneDayData: selectors.selectChartDataDay(state.quotes.chartDataDay),
  fiveDayData: selectors.selectChartDataFiveDay(state.quotes.chartData.fiveDay),
  oneMonthData: selectors.selectChartDataOneMonth(
    state.quotes.chartData.oneMonth
  ),
  oneYearData: selectors.selectChartDataYear(state.quotes.chartData.oneYear),
  fiveYearData: selectors.selectChartDataYear(state.quotes.chartData.fiveYear),
  maxData: selectors.selectChartDataYear(state.quotes.chartData.max),
  fetchStatus: selectors.selectFetchingStatus(state, 'chartData'),
});

export default connect(
  mapStateToProps,
  null
)(Chart);
