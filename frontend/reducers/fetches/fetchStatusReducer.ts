import { FETCH_STATUS_ACTION_TYPE } from '../../constants/fetchStatusTypes';
import { FetchStatusType } from '../../actions/fetchStatusActions';
import { FetchStatusState } from '../../utilities/interfaces';

const INITIAL_STATE: FetchStatusState = {
  companyInfo: {
    startFetching: false,
    doneFetching: false,
    fetchSuccess: false,
  },
  companyNews: {
    doneFetching: false,
    startFetching: false,
    fetchSuccess: false,
  },
  companyStats: {
    startFetching: false,
    doneFetching: false,
    fetchSuccess: false,
  },
  companyEPS: {
    startFetching: false,
    doneFetching: false,
    fetchSuccess: false,
  },
  dividendYield: {
    startFetching: false,
    doneFetching: false,
    fetchSuccess: false,
  },
  topPeers: {
    startFetching: false,
    doneFetching: false,
    fetchSuccess: false,
  },
  chartData: {
    startFetching: false,
    doneFetching: false,
    fetchSuccess: false,
  },
  favoritePrices: {
    startFetching: false,
    doneFetching: false,
    fetchSuccess: false,
  },
};

const fetchStatusReducer = (state = INITIAL_STATE, action: FetchStatusType) => {
  switch (action.type) {
    case FETCH_STATUS_ACTION_TYPE.SET_API_ERROR:
      return {
        ...state,
        [action.section]: {
          startFetching: true,
          doneFetching: true,
          fetchSuccess: false,
        },
      };
    case FETCH_STATUS_ACTION_TYPE.SET_API_START:
      return {
        ...state,
        [action.section]: {
          startFetching: true,
          doneFetching: false,
          fetchSuccess: false,
        },
      };
    case FETCH_STATUS_ACTION_TYPE.SET_API_SUCCESS:
      return {
        ...state,
        [action.section]: {
          startFetching: true,
          doneFetching: true,
          fetchSuccess: true,
        },
      };
    default:
      return state;
  }
};

export default fetchStatusReducer;
