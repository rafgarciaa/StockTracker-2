import { QUOTES_ACTION_TYPES } from '../../constants/actionTypes';
import { ActionsTypes } from '../../actions/quotesActions';

interface News {
  datetime: number;
  headline: string;
  source: string;
  url: string;
}

const companyNewsReducer = (state: News[] = [], action: ActionsTypes) => {
  Object.freeze(state);

  switch (action.type) {
    case QUOTES_ACTION_TYPES.SET_COMPANY_NEWS:
      return action.payload;
    default:
      return state;
  }
};

export default companyNewsReducer;
