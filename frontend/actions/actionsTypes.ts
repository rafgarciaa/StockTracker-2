import { QuotesActions } from './quotesActions';
import { UpdateActionsType } from './updateActions';
import { FetchStatusActionsType } from './fetchStatusActions';
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

export type RootActions =
  | QuotesActionsType
  | UpdateActionsType
  | FetchStatusActionsType;
