import { FETCH_STATUS_ACTION_TYPE } from '../../constants/fetchStatusTypes';
import { FetchStatusState } from '../../utilities/interfaces';
import { FetchStatusActionsType } from '../../actions/fetchStatusActions';

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

const fetchStatusReducer = (
  state = INITIAL_STATE,
  action: FetchStatusActionsType
) => {
  switch (action.type) {
    case FETCH_STATUS_ACTION_TYPE.SET_API_ERROR:
      const payload: {
        section: string;
        message: string;
      } = action.payload as any;
      return {
        ...state,
        [payload.section]: {
          startFetching: true,
          doneFetching: true,
          fetchSuccess: payload.message,
        },
      };
    case FETCH_STATUS_ACTION_TYPE.SET_API_START:
      return {
        ...state,
        [action.payload as string]: {
          startFetching: true,
          doneFetching: false,
          fetchSuccess: '',
        },
      };
    case FETCH_STATUS_ACTION_TYPE.SET_API_SUCCESS:
      return {
        ...state,
        [action.payload as string]: {
          startFetching: true,
          doneFetching: true,
          fetchSuccess: '',
        },
      };
    default:
      return state;
  }
};

export default fetchStatusReducer;
