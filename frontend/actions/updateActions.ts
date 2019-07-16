import { UPDATE_ACTION_TYPES } from '../constants/updateTypes';

export const UpdateActions = {
  setUpdateTime: (updateTime: string) => ({
    type: UPDATE_ACTION_TYPES.SET_UPDATE_TIME,
    updateTime,
  }),
};
