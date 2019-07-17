import { UPDATE_ACTION_TYPES } from '../constants/updateTypes';
import { createAction } from './actionsTypes';

export const UpdateActions = {
  setUpdateTime: (updateTime: string) =>
    createAction(UPDATE_ACTION_TYPES.SET_UPDATE_TIME, updateTime),
};
