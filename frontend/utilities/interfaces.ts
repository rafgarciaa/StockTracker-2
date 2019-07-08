export interface ChartDataTypes {
  fiveDay: ChartDataDay[];
  oneMonth: ChartData[];
  oneYear: ChartData[];
  fiveYear: ChartData[];
  max: ChartData[];
}

interface ChartData {
  date: number | null;
  label: number | null;
  close: number | null;
}

export interface ChartDataDay {
  // both in oneDay & fiveDay data
  date: string | null;
  minute: string | null;
  label: string | null;
  high: number | null;
  low: number | null;
  average: number | null;
  volume: number | null;
  notional: number | null;
  numberOfTrades: number | null;
  marketHigh: number | null;
  marketLow: number | null;
  marketAverage: number | null;
  marketVolume: number | null;
  marketNotional: number | null;
  marketNumberOfTrades: number | null;
  open: number | null;
  close: number | null;
  marketOpen: number | null;
  marketClose: number | null;

  // only in oneDay data
  changeOverTime?: number | null;
  marketChangeOverTime?: number | null;
}

export interface CompanyNameState {
  symbol: string;
  name: string;
}

export interface CompanyInfoState {
  description: string;
  exchange: string;
  sector: string;
  website: string;
  symbol: string;
  companyName: string;
}

export interface News {
  datetime: number;
  headline: string;
  source: string;
  url: string;
}

export interface CompanyStatsState {
  avgTotalVolume: number | null;
  change: number | null;
  changePercent: number | null;
  close: number | null;
  companyName: string | null;
  high: number | null;
  latestPrice: number | null;
  latestVolume: number | null;
  low: number | null;
  marketCap: number | null;
  open: number | null;
  peRatio: number | null;
  symbol: string | null;
  week52High: number | null;
  week52Low: number | null;
  dividendYield: number | null;
  actualEPS: number | null;
}

export interface RootState {
  quotes: {
    companyInfo: CompanyInfoState;
    companyStats: CompanyStatsState;
    companyNews: News[];
    topPeers: string[];
    companyNames: CompanyNameState[];
  };
}

export interface HeaderProps {
  latestPrice?: number;
  change?: number;
  changePercent?: number;
  exchange?: string;
  sector?: string;
  lastUpdate?: string;
}
