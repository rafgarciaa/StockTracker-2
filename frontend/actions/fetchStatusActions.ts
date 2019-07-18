import { FETCH_STATUS_ACTION_TYPE } from '../constants/fetchStatusTypes';
import { createAction } from './actionsTypes';

export const FetchStatusActions = {
  setApiStart: (section: string) =>
    createAction(FETCH_STATUS_ACTION_TYPE.SET_API_START, section),
  setApiSuccess: (section: string) =>
    createAction(FETCH_STATUS_ACTION_TYPE.SET_API_SUCCESS, section),
  setApiError: ({ section, message }: { section: string; message: string }) =>
    createAction(FETCH_STATUS_ACTION_TYPE.SET_API_ERROR, { section, message }),
};
