import { QUOTES_ACTION_TYPES } from '../../constants/actionTypes';
import { CompanyNameState } from '../../utilities/interfaces';
import { SetCompanyNamesAction } from '../../actions/quotesActions';

const companyNamesReducer = (
  state: CompanyNameState[] = [],
  action: SetCompanyNamesAction
) => {
  switch (action.type) {
    case QUOTES_ACTION_TYPES.SET_COMPANY_NAMES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default companyNamesReducer;
