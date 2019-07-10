import { ERROR_ACTION_TYPE } from '../../constants/fetchStatusTypes';
import { ErrorTypes } from '../../actions/fetchStatusActions';

const fetchStatusReducer = (state: string = '', action: ErrorTypes) => {
  switch (action.type) {
    case ERROR_ACTION_TYPE.SET_API_ERROR:
      return action.message;

    default:
      return state;
  }
};

export default fetchStatusReducer;
