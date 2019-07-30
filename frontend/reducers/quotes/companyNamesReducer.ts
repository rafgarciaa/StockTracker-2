import { QUOTES_ACTION_TYPES } from '../../constants/actionTypes';
import { ActionsTypes } from '../../actions/quotesActions';
import { CompanyNameState } from '../../utilities/interfaces';

// Same comment as here :
// https://github.com/Vboivin/StockTracker-2/blob/master/frontend/components/statsInfoPeers/topPeersContainer.tsx

const companyNamesReducer = (
  state: CompanyNameState[] = [],
  action: ActionsTypes
) => {
  switch (action.type) {
    case QUOTES_ACTION_TYPES.SET_COMPANY_NAMES:
      return action.payload;
    default:
      return state;
  }
};

export default companyNamesReducer;
