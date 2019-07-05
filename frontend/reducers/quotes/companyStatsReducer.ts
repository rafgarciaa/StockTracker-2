import { QUOTES_ACTION_TYPES } from '../../constants/actionTypes';
import { ActionsTypes } from '../../actions/quotesActions';

interface CompanyStatsState {
  avgTotalVolume: number | null;
  change: number | null;
  changePercent: number | null;
  close: number | null;
  companyName: string | null;
  high: number | null;
  latestPrice: number | null;
  latestVolume: number | null;
  low: number | null;
  marketCap: number | null;
  open: number | null;
  peRatio: number | null;
  symbol: string | null;
  week52High: number | null;
  week52Low: number | null;
  dividendYield: number | null;
  actualEPS: number | null;
}

const INITIAL_STATE: CompanyStatsState = {
  avgTotalVolume: null,
  change: null,
  changePercent: null,
  close: null,
  companyName: null,
  high: null,
  latestPrice: null,
  latestVolume: null,
  low: null,
  marketCap: null,
  open: null,
  peRatio: null,
  symbol: null,
  week52High: null,
  week52Low: null,
  dividendYield: null,
  actualEPS: null,
};

const companyStatsReducer = (state = INITIAL_STATE, action: ActionsTypes) => {
  switch (action.type) {
    case QUOTES_ACTION_TYPES.SET_COMPANY_STATS:
      return Object.assign({}, state, action.payload);

    case QUOTES_ACTION_TYPES.SET_COMPANY_EPS:
      if (typeof action.payload === 'object') {
        return Object.assign({}, state, {
          actualEPS: action.payload.earnings[0].actualEPS,
        });
      } else {
        return Object.assign({}, state, { actualEPS: action.payload });
      }
    case QUOTES_ACTION_TYPES.SET_DIVIDENDYIELD:
      return Object.assign({}, state, { dividendYield: action.payload });
    default:
      return state;
  }
};

export default companyStatsReducer;