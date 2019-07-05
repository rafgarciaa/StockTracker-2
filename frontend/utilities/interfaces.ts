export interface CompanyName {
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
