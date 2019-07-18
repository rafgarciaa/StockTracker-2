import { UPDATE_ACTION_TYPES } from '../../constants/updateTypes';
import { SetUpdateTimeAction } from '../../actions/updateActions';

const updateTimeReducer = (state: string = '', action: SetUpdateTimeAction) => {
  switch (action.type) {
    case UPDATE_ACTION_TYPES.SET_UPDATE_TIME:
      return action.payload;

    default:
      return state;
  }
};

export default updateTimeReducer;
