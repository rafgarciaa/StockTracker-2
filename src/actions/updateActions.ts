import { UPDATE_ACTION_TYPES } from '../constants/updateTypes';
import { ActionCreatorsMapObject } from 'redux';

type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;

export const UpdateActions = {
  setUpdateTime: (updateTime: string) => ({
    type: UPDATE_ACTION_TYPES.SET_UPDATE_TIME,
    updateTime,
  }),
};

export type UpdateTypes = ActionsUnion<typeof UpdateActions>;
