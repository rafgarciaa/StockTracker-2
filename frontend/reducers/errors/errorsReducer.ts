import { ERROR_ACTION_TYPE } from '../../constants/errorTypes';
import { ErrorTypes } from '../../actions/errorActions';

const errorsReducer = (state: string = '', action: ErrorTypes) => {
  switch (action.type) {
    case ERROR_ACTION_TYPE.SET_API_ERROR:
      return action.message;

    default:
      return state;
  }
};

export default errorsReducer;
