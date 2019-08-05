import {
  CompanyStatsState,
  ChartDataDay,
  ChartData,
  RootState,
} from './interfaces';
import { changeToPercent } from './numberFormatters';

export const selectCompanyStats = (companyStats: CompanyStatsState) => {
  return {
    companyStatsLeft: [
      {
        name: 'Previous Close',
        value: companyStats.previousClose ? companyStats.previousClose : `N/A`,
      },
      {
        name: 'Day Range',
        value: `${
          companyStats.high && companyStats.low
            ? `${companyStats.high} -  ${companyStats.low}`
            : `N/A`
        }`,
      },
      {
        name: 'Volume',
        value: companyStats.latestVolume
          ? companyStats.latestVolume.toLocaleString()
          : `N/A`,
      },
      {
        name: 'Market Cap',
        value: companyStats.marketCap
          ? companyStats.marketCap.toLocaleString()
          : companyStats.marketCap,
      },
      {
        name: 'P/E Ratio',
        value: companyStats.peRatio ? companyStats.peRatio : `N/A`,
      },
    ],
    companyStatsRight: [
      { name: 'Open', value: companyStats.open ? companyStats.open : `N/A` },
      {
        name: '52 Week Range',
        value: `${
          companyStats.week52High && companyStats.week52Low
            ? `${companyStats.week52High} - ${companyStats.week52Low}`
            : `N/A`
        }`,
      },
      {
        name: 'Total Avg. Volume',
        value: companyStats.avgTotalVolume
          ? companyStats.avgTotalVolume.toLocaleString()
          : `N/A`,
      },
      {
        name: 'Earnings Per Share',
        value: companyStats.actualEPS ? companyStats.actualEPS : `N/A`,
      },
      {
        name: 'Dividend & Yield',
        value: `${Number(
          changeToPercent(
            companyStats.dividendYield ? companyStats.dividendYield : 0
          )
        ).toFixed(2)}%`,
      },
    ],
  };
};

export const selectChartDataDay = (chartDataDay: ChartDataDay[]) => {
  return chartDataDay
    .filter(data => data.average)
    .map(data => ({ dateTime: data.label, price: data.average }));
};

const dateFormatter = (date: string | null) => {
  if (date === null) {
    return null;
  } else {
    return date.split('-')[1] + '-' + date.split('-')[2];
  }
};

export const selectChartDataFiveDay = (fiveDayDataArray: ChartDataDay[]) =>
  fiveDayDataArray
    .filter(data => data.average)
    .map(data => ({ dateTime: dateFormatter(data.date), price: data.average }))
    .reverse();

export const selectChartDataOneMonth = (oneMonthDataArray: ChartData[]) =>
  oneMonthDataArray
    .filter(data => data.close)
    .map(data => ({ dateTime: data.label, price: data.close }));

const yearDateFormatter = (date: string | null) => {
  if (date === null) {
    return null;
  }
  const dateYearNow = new Date().getFullYear();

  let dateYear = date.split(' ')[2];
  dateYear = dateYear ? dateYear.toString() : String(dateYearNow).slice(2);

  if (+dateYear > dateYearNow) {
    return '19' + dateYear;
  } else {
    return '20' + dateYear;
  }
};

export const selectChartDataYear = (yearDataArray: ChartData[]) =>
  yearDataArray
    .filter(data => data.close)
    .map(data => ({
      dateTime: yearDateFormatter(data.label),
      price: data.close,
    }));

export const selectFetchingStatus = (state: RootState, section: string) => {
  const status = {
    startFetching: state.fetchStatus[section].startFetching,
    doneFetching: state.fetchStatus[section].doneFetching,
    fetchSuccess: state.fetchStatus[section].fetchSuccess,
  };

  return status;
};
