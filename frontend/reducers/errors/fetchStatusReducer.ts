import { FETCH_STATUS_ACTION_TYPE } from '../../constants/fetchStatusTypes';
import { FetchStatusType } from '../../actions/fetchStatusActions';
import { FetchStatusState } from '../../utilities/interfaces';

const INITIAL_STATE: FetchStatusState = {
  companyInfo: {
    startFetching: false,
    doneFetching: false,
    fetchSuccess: undefined,
  },
  companyNews: {
    doneFetching: false,
    startFetching: false,
    fetchSuccess: undefined,
  },
  companyStats: {
    startFetching: false,
    doneFetching: false,
    fetchSuccess: undefined,
  },
  companyEPS: {
    startFetching: false,
    doneFetching: false,
    fetchSuccess: undefined,
  },
  dividendYield: {
    startFetching: false,
    doneFetching: false,
    fetchSuccess: undefined,
  },
  topPeers: {
    startFetching: false,
    doneFetching: false,
    fetchSuccess: undefined,
  },
  chartData: {
    startFetching: false,
    doneFetching: false,
    fetchSuccess: undefined,
  },
  favoritePrices: {
    startFetching: false,
    doneFetching: false,
    fetchSuccess: undefined,
  },
};

const fetchStatusReducer = (state = INITIAL_STATE, action: FetchStatusType) => {
  switch (action.type) {
    case FETCH_STATUS_ACTION_TYPE.SET_API_ERROR:
      return Object.assign({}, state, {
        [action.section]: {
          startFetching: false,
          doneFetching: true,
          fetchSuccess: false,
        },
      });
    case FETCH_STATUS_ACTION_TYPE.SET_API_START:
      return Object.assign({}, state, {
        [action.section]: {
          startFetching: true,
          doneFetching: false,
          fetchSuccess: undefined,
        },
      });
    case FETCH_STATUS_ACTION_TYPE.SET_API_SUCCESS:
      return Object.assign({}, state, {
        [action.section]: {
          startFetching: true,
          doneFetching: true,
          fetchSuccess: true,
        },
      });
    default:
      return state;
  }
};

export default fetchStatusReducer;
