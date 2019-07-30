import { QUOTES_ACTION_TYPES } from '../../constants/actionTypes';
import { ActionsTypes } from '../../actions/quotesActions';
import { ChartDataDay } from '../../utilities/interfaces';

// Same comment as here : 
// https://github.com/Vboivin/StockTracker-2/blob/master/frontend/components/statsInfoPeers/topPeersContainer.tsx

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
