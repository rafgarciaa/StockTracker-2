import { QUOTES_ACTION_TYPES } from '../../constants/actionTypes';
import { News, ActionsTypes } from '../../utilities/interfaces';

const companyNewsReducer = (state: News[] = [], action: ActionsTypes) => {
  switch (action.type) {
    case QUOTES_ACTION_TYPES.SET_COMPANY_NEWS:
      return action.payload;
    default:
      return state;
  }
};

export default companyNewsReducer;
