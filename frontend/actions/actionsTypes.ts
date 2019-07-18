import { QuotesActions } from './quotesActions';
import { UpdateActions } from './updateActions';
import { FetchStatusActions } from './fetchStatusActions';
import { ActionCreatorsMapObject } from 'redux';

interface Action<P> {
  type: string;
  payload: P;
}

type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;

export function createAction<P>(type: string, payload: P): Action<P> {
  return { type, payload };
}

export type QuotesActionsType = ActionsUnion<typeof QuotesActions>;
export type UpdateActionsType = ActionsUnion<typeof UpdateActions>;
export type FetchStatusActionsType = ActionsUnion<typeof FetchStatusActions>;

export type RootActions =
  | QuotesActionsType
  | UpdateActionsType
  | FetchStatusActionsType;
