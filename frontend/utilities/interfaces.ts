import rootReducer from '../reducers/rootReducer';

export type RootState = ReturnType<typeof rootReducer>;

export interface ChartDataTypes {
  readonly fiveDay: ChartDataDay[];
  readonly oneMonth: ChartData[];
  readonly oneYear: ChartData[];
  readonly fiveYear: ChartData[];
  readonly max: ChartData[];
}

// 1m, 1y, 5y, max
export interface ChartData {
  readonly date: string | null;
  readonly label: string | null;
  readonly close: number | null;
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
  readonly symbol: string;
  readonly name: string;
}

export interface CompanyInfoState {
  readonly description: string | null;
  readonly exchange: string | null;
  readonly sector: string | null;
  readonly website: string | null;
  readonly symbol: string | null;
  readonly companyName: string | null;
}

export interface News {
  readonly datetime: number | null;
  readonly headline: string | null;
  readonly source: string | null;
  readonly url: string | null;
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

export interface HeaderProps {
  latestPrice?: number;
  change?: number;
  changePercent?: number;
  exchange?: string;
  sector?: string;
  updateTime?: string;
  fetchStatusPrices?: FetchStatusElement;
  fetchStatusTags?: FetchStatusElement;
  fetchingStatus?: FetchStatusElement;
}

export interface FavoriteState {
  [k: string]: {
    symbol: string;
    change: number;
    latestPrice: number;
    changePercent: number;
  };
}

export interface FetchStatusState {
  [k: string]: {
    startFetching: boolean;
    doneFetching: boolean;
    fetchSuccess: string;
  };
}

export interface FetchStatusElement {
  startFetching: boolean;
  doneFetching: boolean;
  fetchSuccess: string;
}
