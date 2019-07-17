import { QUOTES_ACTION_TYPES } from '../../constants/actionTypes';
import { QuotesActionsType } from '../../actions/actionsTypes';

const topPeersReducer = (state: string[] = [], action: QuotesActionsType) => {
  switch (action.type) {
    case QUOTES_ACTION_TYPES.SET_TOP_PEERS:
      return action.payload;
    default:
      return state;
  }
};

export default topPeersReducer;
