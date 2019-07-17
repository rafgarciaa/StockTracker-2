import { QUOTES_ACTION_TYPES } from '../../constants/actionTypes';
import { ChartDataDay } from '../../utilities/interfaces';
import { QuotesActionsType } from '../../actions/actionsTypes';

const chartDataDayReducer = (
  state: ChartDataDay[] = [],
  action: QuotesActionsType
) => {
  switch (action.type) {
    case QUOTES_ACTION_TYPES.SET_CHART_DATA_DAY:
      return action.payload;

    default:
      return state;
  }
};

export default chartDataDayReducer;
