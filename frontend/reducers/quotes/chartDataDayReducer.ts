import { QUOTES_ACTION_TYPES } from '../../constants/actionTypes';
import { ChartDataDay, ActionsTypes } from '../../utilities/interfaces';

const chartDataDayReducer = (
  state: ChartDataDay[] = [],
  action: ActionsTypes
) => {
  switch (action.type) {
    case QUOTES_ACTION_TYPES.SET_CHART_DATA_DAY:
      return action.payload;

    default:
      return state;
  }
};

export default chartDataDayReducer;
