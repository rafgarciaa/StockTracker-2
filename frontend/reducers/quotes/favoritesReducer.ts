import { QUOTES_ACTION_TYPES } from '../../constants/actionTypes';
import { FavoriteState, FavoriteElement } from '../../utilities/interfaces';
import { QuotesActionsType } from '../../actions/actionsTypes';

const favoriteReducer = (
  state: FavoriteState = {},
  action: QuotesActionsType
) => {
  switch (action.type) {
    case QUOTES_ACTION_TYPES.SET_FAVORITES:
      const payload: { favoritesData: FavoriteElement } = action.payload as any;
      return {
        ...state,
        [payload.favoritesData.symbol]: payload.favoritesData,
      };
    default:
      return state;
  }
};

export default favoriteReducer;
