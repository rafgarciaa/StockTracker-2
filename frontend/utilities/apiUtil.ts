// export const API_KEY = process.env.API_TOKEN;
export const API_KEY = process.env.API_TEST_TOKEN;
export const iexApiSandboxUrl = process.env.TEST_API_ENDPOINT;
export const iexApiFreeUrl = process.env.FREE_API_ENDPOINT;
export const iexApiCloudUrl = process.env.PAID_API_ENDPOINT;

// filters
export const newsFilters = [
  'filter=datetime',
  'headline',
  'url',
  'source',
].join(',');

export const quoteFilters = [
  'filter=symbol',
  'companyName',
  'open',
  'close',
  'high',
  'low',
  'latestPrice',
  'latestVolume',
  'avgTotalVolume',
  'marketCap',
  'peRatio',
  'week52High',
  'week52Low',
  'change',
  'changePercent',
].join(',');

export const favoritesQuoteFilters = [
  'filter=symbol',
  'latestPrice',
  'change',
  'changePercent',
].join(',');

export const statsFilters = ['filter=dividendYield'].join(',');

export const companyInfoFilters = [
  'filter=description',
  'exchange',
  'sector',
  'website',
  'symbol',
  'companyName',
].join(',');

export const chartDataFilters = [
  'filter=date',
  'minute',
  'label',
  'close',
  'average',
].join(',');
