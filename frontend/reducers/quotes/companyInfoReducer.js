import { SET_COMPANY_INFO } from '../../constants/actionTypes';

const companyInfoReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case SET_COMPANY_INFO:
      return Object.assign({}, state, action.companyInfo);

    default:
      return state;
  }
};

export default companyInfoReducer;
