import rootReducer from '../reducers/rootReducer';
import {
  Actions,
  searchAction,
  fetchCompanyNames,
} from '../actions/quotesActions';
import { FetchStatusActions } from '../actions/fetchStatusActions';
import { UpdateActions } from '../actions/updateActions';
import { ActionCreatorsMapObject } from 'redux';

export type RootState = ReturnType<typeof rootReducer>;

type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;
export type ActionsTypes = ActionsUnion<typeof Actions>;
export type FetchStatusType = ActionsUnion<typeof FetchStatusActions>;
export type UpdateTypes = ActionsUnion<typeof UpdateActions>;

export type searchActionType = typeof searchAction;
export type fetchActionType = typeof fetchCompanyNames;

export interface ChartDataTypes {
  readonly fiveDay: ChartDataDay[];
  readonly oneMonth: ChartData[];
  readonly oneYear: ChartData[];
  readonly fiveYear: ChartData[];
  readonly max: ChartData[];
}

// 1m, 1y, 5y, max
export type ChartData = Pick<ChartDataDay, 'date' | 'label' | 'close'>;

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

export interface FavoriteState {
  [k: string]: {
    symbol: string | null;
    change: number | null;
    latestPrice: number | null;
    changePercent: number | null;
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
