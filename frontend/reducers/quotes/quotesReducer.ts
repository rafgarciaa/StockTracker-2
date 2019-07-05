import { combineReducers } from 'redux';
import companyInfo from './companyInfoReducer';
import companyNews from './companyNewsReducer';
import companyStats from './companyStatsReducer';
import topPeers from './topPeersReducer';
import companyNames from './companyNamesReducer';

const quotesReducer = combineReducers({
  companyInfo,
  companyNews,
  companyStats,
  topPeers,
  companyNames,
});

export default quotesReducer;
