import { FETCH_STATUS_ACTION_TYPE } from '../constants/fetchStatusTypes';
import { ActionCreatorsMapObject } from 'redux';
import { createAsyncAction } from 'typesafe-actions';

type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;

export const FetchStatusActions = createAsyncAction(
  FETCH_STATUS_ACTION_TYPE.SET_API_START,
  FETCH_STATUS_ACTION_TYPE.SET_API_SUCCESS,
  FETCH_STATUS_ACTION_TYPE.SET_API_ERROR
  // Could the types not be infered?
  // Just curious
)<string, string, { section: string; message: string }>();

export type FetchStatusType = ActionsUnion<typeof FetchStatusActions>;
