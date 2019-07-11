import { FETCH_STATUS_ACTION_TYPE } from '../../constants/fetchStatusTypes';
import { FetchStatusType } from '../../actions/fetchStatusActions';
import { FetchStatusState } from '../../utilities/interfaces';

const INITIAL_STATE: FetchStatusState = {
  companyInfo: {
    startFetching: false,
    doneFetching: false,
    fetchSuccess: null,
  },
  companyNews: {
    doneFetching: false,
    startFetching: false,
    fetchSuccess: null,
  },
  companyStats: {
    startFetching: false,
    doneFetching: false,
    fetchSuccess: null,
  },
  companyEPS: {
    startFetching: false,
    doneFetching: false,
    fetchSuccess: null,
  },
  dividendYield: {
    startFetching: false,
    doneFetching: false,
    fetchSuccess: null,
  },
  topPeers: {
    startFetching: false,
    doneFetching: false,
    fetchSuccess: null,
  },
  chartData: {
    startFetching: false,
    doneFetching: false,
    fetchSuccess: null,
  },
  favoritePrices: {
    startFetching: false,
    doneFetching: false,
    fetchSuccess: null,
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
          fetchSuccess: null,
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
