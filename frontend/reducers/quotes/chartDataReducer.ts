import { QUOTES_ACTION_TYPES } from '../../constants/actionTypes';
import { ActionsTypes } from '../../actions/quotesActions';
import { ChartDataTypes } from '../../utilities/interfaces';
import { chartTimeFrameFormatter } from '../../utilities/chartTimeFrameFormatter';

const INITIAL_STATE: ChartDataTypes = {
  fiveDay: [],
  oneMonth: [],
  oneYear: [],
  fiveYear: [],
  max: [],
};

const chartDataReducer = (state = INITIAL_STATE, action: ActionsTypes) => {
  Object.freeze(state);

  switch (action.type) {
    case QUOTES_ACTION_TYPES.SET_CHART_DATA:
      const timeFrame: string = chartTimeFrameFormatter(
        action.payload.timeFrame
      );
      return Object.assign({}, state, {
        [timeFrame]: action.payload.chartData,
      });

    default:
      return state;
  }
};

export default chartDataReducer;
