import { FETCH_STATUS_ACTION_TYPE } from '../../constants/fetchStatusTypes';
import { ErrorTypes } from '../../actions/fetchStatusActions';
import { FetchStatusState } from '../../utilities/interfaces';

const INITIAL_STATE: FetchStatusState = {
  companyInfo: {
    isFetching: false,
    fetchSuccess: undefined,
  },
  companyNews: {
    isFetching: false,
    fetchSuccess: undefined,
  },
  companyStats: {
    isFetching: false,
    fetchSuccess: undefined,
  },
  companyEPS: {
    isFetching: false,
    fetchSuccess: undefined,
  },
  dividendYield: {
    isFetching: false,
    fetchSuccess: undefined,
  },
  topPeers: {
    isFetching: false,
    fetchSuccess: undefined,
  },
  chartData: {
    isFetching: false,
    fetchSuccess: undefined,
  },
  favoritePrices: {
    isFetching: false,
    fetchSuccess: undefined,
  },
};

const fetchStatusReducer = (state = INITIAL_STATE, action: ErrorTypes) => {
  switch (action.type) {
    case FETCH_STATUS_ACTION_TYPE.SET_API_ERROR:
      return Object.assign({}, state, {
        [action.section]: { isFetching: false, fetchSuccess: false },
      });
    case FETCH_STATUS_ACTION_TYPE.SET_API_START:
      return Object.assign({}, state, {
        [action.section]: { isFetching: true },
      });
    case FETCH_STATUS_ACTION_TYPE.SET_API_SUCCESS:
      return Object.assign({}, state, {
        [action.section]: { isFetching: false, fetchSuccess: true },
      });
    default:
      return state;
  }
};

export default fetchStatusReducer;
