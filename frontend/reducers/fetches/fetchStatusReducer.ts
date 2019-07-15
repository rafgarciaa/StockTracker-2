import { FETCH_STATUS_ACTION_TYPE } from '../../constants/fetchStatusTypes';
import { FetchStatusType } from '../../actions/fetchStatusActions';
import { FetchStatusState } from '../../utilities/interfaces';

const INITIAL_STATE: FetchStatusState = {
  companyInfo: {
    startFetching: false,
    doneFetching: false,
    fetchSuccess: '',
  },
  companyNews: {
    doneFetching: false,
    startFetching: false,
    fetchSuccess: '',
  },
  companyStats: {
    startFetching: false,
    doneFetching: false,
    fetchSuccess: '',
  },
  companyEPS: {
    startFetching: false,
    doneFetching: false,
    fetchSuccess: '',
  },
  dividendYield: {
    startFetching: false,
    doneFetching: false,
    fetchSuccess: '',
  },
  topPeers: {
    startFetching: false,
    doneFetching: false,
    fetchSuccess: '',
  },
  chartData: {
    startFetching: false,
    doneFetching: false,
    fetchSuccess: '',
  },
  favoritePrices: {
    startFetching: false,
    doneFetching: false,
    fetchSuccess: '',
  },
};

const fetchStatusReducer = (state = INITIAL_STATE, action: FetchStatusType) => {
  switch (action.type) {
    case FETCH_STATUS_ACTION_TYPE.SET_API_ERROR:
      return Object.assign({}, state, {
        [action.payload.section]: {
          startFetching: true,
          doneFetching: true,
          fetchSuccess: action.payload.message,
        },
      });
    case FETCH_STATUS_ACTION_TYPE.SET_API_START:
      return Object.assign({}, state, {
        [action.payload]: {
          startFetching: true,
          doneFetching: false,
          fetchSuccess: '',
        },
      });
    case FETCH_STATUS_ACTION_TYPE.SET_API_SUCCESS:
      return Object.assign({}, state, {
        [action.payload]: {
          startFetching: true,
          doneFetching: true,
          fetchSuccess: '',
        },
      });
    default:
      return state;
  }
};

export default fetchStatusReducer;
