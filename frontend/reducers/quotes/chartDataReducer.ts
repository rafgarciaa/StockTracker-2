import { QUOTES_ACTION_TYPES } from '../../constants/actionTypes';
import { ChartDataTypes, ChartData } from '../../utilities/interfaces';
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
      const payload: {
        chartData: ChartData[];
        timeFrame: string;
      } = action.payload as any;

      const timeFrame: string = chartTimeFrameFormatter(payload.timeFrame);
      return { ...state, [timeFrame]: payload.chartData };
    default:
      return state;
  }
};

export default chartDataReducer;
