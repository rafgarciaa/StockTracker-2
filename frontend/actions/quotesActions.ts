import { QUOTES_ACTION_TYPES } from '../constants/actionTypes';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootActions } from './actionsTypes';
import { handleResponse } from './actionsTypes';
import { setApiError, setApiStart, setApiSuccess } from './fetchStatusActions';
import { setUpdateTime } from './updateActions';

import {
  CompanyInfoState,
  News,
  CompanyStatsState,
  CompanyNameState,
  FavoriteElement,
  ChartData,
  RootState,
  ExceptionEPS,
} from '../utilities/interfaces';

import {
  API_KEY,
  iexApiSandboxUrl,
  iexApiFreeUrl,
  Filters,
} from '../utilities/apiUtil';

import { getCurrentDate } from '../utilities/getCurrentDate';

export interface SetCompanyInfoAction {
  type: string;
  payload: CompanyInfoState;
}

export interface SetCompanyNewsAction {
  type: string;
  payload: News[];
}

export interface SetCompanyStatsAction {
  type: string;
  payload: CompanyStatsState;
}

export interface SetCompanyEPSAction {
  type: string;
  payload: number | ExceptionEPS;
}

export interface SetDividendYieldAction {
  type: string;
  payload: {
    dividendYield: number;
  };
}

export interface SetTopPeersAction {
  type: string;
  payload: string[];
}

export interface SetChartDataDayAction {
  type: string;
  payload: ChartData[];
}

export interface SetChartDataAction {
  type: string;
  payload: {
    chartData: ChartData[];
    timeFrame: string;
  };
}

export interface SetCompanyNamesAction {
  type: string;
  payload: CompanyNameState[];
}

export interface SetFavoritesAction {
  type: string;
  payload: FavoriteElement;
}

function setCompanyInfo(companyInfo: CompanyInfoState): SetCompanyInfoAction {
  return {
    type: QUOTES_ACTION_TYPES.SET_COMPANY_INFO,
    payload: companyInfo,
  };
}

function setCompanyNews(companyNews: News[]): SetCompanyNewsAction {
  return {
    type: QUOTES_ACTION_TYPES.SET_COMPANY_INFO,
    payload: companyNews,
  };
}

function setCompanyStats(
  companyStats: CompanyStatsState
): SetCompanyStatsAction {
  return {
    type: QUOTES_ACTION_TYPES.SET_COMPANY_STATS,
    payload: companyStats,
  };
}

function setCompanyEPS(
  earningsPerShare: number | ExceptionEPS
): SetCompanyEPSAction {
  return {
    type: QUOTES_ACTION_TYPES.SET_COMPANY_EPS,
    payload: earningsPerShare,
  };
}

function setDividendYield({
  dividendYield,
}: {
  dividendYield: number;
}): SetDividendYieldAction {
  return {
    type: QUOTES_ACTION_TYPES.SET_DIVIDENDYIELD,
    payload: {
      dividendYield,
    },
  };
}

function setTopPeers(topPeers: string[]): SetTopPeersAction {
  return {
    type: QUOTES_ACTION_TYPES.SET_TOP_PEERS,
    payload: topPeers,
  };
}

function setChartDataDay(chartData: ChartData[]): SetChartDataDayAction {
  return {
    type: QUOTES_ACTION_TYPES.SET_CHART_DATA_DAY,
    payload: chartData,
  };
}

function setChartData({
  chartData,
  timeFrame,
}: {
  chartData: ChartData[];
  timeFrame: string;
}): SetChartDataAction {
  return {
    type: QUOTES_ACTION_TYPES.SET_CHART_DATA,
    payload: {
      chartData,
      timeFrame,
    },
  };
}

function setCompanyNames(
  companyNames: CompanyNameState[]
): SetCompanyNamesAction {
  return {
    type: QUOTES_ACTION_TYPES.SET_COMPANY_NAMES,
    payload: companyNames,
  };
}

function setFavorites(favoritesData: FavoriteElement): SetFavoritesAction {
  return {
    type: QUOTES_ACTION_TYPES.SET_FAVORITES,
    payload: favoritesData,
  };
}

export type QuotesActionsType =
  | SetCompanyInfoAction
  | SetCompanyNewsAction
  | SetCompanyStatsAction
  | SetCompanyEPSAction
  | SetDividendYieldAction
  | SetTopPeersAction
  | SetChartDataDayAction
  | SetChartDataAction
  | SetCompanyNamesAction
  | SetFavoritesAction;

const makeUrl = (service: string, symbol: string, params = '') =>
  `${iexApiSandboxUrl}/stock/${symbol}/${service}/?token=${API_KEY}&${params}`;

const createThunkAction = (
  section: string,
  service: string,
  symbol: string,
  success: any,
  params?: string
): ThunkAction<Promise<void>, RootState, {}, RootActions> => {
  return async (dispatch: ThunkDispatch<RootState, {}, RootActions>) => {
    const url = makeUrl(service, symbol, params);

    dispatch(setApiStart(section));
    fetch(url)
      .then(response => handleResponse(response))
      .then(payload => {
        dispatch(success(payload));
        dispatch(setApiSuccess(section));
        dispatch(setUpdateTime(getCurrentDate()));
      })
      .catch(event => dispatch(setApiError(section, event.toString())));
  };
};

const fetchCompanyInfo = (symbol: string) =>
  createThunkAction(
    'companyInfo',
    'company',
    symbol,
    setCompanyInfo,
    Filters.companyInfoFilters
  );

const fetchCompanyNews = (symbol: string) =>
  createThunkAction(
    'companyNews',
    'news/last/5',
    symbol,
    setCompanyNews,
    Filters.newsFilters
  );

const fetchCompanyStats = (symbol: string) =>
  createThunkAction(
    'companyStats',
    'quote',
    symbol,
    setCompanyStats,
    Filters.quoteFilters
  );

const fetchCompanyEPS = (symbol: string) =>
  createThunkAction(
    'companyEPS',
    'earnings/1/actualEPS',
    symbol,
    setCompanyEPS
  );

const fetchDividendYield = (symbol: string) =>
  createThunkAction(
    'dividendYield',
    'stats',
    symbol,
    setDividendYield,
    Filters.statsFilters
  );

const fetchTopPeers = (symbol: string) =>
  createThunkAction('topPeers', 'peers', symbol, setTopPeers);

const fetchChartDataDay = (symbol: string) =>
  createThunkAction(
    'chartData',
    'chart/1d',
    symbol,
    setChartDataDay,
    Filters.chartDataFilters
  );

const fetchChartData = (symbol: string, timeFrame: string) =>
  createThunkAction(
    'chartData',
    `chart/${timeFrame}`,
    symbol,
    (chartData: ChartData[]) => setChartData({ chartData, timeFrame }),
    Filters.chartDataFilters
  );

const fetchFavoritePrices = (symbol: string) =>
  createThunkAction(
    'favoritePrices',
    'quote',
    symbol,
    setFavorites,
    Filters.favoritesQuoteFilters
  );

export const fetchCompanyNames = () => {
  return async (dispatch: ThunkDispatch<RootState, {}, RootActions>) => {
    const url = iexApiFreeUrl + '/ref-data/symbols/?filter=symbol,name';

    return fetch(url)
      .then(response => response.json())
      .then(payload => dispatch(setCompanyNames(payload)))
      .catch(event => dispatch(setApiError('', event.statusText)));
  };
};

export const searchAction = (symbol: string) => (
  dispatch: ThunkDispatch<RootState, {}, RootActions>
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
