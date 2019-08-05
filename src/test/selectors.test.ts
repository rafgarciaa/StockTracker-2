import { selectCompanyStats } from '../utilities/selectors';

test('Separate company stats in two columns', () => {
  const companyStats = {
    avgTotalVolume: 0,
    change: 0,
    changePercent: 0,
    previousClose: 0,
    companyName: 'test',
    high: 0,
    latestPrice: 0,
    latestVolume: 0,
    low: 0,
    marketCap: 0,
    open: 0,
    peRatio: 0,
    symbol: 'test',
    week52High: 0,
    week52Low: 0,
    dividendYield: 0,
    actualEPS: 0,
  };
  const expectedCompanyStats = {
    companyStatsLeft: [
      {
        name: 'Previous Close',
        value: 'N/A',
      },
      {
        name: 'Day Range',
        value: 'N/A',
      },
      {
        name: 'Volume',
        value: 'N/A',
      },
      {
        name: 'Market Cap',
        value: 0,
      },
      {
        name: 'P/E Ratio',
        value: 'N/A',
      },
    ],
    companyStatsRight: [
      { name: 'Open', value: 'N/A' },
      {
        name: '52 Week Range',
        value: 'N/A',
      },
      {
        name: 'Total Avg. Volume',
        value: 'N/A',
      },
      {
        name: 'Earnings Per Share',
        value: 'N/A',
      },
      {
        name: 'Dividend & Yield',
        value: '0.00%',
      },
    ],
  };
  expect(selectCompanyStats(companyStats)).toEqual(expectedCompanyStats);
});
