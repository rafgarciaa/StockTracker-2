import { combineReducers } from 'redux';
import companyInfo from './companyInfoReducer';
import companyNews from './companyNewsReducer';
import companyStats from './companyStatsReducer';
import topPeers from './topPeersReducer';
import companyNames from './companyNamesReducer';
import chartDataDay from './chartDataDayReducer';
import chartData from './chartDataReducer';

const quotesReducer = combineReducers({
  companyInfo,
  companyNews,
  companyStats,
  topPeers,
  chartDataDay,
  chartData,
  companyNames,
});

export default quotesReducer;
