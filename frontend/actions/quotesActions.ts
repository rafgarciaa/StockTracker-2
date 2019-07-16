import { QUOTES_ACTION_TYPES } from '../constants/actionTypes';
import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { action } from 'typesafe-actions';

import {
  CompanyInfoState,
  News,
  CompanyStatsState,
  CompanyNameState,
  FavoriteElement,
  ChartDataDay,
  ChartData,
} from '../utilities/interfaces';

import {
  API_KEY,
  iexApiSandboxUrl,
  iexApiFreeUrl,
  Filters,
} from '../utilities/apiUtil';

import { FetchStatusActions } from '../actions/fetchStatusActions';
import APIError from '../utilities/apiErrorMessage';

import { UpdateActions } from '../actions/updateActions';
import { getCurrentDate } from '../utilities/getCurrentDate';

interface ExceptionEPS {
  earnings: [
    {
      actualEPS: number | null;
    }
  ];
}

export const Actions = {
  setCompanyInfo: (companyInfo: CompanyInfoState) =>
    action(QUOTES_ACTION_TYPES.SET_COMPANY_INFO, companyInfo),
  setCompanyNews: (companyNews: News[]) =>
    action(QUOTES_ACTION_TYPES.SET_COMPANY_NEWS, companyNews),
  setCompanyStats: (companyStats: CompanyStatsState) =>
    action(QUOTES_ACTION_TYPES.SET_COMPANY_STATS, companyStats),
  setCompanyEPS: (earningsPerShare: number | ExceptionEPS) =>
    action(QUOTES_ACTION_TYPES.SET_COMPANY_EPS, earningsPerShare),
  setDividendYield: ({ dividendYield }: { dividendYield: number }) =>
    action(QUOTES_ACTION_TYPES.SET_DIVIDENDYIELD, dividendYield),
  setTopPeers: (topPeers: string[]) =>
    action(QUOTES_ACTION_TYPES.SET_TOP_PEERS, topPeers),
  setChartDataDay: (chartData: ChartDataDay[]) =>
    action(QUOTES_ACTION_TYPES.SET_CHART_DATA_DAY, chartData),
  setCompanyNames: (companyNames: CompanyNameState[]) =>
    action(QUOTES_ACTION_TYPES.SET_COMPANY_NAMES, companyNames),
  setChartData: (chartData: ChartData[], timeFrame: string) =>
    action(QUOTES_ACTION_TYPES.SET_CHART_DATA, { chartData, timeFrame }),
  setFavorites: (favoritesData: FavoriteElement) =>
    action(QUOTES_ACTION_TYPES.SET_FAVORITES, favoritesData),
};

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
    Actions.setCompanyInfo,
    Filters.companyInfoFilters
  );

const fetchCompanyNews = (symbol: string) =>
  createThunkAction(
    'companyNews',
    'news/last/5',
    symbol,
    Actions.setCompanyNews,
    Filters.newsFilters
  );

const fetchCompanyStats = (symbol: string) =>
  createThunkAction(
    'companyStats',
    'quote',
    symbol,
    Actions.setCompanyStats,
    Filters.quoteFilters
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
    Filters.statsFilters
  );

const fetchTopPeers = (symbol: string) =>
  createThunkAction('topPeers', 'peers', symbol, Actions.setTopPeers);

const fetchChartDataDay = (symbol: string) =>
  createThunkAction(
    'chartData',
    'chart/1d',
    symbol,
    Actions.setChartDataDay,
    Filters.chartDataFilters
  );

const fetchChartData = (symbol: string, timeFrame: string) =>
  createThunkAction(
    'chartData',
    `chart/${timeFrame}`,
    symbol,
    (chartData: object[]) => Actions.setChartData(chartData, timeFrame),
    Filters.chartDataFilters
  );

const fetchFavoritePrices = (symbol: string) =>
  createThunkAction(
    'favoritePrices',
    'quote',
    symbol,
    Actions.setFavorites,
    Filters.favoritesQuoteFilters
  );

export const fetchCompanyNames = () => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const url = iexApiFreeUrl + '/ref-data/symbols/?filter=symbol,name';

    return fetch(url)
      .then(response => response.json())
      .then(payload => dispatch(Actions.setCompanyNames(payload)))
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
