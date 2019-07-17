import { QUOTES_ACTION_TYPES } from '../../constants/actionTypes';
import { FavoriteState } from '../../utilities/interfaces';
import { QuotesActionsType } from '../../actions/actionsTypes';

const favoriteReducer = (
  state: FavoriteState = {},
  action: QuotesActionsType
) => {
  switch (action.type) {
    case QUOTES_ACTION_TYPES.SET_FAVORITES:
      return { ...state, [action.payload.symbol]: action.payload };
    default:
      return state;
  }
};

export default favoriteReducer;
