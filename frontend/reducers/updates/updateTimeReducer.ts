import { UPDATE_ACTION_TYPES } from '../../constants/updateTypes';
import { UpdateActionsType } from '../../actions/actionsTypes';

const updateTimeReducer = (state: string = '', action: UpdateActionsType) => {
  switch (action.type) {
    case UPDATE_ACTION_TYPES.SET_UPDATE_TIME:
      return action.payload;

    default:
      return state;
  }
};

export default updateTimeReducer;
