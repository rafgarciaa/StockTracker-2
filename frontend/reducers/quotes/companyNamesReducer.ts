import { QUOTES_ACTION_TYPES } from '../../constants/actionTypes';
import { CompanyNameState } from '../../utilities/interfaces';
import { QuotesActionsType } from '../../actions/actionsTypes';

const companyNamesReducer = (
  state: CompanyNameState[] = [],
  action: QuotesActionsType
) => {
  switch (action.type) {
    case QUOTES_ACTION_TYPES.SET_COMPANY_NAMES:
      return action.payload;
    default:
      return state;
  }
};

export default companyNamesReducer;
