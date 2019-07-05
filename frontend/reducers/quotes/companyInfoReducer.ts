import { QUOTES_ACTION_TYPES } from '../../constants/actionTypes';
import { ActionsTypes } from '../../actions/quotesActions';
import { CompanyInfoState } from '../../utilities/interfaces';

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

  switch (action.type) {
    case QUOTES_ACTION_TYPES.SET_COMPANY_INFO:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default companyInfoReducer;
