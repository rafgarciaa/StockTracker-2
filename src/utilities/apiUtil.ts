// export const API_KEY = process.env.API_TOKEN;
export const API_KEY = process.env.API_TEST_TOKEN;
export const iexApiSandboxUrl = process.env.TEST_API_ENDPOINT;
export const iexApiFreeUrl = process.env.FREE_API_ENDPOINT;
export const iexApiCloudUrl = process.env.PAID_API_ENDPOINT;

export enum Filters {
  newsFilters = 'filter=datetime,headline,url,source',
  quoteFilters = 'filter=symbol,companyName,open,previousClose,high,low,latestPrice,latestVolume,avgTotalVolume,marketCap,peRatio,week52High,week52Low,change,changePercent',
  favoritesQuoteFilters = 'filter=symbol,latestPrice,change,changePercent',
  statsFilters = 'filter=dividendYield',
  companyInfoFilters = 'filter=description,exchange,sector,website,symbol,companyName',
  chartDataFilters = 'filter=date,minute,label,close,average',
}
