import { QUOTES_ACTION_TYPES } from '../../constants/actionTypes';
import { SetTopPeersAction } from '../../actions/quotesActions';

const topPeersReducer = (state: string[] = [], action: SetTopPeersAction) => {
  switch (action.type) {
    case QUOTES_ACTION_TYPES.SET_TOP_PEERS:
      return action.payload;
    default:
      return state;
  }
};

export default topPeersReducer;
