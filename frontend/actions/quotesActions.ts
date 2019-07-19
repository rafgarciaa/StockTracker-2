import { QUOTES_ACTION_TYPES } from '../constants/actionTypes';
import { ActionCreatorsMapObject, AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import {
  CompanyInfoState,
  News,
  CompanyStatsState,
  CompanyNameState,
  FavoriteElement,
} from '../utilities/interfaces';

import {
  API_KEY,
  iexApiSandboxUrl,
  iexApiCloudUrl,
  iexApiFreeUrl,
  Filters,
} from '../utilities/apiUtil';

import { FetchStatusActions } from './fetchStatusActions';
import APIError from '../utilities/apiErrorMessage';

import { UpdateActions } from './updateActions';
import { getCurrentDate } from '../utilities/getCurrentDate';

type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;

interface ExceptionEPS {
  earnings: [
    {
      actualEPS: number | null;
    }
  ];
}

interface Action<P> {
  type: string;
  payload: P;
}

export function createAction<P>(type: string, payload: P): Action<P> {
  return { type, payload };
}

export const QuotesActions = {
  setCompanyInfo: (companyInfo: CompanyInfoState) =>
    createAction(QUOTES_ACTION_TYPES.SET_COMPANY_INFO, companyInfo),
  setCompanyNews: (companyNews: News[]) =>
    createAction(QUOTES_ACTION_TYPES.SET_COMPANY_NEWS, companyNews),
  setCompanyStats: (companyStats: CompanyStatsState) =>
    createAction(QUOTES_ACTION_TYPES.SET_COMPANY_STATS, companyStats),
  setCompanyEPS: (earningsPerShare: number | ExceptionEPS) =>
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
  setFavorites: (favoritesData: FavoriteElement) =>
    createAction(QUOTES_ACTION_TYPES.SET_FAVORITES, favoritesData),
};

export type ActionsTypes = ActionsUnion<typeof QuotesActions>;

const makeUrl = (service: string, symbol: string, params = '') =>
  `${iexApiSandboxUrl}/stock/${symbol}/${service}/?token=${API_KEY}&${params}`;

const handleResponse = (response: {
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

const createThunkAction = (
  section: string,
  service: string,
  symbol: string,
  success: any,
  params?: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const url = makeUrl(service, symbol, params);

    dispatch(FetchStatusActions.request(section));
    fetch(url)
      .then(response => handleResponse(response))
      .then(payload => {
        dispatch(success(payload));
        dispatch(FetchStatusActions.success(section));
        dispatch(UpdateActions.setUpdateTime(getCurrentDate()));
      })
      .catch(event =>
        dispatch(
          FetchStatusActions.failure({
            section,
            message: event.toString(),
          })
        )
      );
  };
};

const fetchCompanyInfo = (symbol: string) =>
  createThunkAction(
    'companyInfo',
    'company',
    symbol,
    QuotesActions.setCompanyInfo,
    Filters.companyInfoFilters
  );

const fetchCompanyNews = (symbol: string) =>
  createThunkAction(
    'companyNews',
    'news/last/5',
    symbol,
    QuotesActions.setCompanyNews,
    Filters.newsFilters
  );

export const fetchCompanyStats = (symbol: string) =>
  createThunkAction(
    'companyStats',
    'quote',
    symbol,
    QuotesActions.setCompanyStats,
    Filters.quoteFilters
  );

const fetchCompanyEPS = (symbol: string) =>
  createThunkAction(
    'companyEPS',
    'earnings/1/actualEPS',
    symbol,
    QuotesActions.setCompanyEPS
  );

const fetchDividendYield = (symbol: string) =>
  createThunkAction(
    'dividendYield',
    'stats',
    symbol,
    QuotesActions.setDividendYield,
    Filters.statsFilters
  );

const fetchTopPeers = (symbol: string) =>
  createThunkAction('topPeers', 'peers', symbol, QuotesActions.setTopPeers);

const fetchChartDataDay = (symbol: string) =>
  createThunkAction(
    'chartData',
    'chart/1d',
    symbol,
    QuotesActions.setChartDataDay,
    Filters.chartDataFilters
  );

const fetchChartData = (symbol: string, timeFrame: string) =>
  createThunkAction(
    'chartData',
    `chart/${timeFrame}`,
    symbol,
    (chartData: object[]) => QuotesActions.setChartData(chartData, timeFrame),
    Filters.chartDataFilters
  );

const fetchFavoritePrices = (symbol: string) =>
  createThunkAction(
    'favoritePrices',
    'quote',
    symbol,
    QuotesActions.setFavorites,
    Filters.favoritesQuoteFilters
  );

export const fetchCompanyNames = () => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const url = iexApiFreeUrl + '/ref-data/symbols/?filter=symbol,name';

    return fetch(url)
      .then(response => response.json())
      .then(payload => dispatch(QuotesActions.setCompanyNames(payload)))
      .catch(event =>
        dispatch(
          FetchStatusActions.failure({
            section: '',
            message: event.statusText,
          })
        )
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
export type fetchStatsType = typeof fetchCompanyStats;
