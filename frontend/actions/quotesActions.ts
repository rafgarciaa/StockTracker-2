import { QUOTES_ACTION_TYPES } from '../constants/actionTypes';
import { ActionCreatorsMapObject, AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import {
  Action,
  CompanyInfoState,
  News,
  CompanyStatsState,
  CompanyNameState,
} from '../utilities/interfaces';

import {
  API_KEY,
  iexApiSandboxUrl,
  iexApiFreeUrl,
  companyInfoFilters,
  newsFilters,
  quoteFilters,
  statsFilters,
  favoritesQuoteFilters,
} from '../utilities/apiUtil';

import { FetchStatusActions } from '../actions/fetchStatusActions';
import APIError from '../utilities/apiErrorMessage';

import { UpdateActions } from '../actions/updateActions';
import { getCurrentDate } from '../utilities/getCurrentDate';

function createAction<T, P>(type: T, payload: P): Action<T, P> {
  return { type, payload };
}

type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;

export const Actions = {
  setCompanyInfo: (companyInfo: CompanyInfoState) =>
    createAction(QUOTES_ACTION_TYPES.SET_COMPANY_INFO, companyInfo),
  setCompanyNews: (companyNews: News[]) =>
    createAction(QUOTES_ACTION_TYPES.SET_COMPANY_NEWS, companyNews),
  setCompanyStats: (companyStats: CompanyStatsState) =>
    createAction(QUOTES_ACTION_TYPES.SET_COMPANY_STATS, companyStats),
  setCompanyEPS: (earningsPerShare: number) =>
    createAction(QUOTES_ACTION_TYPES.SET_COMPANY_EPS, earningsPerShare),
  setDividendYield: ({ dividendYield }: any) =>
    createAction(QUOTES_ACTION_TYPES.SET_DIVIDENDYIELD, dividendYield),
  setTopPeers: (topPeers: string[]) =>
    createAction(QUOTES_ACTION_TYPES.SET_TOP_PEERS, topPeers),
  setChartDataDay: (chartData: any) =>
    createAction(QUOTES_ACTION_TYPES.SET_CHART_DATA_DAY, chartData),
  setCompanyNames: (companyNames: CompanyNameState[]) =>
    createAction(QUOTES_ACTION_TYPES.SET_COMPANY_NAMES, companyNames),
  setChartData: (chartData: object[], timeFrame: string) =>
    createAction(QUOTES_ACTION_TYPES.SET_CHART_DATA, { chartData, timeFrame }),
  setFavorites: (favoritesData: any) =>
    createAction(QUOTES_ACTION_TYPES.SET_FAVORITES, favoritesData),
};

export type ActionsTypes = ActionsUnion<typeof Actions>;

const makeUrl = (service: string, symbol: string, params = '') =>
  `${iexApiSandboxUrl}/stock/${symbol}/${service}/?token=${API_KEY}&${params}`;

const handleResponse = (response: {
  json: any;
  statusText: string;
  status: number;
}) => {
  if (response.status === 404) {
    throw new APIError('Company Not Found', response.status);
  } else if (response.status === 402) {
    throw new APIError('API Key Limit Reached', response.status);
  } else if (response.status !== 200) {
    throw new APIError(response.statusText, response.status);
  }
  return response.json();
};

const createThunkAction = (
  section: string,
  service: string,
  symbol: string,
  success: any,
  params?: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const url = makeUrl(service, symbol, params);

    dispatch(FetchStatusActions.setApiStart(section));
    fetch(url)
      .then(response => handleResponse(response))
      .then(payload => {
        dispatch(success(payload));
        // dispatch(FetchStatusActions.setApiErrors(''));
        dispatch(FetchStatusActions.setApiSuccess(section));
        dispatch(UpdateActions.setUpdateTime(getCurrentDate()));
      })
      .catch(event =>
        // dispatch(FetchStatusActions.setApiErrors(event.toString()))
        dispatch(FetchStatusActions.setApiErrors(section))
      );
  };
};

const fetchCompanyInfo = (symbol: string) =>
  createThunkAction(
    'companyInfo',
    'company',
    symbol,
    Actions.setCompanyInfo,
    companyInfoFilters
  );

const fetchCompanyNews = (symbol: string) =>
  createThunkAction(
    'companyNews',
    'news/last/5',
    symbol,
    Actions.setCompanyNews,
    newsFilters
  );

const fetchCompanyStats = (symbol: string) =>
  createThunkAction(
    'companyStats',
    'quote',
    symbol,
    Actions.setCompanyStats,
    quoteFilters
  );

const fetchCompanyEPS = (symbol: string) =>
  createThunkAction(
    'companyEPS',
    'earnings/1/actualEPS',
    symbol,
    Actions.setCompanyEPS
  );

const fetchDividendYield = (symbol: string) =>
  createThunkAction(
    'dividendYield',
    'stats',
    symbol,
    Actions.setDividendYield,
    statsFilters
  );

const fetchTopPeers = (symbol: string) =>
  createThunkAction('topPeers', 'peers', symbol, Actions.setTopPeers);

const fetchChartDataDay = (symbol: string) =>
  createThunkAction('chartData', 'chart/1d', symbol, Actions.setChartDataDay);

const fetchChartData = (symbol: string, timeFrame: string) =>
  createThunkAction(
    'chartData',
    `chart/${timeFrame}`,
    symbol,
    (chartData: object[]) => Actions.setChartData(chartData, timeFrame)
  );

const fetchFavoritePrices = (symbol: string) =>
  createThunkAction(
    'favoritePrices',
    'quote',
    symbol,
    Actions.setFavorites,
    favoritesQuoteFilters
  );

export const fetchCompanyNames = () => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const url = iexApiFreeUrl + '/ref-data/symbols/?filter=symbol,name';

    return fetch(url)
      .then(response => response.json())
      .then(payload => dispatch(Actions.setCompanyNames(payload)))
      .catch(event =>
        dispatch(FetchStatusActions.setApiErrors(event.toString()))
      );
  };
};

export const searchAction = (symbol: string) => (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  dispatch(fetchCompanyInfo(symbol));
  dispatch(fetchCompanyNews(symbol));
  dispatch(fetchCompanyStats(symbol));
  dispatch(fetchCompanyEPS(symbol));
  dispatch(fetchDividendYield(symbol));
  dispatch(fetchTopPeers(symbol));
  dispatch(fetchChartDataDay(symbol));
  dispatch(fetchChartData(symbol, '5DM'));
  dispatch(fetchChartData(symbol, '1M'));
  dispatch(fetchChartData(symbol, '1Y'));
  dispatch(fetchChartData(symbol, '5Y'));
  dispatch(fetchChartData(symbol, 'MAX'));
  dispatch(fetchFavoritePrices('aapl'));
  dispatch(fetchFavoritePrices('msft'));
  dispatch(fetchFavoritePrices('goog'));
};

export type searchActionType = typeof searchAction;
export type fetchActionType = typeof fetchCompanyNames;
