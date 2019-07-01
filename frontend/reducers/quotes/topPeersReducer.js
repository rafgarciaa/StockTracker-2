import { SET_TOP_PEERS } from '../../constants/actionTypes';

const topPeersReducer = (state = [], action) => {
  switch (action.type) {
    case SET_TOP_PEERS:
      return action.topPeers;

    default:
      return state;
  }
};

export default topPeersReducer;
