import { FETCH_STATUS_ACTION_TYPE } from '../constants/fetchStatusTypes';

export interface SetErrorAction {
  type: string;
  payload: {
    section: string;
    message: string;
  };
}

interface SetStartAction {
  type: string;
  payload: string;
}

interface SetSuccessAction {
  type: string;
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
