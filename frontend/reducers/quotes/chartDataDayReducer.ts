import { QUOTES_ACTION_TYPES } from '../../constants/actionTypes';
import { ActionsTypes } from '../../actions/quotesActions';
import { ChartDataDay } from '../../utilities/interfaces';

const chartDataDayReducer = (
  state: ChartDataDay[] = [],
  action: ActionsTypes
) => {
  Object.freeze(state);

  switch (action.type) {
    case QUOTES_ACTION_TYPES.SET_CHART_DATA_DAY:
      return action.payload;

    default:
      return state;
  }
};

export default chartDataDayReducer;
