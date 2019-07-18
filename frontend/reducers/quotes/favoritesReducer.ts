import { QUOTES_ACTION_TYPES } from '../../constants/actionTypes';
import { ActionsTypes } from '../../actions/quotesActions';
import { FavoriteState } from '../../utilities/interfaces';

const favoriteReducer = (state: FavoriteState = {}, action: ActionsTypes) => {
  switch (action.type) {
    case QUOTES_ACTION_TYPES.SET_FAVORITES:
      return { ...state, [action.payload.symbol]: action.payload };
    default:
      return state;
  }
};

export default favoriteReducer;
