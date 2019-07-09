import { CompanyStatsState } from './interfaces';

export const selectCompanyStats = (companyStats: CompanyStatsState) => {
  return {
    companyStatsLeft: [
      { name: 'Previous Close', value: companyStats.close },
      { name: 'Day Range', value: [companyStats.high, companyStats.low] },
      { name: 'Volume', value: companyStats.latestVolume },
      { name: 'Market Cap', value: companyStats.marketCap },
      { name: 'P/E Ratio', value: companyStats.peRatio },
    ],
    companyStatsRight: [
      { name: 'Open', value: companyStats.open },
      {
        name: '52 Week Range',
        value: [companyStats.week52High, companyStats.week52Low],
      },
      { name: 'Total Avg. Volume', value: companyStats.avgTotalVolume },
      { name: 'Earnings Per Share', value: companyStats.actualEPS },
      { name: 'Dividend & Yield', value: companyStats.dividendYield },
    ],
  };
};
