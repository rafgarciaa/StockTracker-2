import { connect } from 'react-redux';
import Chart from './chart';
import { RootState } from '../../utilities/interfaces';

const mapStateToProps = (state: RootState) => ({
  chartDayData: state.quotes.chartDataDay,
  chartData: state.quotes.chartData,
});

export default connect(
  mapStateToProps,
  null
)(Chart);
