import { QUOTES_ACTION_TYPES } from '../constants/actionTypes';
import { ActionCreatorsMapObject, AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import {
  CompanyInfoState,
  News,
  CompanyStatsState,
  CompanyName,
} from '../utilities/interfaces';
import {
  API_KEY,
  iexApiSandboxUrl,
  iexApiFreeUrl,
  companyInfoFilters,
  newsFilters,
  quoteFilters,
  statsFilters,
} from '../utilities/apiUtil';

export interface Action<T, P> {
  type: T;
  payload: P;
}

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
  setCompanyNames: (companyNames: CompanyName[]) =>
    createAction(QUOTES_ACTION_TYPES.SET_COMPANY_NAMES, companyNames),
};

export type ActionsTypes = ActionsUnion<typeof Actions>;

const makeUrl = (service: string, symbol: string, params = '') =>
  `${iexApiSandboxUrl}/stock/${symbol}/${service}/?token=${API_KEY}&${params}`;

const createThunkAction = (
  service: string,
  symbol: string,
  success: any,
  params?: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const url = makeUrl(service, symbol, params);

    return fetch(url)
      .then(response => response.json())
      .then(payload => dispatch(success(payload)), error => console.log(error));
  };
};

const fetchCompanyInfo = (symbol: string) =>
  createThunkAction(
    'company',
    symbol,
    Actions.setCompanyInfo,
    companyInfoFilters
  );

const fetchCompanyNews = (symbol: string) =>
  createThunkAction('news/last/5', symbol, Actions.setCompanyNews, newsFilters);

const fetchCompanyStats = (symbol: string) =>
  createThunkAction('quote', symbol, Actions.setCompanyStats, quoteFilters);

const fetchCompanyEPS = (symbol: string) =>
  createThunkAction('earnings/1/actualEPS', symbol, Actions.setCompanyEPS);

const fetchDividendYield = (symbol: string) =>
  createThunkAction('stats', symbol, Actions.setDividendYield, statsFilters);

const fetchTopPeers = (symbol: string) =>
  createThunkAction('peers', symbol, Actions.setTopPeers);

const fetchChartDataDay = (symbol: string) =>
  createThunkAction('chart/1d', symbol, Actions.setChartDataDay);

export const fetchCompanyNames = () => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const url = iexApiFreeUrl + '/ref-data/symbols/?filter=symbol,name';

    return fetch(url)
      .then(response => response.json())
      .then(
        payload => dispatch(Actions.setCompanyNames(payload)),
        error => console.log(error)
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
};

export type searchActionType = typeof searchAction;
export type fetchActionType = typeof fetchCompanyNames;
