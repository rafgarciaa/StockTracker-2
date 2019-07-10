import { FETCH_STATUS_ACTION_TYPE } from '../constants/fetchStatusTypes';
import { ActionCreatorsMapObject } from 'redux';

type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;

export const ErrorActions = {
  setApiErrors: (section: string) => ({
    type: FETCH_STATUS_ACTION_TYPE.SET_API_ERROR,
    section,
  }),
  setApiStart: (section: string) => ({
    type: FETCH_STATUS_ACTION_TYPE.SET_API_START,
    section,
  }),
  setApiSuccess: (section: string) => ({
    type: FETCH_STATUS_ACTION_TYPE.SET_API_SUCCESS,
    section,
  }),
};

export type ErrorTypes = ActionsUnion<typeof ErrorActions>;
