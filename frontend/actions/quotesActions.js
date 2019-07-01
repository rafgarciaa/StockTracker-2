import * as actions from '../constants/actionTypes';
import * as IexApi from '../constants/apiEndpoints';
import {
  API_KEY,
  companyInfoFilters,
  newsFilters,
  quoteFilters,
  statsFilters,
} from '../util/apiUtil';

const setCompanyInfo = companyInfo => ({
  type: actions.SET_COMPANY_INFO,
  companyInfo,
});

const setCompanyNews = companyNews => ({
  type: actions.SET_COMPANY_NEWS,
  companyNews,
});

const setCompanyStats = companyStats => ({
  type: actions.SET_COMPANY_STATS,
  companyStats,
});

const setCompanyEPS = earningsPerShare => ({
  type: actions.SET_COMPANY_EPS,
  earningsPerShare,
});

const setDividendYield = ({ dividendYield }) => ({
  type: actions.SET_DIVIDENDYIELD,
  dividendYield,
});

const setTopPeers = topPeers => ({
  type: actions.SET_TOP_PEERS,
  topPeers,
});

const setChartDataDay = chartData => ({
  type: actions.SET_CHART_DATA_DAY,
  chartData,
});

const makeUrl = (service, symbol, params = '') =>
  `${
    IexApi.iexApiSandboxUrl
  }/stable/stock/${symbol}/${service}/?token=${API_KEY}&${params}`;

const createThunkAction = (service, symbol, success, params) => {
  return dispatch => {
    const url = makeUrl(service, symbol, params);

    return fetch(url)
      .then(response => response.json())
      .then(payload => dispatch(success(payload)), error => console.log(error));
  };
};

const fetchCompanyInfo = symbol =>
  createThunkAction('company', symbol, setCompanyInfo, companyInfoFilters);

const fetchCompanyNews = symbol =>
  createThunkAction('news/last/5', symbol, setCompanyNews, newsFilters);

const fetchCompanyStats = symbol =>
  createThunkAction('quote', symbol, setCompanyStats, quoteFilters);

const fetchCompanyEPS = symbol =>
  createThunkAction('earnings/1/actualEPS', symbol, setCompanyEPS);

const fetchDividendYield = symbol =>
  createThunkAction('stats', symbol, setDividendYield, statsFilters);

const fetchTopPeers = symbol => createThunkAction('peers', symbol, setTopPeers);

export const searchAction = symbol => dispatch => {
  dispatch(fetchCompanyInfo(symbol));
  dispatch(fetchCompanyNews(symbol));
  dispatch(fetchCompanyStats(symbol));
  dispatch(fetchCompanyEPS(symbol));
  dispatch(fetchDividendYield(symbol));
  dispatch(fetchTopPeers(symbol));
};
