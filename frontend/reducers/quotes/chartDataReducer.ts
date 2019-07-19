import { QUOTES_ACTION_TYPES } from '../../constants/actionTypes';
import { ChartDataTypes, ChartData } from '../../utilities/interfaces';
import { chartTimeFrameFormatter } from '../../utilities/chartTimeFrameFormatter';
import { SetChartDataAction } from '../../actions/quotesActions';

const INITIAL_STATE: ChartDataTypes = {
  fiveDay: [],
  oneMonth: [],
  oneYear: [],
  fiveYear: [],
  max: [],
};

const chartDataReducer = (
  state = INITIAL_STATE,
  action: SetChartDataAction
) => {
  switch (action.type) {
    case QUOTES_ACTION_TYPES.SET_CHART_DATA:
      if (action.payload) {
        const timeFrame: string = chartTimeFrameFormatter(
          action.payload.timeFrame
        );
        return { ...state, [timeFrame]: action.payload.chartData };
      }
    default:
      return state;
  }
};

export default chartDataReducer;
