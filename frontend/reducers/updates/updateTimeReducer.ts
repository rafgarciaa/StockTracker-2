import { UPDATE_ACTION_TYPES } from '../../constants/updateTypes';
import { UpdateTypes } from '../../actions/updateActions';

// Same comment as here : 
// https://github.com/Vboivin/StockTracker-2/blob/master/frontend/components/statsInfoPeers/topPeersContainer.tsx

const updateTimeReducer = (state: string = '', action: UpdateTypes) => {
  switch (action.type) {
    case UPDATE_ACTION_TYPES.SET_UPDATE_TIME:
      return action.updateTime;

    default:
      return state;
  }
};

export default updateTimeReducer;
