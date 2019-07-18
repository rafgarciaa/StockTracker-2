import { QUOTES_ACTION_TYPES } from '../../constants/actionTypes';
import { News } from '../../utilities/interfaces';
import { SetCompanyNewsAction } from '../../actions/quotesActions';

const companyNewsReducer = (
  state: News[] = [],
  action: SetCompanyNewsAction
) => {
  switch (action.type) {
    case QUOTES_ACTION_TYPES.SET_COMPANY_NEWS:
      return action.payload;
    default:
      return state;
  }
};

export default companyNewsReducer;
