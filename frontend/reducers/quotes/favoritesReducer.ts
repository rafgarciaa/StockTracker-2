import { QUOTES_ACTION_TYPES } from '../../constants/actionTypes';
import { FavoriteState } from '../../utilities/interfaces';
import { SetFavoritesAction } from '../../actions/quotesActions';
import { Reducer, AnyAction } from 'redux';

const favoriteReducer: Reducer<FavoriteState, AnyAction> = (
  state: FavoriteState = {},
  action: AnyAction
) => {
  switch (action.type) {
    case QUOTES_ACTION_TYPES.SET_FAVORITES:
      return {
        ...state,
        [action.payload.symbol]: action.payload,
      };
    default:
      return state;
  }
};

export default favoriteReducer;
