import { QUOTES_ACTION_TYPES } from '../../constants/actionTypes';
import { ChartDataTypes } from '../../utilities/interfaces';
import { chartTimeFrameFormatter } from '../../utilities/chartTimeFrameFormatter';
import { QuotesActionsType } from '../../actions/actionsTypes';

const INITIAL_STATE: ChartDataTypes = {
  fiveDay: [],
  oneMonth: [],
  oneYear: [],
  fiveYear: [],
  max: [],
};

const chartDataReducer = (state = INITIAL_STATE, action: QuotesActionsType) => {
  switch (action.type) {
    case QUOTES_ACTION_TYPES.SET_CHART_DATA:
      const timeFrame: string = chartTimeFrameFormatter(
        action.payload.timeFrame
      );
      return { ...state, [timeFrame]: action.payload.chartData };

    default:
      return state;
  }
};

export default chartDataReducer;
