import { QuotesActionsType } from './quotesActions';
import { UpdateActionsType } from './updateActions';
import { FetchStatusActionsType } from './fetchStatusActions';
import APIError from '../utilities/apiErrorMessage';

export type RootActions =
  | QuotesActionsType
  | UpdateActionsType
  | FetchStatusActionsType;

export const handleResponse = (response: {
  json: any;
  statusText: string;
  status: number;
}) => {
  switch (response.status) {
    case 404:
      throw new APIError('Company Not Found', response.status);
    case 402:
      throw new APIError('API Key Limit Reached', response.status);
    case 400:
      throw new APIError('Invalid API key', response.status);
    case 200:
      return response.json();
    default:
      throw new APIError(response.statusText, response.status);
  }
};
