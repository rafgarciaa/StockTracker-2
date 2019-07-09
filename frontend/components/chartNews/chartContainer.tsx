import { connect } from 'react-redux';
import Chart from './chart';
import { RootState } from '../../utilities/interfaces';
import * as selectors from '../../utilities/selectors';

const mapStateToProps = (state: RootState) => ({
  // oneDayData: selectors.selectChartDataDay(state.quotes.chartDataDay),
  // fiveDayData: selectors.selectChartDataFiveDay(state.quotes.chartData.fiveDay),
  oneMonthData: selectors.selectChartDataOneMonth(
    state.quotes.chartData.oneMonth
  ),
  // oneYearData: selectors.selectChartDataYear(state.quotes.chartData.oneYear),
  // maxData: selectors.selectChartDataYear(state.quotes.chartData.max),
});

export default connect(
  mapStateToProps,
  null
)(Chart);
