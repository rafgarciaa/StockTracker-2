export interface ChartDataTypes {
  fiveDay: ChartDataDay[];
  oneMonth: ChartData[];
  oneYear: ChartData[];
  fiveYear: ChartData[];
  max: ChartData[];
}

// 1m, 1y, 5y, max
export interface ChartData {
  date: string | null;
  label: string | null;
  close: number | null;
}

// 1d && 5dm
export interface ChartDataDay {
  // 1d
  average: number | null;
  close: number | null;
  date: string | null;
  label: string | null;
  minute: string | null;

  // 5dm only
  high?: number | null;
  low?: number | null;
  marketAverage?: number | null;
  marketClose?: number | null;
  marketHigh?: number | null;
  marketLow?: number | null;
  marketNotional?: number | null;
  marketNumberOfTrades?: number | null;
  marketOpen?: number | null;
  marketVolume?: number | null;
  notional?: number | null;
  numberOfTrades?: number | null;
  open?: number | null;
  volume?: number | null;
}

export interface CompanyNameState {
  symbol: string;
  name: string;
}

export interface CompanyInfoState {
  description: string | null;
  exchange: string | null;
  sector: string | null;
  website: string | null;
  symbol: string | null;
  companyName: string | null;
}

export interface News {
  datetime: number | null;
  headline: string | null;
  source: string | null;
  url: string | null;
}

export interface CompanyStat {
  name: string | null;
  value: number | string | null;
}

export interface CompanyStatsProps {
  companyStatsLeft: CompanyStat[];
  companyStatsRight: CompanyStat[];
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

export interface Action<T, P> {
  type: T;
  payload: P;
}

export interface RootState {
  quotes: {
    chartData: ChartDataTypes;
    chartDataDay: ChartDataDay[];
    companyInfo: CompanyInfoState;
    companyStats: CompanyStatsState;
    companyNews: News[];
    topPeers: string[];
    companyNames: CompanyNameState[];
    favorites: FavoriteState[];
  };
  errors: string;
  updateTime: string;
}

export interface HeaderProps {
  latestPrice?: number;
  change?: number;
  changePercent?: number;
  exchange?: string;
  sector?: string;
  updateTime?: string;
}

export interface FavoriteState {
  [k: string]: {
    symbol: string;
    change: number;
    latestPrice: number;
    changePercent: number;
  };
}
