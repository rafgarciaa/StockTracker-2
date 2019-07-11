import { ERROR_ACTION_TYPE } from '../constants/errorTypes';
import { ActionCreatorsMapObject } from 'redux';

type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;

export const ErrorActions = {
  setApiErrors: (message: string) => ({
    type: ERROR_ACTION_TYPE.SET_API_ERROR,
    message,
  }),
};

export type ErrorTypes = ActionsUnion<typeof ErrorActions>;
