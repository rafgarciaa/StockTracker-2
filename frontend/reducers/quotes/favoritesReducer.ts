import { QUOTES_ACTION_TYPES } from '../../constants/actionTypes';
import { ActionsTypes } from '../../actions/quotesActions';
import { FavoriteState } from '../../utilities/interfaces';

const favoriteReducer = (state: FavoriteState[] = [], action: ActionsTypes) => {
  Object.freeze(state);

  switch (action.type) {
    case QUOTES_ACTION_TYPES.SET_FAVORITES:
      return Object.assign({}, state, {
        [action.payload.symbol]: action.payload,
      });
    default:
      return state;
  }
};

export default favoriteReducer;
