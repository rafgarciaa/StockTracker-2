import { FETCH_STATUS_ACTION_TYPE } from '../constants/fetchStatusTypes';

interface SetErrorAction {
  type: typeof FETCH_STATUS_ACTION_TYPE.SET_API_ERROR;
  payload: {
    section: string;
    message: string;
  };
}

interface SetStartAction {
  type: typeof FETCH_STATUS_ACTION_TYPE.SET_API_START;
  payload: string;
}

interface SetSuccessAction {
  type: typeof FETCH_STATUS_ACTION_TYPE.SET_API_SUCCESS;
  payload: string;
}

export function setApiError(section: string, message: string): SetErrorAction {
  return {
    type: FETCH_STATUS_ACTION_TYPE.SET_API_ERROR,
    payload: {
      section,
      message,
    },
  };
}

export function setApiStart(section: string): SetStartAction {
  return {
    type: FETCH_STATUS_ACTION_TYPE.SET_API_START,
    payload: section,
  };
}

export function setApiSuccess(section: string): SetSuccessAction {
  return {
    type: FETCH_STATUS_ACTION_TYPE.SET_API_SUCCESS,
    payload: section,
  };
}

export type FetchStatusActionsType =
  | SetErrorAction
  | SetStartAction
  | SetSuccessAction;
