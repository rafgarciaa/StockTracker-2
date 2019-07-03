import { QUOTES_ACTION_TYPES } from '../../constants/actionTypes';
import { ActionsTypes } from '../../actions/quotesActions';

interface CompanyInfoState {
  description: string;
  exchange: string;
  sector: string;
  website: string;
  symbol: string;
  companyName: string;
}

const INITIAL_STATE: CompanyInfoState = {
  description: '',
  exchange: '',
  sector: '',
  website: '',
  symbol: '',
  companyName: '',
};

const companyInfoReducer = (state = INITIAL_STATE, action: ActionsTypes) => {
  Object.freeze(state);

  switch (action.payload) {
    case QUOTES_ACTION_TYPES.SET_COMPANY_INFO:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default companyInfoReducer;
