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
import { harcodedData } from '../components/footer/footerMarketContainer';

export type harcodedDataType = typeof harcodedData;

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
  readonly average: number | null;
  readonly close: number | null;
  readonly date: string | null;
  readonly label: string | null;
  readonly minute: string | null;

  // 5dm only
  readonly high?: number | null;
  readonly low?: number | null;
  readonly marketAverage?: number | null;
  readonly marketClose?: number | null;
  readonly marketHigh?: number | null;
  readonly marketLow?: number | null;
  readonly marketNotional?: number | null;
  readonly marketNumberOfTrades?: number | null;
  readonly marketOpen?: number | null;
  readonly marketVolume?: number | null;
  readonly notional?: number | null;
  readonly numberOfTrades?: number | null;
  readonly open?: number | null;
  readonly volume?: number | null;
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
  readonly name: string | null;
  readonly value: number | string | null;
}

export interface CompanyStatsProps {
  readonly companyStatsLeft: CompanyStat[];
  readonly companyStatsRight: CompanyStat[];
}

export interface CompanyStatsState {
  readonly avgTotalVolume: number | null;
  readonly change: number | null;
  readonly changePercent: number | null;
  readonly close: number | null;
  readonly companyName: string | null;
  readonly high: number | null;
  readonly latestPrice: number | null;
  readonly latestVolume: number | null;
  readonly low: number | null;
  readonly marketCap: number | null;
  readonly open: number | null;
  readonly peRatio: number | null;
  readonly symbol: string | null;
  readonly week52High: number | null;
  readonly week52Low: number | null;
  readonly dividendYield: number | null;
  readonly actualEPS: number | null;
}

export interface FavoriteState {
  [k: string]: FavoriteElement;
}

export interface FavoriteElement {
  symbol: string;
  change: number;
  latestPrice: number;
  changePercent: number;
}

export interface FetchStatusState {
  [k: string]: FetchStatusElement;
}

export interface FetchStatusElement {
  readonly startFetching: boolean;
  readonly doneFetching: boolean;
  readonly fetchSuccess: string;
}
