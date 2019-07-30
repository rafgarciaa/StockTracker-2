import { QUOTES_ACTION_TYPES } from '../../constants/actionTypes';
import { ActionsTypes } from '../../actions/quotesActions';
import { CompanyStatsState } from '../../utilities/interfaces';

// might be better to default to undefined or null values because a value of 0 doesn't accurately reflect an unattained value, (it could be possible to have a change of 0 for instance, which would be confusing if 0 also means no data)
const INITIAL_STATE: CompanyStatsState = {
  avgTotalVolume: 0,
  change: 0,
  changePercent: 0,
  previousClose: 0,
  companyName: '',
  high: 0,
  latestPrice: 0,
  latestVolume: 0,
  low: 0,
  marketCap: 0,
  open: 0,
  peRatio: 0,
  symbol: '',
  week52High: 0,
  week52Low: 0,
  dividendYield: 0,
  actualEPS: 0,
};

const companyStatsReducer = (state = INITIAL_STATE, action: ActionsTypes) => {
  switch (action.type) {
    case QUOTES_ACTION_TYPES.SET_COMPANY_STATS:
      return { ...state, ...action.payload };

    case QUOTES_ACTION_TYPES.SET_COMPANY_EPS:
      if (typeof action.payload === 'object') {
        return { ...state, actualEPS: action.payload.earnings[0].actualEPS };
      } else {
        return { ...state, actualEPS: action.payload };
      }
    case QUOTES_ACTION_TYPES.SET_DIVIDENDYIELD:
      return { ...state, dividendYield: action.payload };
    default:
      return state;
  }
};

export default companyStatsReducer;
