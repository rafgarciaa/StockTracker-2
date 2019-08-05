import { QUOTES_ACTION_TYPES } from '../../constants/actionTypes';
import { ActionsTypes } from '../../actions/quotesActions';

const topPeersReducer = (state: string[] = [], action: ActionsTypes) => {
  switch (action.type) {
    case QUOTES_ACTION_TYPES.SET_TOP_PEERS:
      return action.payload;
    default:
      return state;
  }
};

export default topPeersReducer;
