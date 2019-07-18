import { QUOTES_ACTION_TYPES } from '../../constants/actionTypes';
import { ChartData } from '../../utilities/interfaces';
import { SetChartDataDayAction } from '../../actions/quotesActions';

const chartDataDayReducer = (
  state: ChartData[] = [],
  action: SetChartDataDayAction
) => {
  switch (action.type) {
    case QUOTES_ACTION_TYPES.SET_CHART_DATA_DAY:
      return action.payload;

    default:
      return state;
  }
};

export default chartDataDayReducer;
