import { QUOTES_ACTION_TYPES } from '../../constants/actionTypes';
import { ActionsTypes } from '../../actions/quotesActions';
import { CompanyName } from '../../utilities/interfaces';

const companyNamesReducer = (
  state: CompanyName[] = [],
  action: ActionsTypes
) => {
  Object.freeze(state);

  switch (action.type) {
    case QUOTES_ACTION_TYPES.SET_COMPANY_NAMES:
      return action.payload;
    default:
      return state;
  }
};

export default companyNamesReducer;
