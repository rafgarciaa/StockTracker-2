import { QUOTES_ACTION_TYPES } from '../../constants/actionTypes';
import { FavoriteState } from '../../utilities/interfaces';
import { SetFavoritesAction } from '../../actions/quotesActions';
import { Reducer, AnyAction } from 'redux';

export const REDUCERS = {
  [QUOTES_ACTION_TYPES.SET_FAVORITES]: setFavoritesReducer,
};

function setFavoritesReducer(state = {}, action: SetFavoritesAction) {
  return {
    ...state,
    [action.payload.symbol]: action.payload,
  };
}

const favoriteReducer: Reducer<FavoriteState, AnyAction> = (
  state: FavoriteState = {},
  action: AnyAction
) => {
  const innerReducer = REDUCERS[action.type];

  if (innerReducer) {
    return innerReducer(state, action);
  }

  return state;
};

export default favoriteReducer;
