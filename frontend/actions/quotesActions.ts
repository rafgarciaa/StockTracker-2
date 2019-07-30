import { QUOTES_ACTION_TYPES } from '../constants/actionTypes';
import { ActionCreatorsMapObject, AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { action } from 'typesafe-actions';

import {
  CompanyInfoState,
  News,
  CompanyStatsState,
  CompanyNameState,
  FavoriteElement,
} from '../utilities/interfaces';

// you should remove any unused imports
import {
  API_KEY,
  iexApiSandboxUrl,
  iexApiCloudUrl,
  iexApiFreeUrl,
  Filters,
} from '../utilities/apiUtil';

import { FetchStatusActions } from '../actions/fetchStatusActions';
import APIError from '../utilities/apiErrorMessage';

import { UpdateActions } from '../actions/updateActions';
import { getCurrentDate } from '../utilities/getCurrentDate';

// it's a bit difficult to understand what's going on with this type
type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;

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
  setDividendYield: ({ dividendYield }: any) =>
    action(QUOTES_ACTION_TYPES.SET_DIVIDENDYIELD, dividendYield),
  setTopPeers: (topPeers: string[]) =>
    action(QUOTES_ACTION_TYPES.SET_TOP_PEERS, topPeers),
  setChartDataDay: (chartData: any) =>
    action(QUOTES_ACTION_TYPES.SET_CHART_DATA_DAY, chartData),
  setCompanyNames: (companyNames: CompanyNameState[]) =>
    action(QUOTES_ACTION_TYPES.SET_COMPANY_NAMES, companyNames),
  setChartData: (chartData: object[], timeFrame: string) =>
    action(QUOTES_ACTION_TYPES.SET_CHART_DATA, { chartData, timeFrame }),
  setFavorites: (favoritesData: FavoriteElement) =>
    action(QUOTES_ACTION_TYPES.SET_FAVORITES, favoritesData),
};

/* seems like you're overcomplicating getting your action types a bit.  Keeping things simple here would be
 * beneficial for other people who may look and work on your code, and also future you who might forget why you
 * made certain choices.
 */
export type ActionsTypes = ActionsUnion<typeof Actions>;

const makeUrl = (service: string, symbol: string, params = '') =>
  `${iexApiSandboxUrl}/stock/${symbol}/${service}/?token=${API_KEY}&${params}`;

const handleResponse = (response: {
  json: any;
  statusText: string;
  status: number;
}) => {
  // might be better to have the error codes in a separate file, use enums
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

        /* you're setting the updateTime to be the time that the action was dispatched but
         * but that doesn't accurately reflect what the updateTime should be, it should be the last time
         * the fetched information was updated, not the last time you searched for the information
         */
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

// you're code might look a bit cleaner if you extracted these fetch actions to another file
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

export const fetchCompanyStats = (symbol: string) =>
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

export type searchActionType = typeof searchAction;
export type fetchActionType = typeof fetchCompanyNames;
export type fetchStatsType = typeof fetchCompanyStats;
