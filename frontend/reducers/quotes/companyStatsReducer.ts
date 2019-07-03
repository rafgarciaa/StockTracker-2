import { QUOTES_ACTION_TYPES } from '../../constants/actionTypes';
import { ActionsTypes } from '../../actions/quotesActions';

const defaultState = {
  actualEPS: null,
  dividendYield: null,
};

const companyStatsReducer = (state = defaultState, action: ActionsTypes) => {
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
