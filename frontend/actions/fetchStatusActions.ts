import { FETCH_STATUS_ACTION_TYPE } from '../constants/fetchStatusTypes';
import { ActionCreatorsMapObject } from 'redux';
import { createAsyncAction } from 'typesafe-actions';

type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;

export const FetchStatusActions = {
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

// export const FetchStatusActions = createAsyncAction(
//   FETCH_STATUS_ACTION_TYPE.SET_API_START,
//   FETCH_STATUS_ACTION_TYPE.SET_API_SUCCESS,
//   FETCH_STATUS_ACTION_TYPE.SET_API_ERROR
// )<string, string, string>();

export type FetchStatusType = ActionsUnion<typeof FetchStatusActions>;
