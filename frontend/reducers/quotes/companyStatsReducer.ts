import {
  SET_COMPANY_STATS,
  SET_COMPANY_EPS,
  SET_DIVIDENDYIELD,
} from '../../constants/actionTypes';

const defaultState = {
  actualEPS: null,
  dividendYield: null,
};

const companyStatsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_COMPANY_STATS:
      return Object.assign({}, state, action.companyStats);

    case SET_COMPANY_EPS:
      if (typeof action.earningsPerShare === 'object') {
        return Object.assign({}, state, {
          actualEPS: action.earningsPerShare.earnings[0].actualEPS,
        });
      } else {
        return Object.assign({}, state, { actualEPS: action.earningsPerShare });
      }

    case SET_DIVIDENDYIELD:
      return Object.assign({}, state, { dividendYield: action.dividendYield });

    default:
      return state;
  }
};

export default companyStatsReducer;
