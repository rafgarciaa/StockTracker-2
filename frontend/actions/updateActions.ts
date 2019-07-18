import { UPDATE_ACTION_TYPES } from '../constants/updateTypes';

export interface SetUpdateTimeAction {
  type: string;
  payload: string;
}

export function setUpdateTime(updateTime: string): SetUpdateTimeAction {
  return {
    type: UPDATE_ACTION_TYPES.SET_UPDATE_TIME,
    payload: updateTime,
  };
}

export type UpdateActionsType = SetUpdateTimeAction;
