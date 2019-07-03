import { QUOTES_ACTION_TYPES } from '../../constants/actionTypes';
import { ActionsTypes } from '../../actions/quotesActions';

export interface companyInfoState {}

const INITIAL_STATE: companyInfoState = {};

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
