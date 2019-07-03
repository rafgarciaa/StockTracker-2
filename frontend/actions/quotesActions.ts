import { QUOTES_ACTION_TYPES } from '../constants/actionTypes';

import {
  API_KEY,
  iexApiSandboxUrl,
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

type FunctionType = (...args: any[]) => any;
type ActionCreatorsMapObject = { [actionCreator: string]: FunctionType };
type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;

export const Actions = {
  setCompanyInfo: (companyInfo: any) =>
    createAction(QUOTES_ACTION_TYPES.SET_COMPANY_INFO, companyInfo),
  setCompanyNews: (companyNews: any) =>
    createAction(QUOTES_ACTION_TYPES.SET_COMPANY_NEWS, companyNews),
  setCompanyStats: (companyStats: any) =>
    createAction(QUOTES_ACTION_TYPES.SET_COMPANY_STATS, companyStats),
  setCompanyEPS: (earningsPerShare: number) =>
    createAction(QUOTES_ACTION_TYPES.SET_COMPANY_EPS, earningsPerShare),
  setDividendYield: ({ dividendYield }: any) =>
    createAction(QUOTES_ACTION_TYPES.SET_DIVIDENDYIELD, dividendYield),
  setTopPeers: (topPeers: string[]) =>
    createAction(QUOTES_ACTION_TYPES.SET_TOP_PEERS, topPeers),
  setChartDataDay: (chartData: any) =>
    createAction(QUOTES_ACTION_TYPES.SET_CHART_DATA_DAY, chartData),
};

export type ActionsTypes = ActionsUnion<typeof Actions>;

const makeUrl = (service, symbol, params = '') =>
  `${iexApiSandboxUrl}/stock/${symbol}/${service}/?token=${API_KEY}&${params}`;

const createThunkAction = (service, symbol, success, params) => {
  return dispatch => {
    const url = makeUrl(service, symbol, params);

    return fetch(url)
      .then(response => response.json())
      .then(payload => dispatch(success(payload)), error => console.log(error));
  };
};

const fetchCompanyInfo = (symbol: string) =>
  createThunkAction('company', symbol, setCompanyInfo, companyInfoFilters);

const fetchCompanyNews = (symbol: string) =>
  createThunkAction('news/last/5', symbol, setCompanyNews, newsFilters);

const fetchCompanyStats = (symbol: string) =>
  createThunkAction('quote', symbol, setCompanyStats, quoteFilters);

const fetchCompanyEPS = (symbol: string) =>
  createThunkAction('earnings/1/actualEPS', symbol, setCompanyEPS);

const fetchDividendYield = (symbol: string) =>
  createThunkAction('stats', symbol, setDividendYield, statsFilters);

const fetchTopPeers = (symbol: string) =>
  createThunkAction('peers', symbol, setTopPeers);

export const searchAction = (symbol: string) => dispatch => {
  dispatch(fetchCompanyInfo(symbol));
  dispatch(fetchCompanyNews(symbol));
  dispatch(fetchCompanyStats(symbol));
  dispatch(fetchCompanyEPS(symbol));
  dispatch(fetchDividendYield(symbol));
  dispatch(fetchTopPeers(symbol));
};
