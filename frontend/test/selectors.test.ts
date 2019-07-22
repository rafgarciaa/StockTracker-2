import { selectCompanyStats } from '../utilities/selectors';

test('Separate company stats in two columns', () => {
  const companyStats = {
    avgTotalVolume: 0,
    change: 0,
    changePercent: 0,
    close: 0,
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
        value: 0,
      },
      {
        name: 'Day Range',
        value: '0 - 0',
      },
      {
        name: 'Volume',
        value: 0,
      },
      {
        name: 'Market Cap',
        value: 0,
      },
      {
        name: 'P/E Ratio',
        value: 0,
      },
    ],
    companyStatsRight: [
      { name: 'Open', value: 0 },
      {
        name: '52 Week Range',
        value: '0 - 0',
      },
      {
        name: 'Total Avg. Volume',
        value: 0,
      },
      {
        name: 'Earnings Per Share',
        value: 0,
      },
      {
        name: 'Dividend & Yield',
        value: '0.00%',
      },
    ],
  };
  expect(selectCompanyStats(companyStats)).toEqual(expectedCompanyStats);
});
