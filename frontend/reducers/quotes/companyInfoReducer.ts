import { QUOTES_ACTION_TYPES } from '../../constants/actionTypes';
import { CompanyInfoState } from '../../utilities/interfaces';
import { SetCompanyInfoAction } from '../../actions/quotesActions';
import { Reducer, AnyAction } from 'redux';

const INITIAL_STATE: CompanyInfoState = {
  description: null,
  exchange: null,
  sector: null,
  website: null,
  symbol: null,
  companyName: null,
};

const companyInfoReducer: Reducer<CompanyInfoState, SetCompanyInfoAction> = (
  state = INITIAL_STATE,
  action: SetCompanyInfoAction
) => {
  switch (action.type) {
    case QUOTES_ACTION_TYPES.SET_COMPANY_INFO:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default companyInfoReducer;
