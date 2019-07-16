import { QUOTES_ACTION_TYPES } from '../../constants/actionTypes';
import { FavoriteState, ActionsTypes } from '../../utilities/interfaces';

const favoriteReducer = (state: FavoriteState = {}, action: ActionsTypes) => {
  Object.freeze(state);

  switch (action.type) {
    case QUOTES_ACTION_TYPES.SET_FAVORITES:
      return { ...state, [action.payload.symbol]: action.payload };
    default:
      return state;
  }
};

export default favoriteReducer;
